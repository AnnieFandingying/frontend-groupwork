from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from typing import List, Dict
import json

from ....core.database import get_db
from ....models.models import ChatHistory
from ....schemas.chat import StreamChatRequest, ChatHistoryResponse, SuccessResponse
from ....services.ai_service import ai_service
from ....services.rag_service import rag_service

router = APIRouter()


@router.post("/stream")
async def chat_stream_endpoint(request: StreamChatRequest):
    """
    流式聊天接口 - 与前端对接
    """
    user_message = request.message
    
    # Search for relevant knowledge nodes using RAG
    related_nodes = []
    context = ""
    
    if request.use_rag:
        try:
            relevant = rag_service.search_relevant_nodes(user_message, top_k=3)
            related_nodes = [node['node_id'] for node in relevant]
            context = rag_service.build_context_from_nodes(relevant)
            print(f"Found {len(relevant)} relevant knowledge nodes")
        except Exception as e:
            print(f"RAG search error: {e}")
    
    # Convert history to proper format
    formatted_history = []
    for msg in request.history:
        if isinstance(msg, dict) and "role" in msg and "content" in msg:
            formatted_history.append({
                "role": "user" if msg["role"] == "user" else "assistant",
                "content": msg["content"]
            })
    
    async def generate():
        try:
            # 发送开始标记
            yield f"data: {json.dumps({'chunk': '', 'related_nodes': related_nodes})}\n\n"
            
            # 流式获取AI回复
            async for chunk in ai_service.chat_stream_with_context(
                user_message,
                context,
                formatted_history
            ):
                # 以 SSE 格式返回
                yield f"data: {json.dumps({'chunk': chunk})}\n\n"
            
            # 发送结束标记
            yield f"data: {json.dumps({'chunk': '', 'finished': True})}\n\n"
            
        except Exception as e:
            error_msg = f"服务器错误: {str(e)}"
            yield f"data: {json.dumps({'chunk': error_msg, 'error': True})}\n\n"
    
    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "*"
        }
    )


@router.post("/message")
async def send_message(
    request: StreamChatRequest,
    user_id: int = 1,  # 暂时硬编码，后续可以从认证中获取
    db: Session = Depends(get_db)
):
    """Send a chat message and get AI response (非流式)"""
    user_message = request.message
    
    # Save user message
    user_chat = ChatHistory(
        user_id=user_id,
        role="user",
        message=user_message
    )
    db.add(user_chat)
    db.commit()
    
    # Search for relevant knowledge nodes using RAG
    related_nodes = []
    context = ""
    
    if request.use_rag:
        try:
            relevant = rag_service.search_relevant_nodes(user_message, top_k=3)
            related_nodes = [node['node_id'] for node in relevant]
            context = rag_service.build_context_from_nodes(relevant)
        except Exception as e:
            print(f"RAG search error: {e}")
    
    # Build messages for AI
    messages = [
        {"role": "system", "content": "你是 Frontend Master 的 AI 助教,专门帮助学习者理解前端技术。请用简洁、专业但易懂的语言回答问题。如果提供了相关知识点,请结合这些内容回答。"}
    ]
    
    if context:
        messages.append({"role": "system", "content": context})
    
    # Get recent chat history
    try:
        recent_chats = db.query(ChatHistory).filter(
            ChatHistory.user_id == user_id
        ).order_by(ChatHistory.created_at.desc()).limit(6).all()
        
        for chat in reversed(recent_chats):
            messages.append({
                "role": "user" if chat.role == "user" else "assistant",
                "content": chat.message
            })
    except:
        pass
    
    messages.append({"role": "user", "content": user_message})
    
    # Get AI response
    ai_response = await ai_service.chat_completion(messages)
    
    # Save AI response
    ai_chat = ChatHistory(
        user_id=user_id,
        role="assistant",
        message=ai_response,
        related_nodes=related_nodes
    )
    db.add(ai_chat)
    db.commit()
    
    return SuccessResponse(
        data={
            "message": ai_response,
            "related_nodes": related_nodes
        }
    )


@router.get("/history")
def get_chat_history(
    user_id: int = 1,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    """Get chat history for a user"""
    try:
        chats = db.query(ChatHistory).filter(
            ChatHistory.user_id == user_id
        ).order_by(ChatHistory.created_at.desc()).limit(limit).all()
        
        chat_list = []
        for chat in reversed(chats):
            chat_list.append({
                "id": chat.id,
                "role": chat.role,
                "message": chat.message,
                "related_nodes": chat.related_nodes or [],
                "created_at": chat.created_at
            })
        
        return SuccessResponse(data=chat_list)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/history")
def clear_chat_history(
    user_id: int = 1,
    db: Session = Depends(get_db)
):
    """Clear chat history for a user"""
    try:
        db.query(ChatHistory).filter(ChatHistory.user_id == user_id).delete()
        db.commit()
        
        return SuccessResponse(data={"message": "Chat history cleared"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))