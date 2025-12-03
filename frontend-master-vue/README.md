# Frontend Master - Vue 3 版本

> 🚀 沉浸式前端学习平台 - 完整转换自 React 版本

## ✨ 功能特性

### 🎯 已完整实现的功能

1. **进入页面动画** ✅
   - 聚光灯跟随鼠标效果
   - 滚动交互卡片出现动画
   - 流畅的过渡效果

2. **知识图谱可视化** ✅
   - D3.js 力导向图
   - 节点拖拽、缩放、点击查看详情
   - MediaPipe 手势控制 (摄像头交互)
   - 完整的手势识别 (张开/握拳/捏合/指引)

3. **AI 智能问答** ✅
   - Gemini API 集成
   - 流式输出效果
   - 对话历史记录

4. **代码演练场** ✅
   - Power Mode 粒子特效
   - 实时代码编辑
   - 屏幕震动效果

5. **前端资讯流** ✅
   - 瀑布流布局
   - 新闻卡片展示

6. **后端 API** ✅
   - FastAPI 框架
   - SQLAlchemy ORM
   - OpenAI API 集成
   - 数据库模型

## 📦 技术栈

### 前端
- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **样式**: TailwindCSS
- **可视化**: D3.js
- **手势识别**: MediaPipe Tasks Vision
- **AI**: Google Generative AI (Gemini)
- **特效**: canvas-confetti
- **图标**: lucide-vue-next

### 后端
- **框架**: FastAPI
- **数据库**: SQLAlchemy + SQLite
- **AI**: OpenAI API (支持 gpt-4.1-mini, gemini-2.5-flash)
- **向量数据库**: ChromaDB (可选)

## 🚀 快速开始

### 前置要求

- Node.js >= 18
- Python >= 3.11
- pnpm (推荐) 或 npm

### 1. 安装前端依赖

```bash
cd frontend-master-vue
pnpm install
# 或
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env`:

```bash
cp .env.example .env
```

编辑 `.env` 文件,添加你的 Gemini API Key:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> 获取 Gemini API Key: https://aistudio.google.com/app/apikey

### 3. 启动前端开发服务器

```bash
pnpm dev
# 或
npm run dev
```

访问: http://localhost:5173

### 4. (可选) 启动后端服务

```bash
cd backend

# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 启动服务
python -m app.main
```

后端 API 地址: http://localhost:8000

## 📁 项目结构

```
frontend-master-vue/
├── src/
│   ├── components/          # Vue 组件
│   │   ├── LandingPage.vue  # 进入页面 (聚光灯动画)
│   │   ├── KnowledgeGraph.vue  # 知识图谱 (D3.js + MediaPipe)
│   │   ├── Chat.vue         # AI 聊天
│   │   ├── CodingArena.vue  # 代码编辑器 (Power Mode)
│   │   └── NewsFeed.vue     # 资讯流
│   ├── services/            # 服务层
│   │   └── geminiService.ts # Gemini AI 服务
│   ├── types/               # TypeScript 类型
│   │   └── index.ts
│   ├── constants.ts         # 常量数据 (知识图谱数据)
│   ├── App.vue              # 主应用组件
│   └── main.ts              # 入口文件
├── backend/                 # FastAPI 后端
│   ├── app/
│   │   ├── api/             # API 路由
│   │   ├── core/            # 核心配置
│   │   ├── models/          # 数据库模型
│   │   ├── schemas/         # Pydantic schemas
│   │   ├── services/        # 业务逻辑
│   │   └── main.py          # FastAPI 应用
│   └── requirements.txt
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 核心功能说明

### 1. 聚光灯动画 (LandingPage.vue)

- 鼠标跟随效果
- 滚动时聚光灯扩大并移动到屏幕中心
- 卡片淡入 + 缩放动画

### 2. 知识图谱 (KnowledgeGraph.vue)

**D3.js 力导向图:**
- 节点根据 mastery 值着色
- 支持拖拽、缩放、平移
- 点击节点显示详情面板

**MediaPipe 手势控制:**
- 📹 开启摄像头进行手势识别
- ✋ **张开手**: 放大图谱
- ✊ **握拳**: 缩小图谱
- 🤏 **捏合**: 拖拽平移
- 👆 **食指**: 移动虚拟光标

### 3. AI 聊天 (Chat.vue)

- Gemini API 流式输出
- 实时显示 AI 回复
- 支持多轮对话

### 4. Power Mode (CodingArena.vue)

- 输入代码时触发粒子特效 (⚡)
- 轻微屏幕震动效果
- 极客模式氛围

## 🔧 开发指南

### 添加新的知识节点

编辑 `src/constants.ts`:

```typescript
export const INITIAL_GRAPH_DATA: GraphData = {
  nodes: [
    { id: 'NewNode', label: '新技术', group: 'framework', val: 15, mastery: 60 },
    // ...
  ],
  links: [
    { source: 'Frontend', target: 'NewNode' },
    // ...
  ]
};
```

### 自定义主题颜色

编辑 `index.html` 中的 TailwindCSS 配置:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',  // 修改主色调
        secondary: '#2196F3',
        // ...
      }
    }
  }
}
```

## 📝 与原 React 版本的对应关系

| React 特性 | Vue 3 对应 |
|-----------|-----------|
| `useState` | `ref` / `reactive` |
| `useEffect` | `onMounted` / `onUnmounted` / `watch` |
| `useRef` | `ref<HTMLElement>` |
| `props` | `defineProps` |
| `onClick` | `@click` |
| `className` | `class` / `:class` |
| `style` | `:style` |

## 🐛 常见问题

### 1. 摄像头无法开启

- 检查浏览器权限设置
- 确保使用 HTTPS 或 localhost
- 某些浏览器需要用户手动授权

### 2. Gemini API 报错

- 检查 `.env` 文件中的 API Key 是否正确
- 确认 API Key 有效且有配额
- 查看浏览器控制台的详细错误信息

### 3. D3.js 图谱不显示

- 检查容器是否有高度
- 确保数据格式正确
- 查看浏览器控制台是否有错误

## 📄 License

MIT

## 🙏 致谢

- 原 React 版本设计
- D3.js 社区
- MediaPipe 团队
- Vue.js 核心团队
