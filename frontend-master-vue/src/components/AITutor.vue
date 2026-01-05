<template>
  <div class="h-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <!-- 头部区域 -->
    <div class="bg-gradient-to-r from-primary to-orange-400 text-white p-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
      
      <div class="relative z-10">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Bot :size="32" class="text-white" />
          </div>
          <div>
            <h1 class="text-2xl font-bold">AI 学习导师</h1>
            <p class="text-white/80">你的专属前端学习伙伴</p>
          </div>
        </div>
        
        <!-- 导师状态 -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-sm">在线</span>
          </div>
          <div class="text-sm">
            已帮助 <span class="font-bold">1,234+</span> 位学习者
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="flex-1 p-6 overflow-hidden min-h-0">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-0">
        
        <!-- 导师侧栏 -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Lightbulb :size="16" class="text-blue-600" />
            </div>
            <h3 class="font-bold text-gray-800">AI 导师助手</h3>
          </div>

          <div class="space-y-3">
            <div
              v-for="tip in mentorTips"
              :key="tip.title"
              class="p-4 border border-gray-100 rounded-xl bg-white shadow-sm"
            >
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <component :is="tip.icon" :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-semibold text-gray-800">{{ tip.title }}</p>
                  <p class="text-sm text-gray-600 mt-1">{{ tip.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-5 border border-primary/20 rounded-xl bg-white shadow-sm">
            <h4 class="font-semibold text-gray-800 mb-3">热门提问</h4>
            <div class="space-y-2">
              <button
                v-for="question in hotQuestions"
                :key="question"
                @click="sendMessage(question)"
                class="w-full text-left px-3 py-2 rounded-lg border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors text-sm text-gray-700"
              >
                {{ question }}
              </button>
            </div>
          </div>

          <div class="p-5 border border-primary/20 rounded-xl bg-white shadow-sm">
            <h4 class="font-semibold text-gray-800 mb-2">学习资源推荐</h4>
            <p class="text-sm text-gray-600 mb-4">
              想要系统掌握前端基础？访问我们精选的学习网站，获取最新的教程与练习素材。
            </p>
            <button
              @click="openResource(recommendedResource.url)"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              访问 {{ recommendedResource.title }}
            </button>
          </div>
        </div>

        <!-- 对话区域 -->
        <div class="lg:col-span-2 flex flex-col bg-gray-50 rounded-xl min-h-0">
          <!-- 对话头部 -->
          <div class="p-4 border-b border-gray-200 bg-white rounded-t-xl">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gradient-to-r from-primary to-orange-400 rounded-full flex items-center justify-center">
                <Bot :size="20" class="text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">AI 导师</h4>
                <p class="text-sm text-gray-500">随时为你答疑解惑</p>
              </div>
              <div class="ml-auto flex gap-2">
                <button 
                  @click="clearChat"
                  class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="清空对话"
                >
                  <RotateCcw :size="16" />
                </button>
                <button 
                  @click="exportChat"
                  class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="导出对话"
                >
                  <Download :size="16" />
                </button>
              </div>
            </div>
          </div>

          <!-- 消息列表 -->
          <div
            ref="chatContainer"
            class="flex-1 p-4 overflow-y-auto space-y-4 min-h-0"
            @scroll="handleScroll"
          >
            <!-- 欢迎消息 -->
            <div v-if="messages.length === 0" class="text-center py-8">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles :size="24" class="text-primary" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">开始你的学习之旅</h3>
              <p class="text-gray-600 text-sm mb-4">我是你的AI学习导师，可以帮你：</p>
              <div class="grid grid-cols-2 gap-2 max-w-md mx-auto">
                <button 
                  v-for="suggestion in quickSuggestions" 
                  :key="suggestion"
                  @click="sendMessage(suggestion)"
                  class="p-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  {{ suggestion }}
                </button>
              </div>
            </div>

            <!-- 消息气泡 -->
            <div 
              v-for="message in messages" 
              :key="message.id"
              :class="[
                'flex',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              ]"
            >
              <div 
                :class="[
                  'max-w-[80%] rounded-2xl p-4 shadow-sm space-y-3',
                  message.role === 'user' 
                    ? 'bg-primary text-white rounded-br-md' 
                    : 'bg-white border border-gray-100 rounded-bl-md'
                ]"
              >
                <div
                  class="text-sm leading-relaxed markdown-content"
                  v-html="formatMessageContent(message)"
                ></div>
                <span class="text-xs opacity-70 block">
                  {{ formatTime(message.timestamp) }}
                </span>
              </div>
            </div>

            <!-- 正在输入指示器 -->
            <div v-if="isTyping" class="flex justify-start">
              <div class="bg-white border border-gray-100 rounded-2xl rounded-bl-md p-4 shadow-sm">
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            v-if="showScrollToBottom"
            @click="scrollToBottom(true)"
            class="self-end mb-3 mr-6 px-3 py-2 bg-primary text-white rounded-full shadow transition hover:bg-primary/90"
          >
            <span class="flex items-center gap-2 text-sm">
              <ArrowDown :size="16" />
              查看最新
            </span>
          </button>

          <!-- 输入区域 -->
          <div class="p-4 bg-white border-t border-gray-200 rounded-b-xl">
            <div class="flex gap-3">
              <div class="flex-1 relative">
                <input
                  v-model="currentMessage"
                  @keypress.enter="sendCurrentMessage"
                  placeholder="询问任何前端学习问题..."
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  :disabled="isTyping"
                />
                <button
                  v-if="currentMessage.trim()"
                  @click="sendCurrentMessage"
                  :disabled="isTyping"
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Send :size="16" />
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span>按 Enter 发送消息</span>
              <div class="flex items-center gap-4">
                <span>已对话 {{ messages.length }} 轮</span>
                <div class="flex items-center gap-1">
                  <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>AI 就绪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue';
import { Bot, Sparkles, Send, RotateCcw, Download, ArrowDown, Lightbulb, MessageSquare, Target } from 'lucide-vue-next';
import { initializeChat, sendMessageStream } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  fullContent?: string;
  displayCursor?: number;
  typingTimer?: number | null;
  rawContent?: string;
}

// 响应式数据
const messages = ref<Message[]>([]);
const currentMessage = ref('');
const isTyping = ref(false);
const chatContainer = ref<HTMLDivElement | null>(null);
const shouldAutoScroll = ref(true);
const showScrollToBottom = ref(false);
let previousBodyOverflow = '';

const TYPEWRITER_INTERVAL = 15; // 基础打字间隔，设为 15ms 让“一个字一个字蹦”的感觉更明显
const SECTION_LABELS = ['主题', '概览', '步骤', '代码', '延伸'] as const;
const DISPLAY_LABELS: Record<string, string> = {
  '主题': '主题 🎯',
  '概览': '概览 📝',
  '步骤': '步骤 🚀',
  '代码': '代码 💻',
  '延伸': '延伸 💡'
};
const SECTION_LABEL_SET = new Set(SECTION_LABELS);

const sanitizeModelText = (input: string): string => {
  const sanitizeSegment = (segment: string): string => {
    return segment
      .replace(/(\d+)\s*###\s*/g, '')
      .replace(/(^|\n)\s*###\s*/g, '$1')
      .replace(/(^|\n)\s*##\s*/g, '$1')
      .replace(/###/g, '')
      .replace(/##/g, '')
      .replace(/#/g, '')
      // 保留加粗和行内代码，以便后续渲染
      .replace(/__(.*?)__/g, '$1')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n');
  };

  const codeBlockRegex = /```[\s\S]*?```/g;
  let result = '';
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(input)) !== null) {
    const preceding = input.slice(lastIndex, match.index);
    if (preceding) {
      result += sanitizeSegment(preceding);
    }
    result += match[0];
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < input.length) {
    result += sanitizeSegment(input.slice(lastIndex));
  }

  return result.trim();
};

const ensureSentenceTermination = (sentence: string): string => {
  const trimmed = sentence.replace(/\s+/g, ' ').trim();
  if (!trimmed) return '';
  return /[。！？!?]$/.test(trimmed) ? trimmed : `${trimmed}。`;
};

const normalizeStepSentence = (sentence: string): string => {
  const cleaned = sentence.replace(/^[\d\s\.．、-]+/, '').trim();
  return ensureSentenceTermination(cleaned);
};

const splitSentences = (text: string): string[] => {
  if (!text) return [];
  
  // 预处理：保护技术术语中的点号
  const protectedText = text
    .replace(/([a-zA-Z0-9])\.([a-zA-Z0-9])/g, '$1__DOT__$2')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\r/g, '\n');

  const lines = protectedText.split(/\n+/);
  const result: string[] = [];

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    // 改进的分割逻辑：避免在括号内分割句子
    let current = '';
    let parenDepth = 0;
    for (let i = 0; i < trimmed.length; i++) {
      const char = trimmed[i];
      if (char === '(' || char === '（') parenDepth++;
      if (char === ')' || char === '）') parenDepth--;
      
      current += char;
      
      // 只有在括号外遇到标点符号才分割
      if (parenDepth <= 0 && /[。！？!?]/.test(char)) {
        // 检查是否是句末（后面是空格、换行或字符串结束）
        if (i === trimmed.length - 1 || /[\s\n]/.test(trimmed[i+1])) {
          result.push(current.trim());
          current = '';
        }
      }
    }
    if (current.trim()) {
      result.push(current.trim());
    }
  });

  return result.map(s => s.replace(/__DOT__/g, '.')).filter(Boolean);
};

const buildFallbackSentences = (topic: string) => {
  const safeTopic = topic || '前端学习';
  return {
    overview: [
      `关于 ${safeTopic}，这是一个非常值得深入探讨的前端技术领域。`,
      `掌握 ${safeTopic} 的核心原理对于构建高质量的 Web 应用至关重要。`,
      `建议通过理论学习与动手实践相结合的方式来攻克 ${safeTopic}。`
    ],
    steps: [
      `首先建议你查阅关于 ${safeTopic} 的官方文档以获取最权威的定义。`,
      `接着尝试编写一些简单的 Demo 来验证你对 ${safeTopic} 的理解。`,
      `最后将 ${safeTopic} 应用到实际项目中，在实战中发现并解决问题。`
    ],
    extension: [
      `持续关注社区中关于 ${safeTopic} 的最佳实践和性能优化方案。`,
      `尝试向他人解释 ${safeTopic}，这能帮助你更深刻地掌握其本质。`
    ]
  };
};

const ensureSentenceCount = (
  sentences: string[],
  min: number,
  max: number,
  fallback: string[],
  extraPool: string[] = []
): string[] => {
  const result = sentences
    .map(ensureSentenceTermination)
    .filter(Boolean);

  const extras = extraPool
    .map(ensureSentenceTermination)
    .filter(sentence => sentence && !result.includes(sentence));

  const fallbacks = fallback
    .map(ensureSentenceTermination)
    .filter(sentence => sentence && !result.includes(sentence) && !extras.includes(sentence));

  while (result.length < min && extras.length) {
    const next = extras.shift();
    if (next) {
      result.push(next);
    }
  }

  while (result.length < min && fallbacks.length) {
    const next = fallbacks.shift();
    if (next) {
      result.push(next);
    }
  }

  return result.slice(0, Math.max(min, Math.min(max, result.length)));
};

const extractCodeSnippet = (text: string) => {
  let remaining = text;
  let code = '';
  let language: 'html' | 'javascript' | 'plaintext' = 'plaintext';

  const fencedMatch = remaining.match(/```([A-Za-z0-9+#.-]*)\n?([\s\S]*?)```/);
  if (fencedMatch) {
    code = fencedMatch[2].trim();
    const rawLanguage = fencedMatch[1]?.trim().toLowerCase() ?? '';
    if (rawLanguage === 'html' || rawLanguage === 'xml' || rawLanguage === 'vue') {
      language = 'html';
    } else if (rawLanguage === 'js' || rawLanguage === 'ts' || rawLanguage === 'javascript' || rawLanguage === 'typescript' || rawLanguage === 'json') {
      language = 'javascript';
    }
    const startIndex = typeof fencedMatch.index === 'number' ? fencedMatch.index : 0;
    remaining = `${remaining.slice(0, startIndex)} ${remaining.slice(startIndex + fencedMatch[0].length)}`;
  } else {
    const htmlIndex = remaining.indexOf('<');
    const jsIndex = remaining.search(/\bconst\b|\blet\b|\bfunction\b|=>/);
    const startCandidates = [htmlIndex, jsIndex].filter(index => index >= 0);
    if (startCandidates.length) {
      const codeStart = Math.min(...startCandidates);
      const tail = remaining.slice(codeStart);
      const nextLabelMatch = tail.match(/(主题|概览|步骤|代码|延伸|知识点概述|分步指导|代码示例|延伸建议)/);
      let codeEnd = remaining.length;

      if (htmlIndex >= 0 && codeStart === htmlIndex) {
        const scriptCloseIndex = tail.toLowerCase().indexOf('</' + 'script>');
        if (scriptCloseIndex >= 0) {
          codeEnd = Math.min(codeEnd, codeStart + scriptCloseIndex + ('</' + 'script>').length);
        }
      }

      if (nextLabelMatch) {
        codeEnd = Math.min(codeEnd, codeStart + nextLabelMatch.index!);
      }

      code = remaining.slice(codeStart, codeEnd).trim();
      remaining = `${remaining.slice(0, codeStart)} ${remaining.slice(codeEnd)}`;
    }
    if (code.includes('<') && code.includes('>')) {
      language = 'html';
    } else if (/[{;}]/.test(code) || /\b(const|let|var|function|return|import|export|class|if|for|while|switch|case|break|continue|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|async|await|yield|static|public|private|protected|readonly|abstract|constructor|get|set|of|in|instanceof|typeof|void|delete|debugger|with|default|as|from|into|select|where|join|on|group|by|having|order|limit|offset|fetch|next|only|rows|with|recursive|union|all|intersect|except|distinct|all|any|some|exists|not|and|or|is|null|true|false|unknown|never|any|void|boolean|number|string|symbol|bigint|object|undefined|null|NaN|Infinity|globalThis|window|document|console|process|module|require|exports|__dirname|__filename|import\.meta|arguments|eval|JSON|Math|Date|RegExp|Error|Promise|Map|Set|WeakMap|WeakSet|Array|Object|Function|String|Number|Boolean|Symbol|BigInt|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|BigInt64Array|BigUint64Array|DataView|ArrayBuffer|SharedArrayBuffer|Atomics|Proxy|Reflect|Intl|WebAssembly)\b/.test(code)) {
      language = 'javascript';
    }
  }

  return { code: code.trim(), language, remaining: remaining.trim() };
};

const formatCodeSnippet = (code: string, language: 'html' | 'javascript' | 'plaintext') => {
  if (!code) {
    return { content: '', language: 'plaintext' as const };
  }

  if (language === 'html') {
    const normalizedCode = code
      .replace(/></g, '>\n<')
      .replace(new RegExp('<' + 'script>', 'gi'), '<' + 'script>\n')
      .replace(new RegExp('</' + 'script>', 'gi'), '\n</' + 'script>')
      .replace(/\r/g, '\n');

    const rawLines = normalizedCode
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    const indented: string[] = [];
    let depth = 0;
    let index = 0;

    while (index < rawLines.length) {
      const line = rawLines[index];

      if (new RegExp('^<' + 'script\\b', 'i').test(line)) {
        indented.push(`${'  '.repeat(Math.max(depth, 0))}${line}`);
        depth += 1;
        index += 1;
        const scriptLines: string[] = [];
        while (index < rawLines.length && !new RegExp('^</' + 'script>', 'i').test(rawLines[index])) {
          scriptLines.push(rawLines[index]);
          index += 1;
        }
        const formattedScript = formatCodeSnippet(scriptLines.join('\n'), 'javascript');
        formattedScript.content.split('\n').forEach(jsLine => {
          if (jsLine.trim()) {
            indented.push(`${'  '.repeat(Math.max(depth, 0))}${jsLine}`);
          }
        });
        depth = Math.max(depth - 1, 0);
        const closingTag = index < rawLines.length ? rawLines[index] : '</' + 'script>';
        indented.push(`${'  '.repeat(Math.max(depth, 0))}${closingTag}`);
        index += 1;
        continue;
      }

      const isClosing = /^<\//.test(line);
      const isSelfClosing = /\/>$/.test(line) || /^<!/.test(line) || /^<[^>]+><\/[^>]+>$/.test(line);
      if (isClosing && depth > 0) {
        depth -= 1;
      }

      indented.push(`${'  '.repeat(Math.max(depth, 0))}${line}`);

      const isOpening = /^<[^\s/][^>]*>$/.test(line) && !isSelfClosing && !/^<\//.test(line);
      if (isOpening) {
        depth += 1;
      }

      index += 1;
    }

    return { content: indented.join('\n'), language: 'html' as const };
  }

  if (language === 'javascript') {
    const normalized = code
      .replace(/;(?!\s*\n)/g, ';\n')
      .replace(/{(?!\s*\n)/g, '{\n')
      .replace(/}(?!\s*\n)/g, '\n}')
      .replace(/\r/g, '\n')
      .split('\n')
      .map(line => line.trim());

    const indented: string[] = [];
    let depth = 0;

    normalized.forEach(line => {
      if (!line) {
        indented.push('');
        return;
      }
      const decrease = /^}/.test(line) || /^\)/.test(line) || /^\].*/.test(line);
      if (decrease && depth > 0) {
        depth -= 1;
      }
      indented.push(`${'  '.repeat(Math.max(depth, 0))}${line}`);
      const increase = /{\s*$/.test(line) || /\($/.test(line) || /=\s*\($/.test(line);
      if (increase) {
        depth += 1;
      }
    });

    return { content: indented.join('\n'), language: 'javascript' as const };
  }

  return { content: code.replace(/\r/g, '\n').trim(), language: 'plaintext' as const };
};

const parseLabeledSections = (text: string) => {
  if (!text) return null;
  let normalized = text.replace(/\r/g, '\n');
  SECTION_LABELS.forEach(label => {
    // 匹配 [主题]： 或 主题 🎯： 或 【主题】：
    // 使用 [^：:]* 来匹配标签和冒号之间的任何字符（如 Emoji）
    const pattern = new RegExp(`\\s*[\\[【]?${label}[^：:]*[\\]】]?\\s*[:：]`, 'g');
    normalized = normalized.replace(pattern, `\n${label}：`);
  });
  normalized = normalized.replace(/\n{3,}/g, '\n\n').trim();

  const regex = new RegExp(`(^|\\n)\\s*(${SECTION_LABELS.join('|')})\\s*[:：]`, 'g');
  const matches: Array<{ label: string; matchIndex: number; contentStart: number }> = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(normalized)) !== null) {
    const label = match[2];
    const matchIndex = match.index + (match[1] ? match[1].length : 0);
    const contentStart = regex.lastIndex;
    matches.push({ label, matchIndex, contentStart });
  }

  if (!matches.length) return null;

  const sections: Record<string, string> = {};
  for (let i = 0; i < matches.length; i += 1) {
    const current = matches[i];
    const next = matches[i + 1];
    const end = next ? next.matchIndex : normalized.length;
    const content = normalized.slice(current.contentStart, end).trim();
    sections[current.label] = content;
  }

  return sections;
};

const buildStructuredResponse = (raw: string, fallbackTopic: string): string => {
  const cleaned = sanitizeModelText(raw.replace(/\u200B/g, '').trim());
  const labeled = parseLabeledSections(cleaned);

  let topic = '';
  let overviewSentences: string[] = [];
  let stepSentences: string[] = [];
  let extensionSentences: string[] = [];
  let codeSnippet = '';
  let codeLanguage: 'html' | 'javascript' | 'plaintext' = 'plaintext';
  let sentencePool: string[] = [];

  if (labeled) {
    topic = labeled['主题']?.split(/\n+/)[0]?.trim() ?? '';
    overviewSentences = splitSentences(labeled['概览'] ?? '');
    stepSentences = splitSentences(labeled['步骤'] ?? '');
    extensionSentences = splitSentences(labeled['延伸'] ?? '');

    const codeSection = labeled['代码'] ?? '';
    if (codeSection) {
      const { code, language } = extractCodeSnippet(codeSection);
      if (code) {
        const formatted = formatCodeSnippet(code, language);
        codeSnippet = formatted.content;
        codeLanguage = formatted.language;
      }
    }

    sentencePool = splitSentences(
      `${labeled['概览'] ?? ''} ${labeled['步骤'] ?? ''} ${labeled['延伸'] ?? ''}`
    );
  } else {
    const extraction = extractCodeSnippet(cleaned);
    if (extraction.code) {
      const formatted = formatCodeSnippet(extraction.code, extraction.language);
      codeSnippet = formatted.content;
      codeLanguage = formatted.language;
    }

    const sentences = splitSentences(extraction.remaining);
    if (sentences.length) {
      topic = sentences.shift() ?? '';
    }
    overviewSentences = sentences.slice(0, 5);
    stepSentences = sentences.slice(5, 10);
    extensionSentences = sentences.slice(10, 13);
    sentencePool = sentences;
  }

  topic = topic
    .replace(/^#+/, '')
    .replace(/^主题[:：]/, '')
    .replace(/(很高兴|欢迎|以下)[\s\S]*/, '')
    .trim();

  if (!topic && fallbackTopic) {
    topic = fallbackTopic.trim();
  }

  if (!topic) {
    topic = '学习主题';
  }

  const fallbacks = buildFallbackSentences(topic);

  const cleanSentence = (s: string) => s
    .replace(/^[ \t]*#+[ \t]*/, '') // 移除 # 标题
    .replace(/^[ \t]*[-*•✅🎯🚀💡📝][ \t]*/, '') // 移除列表符号和装饰符号
    .replace(/^[ \t]*\d+[\.．][ \t]*/, '') // 移除数字列表
    .replace(/^[ \t]*[\[【]?主题|概览|步骤|代码|延伸[\]】]?[:：][ \t]*/, '') // 移除标签
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除加粗
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // 移除 Markdown 链接
    .replace(/[`]/g, '') // 移除反引号
    .trim();

  const overview = ensureSentenceCount(overviewSentences.map(cleanSentence), 3, 5, [...fallbacks.overview], sentencePool.map(cleanSentence));
  const stepsRaw = ensureSentenceCount(stepSentences.map(cleanSentence), 3, 5, [...fallbacks.steps], sentencePool.map(cleanSentence));
  const steps = stepsRaw.map(normalizeStepSentence);
  const extensions = ensureSentenceCount(extensionSentences.map(cleanSentence), 2, 3, [...fallbacks.extension], sentencePool.map(cleanSentence));

  if (!codeSnippet) {
    codeSnippet = '';
    codeLanguage = 'plaintext';
  }

  const lines: string[] = [];
  lines.push(`${DISPLAY_LABELS['主题']}：${topic}`);
  lines.push('');
  
  lines.push(`${DISPLAY_LABELS['概览']}：`);
  overview.forEach(s => lines.push(`  ${s}`));
  lines.push('');
  
  lines.push(`${DISPLAY_LABELS['步骤']}：`);
  steps.forEach(step => {
    lines.push(`  ${step}`);
  });
  lines.push('');

  if (codeSnippet) {
    lines.push(`${DISPLAY_LABELS['代码']}：`);
    const fenceLanguage = codeLanguage === 'plaintext' ? 'text' : codeLanguage;
    lines.push('  ' + '```' + fenceLanguage);
    // 为代码片段的每一行添加缩进
    const indentedCode = codeSnippet.split('\n').map(line => `  ${line}`).join('\n');
    lines.push(indentedCode);
    lines.push('  ' + '```');
  } else {
    lines.push(`${DISPLAY_LABELS['代码']}：`);
    lines.push('  暂无示例');
  }

  lines.push('');
  lines.push(`${DISPLAY_LABELS['延伸']}：`);
  extensions.forEach(s => lines.push(`  ${s}`));

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
};

const finalizeAssistantMessage = (message: Message, userQuestion: string) => {
  if (!message) return;
  const raw = (message.rawContent ?? '').trim();
  if (!raw) return;

  const errorIndicators = ['抱歉', '失败', '错误', '暂时没有回复'];
  if (errorIndicators.some(indicator => raw.includes(indicator))) {
    const sanitized = sanitizeModelText(raw);
    stopTypewriter(message);
    message.fullContent = sanitized;
    message.content = sanitized;
    message.displayCursor = sanitized.length;
    syncMessages();
    return;
  }

  const structured = buildStructuredResponse(raw, userQuestion);
  stopTypewriter(message);
  message.fullContent = structured;
  message.content = structured;
  message.displayCursor = structured.length;

  // 提取主题并更新建议
  const topicMatch = structured.match(/主题 🎯：(.*?)\n/);
  if (topicMatch && topicMatch[1]) {
    updateSuggestions(topicMatch[1].trim());
  }

  syncMessages();
};

const syncMessages = () => {
  messages.value = [...messages.value];
  saveMessages();
};

const updateSuggestions = (topic: string) => {
  const newSuggestions = [
    `深入讲解 ${topic}`,
    `给我一个 ${topic} 的实战例子`,
    `关于 ${topic} 的面试题`,
    '换个话题聊聊'
  ];
  quickSuggestions.value = newSuggestions;
};

const stopTypewriter = (message: Message) => {
  if (message.typingTimer != null && typeof window !== 'undefined') {
    window.clearTimeout(message.typingTimer);
  }
  message.typingTimer = null;
};

const runTypewriterStep = (message: Message) => {
  if (!message.fullContent) {
    stopTypewriter(message);
    return;
  }

  const charArray = Array.from(message.fullContent);
  const cursor = message.displayCursor ?? 0;

  if (cursor >= charArray.length) {
    message.content = message.fullContent;
    message.displayCursor = charArray.length;
    stopTypewriter(message);
    syncMessages();
    return;
  }

  // 动态调整步长和间隔：如果积压较多则加速追赶，否则保持一个字一个字蹦
  const remaining = charArray.length - cursor;
  let batchSize = 1;
  let currentInterval = TYPEWRITER_INTERVAL;

  if (remaining > 150) {
    batchSize = 8; // 积压严重，大步跳跃
    currentInterval = 5;
  } else if (remaining > 50) {
    batchSize = 3; // 积压中等，小步快跑
    currentInterval = 10;
  } else if (remaining > 10) {
    batchSize = 1; // 接近末尾，保持节奏但稍微加快
    currentInterval = 10;
  }
  
  const nextChars = charArray.slice(cursor, cursor + batchSize).join('');
  
  message.content += nextChars;
  message.displayCursor = cursor + batchSize;
  syncMessages();
  scrollToBottom();

  if (typeof window === 'undefined') {
    message.content = message.fullContent;
    message.displayCursor = charArray.length;
    stopTypewriter(message);
    syncMessages();
    scrollToBottom();
    return;
  }

  stopTypewriter(message);
  message.typingTimer = window.setTimeout(() => runTypewriterStep(message), currentInterval);
};

const startTypewriter = (message: Message) => {
  if (!message.fullContent || message.typingTimer != null) {
    return;
  }

  if (typeof window === 'undefined') {
    message.content = message.fullContent;
    message.displayCursor = Array.from(message.fullContent).length;
    syncMessages();
    return;
  }

  runTypewriterStep(message);
};

const stopAllTypewriters = () => {
  messages.value.forEach(stopTypewriter);
};

// 导师侧栏数据
const mentorTips = [
  {
    title: '明确学习目标',
    description: '告诉导师你正在攻克的知识点或项目情境，回答会更聚焦。',
    icon: Lightbulb
  },
  {
    title: '善用上下文',
    description: '引用过往对话或贴上代码片段，让 AI 更好理解你的问题。',
    icon: MessageSquare
  },
  {
    title: '拆解复杂任务',
    description: '把难题拆成几个小问题，逐步向导师提问，效率更高。',
    icon: Target
  }
];

const hotQuestions = [
  '如何规划三周内掌握 Vue3 的学习路径？',
  '请帮我讲讲 Flex 布局和 Grid 的核心区别。',
  '给我一个适合初学者的前端项目练手方案。',
  '遇到组件通信问题时该如何定位？'
];

// 快速建议
const quickSuggestions = ref([
  '我想学习 Vue.js',
  '如何提高 JavaScript 技能',
  '前端项目实战建议',
  '职业发展规划'
]);

const STORAGE_KEY = 'ai_tutor_messages';

const loadMessages = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      messages.value = parsed.map((m: any) => ({
        ...m,
        timestamp: new Date(m.timestamp)
      }));
    } catch (e) {
      console.error('Failed to load messages', e);
    }
  }
};

const saveMessages = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value));
};

const FIXED_RESPONSES: Record<string, string> = {
  '你好': `主题 🎯：开启前端学习之旅

概览 📝：
  你好！我是你的专属前端 AI 助教，很高兴能陪伴你一起学习。
  我专注于 HTML、CSS、JavaScript 以及 Vue 和 React 等现代框架。
  无论你遇到语法难题还是项目瓶颈，我都会为你提供专业的指导。
  我的目标是帮助你建立扎实的技术功底，并掌握企业级开发的实战技巧。
  现在就提出你的第一个问题吧，让我们开始这段精彩的编程旅程。

步骤 🚀：
  首先你可以通过左侧的快捷建议了解一些常见的前端学习话题。
  接着尝试向我提问具体的技术概念，我会为你进行深度的结构化拆解。
  然后你可以将遇到的报错信息或代码片段发给我，我会帮你分析原因。
  随后建议你跟随我提供的步骤进行动手实践，这是掌握编程最快的方法。
  最后记得查看延伸建议部分，那里有许多能提升你技术视野的进阶知识。

代码 💻：
  \`\`\`javascript
  // 示例：如何向我提问
  const question = "如何学习 Vue3？";
  console.log("正在向 AI 助教提问:", question);
  \`\`\`

延伸 💡：
  建议在学习过程中保持好奇心，多思考代码背后的运行逻辑。
  尝试参与社区讨论或阅读优秀的开源代码，这能让你进步更快。
  保持每天敲代码的习惯，哪怕只是实现一个小功能，积少成多。`,

  '你是谁？': `主题 🎯：前端 AI 助教身份简介

概览 📝：
  我是你的专属前端 AI 助教，致力于为你提供最专业的前端技术指导。
  我的知识库涵盖了 HTML、CSS、JavaScript 以及 Vue 和 React 等主流框架。
  无论你是初学者还是进阶开发者，我都能为你提供针对性的学习建议。
  我不仅能解答技术疑问，还能提供代码示例、性能优化和实战方案。
  让我们一起探索前端开发的无限可能，共同构建更美好的 Web 世界。

步骤 🚀：
  首先你可以直接向我提问任何关于前端开发的技术细节或概念。
  接着我会按照结构化的方式为你拆解问题，确保你不仅知其然更知其所以然。
  然后你可以根据我提供的代码示例进行本地实践，加深对知识的理解。
  随后如果你遇到任何报错或逻辑问题，可以将代码片段发给我进行诊断。
  最后建议你关注我提供的延伸建议，以拓宽技术视野并掌握最佳实践。

代码 💻：
  \`\`\`javascript
  // 示例：如何向我提问
  const question = "如何实现一个响应式的导航栏？";
  console.log("正在向 AI 助教提问:", question);
  \`\`\`

延伸 💡：
  建议在提问时提供尽可能详细的上下文，以便我给出更精准的回答。
  尝试将学到的知识应用到实际项目中，实践是检验真理的唯一标准。
  保持对新技术的好奇心，前端领域的发展日新月异，持续学习至关重要。`,

  '介绍一下自己': `主题 🎯：前端 AI 助教身份简介

概览 📝：
  我是你的专属前端 AI 助教，致力于为你提供最专业的前端技术指导。
  我的知识库涵盖了 HTML、CSS、JavaScript 以及 Vue 和 React 等主流框架。
  无论你是初学者还是进阶开发者，我都能为你提供针对性的建议。
  我不仅能解答技术疑问，还能提供代码示例、性能优化和实战方案。
  让我们一起探索前端开发的无限可能，共同构建更美好的 Web 世界。

步骤 🚀：
  首先你可以直接向我提问任何关于前端开发的技术细节或概念。
  接着我会按照结构化的方式为你拆解问题，确保你不仅知其然更知其所以然。
  然后你可以根据我提供的代码示例进行本地实践，加深对知识的理解。
  随后如果你遇到任何报错或逻辑问题，可以将代码片段发给我进行诊断。
  最后建议你关注我提供的延伸建议，以拓宽技术视野并掌握最佳实践。

代码 💻：
  \`\`\`javascript
  // 示例：如何向我提问
  const question = "如何实现一个响应式的导航栏？";
  console.log("正在向 AI 助教提问:", question);
  \`\`\`

延伸 💡：
  建议在提问时提供尽可能详细的上下文，以便我给出更精准的回答。
  尝试将学到的知识应用到实际项目中，实践是检验真理的唯一标准。
  保持对新技术的好奇心，前端领域的发展日新月异，持续学习至关重要。`,

  '你能做什么？': `主题 🎯：前端 AI 助教功能概览

概览 📝：
  作为你的前端导师，我能全方位辅助你的学习和项目开发过程。
  我可以深入浅出地讲解复杂的编程概念，如闭包、原型链或响应式原理。
  我能根据你的需求生成高质量的代码片段，并解释其中的每一行逻辑。
  我擅长诊断代码中的潜在 Bug，并提供性能优化和代码重构的建议。
  此外，我还能为你规划学习路径，推荐最佳实践和前沿的技术资源。

步骤 🚀：
  首先当你遇到不理解的技术名词时，可以随时让我为你进行通俗易懂的解释。
  接着在编写代码遇到困难时，描述你的功能需求，我会为你提供参考实现。
  然后如果你发现页面渲染异常或逻辑不通，请贴出代码让我帮你排查。
  随后你可以向我咨询项目架构建议，我会告诉你如何组织代码更合理。
  最后我会定期分享一些进阶技巧，帮助你从初级开发者向资深专家迈进。

代码 💻：
  \`\`\`javascript
  // 示例：请求性能优化建议
  const optimize = (code) => {
    return aiTutor.analyze(code, { mode: 'performance' });
  };
  \`\`\`

延伸 💡：
  建议利用我的结构化回答来整理自己的学习笔记，形成知识体系。
  不要害怕犯错，将报错信息发给我，我们一起从错误中学习和成长。
  尝试挑战我提供的实战方案，在解决问题的过程中提升综合开发能力。`,

  '我想学习 Vue.js': `主题 🎯：Vue.js 核心概念与学习路径

概览 📝：
  Vue.js 是一款用于构建用户界面的渐进式 JavaScript 框架。🌟
  它采用声明式渲染和组件化模式，极大地提高了前端开发效率。🚀
  通过响应式系统，Vue 能够自动追踪数据变化并高效更新 DOM。⚡
  它是目前国内最流行的前端框架之一，拥有极其丰富的生态系统。🌈
  学习 Vue.js 将为你打开现代前端开发的大门。🚪

步骤 🚀：
  首先通过官方脚手架工具 Vite 快速初始化项目结构。🛠️
  接着深入理解模板语法中的指令系统如条件渲染和列表渲染。📖
  然后掌握组件间的通信机制包括 Props 传递和自定义事件。📡
  随后学习组合式 API 及其生命周期钩子以编写可复用的逻辑。🧩
  最后通过实战项目练习状态管理 Pinia 和路由 Vue Router。🏆

代码 💻：
  \`\`\`javascript
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
      const increment = () => count.value++;
      
      onMounted(() => {
        console.log('组件已挂载');
      });
      
      return { count, increment };
    }
  }
  \`\`\`

延伸 💡：
  建议深入研究 Vue 3 的组合式 API 以编写更具复用性的逻辑。🔍
  探索 Pinia 状态管理库在大型项目中的最佳实践。📊
  关注 Vue 生态中的优秀 UI 组件库如 Element Plus 或 Ant Design Vue。🎨`,

  '如何提高 JavaScript 技能': `主题 🎯：JavaScript 进阶提升指南

概览 📝：
  JavaScript 是前端开发的灵魂，掌握其深层原理是进阶的关键。🧠
  从基础语法到异步编程，每一个环节都需要扎实的理论支撑。📚
  现代前端开发要求开发者不仅会用，更要理解其背后的运行机制。⚙️
  持续学习 ES6+ 新特性能够显著提升代码的简洁性和可维护性。✨
  通过大量的代码实践和源码阅读，你可以建立起完整的技术体系。🏗️

步骤 🚀：
  首先彻底掌握闭包、原型链和作用域链等核心概念。🔐
  接着深入学习 Promise、async/await 等异步编程方案。⏳
  然后研究现代 JavaScript 引擎的垃圾回收和执行上下文。🗑️
  随后通过重构旧项目来实践设计模式和函数式编程思想。🛠️
  最后尝试阅读常用工具库或框架的源码以吸收优秀设计。📖

代码 💻：
  \`\`\`javascript
  // 异步编程与闭包结合示例
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return () => console.log('获取到的数据:', data);
    } catch (error) {
      console.error('请求失败:', error);
    }
  };
  
  const logger = await fetchData('https://api.example.com/data');
  logger?.();
  \`\`\`

延伸 💡：
  建议关注 TypeScript 的学习，它是现代大型项目的标配。🛡️
  探索 Node.js 环境下的 JavaScript 开发以扩展全栈能力。🌐
  定期参与开源项目或在技术社区分享自己的学习心得。🤝`,

  '前端项目实战建议': `主题 🎯：前端实战项目开发策略

概览 📝：
  实战项目是将理论知识转化为实际能力的最佳途径。🏗️
  一个优秀的项目不仅要有精美的 UI，更要有合理的架构设计。🎨
  在开发过程中，规范的代码风格和完善的文档同样至关重要。📝
  通过模拟真实业务场景，你可以提前接触到企业级开发的痛点。💼
  从需求分析到部署上线，全流程的参与能极大提升综合素质。🚀

步骤 🚀：
  首先根据兴趣选择一个具有挑战性但难度适中的项目主题。🎯
  接着进行详细的需求分析并绘制简单的原型图和架构图。📐
  然后搭建开发环境并配置代码规范工具如 ESLint 和 Prettier。🛠️
  随后按照功能模块逐步开发并坚持编写单元测试。🧪
  最后将项目部署到 GitHub Pages 或 Vercel 并撰写 README。🌐

代码 💻：
  \`\`\`javascript
  // 项目配置示例 (vite.config.js)
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import path from 'path';
  
  export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    }
  });
  \`\`\`

延伸 💡：
  建议在项目中尝试接入真实的后端 API 以练习前后端联调。🔗
  学习使用 Docker 容器化技术来优化项目的部署流程。🐳
  关注前端性能优化手段如代码分割、懒加载和缓存策略。⚡`,

  '职业发展规划': `主题 🎯：前端工程师职业成长路径

概览 📝：
  前端领域技术迭代极快，清晰的职业规划能让你少走弯路。🚀
  从初级开发到高级架构师，每个阶段都有其核心竞争力和要求。🏆
  除了硬核的技术实力，沟通能力和解决问题的思维也同样重要。🤝
  保持对新技术的敏感度，同时深耕一两个核心领域是明智之选。🔍
  职业发展是一个长跑过程，持续的学习热情是核心驱动力。🏃

步骤 🚀：
  首先夯实 HTML/CSS/JS 基础并熟练掌握至少一个主流框架。📚
  接着在工作中积累项目经验并开始关注前端工程化和性能优化。🛠️
  然后尝试承担更多责任如技术选型、架构设计或团队管理。💼
  随后建立个人品牌，通过博客、开源或演讲提升行业影响力。🌟
  最后根据个人兴趣选择向技术专家、架构师或管理岗位转型。🎯

代码 💻：
  \`\`\`javascript
  // 个人技能树管理逻辑示例
  const skillTree = {
    base: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['Vue', 'React'],
    engineering: ['Vite', 'Webpack', 'CI/CD'],
    softSkills: ['Communication', 'Problem Solving']
  };
  
  function checkProgress(category) {
    const skills = skillTree[category];
    console.log(\`正在评估 \${category} 领域的掌握情况...\`);
    return skills.length > 0;
  }
  
  checkProgress('engineering');
  \`\`\`

延伸 💡：
  建议定期复盘自己的技术栈并根据市场需求进行动态调整.📊
  多参加行业技术大会以拓宽视野并结交志同道合的朋友。🤝
  学习一些产品和设计知识，这有助于你从更高维度理解业务。💡`,

  '如何规划三周内掌握 Vue3 的学习路径？': `主题 🎯：Vue3 三周快速上手路径

概览 📝：
  Vue3 的学习需要循序渐进，从基础语法到高级特性逐步深入。🌟
  第一周应侧重于核心概念的理解，如响应式原理和模板语法。📚
  第二周则需要通过实际案例来掌握组合式 API 的灵活运用。🛠️
  第三周的目标是完成一个完整的项目，并学习工程化相关知识。🚀
  持续的练习 and 对官方文档的研读是掌握 Vue3 的不二法门。📖

步骤 🚀：
  第一周重点学习模板语法、计算属性、监听器以及生命周期钩子。
  第二周深入研究 Composition API，包括 ref、reactive 和 toRefs。
  第三周开始接触 Vue Router 路由管理和 Pinia 状态管理工具。
  随后尝试使用 Vite 搭建项目并集成 Element Plus 等 UI 组件库。
  最后通过实现一个 TodoList 或简单的博客系统来巩固所学知识。

代码 💻：
  \`\`\`javascript
  // Vue 3 组合式 API 核心示例
  import { ref, reactive, computed, onMounted } from 'vue';

  export default {
    setup() {
      const count = ref(0);
      const state = reactive({ title: 'Vue3 学习计划' });
      const doubleCount = computed(() => count.value * 2);

      const increment = () => count.value++;

      onMounted(() => {
        console.log('学习旅程正式开始！');
      });

      return { count, state, doubleCount, increment };
    }
  };
  \`\`\`

延伸 💡：
  建议关注 Vue 3.4+ 引入的 defineModel 等新特性以简化开发。✨
  探索 Vue 生态中的测试工具如 Vitest 来提升代码质量。🧪
  学习如何编写自定义 Hooks 以实现逻辑的高度复用。🔗`,

  '请帮我讲讲 Flex 布局和 Grid 的核心区别。': `主题 🎯：Flex 与 Grid 布局深度对比

概览 📝：
  Flexbox 是一维布局系统，主要用于处理行或列中的元素排列。📏
  Grid 是二维布局系统，能够同时处理行和列的复杂结构设计。🕸️
  Flex 擅长处理内容驱动的布局，即根据内容大小自动调整空间。📦
  Grid 则更适合布局驱动的设计，即先定义网格再填充内容。📐
  在现代前端开发中，两者通常结合使用以达到最佳的视觉效果。🎨

步骤 🚀：
  首先根据设计稿的复杂度决定使用一维还是二维布局方案。
  接着对于简单的导航栏或列表项，优先考虑使用 Flex 布局.
  然后对于复杂的页面主体结构，使用 Grid 定义行和列的比例。
  随后在 Grid 的单元格内部，可以嵌套 Flex 来微调元素位置。
  最后通过媒体查询配合两种布局实现完美的响应式适配效果。

代码 💻：
  \`\`\`css
  /* Flex 与 Grid 结合示例 */
  .container {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  \`\`\`

延伸 💡：
  建议使用浏览器开发者工具的布局面板来可视化调试网格。🔍
  学习 CSS 变量与布局属性结合使用以实现动态主题切换。🌈
  关注容器查询（Container Queries）这一布局领域的新特性。🚀`,

  '给我一个适合初学者的前端项目练手方案。': `主题 🎯：初学者前端实战项目推荐

概览 📝：
  选择一个合适的练手项目是提升前端技能最有效的方式之一。🌟
  项目应当涵盖基础的增删改查功能以及常见的交互逻辑处理。🛠️
  通过模仿成熟的产品界面，你可以快速积累 UI 实现的经验。🎨
  在开发过程中，应当注重代码的规范性和逻辑的清晰度。📏
  完成项目后的复盘和重构能让你对技术有更深层次的理解。🧠

步骤 🚀：
  首先尝试实现一个功能完备的待办事项管理器（TodoList）。
  接着开发一个天气预报应用，练习调用第三方 API 并处理数据。
  然后挑战制作一个个人作品集网站，展示你的简历和项目成果。
  随后尝试构建一个简单的电商商品列表页，包含搜索和筛选功能。
  最后将这些项目部署到线上并邀请他人进行测试和反馈。

代码 💻：
  \`\`\`javascript
  // 简单的 TodoList 逻辑示例
  const todos = ref([]);
  const newTodo = ref('');

  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push({
        id: Date.now(),
        text: newTodo.value,
        completed: false
      });
      newTodo.value = '';
    }
  };

  const toggleTodo = (id) => {
    const todo = todos.value.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  };
  \`\`\`

延伸 💡：
  建议在项目中使用 Git 进行版本管理并养成良好的提交习惯。📂
  尝试为你的项目添加一些简单的动画效果以提升用户体验。✨
  学习如何编写技术文档来记录项目的开发过程和遇到的问题。📝`,

  '遇到组件通信问题时该如何定位？': `主题 🎯：Vue 组件通信问题排查指南

概览 📝：
  组件通信是 Vue 开发中的核心环节，也是最容易出错的地方。⚠️
  定位问题的第一步是明确数据流向，是父传子还是子传父。↕️
  利用 Vue Devtools 可以直观地观察组件树和 Props 的变化。🔍
  复杂的通信问题往往源于对响应式原理或生命周期的误解。🧠
  建立一套标准化的排查流程能显著提升解决问题的效率。🚀

步骤 🚀：
  首先检查父组件传递的 Props 名称是否与子组件接收的一致。
  接着确认子组件是否正确触发了事件并携带了预期的参数。
  然后观察 Vue Devtools 中的组件状态，确认数据是否已更新。
  随后检查是否存在异步操作导致的数据更新延迟或顺序错误。
  最后如果涉及多层级通信，考虑使用 Provide/Inject 或 Pinia。

代码 💻：
  \`\`\`javascript
  // 组件通信调试技巧示例
  // 父组件
  const handleUpdate = (val) => {
    console.log('收到子组件更新:', val);
    parentData.value = val;
  };

  // 子组件
  const emit = defineEmits(['update']);
  const sendData = () => {
    console.log('准备发送数据...');
    emit('update', '新数据');
  };
  \`\`\`

延伸 💡：
  建议深入学习 Vue 的响应式追踪机制以理解数据变化的根源。🔬
  在大型项目中，严格遵守单向数据流原则以降低维护成本。🛡️
  探索全局事件总线的替代方案，如使用轻量级的 mitt 库。`
};

const recommendedResource = {
  title: 'MDN Web Docs',
  url: 'https://developer.mozilla.org/zh-CN/docs/Web'
};

const systemInstruction = [
  '你是一位资深前端技术专家和导师，你的名字叫“前端 AI 助教”。',
  '你专注于帮助学生快速掌握 HTML、CSS、JavaScript、Vue.js、React、Webpack、TypeScript 等前端技术。',
  '',
  '【核心规则 - 必须严格遵守】',
  '1. 你的回答必须且只能包含以下5个部分，顺序固定，不能添加任何额外内容：',
  '   [主题 🎯] -> [概览 📝] -> [步骤 🚀] -> [代码 💻] -> [延伸 💡]',
  '',
  '2. 身份认同：',
  '   - 当被问及“你是谁”、“你的身份”或“你能做什么”时，必须明确回答你是“前端 AI 助教”。',
  '   - 严禁将“你是谁”或“你好”作为技术主题进行拆解（例如：不要说“你是谁涵盖基础概念...”）。',
  '   - 身份类问题的回答也必须遵循 5 段式结构，但在“代码”部分可以展示一个简单的技术示例。',
  '',
  '3. 各部分格式要求：',
  '   主题 🎯：[具体主题名称]',
  '   概览 📝：',
  '     [句子1]',
  '     [句子2]',
  '     [句子3]',
  '     [句子4]',
  '     [句子5]',
  '   步骤 🚀：',
  '     [步骤1]',
  '     [步骤2]',
  '     [步骤3]',
  '     [步骤4]',
  '     [步骤5]',
  '   代码 💻：',
  '     ```javascript',
  '     // 代码内容',
  '     ```',
  '   延伸 💡：',
  '     [建议1]',
  '     [建议2]',
  '     [建议3]',
  '',
  '4. 详细约束：',
  '   - 概览和步骤必须包含 3-5 个完整句子，每个句子独立成行。',
  '   - 延伸必须包含 2-3 个建议，每个建议独立成行。',
  '   - 每行开头必须有两个空格的缩进（除了标签行）。',
  '   - 绝对禁止使用 Markdown 标题（#、##、###）。',
  '   - 绝对禁止使用任何形式的列表符号（-、*、1. 或 ✅、🎯 等引导的列表）。',
  '   - 鼓励在概览和步骤中使用加粗（**关键词**）来强调核心概念。',
  '   - 严禁在正文中使用突兀的括号或在括号内包含多个问句/句子。',
  '   - 代码块必须使用三反引号，且整体缩进两个空格。',
  '   - 保持专业、严谨且导师般的语气，严禁在正文中过度使用 Emoji，仅限在各部分标题中使用。',
].join('\n');

// 方法
const sendMessage = async (rawContent: string) => {
  const content = rawContent.trim();
  if (!content || isTyping.value) return;

  shouldAutoScroll.value = true;

  const userMessage: Message = {
    id: Date.now().toString(),
    role: 'user',
    content,
    timestamp: new Date()
  };

  messages.value.push(userMessage);
  currentMessage.value = '';

  await nextTick();
  scrollToBottom();

  isTyping.value = true;

  const history = messages.value.slice(-6).map(message => ({
    role: message.role === 'user' ? 'user' : 'assistant',
    content: message.fullContent ?? message.content
  }));

  const assistantMessage: Message = {
    id: (Date.now() + 1).toString(),
    role: 'assistant',
    content: 'AI导师正在思考...',
    fullContent: '',
    displayCursor: 0,
    typingTimer: null,
    timestamp: new Date(),
    rawContent: ''
  };

  messages.value.push(assistantMessage);

  await nextTick();
  scrollToBottom(true);

  // 检查是否有固定回复 (支持模糊匹配，忽略末尾标点)
  const normalizedInput = content.replace(/[？?！!。，, ]+$/, '');
  const fixedKey = Object.keys(FIXED_RESPONSES).find(key => {
    const normalizedKey = key.replace(/[？?！!。，, ]+$/, '');
    return normalizedInput === normalizedKey;
  });

  if (fixedKey) {
    const response = FIXED_RESPONSES[fixedKey];
    assistantMessage.rawContent = response;
    assistantMessage.fullContent = response;
    // 使用打字机效果显示固定回复，保持体验一致
    startTypewriter(assistantMessage);
    isTyping.value = false;
    syncMessages();
    return;
  }

  try {
    let hasChunk = false;

    const stream = sendMessageStream(content, history);

    for await (const chunk of stream) {
      if (!chunk || !chunk.trim()) {
        continue;
      }

      if (!hasChunk) {
        hasChunk = true;
        isTyping.value = false;
        assistantMessage.content = ''; // 收到第一个字时，清除“正在思考”状态文字
      }

      assistantMessage.rawContent = `${assistantMessage.rawContent ?? ''}${chunk}`;
      // 流式输出时，直接使用 rawContent，避免 chunk-by-chunk 的 sanitization 破坏 Markdown 标记
      assistantMessage.fullContent = assistantMessage.rawContent;
      assistantMessage.timestamp = new Date();
      startTypewriter(assistantMessage);

      await nextTick();
      scrollToBottom();
    }

    if (!hasChunk) {
      const fallback = 'AI 暂时没有回复，请稍后再试。';
      assistantMessage.rawContent = fallback;
      assistantMessage.fullContent = fallback;
      assistantMessage.content = fallback;
      assistantMessage.displayCursor = Array.from(fallback).length;
      stopTypewriter(assistantMessage);
      syncMessages();
    }
  } catch (error) {
    console.error('Gemini chat error:', error);
    const fallback = '抱歉，调用 AI 服务失败，请稍后再试。';
    assistantMessage.rawContent = fallback;
    assistantMessage.fullContent = fallback;
    assistantMessage.content = fallback;
    assistantMessage.displayCursor = Array.from(fallback).length;
    stopTypewriter(assistantMessage);
    syncMessages();
  } finally {
    finalizeAssistantMessage(assistantMessage, content);
    isTyping.value = false;
    nextTick(() => scrollToBottom());
  }
};

const sendCurrentMessage = async () => {
  await sendMessage(currentMessage.value);
};

const openResource = (url: string) => {
  if (!url) return;
  window.open(url, '_blank', 'noopener');
};

const clearChat = async () => {
  stopAllTypewriters();
  messages.value = [];
  currentMessage.value = '';
  isTyping.value = false;
  shouldAutoScroll.value = true;
  localStorage.removeItem(STORAGE_KEY);
  await initializeChat(systemInstruction);
};

const exportChat = () => {
  const chatData = {
    timestamp: new Date().toISOString(),
    messages: messages.value.map(message => ({
      id: message.id,
      role: message.role,
      content: message.fullContent ?? message.content,
      timestamp: message.timestamp
    }))
  };
  
  const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-tutor-chat.json';
  a.click();
  URL.revokeObjectURL(url);
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('zh-CN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizeFences = (input: string): string =>
  input.replace(/```([A-Za-z0-9+#.-]*)/g, '\n```$1\n');

const formatInlineMarkdown = (text: string): string => {
  // 移除标题标记但保留文字
  let cleaned = text
    .replace(/^[ \t]*#+[ \t]*/gm, '') // 移除行首的 # 标题
    .replace(/(^|[ \t])#+[ \t]*/g, '$1') // 移除行中的 # 标记
    .replace(/\*([^*]+)\*/g, '$1') // 移除斜体 *
    .replace(/\[(.*?)\]\(.*?\)/g, '$1'); // 移除链接，保留文字

  return escapeHtml(cleaned)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') // 支持加粗
    .replace(/`([^`]+)`/g, '<code>$1</code>'); // 保留行内代码
};

const renderMarkdown = (text: string): string => {
  const lines = normalizeFences(text).split(/\r?\n/);
  const htmlParts: string[] = [];
  let inCodeBlock = false;
  let codeLanguage = '';
  const codeLines: string[] = [];
  let stepBlockOpen = false;
  let gapPending = false;

  const ensureGap = () => {
    if (gapPending) {
      htmlParts.push('<div class="section-gap"></div>');
      gapPending = false;
    }
  };

  const closeSteps = () => {
    if (!stepBlockOpen) return;
    htmlParts.push('</div></div>');
    stepBlockOpen = false;
  };

  const flushCodeBlock = () => {
    if (!inCodeBlock) return;
    ensureGap();
    const codeContent = codeLines.join('\n');
    const escaped = escapeHtml(codeContent);
    const safeLanguage = codeLanguage.replace(/[^a-zA-Z0-9+#.-]/g, '').toLowerCase();
    const languageClass = safeLanguage ? ` class="language-${safeLanguage}"` : '';
    htmlParts.push(`<pre><code${languageClass}>${escaped}</code></pre>`);
    codeLines.length = 0;
    codeLanguage = '';
    inCodeBlock = false;
  };

  for (const rawLine of lines) {
    const fenceMatch = rawLine.match(/^\s*```\s*(.*)$/);
    if (fenceMatch) {
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        closeSteps();
        ensureGap();
        inCodeBlock = true;
        codeLanguage = fenceMatch[1].trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    const trimmed = rawLine.trim();

    if (!trimmed) {
      closeSteps();
      gapPending = true;
      continue;
    }

    const colonIndex = trimmed.indexOf('：') !== -1 ? trimmed.indexOf('：') : trimmed.indexOf(':');
    if (colonIndex !== -1) {
      const label = trimmed.slice(0, colonIndex).trim();
      const rest = trimmed.slice(colonIndex + 1).trim();
      const normalizedLabel = label.replace(/\s+/g, '');

      // 检查是否包含预定义的标签关键字
      const baseLabel = SECTION_LABELS.find(l => normalizedLabel.includes(l));

      if (!baseLabel) {
        // Treat as regular paragraph if not a recognized label
        ensureGap();
        htmlParts.push(`<div class="section-paragraph">${formatInlineMarkdown(trimmed)}</div>`);
        continue;
      }

      if (baseLabel === '步骤' && !rest) {
        closeSteps();
        ensureGap();
        htmlParts.push('<div class="section-block section-block--steps">');
        htmlParts.push(`<div class="section-label">${escapeHtml(label)}：</div>`);
        htmlParts.push('<div class="section-steps">');
        stepBlockOpen = true;
        continue;
      }

      closeSteps();
      ensureGap();

      const blockClass = baseLabel === '主题'
        ? 'section-block section-block--heading'
        : 'section-block';

      const contentClass = baseLabel === '主题'
        ? 'section-content section-content--heading'
        : 'section-content';

      if (rest) {
        htmlParts.push(
          `<div class="${blockClass}"><div class="section-label">${escapeHtml(label)}：</div>` +
          `<div class="${contentClass}">${formatInlineMarkdown(rest)}</div></div>`
        );
      } else {
        htmlParts.push(`<div class="${blockClass}"><div class="section-label">${escapeHtml(label)}：</div></div>`);
      }

      continue;
    }

    if (stepBlockOpen) {
      htmlParts.push(`<div class="step-item">${formatInlineMarkdown(trimmed)}</div>`);
      continue;
    }

    ensureGap();
      const processed = trimmed
        .replace(/(\d+)([\.．])(?=\S)/g, '$1$2 ')
        .replace(/([。！？!?])(?!\s)/g, '$1\n')
        .split(/\n+/)
        .map(part => part.trim())
        .filter(Boolean);

      if (processed.length > 1) {
        processed.forEach(fragment => {
          htmlParts.push(`<div class="section-paragraph">${formatInlineMarkdown(fragment)}</div>`);
        });
      } else {
        htmlParts.push(`<div class="section-paragraph">${formatInlineMarkdown(trimmed)}</div>`);
      }
  }

  closeSteps();
  flushCodeBlock();

  return `<div class="assistant-response">${htmlParts.join('')}</div>`;
};

const renderPlainText = (text: string): string => {
  const lines = normalizeFences(text).split(/\r?\n/);
  const htmlParts: string[] = [];
  let inCodeBlock = false;
  let codeLanguage = '';
  const codeLines: string[] = [];

  const flushCodeBlock = () => {
    if (!inCodeBlock) return;
    const codeContent = codeLines.join('\n');
    const escaped = escapeHtml(codeContent);
    const safeLanguage = codeLanguage.replace(/[^a-zA-Z0-9+#.-]/g, '').toLowerCase();
    const languageClass = safeLanguage ? ` class="language-${safeLanguage}"` : '';
    htmlParts.push(`<pre><code${languageClass}>${escaped}</code></pre>`);
    codeLines.length = 0;
    codeLanguage = '';
    inCodeBlock = false;
  };

  for (const rawLine of lines) {
    const fenceMatch = rawLine.match(/^\s*```\s*(.*)$/);
    if (fenceMatch) {
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        inCodeBlock = true;
        codeLanguage = fenceMatch[1].trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    const trimmed = rawLine.trim();
    if (!trimmed) {
      htmlParts.push('<br />');
      continue;
    }

    const inlineProcessed = escapeHtml(trimmed).replace(/`([^`]+)`/g, (_match, code) => `<code>${escapeHtml(code)}</code>`);
    htmlParts.push(`<p>${inlineProcessed}</p>`);
  }

  flushCodeBlock();
  return htmlParts.join('');
};

const formatMessageContent = (message: Message): string =>
  message.role === 'assistant'
    ? renderMarkdown(message.content)
    : renderPlainText(message.content);

const scrollToBottom = (force = false) => {
  if (!chatContainer.value) return;

  if (force || shouldAutoScroll.value) {
    chatContainer.value.scrollTo({
      top: chatContainer.value.scrollHeight,
      behavior: 'smooth'
    });
    shouldAutoScroll.value = true;
    showScrollToBottom.value = false;
  }
};

const handleScroll = () => {
  if (!chatContainer.value) return;

  const el = chatContainer.value;
  const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
  // Allow small threshold so slight offset doesn't disable自动滚动
  shouldAutoScroll.value = distanceFromBottom < 200;
  showScrollToBottom.value = !shouldAutoScroll.value;
};

const handleExternalAsk = (event: any) => {
  if (event.detail && event.detail.question) {
    sendMessage(event.detail.question);
  }
};

onMounted(async () => {
  if (typeof document !== 'undefined') {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  loadMessages();
  window.addEventListener('ask-ai-tutor', handleExternalAsk);

  try {
    await initializeChat(systemInstruction);
  } catch (error) {
    console.error('初始化 AI 聊天失败:', error);
  }
});

onBeforeUnmount(() => {
  stopAllTypewriters();
  window.removeEventListener('ask-ai-tutor', handleExternalAsk);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = previousBodyOverflow;
  }
});

watch(
  () => messages.value.length,
  () => {
    nextTick(() => scrollToBottom(true));
  }
);

watch(isTyping, (typing: boolean) => {
  if (!typing) {
    nextTick(() => scrollToBottom(true));
  }
});
</script>

<style scoped>
.markdown-heading {
  font-weight: 600;
  margin: 0.25rem 0;
  color: #111827;
}

.markdown-heading.level-1 {
  font-size: 1rem;
}

.markdown-content pre {
  background-color: #0f172a;
  color: #f8fafc;
  padding: 1rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 0.75rem 0;
  line-height: 1.6;
}

.markdown-content pre code {
  display: block;
  font-family: 'Fira Code', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-size: 0.85rem;
  white-space: pre;
  tab-size: 2;
  word-break: normal;
}

.markdown-heading.level-2 {
  font-size: 0.95rem;
}

.markdown-heading.level-3,
.markdown-heading.level-4,
.markdown-heading.level-5,
.markdown-heading.level-6 {
  font-size: 0.9rem;
}

.markdown-content :deep(hr) {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0.5rem 0;
}

.markdown-table-wrapper {
  overflow-x: auto;
}

.markdown-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  color: #374151;
}

.markdown-table th,
.markdown-table td {
  border: 1px solid #e5e7eb;
  padding: 0.5rem 0.75rem;
  text-align: left;
}

.markdown-table thead {
  background-color: #f9fafb;
  font-weight: 600;
}

.markdown-content :deep(p) {
  margin: 0.25rem 0;
}

.markdown-content :deep(pre) {
  background: #111827;
  color: #f9fafb;
  padding: 0.75rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.5;
}

.markdown-content :deep(code) {
  font-family: 'Fira Code', 'JetBrains Mono', Consolas, 'Courier New', monospace;
  background: rgba(59, 130, 246, 0.1);
  color: #1f2937;
  padding: 0.1rem 0.3rem;
  border-radius: 0.35rem;
}

.markdown-content :deep(strong) {
  font-weight: 700;
  color: #111827;
}

.markdown-content :deep(pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

.markdown-content .assistant-response {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #1f2937;
  line-height: 1.7;
}

.markdown-content .section-gap {
  height: 0.25rem;
}

.markdown-content .section-block {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.markdown-content .section-block--heading {
  gap: 0.25rem;
}

.markdown-content .section-label {
  font-weight: 600;
  color: #111827;
  font-size: 0.95rem;
}

.markdown-content .section-block--heading .section-label {
  font-size: 1rem;
}

.markdown-content .section-content {
  white-space: pre-wrap;
  text-indent: 2em;
  color: #4b5563;
}

.markdown-content .section-content--heading {
  text-indent: 0;
  font-weight: 600;
  color: #111827;
}

.markdown-content .section-paragraph {
  white-space: pre-wrap;
  text-indent: 2em;
  color: #4b5563;
}

.markdown-content .section-block--steps {
  gap: 0.5rem;
}

.markdown-content .section-block--steps .section-label {
  margin-bottom: 0.25rem;
}

.markdown-content .section-steps {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0.5rem;
}

.markdown-content .step-item {
  position: relative;
  padding-left: 1.5rem;
  color: #374151;
}

.markdown-content .step-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65rem;
  width: 0.75rem;
  height: 0.2rem;
  border-radius: 9999px;
  background: linear-gradient(90deg, #3b82f6, #f97316);
}

.markdown-content pre {
  margin-left: 1.5rem;
}
</style>