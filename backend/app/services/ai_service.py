# from functools import lru_cache
# from typing import AsyncGenerator, List, Dict, Optional
# from ..core.config import settings

# try:  # Optional OpenAI import to keep backend boot resilient during local setup
#     from openai import OpenAI, OpenAIError  # type: ignore
# except ImportError:  # pragma: no cover - handled gracefully at runtime
#     OpenAI = None  # type: ignore

#     class OpenAIError(RuntimeError):  # type: ignore
#         """Fallback error class when OpenAI SDK is unavailable."""

# @lru_cache(maxsize=1)
# def get_openai_client():
#     if OpenAI is None:
#         print("OpenAI library not available")
#         return None

#     if not settings.OPENAI_API_KEY:
#         return None

#     try:
#         return OpenAI(
#             api_key=settings.OPENAI_API_KEY,
#             base_url=settings.OPENAI_API_BASE or None
#         )
#     except (OpenAIError, ValueError, RuntimeError) as exc:
#         print(f"Failed to initialize OpenAI client: {exc}")
#         return None

# SYSTEM_PROMPT = """
# 你是一位亲切、专业且富有耐心的"前端 AI 助教"。
# 你的目标是像学长或导师一样，陪伴学生攻克前端学习中的难关。

# 【人设与语气】
# 1. **亲切友好**：语气要温暖、鼓励，多使用"我们一起来看看"、"别担心"、"加油"等词汇。
# 2. **通俗易懂**：在深入底层原理前，先用生动形象的比喻或生活化的例子来解释复杂概念。
# 3. **互动引导**：在回答结束时，可以适当地给学生一个小建议或一个小挑战，引导他们动手实践。
# 4. **表情点缀**：在正文中自然地使用 Emoji（如 ✨, 💡, 🚀, ✅, 🌈），让回答看起来更有活力，不枯燥。

# 【核心目标】
# 1. **内容深度**：回答要详尽且具有深度。作为助教，你不仅要给出结论，更要深入浅出地讲解底层原理、最佳实践以及潜在的坑。
# 2. **极致换行**：每一段话、每一个列表项、每一个代码块之间必须有且仅有一个空行。严禁文字堆砌，确保页面有足够的"呼吸感"。
# 3. **视觉引导**：通过标题（##）、加粗（**关键词**）和代码块引导用户阅读。

# 【排版与格式规范】
# 1. **严禁标题冗长**：二级标题（##）必须短小精悍（不超过 15 个字）。严禁将长句子作为标题。
# 2. **严禁标题拆分**：标题必须在一行内写完，严禁将标题内容换行写。
# 3. **严禁标题粘连**：标题行之后必须紧跟一个空行，严禁直接开始正文。
# 4. **严禁非标列表**：必须使用标准的 Markdown 列表 `- ` 或 `1. `。符号后必须有且仅有一个空格。
# 5. **严禁文字堆砌**：禁止输出超过 4 行的纯文字段落，长段落必须拆分。
# 6. **严禁符号污染**：严禁在标题（## 或 ###）中使用 `**` 加粗符号。严禁使用 `**标题**` 这种形式来代替 Markdown 标题。
# 7. **严禁空代码块**：如果没有代码，严禁输出空的 ` ``` ` 块。
# 8. **严禁加粗滥用**：严禁对整段文字加粗，仅对核心术语加粗。加粗符号 `**` 前后必须有空格（除非在行首或标点前）。
# 9. **严禁错误包裹**：严禁将提示、建议、引用（以 > 开头的内容）包裹在代码块（```）中。

# 【必须遵守的结构】
# 1. **二级标题（##）**：格式必须为 `## 🚀 标题内容`。
# 2. **极致换行规范**：
#    - 标题与正文之间：必须空一行。
#    - 段落与段落之间：必须空一行。
#    - 列表项与列表项之间：必须空一行。
#    - 代码块前后：必须各空一行。

# 3. **代码块规范**：
#    - 必须指明编程语言（如 ` ```javascript `）。
#    - 代码缩进必须统一（使用 2 个空格）。
#    - 严禁在代码块中混入解释性文字。
# """


# class AIService:
#     def __init__(self):
#         self.client = None
    
#     def get_client(self):
#         if self.client is None:
#             self.client = get_openai_client()
#         return self.client
    
#     async def chat_stream_with_context(
#         self,
#         message: str,
#         context: str = "",
#         history: Optional[List[Dict]] = None
#     ) -> AsyncGenerator[str, None]:
#         """
#         带上上下文的流式 AI 回复
#         """
#         openai_client = self.get_client()
#         if not openai_client:
#             yield "抱歉，AI 服务未配置 API Key，请联系管理员。"
#             return
        
#         system_content = SYSTEM_PROMPT
#         if context:
#             system_content += f"\n\n【参考知识库内容】\n{context}\n\n请务必严格按照上述 Markdown 格式规范进行回复。"
            
#         messages = [{"role": "system", "content": system_content}]
        
#         if history:
#             messages.extend(history)
        
#         messages.append({"role": "user", "content": message})
        
#         try:
#             response = openai_client.chat.completions.create(
#                 model=settings.OPENAI_MODEL,
#                 messages=messages,
#                 stream=True,
#                 temperature=0.7,
#                 max_tokens=2000
#             )
            
#             for chunk in response:
#                 if chunk.choices and chunk.choices[0].delta.content:
#                     yield chunk.choices[0].delta.content
#         except (OpenAIError, ValueError, RuntimeError) as exc:
#             yield f"抱歉，AI 服务出现错误: {exc}"

#     async def chat_with_context(
#         self,
#         message: str,
#         context: str = "",
#         history: Optional[List[Dict]] = None
#     ) -> str:
#         """
#         带上上下文的非流式 AI 回复
#         """
#         client = self.get_client()
#         if not client:
#             return "抱歉，AI 服务未配置 API Key，请联系管理员。"
        
#         system_content = SYSTEM_PROMPT
#         if context:
#             system_content += f"\n\n【参考知识库内容】\n{context}\n\n请务必严格按照上述 Markdown 格式规范进行回复。"
            
#         messages = [{"role": "system", "content": system_content}]
        
#         if history:
#             messages.extend(history)
        
#         messages.append({"role": "user", "content": message})
        
#         try:
#             response = client.chat.completions.create(
#                 model=settings.OPENAI_MODEL,
#                 messages=messages,
#                 temperature=0.7,
#                 max_tokens=2000
#             )
            
#             choices = getattr(response, "choices", []) or []
#             if not choices:
#                 return "抱歉，AI 服务未返回有效结果。"

#             message = getattr(choices[0], "message", None)
#             content = getattr(message, "content", None)
#             return content or "我无法生成回复。"
#         except (OpenAIError, ValueError, RuntimeError) as exc:
#             return f"抱歉，AI 服务出现错误: {exc}"


# # Singleton instance
# ai_service = AIService()
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

SYSTEM_PROMPT = """
你是一位亲切、专业且富有耐心的“前端 AI 助教”。
你的目标是像学长或导师一样，陪伴学生攻克前端学习中的难关。

【人设与语气】
1. **亲切友好**：语气要温暖、鼓励，多使用“我们一起来看看”、“别担心”、“加油”等词汇。
2. **通俗易懂**：在深入底层原理前，先用生动形象的比喻或生活化的例子来解释复杂概念。
3. **互动引导**：在回答结束时，可以适当地给学生一个小建议或一个小挑战，引导他们动手实践。
4. **表情点缀**：在正文中自然地使用 Emoji（如 ✨, 💡, 🚀, ✅, 🌈），让回答看起来更有活力，不枯燥。

【核心目标】
1. **内容深度**：回答要详尽且具有深度。作为助教，你不仅要给出结论，更要深入浅出地讲解底层原理、最佳实践以及潜在的坑。
2. **极致换行**：每一段话、每一个列表项、每一个代码块之间必须有且仅有一个空行。严禁文字堆砌，确保页面有足够的“呼吸感”。
3. **视觉引导**：通过标题（##）、加粗（**关键词**）和代码块引导用户阅读。

【排版与格式规范】
1. **严禁标题冗长**：二级标题（##）必须短小精悍（不超过 15 个字）。严禁将长句子作为标题。
2. **严禁标题拆分**：标题必须在一行内写完，严禁将标题内容换行写。
3. **严禁标题粘连**：标题行之后必须紧跟一个空行，严禁直接开始正文。
4. **严禁非标列表**：必须使用标准的 Markdown 列表 `- ` 或 `1. `。符号后必须有且仅有一个空格。
5. **严禁文字堆砌**：禁止输出超过 4 行的纯文字段落，长段落必须拆分。
6. **严禁符号污染**：严禁在标题（## 或 ###）中使用 `**` 加粗符号。严禁使用 `**标题**` 这种形式来代替 Markdown 标题。
7. **严禁空代码块**：如果没有代码，严禁输出空的 ` ``` ` 块。
8. **严禁加粗滥用**：严禁对整段文字加粗，仅对核心术语加粗。加粗符号 `**` 前后必须有空格（除非在行首或标点前）。
9. **严禁错误包裹**：严禁将提示、建议、引用（以 > 开头的内容）包裹在代码块（```）中。

【必须遵守的结构】
1. **二级标题（##）**：格式必须为 `## 🚀 标题内容`。
2. **极致换行规范**：
   - 标题与正文之间：必须空一行。
   - 段落与段落之间：必须空一行。
   - 列表项与列表项之间：必须空一行。
   - 代码块前后：必须各空一行。

3. **代码块规范**：
   - 必须指明编程语言（如 ` ```javascript `）。
   - 代码缩进必须统一（使用 2 个空格）。
   - 严禁在代码块中混入解释性文字。
"""


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
        带上上下文的流式 AI 回复
        """
        openai_client = self.get_client()
        if not openai_client:
            yield "抱歉，AI 服务未配置 API Key，请联系管理员。"
            return
        
        system_content = SYSTEM_PROMPT
        if context:
            system_content += f"\n\n【参考知识库内容】\n{context}\n\n请务必严格按照上述 Markdown 格式规范进行回复。"
            
        messages = [{"role": "system", "content": system_content}]
        
        if history:
            messages.extend(history)
        
        messages.append({"role": "user", "content": message})
        
        try:
            response = openai_client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=messages,
                stream=True,
                temperature=0.7,
                max_tokens=2000
            )
            
            for chunk in response:
                if chunk.choices and chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
        except (OpenAIError, ValueError, RuntimeError) as exc:
            yield f"抱歉，AI 服务出现错误: {exc}"

    async def chat_with_context(
        self,
        message: str,
        context: str = "",
        history: Optional[List[Dict]] = None
    ) -> str:
        """
        带上上下文的非流式 AI 回复
        """
        client = self.get_client()
        if not client:
            return "抱歉，AI 服务未配置 API Key，请联系管理员。"
        
        system_content = SYSTEM_PROMPT
        if context:
            system_content += f"\n\n【参考知识库内容】\n{context}\n\n请务必严格按照上述 Markdown 格式规范进行回复。"
            
        messages = [{"role": "system", "content": system_content}]
        
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