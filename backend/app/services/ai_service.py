from functools import lru_cache
from typing import AsyncGenerator, List, Dict, Optional
from ..core.config import settings

try:  # Optional OpenAI import to keep backend boot resilient during local setup
    from openai import OpenAI, OpenAIError  # type: ignore
except ImportError:  # pragma: no cover - handled gracefully at runtime
    OpenAI = None  # type: ignore

    class OpenAIError(RuntimeError):  # type: ignore
        """Fallback error class when OpenAI SDK is unavailable."""

@lru_cache(maxsize=1)
def get_openai_client():
    if OpenAI is None:
        print("OpenAI library not available")
        return None

    if not settings.OPENAI_API_KEY:
        return None

    try:
        return OpenAI(
            api_key=settings.OPENAI_API_KEY,
            base_url=settings.OPENAI_API_BASE or None
        )
    except (OpenAIError, ValueError, RuntimeError) as exc:
        print(f"Failed to initialize OpenAI client: {exc}")
        return None

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
        openai_client = self.get_client()
        if not openai_client:
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
            stream = openai_client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=messages,
                stream=True,
                temperature=0.7,
                max_tokens=2000
            )
            
            for chunk in stream:
                choices = getattr(chunk, "choices", None)
                if not choices:
                    continue

                delta = getattr(choices[0], "delta", None)
                content = getattr(delta, "content", None)

                if content:
                    yield content
        except (OpenAIError, ValueError, RuntimeError) as exc:
            yield f"抱歉，AI 服务出现错误: {exc}"
    
    async def chat_completion(
        self,
        messages: List[Dict[str, str]]
    ) -> str:
        """
        完整返回 AI 回复 (非流式)
        """
        openai_client = self.get_client()
        if not openai_client:
            return "抱歉，AI 服务未配置 API Key，请联系管理员。"
        
        try:
            response = openai_client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=messages,
                temperature=0.7,
                max_tokens=2000
            )
            
            choices = getattr(response, "choices", []) or []
            if not choices:
                return "抱歉，AI 服务未返回有效结果。"

            message = getattr(choices[0], "message", None)
            content = getattr(message, "content", None)
            return content or "我无法生成回复。"
        except (OpenAIError, ValueError, RuntimeError) as exc:
            return f"抱歉，AI 服务出现错误: {exc}"


# Legacy functions for backward compatibility
async def chat_stream(message: str, history: list = None) -> AsyncGenerator[str, None]:
    """
    流式返回 AI 回复 (向后兼容)
    """
    service = AIService()
    async for chunk in service.chat_stream_with_context(message, "", history):
        yield chunk


async def chat_complete(message: str, history: list = None) -> str:
    """
    完整返回 AI 回复 (非流式)
    """
    client = get_openai_client()
    if not client:
        return "抱歉，AI 服务未配置 API Key，请联系管理员。"
    
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    if history:
        messages.extend(history)
    
    messages.append({"role": "user", "content": message})
    
    try:
        response = client.chat.completions.create(
            model=settings.OPENAI_MODEL,
            messages=messages,
            temperature=0.7,
            max_tokens=2000
        )
        
        choices = getattr(response, "choices", []) or []
        if not choices:
            return "抱歉，AI 服务未返回有效结果。"

        message = getattr(choices[0], "message", None)
        content = getattr(message, "content", None)
        return content or "我无法生成回复。"
    except (OpenAIError, ValueError, RuntimeError) as exc:
        return f"抱歉，AI 服务出现错误: {exc}"


# Singleton instance
ai_service = AIService()
