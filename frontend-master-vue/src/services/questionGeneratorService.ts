import { OPENAI_API_BASE, OPENAI_API_KEY, OPENAI_MODEL } from './config';

export interface GeneratedQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-in' | 'coding';
  prompt: string;
  focus: string;
  options?: Array<{ label: string; text: string; correct: boolean }>;
  blanks?: Array<{ label: string; answer: string; hint?: string }>;
  starterCode?: string;
  expectation?: string;
  explanation?: string;
  checks?: string[];
}

const systemPrompt = `你是一位前端教育专家，擅长生成高质量的编程练习题。
你需要生成的题目应该：
1. 难度适中（针对初中级开发者）
2. 知识点清晰，具有教育意义
3. 答案确定，可以自动判断
4. 题目表述清楚，无歧义

请严格按照JSON格式返回题目数据，不要有任何其他文本。`;

async function callOpenAI(prompt: string): Promise<any> {
  if (!OPENAI_API_KEY) {
    throw new Error('缺少 VITE_OPENAI_API_KEY 环境变量');
  }

  const response = await fetch(`${OPENAI_API_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      top_p: 0.9,
      max_tokens: 2000
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '';
  
  // 尝试解析 JSON
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('无法解析 AI 返回的题目数据');
  }
  
  return JSON.parse(jsonMatch[0]);
}

/**
 * 生成填空题
 */
export async function generateFillInQuestion(topic: string): Promise<GeneratedQuestion> {
  const prompt = `请生成一道${topic}领域的前端填空题。

要求：
- 题目类型：fill-in
- 有 1-2 个空要填
- 答案唯一或可接受多种变体

返回JSON格式：
{
  "type": "fill-in",
  "prompt": "填空题的题目文本",
  "focus": "知识点概括（5字以内）",
  "blanks": [
    {
      "label": "第1空",
      "answer": "答案文本（支持用 / 或 | 分隔多个可接受答案）",
      "hint": "可选的提示文本"
    }
  ],
  "explanation": "题目解析说明"
}`;

  try {
    const result = await callOpenAI(prompt);
    return {
      id: `ai-fill-${Date.now()}-${Math.random()}`,
      type: 'fill-in',
      ...result
    };
  } catch (error) {
    console.error('生成填空题失败:', error);
    throw error;
  }
}

/**
 * 生成选择题
 */
export async function generateMultipleChoiceQuestion(topic: string): Promise<GeneratedQuestion> {
  const prompt = `请生成一道${topic}领域的前端选择题。

要求：
- 题目类型：multiple-choice
- 4 个选项，只有 1 个正确答案
- 干扰项要有一定难度

返回JSON格式：
{
  "type": "multiple-choice",
  "prompt": "选择题的题目文本",
  "focus": "知识点概括（5字以内）",
  "options": [
    { "label": "A", "text": "选项文本", "correct": true },
    { "label": "B", "text": "选项文本", "correct": false },
    { "label": "C", "text": "选项文本", "correct": false },
    { "label": "D", "text": "选项文本", "correct": false }
  ],
  "explanation": "题目解析说明"
}`;

  try {
    const result = await callOpenAI(prompt);
    return {
      id: `ai-choice-${Date.now()}-${Math.random()}`,
      type: 'multiple-choice',
      ...result
    };
  } catch (error) {
    console.error('生成选择题失败:', error);
    throw error;
  }
}

/**
 * 生成代码题
 */
export async function generateCodingQuestion(topic: string): Promise<GeneratedQuestion> {
  const prompt = `请生成一道${topic}领域的前端代码实践题。

要求：
- 题目类型：coding
- 提供启动代码模板
- 目标清晰明确
- 关键实现点可自动验证（3-5个关键词）

返回JSON格式：
{
  "type": "coding",
  "prompt": "代码题的题目描述",
  "focus": "知识点概括（5字以内）",
  "starterCode": "// 提供的起始代码\\n// 用户需要完成的部分",
  "expectation": "实现目标说明",
  "explanation": "题目解析说明",
  "checks": ["关键词1", "关键词2", "关键词3"]
}`;

  try {
    const result = await callOpenAI(prompt);
    return {
      id: `ai-code-${Date.now()}-${Math.random()}`,
      type: 'coding',
      ...result
    };
  } catch (error) {
    console.error('生成代码题失败:', error);
    throw error;
  }
}

/**
 * 生成一套完整的每日题目（3 题：填空 + 选择 + 代码）
 */
export async function generateDailyChallenge(topic: string): Promise<{
  questions: GeneratedQuestion[];
  title: string;
  description: string;
}> {
  const topicLabels: Record<string, string> = {
    html: 'HTML 语义与结构',
    css: 'CSS 布局与样式',
    javascript: 'JavaScript 语言特性',
    vue: 'Vue 组合式开发',
    performance: '性能监控与优化'
  };

  try {
    const [fillQuestion, choiceQuestion, codingQuestion] = await Promise.all([
      generateFillInQuestion(topic),
      generateMultipleChoiceQuestion(topic),
      generateCodingQuestion(topic)
    ]);

    return {
      questions: [fillQuestion, choiceQuestion, codingQuestion],
      title: `AI 生成的${topicLabels[topic] || topic}挑战`,
      description: '由 AI 生成的个性化学习题目，帮助你深入掌握该领域知识点。'
    };
  } catch (error) {
    console.error('生成每日挑战失败:', error);
    throw error;
  }
}
