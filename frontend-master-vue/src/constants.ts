import { GraphData, NewsItem } from './types';

export const INITIAL_GRAPH_DATA: GraphData = {
  nodes: [
    // --- Core & Foundation ---
    { id: 'Frontend', label: '前端工程化', group: 'core', val: 30, mastery: 80 },
    { id: 'HTML', label: 'HTML5', group: 'foundation', val: 12, mastery: 95 },
    { id: 'CSS', label: 'CSS3', group: 'foundation', val: 12, mastery: 90 },
    { id: 'JS', label: 'JavaScript', group: 'foundation', val: 20, mastery: 85 },
    { id: 'TS', label: 'TypeScript', group: 'foundation', val: 18, mastery: 75 },
    
    // --- Frameworks ---
    { id: 'Vue', label: 'Vue.js', group: 'framework', val: 15, mastery: 70 },
    { id: 'React', label: 'React', group: 'framework', val: 15, mastery: 60 },
    { id: 'Angular', label: 'Angular', group: 'framework', val: 12, mastery: 30 },
    { id: 'Svelte', label: 'Svelte', group: 'framework', val: 10, mastery: 40 },
    { id: 'Solid', label: 'SolidJS', group: 'framework', val: 10, mastery: 20 },

    // --- Build Tools (New) ---
    { id: 'BuildTool', label: '构建工具', group: 'tool', val: 16, mastery: 60 },
    { id: 'Webpack', label: 'Webpack', group: 'tool', val: 14, mastery: 80 },
    { id: 'Vite', label: 'Vite', group: 'tool', val: 14, mastery: 85 },
    { id: 'Rspack', label: 'Rspack', group: 'tool', val: 10, mastery: 30 },
    { id: 'Rollup', label: 'Rollup', group: 'tool', val: 12, mastery: 50 },
    { id: 'Esbuild', label: 'Esbuild', group: 'tool', val: 10, mastery: 45 },
    { id: 'Babel', label: 'Babel', group: 'tool', val: 12, mastery: 70 },

    // --- CSS Solutions (New) ---
    { id: 'CSS_Sol', label: 'CSS 方案', group: 'style', val: 14, mastery: 75 },
    { id: 'Tailwind', label: 'TailwindCSS', group: 'style', val: 12, mastery: 90 },
    { id: 'Sass', label: 'Sass/SCSS', group: 'style', val: 12, mastery: 85 },
    { id: 'CSSinJS', label: 'CSS-in-JS', group: 'style', val: 10, mastery: 60 },
    { id: 'StyledComp', label: 'Styled Components', group: 'style', val: 10, mastery: 65 },
    { id: 'Emotion', label: 'Emotion', group: 'style', val: 10, mastery: 50 },

    // --- Cross Platform (New) ---
    { id: 'CrossPlat', label: '跨端开发', group: 'mobile', val: 15, mastery: 40 },
    { id: 'RN', label: 'React Native', group: 'mobile', val: 12, mastery: 50 },
    { id: 'Flutter', label: 'Flutter', group: 'mobile', val: 12, mastery: 30 },
    { id: 'Electron', label: 'Electron', group: 'mobile', val: 12, mastery: 60 },
    { id: 'Taro', label: 'Taro', group: 'mobile', val: 10, mastery: 45 },
    { id: 'UniApp', label: 'UniApp', group: 'mobile', val: 10, mastery: 55 },

    // --- Testing (New) ---
    { id: 'Testing', label: '测试', group: 'test', val: 14, mastery: 35 },
    { id: 'Jest', label: 'Jest', group: 'test', val: 12, mastery: 60 },
    { id: 'Vitest', label: 'Vitest', group: 'test', val: 12, mastery: 50 },
    { id: 'Cypress', label: 'Cypress', group: 'test', val: 12, mastery: 40 },
    { id: 'Playwright', label: 'Playwright', group: 'test', val: 12, mastery: 30 },

    // --- Database & ORM ---
    { id: 'Database', label: '数据库', group: 'database', val: 16, mastery: 45 },
    { id: 'MongoDB', label: 'MongoDB', group: 'database', val: 12, mastery: 60 },
    { id: 'MySQL', label: 'MySQL', group: 'database', val: 12, mastery: 70 },
    { id: 'PostgreSQL', label: 'PostgreSQL', group: 'database', val: 12, mastery: 50 },
    { id: 'Redis', label: 'Redis', group: 'database', val: 12, mastery: 55 },
    { id: 'IndexedDB', label: 'IndexedDB', group: 'database', val: 10, mastery: 40 },

    // --- State Management Extended ---
    { id: 'Zustand', label: 'Zustand', group: 'storage', val: 10, mastery: 65 },
    { id: 'MobX', label: 'MobX', group: 'storage', val: 10, mastery: 45 },
    { id: 'Recoil', label: 'Recoil', group: 'storage', val: 10, mastery: 35 },

    // --- Interaction & Network ---
    { id: 'Network', label: '网络协议', group: 'network', val: 18, mastery: 50 },
    { id: 'HTTP', label: 'HTTP/1.1 & 2', group: 'network', val: 12, mastery: 70 },
    { id: 'HTTP3', label: 'HTTP/3 (QUIC)', group: 'network', val: 10, mastery: 30 },
    { id: 'WebSocket', label: 'WebSocket', group: 'network', val: 12, mastery: 60 },
    { id: 'SSE', label: 'Server-Sent Events', group: 'network', val: 10, mastery: 40 },
    { id: 'WebRTC', label: 'WebRTC', group: 'network', val: 12, mastery: 25 },
    { id: 'GraphQL', label: 'GraphQL', group: 'network', val: 14, mastery: 55 },
    { id: 'REST', label: 'RESTful API', group: 'network', val: 12, mastery: 90 },
    
    // --- Browser Storage & State ---
    { id: 'Storage', label: '存储与状态', group: 'storage', val: 15, mastery: 75 },
    { id: 'Cookie', label: 'Cookies', group: 'storage', val: 10, mastery: 80 },
    { id: 'LocalStorage', label: 'LocalStorage', group: 'storage', val: 10, mastery: 90 },
    { id: 'Redux', label: 'Redux Toolkit', group: 'storage', val: 12, mastery: 70 },
    { id: 'Pinia', label: 'Pinia', group: 'storage', val: 12, mastery: 75 },

    // --- Security ---
    { id: 'Security', label: 'Web 安全', group: 'security', val: 15, mastery: 45 },
    { id: 'XSS', label: 'XSS 防护', group: 'security', val: 10, mastery: 60 },
    { id: 'CSRF', label: 'CSRF 防护', group: 'security', val: 10, mastery: 60 },
    { id: 'Auth', label: '认证鉴权', group: 'security', val: 12, mastery: 65 },
    { id: 'CORS', label: 'CORS', group: 'security', val: 10, mastery: 70 },
    { id: 'CSP', label: '内容安全策略', group: 'security', val: 10, mastery: 40 },
    { id: 'JWT', label: 'JWT', group: 'security', val: 12, mastery: 75 },
    { id: 'OAuth', label: 'OAuth', group: 'security', val: 12, mastery: 50 },

    // --- Performance & Architecture ---
    { id: 'Perf', label: '性能与架构', group: 'perf', val: 15, mastery: 55 },
    { id: 'SSR', label: 'SSR (服务端渲染)', group: 'perf', val: 12, mastery: 60 },
    { id: 'MicroFE', label: '微前端', group: 'perf', val: 14, mastery: 30 },
    { id: 'PWA', label: 'PWA', group: 'perf', val: 10, mastery: 50 },

    // --- Backend ---
    { id: 'Node', label: 'Node.js', group: 'backend', val: 15, mastery: 65 },
    { id: 'NestJS', label: 'NestJS', group: 'backend', val: 12, mastery: 40 },
    { id: 'Express', label: 'Express', group: 'backend', val: 12, mastery: 80 },
    { id: 'Koa', label: 'Koa', group: 'backend', val: 10, mastery: 60 },
    { id: 'Fastify', label: 'Fastify', group: 'backend', val: 10, mastery: 45 },

    // --- Graphics & Animation ---
    { id: 'Graphics', label: '图形渲染', group: 'graphics', val: 16, mastery: 35 },
    { id: 'Canvas', label: 'Canvas', group: 'graphics', val: 12, mastery: 60 },
    { id: 'WebGL', label: 'WebGL', group: 'graphics', val: 12, mastery: 30 },
    { id: 'WebGPU', label: 'WebGPU', group: 'graphics', val: 10, mastery: 20 },
    { id: 'ThreeJS', label: 'Three.js', group: 'graphics', val: 14, mastery: 40 },
    { id: 'D3JS', label: 'D3.js', group: 'graphics', val: 14, mastery: 55 },
    { id: 'SVG', label: 'SVG', group: 'graphics', val: 10, mastery: 75 },

    // --- Animation ---
    { id: 'Animation', label: '动画', group: 'animation', val: 14, mastery: 50 },
    { id: 'CSSAnimation', label: 'CSS动画', group: 'animation', val: 12, mastery: 80 },
    { id: 'WebAnimations', label: 'Web Animations API', group: 'animation', val: 10, mastery: 45 },
    { id: 'Lottie', label: 'Lottie', group: 'animation', val: 10, mastery: 40 },
    { id: 'Framer', label: 'Framer Motion', group: 'animation', val: 12, mastery: 55 },

    // --- DevTools ---
    { id: 'DevTools', label: '开发工具', group: 'devtools', val: 16, mastery: 70 },
    { id: 'Prettier', label: 'Prettier', group: 'devtools', val: 10, mastery: 90 },
    { id: 'ESLint', label: 'ESLint', group: 'devtools', val: 12, mastery: 85 },
    { id: 'Stylelint', label: 'Stylelint', group: 'devtools', val: 10, mastery: 70 },
    { id: 'Husky', label: 'Husky', group: 'devtools', val: 10, mastery: 80 },
    { id: 'LintStaged', label: 'lint-staged', group: 'devtools', val: 10, mastery: 75 },

    // --- Deploy & Operations ---
    { id: 'Deploy', label: '部署运维', group: 'deploy', val: 16, mastery: 50 },
    { id: 'Docker', label: 'Docker', group: 'deploy', val: 14, mastery: 60 },
    { id: 'Kubernetes', label: 'Kubernetes', group: 'deploy', val: 12, mastery: 30 },
    { id: 'CI_CD', label: 'CI/CD', group: 'deploy', val: 14, mastery: 65 },
    { id: 'Vercel', label: 'Vercel', group: 'deploy', val: 12, mastery: 80 },
    { id: 'Netlify', label: 'Netlify', group: 'deploy', val: 12, mastery: 75 },
    { id: 'CDN', label: 'CDN', group: 'deploy', val: 12, mastery: 70 },

    // --- Emerging Technologies ---
    { id: 'WebAssembly', label: 'WebAssembly', group: 'emerging', val: 14, mastery: 25 },
    { id: 'WebXR', label: 'WebXR', group: 'emerging', val: 12, mastery: 20 },
    { id: 'ServiceWorker', label: 'Service Worker', group: 'emerging', val: 12, mastery: 45 },
    { id: 'WebWorker', label: 'Web Worker', group: 'emerging', val: 12, mastery: 55 },
  ],
  links: [
    // Core Links
    { source: 'Frontend', target: 'HTML' },
    { source: 'Frontend', target: 'CSS' },
    { source: 'Frontend', target: 'JS' },
    { source: 'JS', target: 'TS' },
    { source: 'JS', target: 'Vue' },
    { source: 'JS', target: 'React' },
    { source: 'JS', target: 'Angular' },
    
    // Build Tools
    { source: 'Frontend', target: 'BuildTool' },
    { source: 'BuildTool', target: 'Webpack' },
    { source: 'BuildTool', target: 'Vite' },
    { source: 'BuildTool', target: 'Rspack' },
    { source: 'Webpack', target: 'Babel' },
    { source: 'Vite', target: 'Rollup' },
    { source: 'Vite', target: 'Esbuild' },

    // CSS Solutions
    { source: 'CSS', target: 'CSS_Sol' },
    { source: 'CSS_Sol', target: 'Tailwind' },
    { source: 'CSS_Sol', target: 'Sass' },
    { source: 'CSS_Sol', target: 'CSSinJS' },
    { source: 'CSSinJS', target: 'StyledComp' },
    { source: 'CSSinJS', target: 'Emotion' },

    // Cross Platform
    { source: 'Frontend', target: 'CrossPlat' },
    { source: 'CrossPlat', target: 'RN' },
    { source: 'React', target: 'RN' },
    { source: 'CrossPlat', target: 'Flutter' },
    { source: 'CrossPlat', target: 'Electron' },
    { source: 'Vue', target: 'UniApp' },

    // Testing
    { source: 'Frontend', target: 'Testing' },
    { source: 'Testing', target: 'Jest' },
    { source: 'Testing', target: 'Vitest' },
    { source: 'Vite', target: 'Vitest' },
    { source: 'Testing', target: 'Cypress' },
    { source: 'Testing', target: 'Playwright' },

    // Network Group
    { source: 'Frontend', target: 'Network' },
    { source: 'Network', target: 'HTTP' },
    { source: 'HTTP', target: 'HTTP3' },
    { source: 'Network', target: 'WebSocket' },
    { source: 'Network', target: 'SSE' },
    { source: 'Network', target: 'WebRTC' },
    { source: 'Network', target: 'REST' },
    { source: 'Network', target: 'GraphQL' },

    // Storage & State
    { source: 'Frontend', target: 'Storage' },
    { source: 'Storage', target: 'Cookie' },
    { source: 'Storage', target: 'LocalStorage' },
    { source: 'Storage', target: 'Redux' },
    { source: 'Vue', target: 'Pinia' },

    // Security
    { source: 'Frontend', target: 'Security' },
    { source: 'Security', target: 'XSS' },
    { source: 'Security', target: 'CSRF' },
    { source: 'Security', target: 'Auth' },

    // Perf & Arch
    { source: 'Frontend', target: 'Perf' },
    { source: 'Perf', target: 'SSR' },
    { source: 'Perf', target: 'PWA' },
    { source: 'Perf', target: 'MicroFE' },

    // Backend
    { source: 'Frontend', target: 'Node' },
    { source: 'Node', target: 'NestJS' },
    { source: 'Node', target: 'Express' },
    { source: 'Node', target: 'Koa' },
    { source: 'Node', target: 'Fastify' },
    { source: 'SSR', target: 'Node' },

    // Database connections
    { source: 'Frontend', target: 'Database' },
    { source: 'Database', target: 'MongoDB' },
    { source: 'Database', target: 'MySQL' },
    { source: 'Database', target: 'PostgreSQL' },
    { source: 'Database', target: 'Redis' },
    { source: 'Storage', target: 'IndexedDB' },
    { source: 'Node', target: 'MongoDB' },
    { source: 'Node', target: 'Redis' },

    // Extended State Management
    { source: 'Storage', target: 'Zustand' },
    { source: 'Storage', target: 'MobX' },
    { source: 'Storage', target: 'Recoil' },
    { source: 'React', target: 'Redux' },
    { source: 'React', target: 'Zustand' },
    { source: 'React', target: 'Recoil' },

    // Security Extended
    { source: 'Security', target: 'CORS' },
    { source: 'Security', target: 'CSP' },
    { source: 'Security', target: 'JWT' },
    { source: 'Security', target: 'OAuth' },
    { source: 'Auth', target: 'JWT' },
    { source: 'Auth', target: 'OAuth' },

    // Graphics & Animation
    { source: 'Frontend', target: 'Graphics' },
    { source: 'Graphics', target: 'Canvas' },
    { source: 'Graphics', target: 'WebGL' },
    { source: 'WebGL', target: 'WebGPU' },
    { source: 'Graphics', target: 'ThreeJS' },
    { source: 'WebGL', target: 'ThreeJS' },
    { source: 'Graphics', target: 'D3JS' },
    { source: 'Graphics', target: 'SVG' },
    { source: 'CSS', target: 'SVG' },

    // Animation
    { source: 'Frontend', target: 'Animation' },
    { source: 'Animation', target: 'CSSAnimation' },
    { source: 'CSS', target: 'CSSAnimation' },
    { source: 'Animation', target: 'WebAnimations' },
    { source: 'Animation', target: 'Lottie' },
    { source: 'React', target: 'Framer' },
    { source: 'Animation', target: 'Framer' },

    // DevTools
    { source: 'Frontend', target: 'DevTools' },
    { source: 'DevTools', target: 'Prettier' },
    { source: 'DevTools', target: 'ESLint' },
    { source: 'DevTools', target: 'Stylelint' },
    { source: 'DevTools', target: 'Husky' },
    { source: 'DevTools', target: 'LintStaged' },
    { source: 'Husky', target: 'LintStaged' },

    // Deploy & Operations
    { source: 'Frontend', target: 'Deploy' },
    { source: 'Deploy', target: 'Docker' },
    { source: 'Deploy', target: 'Kubernetes' },
    { source: 'Docker', target: 'Kubernetes' },
    { source: 'Deploy', target: 'CI_CD' },
    { source: 'Deploy', target: 'Vercel' },
    { source: 'Deploy', target: 'Netlify' },
    { source: 'Deploy', target: 'CDN' },

    // Emerging Technologies
    { source: 'Frontend', target: 'WebAssembly' },
    { source: 'Frontend', target: 'WebXR' },
    { source: 'PWA', target: 'ServiceWorker' },
    { source: 'Frontend', target: 'ServiceWorker' },
    { source: 'Frontend', target: 'WebWorker' },
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
