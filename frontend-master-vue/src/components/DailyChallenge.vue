<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
    <header class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold text-gray-800">每日前端挑战</h2>
        <p class="text-sm text-gray-500">题型每日刷新，涵盖填空、选择、代码实战</p>
      </div>
      <button
        @click="pickRandomChallenge"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
      >
        <RefreshCw :size="16" />
        随机一题
      </button>
    </header>

    <section class="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-5">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Lightbulb :size="18" class="text-primary" />
        </div>
        <div>
          <p class="text-sm text-gray-500">今日主题</p>
          <h3 class="text-lg font-semibold text-gray-800">{{ activeChallenge.title }}</h3>
          <p class="text-xs text-gray-500 mt-0.5">{{ activeTopicLabel }}</p>
        </div>
      </div>

      <p class="text-gray-700 leading-relaxed">{{ activeChallenge.description }}</p>

      <div class="space-y-4">
        <article
          v-for="question in activeChallenge.questions"
          :key="question.id"
          :class="[
            'rounded-lg border border-gray-200 bg-white/60 p-4 space-y-3 transition-colors',
            evaluationStates[question.id] === 'correct' ? 'border-emerald-300 bg-emerald-50/40' : '',
            evaluationStates[question.id] === 'incorrect' ? 'border-rose-300 bg-rose-50/40' : ''
          ]"
        >
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <span
                :class="[
                  'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wide',
                  question.type === 'multiple-choice' ? 'bg-amber-100 text-amber-700' : '',
                  question.type === 'fill-in' ? 'bg-indigo-100 text-indigo-700' : '',
                  question.type === 'coding' ? 'bg-emerald-100 text-emerald-700' : ''
                ]"
              >
                {{ questionTypeLabels[question.type] }}
              </span>
              <p class="text-sm text-gray-500">{{ question.focus }}</p>
            </div>
            <div
              v-if="evaluationStates[question.id] !== 'idle'"
              :class="[
                'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                evaluationStates[question.id] === 'correct'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-rose-100 text-rose-600'
              ]"
            >
              <span v-if="evaluationStates[question.id] === 'correct'">回答正确</span>
              <span v-else>再试一次</span>
            </div>
          </div>

          <p class="text-gray-800 leading-relaxed">{{ question.prompt }}</p>

          <div
            v-if="question.type === 'multiple-choice' && question.options"
            class="space-y-2 text-sm text-gray-700"
          >
            <label
              v-for="option in question.options"
              :key="option.id"
              :class="[
                'flex items-center gap-3 rounded-md border px-3 py-2 transition-colors',
                responses[question.id] === option.id ? 'border-primary bg-primary/10' : 'border-gray-200 bg-white hover:border-primary/40'
              ]"
            >
              <input
                type="radio"
                class="h-4 w-4 text-primary focus:ring-primary"
                :name="question.id"
                :value="option.id"
                v-model="responses[question.id]"
              />
              <span><span class="font-semibold text-gray-600">{{ option.label }}.</span> {{ option.text }}</span>
            </label>
          </div>

          <div v-else-if="question.type === 'fill-in' && question.blanks" class="space-y-3">
            <div
              v-for="(blank, blankIndex) in question.blanks"
              :key="blank.id"
              class="space-y-1"
            >
              <p class="text-sm font-medium text-gray-700">{{ blank.label }}</p>
              <input
                type="text"
                v-model="(responses[question.id] as string[])[blankIndex]"
                :placeholder="blank.hint ? `提示：${blank.hint}` : '请输入答案'"
                :class="[
                  'w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2',
                  evaluationStates[question.id] === 'correct'
                    ? 'border-emerald-300 focus:ring-emerald-200'
                    : evaluationStates[question.id] === 'incorrect'
                      ? 'border-rose-300 focus:ring-rose-200'
                      : 'border-gray-200 focus:ring-primary/30'
                ]"
              />
              <p v-if="blank.hint" class="text-xs text-indigo-500">提示：{{ blank.hint }}</p>
            </div>
          </div>

          <div v-else-if="question.type === 'coding'" class="space-y-3">
            <pre class="overflow-x-auto rounded-lg bg-gray-900 px-4 py-3 text-sm text-gray-100"><code>{{ question.starterCode }}</code></pre>
            <p class="text-xs text-gray-500">完成目标：{{ question.expectation }}</p>
            <textarea
              v-model="responses[question.id]"
              rows="6"
              :class="[
                'w-full rounded-lg border px-3 py-2 text-sm font-mono leading-relaxed shadow-sm focus:outline-none focus:ring-2',
                evaluationStates[question.id] === 'correct'
                  ? 'border-emerald-300 focus:ring-emerald-200'
                  : evaluationStates[question.id] === 'incorrect'
                    ? 'border-rose-300 focus:ring-rose-200'
                    : 'border-gray-200 focus:ring-primary/30'
              ]"
              placeholder="输入你的思路或代码片段，提交后系统会根据关键实现自动判定"
            ></textarea>
          </div>

          <p v-if="question.explanation" class="text-xs text-gray-500">思路提示：{{ question.explanation }}</p>

          <div
            v-if="showAnswers"
            class="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 text-xs text-gray-600"
          >
            <p class="font-semibold text-primary">参考答案</p>
            <ul class="mt-2 space-y-1">
              <li v-for="(answer, answerIndex) in getReferenceAnswers(question)" :key="`${question.id}-answer-${answerIndex}`">
                {{ answer }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="flex flex-wrap items-center gap-3 pt-1">
        <button
          @click="submitAnswers"
          class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          提交答案
        </button>
        <button
          @click="resetAnswers"
          class="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-primary/40 hover:text-primary"
        >
          重新作答
        </button>
        <button
          @click="toggleAnswers"
          :class="[
            'inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
            showAnswers ? 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:border-emerald-400' : 'border-gray-200 text-gray-600 hover:border-primary/40 hover:text-primary'
          ]"
        >
          {{ showAnswers ? '隐藏参考答案' : '显示参考答案' }}
        </button>
      </div>

      <div v-if="summary" class="rounded-xl border border-primary/20 bg-white p-4 text-sm text-gray-700">
        <p>
          本次得分：
          <span class="font-semibold text-primary">{{ summary.correct }}</span>
          /
          {{ summary.total }}
        </p>
        <p class="mt-1 text-xs text-gray-500">{{ summaryMessage }}</p>
      </div>

      <div v-if="activeChallenge.reference" class="pt-3 border-t border-gray-100">
        <p class="text-sm text-gray-500">推荐阅读</p>
        <a
          :href="activeChallenge.reference.url"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm"
        >
          {{ activeChallenge.reference.label }}
          <ExternalLink :size="14" />
        </a>
      </div>
    </section>

    <footer class="flex flex-wrap gap-2">
      <button
        v-for="topic in topics"
        :key="topic.key"
        @click="setTopic(topic.key)"
        :class="[
          'px-3 py-1.5 rounded-full border text-sm transition-colors',
          selectedTopic === topic.key
            ? 'border-primary bg-primary/10 text-primary'
            : 'border-gray-200 text-gray-600 hover:border-primary/40 hover:text-primary'
        ]"
      >
        {{ topic.label }}
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { Lightbulb, RefreshCw, ExternalLink } from 'lucide-vue-next';
import questionBankData from '../data/classic-question-bank.json';

interface ChallengeReference {
  label: string;
  url: string;
}

type TopicKey = 'all' | 'html' | 'css' | 'javascript' | 'vue' | 'performance';

type QuestionType = 'multiple-choice' | 'fill-in' | 'coding';

interface ChoiceOption {
  id: string;
  label: string;
  text: string;
  correct: boolean;
}

interface FillBlank {
  id: string;
  label: string;
  answer: string;
  hint?: string;
}

interface ChallengeQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  focus: string;
  options?: ChoiceOption[];
  blanks?: FillBlank[];
  starterCode?: string;
  expectation?: string;
  explanation?: string;
  checks?: string[];
}

interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  topic: Exclude<TopicKey, 'all'>;
  questions: ChallengeQuestion[];
  reference?: ChallengeReference;
}

interface FillInTemplate {
  prompt: string;
  focus: string;
  blanks: Array<Omit<FillBlank, 'id'>>;
  explanation?: string;
}

interface MultipleChoiceTemplate {
  prompt: string;
  focus: string;
  choices: Array<{ label: string; text: string; correct: boolean }>;
  explanation?: string;
}

interface CodingTemplate {
  prompt: string;
  focus: string;
  starterCode: string;
  expectation: string;
  explanation?: string;
  checks: string[];
}

interface TopicConfig {
  titles: string[];
  descriptions: string[];
  references: ChallengeReference[];
  fillIns: FillInTemplate[];
  multiChoices: MultipleChoiceTemplate[];
  codings: CodingTemplate[];
}

interface BankChoiceOption {
  label: string;
  text: string;
  correct: boolean;
}

interface BankQuestion {
  type: QuestionType;
  prompt: string;
  focus: string;
  options?: BankChoiceOption[];
  blanks?: Array<Omit<FillBlank, 'id'>>;
  starterCode?: string;
  expectation?: string;
  explanation?: string;
  checks?: string[];
}

const topicLabels: Record<Exclude<TopicKey, 'all'>, string> = {
  html: 'HTML 语义与结构',
  css: 'CSS 布局与样式',
  javascript: 'JavaScript 语言特性',
  vue: 'Vue 组合式开发',
  performance: '性能监控与优化'
};

const questionTypeLabels: Record<QuestionType, string> = {
  'multiple-choice': '选择题',
  'fill-in': '填空题',
  coding: '代码练习'
};

const topicConfigs: Record<Exclude<TopicKey, 'all'>, TopicConfig> = {
  html: {
    titles: ['语义标签实战', '结构化页面挑战', 'HTML 可访问性日练'],
    descriptions: [
      '围绕语义化标签与可访问性，完成页面基础结构搭建。',
      '巩固常见语义标签用途，用结构让内容表达清晰。',
      '针对博客与文章场景，选择合适标签提升信息层次。'
    ],
    references: [
      {
        label: 'MDN: HTML 语义元素指南',
        url: 'https://developer.mozilla.org/zh-CN/docs/Glossary/Semantics#semantics_in_html'
      },
      {
        label: 'Web.dev: 可访问性基础',
        url: 'https://web.dev/learn/accessibility/'
      }
    ],
    fillIns: [
      {
        prompt: '填空：用于包裹页面主要内容区域的语义标签是 ____。',
        focus: '语义结构',
        blanks: [
          { label: '标签名', answer: 'main', hint: '表示文档主体内容' }
        ],
        explanation: 'main 标签帮助辅助技术快速定位主要内容。'
      },
      {
        prompt: '填空：用于表示独立可复用内容块（如博客文章）的标签是 ____。',
        focus: '信息分区',
        blanks: [
          { label: '标签名', answer: 'article', hint: '常用于可独立分发的内容块' }
        ]
      },
      {
        prompt: '填空：用于放置与主内容相关但可独立阅读信息（如侧边栏）的标签是 ____。',
        focus: '可访问性',
        blanks: [
          { label: '标签名', answer: 'aside', hint: '呈现补充信息或推荐内容' }
        ]
      }
    ],
    multiChoices: [
      {
        prompt: '以下哪个语义标签最适合包裹博客文章正文部分？',
        focus: '标签选择',
        choices: [
          { label: 'A', text: '<section>', correct: false },
          { label: 'B', text: '<article>', correct: true },
          { label: 'C', text: '<aside>', correct: false },
          { label: 'D', text: '<div>', correct: false }
        ],
        explanation: 'article 适用于独立完整的内容块，便于复用与索引。'
      },
      {
        prompt: '当需要为页面添加可跳过导航的锚点时，更推荐使用哪一个标签？',
        focus: '可访问性',
        choices: [
          { label: 'A', text: '<nav>', correct: true },
          { label: 'B', text: '<header>', correct: false },
          { label: 'C', text: '<main>', correct: false },
          { label: 'D', text: '<footer>', correct: false }
        ],
        explanation: 'nav 区域配合跳转链接可帮助键盘用户快速定位菜单。'
      },
      {
        prompt: '如果需要强调某段文本的重要性而非视觉效果，应优先使用哪种标签？',
        focus: '语义强调',
        choices: [
          { label: 'A', text: '<strong>', correct: true },
          { label: 'B', text: '<span>', correct: false },
          { label: 'C', text: '<b>', correct: false },
          { label: 'D', text: '<mark>', correct: false }
        ],
        explanation: 'strong 供语义强调，辅助技术会重点朗读该内容。'
      }
    ],
    codings: [
      {
        prompt: '根据提供的结构片段，使用语义标签重写页面骨架。',
        focus: '语义布局',
        starterCode: `<div class="wrapper">
  <div class="top">Site Header</div>
  <div class="content">Article Body</div>
  <div class="side">Related Posts</div>
  <div class="bottom">Footer</div>
</div>`,
        expectation: '替换为 header/main/article/aside/footer 等语义标签，保留类名以兼容样式。',
        explanation: '增强结构语义的同时保持可维护性。',
        checks: ['header', 'main', 'article', 'aside', 'footer']
      },
      {
        prompt: '为一段文章加上适当的 landmark，让屏幕阅读器可以快速跳转。',
        focus: '可访问性',
        starterCode: `<div class="page">
  <div class="nav">Navigation</div>
  <div class="body">
    <h1>Post Title</h1>
    <p>Content...</p>
  </div>
</div>`,
        expectation: '应用 nav、main 等标签，并确保标题层级合理。',
        checks: ['nav', 'main', 'h1']
      }
    ]
  },
  css: {
    titles: ['布局博弈', '弹性与网格', 'CSS 响应式日练'],
    descriptions: [
      '练习在不同场景下权衡 Flexbox 与 Grid 的使用。',
      '掌握响应式布局常见策略并制定样式方案。',
      '通过实际布局片段理解现代 CSS 能力。'
    ],
    references: [
      {
        label: 'CSS-Tricks: Flexbox vs. Grid',
        url: 'https://css-tricks.com/css-grid-vs-flexbox/'
      },
      {
        label: 'MDN: 使用 CSS Grid 构建布局',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout'
      }
    ],
    fillIns: [
      {
        prompt: '填空：若要让子元素沿主轴平均分布空间，应使用属性 ____。',
        focus: 'Flex 属性',
        blanks: [
          { label: 'CSS 属性', answer: 'justify-content: space-between', hint: '控制主轴对齐' }
        ]
      },
      {
        prompt: '填空：CSS Grid 中定义列轨道宽度的属性是 ____。',
        focus: 'Grid 属性',
        blanks: [
          { label: 'CSS 属性', answer: 'grid-template-columns', hint: '用于声明列轨道数量与大小' }
        ]
      },
      {
        prompt: '填空：为了让元素在不同屏幕宽度下自动换列，可以结合媒体查询和 ____ 单位。',
        focus: '响应式布局',
        blanks: [
          { label: '单位', answer: 'fr', hint: 'Grid 中的弹性分数单位' }
        ],
        explanation: 'fr 单位让网格剩余空间按比例分配。'
      }
    ],
    multiChoices: [
      {
        prompt: '当你需要在单行中对齐导航栏项目并允许它们自动收缩，应该优先选择哪种布局？',
        focus: '布局选择',
        choices: [
          { label: 'A', text: 'Flexbox', correct: true },
          { label: 'B', text: 'CSS Grid', correct: false },
          { label: 'C', text: 'Position: absolute', correct: false },
          { label: 'D', text: 'CSS Columns', correct: false }
        ]
      },
      {
        prompt: '想要实现 Pinterest 风格的瀑布流布局，以下哪个方案最可控？',
        focus: '布局策略',
        choices: [
          { label: 'A', text: '使用 CSS Grid 配合 auto-fill', correct: true },
          { label: 'B', text: '使用 table 布局', correct: false },
          { label: 'C', text: '纯 float 布局', correct: false },
          { label: 'D', text: '仅依赖 margin 调整', correct: false }
        ],
        explanation: 'CSS Grid 配合自适应轨道可以更稳定地控制列宽。'
      },
      {
        prompt: '以下哪种写法可以让元素保持 16:9 比例？',
        focus: '现代 CSS',
        choices: [
          { label: 'A', text: 'aspect-ratio: 16 / 9;', correct: true },
          { label: 'B', text: 'padding-bottom: 9px;', correct: false },
          { label: 'C', text: 'height: 9%;', correct: false },
          { label: 'D', text: 'transform: scale(16/9);', correct: false }
        ]
      }
    ],
    codings: [
      {
        prompt: '使用 CSS Grid 构建一个响应式的三列布局，宽度不足时自动堆叠。',
        focus: 'Grid 实战',
        starterCode: `.layout {
  display: grid;
  gap: 1rem;
}

.item {
  min-height: 120px;
  background: #e2e8f0;
}`,
        expectation: '设置 grid-template-columns 使用 repeat(auto-fit, minmax())，并结合媒体查询。',
        checks: ['display: grid', 'grid-template-columns', 'repeat', 'minmax']
      },
      {
        prompt: '让一个按钮在行内轴上垂直水平居中并拥有 hover 过渡。',
        focus: 'Flex 对齐',
        starterCode: `.button {
  display: flex;
  width: 160px;
  height: 48px;
  color: #fff;
  background: #2563eb;
}
`,
        expectation: '通过 align-items/justify-content 居中，补充 transition 与 hover 状态。',
        checks: ['display: flex', 'align-items', 'justify-content', 'transition']
      }
    ]
  },
  javascript: {
    titles: ['异步挑战', 'ES 功能实战', 'JS 逻辑推演'],
    descriptions: [
      '考察 Promise、迭代器与现代语法的组合使用。',
      '巩固 ES6+ 常见特性在业务场景中的应用。',
      '通过实际问题设计高质量的 JS 解决方案。'
    ],
    references: [
      {
        label: 'MDN: Promise 指南',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises'
      },
      {
        label: 'JavaScript.info: Async/await',
        url: 'https://zh.javascript.info/async-await'
      }
    ],
    fillIns: [
      {
        prompt: '填空：为了捕获 async 函数中的异常，需要使用 ____ 包裹 await 表达式。',
        focus: '异常处理',
        blanks: [
          { label: '语句结构', answer: 'try...catch', hint: '用于处理异步错误' }
        ]
      },
      {
        prompt: '填空：将回调风格的 API 封装为 Promise 时，通常需要调用 ____ 与 ____。',
        focus: 'Promise 基础',
        blanks: [
          { label: '成功回调', answer: 'resolve', hint: '标记 Promise 完成' },
          { label: '失败回调', answer: 'reject', hint: '标记 Promise 失败' }
        ]
      },
      {
        prompt: '填空：如果希望限制并发请求数量，可以借助 ____ 数据结构来排队任务。',
        focus: '并发控制',
        blanks: [
          { label: '数据结构', answer: '队列', hint: '先进先出' }
        ]
      }
    ],
    multiChoices: [
      {
        prompt: '以下哪个方法可以在多个 Promise 最先完成时返回结果？',
        focus: 'Promise 组合',
        choices: [
          { label: 'A', text: 'Promise.any', correct: true },
          { label: 'B', text: 'Promise.all', correct: false },
          { label: 'C', text: 'Promise.allSettled', correct: false },
          { label: 'D', text: 'Promise.resolve', correct: false }
        ]
      },
      {
        prompt: '为了实现浅拷贝，以下哪种写法最直接？',
        focus: '对象操作',
        choices: [
          { label: 'A', text: 'const copy = { ...source };', correct: true },
          { label: 'B', text: 'const copy = JSON.parse(source);', correct: false },
          { label: 'C', text: 'const copy = source;', correct: false },
          { label: 'D', text: 'const copy = Object.freeze(source);', correct: false }
        ]
      },
      {
        prompt: '哪一种语法可以让我们优雅地从对象中取值并重命名？',
        focus: '解构赋值',
        choices: [
          { label: 'A', text: 'const { value: total } = order;', correct: true },
          { label: 'B', text: 'const total = order.value;', correct: false },
          { label: 'C', text: 'const total <- order.value;', correct: false },
          { label: 'D', text: 'const total => order.value;', correct: false }
        ]
      }
    ],
    codings: [
      {
        prompt: '封装一个带最大并发限制的请求调度器。',
        focus: '并发编排',
        starterCode: `class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = 0;
  }

  add(task) {
    // TODO: 实现调度逻辑
  }
}`,
        expectation: '在 add 中处理任务入队，确保同时运行的任务不超过限制并在完成后调度下一项。',
        checks: ['this.queue', 'this.running', 'promise', 'resolve']
      },
      {
        prompt: '实现一个工具函数 sequence(tasks) 让异步任务按顺序执行。',
        focus: 'Promise 串联',
        starterCode: `function sequence(tasks) {
  // tasks: (() => Promise<any>)[]
}
`,
        expectation: '返回一个 Promise，逐个执行任务并收集结果。',
        checks: ['promise', 'reduce', 'then']
      }
    ]
  },
  vue: {
    titles: ['组合式 API 实战', 'Vue 状态日练', '重用逻辑演练'],
    descriptions: [
      '基于组合式 API 构建高复用的业务逻辑片段。',
      '练习响应式系统与副作用管理。',
      '探索组件通信与可组合性策略。'
    ],
    references: [
      {
        label: 'Vue 文档：组合式 API 常见问题',
        url: 'https://cn.vuejs.org/guide/extras/composition-api-faq.html'
      },
      {
        label: 'Vue 文档：响应式基础',
        url: 'https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html'
      }
    ],
    fillIns: [
      {
        prompt: '填空：在组合式 API 中声明响应式对象可以使用函数 ____。',
        focus: '响应式基础',
        blanks: [
          { label: 'API 名称', answer: 'reactive', hint: '包装对象为代理' }
        ]
      },
      {
        prompt: '填空：当需要在组件卸载时清理副作用，应在 onMounted 中返回 ____。',
        focus: '生命周期管理',
        blanks: [
          { label: '回调', answer: '清理函数', hint: '例如移除事件监听' }
        ]
      },
      {
        prompt: '填空：组合式函数之间共享状态时，可以借助 ____ 来维护单例实例。',
        focus: '状态复用',
        blanks: [
          { label: 'Vue API', answer: 'provide/inject', hint: '父级提供，子级注入' }
        ]
      }
    ],
    multiChoices: [
      {
        prompt: '在组合式 API 中获取 props 并保持响应式，应该如何处理？',
        focus: 'Props 处理',
        choices: [
          { label: 'A', text: '直接解构 props', correct: false },
          { label: 'B', text: '使用 toRefs 将 props 转为 ref', correct: true },
          { label: 'C', text: '使用 JSON.parse(JSON.stringify(props))', correct: false },
          { label: 'D', text: '通过 computed 复制一份', correct: false }
        ]
      },
      {
        prompt: '以下哪种写法可以在组合式函数中暴露方法并保持调用方响应式？',
        focus: '组合函数设计',
        choices: [
          { label: 'A', text: 'return { state, update: () => { state.count++ } }', correct: true },
          { label: 'B', text: 'return state.count', correct: false },
          { label: 'C', text: 'return JSON.stringify(state)', correct: false },
          { label: 'D', text: 'return [...state]', correct: false }
        ]
      },
      {
        prompt: '当需要在模板中消费组合函数的内部状态时，下列哪项不是必须的？',
        focus: '模板使用',
        choices: [
          { label: 'A', text: '在模板中直接使用返回的 ref', correct: true },
          { label: 'B', text: '手动调用 .value', correct: false },
          { label: 'C', text: '导出组合函数', correct: true },
          { label: 'D', text: '在 setup 中引入并调用组合函数', correct: true }
        ],
        explanation: '模板会自动解包 ref，无需在插值中调用 .value。'
      }
    ],
    codings: [
      {
        prompt: '实现 useDarkMode 组合函数，支持切换主题并持久化到 localStorage。',
        focus: '组合函数设计',
        starterCode: `export function useDarkMode() {
  const isDark = ref(false);

  const toggle = () => {
    // TODO
  };

  return {
    isDark,
    toggle
  };
}`,
        expectation: '初始化时读取持久化值，监听 isDark 变化同步到 class 与存储。',
        checks: ['localstorage', 'watch', 'classlist']
      },
      {
        prompt: '封装一个 usePolling 组合函数，定时触发异步请求并允许暂停。',
        focus: '副作用管理',
        starterCode: `export function usePolling(fetcher, interval = 5000) {
  const isRunning = ref(false);
  // TODO: 实现开始、停止逻辑，并在组件卸载时清理
}`,
        expectation: '返回 start/stop 方法，利用 onMounted/onUnmounted 管理定时器。',
        checks: ['setinterval', 'clearinterval', 'onunmounted']
      }
    ]
  },
  performance: {
    titles: ['首屏性能追踪', '性能优化清单', 'Web 体验调优'],
    descriptions: [
      '针对首屏性能指标制定优化策略。',
      '梳理从分析到优化的完整流程。',
      '围绕监控、压缩、懒加载构建方案。'
    ],
    references: [
      {
        label: 'web.dev: Performance 指南',
        url: 'https://web.dev/fast/'
      },
      {
        label: 'Chrome Docs: Performance Panel',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/'
      }
    ],
    fillIns: [
      {
        prompt: '填空：评估首屏渲染速度的核心指标之一是 ____。',
        focus: '性能指标',
        blanks: [
          { label: '指标名称', answer: 'Largest Contentful Paint', hint: '简称 LCP' }
        ]
      },
      {
        prompt: '填空：通过 ____ 可以减少重复下载，提高资源利用率。',
        focus: '缓存策略',
        blanks: [
          { label: '策略', answer: 'HTTP 缓存', hint: '或 Service Worker 缓存命中' }
        ]
      },
      {
        prompt: '填空：为了避免主线程长任务阻塞，可以将计算搬到 ____。',
        focus: '性能分层',
        blanks: [
          { label: '机制', answer: 'Web Worker', hint: '在后台线程执行脚本' }
        ]
      }
    ],
    multiChoices: [
      {
        prompt: '以下哪种做法可以显著改善 LCP 指标？',
        focus: '首屏优化',
        choices: [
          { label: 'A', text: '关键资源采用预加载', correct: true },
          { label: 'B', text: '在首屏注入大量第三方脚本', correct: false },
          { label: 'C', text: '禁用图片懒加载', correct: false },
          { label: 'D', text: '延迟服务端渲染', correct: false }
        ]
      },
      {
        prompt: '当 CLS 指标偏高时，哪一种措施最直接？',
        focus: '布局稳定性',
        choices: [
          { label: 'A', text: '为图片和广告位预留尺寸', correct: true },
          { label: 'B', text: '增加字体文件', correct: false },
          { label: 'C', text: '延后主线程任务', correct: false },
          { label: 'D', text: '开启 HTTP/2', correct: false }
        ]
      },
      {
        prompt: '以下哪个工具可以帮助分析 bundle 体积构成？',
        focus: '构建性能',
        choices: [
          { label: 'A', text: 'webpack-bundle-analyzer', correct: true },
          { label: 'B', text: 'Chrome DevTools Memory', correct: false },
          { label: 'C', text: 'Git blame', correct: false },
          { label: 'D', text: 'npm outdated', correct: false }
        ]
      }
    ],
    codings: [
      {
        prompt: '编写一个懒加载图片的工具函数，使其在进入视口时再加载。',
        focus: 'IntersectionObserver',
        starterCode: `export function lazyLoadImages(selector = 'img[data-src]') {
  const images = document.querySelectorAll(selector);
  // TODO: 初始化 IntersectionObserver 并替换真实 src
}`,
        expectation: '使用 IntersectionObserver 监听并在回调中替换 data-src。',
        checks: ['intersectionobserver', 'observe', 'data-src']
      },
      {
        prompt: '实现一个性能日志上报器，记录指标并上报到服务端。',
        focus: 'PerformanceObserver',
        starterCode: `export function reportMetrics(endpoint) {
  // TODO: 监听 LCP/FID/CLS 并发送 fetch 请求
}`,
        expectation: '利用 PerformanceObserver 订阅指标并批量上报。',
        checks: ['performanceobserver', 'observe', 'fetch']
      }
    ]
  }
};

const externalQuestionBank = questionBankData as Partial<Record<Exclude<TopicKey, 'all'>, BankQuestion[]>>;

const topics: Array<{ key: TopicKey; label: string }> = [
  { key: 'all', label: '全部' },
  { key: 'html', label: 'HTML' },
  { key: 'css', label: 'CSS' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'vue', label: 'Vue' },
  { key: 'performance', label: '性能优化' }
];

const DAY_IN_MS = 86_400_000;

type QuestionResponse = string | string[];
type EvaluationState = 'idle' | 'correct' | 'incorrect';

const responses = reactive<Record<string, QuestionResponse>>({});
const evaluationStates = reactive<Record<string, EvaluationState>>({});
const summary = ref<{ correct: number; total: number } | null>(null);
const showAnswers = ref(false);

const normalizeAnswer = (value: string) => value.trim().replace(/[<>]/g, '').replace(/\s+/g, '').toLowerCase();

const parseAcceptableAnswers = (value: string) =>
  value
    .split(/[\/|]/)
    .map(entry => normalizeAnswer(entry))
    .filter(Boolean);

const evaluateFillIn = (question: ChallengeQuestion): EvaluationState => {
  if (!question.blanks?.length) {
    return 'incorrect';
  }
  const answer = responses[question.id];
  if (!Array.isArray(answer)) {
    return 'incorrect';
  }
  const result = question.blanks.every((blank, index) => {
    const userInput = answer[index] ?? '';
    if (!userInput.trim()) {
      return false;
    }
    const acceptable = parseAcceptableAnswers(blank.answer);
    const normalizedInput = normalizeAnswer(userInput);
    return acceptable.some(item => item === normalizedInput);
  });
  return result ? 'correct' : 'incorrect';
};

const evaluateMultipleChoice = (question: ChallengeQuestion): EvaluationState => {
  if (!question.options?.length) {
    return 'incorrect';
  }
  const answer = responses[question.id];
  if (typeof answer !== 'string') {
    return 'incorrect';
  }
  const selected = question.options.find(option => option.id === answer);
  if (!selected) {
    return 'incorrect';
  }
  return selected.correct ? 'correct' : 'incorrect';
};

const normalizeCode = (value: string) => value.replace(/\s+/g, ' ').trim().toLowerCase();

const evaluateCoding = (question: ChallengeQuestion): EvaluationState => {
  const answer = responses[question.id];
  if (typeof answer !== 'string' || !answer.trim()) {
    return 'incorrect';
  }
  if (!question.checks?.length) {
    return 'correct';
  }
  const normalizedInput = normalizeCode(answer);
  const result = question.checks.every(check => normalizedInput.includes(normalizeCode(check)));
  return result ? 'correct' : 'incorrect';
};

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const mulberry32 = (seed: number) => {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const pickOne = <T>(items: T[], randomFn: () => number) => {
  if (!items.length) {
    throw new Error('Empty pool');
  }
  const index = Math.floor(randomFn() * items.length);
  return items[index];
};

const shuffle = <T>(items: T[], randomFn: () => number) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(randomFn() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const buildChoiceOptions = (template: MultipleChoiceTemplate, randomFn: () => number): ChoiceOption[] => {
  const mapped: ChoiceOption[] = template.choices.map(choice => ({
    id: `${choice.label}-${hashString(choice.text)}`,
    label: choice.label,
    text: choice.text,
    correct: choice.correct
  }));
  const shuffled = shuffle(mapped, randomFn);
  return shuffled.map((option, index) => ({
    ...option,
    label: String.fromCharCode(65 + index)
  }));
};

const buildBankChoiceOptions = (options: BankChoiceOption[], seed: number): ChoiceOption[] => {
  const randomFn = mulberry32(seed + hashString('bank-choice'));
  const mapped: ChoiceOption[] = options.map((option, index) => ({
    id: `${option.label}-${hashString(`${option.text}-${seed}-${index}`)}`,
    label: option.label,
    text: option.text,
    correct: option.correct
  }));
  const shuffled = shuffle(mapped, randomFn);
  return shuffled.map((option, index) => ({
    ...option,
    label: String.fromCharCode(65 + index)
  }));
};

const buildBankQuestion = (question: BankQuestion, seed: number): ChallengeQuestion | null => {
  const baseSeed = seed + hashString(`${question.prompt}-${question.focus}`);
  if (question.type === 'multiple-choice') {
    if (!question.options?.length) {
      return null;
    }
    return {
      id: generateQuestionId('bank-choice', baseSeed),
      type: 'multiple-choice',
      prompt: question.prompt,
      focus: question.focus,
      options: buildBankChoiceOptions(question.options, baseSeed),
      explanation: question.explanation
    };
  }
  if (question.type === 'fill-in') {
    if (!question.blanks?.length) {
      return null;
    }
    return {
      id: generateQuestionId('bank-fill', baseSeed),
      type: 'fill-in',
      prompt: question.prompt,
      focus: question.focus,
      blanks: question.blanks.map((blank, index) => ({
        ...blank,
        id: generateQuestionId(`bank-fill-${index}`, baseSeed + hashString(`${blank.answer}-${index}`))
      })),
      explanation: question.explanation
    };
  }
  if (question.type === 'coding') {
    if (!question.starterCode) {
      return null;
    }
    return {
      id: generateQuestionId('bank-code', baseSeed),
      type: 'coding',
      prompt: question.prompt,
      focus: question.focus,
      starterCode: question.starterCode,
      expectation: question.expectation,
      explanation: question.explanation,
      checks: question.checks
    };
  }
  return null;
};

const generateQuestionId = (prefix: string, seed: number) => `${prefix}-${seed}`;

const getDailySeed = (topicKey: TopicKey) => {
  const today = Math.floor(Date.now() / DAY_IN_MS);
  return hashString(`${topicKey}-${today}`);
};

const generateDailyChallenge = (topicKey: TopicKey, seed: number): DailyChallenge => {
  const availableTopics = Object.keys(topicConfigs) as Array<Exclude<TopicKey, 'all'>>;
  const topicRandom = mulberry32(seed);
  const resolvedTopic = topicKey === 'all' ? pickOne(availableTopics, topicRandom) : topicKey;
  const config = topicConfigs[resolvedTopic];

  const bankEntries = externalQuestionBank[resolvedTopic] ?? [];
  const bankPools: Record<QuestionType, BankQuestion[]> = {
    'fill-in': bankEntries.filter(entry => entry.type === 'fill-in'),
    'multiple-choice': bankEntries.filter(entry => entry.type === 'multiple-choice'),
    coding: bankEntries.filter(entry => entry.type === 'coding')
  };
  const bankRandom = mulberry32(seed + hashString(`${resolvedTopic}-bank`));

  const resolveBankQuestion = (type: QuestionType, offset: number): ChallengeQuestion | null => {
    const pool = bankPools[type];
    if (!pool.length) {
      return null;
    }
    if (bankRandom() >= 0.5) {
      return null;
    }
    const index = Math.floor(bankRandom() * pool.length);
    return buildBankQuestion(pool[index], seed + hashString(`${resolvedTopic}-${type}-${offset}`));
  };

  const metaRandom = mulberry32(seed + hashString(resolvedTopic));
  const fillRandom = mulberry32(seed + hashString(`${resolvedTopic}-fill`));

  const title = pickOne(config.titles, metaRandom);
  const description = pickOne(config.descriptions, metaRandom);
  const reference = pickOne(config.references, metaRandom);

  const fillTemplate = pickOne(config.fillIns, fillRandom);
  const fillBlanks: FillBlank[] = fillTemplate.blanks.map(blank => ({
    ...blank,
    id: generateQuestionId(blank.label, seed + hashString(blank.answer))
  }));

  const choiceTemplate = pickOne(config.multiChoices, mulberry32(seed + hashString(`${resolvedTopic}-choice`)));
  const codingTemplate = pickOne(config.codings, mulberry32(seed + hashString(`${resolvedTopic}-code`)));

  const fallbackFillQuestion: ChallengeQuestion = {
    id: generateQuestionId('fill', seed + 1),
    type: 'fill-in',
    prompt: fillTemplate.prompt,
    focus: fillTemplate.focus,
    blanks: fillBlanks,
    explanation: fillTemplate.explanation
  };

  const fallbackChoiceQuestion: ChallengeQuestion = {
    id: generateQuestionId('choice', seed + 2),
    type: 'multiple-choice',
    prompt: choiceTemplate.prompt,
    focus: choiceTemplate.focus,
    options: buildChoiceOptions(choiceTemplate, mulberry32(seed + hashString(`${resolvedTopic}-shuffle`))),
    explanation: choiceTemplate.explanation
  };

  const fallbackCodingQuestion: ChallengeQuestion = {
    id: generateQuestionId('code', seed + 3),
    type: 'coding',
    prompt: codingTemplate.prompt,
    focus: codingTemplate.focus,
    starterCode: codingTemplate.starterCode,
    expectation: codingTemplate.expectation,
    explanation: codingTemplate.explanation,
    checks: codingTemplate.checks
  };

  const questions: ChallengeQuestion[] = [
    resolveBankQuestion('fill-in', 1) ?? fallbackFillQuestion,
    resolveBankQuestion('multiple-choice', 2) ?? fallbackChoiceQuestion,
    resolveBankQuestion('coding', 3) ?? fallbackCodingQuestion
  ];

  return {
    id: `${resolvedTopic}-${seed}`,
    title,
    description,
    topic: resolvedTopic,
    questions,
    reference
  };
};

const selectedTopic = ref<TopicKey>('all');
const activeSeed = ref<number>(getDailySeed(selectedTopic.value));

const activeChallenge = computed(() => generateDailyChallenge(selectedTopic.value, activeSeed.value));

const activeTopicLabel = computed(() => topicLabels[activeChallenge.value.topic] ?? '综合专题');

const totalQuestions = computed(() => activeChallenge.value.questions.length);

const getReferenceAnswers = (question: ChallengeQuestion): string[] => {
  if (question.type === 'fill-in' && question.blanks?.length) {
    return question.blanks.map((blank, index) => `空${index + 1}（${blank.label}）：${blank.answer}`);
  }

  if (question.type === 'multiple-choice' && question.options?.length) {
    const correctOptions = question.options.filter(option => option.correct);
    if (correctOptions.length) {
      return correctOptions.map(option => `正确选项 ${option.label}. ${option.text}`);
    }
  }

  if (question.type === 'coding') {
    const answers: string[] = [];
    if (question.expectation) {
      answers.push(`目标实现：${question.expectation}`);
    }
    if (question.checks?.length) {
      answers.push(`关键要点：${question.checks.join('、')}`);
    }
    if (answers.length) {
      return answers;
    }
  }

  return ['参考答案见题目解析。'];
};

const initializeState = (challenge: DailyChallenge) => {
  Object.keys(responses).forEach(key => {
    delete responses[key];
  });
  Object.keys(evaluationStates).forEach(key => {
    delete evaluationStates[key];
  });

  challenge.questions.forEach(question => {
    if (question.type === 'fill-in' && question.blanks) {
      responses[question.id] = question.blanks.map(() => '');
    } else {
      responses[question.id] = '';
    }
    evaluationStates[question.id] = 'idle';
  });

  summary.value = null;
  showAnswers.value = false;
};

const submitAnswers = () => {
  let correct = 0;
  activeChallenge.value.questions.forEach(question => {
    let result: EvaluationState;
    if (question.type === 'fill-in') {
      result = evaluateFillIn(question);
    } else if (question.type === 'multiple-choice') {
      result = evaluateMultipleChoice(question);
    } else {
      result = evaluateCoding(question);
    }
    evaluationStates[question.id] = result;
    if (result === 'correct') {
      correct += 1;
    }
  });
  summary.value = {
    correct,
    total: totalQuestions.value
  };
};

const resetAnswers = () => {
  initializeState(activeChallenge.value);
};

const toggleAnswers = () => {
  showAnswers.value = !showAnswers.value;
};

const summaryMessage = computed(() => {
  if (!summary.value) {
    return '';
  }
  if (summary.value.correct === summary.value.total) {
    return '太棒了，全部答对！';
  }
  if (summary.value.correct >= Math.ceil(summary.value.total * 0.67)) {
    return '表现不错，继续巩固即可。';
  }
  if (summary.value.correct > 0) {
    return '已经掌握部分考点，针对错题再练一次。';
  }
  return '别灰心，复盘后再来挑战。';
});

watch(activeChallenge, challenge => {
  initializeState(challenge);
}, { immediate: true });

const pickRandomChallenge = () => {
  const randomSeed = Date.now();
  activeSeed.value = hashString(`${selectedTopic.value}-${randomSeed}`);
};

const setTopic = (topicKey: TopicKey) => {
  selectedTopic.value = topicKey;
  activeSeed.value = getDailySeed(topicKey);
};
</script>

<style scoped>
button {
  font-family: inherit;
}
</style>
