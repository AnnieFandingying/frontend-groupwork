from typing import AsyncGenerator, List, Dict, Optional
from ..core.config import settings

# 动态导入 OpenAI 以避免初始化问题
client = None

def get_openai_client():
    global client
    if client is None and settings.OPENAI_API_KEY:
        try:
            from openai import OpenAI
            client = OpenAI(api_key=settings.OPENAI_API_KEY)
        except ImportError:
            print("OpenAI library not available")
        except Exception as e:
            print(f"Failed to initialize OpenAI client: {e}")
    return client

SYSTEM_PROMPT = """你是 Frontend Master 的 AI 助教，专门帮助学习者理解前端技术。
请用简洁、专业但易懂的语言回答问题。如果提供了相关知识点，请结合这些内容回答。
使用 Markdown 格式，并始终使用中文进行回答。

你擅长的领域包括:
- HTML5, CSS3, JavaScript, TypeScript
- Vue.js, React, Angular 等前端框架
- Webpack, Vite, Rollup 等构建工具
- TailwindCSS, Sass 等样式方案
- 前端性能优化和架构设计
- Web 安全和最佳实践

请提供清晰、实用的建议和代码示例。"""


class AIService:
    def __init__(self):
        self.client = None
    
    def get_client(self):
        if self.client is None:
            self.client = get_openai_client()
        return self.client
    
    async def chat_stream_with_context(
        self,
        message: str,
        context: str = "",
        history: Optional[List[Dict]] = None
    ) -> AsyncGenerator[str, None]:
        """
        带上下文的流式 AI 回复
        """
        client = self.get_client()
        if not client:
            yield "抱歉，AI 服务未配置 API Key，请联系管理员。"
            return
        
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        # 添加 RAG 上下文
        if context:
            messages.append({"role": "system", "content": context})
        
        # 添加历史对话
        if history:
            messages.extend(history)
        
        messages.append({"role": "user", "content": message})
        
        try:
            stream = client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=messages,
                stream=True,
                temperature=0.7,
                max_tokens=2000
            )
            
            for chunk in stream:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
                    
        except Exception as e:
            yield f"抱歉，AI 服务出现错误: {str(e)}"
    
    async def chat_completion(
        self,
        messages: List[Dict[str, str]]
    ) -> str:
        """
        完整返回 AI 回复 (非流式)
        """
        client = self.get_client()
        if not client:
            return "抱歉，AI 服务未配置 API Key，请联系管理员。"
        
        try:
            response = client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=messages,
                temperature=0.7,
                max_tokens=2000
            )
            
            return response.choices[0].message.content or "我无法生成回复。"
            
        except Exception as e:
            return f"抱歉，AI 服务出现错误: {str(e)}"


# Legacy functions for backward compatibility
async def chat_stream(message: str, history: list = None) -> AsyncGenerator[str, None]:
    """
    流式返回 AI 回复 (向后兼容)
    """
    ai_service = AIService()
    async for chunk in ai_service.chat_stream_with_context(message, "", history):
        yield chunk


async def chat_complete(message: str, history: list = None) -> str:
    """
    完整返回 AI 回复 (非流式)
    """
    openai_client = get_openai_client()
    if not openai_client:
        return "抱歉，AI 服务未配置 API Key，请联系管理员。"
    
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    if history:
        messages.extend(history)
    
    messages.append({"role": "user", "content": message})
    
    try:
        response = openai_client.chat.completions.create(
            model=settings.OPENAI_MODEL,
            messages=messages,
            temperature=0.7,
            max_tokens=2000
        )
        
        return response.choices[0].message.content or "我无法生成回复。"
        
    except Exception as e:
        return f"抱歉，AI 服务出现错误: {str(e)}"


# Singleton instance
ai_service = AIService()
