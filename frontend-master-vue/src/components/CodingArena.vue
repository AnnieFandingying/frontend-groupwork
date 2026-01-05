<template>
  <div class="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <!-- 新手引导遮罩 - SVG镂空透明实现 -->
    <transition name="fade">
      <div v-if="showGuide && currentGuideStep >= 0" class="guide-overlay-container" @click="nextGuideStep">
        <!-- SVG遮罩层 -->
        <svg class="guide-svg-mask" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="guide-mask">
              <!-- 白色表示可见区域 -->
              <rect x="0" y="0" width="100%" height="100%" fill="white"/>
              <!-- 黑色表示透明区域（镂空） -->
              <rect 
                :x="highlightStyle.left" 
                :y="highlightStyle.top" 
                :width="highlightStyle.width" 
                :height="highlightStyle.height" 
                :rx="guides[currentGuideStep].boxType === 'circle-box' ? highlightStyle.width / 2 : 16"
                fill="black"
              />
            </mask>
          </defs>
          <!-- 应用遮罩的暗色矩形 -->
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(0, 0, 0, 0.75)" mask="url(#guide-mask)"/>
        </svg>
        
        <!-- 高亮边框 -->
        <div class="guide-highlight-border" :style="{
          top: highlightStyle.topPx,
          left: highlightStyle.leftPx,
          width: highlightStyle.widthPx,
          height: highlightStyle.heightPx
        }" :class="guides[currentGuideStep].boxType"></div>
        
        <!-- 可爱圆形气泡（阻止事件冒泡，避免点击气泡时触发下一步） -->
        <div class="cute-bubble" :style="bubbleStyle" @click.stop>
          <div class="bubble-content">
            <div class="bubble-icon">{{ guides[currentGuideStep].icon }}</div>
            <p class="bubble-text">{{ guides[currentGuideStep].text }}</p>
            <button @click="nextGuideStep" class="bubble-btn">
              {{ guides[currentGuideStep].btnText }}
            </button>
          </div>
          <!-- 气泡小尾巴 -->
          <div class="bubble-tail" :class="guides[currentGuideStep].tailPosition"></div>
        </div>
      </div>
    </transition>

    <div class="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 justify-between" id="coding-header" ref="headerRef">
      <span class="font-semibold text-gray-700 flex items-center gap-2" ref="titleRef">
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
        <span class="ml-2 text-sm text-gray-500" id="coding-title">每日挑战: 代码演练</span>
      </span>
      <div class="flex gap-2 items-center">
        <!-- 模式选择器 -->
        <select 
          ref="languageSelectorRef"
          v-model="codeMode" 
          @change="handleModeChange"
          class="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700 cursor-pointer hover:border-orange-500 transition-colors outline-none"
        >
          <option value="html">HTML 完整页面</option>
          <option value="html-css-js">HTML + CSS + JS</option>
          <option value="javascript">JavaScript</option>
          <option value="vue">Vue 模板</option>
        </select>
        <span class="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded font-bold">极客模式: 开启</span>
      </div>
    </div>
    
    <!-- 分割视图 -->
    <div class="flex-1 flex overflow-hidden">
      <!-- 代码编辑区 -->
      <div class="w-1/2 border-r border-gray-200 flex flex-col relative code-editor" ref="codeEditorRef">
        <!-- 代码选中悬浮按钮 - 莫兰迪色系 -->
        <div 
          v-if="showFloatingButtons" 
          :style="{ top: floatingButtonsPosition.y + 'px', left: floatingButtonsPosition.x + 'px' }"
          class="floating-buttons-container"
        >
          <button
            @click="handleExplain"
            class="assist-btn assist-btn-explain"
            title="AI 解释代码"
          >
            <span class="btn-icon">💡</span>
            <span class="btn-text">解释</span>
            <span class="btn-shine"></span>
          </button>
          <button
            @click="handleComplete"
            class="assist-btn assist-btn-complete"
            title="AI 补全代码"
          >
            <span class="btn-icon">✨</span>
            <span class="btn-text">补全</span>
            <span class="btn-shine"></span>
          </button>
          <button
            @click="handleFix"
            class="assist-btn assist-btn-fix"
            title="AI 修复代码"
          >
            <span class="btn-icon">🔧</span>
            <span class="btn-text">修复</span>
            <span class="btn-shine"></span>
          </button>
        </div>

        <!-- AI 辅助气泡 - 整体气泡设计 -->
        <div 
        v-if="showAssistPanel" 
        ref="bubbleWrapperRef"
        class="ai-bubble-wrapper"
        :style="{ 
          top: assistPanelPosition.y + 'px', 
          left: assistPanelPosition.x + 'px',
        }"
        @mousedown.prevent="startDrag"
      >
        <!-- 气泡尾巴 - 动态方向 -->
        <div 
          :class="assistPanelPosition.tailDirection === 'top' ? 'bubble-tail-top' : 'bubble-tail-bottom'"
          :style="{ left: assistPanelPosition.tailOffset + 'px' }"
          ></div>
          
          <!-- 气泡主体 -->
          <div class="bubble-main">
            <!-- 头部信息条 -->
            <div class="bubble-header">
              <span class="bubble-icon">
                <span v-if="currentAction === 'explain'">💡</span>
                <span v-else-if="currentAction === 'complete'">✨</span>
                <span v-else-if="currentAction === 'fix'">🔧</span>
              </span>
              <span class="bubble-title">
                <span v-if="currentAction === 'explain'">代码解释</span>
                <span v-else-if="currentAction === 'complete'">代码补全</span>
                <span v-else-if="currentAction === 'fix'">代码修复</span>
              </span>
              <button @click="closeAssistPanel" class="bubble-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <!-- 气泡内容区 - 流式显示 -->
            <div class="bubble-content-area">
              <!-- 加载中 -->
              <div v-if="isAssisting && !assistResult" class="bubble-loading">
                <div class="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>思考中...</p>
              </div>
              
              <!-- 流式输出内容 -->
              <div v-if="assistResult" class="bubble-text">
                {{ assistResult }}
                <span v-if="isAssisting" class="typing-cursor">|</span>
              </div>
              
              <!-- 空状态 -->
              <div v-if="!isAssisting && !assistResult" class="bubble-empty">
                等待响应...
              </div>
            </div>
          </div>
        </div>

        <!-- HTML 完整页面模式 -->
        <template v-if="codeMode === 'html'">
          <div class="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
            HTML 完整页面
          </div>
          <div class="relative flex-1 p-0">
            <textarea
              ref="textareaRef"
              v-model="htmlCode"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入完整的 HTML 页面..."
            />
          </div>
        </template>

        <!-- HTML + CSS + JS 分离模式 -->
        <template v-if="codeMode === 'html-css-js'">
          <div class="flex border-b border-gray-600">
            <button 
              v-for="tab in ['HTML', 'CSS', 'JavaScript']" 
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2 text-xs font-semibold transition-colors',
                activeTab === tab 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-650'
              ]"
            >
              {{ tab }}
            </button>
          </div>
          <div class="relative flex-1 p-0">
            <textarea
              v-show="activeTab === 'HTML'"
              ref="htmlTextareaRef"
              v-model="separateHtml"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 HTML 代码..."
            />
            <textarea
              v-show="activeTab === 'CSS'"
              ref="cssTextareaRef"
              v-model="separateCss"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 CSS 样式..."
            />
            <textarea
              v-show="activeTab === 'JavaScript'"
              ref="jsTextareaRef"
              v-model="separateJs"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 JavaScript 代码..."
            />
          </div>
        </template>

        <!-- JavaScript 模式 -->
        <template v-if="codeMode === 'javascript'">
          <div class="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
            JavaScript 代码
          </div>
          <div class="relative flex-1 p-0">
            <textarea
              ref="jsOnlyTextareaRef"
              v-model="jsOnlyCode"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 JavaScript 代码..."
            />
          </div>
        </template>

        <!-- Vue 模板模式 -->
        <template v-if="codeMode === 'vue'">
          <div class="flex border-b border-gray-600">
            <button 
              v-for="tab in ['Template', 'Script', 'Style']" 
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2 text-xs font-semibold transition-colors',
                activeTab === tab 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-650'
              ]"
            >
              {{ tab }}
            </button>
          </div>
          <div class="relative flex-1 p-0">
            <textarea
              v-show="activeTab === 'Template'"
              ref="vueTemplateRef"
              v-model="vueTemplate"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 Vue 模板..."
            />
            <textarea
              v-show="activeTab === 'Script'"
              ref="vueScriptRef"
              v-model="vueScript"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 Vue Script (Composition API)..."
            />
            <textarea
              v-show="activeTab === 'Style'"
              ref="vueStyleRef"
              v-model="vueStyle"
              @input="handleChange"
              @mouseup="handleTextSelection"
              @keyup="handleTextSelection"
              class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
              spellcheck="false"
              placeholder="输入 Vue 样式..."
            />
          </div>
        </template>
      </div>
      
      <!-- 预览区 -->
      <div class="w-1/2 flex flex-col bg-white preview-panel" ref="previewPanelRef">
        <div class="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>预览效果 - {{ codeModeLabel }}</span>
          <button 
            @click="clearOutput"
            class="px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
          >
            清空
          </button>
        </div>
        
        <!-- 渲染预览 iframe -->
        <div class="flex-1 overflow-auto">
          <iframe
            ref="previewFrame"
            class="w-full h-full border-0"
          ></iframe>
        </div>
        
        <!-- 控制台输出 -->
        <div ref="consoleOutputRef" class="h-32 border-t border-gray-200 bg-gray-900 text-white overflow-auto">
          <div class="px-4 py-2 text-xs font-semibold border-b border-gray-700">
            控制台输出
          </div>
          <div class="p-4 font-mono text-xs space-y-1">
            <div v-if="consoleOutput.length === 0" class="text-gray-500">
              等待运行代码...
            </div>
            <div 
              v-for="(log, index) in consoleOutput" 
              :key="index"
              :class="{
                'text-red-400': log.type === 'error',
                'text-yellow-400': log.type === 'warn',
                'text-blue-400': log.type === 'info',
                'text-green-400': log.type === 'success'
              }"
            >
              {{ log.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部操作栏 -->
    <div class="h-12 bg-gray-800 text-white flex items-center justify-between px-6">
      <div class="flex items-center gap-3">
        <span class="text-xs text-gray-400">准备就绪 | 模式: {{ codeModeLabel }}</span>
        <button
          @click="resetGuide"
          class="flex items-center gap-1 px-3 py-1 text-xs text-gray-400 hover:text-primary hover:bg-gray-700 rounded transition-colors"
          title="重新查看新手引导"
        >
          <HelpCircle :size="14" />
          <span>新手引导</span>
        </button>
      </div>
      <button 
        ref="runButtonRef"
        @click="runCode"
        class="run-button px-4 py-1.5 bg-primary text-white text-xs font-bold rounded hover:bg-orange-600 transition-colors flex items-center gap-2"
      >
        <span>▶</span>
        运行代码
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import confetti from 'canvas-confetti';
import { codeAssistStream } from '../services/codeAssistService';
import { HelpCircle } from 'lucide-vue-next';

// Props
interface Props {
  isPreview?: boolean // 是否是预览模式（在仪表盘中显示）
}
const props = withDefaults(defineProps<Props>(), {
  isPreview: false
})

interface ConsoleLog {
  type: 'log' | 'error' | 'warn' | 'info' | 'success';
  message: string;
}

type CodeMode = 'html' | 'html-css-js' | 'javascript' | 'vue';

// ==================== 新手引导状态 ====================
const showGuide = ref(false);
const currentGuideStep = ref(-1);
const highlightStyle = ref({});
const bubbleStyle = ref({});

// 引导步骤配置
const guides = ref([
  {
    element: 'titleRef',
    text: '欢迎来到代码演练场！',
    icon: '🎮',
    btnText: '开始了解',
    boxType: 'round-box',
    tailPosition: 'top'
  },
  {
    element: 'languageSelectorRef',
    text: '选择你想练习的语言！',
    icon: '🎯',
    btnText: '知道了',
    boxType: 'round-box',
    tailPosition: 'top'
  },
  {
    element: 'codeEditorRef',
    text: '在这里编写你的代码~',
    icon: '💻',
    btnText: '下一步',
    boxType: 'round-box',
    tailPosition: 'right'
  },
  {
    element: 'previewPanelRef',
    text: '实时预览代码效果！',
    icon: '👀',
    btnText: '继续',
    boxType: 'round-box',
    tailPosition: 'left'
  },
  {
    element: 'consoleOutputRef',
    text: '查看控制台输出信息~',
    icon: '📝',
    btnText: '明白',
    boxType: 'round-box',
    tailPosition: 'left'
  },
  {
    element: 'runButtonRef',
    text: '点击运行查看结果！',
    icon: '▶️',
    btnText: '开始编程',
    boxType: 'circle-box',
    tailPosition: 'bottom'
  }
]);

// DOM 引用
const headerRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const languageSelectorRef = ref<HTMLElement | null>(null);
const codeEditorRef = ref<HTMLElement | null>(null);
const previewPanelRef = ref<HTMLElement | null>(null);
const consoleOutputRef = ref<HTMLElement | null>(null);
const runButtonRef = ref<HTMLElement | null>(null);

// 代码模式
const codeMode = ref<CodeMode>('html');
const activeTab = ref<string>('HTML');

// 代码选中相关
const showFloatingButtons = ref(false);
const floatingButtonsPosition = ref({ x: 0, y: 0 });
const selectedCode = ref('');
const currentTextarea = ref<HTMLTextAreaElement | null>(null);
// 记录选中文本时光标的实际位置（用于尾巴指向）和选区底部位置（用于气泡定位）
const selectionCursorPosition = ref({ x: 0, y: 0, bottomCenterX: 0, bottomY: 0 });

// AI 辅助相关
const showAssistPanel = ref(false);
const assistPanelPosition = ref({ 
  x: 0, 
  y: 0, 
  tailDirection: 'top' as 'top' | 'bottom',
  tailOffset: 32 // 尾巴相对于气泡左边缘的偏移
});
const bubbleWrapperRef = ref<HTMLDivElement | null>(null);
const dragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });
const isAssisting = ref(false);
const assistResult = ref('');
const currentAction = ref<'explain' | 'complete' | 'fix'>('explain');

// HTML 完整页面模式
const htmlCode = ref<string>(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>代码演练</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      text-align: center;
    }
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    button {
      background: #FF5722;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s;
    }
    button:hover {
      background: #E64A19;
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🎉 欢迎来到代码演练场</h1>
    <p>修改代码，点击运行查看效果</p>
    <button onclick="handleClick()">点击我</button>
    <div id="output"></div>
  </div>

  <script>
    function handleClick() {
      const output = document.getElementById('output');
      output.innerHTML = '<p style="margin-top: 1rem; color: #667eea;">Hello, World! 🚀</p>';
      console.log('按钮被点击了！');
    }
  <\/script>
</body>
</html>`);

// HTML + CSS + JS 分离模式
const separateHtml = ref<string>(`<div class="container">
  <h1>🚀 HTML + CSS + JS 模式</h1>
  <p>这是一个分离的代码演练环境</p>
  <button id="btn">点击计数</button>
  <p id="count">点击次数: 0</p>
</div>`);

const separateCss = ref<string>(`body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  text-align: center;
  max-width: 500px;
}

h1 {
  color: #f5576c;
  margin-bottom: 1rem;
}

button {
  background: #f5576c;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  margin: 1rem 0;
}

button:hover {
  background: #d4455a;
  transform: scale(1.05);
}

#count {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
}`);

const separateJs = ref<string>(`let count = 0;
const btn = document.getElementById('btn');
const countDisplay = document.getElementById('count');

btn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = \`点击次数: \${count}\`;
  console.log('当前计数:', count);
});

console.log('JavaScript 已加载！');`);

// JavaScript 独立模式
const jsOnlyCode = ref<string>(`// JavaScript 独立运行环境
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log('原数组:', numbers);
console.log('翻倍后:', doubled);

// 计算总和
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('总和:', sum);

// 异步操作示例
setTimeout(() => {
  console.log('⏰ 1秒后执行');
}, 1000);

console.log('✅ JavaScript 代码执行完毕！');`);

// Vue 模板模式
const vueTemplate = ref<string>(`<div class="vue-container">
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
  <button @click="increment">点击计数: {{ count }}</button>
  <div class="items">
    <div v-for="item in items" :key="item" class="item">
      {{ item }}
    </div>
  </div>
</div>`);

const vueScript = ref<string>(`const title = ref('💚 Vue 3 实时预览');
const message = ref('使用 Composition API');
const count = ref(0);
const items = ref(['Vue 3', 'Composition API', 'Reactive', 'Template']);

const increment = () => {
  count.value++;
  console.log('计数:', count.value);
};`);

const vueStyle = ref<string>(`body {
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-container {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  text-align: center;
  max-width: 500px;
}

h1 {
  color: #42b883;
  margin-bottom: 1rem;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  margin: 1rem 0;
}

button:hover {
  background: #35495e;
  transform: scale(1.05);
}

.items {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.item {
  background: #f0f0f0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: #35495e;
}`);

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const htmlTextareaRef = ref<HTMLTextAreaElement | null>(null);
const cssTextareaRef = ref<HTMLTextAreaElement | null>(null);
const jsTextareaRef = ref<HTMLTextAreaElement | null>(null);
const jsOnlyTextareaRef = ref<HTMLTextAreaElement | null>(null);
const vueTemplateRef = ref<HTMLTextAreaElement | null>(null);
const vueScriptRef = ref<HTMLTextAreaElement | null>(null);
const vueStyleRef = ref<HTMLTextAreaElement | null>(null);
const previewFrame = ref<HTMLIFrameElement | null>(null);
const consoleOutput = ref<ConsoleLog[]>([]);

const codeModeLabel = computed(() => {
  switch (codeMode.value) {
    case 'html': return 'HTML 完整页面';
    case 'html-css-js': return 'HTML + CSS + JS';
    case 'javascript': return 'JavaScript';
    case 'vue': return 'Vue 模板';
    default: return '';
  }
});

const handleModeChange = () => {
  // 切换模式时重置 activeTab
  if (codeMode.value === 'html-css-js') {
    activeTab.value = 'HTML';
  } else if (codeMode.value === 'vue') {
    activeTab.value = 'Template';
  }
  clearOutput();
};

const fireParticles = (x: number, y: number) => {
  confetti({
    particleCount: 5,
    spread: 40,
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    colors: ['#FF5722', '#2196F3', '#FFC107'],
    disableForReducedMotion: true,
    scalar: 0.6,
    shapes: ['circle', 'square'],
  });
};

const handleChange = () => {
  const activeTextarea = 
    codeMode.value === 'html' ? textareaRef.value :
    codeMode.value === 'html-css-js' ? 
      (activeTab.value === 'HTML' ? htmlTextareaRef.value : 
       activeTab.value === 'CSS' ? cssTextareaRef.value : jsTextareaRef.value) :
    codeMode.value === 'javascript' ? jsOnlyTextareaRef.value :
    activeTab.value === 'Template' ? vueTemplateRef.value :
    activeTab.value === 'Script' ? vueScriptRef.value : vueStyleRef.value;

  if (activeTextarea) {
    const rect = activeTextarea.getBoundingClientRect();
    const x = rect.left + Math.random() * rect.width; 
    const y = rect.top + Math.random() * rect.height;
    fireParticles(x, y);
  }

  // Screen shake effect
  if (document.body.style) {
    document.body.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`;
    setTimeout(() => {
      document.body.style.transform = 'none';
    }, 50);
  }
};

// 精确计算 textarea 某个光标位置的屏幕坐标（使用镜像 div，不受缩放影响）
const getCaretClientRect = (textarea: HTMLTextAreaElement, pos: number) => {
  const style = window.getComputedStyle(textarea);
  const taRect = textarea.getBoundingClientRect();

  const div = document.createElement('div');
  const span = document.createElement('span');

  div.style.position = 'absolute';
  div.style.visibility = 'hidden';
  div.style.whiteSpace = 'pre-wrap';
  div.style.wordWrap = 'break-word';
  div.style.boxSizing = 'border-box';
  div.style.left = `${taRect.left}px`;
  div.style.top = `${taRect.top}px`;
  div.style.width = `${taRect.width}px`;
  div.style.padding = style.padding;
  div.style.font = style.font;
  div.style.lineHeight = style.lineHeight;
  div.style.letterSpacing = style.letterSpacing;
  div.style.border = style.border;
  div.style.overflow = 'hidden';

  div.textContent = textarea.value.substring(0, pos);
  span.textContent = '\u200b'; // 占位符
  div.appendChild(span);

  document.body.appendChild(div);
  div.scrollTop = textarea.scrollTop;
  div.scrollLeft = textarea.scrollLeft;

  const caretRect = span.getBoundingClientRect();
  document.body.removeChild(div);
  return caretRect;
};

// 处理文本选中
const handleTextSelection = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;
  
  if (selectionStart !== selectionEnd) {
    const selected = textarea.value.substring(selectionStart, selectionEnd);
    if (selected.trim().length > 0) {
      selectedCode.value = selected;
      currentTextarea.value = textarea;
      const rect = textarea.getBoundingClientRect();
      
      // 精确获取末端光标位置（selectionEnd），使用镜像 div 计算
      const caretRect = getCaretClientRect(textarea, selectionEnd);
      const cursorX = caretRect.left;
      const cursorY = caretRect.top + caretRect.height / 2;
      const bottomCenterX = caretRect.left;
      const bottomCenterY = caretRect.bottom;
      
      // 记录位置信息
      selectionCursorPosition.value = { 
        x: cursorX, // 选区中心X（用于尾巴指向）
        y: cursorY, // 选区中心Y（用于尾巴指向）
        bottomCenterX: bottomCenterX, // 选区底边中心X（用于气泡定位）
        bottomY: bottomCenterY // 选区底边Y（用于气泡定位）
      };
      
      // 简化的悬浮按钮位置计算
      floatingButtonsPosition.value = {
        x: rect.left + 20,
        y: cursorY + 30 // 按钮显示在选中区域中心下方
      };
      
      showFloatingButtons.value = true;
    } else {
      hideFloatingButtons();
    }
  } else {
    hideFloatingButtons();
  }
};

const hideFloatingButtons = () => {
  showFloatingButtons.value = false;
};

const closeAssistPanel = () => {
  showAssistPanel.value = false;
  assistResult.value = '';
  isAssisting.value = false;
};

// 获取当前语言
const getCurrentLanguage = (): string => {
  if (codeMode.value === 'html') return 'html';
  if (codeMode.value === 'javascript') return 'javascript';
  if (codeMode.value === 'html-css-js') {
    if (activeTab.value === 'HTML') return 'html';
    if (activeTab.value === 'CSS') return 'css';
    return 'javascript';
  }
  if (codeMode.value === 'vue') {
    if (activeTab.value === 'Template') return 'vue';
    if (activeTab.value === 'Script') return 'javascript';
    return 'css';
  }
  return 'javascript';
};

// AI 解释代码
const handleExplain = async () => {
  currentAction.value = 'explain';
  await executeAIAssist('explain');
};

// AI 补全代码
const handleComplete = async () => {
  currentAction.value = 'complete';
  await executeAIAssist('complete');
};

// AI 修复代码
const handleFix = async () => {
  currentAction.value = 'fix';
  await executeAIAssist('fix');
};

const getBubbleSize = () => {
  const el = bubbleWrapperRef.value;
  if (el) {
    const rect = el.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }
  return null;
};

// 计算气泡位置 - 尾巴指向选区末端，优先在右侧显示避免遮挡代码
const calculateBubblePosition = (size?: { width: number; height: number }) => {
  // 使用选区末端位置用于尾巴指向
  const cursorX = selectionCursorPosition.value.x;
  const cursorY = selectionCursorPosition.value.y;
  // 使用选区底边中心位置用于气泡定位
  const bottomCenterX = selectionCursorPosition.value.bottomCenterX;
  const selectionBottomY = selectionCursorPosition.value.bottomY;
  
  // 气泡尺寸：优先读取真实尺寸，无法读取时根据可用空间动态估算
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;

  const selectionBottomViewportY = selectionBottomY - scrollY;
  const baseAvailableBelow = viewportHeight - selectionBottomViewportY;

  const bubbleWidth = size?.width ?? 500;
  const estimatedBelow = Math.max(180, baseAvailableBelow - 80);
  const bubbleHeight = size?.height ?? Math.max(200, Math.min(estimatedBelow, viewportHeight * 0.6));
  const safePadding = 40; // 更大的安全边距
  const tailSpace = 12; // 尾巴与代码的间距
  const tailTipOffset = 14; // 尾巴高度（用于保证尖端在选区下方）
  const sideGap = 16; // 气泡水平间隙，避免紧贴代码
  const bottomBarHeight = 48; // 底部操作栏高度（h-12 = 48px）
  
  // 计算可用空间
  const spaceBelow = viewportHeight - selectionBottomViewportY - tailSpace - bottomBarHeight - safePadding;
  const spaceAbove = selectionBottomViewportY - bubbleHeight - tailSpace - safePadding;
  const spaceRight = viewportWidth - cursorX - safePadding;
  
  // 选择放置方向：优先右侧，其次下方，最后上方
  let bubbleX;
  let bubbleY;
  let tailDirection: 'top' | 'bottom';
  let tailOffset;
  
  // 尝试右侧布局：尾巴指向选区末端，气泡在右侧不遮挡代码
  const canPlaceRight = spaceRight > bubbleWidth + sideGap;
  if (canPlaceRight) {
    bubbleX = cursorX + sideGap;
    bubbleY = selectionBottomY + tailSpace + tailTipOffset; // 尾巴尖端在选区下方
    tailDirection = 'top';
  } else if (spaceBelow > bubbleHeight + tailSpace) {
    // 下方布局：尾巴向上，顶边留出尾巴高度保证尖端在选区下方
    bubbleX = bottomCenterX - bubbleWidth / 2;
    bubbleY = selectionBottomY + tailSpace + tailTipOffset;
    tailDirection = 'top';
  } else if (spaceAbove > 0) {
    // 上方布局：尾巴向下
    const selectionTopY = selectionBottomY - (cursorY - selectionBottomY) * 2; // 粗略计算选区顶部
    bubbleX = bottomCenterX - bubbleWidth / 2;
    bubbleY = selectionTopY - bubbleHeight - tailSpace - tailTipOffset;
    tailDirection = 'bottom';
  } else {
    // 兜底：仍放在下方，尽量不超界
    bubbleX = bottomCenterX - bubbleWidth / 2;
    bubbleY = selectionBottomY + tailSpace + tailTipOffset;
    tailDirection = 'top';
  }
  
  // 左右边界处理
  if (bubbleX + bubbleWidth > viewportWidth - safePadding) {
    bubbleX = viewportWidth - bubbleWidth - safePadding;
  }
  if (bubbleX < safePadding) {
    bubbleX = safePadding;
  }
  
  // 计算尾巴偏移（相对于气泡左边缘），固定指向选区末端
  tailOffset = cursorX - bubbleX;
  
  // 二次检查：确保完全在视口内且不被底部操作栏遮挡
  const finalMaxY = scrollY + viewportHeight - bottomBarHeight - safePadding;
  const finalMinY = scrollY + safePadding;
  
  if (bubbleY + bubbleHeight > finalMaxY) {
    bubbleY = finalMaxY - bubbleHeight;
  }
  if (bubbleY < finalMinY) {
    bubbleY = finalMinY;
  }
  
  // 限制尾巴偏移（确保尾巴在气泡范围内，且略靠左但仍对准末端）
  tailOffset = Math.max(12, Math.min(tailOffset, bubbleWidth - 40));
  
  console.log('📍 Bubble position:', {
    cursorX,
    cursorY,
    bottomCenterX,
    selectionBottomY,
    bubbleX,
    bubbleY,
    tailDirection,
    tailOffset,
    spaceBelow,
    bottomBarHeight,
    viewportHeight
  });
  
  return {
    x: bubbleX,
    y: bubbleY,
    tailDirection,
    tailOffset
  };
};

const updateBubblePositionWithMeasure = () => {
  nextTick(() => {
    const size = getBubbleSize();
    assistPanelPosition.value = calculateBubblePosition(size || undefined);
  });
};

const startDrag = (e: MouseEvent) => {
  if (!showAssistPanel.value) return;
  dragging.value = true;
  dragOffset.value = {
    x: e.clientX - assistPanelPosition.value.x,
    y: e.clientY - assistPanelPosition.value.y
  };
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', endDrag);
};

const onDrag = (e: MouseEvent) => {
  if (!dragging.value) return;
  assistPanelPosition.value = {
    ...assistPanelPosition.value,
    x: e.clientX - dragOffset.value.x,
    y: e.clientY - dragOffset.value.y
  };
};

const endDrag = () => {
  if (!dragging.value) return;
  dragging.value = false;
  window.removeEventListener('mousemove', onDrag);
  window.removeEventListener('mouseup', endDrag);
};

// 执行 AI 辅助
const executeAIAssist = async (action: 'explain' | 'complete' | 'fix') => {
  if (!selectedCode.value) return;
  
  hideFloatingButtons();
  
  // 智能定位辅助面板
  assistPanelPosition.value = calculateBubblePosition();
  showAssistPanel.value = true;
  isAssisting.value = true;
  assistResult.value = '';
  updateBubblePositionWithMeasure(); // 读取真实宽高后再对准末端
  
  const language = getCurrentLanguage();
  
  console.log(`🤖 AI ${action} 请求:`, {
    language,
    codeLength: selectedCode.value.length
  });
  
  try {
    const stream = await codeAssistStream({
      code: selectedCode.value,
      action,
      language,
      context: `当前模式: ${codeModeLabel.value}`
    });
    
    for await (const chunk of stream) {
      assistResult.value += chunk;
    }
    
    isAssisting.value = false;
    updateBubblePositionWithMeasure();
    
  } catch (error) {
    console.error('AI 辅助错误:', error);
    assistResult.value = `❌ AI 辅助服务出错: ${error}`;
    isAssisting.value = false;
    updateBubblePositionWithMeasure();
  }
};

const addLog = (message: string, type: ConsoleLog['type'] = 'log') => {
  consoleOutput.value.push({ type, message });
};

const clearOutput = () => {
  consoleOutput.value = [];
  if (previewFrame.value) {
    const doc = previewFrame.value.contentDocument;
    if (doc) {
      doc.open();
      doc.write('');
      doc.close();
    }
  }
};

const runCode = () => {
  try {
    consoleOutput.value = [];
    addLog(` 开始执行代码... (${codeModeLabel.value})`, 'info');
    
    if (!previewFrame.value) {
      addLog('❌ 预览框架未准备好', 'error');
      return;
    }

    const iframe = previewFrame.value;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    
    if (!doc) {
      addLog('❌ 无法访问预览文档', 'error');
      return;
    }

    let finalCode = '';

    // 根据不同模式生成代码
    if (codeMode.value === 'html') {
      finalCode = htmlCode.value;
    } else if (codeMode.value === 'javascript') {
      // JavaScript 独立模式
      finalCode = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript 运行环境</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: 'Consolas', 'Monaco', monospace;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    .container {
      background: rgba(255, 255, 255, 0.95);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin: 0 0 1rem 0;
    }
    .info {
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 JavaScript 运行环境</h1>
    <p class="info">请打开控制台查看输出结果</p>
  </div>
  <script>
` + jsOnlyCode.value + `
  <\/script>
</body>
</html>`;
    } else if (codeMode.value === 'html-css-js') {
      finalCode = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML + CSS + JS</title>
  <style>
` + separateCss.value + `
  </style>
</head>
<body>
` + separateHtml.value + `
  <script>
` + separateJs.value + `
  <\/script>
</body>
</html>`;
    } else if (codeMode.value === 'vue') {
      // Vue 模式：将 Vue SFC 编译为 HTML
      finalCode = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue 模板预览</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
` + vueStyle.value + `
  </style>
</head>
<body>
  <div id="app"></div>
  <script type="module">
    const { createApp, ref } = Vue;
    
    createApp({
      setup() {
        ` + vueScript.value + `
        
        return {
          title,
          message,
          count,
          items,
          increment
        };
      },
      template: \`` + vueTemplate.value.replace(/\\/g, '\\\\').replace(/`/g, '\\`') + `\`
    }).mount('#app');
    
    console.log('Vue 应用已挂载！');
  <\/script>
</body>
</html>`;
    }

    // 注入控制台拦截代码
    const codeWithConsole = finalCode.replace(
      '</head>',
      `<script>
        (function() {
          const originalLog = console.log;
          const originalError = console.error;
          const originalWarn = console.warn;
          const originalInfo = console.info;
          
          console.log = function(...args) {
            window.parent.postMessage({ 
              type: 'console', 
              method: 'log', 
              args: args.map(String) 
            }, '*');
            originalLog.apply(console, args);
          };
          
          console.error = function(...args) {
            window.parent.postMessage({ 
              type: 'console', 
              method: 'error', 
              args: args.map(String) 
            }, '*');
            originalError.apply(console, args);
          };
          
          console.warn = function(...args) {
            window.parent.postMessage({ 
              type: 'console', 
              method: 'warn', 
              args: args.map(String) 
            }, '*');
            originalWarn.apply(console, args);
          };
          
          console.info = function(...args) {
            window.parent.postMessage({ 
              type: 'console', 
              method: 'info', 
              args: args.map(String) 
            }, '*');
            originalInfo.apply(console, args);
          };
          
          window.addEventListener('error', function(e) {
            window.parent.postMessage({ 
              type: 'console', 
              method: 'error', 
              args: [e.message] 
            }, '*');
          });
        })();
      <\/script>
      </head>`
    );

    // 写入代码到 iframe
    doc.open();
    doc.write(codeWithConsole);
    doc.close();
    
    addLog(' 代码执行成功！', 'success');
    
    // 添加粒子特效
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5722', '#2196F3', '#4CAF50']
    });
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    addLog(`❌ 执行错误: ${errorMessage}`, 'error');
  }
};

// 监听来自 iframe 的控制台消息
if (typeof window !== 'undefined') {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'console') {
      const method = event.data.method as ConsoleLog['type'];
      const message = event.data.args.join(' ');
      addLog(message, method);
    }
  });
}

// ==================== 新手引导逻辑 ====================

// 初始化引导
onMounted(() => {
  console.log('🎮 CodingArena mounted, isPreview:', props.isPreview);
  
  // 只在非预览模式下才显示引导
  if (props.isPreview) {
    console.log('📦 Preview mode, skipping guide');
    return;
  }
  
  // 每次进入都显示引导（移除localStorage检查）
  console.log('✨ Starting guide in 1000ms...');
  setTimeout(() => {
    startGuide();
  }, 1000);
});

// 开始新手引导
const startGuide = () => {
  console.log('🚀 Starting guide system');
  showGuide.value = true;
  currentGuideStep.value = 0;
  
  nextTick(() => {
    setTimeout(() => {
      updateGuidePosition();
    }, 100);
  });
};

// 更新引导位置
const updateGuidePosition = () => {
  if (currentGuideStep.value < 0 || currentGuideStep.value >= guides.value.length) {
    console.warn('⚠️ Invalid guide step:', currentGuideStep.value);
    return;
  }

  const guide = guides.value[currentGuideStep.value];
  const refName = guide.element;
  
  console.log(`📍 Updating position for step ${currentGuideStep.value + 1}:`, guide.text);
  
  // 获取对应的 DOM 元素
  let targetElement: HTMLElement | null = null;
  switch (refName) {
    case 'headerRef':
      targetElement = headerRef.value;
      break;
    case 'titleRef':
      targetElement = titleRef.value;
      break;
    case 'languageSelectorRef':
      targetElement = languageSelectorRef.value;
      break;
    case 'codeEditorRef':
      targetElement = codeEditorRef.value;
      break;
    case 'previewPanelRef':
      targetElement = previewPanelRef.value;
      break;
    case 'consoleOutputRef':
      targetElement = consoleOutputRef.value;
      break;
    case 'runButtonRef':
      targetElement = runButtonRef.value;
      break;
  }

  if (!targetElement) {
    console.error('❌ Target element not found:', refName);
    return;
  }
  
  console.log('✅ Target element found:', targetElement);

  const rect = targetElement.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // 根据元素实际大小计算框的大小和位置
  const padding = 20; // 框内边距
  let boxWidth, boxHeight, boxTop, boxLeft;
  
  if (guide.boxType === 'circle-box') {
    // 圆形框：取较大边+内边距
    const size = Math.max(rect.width, rect.height) + padding * 2;
    boxWidth = size;
    boxHeight = size;
    boxTop = rect.top + scrollTop + rect.height / 2 - size / 2;
    boxLeft = rect.left + scrollLeft + rect.width / 2 - size / 2;
  } else {
    // 圆角方形框：根据元素实际大小+内边距
    boxWidth = rect.width + padding * 2;
    boxHeight = rect.height + padding * 2;
    boxTop = rect.top + scrollTop - padding;
    boxLeft = rect.left + scrollLeft - padding;
  }
  
  highlightStyle.value = {
    // SVG属性需要数字
    top: boxTop,
    left: boxLeft,
    width: boxWidth,
    height: boxHeight,
    // CSS样式需要字符串
    topPx: `${boxTop}px`,
    leftPx: `${boxLeft}px`,
    widthPx: `${boxWidth}px`,
    heightPx: `${boxHeight}px`,
  };

  // 计算小框中心点
  const boxCenterX = boxLeft + boxWidth / 2;
  const boxCenterY = boxTop + boxHeight / 2;

  // 圆形气泡位置
  const bubbleWidth = 220;
  const bubbleHeight = 180;
  let bubbleTop = 0;
  let bubbleLeft = 0;

  // 根据尾巴位置确定气泡位置
  switch (guide.tailPosition) {
    case 'bottom':
      // 气泡在框上方，尾巴朝下
      bubbleTop = boxTop - bubbleHeight - 25;
      bubbleLeft = boxCenterX - bubbleWidth / 2;
      break;
    case 'top':
      // 气泡在框下方，尾巴朝上
      bubbleTop = boxTop + boxHeight + 20;
      bubbleLeft = boxCenterX - bubbleWidth / 2;
      break;
    case 'top-left':
      bubbleTop = boxCenterY - bubbleHeight / 2;
      bubbleLeft = boxLeft + boxWidth + 30;
      break;
    case 'left':
      // 气泡在框右侧，尾巴朝左
      bubbleTop = boxCenterY - bubbleHeight / 2;
      bubbleLeft = boxLeft + boxWidth + 25;
      break;
    case 'right':
      // 气泡在框左侧，尾巴朝右
      bubbleTop = boxCenterY - bubbleHeight / 2;
      bubbleLeft = boxLeft - bubbleWidth - 25;
      break;
    default:
      bubbleTop = boxTop + boxHeight + 20;
      bubbleLeft = boxCenterX - bubbleWidth / 2;
  }

  // 防止溢出屏幕
  const screenPadding = 20;
  if (bubbleLeft < screenPadding) bubbleLeft = screenPadding;
  if (bubbleLeft + bubbleWidth > window.innerWidth - screenPadding) {
    bubbleLeft = window.innerWidth - bubbleWidth - screenPadding;
  }
  if (bubbleTop < screenPadding) bubbleTop = screenPadding;
  if (bubbleTop + bubbleHeight > window.innerHeight + scrollTop - screenPadding) {
    bubbleTop = window.innerHeight + scrollTop - bubbleHeight - screenPadding;
  }

  bubbleStyle.value = {
    top: `${bubbleTop}px`,
    left: `${bubbleLeft}px`,
  };

  // 滚动到目标元素
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// 下一步引导
const nextGuideStep = () => {
  console.log(`➡️ Guide step: ${currentGuideStep.value} -> ${currentGuideStep.value + 1}`);
  
  if (currentGuideStep.value >= guides.value.length - 1) {
    // 最后一步，关闭引导
    finishGuide();
    return;
  }
  
  currentGuideStep.value++;
  
  nextTick(() => {
    setTimeout(() => {
      updateGuidePosition();
    }, 150);
  });
};

// 完成引导
const finishGuide = () => {
  showGuide.value = false;
  currentGuideStep.value = -1;
  localStorage.setItem('codingArena_guideCompleted', 'true');
  console.log('✅ Coding Arena guide completed');
};

// 重置引导（用于重新查看）
const resetGuide = () => {
  console.log('🔄 Resetting guide...');
  localStorage.removeItem('codingArena_guideCompleted');
  showGuide.value = false;
  currentGuideStep.value = -1;
  // 延迟一下重新开始，确保状态重置
  setTimeout(() => {
    startGuide();
  }, 300);
};

// 点击遮罩关闭引导
const handleOverlayClick = () => {
  console.log('🚫 Closing guide by clicking overlay');
  finishGuide();
};
</script>

<style scoped>
/* ==================== 可爱风格新手引导 ==================== */
/* 引导遮罩容器 */
.guide-overlay-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  cursor: pointer;
}

/* SVG遮罩层 */
.guide-svg-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* 高亮边框（不阻挡内容，只显示边框）*/
.guide-highlight-border {
  position: absolute;
  background: transparent;
  border: 3px solid #FF8A3D;
  box-shadow: 
    0 0 0 3px rgba(255, 138, 61, 0.2),
    0 0 20px rgba(255, 138, 61, 0.4),
    0 4px 15px rgba(255, 138, 61, 0.3);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 9999;
  animation: boxPulse 2s ease-in-out infinite;
}

.guide-highlight-border.circle-box {
  border-radius: 50%;
}

.guide-highlight-border.round-box {
  border-radius: 16px;
}

@keyframes boxPulse {
  0%, 100% { 
    transform: scale(1);
    border-color: #FF8A3D;
    box-shadow: 
      0 0 0 3px rgba(255, 138, 61, 0.2),
      0 0 20px rgba(255, 138, 61, 0.4),
      0 4px 15px rgba(255, 138, 61, 0.3);
  }
  50% { 
    transform: scale(1.05);
    border-color: #FFB164;
    box-shadow: 
      0 0 0 5px rgba(255, 138, 61, 0.3),
      0 0 30px rgba(255, 138, 61, 0.6),
      0 6px 25px rgba(255, 138, 61, 0.4);
  }
}

/* 可爱圆形气泡 */
.cute-bubble {
  position: absolute;
  width: 220px;
  background: #ffffff;
  border-radius: 50px;
  padding: 1.5rem 1.8rem;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 0 0 6px rgba(255, 192, 203, 0.1),
    0 0 30px rgba(157, 180, 192, 0.3);
  z-index: 10000;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: bubbleBounce 0.6s ease-out;
}

@keyframes bubbleBounce {
  0% { 
    transform: scale(0.5) rotate(-10deg); 
    opacity: 0; 
  }
  50% { 
    transform: scale(1.1) rotate(5deg); 
  }
  100% { 
    transform: scale(1) rotate(0deg); 
    opacity: 1; 
  }
}

.bubble-content {
  text-align: center;
}

.bubble-icon {
  font-size: 3rem;
  margin-bottom: 0.8rem;
  animation: iconFloat 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}

.bubble-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.2rem 0;
  line-height: 1.6;
  font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;
  letter-spacing: 0.5px;
}

.bubble-btn {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #FF8A3D 0%, #FFB26B 100%);
  box-shadow: 
    0 6px 20px rgba(255, 138, 61, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;
  letter-spacing: 1px;
}

.bubble-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 10px 30px rgba(255, 138, 61, 0.5),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #FF9D52 0%, #FFC07A 100%);
}

.bubble-btn:active {
  transform: translateY(-1px) scale(1.02);
}

/* 气泡小尾巴 */
.bubble-tail {
  position: absolute;
  width: 30px;
  height: 30px;
  background: #ffffff;
  z-index: -1;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.bubble-tail.bottom {
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 0 0 50% 0;
}

.bubble-tail.top {
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.top-left {
  top: 30%;
  left: -12px;
  transform: rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.left {
  top: 50%;
  left: -12px;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.right {
  top: 50%;
  right: -12px;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 0 50% 0 0;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ==================== 莫兰迪色系浮动按钮 ==================== */

.floating-buttons-container {
  position: fixed; /* 改为fixed定位 */
  z-index: 9998; /* 低于AI气泡 */
  display: flex;
  gap: 0.5rem;
  padding: 0.6rem;
  background: linear-gradient(145deg, #ffffff 0%, rgba(250, 251, 252, 0.98) 100%);
  border-radius: 16px;
  box-shadow: 
    0 12px 40px rgba(168, 181, 168, 0.18),
    0 6px 16px rgba(157, 180, 192, 0.12),
    0 0 1px rgba(201, 173, 167, 0.15);
  border: 1.5px solid transparent;
  background-clip: padding-box;
  animation: floatIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(12px);
}

/* 浮入动画 */
@keyframes floatIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
  }
  70% {
    transform: scale(1.05) translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 渐变边框效果 */
.floating-buttons-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 1.5px;
  background: linear-gradient(135deg, 
    rgba(168, 181, 168, 0.3) 0%,
    rgba(157, 180, 192, 0.25) 35%,
    rgba(201, 173, 167, 0.2) 70%,
    rgba(184, 184, 209, 0.25) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

/* 辅助按钮基础样式 */
.assist-btn {
  position: relative;
  padding: 0.65rem 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 
               'Microsoft YaHei', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.assist-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.4) 0%, 
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.assist-btn:hover::before {
  opacity: 1;
}

/* 按钮图标 */
.btn-icon {
  font-size: 1.15rem;
  display: inline-flex;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.15));
  animation: iconWiggle 2.5s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes iconWiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-8deg) scale(1.05);
  }
  75% {
    transform: rotate(8deg) scale(1.05);
  }
}

/* 按钮文字 */
.btn-text {
  position: relative;
  z-index: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 光泽效果 */
.btn-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.6) 50%,
    transparent 70%
  );
  transform: translateX(-100%) translateY(-100%) rotate(45deg);
  transition: transform 0.6s ease;
}

.assist-btn:hover .btn-shine {
  transform: translateX(100%) translateY(100%) rotate(45deg);
}

/* 解释按钮 - 鼠尾草绿 */
.assist-btn-explain {
  background: linear-gradient(135deg, #a8b5a8 0%, #b8c5b8 100%);
  color: #ffffff;
}

.assist-btn-explain:hover {
  background: linear-gradient(135deg, #98a598 0%, #a8b5a8 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 8px 20px rgba(168, 181, 168, 0.35),
    0 4px 10px rgba(168, 181, 168, 0.2);
}

.assist-btn-explain:active {
  transform: translateY(-1px) scale(0.98);
}

/* 补全按钮 - 雾蓝 */
.assist-btn-complete {
  background: linear-gradient(135deg, #9db4c0 0%, #adc4d0 100%);
  color: #ffffff;
}

.assist-btn-complete:hover {
  background: linear-gradient(135deg, #8da4b0 0%, #9db4c0 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 8px 20px rgba(157, 180, 192, 0.35),
    0 4px 10px rgba(157, 180, 192, 0.2);
}

.assist-btn-complete:active {
  transform: translateY(-1px) scale(0.98);
}

/* 修复按钮 - 玫瑰褐 */
.assist-btn-fix {
  background: linear-gradient(135deg, #c9ada7 0%, #d9bdb7 100%);
  color: #ffffff;
}

.assist-btn-fix:hover {
  background: linear-gradient(135deg, #b99d97 0%, #c9ada7 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 8px 20px rgba(201, 173, 167, 0.35),
    0 4px 10px rgba(201, 173, 167, 0.2);
}

.assist-btn-fix:active {
  transform: translateY(-1px) scale(0.98);
}

/* 点击波纹效果 */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.assist-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
}

.assist-btn:active::after {
  animation: ripple 0.6s ease-out;
}

/* ==================== AI 气泡样式 - 整体气泡设计 ==================== */

.ai-bubble-wrapper {
  position: fixed !important; /* 使用fixed定位确保不受滚动影响 */
  min-width: 400px;
  max-width: 700px;
  width: auto;
  z-index: 99999 !important; /* 确保在最上层，高于所有其他元素 */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 
               'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
  animation: bubblePopIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 20px 50px rgba(168, 181, 168, 0.2))
          drop-shadow(0 8px 20px rgba(157, 180, 192, 0.15));
  pointer-events: auto; /* 确保可以交互 */
  cursor: grab;
}

@keyframes bubblePopIn {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  70% {
    transform: scale(1.05) translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 气泡尾巴 - 向上指 */
.bubble-tail-top {
  position: absolute;
  top: -12px;
  left: 32px; /* 改用left定位，支持动态调整 */
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 14px solid rgba(168, 181, 168, 0.25);
  z-index: 1;
  filter: blur(1px);
  transition: left 0.3s ease;
}

.bubble-tail-top::after {
  content: '';
  position: absolute;
  top: 3px;
  left: -12px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #ffffff;
  filter: blur(0);
}

/* 气泡尾巴 - 向下指 */
.bubble-tail-bottom {
  position: absolute;
  bottom: -12px;
  left: 32px;
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid rgba(168, 181, 168, 0.25);
  z-index: 1;
  filter: blur(1px);
  transition: left 0.3s ease;
}

.bubble-tail-bottom::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: -12px;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #ffffff;
  filter: blur(0);
}

/* 气泡主体 */
.bubble-main {
  background: linear-gradient(145deg, 
    #ffffff 0%, 
    rgba(250, 251, 252, 0.98) 100%
  );
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}

/* 莫兰迪色系边框 */
.bubble-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, 
    rgba(168, 181, 168, 0.4) 0%,
    rgba(157, 180, 192, 0.35) 35%,
    rgba(201, 173, 167, 0.3) 70%,
    rgba(184, 184, 209, 0.35) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  animation: borderGlow 4s ease-in-out infinite;
}

@keyframes borderGlow {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* 头部信息条 */
.bubble-header {
  background: linear-gradient(135deg, 
    #a8b5a8 0%,      /* 鼠尾草绿 */
    #9db4c0 35%,     /* 雾蓝 */
    #c9ada7 70%,     /* 玫瑰褐 */
    #b8b8d1 100%     /* 薰衣草灰 */
  );
  padding: 0.9rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
  overflow: hidden;
}

/* 头部光泽 */
.bubble-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  animation: shimmer 3.5s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.bubble-icon {
  font-size: 1.3rem;
  display: inline-flex;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
  animation: iconBounce 2s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(-5deg);
  }
  75% {
    transform: translateY(-2px) rotate(5deg);
  }
}

.bubble-title {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.bubble-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(8px);
}

.bubble-close:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: scale(1.1) rotate(90deg);
}

.bubble-close:active {
  transform: scale(0.9) rotate(90deg);
}

/* 内容区域 - 自适应高度 */
.bubble-content-area {
  padding: 1.5rem 1.75rem;
  min-height: 100px;
  max-height: 70vh; /* 使用视口高度的70% */
  overflow-y: auto;
  background: linear-gradient(to bottom,
    rgba(250, 251, 252, 0.5) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* 确保文本换行 */
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* 自定义滚动条 */
.bubble-content-area::-webkit-scrollbar {
  width: 6px;
}

.bubble-content-area::-webkit-scrollbar-track {
  background: rgba(201, 173, 167, 0.08);
  border-radius: 10px;
  margin: 6px 0;
}

.bubble-content-area::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #c9ada7 0%, #a8b5a8 100%);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.bubble-content-area::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #b8a09e 0%, #98a598 100%);
}

/* 加载状态 */
.bubble-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 0;
}

.loading-dots {
  display: flex;
  gap: 0.45rem;
}

.loading-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  animation: dotBounce 1.4s infinite ease-in-out;
  box-shadow: 0 2px 8px rgba(168, 181, 168, 0.3);
}

.loading-dots span:nth-child(1) {
  animation-delay: 0s;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
  background: linear-gradient(135deg, #9db4c0 0%, #c9ada7 100%);
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
  background: linear-gradient(135deg, #c9ada7 0%, #b8b8d1 100%);
}

@keyframes dotBounce {
  0%, 60%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  30% {
    transform: translateY(-12px) scale(1.15);
    opacity: 1;
  }
}

.bubble-loading p {
  color: #8b9299;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  animation: textPulse 2s ease-in-out infinite;
}

@keyframes textPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* 流式输出文本 */
.bubble-text {
  color: #2d3748;
  font-size: 0.94rem;
  line-height: 1.75;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  letter-spacing: 0.3px;
  animation: textFadeIn 0.3s ease;
  font-weight: 400;
  max-width: 100%;
}

@keyframes textFadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 打字光标 */
.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  margin-left: 2px;
  animation: blink 1s infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

/* 代码块美化 */
.bubble-text code {
  background: linear-gradient(135deg, 
    rgba(168, 181, 168, 0.1) 0%, 
    rgba(157, 180, 192, 0.08) 100%
  );
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.88rem;
  color: #495057;
  border: 1px solid rgba(201, 173, 167, 0.15);
}

/* 空状态 */
.bubble-empty {
  text-align: center;
  padding: 2rem 1rem;
  color: #adb5bd;
  font-size: 0.9rem;
  opacity: 0.7;
  font-weight: 400;
}

/* 响应式 */
@media (max-width: 768px) {
  .ai-bubble-wrapper {
    max-width: calc(100vw - 3rem);
    min-width: 280px;
  }
}
</style>

