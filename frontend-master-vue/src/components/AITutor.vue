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
    <div class="flex-1 p-6 overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        
        <!-- 学习路径推荐 -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen :size="16" class="text-blue-600" />
            </div>
            <h3 class="font-bold text-gray-800">个性化学习路径</h3>
          </div>
          
          <div class="space-y-3">
            <div 
              v-for="path in learningPaths" 
              :key="path.id"
              @click="selectPath(path)"
              class="p-4 border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {{ path.title }}
                </span>
                <div class="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {{ path.duration }}
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-3">{{ path.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex -space-x-1">
                  <div 
                    v-for="tech in path.technologies.slice(0, 3)" 
                    :key="tech"
                    class="w-6 h-6 bg-gray-200 rounded-full text-xs flex items-center justify-center border-2 border-white font-semibold"
                    :class="getTechColor(tech)"
                  >
                    {{ tech.charAt(0) }}
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-full bg-gray-100 rounded-full h-1.5 w-16">
                    <div class="bg-primary h-1.5 rounded-full transition-all" :style="{ width: `${path.progress}%` }"></div>
                  </div>
                  <span class="text-xs text-gray-500 ml-1">{{ path.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 对话区域 -->
        <div class="lg:col-span-2 flex flex-col bg-gray-50 rounded-xl">
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
          <div ref="chatContainer" class="flex-1 p-4 overflow-y-auto space-y-4">
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
                  'max-w-[80%] rounded-2xl p-4 shadow-sm',
                  message.role === 'user' 
                    ? 'bg-primary text-white rounded-br-md' 
                    : 'bg-white border border-gray-100 rounded-bl-md'
                ]"
              >
                <p class="text-sm leading-relaxed">{{ message.content }}</p>
                <span class="text-xs opacity-70 mt-2 block">
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
import { ref, nextTick } from 'vue';
import { Bot, BookOpen, Sparkles, Send, RotateCcw, Download } from 'lucide-vue-next';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  progress: number;
}

// 响应式数据
const messages = ref<Message[]>([]);
const currentMessage = ref('');
const isTyping = ref(false);
const chatContainer = ref<HTMLElement>();

// 学习路径数据
const learningPaths = ref<LearningPath[]>([
  {
    id: 'frontend-basics',
    title: '前端基础入门',
    description: '从 HTML、CSS 到 JavaScript，构建坚实基础',
    duration: '4-6 周',
    technologies: ['HTML', 'CSS', 'JS'],
    progress: 75
  },
  {
    id: 'vue-mastery',
    title: 'Vue.js 进阶',
    description: '掌握 Vue 3、组件开发和状态管理',
    duration: '6-8 周',
    technologies: ['Vue', 'Pinia', 'Router'],
    progress: 45
  },
  {
    id: 'fullstack-path',
    title: '全栈开发之路',
    description: '前后端全栈技能，成为独当一面的开发者',
    duration: '12-16 周',
    technologies: ['Vue', 'Node', 'DB'],
    progress: 20
  }
]);

// 快速建议
const quickSuggestions = ref([
  '我想学习 Vue.js',
  '如何提高 JavaScript 技能',
  '前端项目实战建议',
  '职业发展规划'
]);

// 方法
const sendMessage = async (content: string) => {
  if (!content.trim()) return;

  // 添加用户消息
  const userMessage: Message = {
    id: Date.now().toString(),
    role: 'user',
    content: content.trim(),
    timestamp: new Date()
  };
  
  messages.value.push(userMessage);
  currentMessage.value = '';
  
  // 滚动到底部
  await nextTick();
  scrollToBottom();
  
  // 显示正在输入状态
  isTyping.value = true;
  
  // 模拟AI回复
  setTimeout(() => {
    const aiResponse = generateAIResponse(content);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    };
    
    messages.value.push(assistantMessage);
    isTyping.value = false;
    nextTick(() => scrollToBottom());
  }, 1500);
};

const sendCurrentMessage = () => {
  sendMessage(currentMessage.value);
};

const generateAIResponse = (userMessage: string): string => {
  const responses = {
    'vue': '很好的选择！Vue.js 是一个渐进式的 JavaScript 框架。我建议你从基础语法开始，学习组件开发、响应式数据、生命周期钩子等核心概念。你可以先完成官方教程，然后尝试构建一些小项目来巩固知识。',
    'javascript': 'JavaScript 技能的提升需要多方面的练习。我建议：1) 掌握 ES6+ 新特性；2) 理解异步编程（Promise、async/await）；3) 学习函数式编程概念；4) 多做算法题锻炼逻辑思维；5) 阅读优秀的开源代码。',
    '项目': '项目实战是最好的学习方式！我建议你从简单的项目开始：TodoList → 天气应用 → 博客系统 → 电商网站。每个项目都要尝试使用不同的技术栈，并且要关注代码质量、性能优化和用户体验。',
    '职业': '前端开发的职业道路很广阔。建议你：1) 扎实掌握基础技能；2) 选择一个主要方向深入（如 Vue/React）；3) 学习工程化工具；4) 培养设计思维；5) 提升沟通协作能力。记住，技术在变，但学习能力是永恒的。'
  };
  
  for (const [keyword, response] of Object.entries(responses)) {
    if (userMessage.toLowerCase().includes(keyword)) {
      return response;
    }
  }
  
  return '这是一个很好的问题！作为你的AI学习导师，我建议你可以从基础知识开始，循序渐进地学习。如果你能告诉我你的具体学习目标和当前水平，我可以为你制定更个性化的学习计划。';
};

const selectPath = (path: LearningPath) => {
  const message = `我想了解「${path.title}」这个学习路径，请为我详细介绍一下。`;
  sendMessage(message);
};

const clearChat = () => {
  messages.value = [];
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

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const getTechColor = (tech: string): string => {
  const colors: Record<string, string> = {
    'HTML': 'bg-orange-100 text-orange-600',
    'CSS': 'bg-blue-100 text-blue-600', 
    'JS': 'bg-yellow-100 text-yellow-600',
    'Vue': 'bg-green-100 text-green-600',
    'Pinia': 'bg-purple-100 text-purple-600',
    'Router': 'bg-indigo-100 text-indigo-600',
    'Node': 'bg-green-100 text-green-600',
    'DB': 'bg-gray-100 text-gray-600'
  };
  return colors[tech] || 'bg-gray-100 text-gray-600';
};
</script>