/**
 * 代码辅助服务 - 调用后端 AI 接口
 */

const API_BASE_URL = 'http://localhost:8000/api/v1';

export interface CodeAssistRequest {
  code: string;
  action: 'explain' | 'complete' | 'fix';
  language: string;
  context?: string;
}

export interface CodeAssistResponse {
  chunk?: string;
  error?: string;
}

/**
 * 代码辅助 - 流式响应
 */
export async function* codeAssistStream(request: CodeAssistRequest): AsyncGenerator<string, void, unknown> {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/code-assist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error('Response body is null');
    }

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          
          if (data === '[DONE]') {
            return;
          }

          try {
            const parsed: CodeAssistResponse = JSON.parse(data);
            
            if (parsed.error) {
              throw new Error(parsed.error);
            }
            
            if (parsed.chunk) {
              yield parsed.chunk;
            }
          } catch (e) {
            console.error('Failed to parse SSE data:', e);
          }
        }
      }
    }
  } catch (error) {
    console.error('Code assist error:', error);
    throw error;
  }
}

/**
 * 代码解释
 */
export async function explainCode(code: string, language: string, context?: string): Promise<AsyncGenerator<string, void, unknown>> {
  return codeAssistStream({
    code,
    action: 'explain',
    language,
    context,
  });
}

/**
 * 代码补全
 */
export async function completeCode(code: string, language: string, context?: string): Promise<AsyncGenerator<string, void, unknown>> {
  return codeAssistStream({
    code,
    action: 'complete',
    language,
    context,
  });
}

/**
 * 代码修复
 */
export async function fixCode(code: string, language: string, context?: string): Promise<AsyncGenerator<string, void, unknown>> {
  return codeAssistStream({
    code,
    action: 'fix',
    language,
    context,
  });
}
