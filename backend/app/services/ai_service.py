from typing import AsyncGenerator, List, Dict, Optional
from ..core.config import settings

# 动态导入 OpenAI 以避免初始化问题
client = None

def get_openai_client():
    global client
    if client is None:
        print(f"\n{'='*60}")
        print(f"🔍 检查 API 配置:")
        print(f"   - OPENAI_API_KEY 存在: {bool(settings.OPENAI_API_KEY)}")
        print(f"   - API Key 长度: {len(settings.OPENAI_API_KEY) if settings.OPENAI_API_KEY else 0}")
        print(f"   - API Base: {settings.OPENAI_API_BASE}")
        print(f"   - Model: {settings.OPENAI_MODEL}")
        
        if settings.OPENAI_API_KEY:
            print(f"   - API Key 值: {settings.OPENAI_API_KEY}")
            print(f"{'='*60}\n")
        else:
            print(f"   ⚠️ API Key 未设置！")
            print(f"{'='*60}\n")
            return None
            
        try:
            from openai import OpenAI
            # 支持自定义 API Base URL
            if settings.OPENAI_API_BASE:
                # OpenAI客户端会自动添加 "Authorization: Bearer {api_key}"
                client = OpenAI(
                    api_key=settings.OPENAI_API_KEY,
                    base_url=settings.OPENAI_API_BASE
                )
                print(f"✅ OpenAI Client 初始化成功")
                print(f"📡 实际使用的配置:")
                print(f"   - Base URL: {client.base_url}")
                print(f"   - API Key: {client.api_key[:15]}...{client.api_key[-5:]}")
            else:
                client = OpenAI(api_key=settings.OPENAI_API_KEY)
                print(f"✅ OpenAI Client 初始化成功 (官方 API)")
        except ImportError:
            print("❌ OpenAI library not available")
        except Exception as e:
            print(f"❌ Failed to initialize OpenAI client: {e}")
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
            print("❌ AI 客户端未初始化")
            yield "抱歉，AI 服务未配置 API Key，请联系管理员。"
            return
        
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        # 添加 RAG 上下文
        if context:
            messages.append({"role": "system", "content": context})
            print(f"📚 添加 RAG 上下文: {len(context)} 字符")
        
        # 添加历史对话
        if history:
            messages.extend(history)
            print(f"💬 添加历史对话: {len(history)} 条")
        
        messages.append({"role": "user", "content": message})
        
        print("\n" + "="*60)
        print(f"🤔 用户提问: {message}")
        print(f"📝 总消息数: {len(messages)}")
        print("="*60)
        
        try:
            print(f"🚀 开始调用 {settings.OPENAI_MODEL} 模型...")
            print(f"📤 请求参数:")
            print(f"   - Model: {settings.OPENAI_MODEL}")
            print(f"   - Messages: {len(messages)} 条")
            print(f"   - Stream: True")
            print(f"   - Temperature: 0.7")
            print(f"   - Max Tokens: 2000\n")
            
            stream = client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=messages,
                stream=True,
                temperature=0.7,
                max_tokens=10000
            )
            
            print("💭 AI 思考过程:")
            print("-" * 60)
            
            full_response = ""
            chunk_count = 0
            for chunk in stream:
                chunk_count += 1
                
                if hasattr(chunk, 'choices') and len(chunk.choices) > 0:
                    choice = chunk.choices[0]
                    
                    # 检查是否被内容过滤器拦截
                    if hasattr(choice, 'finish_reason') and choice.finish_reason == 'content_filter':
                        error_msg = "⚠️ 内容被 API 安全过滤器拦截，请尝试简化提示词"
                        print(f"\n{error_msg}\n")
                        yield error_msg
                        break
                    
                    if hasattr(choice, 'delta'):
                        delta = choice.delta
                        
                        if hasattr(delta, 'content') and delta.content:
                            content = delta.content
                            full_response += content
                            print(content, end="", flush=True)
                            yield content
            
            print("\n" + "-" * 60)
            print(f"✅ 回答完成! 总字符数: {len(full_response)}, 总chunks: {chunk_count}")
            print("="*60 + "\n")
            
            if len(full_response) == 0:
                error_msg = "⚠️ AI 返回了空响应，请检查 API 配置或重试"
                print(f"{error_msg}\n")
                yield error_msg
                    
        except Exception as e:
            error_msg = f"抱歉，AI 服务出现错误: {str(e)}"
            print(f"\n❌ 错误: {error_msg}")
            print("="*60 + "\n")
            yield error_msg
    
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
                max_tokens=10000
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
            max_tokens=10000
        )
        
        return response.choices[0].message.content or "我无法生成回复。"
        
    except Exception as e:
        return f"抱歉，AI 服务出现错误: {str(e)}"


# Singleton instance
ai_service = AIService()
