import { GoogleGenerativeAI } from '@google/generative-ai';

let chatSession: any = null;

// // 配置项
// const USE_BACKEND = import.meta.env.VITE_USE_BACKEND_AI === 'true';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
// const MODEL_NAME = import.meta.env.VITE_GEMINI_MODEL || 'gemini-1.5-flash';

// SiliconFlow OpenAI 兼容配置
const USE_OPENAI = import.meta.env.VITE_OPENAI_API_KEY ? true : false;
const OPENAI_API_BASE = import.meta.env.VITE_OPENAI_API_BASE || 'https://api.siliconflow.cn/v1';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_MODEL = import.meta.env.VITE_OPENAI_MODEL || 'Pro/deepseek-ai/DeepSeek-V3';

const getClient = (): GoogleGenerativeAI => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'DEMO_KEY') {
    throw new Error('缺少有效的 Gemini API Key，请在前端 .env 文件中配置 VITE_GEMINI_API_KEY。');
  }
  return new GoogleGenerativeAI(apiKey);
};

export const initializeChat = async (systemInstruction: string = "你是一位资深的前端工程化导师。你的目标是帮助用户理解复杂概念，生成代码，并提供学习路径。请使用 Markdown 格式，并始终使用中文进行回答。"): Promise<void> => {
  if (USE_BACKEND) {
    chatSession = null;
    return;
  }

  try {
    const genAI = getClient();
    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      systemInstruction
    });
    chatSession = model.startChat({
      history: [],
    });
  } catch (e) {
    chatSession = null;
    console.error("Failed to initialize chat", e);
    throw e;
  }
};

// OpenAI 兼容 API 调用函数
const callOpenAIStream = async function*(message: string, history: Array<{role: string, content: string}> = []) {
  try {
    if (!OPENAI_API_KEY) {
      throw new Error('缺少 VITE_OPENAI_API_KEY 环境变量');
    }

    const messages = [
      ...history.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user' as const, content: message }
    ];

    const response = await fetch(`${OPENAI_API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages,
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 2000,
        stream: true
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('无法读取响应流');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('data: ')) {
            const dataStr = trimmedLine.slice(6);
            if (dataStr === '[DONE]') {
              return;
            }
            try {
              const data = JSON.parse(dataStr);
              const content = data.choices?.[0]?.delta?.content || '';
              if (content) {
                yield content;
              }
            } catch (e) {
              console.warn('解析流数据失败:', e);
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
};

export const sendMessage = async (message: string): Promise<string> => {
  if (USE_BACKEND) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, history: [], use_rag: true })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data?.data?.message || 'AI 暂时没有回复，请稍后再试。';
    } catch (error) {
      console.error('Backend chat error:', error);
      return error instanceof Error ? error.message : '连接后端 AI 服务失败，请稍后重试。';
    }
  }

  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) return "AI 服务暂不可用，请检查您的 API Key 配置。";

  try {
    const result = await chatSession.sendMessage(message);
    const response = await result.response;
    return response.text() || "我无法生成回复。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return error instanceof Error ? error.message : "抱歉，连接知识库时出现错误。";
  }
};

export async function* sendMessageStream(message: string, history: Array<{role: string, content: string}> = []): AsyncGenerator<string, void, unknown> {
  // 使用 OpenAI 兼容 API（优先级最高）
  if (USE_OPENAI) {
    try {
      yield* callOpenAIStream(message, history);
    } catch (error) {
      console.error("OpenAI stream error:", error);
      yield `OpenAI 服务出错: ${error instanceof Error ? error.message : '未知错误'}`;
    }
    return;
  }

  // 使用后端 API
  if (USE_BACKEND) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history,
          use_rag: true
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('无法读取响应流');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.trim().startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.chunk) {
                  yield data.chunk;
                }
                if (data.finished) {
                  return;
                }
                if (data.error) {
                  throw new Error(data.chunk || '服务器错误');
                }
              } catch (e) {
                console.warn('解析 SSE 数据失败:', e);
              }
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    } catch (error) {
      console.error("Backend API Error:", error);
      yield `连接后端服务失败: ${error instanceof Error ? error.message : '未知错误'}`;
      return;
    }
  } 
  // 使用前端直连 Gemini
  else {
    if (!chatSession) {
      try {
        await initializeChat();
      } catch (error) {
        console.error("Gemini init error:", error);
        const message = error instanceof Error ? error.message : 'AI 服务暂不可用，请检查您的 API Key 配置。';
        yield message;
        return;
      }
    }

    if (!chatSession) {
      yield "AI 服务暂不可用，请检查您的 API Key 配置。";
      return;
    }

    try {
      const result = await chatSession.sendMessageStream(message);
      
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          yield chunkText;
        }
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      const message = error instanceof Error ? error.message : '抱歉，连接知识库时出现错误。';
      yield message;
    }
  }
}
