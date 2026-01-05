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
                'flex gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              ]"
            >
              <!-- AI 头像 - 左侧 -->
              <div v-if="message.role === 'assistant'" class="flex-shrink-0">
                <div class="w-8 h-8 bg-gradient-to-r from-primary to-orange-400 rounded-full flex items-center justify-center">
                  <Bot :size="16" class="text-white" />
                </div>
              </div>

              <!-- 消息内容 -->
              <div 
                :class="[
                  'max-w-[70%] rounded-2xl p-4 shadow-sm space-y-3',
                  message.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white border border-gray-100 rounded-bl-none'
                ]"
              >
                <div
                  class="text-sm leading-relaxed markdown-content"
                  :class="message.role === 'user' ? 'text-white' : ''"
                  v-html="formatMessageContent(message)"
                ></div>
                <!-- 流式输出光标 - 仅在最后一条 AI 消息且还在打字时显示 -->
                <div 
                  v-if="message.role === 'assistant' && isTyping && message.id === (messages[messages.length - 1]?.id)"
                  class="flex items-center gap-2 mt-1"
                  title="AI 正在生成回复..."
                >
                  <span class="streaming-cursor"></span>
                  <span class="text-xs text-gray-400 font-medium">正在思考中...</span>
                </div>
                <span :class="['text-xs block', message.role === 'user' ? 'text-white/70' : 'text-gray-500']">
                  {{ formatTime(message.timestamp) }}
                </span>
              </div>

              <!-- 用户头像 - 右侧 -->
              <div v-if="message.role === 'user'" class="flex-shrink-0">
                <div :class="['w-8 h-8 bg-gradient-to-r rounded-full flex items-center justify-center shadow-sm', userAvatarColor]" :title="currentUser?.username || 'User'">
                  <span class="text-white font-semibold text-xs">{{ userInitial }}</span>
                </div>
              </div>
            </div>

            <!-- 正在输入指示器已移除，光标在消息中显示 -->
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
}

interface User {
  id: number;
  username: string;
  email: string;
  level: number;
  experience: number;
  created_at: string;
}

// 响应式数据
const messages = ref<Message[]>([]);
const currentMessage = ref('');
const isTyping = ref(false);
const chatContainer = ref<HTMLDivElement | null>(null);
const shouldAutoScroll = ref(true);
const showScrollToBottom = ref(false);
const currentUser = ref<User | null>(null);
const userAvatarColor = ref('from-blue-500 to-cyan-500');
const userInitial = ref('U');
let previousBodyOverflow = '';

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

const recommendedResource = {
  title: 'MDN Web Docs',
  url: 'https://developer.mozilla.org/zh-CN/docs/Web'
};

const systemInstruction = [
  '你是一位前端基础知识导师，请围绕 HTML、CSS、JavaScript 等核心概念提供循序渐进的指导。必须按照以下格式返回内容：',
  '主题：<一句话概括主题>',
  '',
  '知识点概述：<2-3 句话解释核心知识点，使用完整句子，不使用任何列表符号或特殊标记，不要使用 Markdown 标题>',
  '',
  '分步指导：<2-3 句话描述学习步骤，用自然语言，在句子之间加入换行，不使用项目符号、数字编号或 #、-、* 等符号>',
  '',
  '代码示例：<如需展示代码，请紧跟一段使用三反引号包裹的代码块，并写明语言；若无代码，请直接写“暂无示例”>',
  '',
  '延伸建议：<给出后续学习建议，使用自然语言，避免任何列表符号或 Markdown 标题符号>',
  '',
  '不要输出其他多余符号或 Markdown 控制字符，除非用于包裹代码。全部回答使用中文，并保持语气友好专业。'
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
    content: message.content
  }));

  const assistantMessage: Message = {
    id: (Date.now() + 1).toString(),
    role: 'assistant',
    content: '',
    timestamp: new Date()
  };

  messages.value.push(assistantMessage);

  await nextTick();
  scrollToBottom(true);

  try {
    let hasStarted = false;
    let charBuffer = '';  // 字符缓冲，用于逐字显示

    const stream = sendMessageStream(content, history);

    for await (const chunk of stream) {
      if (!chunk) {
        continue;
      }

      if (!hasStarted) {
        hasStarted = true;
        isTyping.value = false;
      }

      // 将 chunk 的每个字符逐个添加到消息中
      for (const char of chunk) {
        assistantMessage.content += char;
        assistantMessage.timestamp = new Date();
        charBuffer += char;
        
        // 每个字符都更新 UI，实现"逐字蹦出"效果
        messages.value = [...messages.value];
        await nextTick();
        scrollToBottom();
        
        // 中文字符和英文字符的显示速度可以不同
        // 中文字符稍微快一点（0ms），英文稍微慢一点（5ms）
        const isChineseChar = /[\u4E00-\u9FA5]/.test(char);
        if (!isChineseChar && char !== ' ' && char !== '\n') {
          // 为英文字符、符号添加极小延迟，增强视觉效果
          await new Promise(resolve => setTimeout(resolve, 2));
        }
      }
    }

    // 最后确保所有内容都已显示
    messages.value = [...messages.value];
    await nextTick();
    scrollToBottom();

    // 确保消息不为空
    if (!assistantMessage.content) {
      assistantMessage.content = 'AI 暂时没有回复，请稍后再试。';
    }
  } catch (error) {
    console.error('AI chat error:', error);
    assistantMessage.content = '抱歉，调用 AI 服务失败，请稍后再试。';
  } finally {
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
  messages.value = [];
  currentMessage.value = '';
  isTyping.value = false;
  shouldAutoScroll.value = true;
  await initializeChat(systemInstruction);
};

const exportChat = () => {
  const chatData = {
    timestamp: new Date().toISOString(),
    messages: messages.value
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

// 根据用户名生成一致的颜色
const generateAvatarColor = (username: string): string => {
  const colorPairs = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-blue-500',
    'from-rose-500 to-pink-500',
    'from-amber-500 to-orange-500',
    'from-teal-500 to-cyan-500',
    'from-violet-500 to-purple-500',
    'from-lime-500 to-green-500'
  ];
  
  // 使用用户名长度和字符码生成一致的索引
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = ((hash << 5) - hash) + username.charCodeAt(i);
    hash = hash & hash; // 转换为32位整数
  }
  
  const index = Math.abs(hash) % colorPairs.length;
  return colorPairs[index];
};

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizeFences = (input: string): string => {
  // 在代码块前后添加换行，确保独占一行
  let result = input.replace(/```([A-Za-z0-9+#.-]*)/g, '\n```$1\n');
  
  // 修复没有语言标识的代码块，通过检查首行内容推断语言
  const codeBlockPattern = /```\n([\s\S]*?)(?=```|\n$)/g;
  result = result.replace(codeBlockPattern, (match) => {
    const lines = match.split('\n');
    const firstLine = lines[1]?.trim() || '';
    
    // 检测是否已有语言标识
    if (/^```[a-z0-9+#.-]+$/.test(lines[0])) {
      return match; // 已有语言标识，保持原样
    }
    
    // 推断语言
    let detectedLang = '';
    
    // JavaScript/TypeScript 关键词
    if (/^(import |export |const |let |var |function |class |async |interface |type |=>|import\s*{|from\s+['"])/.test(firstLine)) {
      detectedLang = 'javascript';
    }
    // HTML/Vue 关键词
    else if (/^(<|<!DOCTYPE|<template|<script|<style|<div|<span|<component|<router|src=|href=)/.test(firstLine)) {
      detectedLang = 'html';
    }
    // Python 关键词
    else if (/^(def |import |from |class |if |for |while |return |pass |print |assert |with )/.test(firstLine)) {
      detectedLang = 'python';
    }
    // CSS 关键词
    else if (/^([.#]?[\w-]+\s*\{|@import|@media|@keyframes|color:|background:|margin:|padding:|border:)/.test(firstLine)) {
      detectedLang = 'css';
    }
    // JSON 关键词
    else if (/^[\{\[]/.test(firstLine)) {
      detectedLang = 'json';
    }
    
    if (detectedLang) {
      return match.replace(/```\n/, `\`\`\`${detectedLang}\n`);
    }
    
    return match;
  });
  
  return result;
};

const formatInlineMarkdown = (text: string): string => {
  let result = escapeHtml(text);
  
  // 处理markdown链接格式 [text](url) - 必须在最前面处理
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // 处理删除线 ~~text~~
  result = result.replace(/~~([^~\n]+?)~~/g, '<del>$1</del>');
  
  // 处理内联代码（必须在加粗之前，避免冲突）
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // 处理加粗：**text** 格式（重要：必须在斜体之前处理）
  // 使用更精确的模式：不匹配包含换行的内容
  result = result.replace(/\*\*([^\n*]+?)\*\*/g, '<strong>$1</strong>');
  
  // 处理加粗：__text__ 格式
  result = result.replace(/__([^\n_]+?)__/g, '<strong>$1</strong>');
  
  // 处理斜体：*text* 或 _text_ 格式（但不包括**或__）
  // 使用更严格的匹配避免与加粗冲突
  result = result.replace(/(?<!\*)\*(?!\*)([^\n*]+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  result = result.replace(/(?<!_)_(?!_)([^\n_]+?)(?<!_)_(?!_)/g, '<em>$1</em>');
  
  return result;
};

const sanitizeMarkdownInput = (text: string): string => {
  let cleaned = text;

  // 1. 处理不成对的星号和冒号组合（如 "*目标**:" 或 "*内容**: "）
  cleaned = cleaned.replace(/\*+([^*\n]+?)\*+(?=\s*[:：])/g, '$1');
  
  // 2. 处理行首的 "*" 或 "-" 符号（列表标记）
  cleaned = cleaned.replace(/^\s*[\*\-—]\s+/gm, '');
  
  // 3. 处理单独的连续 "-" 符号（分隔线）
  cleaned = cleaned.replace(/^\s*-{2,}\s*$/gm, '');
  
  // 4. 处理行尾残留的星号（防止 "内容**" 出现）
  cleaned = cleaned.replace(/([^\s*])\s*\*+\s*$/gm, '$1');
  
  // 5. 处理行尾残留的 "-" 符号（防止 "内容-" 出现）
  cleaned = cleaned.replace(/\s+[-—]\s*$/gm, '');
  
  // 6. 处理单边星号（只有左边或右边的星号）
  // 移除行内单边的 ** 符号（如 "**text" 或 "text**" 但不是 "**text**"）
  cleaned = cleaned.replace(/(\S)\*{2}(?!\*)/g, '$1');  // 移除行中单边的 ** （如 "内容**"）
  cleaned = cleaned.replace(/(?<!\*)\*{2}(\S)/g, '$1');  // 移除行中单边的 ** （如 "**内容"）

  return cleaned;
};

const renderMarkdown = (text: string): string => {
  const lines = normalizeFences(sanitizeMarkdownInput(text)).split(/\r?\n/);
  const htmlParts: string[] = [];
  let inTable = false;
  const tableRows: string[][] = [];
  let inCodeBlock = false;
  let codeLanguage = '';
  const codeLines: string[] = [];
  let paragraphBuffer: string[] = [];
  let lastWasListItem = false;

  // 刷新段落缓冲
  const flushParagraph = () => {
    if (paragraphBuffer.length === 0) return;
    const text = paragraphBuffer.join('\n').trim();
    if (text) {
      htmlParts.push(`<p>${formatInlineMarkdown(text)}</p>`);
    }
    paragraphBuffer = [];
  };

  const flushTable = () => {
    if (!inTable || !tableRows.length) {
      tableRows.length = 0;
      inTable = false;
      return;
    }

    const [header, ...body] = tableRows;
    const tableHtml: string[] = ['<div class="markdown-table-wrapper"><table class="markdown-table">'];
    tableHtml.push('<thead><tr>');
    header.forEach(cell => {
      tableHtml.push(`<th>${formatInlineMarkdown(cell)}</th>`);
    });
    tableHtml.push('</tr></thead>');

    if (body.length) {
      tableHtml.push('<tbody>');
      body.forEach(row => {
        tableHtml.push('<tr>');
        row.forEach(cell => {
          tableHtml.push(`<td>${formatInlineMarkdown(cell)}</td>`);
        });
        tableHtml.push('</tr>');
      });
      tableHtml.push('</tbody>');
    }

    tableHtml.push('</table></div>');
    htmlParts.push(tableHtml.join(''));
    tableRows.length = 0;
    inTable = false;
  };

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
    const fenceMatch = rawLine.match(/^```\s*(.*)$/);
    if (fenceMatch) {
      flushParagraph();
      lastWasListItem = false;
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        flushTable();
        inCodeBlock = true;
        codeLanguage = fenceMatch[1].trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    const line = rawLine.trim();

    // 空行处理：如果有段落缓冲，刷新它；然后添加间距
    if (!line) {
      flushParagraph();
      flushTable();
      lastWasListItem = false;
      // 只在有内容时添加间距（避免连续空行产生多个间距）
      if (htmlParts.length > 0 && !htmlParts[htmlParts.length - 1].includes('margin')) {
        htmlParts.push('<div class="paragraph-spacing"></div>');
      }
      continue;
    }

    // 表格处理
    if (/^\|.+\|$/.test(line)) {
      if (!inTable) {
        flushParagraph();
        flushTable();
        inTable = true;
      }

      const cells = line
        .split('|')
        .slice(1, -1)
        .map(cell => cell.trim())
        .filter(cell => cell.length > 0);

      if (cells.length) {
        tableRows.push(cells);
      }
      continue;
    }

    if (inTable && /^\|?\s*[-:]+\s*(\|\s*[-:]+\s*)+\|?$/.test(line)) {
      continue;
    }

    if (inTable) {
      flushTable();
    }

    // 处理引用块（> 符号）- 在代码块中应该被转义，在代码外应该被忽略或转换
    // 如果这行全是 > 符号开头的引用，提取实际内容
    const blockquoteMatch = line.match(/^>\s*(.*)$/);
    if (blockquoteMatch) {
      const content = blockquoteMatch[1];
      if (content) {
        // 将引用块内容作为普通段落处理
        paragraphBuffer.push(content);
      }
      continue;
    }

    // 标题处理 - 支持 ## 标题 或 ##2. 标题 等格式
    const headingMatch = line.match(/^(#{1,6})\s*(.+)$/);
    if (headingMatch && headingMatch[1].match(/^#{1,6}$/)) {
      flushParagraph();
      const headingText = headingMatch[2].trim();
      if (headingText) {
        htmlParts.push(`<p class="heading-content"><strong>${formatInlineMarkdown(headingText)}</strong></p>`);
      }
      lastWasListItem = false;
      continue;
    }

    // 列表项处理 - 支持多种列表符号
    const bulletMatch = line.match(/^[-•*]\s*(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      // 如果前一个不是列表项，添加分隔
      if (!lastWasListItem && htmlParts.length > 0) {
        htmlParts.push('<div class="paragraph-spacing"></div>');
      }
      let itemText = bulletMatch[1];
      // 不需要在这里手动处理加粗，formatInlineMarkdown会处理所有markdown格式
      htmlParts.push(`<p class="list-item">• ${formatInlineMarkdown(itemText)}</p>`);
      lastWasListItem = true;
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s*(.+)$/);
    if (orderedMatch) {
      flushParagraph();
      // 如果前一个不是列表项，添加分隔
      if (!lastWasListItem && htmlParts.length > 0) {
        htmlParts.push('<div class="paragraph-spacing"></div>');
      }
      let itemText = orderedMatch[1];
      // 不需要在这里手动处理加粗，formatInlineMarkdown会处理所有markdown格式
      htmlParts.push(`<p class="list-item">◊ ${formatInlineMarkdown(itemText)}</p>`);
      lastWasListItem = true;
      continue;
    }

    // 普通文本：添加到段落缓冲
    lastWasListItem = false;
    paragraphBuffer.push(line);
  }

  // 最后刷新所有缓冲
  flushParagraph();
  flushCodeBlock();
  flushTable();
  
  return htmlParts.join('');
};

const renderPlainText = (text: string): string => {
  const lines = normalizeFences(sanitizeMarkdownInput(text)).split(/\r?\n/);
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
    const fenceMatch = rawLine.match(/^```\s*(.*)$/);
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

    htmlParts.push(`<p>${formatInlineMarkdown(trimmed)}</p>`);
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

onMounted(async () => {
  if (typeof document !== 'undefined') {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  // 从 localStorage 获取当前登录用户信息
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      currentUser.value = JSON.parse(userStr);
      
      // 设置用户头像初始字母
      if (currentUser.value?.username) {
        userInitial.value = currentUser.value.username.charAt(0).toUpperCase();
      }
      
      // 根据用户名生成一致的颜色
      userAvatarColor.value = generateAvatarColor(currentUser.value.username);
    }
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }

  try {
    await initializeChat(systemInstruction);
  } catch (error) {
    console.error('初始化 AI 聊天失败:', error);
  }
});

onBeforeUnmount(() => {
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
  margin: 0.75rem 0;
  line-height: 1.6;
}

/* 用户消息的文本样式 */
.text-white .markdown-content :deep(*) {
  color: inherit;
}

.text-white .markdown-content :deep(p) {
  color: rgba(255, 255, 255, 0.95);
}

.text-white .markdown-content :deep(a) {
  color: rgba(255, 255, 255, 0.9);
  border-bottom-color: rgba(255, 255, 255, 0.4);
}

.text-white .markdown-content :deep(a:hover) {
  color: #ffffff;
  border-bottom-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.text-white .markdown-content :deep(strong) {
  color: rgba(255, 255, 255, 0.98);
}

.text-white .markdown-content :deep(code) {
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.9);
}

.text-white .markdown-content :deep(del) {
  color: rgba(255, 255, 255, 0.7);
}

.markdown-content :deep(.paragraph-spacing) {
  height: 1rem;
  margin: 0;
}

.markdown-content :deep(.heading-content) {
  font-weight: 700;
  font-size: 1rem;
  margin: 1.2rem 0 0.8rem 0;
  display: block;
}

.markdown-content :deep(.list-item) {
  margin: 0.6rem 0;
  padding-left: 1.5rem;
  text-indent: -1rem;
  display: block;
  line-height: 1.5;
}

.markdown-content :deep(pre) {
  background: #111827;
  color: #f9fafb;
  padding: 0.75rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0.75rem 0;
}

.markdown-content :deep(code) {
  font-family: 'Fira Code', 'JetBrains Mono', Consolas, 'Courier New', monospace;
  background: rgba(59, 130, 246, 0.1);
  color: #1f2937;
  padding: 0.1rem 0.3rem;
  border-radius: 0.35rem;
}

.markdown-content :deep(a) {
  color: #2563eb;
  text-decoration: none;
  border-bottom: 1px solid #93c5fd;
  transition: all 0.2s ease;
}

.markdown-content :deep(a:hover) {
  color: #1d4ed8;
  border-bottom-color: #3b82f6;
  background-color: rgba(59, 130, 246, 0.05);
}

.markdown-content :deep(del) {
  color: #9ca3af;
  text-decoration: line-through;
}

.markdown-content :deep(strong) {
  font-weight: 700;
  color: #111827;
}

.markdown-content :deep(em) {
  font-style: italic;
  color: #374151;
}

.markdown-content :deep(pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

/* 消息出现动画 */
@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 流式输出光标动画 - 更精致的打字光标效果 */
@keyframes streaming-cursor {
  0%, 49% {
    opacity: 1;
    background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
    box-shadow: 0 0 6px rgba(59, 130, 246, 0.9), 0 0 12px rgba(59, 130, 246, 0.4);
    transform: scaleY(1);
  }
  50%, 100% {
    opacity: 0.4;
    background: linear-gradient(180deg, #93c5fd 0%, #60a5fa 100%);
    box-shadow: none;
    transform: scaleY(0.95);
  }
}

@keyframes pulse-dim {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* 消息气泡动画 */
div:has(> .markdown-content) {
  animation: messageSlideIn 0.3s ease-out;
}

.streaming-cursor {
  display: inline-block;
  width: 2.5px;
  height: 1.3em;
  background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
  margin-left: 3px;
  margin-right: 1px;
  vertical-align: text-bottom;
  animation: streaming-cursor 0.7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  border-radius: 1.5px;
  transform-origin: bottom center;
}

.streaming-indicator {
  display: inline-block;
  color: #6b7280;
  font-size: 0.85rem;
  margin-left: 0.5rem;
  animation: pulse-dim 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

