import { GraphData, NewsItem } from './types';

// 关系类型定义
export type RelationType = 'foundation' | 'ecosystem' | 'dependency' | 'category' | 'application';

// 关系类型配置
export const RELATION_TYPES = {
  foundation: {
    label: '基础依赖',
    color: '#2196F3', // 科技蓝
    description: '核心技术的基础组成部分'
  },
  ecosystem: {
    label: '框架生态',
    color: '#4CAF50', // 生态绿
    description: '框架及其配套工具/库'
  },
  dependency: {
    label: '工具依赖',
    color: '#FFC107', // 警告黄
    description: '工具之间的技术依赖'
  },
  category: {
    label: '分类包含',
    color: '#9C27B0', // 紫色
    description: '大类到子项的分类关系'
  },
  application: {
    label: '跨域应用',
    color: '#FF5722', // 活力橙
    description: '技术在不同场景的应用'
  }
};

// ==================== 高阶知识图谱 ====================
// 注意：初阶和中阶数据在 graphLevels.ts 文件中
export const ADVANCED_GRAPH_DATA: GraphData = {
  nodes: [
    // --- Core & Foundation ---
    { id: 'Frontend', label: '前端工程化', group: 'core', val: 30, mastery: 80, level: 'advanced' },
    { id: 'HTML', label: 'HTML5', group: 'foundation', val: 12, mastery: 95, level: 'advanced' },
    { id: 'CSS', label: 'CSS3', group: 'foundation', val: 12, mastery: 90, level: 'advanced' },
    { id: 'JS', label: 'JavaScript', group: 'foundation', val: 20, mastery: 85, level: 'advanced' },
    { id: 'TS', label: 'TypeScript', group: 'foundation', val: 18, mastery: 75, level: 'advanced' },
    
    // --- Frameworks ---
    { id: 'Vue', label: 'Vue.js', group: 'framework', val: 15, mastery: 70, level: 'advanced' },
    { id: 'React', label: 'React', group: 'framework', val: 15, mastery: 60, level: 'advanced' },
    { id: 'Angular', label: 'Angular', group: 'framework', val: 12, mastery: 30, level: 'advanced' },
    { id: 'Svelte', label: 'Svelte', group: 'framework', val: 10, mastery: 40, level: 'advanced' },
    { id: 'Solid', label: 'SolidJS', group: 'framework', val: 10, mastery: 20, level: 'advanced' },

    // --- Build Tools (New) ---
    { id: 'BuildTool', label: '构建工具', group: 'tool', val: 16, mastery: 60, level: 'advanced' },
    { id: 'Webpack', label: 'Webpack', group: 'tool', val: 14, mastery: 80, level: 'advanced' },
    { id: 'Vite', label: 'Vite', group: 'tool', val: 14, mastery: 85, level: 'advanced' },
    { id: 'Parcel', label: 'Parcel', group: 'tool', val: 12, mastery: 65, level: 'advanced' },
    { id: 'Rspack', label: 'Rspack', group: 'tool', val: 10, mastery: 30, level: 'advanced' },
    { id: 'Rollup', label: 'Rollup', group: 'tool', val: 12, mastery: 50, level: 'advanced' },
    { id: 'Esbuild', label: 'Esbuild', group: 'tool', val: 10, mastery: 45, level: 'advanced' },
    { id: 'Babel', label: 'Babel', group: 'tool', val: 12, mastery: 70, level: 'advanced' },

    // --- CSS Solutions (New) ---
    { id: 'CSS_Sol', label: 'CSS 方案', group: 'style', val: 14, mastery: 75, level: 'advanced' },
    { id: 'Tailwind', label: 'TailwindCSS', group: 'style', val: 12, mastery: 90, level: 'advanced' },
    { id: 'Sass', label: 'Sass/SCSS', group: 'style', val: 12, mastery: 85, level: 'advanced' },
    { id: 'PostCSS', label: 'PostCSS', group: 'style', val: 12, mastery: 70, level: 'advanced' },
    { id: 'CSSinJS', label: 'CSS-in-JS', group: 'style', val: 10, mastery: 60, level: 'advanced' },
    { id: 'StyledComp', label: 'Styled Components', group: 'style', val: 10, mastery: 65, level: 'advanced' },
    { id: 'Emotion', label: 'Emotion', group: 'style', val: 10, mastery: 50, level: 'advanced' },

    // --- Cross Platform (New) ---
    { id: 'CrossPlat', label: '跨端开发', group: 'mobile', val: 15, mastery: 40, level: 'advanced' },
    { id: 'RN', label: 'React Native', group: 'mobile', val: 12, mastery: 50, level: 'advanced' },
    { id: 'Flutter', label: 'Flutter', group: 'mobile', val: 12, mastery: 30, level: 'advanced' },
    { id: 'Electron', label: 'Electron', group: 'mobile', val: 12, mastery: 60, level: 'advanced' },
    { id: 'Taro', label: 'Taro', group: 'mobile', val: 10, mastery: 45, level: 'advanced' },
    { id: 'UniApp', label: 'UniApp', group: 'mobile', val: 10, mastery: 55, level: 'advanced' },

    // --- Testing (New) ---
    { id: 'Testing', label: '测试', group: 'test', val: 14, mastery: 35, level: 'advanced' },
    { id: 'Jest', label: 'Jest', group: 'test', val: 12, mastery: 60, level: 'advanced' },
    { id: 'Vitest', label: 'Vitest', group: 'test', val: 12, mastery: 50, level: 'advanced' },
    { id: 'Cypress', label: 'Cypress', group: 'test', val: 12, mastery: 40, level: 'advanced' },
    { id: 'Playwright', label: 'Playwright', group: 'test', val: 12, mastery: 30, level: 'advanced' },

    // --- Database & ORM ---
    { id: 'Database', label: '数据库', group: 'database', val: 16, mastery: 45, level: 'advanced' },
    { id: 'MongoDB', label: 'MongoDB', group: 'database', val: 12, mastery: 60, level: 'advanced' },
    { id: 'MySQL', label: 'MySQL', group: 'database', val: 12, mastery: 70, level: 'advanced' },
    { id: 'PostgreSQL', label: 'PostgreSQL', group: 'database', val: 12, mastery: 50, level: 'advanced' },
    { id: 'Redis', label: 'Redis', group: 'database', val: 12, mastery: 55, level: 'advanced' },
    { id: 'IndexedDB', label: 'IndexedDB', group: 'database', val: 10, mastery: 40, level: 'advanced' },

    // --- State Management Extended ---
    { id: 'Zustand', label: 'Zustand', group: 'storage', val: 10, mastery: 65, level: 'advanced' },
    { id: 'MobX', label: 'MobX', group: 'storage', val: 10, mastery: 45, level: 'advanced' },
    { id: 'Recoil', label: 'Recoil', group: 'storage', val: 10, mastery: 35, level: 'advanced' },

    // --- Interaction & Network ---
    { id: 'Network', label: '网络协议', group: 'network', val: 18, mastery: 50, level: 'advanced' },
    { id: 'HTTP', label: 'HTTP/1.1 & 2', group: 'network', val: 12, mastery: 70, level: 'advanced' },
    { id: 'HTTP3', label: 'HTTP/3 (QUIC)', group: 'network', val: 10, mastery: 30, level: 'advanced' },
    { id: 'WebSocket', label: 'WebSocket', group: 'network', val: 12, mastery: 60, level: 'advanced' },
    { id: 'SSE', label: 'Server-Sent Events', group: 'network', val: 10, mastery: 40, level: 'advanced' },
    { id: 'WebRTC', label: 'WebRTC', group: 'network', val: 12, mastery: 25, level: 'advanced' },
    { id: 'GraphQL', label: 'GraphQL', group: 'network', val: 14, mastery: 55, level: 'advanced' },
    { id: 'REST', label: 'RESTful API', group: 'network', val: 12, mastery: 90, level: 'advanced' },
    
    // --- Browser Storage & State ---
    { id: 'Storage', label: '存储与状态', group: 'storage', val: 15, mastery: 75, level: 'advanced' },
    { id: 'Cookie', label: 'Cookies', group: 'storage', val: 10, mastery: 80, level: 'advanced' },
    { id: 'LocalStorage', label: 'LocalStorage', group: 'storage', val: 10, mastery: 90, level: 'advanced' },
    { id: 'Redux', label: 'Redux Toolkit', group: 'storage', val: 12, mastery: 70, level: 'advanced' },
    { id: 'Pinia', label: 'Pinia', group: 'storage', val: 12, mastery: 75, level: 'advanced' },

    // --- Security ---
    { id: 'Security', label: 'Web 安全', group: 'security', val: 15, mastery: 45, level: 'advanced' },
    { id: 'XSS', label: 'XSS 防护', group: 'security', val: 10, mastery: 60, level: 'advanced' },
    { id: 'CSRF', label: 'CSRF 防护', group: 'security', val: 10, mastery: 60, level: 'advanced' },
    { id: 'Auth', label: '认证鉴权', group: 'security', val: 12, mastery: 65, level: 'advanced' },
    { id: 'CORS', label: 'CORS', group: 'security', val: 10, mastery: 70, level: 'advanced' },
    { id: 'CSP', label: '内容安全策略', group: 'security', val: 10, mastery: 40, level: 'advanced' },
    { id: 'JWT', label: 'JWT', group: 'security', val: 12, mastery: 75, level: 'advanced' },
    { id: 'OAuth', label: 'OAuth', group: 'security', val: 12, mastery: 50, level: 'advanced' },

    // --- Performance & Architecture ---
    { id: 'Perf', label: '性能与架构', group: 'perf', val: 15, mastery: 55, level: 'advanced' },
    { id: 'SSR', label: 'SSR (服务端渲染)', group: 'perf', val: 12, mastery: 60, level: 'advanced' },
    { id: 'MicroFE', label: '微前端', group: 'perf', val: 14, mastery: 30, level: 'advanced' },
    { id: 'PWA', label: 'PWA', group: 'perf', val: 10, mastery: 50, level: 'advanced' },

    // --- Backend ---
    { id: 'Node', label: 'Node.js', group: 'backend', val: 15, mastery: 65, level: 'advanced' },
    { id: 'NestJS', label: 'NestJS', group: 'backend', val: 12, mastery: 40, level: 'advanced' },
    { id: 'Express', label: 'Express', group: 'backend', val: 12, mastery: 80, level: 'advanced' },
    { id: 'Koa', label: 'Koa', group: 'backend', val: 10, mastery: 60, level: 'advanced' },
    { id: 'Fastify', label: 'Fastify', group: 'backend', val: 10, mastery: 45, level: 'advanced' },

    // --- Graphics & Animation ---
    { id: 'Graphics', label: '图形渲染', group: 'graphics', val: 16, mastery: 35, level: 'advanced' },
    { id: 'Canvas', label: 'Canvas', group: 'graphics', val: 12, mastery: 60, level: 'advanced' },
    { id: 'WebGL', label: 'WebGL', group: 'graphics', val: 12, mastery: 30, level: 'advanced' },
    { id: 'WebGPU', label: 'WebGPU', group: 'graphics', val: 10, mastery: 20, level: 'advanced' },
    { id: 'ThreeJS', label: 'Three.js', group: 'graphics', val: 14, mastery: 40, level: 'advanced' },
    { id: 'D3JS', label: 'D3.js', group: 'graphics', val: 14, mastery: 55, level: 'advanced' },
    { id: 'SVG', label: 'SVG', group: 'graphics', val: 10, mastery: 75, level: 'advanced' },

    // --- Animation ---
    { id: 'Animation', label: '动画', group: 'animation', val: 14, mastery: 50, level: 'advanced' },
    { id: 'CSSAnimation', label: 'CSS动画', group: 'animation', val: 12, mastery: 80, level: 'advanced' },
    { id: 'WebAnimations', label: 'Web Animations API', group: 'animation', val: 10, mastery: 45, level: 'advanced' },
    { id: 'Lottie', label: 'Lottie', group: 'animation', val: 10, mastery: 40, level: 'advanced' },
    { id: 'Framer', label: 'Framer Motion', group: 'animation', val: 12, mastery: 55, level: 'advanced' },

    // --- DevTools ---
    { id: 'DevTools', label: '开发工具', group: 'devtools', val: 16, mastery: 70, level: 'advanced' },
    { id: 'Prettier', label: 'Prettier', group: 'devtools', val: 10, mastery: 90, level: 'advanced' },
    { id: 'ESLint', label: 'ESLint', group: 'devtools', val: 12, mastery: 85, level: 'advanced' },
    { id: 'Stylelint', label: 'Stylelint', group: 'devtools', val: 10, mastery: 70, level: 'advanced' },
    { id: 'Husky', label: 'Husky', group: 'devtools', val: 10, mastery: 80, level: 'advanced' },
    { id: 'LintStaged', label: 'lint-staged', group: 'devtools', val: 10, mastery: 75, level: 'advanced' },

    // --- Deploy & Operations ---
    { id: 'Deploy', label: '部署运维', group: 'deploy', val: 16, mastery: 50, level: 'advanced' },
    { id: 'Docker', label: 'Docker', group: 'deploy', val: 14, mastery: 60, level: 'advanced' },
    { id: 'Kubernetes', label: 'Kubernetes', group: 'deploy', val: 12, mastery: 30, level: 'advanced' },
    { id: 'CI_CD', label: 'CI/CD', group: 'deploy', val: 14, mastery: 65, level: 'advanced' },
    { id: 'Vercel', label: 'Vercel', group: 'deploy', val: 12, mastery: 80, level: 'advanced' },
    { id: 'Netlify', label: 'Netlify', group: 'deploy', val: 12, mastery: 75, level: 'advanced' },
    { id: 'CDN', label: 'CDN', group: 'deploy', val: 12, mastery: 70, level: 'advanced' },

    // --- Emerging Technologies ---
    { id: 'WebAssembly', label: 'WebAssembly', group: 'emerging', val: 14, mastery: 25, level: 'advanced' },
    { id: 'WebXR', label: 'WebXR', group: 'emerging', val: 12, mastery: 20, level: 'advanced' },
    { id: 'ServiceWorker', label: 'Service Worker', group: 'emerging', val: 12, mastery: 45, level: 'advanced' },
    { id: 'WebWorker', label: 'Web Worker', group: 'emerging', val: 12, mastery: 55, level: 'advanced' },
  ],
  links: [
    // ========== 基础依赖关系 (Foundation) ==========
    { source: 'Frontend', target: 'HTML', type: 'foundation' },
    { source: 'Frontend', target: 'CSS', type: 'foundation' },
    { source: 'Frontend', target: 'JS', type: 'foundation' },
    { source: 'JS', target: 'TS', type: 'foundation' },
    { source: 'CSS', target: 'SVG', type: 'foundation' },
    
    // ========== 框架生态关系 (Ecosystem) ==========
    { source: 'JS', target: 'Vue', type: 'ecosystem' },
    { source: 'JS', target: 'React', type: 'ecosystem' },
    { source: 'JS', target: 'Angular', type: 'ecosystem' },
    { source: 'JS', target: 'Svelte', type: 'ecosystem' },
    { source: 'JS', target: 'Solid', type: 'ecosystem' },
    
    // ========== 分类包含关系 (Category) ==========
    { source: 'Frontend', target: 'BuildTool', type: 'category' },
    { source: 'BuildTool', target: 'Webpack', type: 'category' },
    { source: 'BuildTool', target: 'Vite', type: 'category' },
    { source: 'BuildTool', target: 'Parcel', type: 'category' },
    { source: 'BuildTool', target: 'Rspack', type: 'category' },
    { source: 'BuildTool', target: 'Rollup', type: 'category' },
    { source: 'BuildTool', target: 'Esbuild', type: 'category' },
    { source: 'BuildTool', target: 'Babel', type: 'category' },
    
    // ========== 工具依赖关系 (Dependency) ==========
    { source: 'Webpack', target: 'Babel', type: 'dependency' },
    { source: 'Vite', target: 'Rollup', type: 'dependency' },
    { source: 'Vite', target: 'Esbuild', type: 'dependency' },

    // CSS Solutions
    { source: 'CSS', target: 'CSS_Sol', type: 'category' },
    { source: 'CSS_Sol', target: 'Tailwind', type: 'category' },
    { source: 'CSS_Sol', target: 'Sass', type: 'category' },
    { source: 'CSS_Sol', target: 'PostCSS', type: 'category' },
    { source: 'CSS_Sol', target: 'CSSinJS', type: 'category' },
    { source: 'CSSinJS', target: 'StyledComp', type: 'category' },
    { source: 'CSSinJS', target: 'Emotion', type: 'category' },

    // Cross Platform
    { source: 'Frontend', target: 'CrossPlat', type: 'category' },
    { source: 'CrossPlat', target: 'RN', type: 'category' },
    { source: 'CrossPlat', target: 'Flutter', type: 'category' },
    { source: 'CrossPlat', target: 'Electron', type: 'category' },
    { source: 'CrossPlat', target: 'Taro', type: 'category' },
    { source: 'CrossPlat', target: 'UniApp', type: 'category' },
    { source: 'React', target: 'RN', type: 'ecosystem' },
    { source: 'React', target: 'Taro', type: 'ecosystem' },
    { source: 'Vue', target: 'UniApp', type: 'ecosystem' },

    // Testing
    { source: 'Frontend', target: 'Testing', type: 'category' },
    { source: 'Testing', target: 'Jest', type: 'category' },
    { source: 'Testing', target: 'Vitest', type: 'category' },
    { source: 'Testing', target: 'Cypress', type: 'category' },
    { source: 'Testing', target: 'Playwright', type: 'category' },
    { source: 'Vite', target: 'Vitest', type: 'ecosystem' },

    // Network Group
    { source: 'Frontend', target: 'Network', type: 'category' },
    { source: 'Network', target: 'HTTP', type: 'category' },
    { source: 'Network', target: 'WebSocket', type: 'category' },
    { source: 'Network', target: 'SSE', type: 'category' },
    { source: 'Network', target: 'WebRTC', type: 'category' },
    { source: 'Network', target: 'REST', type: 'category' },
    { source: 'Network', target: 'GraphQL', type: 'category' },
    { source: 'HTTP', target: 'HTTP3', type: 'dependency' },

    // Storage & State
    { source: 'Frontend', target: 'Storage', type: 'category' },
    { source: 'Storage', target: 'Cookie', type: 'category' },
    { source: 'Storage', target: 'LocalStorage', type: 'category' },
    { source: 'Storage', target: 'Redux', type: 'category' },
    { source: 'Storage', target: 'IndexedDB', type: 'category' },
    { source: 'Storage', target: 'Zustand', type: 'category' },
    { source: 'Storage', target: 'MobX', type: 'category' },
    { source: 'Storage', target: 'Recoil', type: 'category' },
    { source: 'Vue', target: 'Pinia', type: 'ecosystem' },

    // Security
    { source: 'Frontend', target: 'Security', type: 'category' },
    { source: 'Security', target: 'XSS', type: 'category' },
    { source: 'Security', target: 'CSRF', type: 'category' },
    { source: 'Security', target: 'Auth', type: 'category' },
    { source: 'Security', target: 'CORS', type: 'category' },
    { source: 'Security', target: 'CSP', type: 'category' },
    { source: 'Security', target: 'JWT', type: 'category' },
    { source: 'Security', target: 'OAuth', type: 'category' },

    // Perf & Arch
    { source: 'Frontend', target: 'Perf', type: 'category' },
    { source: 'Perf', target: 'SSR', type: 'category' },
    { source: 'Perf', target: 'PWA', type: 'category' },
    { source: 'Perf', target: 'MicroFE', type: 'category' },

    // Backend
    { source: 'Frontend', target: 'Node', type: 'category' },
    { source: 'Node', target: 'NestJS', type: 'ecosystem' },
    { source: 'Node', target: 'Express', type: 'ecosystem' },
    { source: 'Node', target: 'Koa', type: 'ecosystem' },
    { source: 'Node', target: 'Fastify', type: 'ecosystem' },
    { source: 'SSR', target: 'Node', type: 'application' },

    // Database connections
    { source: 'Frontend', target: 'Database', type: 'category' },
    { source: 'Database', target: 'MongoDB', type: 'category' },
    { source: 'Database', target: 'MySQL', type: 'category' },
    { source: 'Database', target: 'PostgreSQL', type: 'category' },
    { source: 'Database', target: 'Redis', type: 'category' },
    { source: 'Node', target: 'MongoDB', type: 'application' },
    { source: 'Node', target: 'Redis', type: 'application' },

    // Extended State Management
    { source: 'React', target: 'Redux', type: 'ecosystem' },
    { source: 'React', target: 'Zustand', type: 'ecosystem' },
    { source: 'React', target: 'Recoil', type: 'ecosystem' },

    // Security Extended
    { source: 'Auth', target: 'JWT', type: 'application' },
    { source: 'Auth', target: 'OAuth', type: 'application' },

    // Graphics & Animation
    { source: 'Frontend', target: 'Graphics', type: 'category' },
    { source: 'Graphics', target: 'Canvas', type: 'category' },
    { source: 'Graphics', target: 'WebGL', type: 'category' },
    { source: 'Graphics', target: 'ThreeJS', type: 'category' },
    { source: 'Graphics', target: 'D3JS', type: 'category' },
    { source: 'Graphics', target: 'SVG', type: 'category' },
    { source: 'WebGL', target: 'WebGPU', type: 'dependency' },
    { source: 'WebGL', target: 'ThreeJS', type: 'application' },

    // Animation
    { source: 'Frontend', target: 'Animation', type: 'category' },
    { source: 'Animation', target: 'CSSAnimation', type: 'category' },
    { source: 'Animation', target: 'WebAnimations', type: 'category' },
    { source: 'Animation', target: 'Lottie', type: 'category' },
    { source: 'Animation', target: 'Framer', type: 'category' },
    { source: 'CSS', target: 'CSSAnimation', type: 'application' },
    { source: 'React', target: 'Framer', type: 'ecosystem' },

    // DevTools
    { source: 'Frontend', target: 'DevTools', type: 'category' },
    { source: 'DevTools', target: 'Prettier', type: 'category' },
    { source: 'DevTools', target: 'ESLint', type: 'category' },
    { source: 'DevTools', target: 'Stylelint', type: 'category' },
    { source: 'DevTools', target: 'Husky', type: 'category' },
    { source: 'DevTools', target: 'LintStaged', type: 'category' },
    { source: 'Husky', target: 'LintStaged', type: 'dependency' },

    // Deploy & Operations
    { source: 'Frontend', target: 'Deploy', type: 'category' },
    { source: 'Deploy', target: 'Docker', type: 'category' },
    { source: 'Deploy', target: 'Kubernetes', type: 'category' },
    { source: 'Deploy', target: 'CI_CD', type: 'category' },
    { source: 'Deploy', target: 'Vercel', type: 'category' },
    { source: 'Deploy', target: 'Netlify', type: 'category' },
    { source: 'Deploy', target: 'CDN', type: 'category' },
    { source: 'Docker', target: 'Kubernetes', type: 'dependency' },

    // Emerging Technologies
    { source: 'Frontend', target: 'WebAssembly', type: 'category' },
    { source: 'Frontend', target: 'WebXR', type: 'category' },
    { source: 'Frontend', target: 'ServiceWorker', type: 'category' },
    { source: 'Frontend', target: 'WebWorker', type: 'category' },
    { source: 'PWA', target: 'ServiceWorker', type: 'application' },
  ],
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Vue 3.5 "Tengen" 正式发布',
    source: 'GitHub Trending',
    url: '#',
    date: '2小时前',
    tags: ['Vue', '版本发布'],
  },
  {
    id: '2',
    title: 'React Server Components 的未来展望',
    source: 'Hacker News',
    url: '#',
    date: '4小时前',
    tags: ['React', '架构'],
  },
  {
    id: '3',
    title: '深入理解 CSS 锚点定位 API',
    source: '掘金',
    url: '#',
    date: '6小时前',
    tags: ['CSS', 'W3C'],
  },
  {
    id: '4',
    title: '2024年 Vite 为何全面超越 Webpack',
    source: 'Dev.to',
    url: '#',
    date: '1天前',
    tags: ['工具链', 'Vite'],
  },
  {
    id: '5',
    title: 'WebGPU: 浏览器图形学的下一个十年',
    source: 'Chrome Developers',
    url: '#',
    date: '2天前',
    tags: ['WebGPU', 'Graphics'],
  },
];

// 默认使用高阶图谱
export const INITIAL_GRAPH_DATA: GraphData = ADVANCED_GRAPH_DATA;
