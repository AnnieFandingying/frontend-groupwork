<template>
  <div class="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-2">
      <Bot class="text-primary" :size="20" />
      <h3 class="font-semibold text-gray-700">AI 导师</h3>
    </div>
    
    <div ref="messagesContainerRef" class="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFBF7]">
      <div 
        v-for="msg in messages" 
        :key="msg.id" 
        :class="['flex', msg.role === 'user' ? 'justify-end' : 'justify-start']"
      >
        <div :class="['flex gap-3 max-w-[85%]', msg.role === 'user' ? 'flex-row-reverse' : 'flex-row']">
          <div :class="[
            'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
            msg.role === 'user' ? 'bg-dark text-white' : 'bg-primary text-white'
          ]">
            <User v-if="msg.role === 'user'" :size="14" />
            <Bot v-else :size="14" />
          </div>
          <div :class="[
            'p-3 rounded-2xl text-sm leading-relaxed shadow-sm',
            msg.role === 'user' 
              ? 'bg-white text-gray-800 rounded-tr-none border border-gray-100' 
              : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
          ]">
            <Loader2 v-if="msg.text === '' && isStreaming && msg.role === 'model'" :size="16" class="animate-spin text-gray-400" />
            <template v-else>
              <p 
                v-for="(line, i) in msg.text.split('\n')" 
                :key="i" 
                :class="['min-h-[1.2em]', i > 0 ? 'mt-2' : '']"
              >
                {{ line || '' }}
                <br v-if="!line" />
              </p>
            </template>
          </div>
        </div>
      </div>
      <div ref="messagesEndRef" />
    </div>

    <div class="p-4 bg-white border-t border-gray-100">
      <div class="flex gap-2 relative">
        <input
          v-model="input"
          type="text"
          @keydown="handleKeyPress"
          :placeholder="isStreaming ? 'AI 正在输入...' : '询问关于学习路径的问题...'"
          :disabled="isStreaming"
          class="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
        />
        <button 
          @click="handleSend"
          :disabled="isStreaming || !input.trim()"
          class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div v-if="isStreaming" class="w-2 h-2 bg-white rounded-full animate-pulse" />
          <Send v-else :size="14" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import { ChatMessage } from '../types';
import { sendMessageStream } from '../services/geminiService';
import { Send, User, Bot, Loader2 } from 'lucide-vue-next';

const messages = ref<ChatMessage[]>([
  { id: '1', role: 'model', text: '你好！我是你的 AI 前端导师。你可以问我关于 React、知识图谱的问题，或者让我分析你的学习路径。', timestamp: new Date() }
]);
const input = ref('');
const isStreaming = ref(false);
const messagesEndRef = ref<HTMLDivElement | null>(null);
const messagesContainerRef = ref<HTMLDivElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainerRef.value) {
      messagesContainerRef.value.scrollTop = messagesContainerRef.value.scrollHeight;
    }
  });
};

watch(messages, () => {
  scrollToBottom();
}, { deep: true });

watch(isStreaming, () => {
  scrollToBottom();
});

const handleSend = async () => {
  if (!input.value.trim() || isStreaming.value) return;

  const userText = input.value;
  const userMsg: ChatMessage = {
    id: Date.now().toString(),
    role: 'user',
    text: userText,
    timestamp: new Date()
  };

  messages.value.push(userMsg);
  input.value = '';
  isStreaming.value = true;

  // Create a placeholder for the bot response immediately
  const botMsgId = (Date.now() + 1).toString();
  const botMsg: ChatMessage = {
    id: botMsgId,
    role: 'model',
    text: '', 
    timestamp: new Date()
  };
  
  messages.value.push(botMsg);

  try {
    // 构建聊天历史（最近6条消息）
    const recentMessages = messages.value.slice(-6, -1); // 排除刚添加的空回复
    const history = recentMessages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.text
    }));

    const stream = sendMessageStream(userText, history);
    
    for await (const chunk of stream) {
      messages.value = messages.value.map(msg => 
        msg.id === botMsgId 
          ? { ...msg, text: msg.text + chunk }
          : msg
      );
    }
  } catch (e) {
    console.error("Chat error:", e);
  } finally {
    isStreaming.value = false;
  }
};

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
};

onMounted(() => {
  scrollToBottom();
});
</script>
