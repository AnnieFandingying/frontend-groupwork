from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from datetime import datetime


class ChatMessage(BaseModel):
    message: str
    use_rag: bool = True


class ChatHistoryItem(BaseModel):
    id: int
    role: str  # 'user' or 'assistant'
    message: str
    related_nodes: List[str] = []
    created_at: datetime
    
    class Config:
        from_attributes = True


class ChatHistoryResponse(BaseModel):
    data: List[ChatHistoryItem]


class SuccessResponse(BaseModel):
    success: bool = True
    data: Any
    message: str = "Success"


class StreamChatRequest(BaseModel):
    message: str
    history: List[Dict[str, str]] = []
    use_rag: bool = True


class StreamChunk(BaseModel):
    chunk: str
    finished: bool = False