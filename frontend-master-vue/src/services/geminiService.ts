import { GoogleGenerativeAI } from '@google/generative-ai';

let chatSession: any = null;

// 配置项
const USE_BACKEND = import.meta.env.VITE_USE_BACKEND_AI === 'true';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const getClient = (): GoogleGenerativeAI => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || 'DEMO_KEY';
  return new GoogleGenerativeAI(apiKey);
};

export const initializeChat = async (systemInstruction: string = "你是一位资深的前端工程化导师。你的目标是帮助用户理解复杂概念，生成代码，并提供学习路径。请使用 Markdown 格式，并始终使用中文进行回答。"): Promise<void> => {
  try {
    const genAI = getClient();
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      systemInstruction
    });
    chatSession = model.startChat({
      history: [],
    });
  } catch (e) {
    console.error("Failed to initialize chat", e);
  }
};

export const sendMessage = async (message: string): Promise<string> => {
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
    return "抱歉，连接知识库时出现错误。";
  }
};

export async function* sendMessageStream(message: string, history: Array<{role: string, content: string}> = []): AsyncGenerator<string, void, unknown> {
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
      await initializeChat();
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
      yield "抱歉，连接知识库时出现错误。";
    }
  }
}
