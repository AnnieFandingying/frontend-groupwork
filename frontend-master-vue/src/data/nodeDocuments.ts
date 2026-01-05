// 知识图谱节点文档数据
export const NODE_DOCUMENTS: Record<string, { title: string; content: string; examples?: string[]; resources?: { name: string; url: string }[] }> = {
  // === Core & Foundation ===
  Frontend: {
    title: "前端工程化",
    content: `前端工程化是现代Web开发的核心理念，它将传统的前端开发过程标准化、自动化、工具化。

## 核心概念
- **模块化开发**: 使用ES6模块、CommonJS等规范组织代码
- **构建优化**: 通过Webpack、Vite等工具进行代码打包和优化
- **自动化工作流**: CI/CD、代码检查、自动部署等
- **组件化架构**: 可复用的组件设计和管理

## 主要技术栈
- 构建工具: Vite、Webpack、Rollup
- 包管理: npm、yarn、pnpm  
- 代码质量: ESLint、Prettier、TypeScript
- 版本控制: Git工作流、语义化版本

## 最佳实践
1. 统一的代码规范和格式化
2. 完善的测试体系
3. 模块化的项目架构
4. 自动化的部署流程`,
    examples: [
      "// vite.config.ts 配置示例\nexport default defineConfig({\n  plugins: [vue()],\n  build: {\n    target: 'es2015',\n    outDir: 'dist'\n  }\n})",
      "// package.json 脚本配置\n{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"test\": \"vitest\"\n  }\n}"
    ],
    resources: [
      { name: "Vue官方文档", url: "https://cn.vuejs.org/" },
      { name: "Vite官方指南", url: "https://cn.vitejs.dev/" },
      { name: "前端工程化实践", url: "https://github.com/sorrycc/awesome-frontend" }
    ]
  },

  HTML: {
    title: "HTML5 语义化标记",
    content: `HTML5 是现代Web的基础，提供了丰富的语义化标签和现代Web API。

## 核心特性
- **语义化标签**: header、nav、main、article、section、aside、footer
- **表单增强**: 新的输入类型(email、date、color等)和验证属性
- **多媒体**: audio、video、canvas 原生支持
- **存储API**: localStorage、sessionStorage、IndexedDB

## 新增功能
- Web Components: Custom Elements、Shadow DOM
- Service Worker: 离线缓存和后台同步
- Web Workers: 多线程JavaScript执行
- Geolocation API: 地理位置服务

## 最佳实践
1. 使用语义化标签提高可访问性
2. 合理使用ARIA属性辅助屏幕阅读器
3. 响应式图片(picture、srcset)优化加载
4. 渐进式增强的开发策略`,
    examples: [
      "<!-- 语义化页面结构 -->\n<header>\n  <nav>导航菜单</nav>\n</header>\n<main>\n  <article>主要内容</article>\n  <aside>侧边栏</aside>\n</main>\n<footer>页脚信息</footer>",
      "<!-- 响应式图片 -->\n<picture>\n  <source media=\"(max-width: 768px)\" srcset=\"mobile.jpg\">\n  <img src=\"desktop.jpg\" alt=\"响应式图片\">\n</picture>"
    ],
    resources: [
      { name: "MDN HTML5指南", url: "https://developer.mozilla.org/zh-CN/docs/Web/HTML" },
      { name: "W3C HTML规范", url: "https://www.w3.org/TR/html52/" },
      { name: "语义化HTML最佳实践", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" }
    ]
  },

  CSS: {
    title: "CSS3 现代样式",
    content: `CSS3 带来了强大的样式能力和布局系统，是现代Web视觉设计的核心。

## 核心特性
- **Flexbox布局**: 一维灵活布局系统
- **Grid布局**: 二维网格布局系统  
- **CSS变量**: 自定义属性和动态主题
- **动画和过渡**: animation、transition、transform

## 现代CSS功能
- **Container Queries**: 容器查询响应式设计
- **CSS Houdini**: 扩展CSS的JavaScript API
- **CSS-in-JS**: 样式与组件逻辑结合
- **PostCSS**: CSS工具链和插件系统

## 预处理器
- Sass/SCSS: 变量、嵌套、混入
- Less: 动态样式语言
- Stylus: 富有表现力的CSS

## 最佳实践
1. 移动优先的响应式设计
2. CSS模块化和BEM命名规范
3. 性能优化：关键CSS内联
4. 浏览器兼容性处理`,
    examples: [
      "/* Flexbox 居中布局 */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}",
      "/* CSS Grid 网格布局 */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}",
      "/* CSS变量和主题 */\n:root {\n  --primary-color: #007bff;\n  --spacing: 16px;\n}\n\n.button {\n  background: var(--primary-color);\n  padding: var(--spacing);\n}"
    ],
    resources: [
      { name: "MDN CSS参考", url: "https://developer.mozilla.org/zh-CN/docs/Web/CSS" },
      { name: "CSS Tricks", url: "https://css-tricks.com/" },
      { name: "Can I Use兼容性查询", url: "https://caniuse.com/" }
    ]
  },

  JS: {
    title: "JavaScript 核心语言",
    content: `JavaScript 是现代Web开发的核心语言，ES6+标准带来了强大的语言特性。

## ES6+ 核心特性
- **箭头函数**: 简洁的函数语法和this绑定
- **解构赋值**: 从对象和数组中提取数据
- **模板字符串**: 字符串插值和多行字符串
- **Promise/async-await**: 异步编程模式

## 现代JavaScript
- **模块系统**: import/export语法
- **类和继承**: class语法和面向对象编程
- **迭代器和生成器**: for...of、Symbol.iterator
- **Proxy和Reflect**: 元编程和对象拦截

## 异步编程
- Promise链式调用和错误处理
- async/await语法糖
- 并发控制：Promise.all、Promise.race
- 生成器函数和异步生成器

## 最佳实践
1. 使用严格模式('use strict')
2. 避免全局变量污染
3. 函数式编程思维
4. 错误处理和边界情况考虑`,
    examples: [
      "// ES6+ 解构和展开操作符\nconst { name, age, ...rest } = person;\nconst newArray = [...oldArray, newItem];",
      "// async/await 异步处理\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('获取数据失败:', error);\n  }\n}",
      "// 函数式编程示例\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers\n  .filter(n => n > 2)\n  .map(n => n * 2)\n  .reduce((sum, n) => sum + n, 0);"
    ],
    resources: [
      { name: "MDN JavaScript指南", url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" },
      { name: "ES6标准规范", url: "https://tc39.es/ecma262/" },
      { name: "You Don't Know JS系列", url: "https://github.com/getify/You-Dont-Know-JS" }
    ]
  },

  TS: {
    title: "TypeScript 类型系统",
    content: `TypeScript 是JavaScript的超集，为大型项目提供了强大的类型系统和开发体验。

## 核心类型系统
- **基础类型**: string、number、boolean、array、object
- **接口定义**: interface关键字定义对象形状
- **联合类型**: 多类型组合(string | number)
- **泛型编程**: 类型参数化和复用

## 高级特性
- **类型推断**: 自动推导变量类型
- **类型断言**: as语法和类型转换
- **装饰器**: 元数据和AOP编程
- **命名空间**: 大型项目代码组织

## 实用工具类型
- Partial<T>: 将所有属性变为可选
- Required<T>: 将所有属性变为必选
- Pick<T, K>: 从T中选择属性K
- Omit<T, K>: 从T中排除属性K

## 最佳实践
1. 严格的类型检查配置
2. 接口优于类型别名
3. 善用联合类型和交叉类型
4. 渐进式TypeScript迁移`,
    examples: [
      "// 接口定义和泛型\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\ntype UserResponse = ApiResponse<User>;",
      "// 实用工具类型\ntype PartialUser = Partial<User>;\ntype UserNameAge = Pick<User, 'name' | 'age'>;",
      "// 类型守卫\nfunction isString(value: unknown): value is string {\n  return typeof value === 'string';\n}"
    ],
    resources: [
      { name: "TypeScript官方文档", url: "https://www.typescriptlang.org/zh/" },
      { name: "TypeScript深入理解", url: "https://github.com/basarat/typescript-book" },
      { name: "类型体操练习", url: "https://github.com/type-challenges/type-challenges" }
    ]
  },

  // === Frameworks ===
  Vue: {
    title: "Vue.js 渐进式框架",
    content: `Vue.js 是一个渐进式的JavaScript框架，以组件化开发和响应式数据绑定为核心。

## Vue 3 核心特性
- **Composition API**: 更灵活的组合式API
- **响应式系统**: Proxy基础的reactivity
- **单文件组件**: .vue文件的组件开发模式
- **指令系统**: v-if、v-for、v-model等内置指令

## 组件系统
- **Props和Events**: 父子组件通信
- **Slots**: 内容分发和组件插槽
- **Provide/Inject**: 依赖注入模式
- **组合式函数**: 逻辑复用的现代方式

## 生态系统
- **Vue Router**: 官方路由解决方案
- **Pinia**: 现代状态管理库
- **VueUse**: 组合式函数工具库
- **Nuxt.js**: 全栈框架和SSR

## 最佳实践
1. 合理使用Composition API
2. 组件职责单一原则
3. 响应式数据的正确使用
4. 性能优化和懒加载`,
    examples: [
      "// Composition API 基础用法\n<script setup>\nimport { ref, computed } from 'vue'\n\nconst count = ref(0)\nconst doubled = computed(() => count.value * 2)\n\nfunction increment() {\n  count.value++\n}\n</script>",
      "// 组合式函数\nfunction useCounter(initialValue = 0) {\n  const count = ref(initialValue)\n  const increment = () => count.value++\n  const decrement = () => count.value--\n  return { count, increment, decrement }\n}",
      "// 父子组件通信\n<!-- Parent -->\n<ChildComponent :message=\"msg\" @update=\"handleUpdate\" />\n\n<!-- Child -->\n<script setup>\ndefineProps(['message'])\ndefineEmits(['update'])\n</script>"
    ],
    resources: [
      { name: "Vue.js官方文档", url: "https://cn.vuejs.org/guide/" },
      { name: "Vue3学习指南", url: "https://vue3js.cn/" },
      { name: "Vue生态系统", url: "https://github.com/vuejs/awesome-vue" }
    ]
  },

  React: {
    title: "React 声明式UI",
    content: `React 是由Facebook开发的声明式UI库，通过虚拟DOM和单向数据流构建用户界面。

## 核心概念
- **JSX语法**: JavaScript中的XML语法扩展
- **组件化**: 函数组件和类组件
- **虚拟DOM**: 高效的DOM更新机制
- **单向数据流**: 预测性的数据流动

## Hooks系统
- **useState**: 状态管理钩子
- **useEffect**: 副作用处理钩子
- **useContext**: 上下文数据访问
- **自定义Hooks**: 逻辑复用机制

## 生态系统
- **React Router**: 客户端路由
- **Redux Toolkit**: 状态管理
- **Next.js**: 全栈React框架
- **React Query**: 服务器状态管理

## 最佳实践
1. 函数组件优于类组件
2. 合理拆分组件粒度
3. 使用React.memo优化渲染
4. 错误边界处理`,
    examples: [
      "// 函数组件和Hooks\nfunction Counter() {\n  const [count, setCount] = useState(0)\n  \n  useEffect(() => {\n    document.title = `Count: ${count}`\n  }, [count])\n  \n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count}\n    </button>\n  )\n}",
      "// 自定义Hook\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    return localStorage.getItem(key) || initialValue\n  })\n  \n  const setStoredValue = (newValue) => {\n    setValue(newValue)\n    localStorage.setItem(key, newValue)\n  }\n  \n  return [value, setStoredValue]\n}",
      "// Context使用\nconst ThemeContext = createContext()\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Component />\n    </ThemeContext.Provider>\n  )\n}"
    ],
    resources: [
      { name: "React官方文档", url: "https://react.dev/" },
      { name: "React Hooks指南", url: "https://react.dev/reference/react" },
      { name: "现代React开发", url: "https://github.com/enaqx/awesome-react" }
    ]
  },

  // === Build Tools ===
  Vite: {
    title: "Vite 下一代构建工具",
    content: `Vite 是基于原生ES模块的现代构建工具，提供极快的开发服务器和优化的生产构建。

## 核心优势
- **极速启动**: 基于ES模块的开发服务器
- **热更新**: 快速的热模块替换(HMR)
- **开箱即用**: 内置TypeScript、JSX、CSS支持
- **插件生态**: 兼容Rollup插件系统

## 主要特性
- **依赖预构建**: esbuild预构建依赖
- **代码分割**: 智能的chunk分割策略
- **资源优化**: 自动的CSS和图片优化
- **环境变量**: 内置的环境变量支持

## 插件系统
- Vue/React官方插件支持
- 丰富的社区插件生态
- 自定义插件开发
- Rollup插件兼容性

## 最佳实践
1. 合理配置别名和代理
2. 使用环境变量管理配置
3. 优化构建性能
4. 配置适当的浏览器兼容性`,
    examples: [
      "// vite.config.ts 基础配置\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue()],\n  server: {\n    port: 3000,\n    proxy: {\n      '/api': 'http://localhost:8080'\n    }\n  },\n  build: {\n    target: 'es2015',\n    sourcemap: true\n  }\n})",
      "// 环境变量使用\n// .env.development\nVITE_API_URL=http://localhost:8080\n\n// 代码中使用\nconst apiUrl = import.meta.env.VITE_API_URL",
      "// 动态导入和代码分割\nconst LazyComponent = lazy(() => import('./LazyComponent.vue'))\n\n// 路由懒加载\nconst routes = [\n  {\n    path: '/about',\n    component: () => import('./About.vue')\n  }\n]"
    ],
    resources: [
      { name: "Vite官方文档", url: "https://cn.vitejs.dev/guide/" },
      { name: "Vite插件开发", url: "https://cn.vitejs.dev/guide/api-plugin.html" },
      { name: "构建优化指南", url: "https://cn.vitejs.dev/guide/build.html" }
    ]
  },

  Webpack: {
    title: "Webpack 模块打包器",
    content: `Webpack 是现代JavaScript应用程序的静态模块打包器，具有强大的配置能力。

## 核心概念
- **Entry**: 构建入口点配置
- **Output**: 输出文件配置
- **Loaders**: 文件转换器
- **Plugins**: 功能插件系统

## 主要功能
- **模块热替换**: 开发时的实时更新
- **代码分割**: 按需加载和缓存优化
- **Tree Shaking**: 死代码消除
- **资源优化**: 图片、字体等资源处理

## 常用配置
- babel-loader: JavaScript转译
- css-loader: CSS文件处理
- file-loader: 文件资源处理
- HtmlWebpackPlugin: HTML模板生成

## 最佳实践
1. 开发和生产环境分离
2. 合理配置缓存策略
3. 优化构建性能
4. 监控bundle大小`,
    examples: [
      "// webpack.config.js 基础配置\nconst path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: '[name].[contenthash].js'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        use: 'babel-loader'\n      }\n    ]\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: './public/index.html'\n    })\n  ]\n}",
      "// 代码分割配置\nmodule.exports = {\n  optimization: {\n    splitChunks: {\n      chunks: 'all',\n      cacheGroups: {\n        vendor: {\n          name: 'vendors',\n          test: /[\\\\/]node_modules[\\\\/]/,\n          priority: 10\n        }\n      }\n    }\n  }\n}",
      "// 开发服务器配置\nmodule.exports = {\n  devServer: {\n    contentBase: './dist',\n    hot: true,\n    proxy: {\n      '/api': 'http://localhost:3000'\n    }\n  }\n}"
    ],
    resources: [
      { name: "Webpack官方文档", url: "https://webpack.js.org/concepts/" },
      { name: "Webpack实战指南", url: "https://github.com/webpack/webpack" },
      { name: "性能优化技巧", url: "https://webpack.js.org/guides/build-performance/" }
    ]
  },

  // === CSS Solutions ===
  Tailwind: {
    title: "TailwindCSS 实用工具优先",
    content: `TailwindCSS 是一个实用工具优先的CSS框架，通过原子类快速构建现代用户界面。

## 核心理念
- **原子类设计**: 单一职责的CSS类
- **实用工具优先**: 组合式的样式构建
- **响应式设计**: 内置的响应式修饰符
- **主题定制**: 高度可定制的设计系统

## 主要特性
- **JIT模式**: 按需生成CSS
- **深色模式**: 内置的暗色主题支持
- **组件提取**: @apply指令复用样式
- **插件系统**: 扩展功能插件

## 常用类别
- 布局: flex、grid、position
- 间距: p-*、m-*、gap-*
- 颜色: bg-*、text-*、border-*
- 响应式: sm:、md:、lg:、xl:

## 最佳实践
1. 使用组件提取避免重复
2. 合理配置purge移除未使用样式
3. 定制设计令牌和主题
4. 配合CSS-in-JS使用`,
    examples: [
      "<!-- TailwindCSS 实用类组合 -->\n<div class=\"flex items-center justify-between p-4 bg-white shadow-lg rounded-lg\">\n  <h2 class=\"text-xl font-bold text-gray-800\">标题</h2>\n  <button class=\"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors\">\n    按钮\n  </button>\n</div>",
      "/* 组件提取 */\n@layer components {\n  .btn-primary {\n    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors;\n  }\n}",
      "// tailwind.config.js 定制\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: '#007bff',\n        secondary: '#6c757d'\n      },\n      fontFamily: {\n        sans: ['Inter', 'sans-serif']\n      }\n    }\n  }\n}"
    ],
    resources: [
      { name: "TailwindCSS官方文档", url: "https://tailwindcss.com/docs" },
      { name: "Tailwind UI组件库", url: "https://tailwindui.com/" },
      { name: "设计系统最佳实践", url: "https://tailwindcss.com/docs/utility-first" }
    ]
  },

  // === Testing ===
  Jest: {
    title: "Jest JavaScript测试框架",
    content: `Jest 是Facebook开发的JavaScript测试框架，提供了完整的测试解决方案。

## 核心特性
- **零配置**: 开箱即用的测试环境
- **快照测试**: 组件输出的回归测试
- **模拟功能**: 强大的Mock和Spy功能
- **覆盖率报告**: 内置的代码覆盖率统计

## 主要功能
- **测试套件**: describe和test组织测试
- **断言库**: 丰富的expect匹配器
- **异步测试**: Promise和async/await测试
- **并行执行**: 多进程并行测试

## 测试类型
- 单元测试: 函数和组件测试
- 集成测试: 模块间交互测试
- 快照测试: UI组件回归测试
- 端到端测试: 完整用户流程测试

## 最佳实践
1. 编写可读性强的测试用例
2. 使用describe组织测试套件
3. 适当使用Mock避免外部依赖
4. 维护合理的测试覆盖率`,
    examples: [
      "// 基础测试用例\ndescribe('Calculator', () => {\n  test('should add two numbers correctly', () => {\n    const result = add(2, 3)\n    expect(result).toBe(5)\n  })\n  \n  test('should handle edge cases', () => {\n    expect(add(0, 0)).toBe(0)\n    expect(add(-1, 1)).toBe(0)\n  })\n})",
      "// 异步测试\ntest('async data fetch', async () => {\n  const data = await fetchUserData(1)\n  expect(data).toEqual({\n    id: 1,\n    name: 'John Doe'\n  })\n})\n\n// Promise测试\ntest('promise rejection', () => {\n  return expect(fetchInvalidData()).rejects.toThrow('Not found')\n})",
      "// Mock函数测试\ntest('mock implementation', () => {\n  const mockFn = jest.fn()\n  mockFn.mockReturnValue(42)\n  \n  const result = mockFn()\n  \n  expect(mockFn).toHaveBeenCalled()\n  expect(result).toBe(42)\n})"
    ],
    resources: [
      { name: "Jest官方文档", url: "https://jestjs.io/docs/getting-started" },
      { name: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
      { name: "JavaScript测试最佳实践", url: "https://github.com/goldbergyoni/javascript-testing-best-practices" }
    ]
  },

  // === Network ===
  GraphQL: {
    title: "GraphQL 查询语言",
    content: `GraphQL 是一种用于API的查询语言和数据获取规范，提供了更高效、强大的API设计方案。

## 核心概念
- **类型系统**: 强类型的Schema定义
- **查询语言**: 声明式的数据获取
- **单一端点**: 统一的API入口
- **按需获取**: 客户端指定所需数据

## 主要优势
- **避免过度获取**: 只获取需要的字段
- **强类型**: 编译时类型检查
- **内省功能**: API自文档化
- **实时订阅**: WebSocket基础的数据订阅

## 核心组件
- Schema: 数据模型和操作定义
- Resolver: 数据获取逻辑
- Query: 数据查询操作
- Mutation: 数据变更操作
- Subscription: 实时数据订阅

## 最佳实践
1. 设计良好的Schema结构
2. 合理使用DataLoader避免N+1问题
3. 适当的缓存策略
4. 错误处理和验证`,
    examples: [
      "# GraphQL Schema定义\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts(limit: Int): [Post!]!\n}",
      "// GraphQL查询示例\nquery GetUserWithPosts($userId: ID!) {\n  user(id: $userId) {\n    name\n    email\n    posts {\n      title\n      content\n    }\n  }\n}",
      "// Apollo Client使用\nimport { useQuery, gql } from '@apollo/client'\n\nconst GET_USERS = gql`\n  query GetUsers {\n    users {\n      id\n      name\n      email\n    }\n  }\n`\n\nfunction UsersList() {\n  const { loading, error, data } = useQuery(GET_USERS)\n  \n  if (loading) return <Loading />\n  if (error) return <Error message={error.message} />\n  \n  return (\n    <div>\n      {data.users.map(user => (\n        <UserCard key={user.id} user={user} />\n      ))}\n    </div>\n  )\n}"
    ],
    resources: [
      { name: "GraphQL官方文档", url: "https://graphql.org/learn/" },
      { name: "Apollo Client指南", url: "https://www.apollographql.com/docs/react/" },
      { name: "GraphQL最佳实践", url: "https://graphql.org/learn/best-practices/" }
    ]
  },

  // === Security ===
  JWT: {
    title: "JWT 令牌认证",
    content: `JSON Web Token (JWT) 是一种开放标准，用于在各方之间安全地传输信息。

## JWT结构
- **Header**: 令牌类型和签名算法
- **Payload**: 声明信息(claims)
- **Signature**: 防篡改签名

## 主要用途
- **身份认证**: 用户登录状态验证
- **信息交换**: 安全的信息传输
- **授权**: 基于角色的访问控制
- **无状态**: 服务器端无状态认证

## 常用声明
- iss: 签发者
- exp: 过期时间
- sub: 主题
- aud: 受众
- iat: 签发时间

## 最佳实践
1. 使用强加密算法签名
2. 设置合理的过期时间
3. 敏感信息不放入Payload
4. 实现Token刷新机制`,
    examples: [
      "// JWT生成 (Node.js)\nconst jwt = require('jsonwebtoken')\n\nconst payload = {\n  userId: '123',\n  username: 'john',\n  role: 'user'\n}\n\nconst token = jwt.sign(\n  payload,\n  process.env.JWT_SECRET,\n  { expiresIn: '24h' }\n)",
      "// JWT验证中间件\nfunction authenticateToken(req, res, next) {\n  const authHeader = req.headers['authorization']\n  const token = authHeader && authHeader.split(' ')[1]\n  \n  if (!token) {\n    return res.sendStatus(401)\n  }\n  \n  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {\n    if (err) return res.sendStatus(403)\n    req.user = user\n    next()\n  })\n}",
      "// 前端Token处理\nclass AuthService {\n  setToken(token) {\n    localStorage.setItem('token', token)\n  }\n  \n  getToken() {\n    return localStorage.getItem('token')\n  }\n  \n  isAuthenticated() {\n    const token = this.getToken()\n    if (!token) return false\n    \n    const payload = JSON.parse(atob(token.split('.')[1]))\n    return payload.exp * 1000 > Date.now()\n  }\n}"
    ],
    resources: [
      { name: "JWT官方文档", url: "https://jwt.io/introduction" },
      { name: "Token认证最佳实践", url: "https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/" },
      { name: "Web安全指南", url: "https://owasp.org/www-project-top-ten/" }
    ]
  },

  // === Graphics ===
  D3JS: {
    title: "D3.js 数据驱动文档",
    content: `D3.js 是一个基于数据操作文档的JavaScript库，用于创建动态、交互式的数据可视化。

## 核心概念
- **数据绑定**: 数据与DOM元素的绑定
- **选择集**: 元素选择和操作API
- **比例尺**: 数据值到视觉属性的映射
- **过渡动画**: 平滑的状态变化动画

## 主要模块
- **d3-selection**: DOM操作和事件处理
- **d3-scale**: 比例尺和数据映射
- **d3-axis**: 坐标轴生成器
- **d3-shape**: 形状生成器(线、弧、区域)
- **d3-force**: 力导向图布局

## 常见图表
- 条形图: 比较分类数据
- 折线图: 展示时间序列趋势
- 散点图: 展示变量间关系
- 饼图: 展示组成比例
- 力导向图: 展示网络关系

## 最佳实践
1. 合理选择可视化类型
2. 优化大数据集性能
3. 添加适当的交互效果
4. 考虑响应式设计`,
    examples: [
      "// D3基础选择和数据绑定\nconst svg = d3.select('#chart')\n  .append('svg')\n  .attr('width', 800)\n  .attr('height', 400)\n\nconst circles = svg.selectAll('circle')\n  .data(data)\n  .enter()\n  .append('circle')\n  .attr('cx', d => xScale(d.x))\n  .attr('cy', d => yScale(d.y))\n  .attr('r', 5)",
      "// 比例尺和坐标轴\nconst xScale = d3.scaleLinear()\n  .domain(d3.extent(data, d => d.x))\n  .range([0, width])\n\nconst yScale = d3.scaleLinear()\n  .domain(d3.extent(data, d => d.y))\n  .range([height, 0])\n\nconst xAxis = d3.axisBottom(xScale)\nconst yAxis = d3.axisLeft(yScale)\n\nsvg.append('g')\n  .attr('transform', `translate(0,${height})`)\n  .call(xAxis)",
      "// 过渡动画\ncircles.transition()\n  .duration(1000)\n  .attr('r', d => radiusScale(d.value))\n  .style('fill', d => colorScale(d.category))\n  \n// 力导向图\nconst simulation = d3.forceSimulation(nodes)\n  .force('link', d3.forceLink(links).id(d => d.id))\n  .force('charge', d3.forceManyBody().strength(-300))\n  .force('center', d3.forceCenter(width / 2, height / 2))"
    ],
    resources: [
      { name: "D3.js官方文档", url: "https://d3js.org/" },
      { name: "Observable D3画廊", url: "https://observablehq.com/@d3" },
      { name: "数据可视化最佳实践", url: "https://github.com/d3/d3/wiki/Gallery" }
    ]
  },

  // === Animation ===
  CSSAnimation: {
    title: "CSS动画与过渡",
    content: `CSS动画提供了声明式的动画解决方案，通过transition和animation创建流畅的用户体验。

## 过渡(Transitions)
- **transition-property**: 指定过渡属性
- **transition-duration**: 过渡持续时间
- **transition-timing-function**: 缓动函数
- **transition-delay**: 过渡延迟时间

## 动画(Animations)
- **@keyframes**: 关键帧定义
- **animation-name**: 动画名称
- **animation-duration**: 动画持续时间
- **animation-iteration-count**: 重复次数

## 变换(Transforms)
- **translate**: 位移变换
- **rotate**: 旋转变换
- **scale**: 缩放变换
- **skew**: 倾斜变换

## 最佳实践
1. 使用transform和opacity获得最佳性能
2. 避免动画layout属性
3. 使用will-change提示浏览器优化
4. 提供prefers-reduced-motion支持`,
    examples: [
      "/* CSS过渡效果 */\n.button {\n  background-color: #007bff;\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  background-color: #0056b3;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}",
      "/* 关键帧动画 */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.animate-in {\n  animation: fadeInUp 0.6s ease-out;\n}",
      "/* 加载动画 */\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.loading {\n  animation: spin 1s linear infinite;\n}\n\n/* 性能优化 */\n.will-animate {\n  will-change: transform;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}"
    ],
    resources: [
      { name: "MDN CSS动画指南", url: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations" },
      { name: "CSS动画性能优化", url: "https://web.dev/animations/" },
      { name: "Web动画最佳实践", url: "https://developers.google.com/web/fundamentals/design-and-ux/animations" }
    ]
  },

  // === DevTools ===
  ESLint: {
    title: "ESLint 代码质量工具",
    content: `ESLint 是一个可插拔的JavaScript代码检查工具，帮助识别和修复代码中的问题。

## 核心功能
- **语法检查**: 发现语法错误和潜在问题
- **代码风格**: 统一代码格式和风格
- **最佳实践**: 推荐使用最佳实践模式
- **自动修复**: 自动修复可修复的问题

## 规则类型
- **Error**: 错误级别，会导致构建失败
- **Warning**: 警告级别，不影响构建
- **Off**: 关闭规则

## 常用配置
- **extends**: 继承预设配置
- **plugins**: 扩展插件
- **rules**: 自定义规则
- **env**: 运行环境设置

## 流行预设
- @eslint/js: 官方推荐规则
- airbnb: Airbnb代码风格
- standard: Standard代码风格
- prettier: 与Prettier集成

## 最佳实践
1. 项目初期就配置ESLint
2. 与编辑器集成实时检查
3. 配置pre-commit钩子
4. 团队统一规则配置`,
    examples: [
      "// .eslintrc.json 配置\n{\n  \"extends\": [\n    \"eslint:recommended\",\n    \"@typescript-eslint/recommended\",\n    \"prettier\"\n  ],\n  \"parser\": \"@typescript-eslint/parser\",\n  \"plugins\": [\"@typescript-eslint\"],\n  \"env\": {\n    \"browser\": true,\n    \"node\": true,\n    \"es2022\": true\n  },\n  \"rules\": {\n    \"no-console\": \"warn\",\n    \"no-unused-vars\": \"error\",\n    \"prefer-const\": \"error\"\n  }\n}",
      "// package.json 脚本配置\n{\n  \"scripts\": {\n    \"lint\": \"eslint src --ext .js,.ts,.vue\",\n    \"lint:fix\": \"eslint src --ext .js,.ts,.vue --fix\"\n  }\n}",
      "// ESLint规则示例\n// ❌ 错误\nvar unusedVariable = 'never used'\nlet shouldBeConst = 'constant value'\nconsole.log('debugging info')\n\n// ✅ 正确\nconst shouldBeConst = 'constant value'\n// console.log('debugging info') - 移除或使用适当的日志工具"
    ],
    resources: [
      { name: "ESLint官方文档", url: "https://eslint.org/docs/user-guide/getting-started" },
      { name: "ESLint规则参考", url: "https://eslint.org/docs/rules/" },
      { name: "代码质量最佳实践", url: "https://github.com/airbnb/javascript" }
    ]
  },

  // === Deploy ===
  Docker: {
    title: "Docker 容器化技术",
    content: `Docker 是一个开源的容器化平台，通过容器技术实现应用的打包、分发和部署。

## 核心概念
- **镜像(Image)**: 只读的应用模板
- **容器(Container)**: 镜像的运行实例
- **仓库(Registry)**: 镜像存储和分发中心
- **Dockerfile**: 镜像构建脚本

## 主要优势
- **环境一致性**: 开发、测试、生产环境统一
- **快速部署**: 秒级启动和扩容
- **资源隔离**: 进程和资源隔离
- **微服务架构**: 支持微服务部署模式

## 常用命令
- docker build: 构建镜像
- docker run: 运行容器
- docker ps: 查看容器状态
- docker exec: 进入容器执行命令

## 最佳实践
1. 使用多阶段构建减小镜像大小
2. 合理使用缓存层
3. 不要在容器中存储数据
4. 使用.dockerignore排除无关文件`,
    examples: [
      "# Dockerfile 前端应用\n# 多阶段构建\nFROM node:18-alpine as builder\n\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\nRUN npm run build\n\n# 生产镜像\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html\nCOPY nginx.conf /etc/nginx/nginx.conf\n\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]",
      "# docker-compose.yml\nversion: '3.8'\nservices:\n  frontend:\n    build: .\n    ports:\n      - \"3000:80\"\n    environment:\n      - NODE_ENV=production\n    depends_on:\n      - backend\n  \n  backend:\n    image: node:18-alpine\n    working_dir: /app\n    volumes:\n      - ./backend:/app\n    ports:\n      - \"8000:8000\"\n    command: npm start",
      "# 基本Docker命令\n# 构建镜像\ndocker build -t my-app:latest .\n\n# 运行容器\ndocker run -d -p 3000:80 --name my-app-container my-app:latest\n\n# 查看日志\ndocker logs my-app-container\n\n# 进入容器\ndocker exec -it my-app-container /bin/sh"
    ],
    resources: [
      { name: "Docker官方文档", url: "https://docs.docker.com/get-started/" },
      { name: "Docker最佳实践", url: "https://docs.docker.com/develop/best-practices/" },
      { name: "容器化部署指南", url: "https://kubernetes.io/docs/concepts/" }
    ]
  },

  // === Additional Frameworks ===
  Angular: {
    title: "Angular 企业级框架",
    content: `Angular 是Google开发的企业级前端框架，采用TypeScript构建，提供完整的开发解决方案。

## 核心特性
- **组件化架构**: 基于组件的应用程序架构
- **依赖注入**: 强大的依赖注入系统
- **双向数据绑定**: 自动同步模型和视图
- **指令系统**: 扩展HTML功能的指令

## 主要功能
- **Angular CLI**: 强大的命令行工具
- **RxJS集成**: 响应式编程支持
- **路由系统**: 功能完整的路由管理
- **表单处理**: 响应式表单和模板驱动表单

## 架构概念
- **服务**: 业务逻辑封装
- **模块**: 应用程序的组织单元
- **管道**: 数据转换工具
- **守卫**: 路由保护机制

## 最佳实践
1. 使用OnPush变更检测策略
2. 合理使用服务和依赖注入
3. 遵循Angular风格指南
4. 使用Angular DevTools调试`,
    examples: [
      "// 组件定义\n@Component({\n  selector: 'app-user',\n  template: `\n    <div class=\"user-card\">\n      <h3>{{ user.name }}</h3>\n      <p>{{ user.email }}</p>\n      <button (click)=\"onEdit()\">编辑</button>\n    </div>\n  `,\n  styleUrls: ['./user.component.scss']\n})\nexport class UserComponent {\n  @Input() user!: User;\n  @Output() edit = new EventEmitter<User>();\n\n  onEdit() {\n    this.edit.emit(this.user);\n  }\n}",
      "// 服务定义\n@Injectable({\n  providedIn: 'root'\n})\nexport class UserService {\n  private apiUrl = '/api/users';\n\n  constructor(private http: HttpClient) {}\n\n  getUsers(): Observable<User[]> {\n    return this.http.get<User[]>(this.apiUrl);\n  }\n\n  createUser(user: User): Observable<User> {\n    return this.http.post<User>(this.apiUrl, user);\n  }\n}",
      "// 响应式表单\nexport class UserFormComponent {\n  userForm = this.fb.group({\n    name: ['', [Validators.required, Validators.minLength(2)]],\n    email: ['', [Validators.required, Validators.email]],\n    age: [null, [Validators.required, Validators.min(18)]]\n  });\n\n  constructor(private fb: FormBuilder) {}\n\n  onSubmit() {\n    if (this.userForm.valid) {\n      console.log(this.userForm.value);\n    }\n  }\n}"
    ],
    resources: [
      { name: "Angular官方文档", url: "https://angular.io/docs" },
      { name: "Angular中文文档", url: "https://angular.cn/" },
      { name: "Angular风格指南", url: "https://angular.io/guide/styleguide" },
      { name: "RxJS官方文档", url: "https://rxjs.dev/" }
    ]
  },

  Svelte: {
    title: "Svelte 编译时优化框架",
    content: `Svelte 是一个革命性的前端框架，通过编译时优化生成高效的原生JavaScript代码。

## 核心理念
- **编译时优化**: 构建时生成优化的代码
- **无虚拟DOM**: 直接操作真实DOM
- **响应式**: 简洁的响应式语法
- **组件化**: 单文件组件开发

## 主要特性
- **体积小**: 打包后体积极小
- **性能高**: 运行时性能优异
- **易学习**: 简单直观的API
- **零配置**: 开箱即用的开发体验

## 语法特色
- **反应性声明**: $: 标签自动更新
- **事件处理**: 简洁的事件绑定语法
- **条件渲染**: {#if} 块语法
- **列表渲染**: {#each} 循环语法

## 生态系统
- **SvelteKit**: 全栈应用框架
- **Svelte Native**: 移动应用开发
- **Sapper**: 静态站点生成器(已被SvelteKit取代)

## 最佳实践
1. 合理使用stores进行状态管理
2. 利用编译时优化特性
3. 使用TypeScript增强类型安全
4. 遵循Svelte命名约定`,
    examples: [
      "<!-- Svelte组件示例 -->\n<script>\n  import { onMount } from 'svelte';\n  \n  let count = 0;\n  let doubled;\n  \n  // 反应性声明\n  $: doubled = count * 2;\n  \n  function increment() {\n    count += 1;\n  }\n  \n  onMount(() => {\n    console.log('组件已挂载');\n  });\n</script>\n\n<div class=\"counter\">\n  <h1>计数器: {count}</h1>\n  <p>双倍: {doubled}</p>\n  <button on:click={increment}>+1</button>\n</div>\n\n<style>\n  .counter {\n    text-align: center;\n    padding: 1rem;\n  }\n</style>",
      "<!-- 条件渲染和循环 -->\n<script>\n  let todos = [\n    { id: 1, text: '学习Svelte', done: false },\n    { id: 2, text: '构建应用', done: true }\n  ];\n  \n  let newTodo = '';\n  \n  function addTodo() {\n    if (newTodo.trim()) {\n      todos = [...todos, {\n        id: Date.now(),\n        text: newTodo,\n        done: false\n      }];\n      newTodo = '';\n    }\n  }\n</script>\n\n{#if todos.length > 0}\n  <ul>\n    {#each todos as todo (todo.id)}\n      <li class:done={todo.done}>\n        {todo.text}\n      </li>\n    {/each}\n  </ul>\n{:else}\n  <p>暂无待办事项</p>\n{/if}",
      "// Svelte Store状态管理\nimport { writable, derived } from 'svelte/store';\n\n// 创建store\nexport const count = writable(0);\nexport const name = writable('Svelte');\n\n// 派生store\nexport const doubled = derived(count, $count => $count * 2);\n\n// 自定义store\nfunction createCounter() {\n  const { subscribe, set, update } = writable(0);\n  \n  return {\n    subscribe,\n    increment: () => update(n => n + 1),\n    decrement: () => update(n => n - 1),\n    reset: () => set(0)\n  };\n}\n\nexport const counter = createCounter();"
    ],
    resources: [
      { name: "Svelte官方文档", url: "https://svelte.dev/docs" },
      { name: "SvelteKit文档", url: "https://kit.svelte.dev/docs" },
      { name: "Svelte教程", url: "https://svelte.dev/tutorial" },
      { name: "Svelte Examples", url: "https://svelte.dev/examples" }
    ]
  },

  Solid: {
    title: "SolidJS 细粒度响应式",
    content: `SolidJS 是一个声明式JavaScript库，提供细粒度响应式更新和高性能的用户界面构建体验。

## 核心特性
- **细粒度响应式**: 精确的响应式更新
- **无虚拟DOM**: 直接更新真实DOM
- **JSX语法**: 熟悉的React-like语法
- **编译时优化**: 构建时代码优化

## 响应式原语
- **createSignal**: 创建响应式信号
- **createMemo**: 创建派生值
- **createEffect**: 处理副作用
- **createResource**: 异步数据管理

## 主要优势
- **性能卓越**: 接近原生JavaScript性能
- **体积小巧**: 运行时库很小
- **学习成本低**: React开发者易于上手
- **TypeScript优先**: 完整的TypeScript支持

## 控制流
- **Show**: 条件渲染组件
- **For**: 列表渲染组件
- **Switch/Match**: 多条件渲染
- **Suspense**: 异步组件支持

## 最佳实践
1. 合理使用Signal和Memo
2. 避免不必要的副作用
3. 利用编译时优化
4. 使用Solid的内置控制流组件`,
    examples: [
      "// SolidJS组件基础\nimport { createSignal, createMemo } from 'solid-js';\n\nfunction Counter() {\n  const [count, setCount] = createSignal(0);\n  const doubled = createMemo(() => count() * 2);\n  \n  const increment = () => setCount(count() + 1);\n  \n  return (\n    <div class=\"counter\">\n      <h1>计数: {count()}</h1>\n      <p>双倍: {doubled()}</p>\n      <button onClick={increment}>增加</button>\n    </div>\n  );\n}",
      "// 列表渲染和条件渲染\nimport { createSignal, For, Show } from 'solid-js';\n\nfunction TodoList() {\n  const [todos, setTodos] = createSignal([\n    { id: 1, text: '学习Solid', done: false },\n    { id: 2, text: '构建应用', done: true }\n  ]);\n  const [input, setInput] = createSignal('');\n  \n  const addTodo = () => {\n    const text = input().trim();\n    if (text) {\n      setTodos([...todos(), {\n        id: Date.now(),\n        text,\n        done: false\n      }]);\n      setInput('');\n    }\n  };\n  \n  return (\n    <div>\n      <input \n        value={input()} \n        onInput={(e) => setInput(e.target.value)}\n        placeholder=\"新待办事项\" \n      />\n      <button onClick={addTodo}>添加</button>\n      \n      <Show when={todos().length > 0} fallback={<p>暂无待办事项</p>}>\n        <For each={todos()}>\n          {(todo) => (\n            <div class={todo.done ? 'done' : ''}>\n              {todo.text}\n            </div>\n          )}\n        </For>\n      </Show>\n    </div>\n  );\n}",
      "// 异步数据获取\nimport { createResource, Suspense } from 'solid-js';\n\nasync function fetchUser(id) {\n  const response = await fetch(`/api/users/${id}`);\n  return response.json();\n}\n\nfunction UserProfile(props) {\n  const [user] = createResource(() => props.userId, fetchUser);\n  \n  return (\n    <Suspense fallback={<div>加载用户信息...</div>}>\n      <div class=\"user-profile\">\n        <Show when={user()} fallback={<div>用户不存在</div>}>\n          <h2>{user().name}</h2>\n          <p>{user().email}</p>\n        </Show>\n      </div>\n    </Suspense>\n  );\n}"
    ],
    resources: [
      { name: "SolidJS官方文档", url: "https://www.solidjs.com/docs/latest" },
      { name: "SolidJS教程", url: "https://www.solidjs.com/tutorial" },
      { name: "Solid Start框架", url: "https://start.solidjs.com/" },
      { name: "SolidJS Playground", url: "https://playground.solidjs.com/" }
    ]
  },

  // === Build Tools ===
  Rollup: {
    title: "Rollup 模块打包器",
    content: `Rollup 是一个专为JavaScript库设计的模块打包器，专注于ES模块的高效打包。

## 核心特性
- **ES模块优先**: 原生支持ES6模块
- **Tree Shaking**: 优秀的死代码消除
- **代码分割**: 动态导入的代码分割
- **插件系统**: 丰富的插件生态

## 主要优势
- **输出干净**: 生成简洁的代码
- **体积小**: 打包后文件体积小
- **标准兼容**: 遵循ES模块标准
- **库友好**: 特别适合打包JavaScript库

## 常用插件
- **@rollup/plugin-node-resolve**: 解析node_modules
- **@rollup/plugin-commonjs**: CommonJS转换
- **@rollup/plugin-babel**: Babel转译
- **@rollup/plugin-terser**: 代码压缩

## 最佳实践
1. 用于库的打包优于应用打包
2. 合理配置external避免打包依赖
3. 使用插件扩展功能
4. 配置多种输出格式`,
    examples: [
      "// rollup.config.js 基础配置\nimport resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\nimport babel from '@rollup/plugin-babel';\nimport terser from '@rollup/plugin-terser';\n\nexport default {\n  input: 'src/index.js',\n  output: [\n    {\n      file: 'dist/bundle.cjs.js',\n      format: 'cjs'\n    },\n    {\n      file: 'dist/bundle.esm.js',\n      format: 'es'\n    },\n    {\n      file: 'dist/bundle.umd.js',\n      format: 'umd',\n      name: 'MyLibrary'\n    }\n  ],\n  plugins: [\n    resolve(),\n    commonjs(),\n    babel({ babelHelpers: 'bundled' }),\n    terser()\n  ],\n  external: ['lodash', 'react']\n};",
      "// 库的多格式输出配置\nconst createConfig = (format) => ({\n  input: 'src/index.js',\n  output: {\n    file: `dist/library.${format}.js`,\n    format,\n    name: format === 'umd' ? 'MyLibrary' : undefined\n  },\n  plugins: [\n    resolve(),\n    commonjs(),\n    babel({\n      babelHelpers: 'bundled',\n      exclude: 'node_modules/**'\n    })\n  ],\n  external: ['react', 'react-dom']\n});\n\nexport default ['es', 'cjs', 'umd'].map(createConfig);",
      "// 代码分割配置\nexport default {\n  input: ['src/main.js', 'src/vendor.js'],\n  output: {\n    dir: 'dist',\n    format: 'es',\n    entryFileNames: '[name].[hash].js',\n    chunkFileNames: '[name].[hash].js'\n  },\n  plugins: [\n    resolve(),\n    commonjs()\n  ],\n  manualChunks: {\n    'react-vendor': ['react', 'react-dom'],\n    'utils': ['lodash', 'moment']\n  }\n};"
    ],
    resources: [
      { name: "Rollup官方文档", url: "https://rollupjs.org/guide/en/" },
      { name: "Rollup插件列表", url: "https://github.com/rollup/awesome" },
      { name: "Rollup配置示例", url: "https://rollupjs.org/guide/en/#configuration-files" }
    ]
  },

  Esbuild: {
    title: "Esbuild 极速构建工具",
    content: `Esbuild 是一个用Go语言编写的极速JavaScript/TypeScript打包器和压缩器。

## 核心优势
- **极速构建**: 比其他打包器快10-100倍
- **零配置**: 开箱即用的简单配置
- **原生支持**: 内置TypeScript、JSX支持
- **代码分割**: 支持动态导入和代码分割

## 主要功能
- **打包**: JavaScript和TypeScript打包
- **转译**: ES6+转ES5，JSX转JavaScript
- **压缩**: 高效的代码压缩
- **开发服务器**: 内置开发服务器

## 使用场景
- **开发环境**: 快速的开发构建
- **库打包**: 简单库的快速打包
- **依赖预构建**: Vite等工具的依赖预构建
- **CI/CD**: 持续集成中的快速构建

## 限制说明
- **插件生态**: 插件系统相对简单
- **配置选项**: 配置选项较少
- **浏览器兼容**: 对老浏览器支持有限
- **功能特性**: 某些高级功能不支持

## 最佳实践
1. 用于快速原型开发
2. 配合其他工具使用
3. 适合现代浏览器项目
4. 利用其速度优势`,
    examples: [
      "// esbuild API使用\nconst esbuild = require('esbuild');\n\nesbuild.build({\n  entryPoints: ['src/app.js'],\n  bundle: true,\n  outfile: 'dist/bundle.js',\n  format: 'esm',\n  target: 'es2020',\n  sourcemap: true,\n  minify: true,\n  define: {\n    'process.env.NODE_ENV': '\"production\"'\n  }\n}).catch(() => process.exit(1));",
      "// 开发服务器配置\nconst esbuild = require('esbuild');\n\nconst ctx = await esbuild.context({\n  entryPoints: ['src/app.js'],\n  bundle: true,\n  outdir: 'dist',\n  format: 'esm',\n  target: 'es2020',\n  sourcemap: true,\n  loader: {\n    '.png': 'file',\n    '.svg': 'text'\n  }\n});\n\n// 启动开发服务器\nconst server = await ctx.serve({\n  servedir: 'public',\n  port: 3000\n});\n\nconsole.log(`Server running at http://localhost:${server.port}`);\n\n// 监听文件变化\nctx.watch();",
      "// TypeScript和JSX支持\nconst esbuild = require('esbuild');\n\nesbuild.build({\n  entryPoints: ['src/App.tsx'],\n  bundle: true,\n  outfile: 'dist/app.js',\n  format: 'iife',\n  target: 'es2017',\n  jsx: 'automatic',\n  loader: {\n    '.ts': 'ts',\n    '.tsx': 'tsx',\n    '.css': 'css'\n  },\n  external: ['react', 'react-dom'],\n  globalName: 'App'\n});"
    ],
    resources: [
      { name: "Esbuild官方文档", url: "https://esbuild.github.io/" },
      { name: "Esbuild API文档", url: "https://esbuild.github.io/api/" },
      { name: "Esbuild性能对比", url: "https://esbuild.github.io/faq/#benchmark-details" }
    ]
  },

  Babel: {
    title: "Babel JavaScript编译器",
    content: `Babel 是一个JavaScript编译器，主要用于将ES6+代码转换为向后兼容的JavaScript版本。

## 核心功能
- **语法转换**: ES6+语法转换为ES5
- **Polyfill注入**: 自动添加缺失的API
- **代码转换**: JSX、TypeScript等转换
- **插件系统**: 强大的插件和预设系统

## 主要组件
- **@babel/core**: Babel核心API
- **@babel/cli**: 命令行工具
- **@babel/preset-env**: 智能预设
- **@babel/polyfill**: API补丁(已废弃)

## 预设(Presets)
- **@babel/preset-env**: 根据目标环境转换
- **@babel/preset-react**: React JSX转换
- **@babel/preset-typescript**: TypeScript支持

## 常用插件
- **@babel/plugin-proposal-class-properties**: 类属性
- **@babel/plugin-transform-runtime**: 运行时优化
- **@babel/plugin-syntax-dynamic-import**: 动态导入

## 最佳实践
1. 使用preset-env替代具体预设
2. 配置browserslist指定目标环境
3. 使用babel-plugin-transform-runtime
4. 合理配置polyfill策略`,
    examples: [
      "// babel.config.js 配置\nmodule.exports = {\n  presets: [\n    [\n      '@babel/preset-env',\n      {\n        targets: {\n          browsers: ['> 1%', 'last 2 versions'],\n          node: 'current'\n        },\n        useBuiltIns: 'entry',\n        corejs: 3,\n        modules: false // 保留ES模块用于tree shaking\n      }\n    ],\n    '@babel/preset-react',\n    '@babel/preset-typescript'\n  ],\n  plugins: [\n    '@babel/plugin-proposal-class-properties',\n    '@babel/plugin-proposal-optional-chaining',\n    [\n      '@babel/plugin-transform-runtime',\n      {\n        corejs: 3,\n        helpers: true,\n        regenerator: true\n      }\n    ]\n  ]\n};",
      "// 不同环境的配置\nmodule.exports = {\n  presets: [\n    ['@babel/preset-env', {\n      targets: process.env.NODE_ENV === 'test' \n        ? { node: 'current' }\n        : { browsers: ['> 0.5%', 'not dead'] },\n      useBuiltIns: 'usage',\n      corejs: 3\n    }],\n    '@babel/preset-react'\n  ],\n  env: {\n    development: {\n      plugins: ['react-hot-loader/babel']\n    },\n    production: {\n      plugins: [\n        'babel-plugin-transform-react-remove-prop-types',\n        '@babel/plugin-transform-react-inline-elements'\n      ]\n    },\n    test: {\n      plugins: ['@babel/plugin-transform-modules-commonjs']\n    }\n  }\n};",
      "// 自定义Babel插件\nmodule.exports = function myBabelPlugin() {\n  return {\n    visitor: {\n      // 转换console.log为自定义logger\n      CallExpression(path) {\n        if (\n          path.node.callee.type === 'MemberExpression' &&\n          path.node.callee.object.name === 'console' &&\n          path.node.callee.property.name === 'log'\n        ) {\n          path.node.callee.object.name = 'logger';\n          path.node.callee.property.name = 'info';\n        }\n      }\n    }\n  };\n};"
    ],
    resources: [
      { name: "Babel官方文档", url: "https://babeljs.io/docs/en/" },
      { name: "Babel预设和插件", url: "https://babeljs.io/docs/en/plugins" },
      { name: "Babel在线试用", url: "https://babeljs.io/repl" }
    ]
  },

  Rspack: {
    title: "Rspack 高性能打包器",
    content: `Rspack 是字节跳动开发的基于Rust的高性能Web打包器，与Webpack高度兼容。

## 核心优势
- **极高性能**: Rust编写，性能比Webpack快5-10倍
- **Webpack兼容**: 高度兼容Webpack API和生态
- **开箱即用**: 内置常用功能，减少配置
- **增量编译**: 支持增量编译和热更新

## 主要特性
- **内置支持**: TypeScript、JSX、CSS等内置支持
- **代码分割**: 自动代码分割和懒加载
- **Tree Shaking**: 高效的死代码消除
- **模块联邦**: 支持微前端架构

## 与Webpack对比
- **构建速度**: 显著更快的构建速度
- **内存使用**: 更低的内存占用
- **配置兼容**: 大部分Webpack配置可直接使用
- **生态兼容**: 支持大部分Webpack loader和plugin

## 适用场景
- **大型项目**: 构建速度要求高的大型项目
- **Webpack迁移**: 从Webpack迁移的项目
- **现代应用**: 使用现代JavaScript特性的应用
- **微前端**: 需要模块联邦的项目

## 最佳实践
1. 利用内置功能减少插件使用
2. 合理配置缓存策略
3. 使用增量编译提升开发体验
4. 逐步从Webpack迁移`,
    examples: [
      "// rspack.config.js 基础配置\nconst path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.[contenthash].js',\n    path: path.resolve(__dirname, 'dist'),\n    clean: true\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx|ts|tsx)$/,\n        exclude: /node_modules/,\n        use: {\n          loader: 'builtin:swc-loader',\n          options: {\n            sourceMap: true,\n            jsc: {\n              parser: {\n                syntax: 'typescript',\n                tsx: true\n              },\n              transform: {\n                react: {\n                  runtime: 'automatic'\n                }\n              }\n            }\n          }\n        }\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader']\n      }\n    ]\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: './public/index.html'\n    })\n  ],\n  optimization: {\n    splitChunks: {\n      chunks: 'all'\n    }\n  }\n};",
      "// 开发服务器配置\nmodule.exports = {\n  // ... 其他配置\n  devServer: {\n    port: 3000,\n    open: true,\n    hot: true,\n    historyApiFallback: true,\n    proxy: {\n      '/api': {\n        target: 'http://localhost:8080',\n        changeOrigin: true\n      }\n    }\n  },\n  devtool: 'cheap-module-source-map'\n};",
      "// 生产优化配置\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\n\nmodule.exports = {\n  mode: 'production',\n  // ... 其他配置\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [MiniCssExtractPlugin.loader, 'css-loader']\n      }\n    ]\n  },\n  plugins: [\n    new MiniCssExtractPlugin({\n      filename: '[name].[contenthash].css'\n    })\n  ],\n  optimization: {\n    minimizer: [\n      '...',\n      new CssMinimizerPlugin()\n    ],\n    splitChunks: {\n      cacheGroups: {\n        vendor: {\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: 'vendors',\n          chunks: 'all'\n        }\n      }\n    }\n  }\n};"
    ],
    resources: [
      { name: "Rspack官方文档", url: "https://www.rspack.dev/" },
      { name: "Rspack迁移指南", url: "https://www.rspack.dev/guide/migration/webpack" },
      { name: "Rspack配置参考", url: "https://www.rspack.dev/config/" }
    ]
  },

  // === Style Solutions ===
  Sass: {
    title: "Sass CSS预处理器",
    content: `Sass (Syntactically Awesome StyleSheets) 是一个成熟、稳定、强大的CSS预处理器。

## 核心特性
- **嵌套规则**: 支持CSS规则嵌套
- **变量**: 定义可复用的变量
- **混合宏**: 可复用的代码块
- **继承**: @extend指令实现样式继承

## 两种语法
- **SCSS**: 类似CSS的语法，使用大括号和分号
- **Sass**: 缩进语法，不使用大括号和分号

## 主要功能
- **运算**: 数学运算支持
- **函数**: 内置和自定义函数
- **控制指令**: @if、@for、@each等
- **模块化**: @use和@import导入

## 高级特性
- **占位符选择器**: %placeholder
- **插值**: #{} 语法
- **映射**: key-value数据结构
- **条件编译**: 根据条件输出不同CSS

## 最佳实践
1. 使用@use替代@import
2. 合理组织文件结构
3. 善用变量和mixins
4. 避免过度嵌套`,
    examples: [
      "// _variables.scss - 变量定义\n$primary-color: #3498db;\n$secondary-color: #2ecc71;\n$font-stack: 'Helvetica Neue', sans-serif;\n$border-radius: 4px;\n\n// 映射变量\n$breakpoints: (\n  mobile: 480px,\n  tablet: 768px,\n  desktop: 1024px\n);\n\n// 主题映射\n$theme-colors: (\n  primary: $primary-color,\n  secondary: $secondary-color,\n  success: #28a745,\n  danger: #dc3545\n);",
      "// _mixins.scss - 混合宏定义\n@mixin button-style($bg-color, $text-color: white) {\n  background-color: $bg-color;\n  color: $text-color;\n  border: none;\n  padding: 10px 20px;\n  border-radius: $border-radius;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  \n  &:hover {\n    background-color: darken($bg-color, 10%);\n  }\n}\n\n// 响应式mixin\n@mixin respond-to($breakpoint) {\n  @if map-has-key($breakpoints, $breakpoint) {\n    @media (min-width: map-get($breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n}\n\n// Flexbox mixin\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
      "// 使用示例 - main.scss\n@use 'variables' as v;\n@use 'mixins' as m;\n\n.header {\n  @include m.flex-center;\n  background-color: v.$primary-color;\n  padding: 1rem;\n  \n  .nav {\n    list-style: none;\n    \n    li {\n      display: inline-block;\n      margin: 0 1rem;\n      \n      a {\n        color: white;\n        text-decoration: none;\n        \n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n}\n\n// 按钮组件\n.btn {\n  @include m.button-style(v.$primary-color);\n  \n  &--secondary {\n    @include m.button-style(v.$secondary-color);\n  }\n  \n  &--large {\n    padding: 15px 30px;\n    font-size: 1.2em;\n  }\n}\n\n// 响应式设计\n.container {\n  width: 100%;\n  padding: 1rem;\n  \n  @include m.respond-to(tablet) {\n    max-width: 768px;\n    margin: 0 auto;\n  }\n  \n  @include m.respond-to(desktop) {\n    max-width: 1200px;\n  }\n}"
    ],
    resources: [
      { name: "Sass官方文档", url: "https://sass-lang.com/documentation" },
      { name: "Sass函数参考", url: "https://sass-lang.com/documentation/modules" },
      { name: "Sass最佳实践", url: "https://sass-guidelin.es/" }
    ]
  },

  "CSS-in-JS": {
    title: "CSS-in-JS 解决方案",
    content: `CSS-in-JS 是一种将CSS样式写在JavaScript中的技术方案，提供动态样式和更好的开发体验。

## 核心理念
- **组件化**: 样式与组件紧密结合
- **动态样式**: 根据props和state动态生成样式
- **作用域隔离**: 自动处理样式作用域
- **类型安全**: TypeScript支持和类型检查

## 主要优势
- **运行时动态**: 可以在运行时修改样式
- **主题切换**: 容易实现主题切换功能
- **条件样式**: 基于状态的条件样式
- **自动优化**: 自动删除未使用的样式

## 常见方案
- **Styled Components**: React生态最流行
- **Emotion**: 高性能、灵活的方案
- **JSS**: 功能强大的CSS-in-JS库
- **Stitches**: 现代化的CSS-in-JS解决方案

## 性能考虑
- **编译时优化**: 一些方案支持编译时提取
- **缓存策略**: 样式缓存和复用
- **代码分割**: 按需加载样式
- **服务端渲染**: SSR支持和样式提取

## 最佳实践
1. 合理使用动态样式
2. 避免内联样式的性能问题
3. 使用主题提供者管理全局样式
4. 考虑编译时优化`,
    examples: [
      "// 基础CSS-in-JS概念示例\nimport { css } from '@emotion/css';\n\n// 基础样式对象\nconst styles = {\n  container: {\n    display: 'flex',\n    flexDirection: 'column',\n    padding: '20px',\n    backgroundColor: '#f5f5f5'\n  },\n  \n  button: (props) => ({\n    backgroundColor: props.primary ? '#007bff' : '#6c757d',\n    color: 'white',\n    border: 'none',\n    padding: '10px 20px',\n    borderRadius: '4px',\n    cursor: 'pointer',\n    fontSize: props.size === 'large' ? '18px' : '14px',\n    '&:hover': {\n      backgroundColor: props.primary ? '#0056b3' : '#545b62'\n    }\n  })\n};\n\n// 使用示例\nconst Button = ({ primary, size, children, ...props }) => (\n  <button \n    className={css(styles.button({ primary, size }))}\n    {...props}\n  >\n    {children}\n  </button>\n);",
      "// 主题系统实现\nconst theme = {\n  colors: {\n    primary: '#007bff',\n    secondary: '#6c757d',\n    success: '#28a745',\n    danger: '#dc3545'\n  },\n  spacing: {\n    xs: 4,\n    sm: 8,\n    md: 16,\n    lg: 24,\n    xl: 32\n  },\n  breakpoints: {\n    mobile: 480,\n    tablet: 768,\n    desktop: 1024\n  }\n};\n\n// 媒体查询辅助函数\nconst media = {\n  mobile: `@media (max-width: ${theme.breakpoints.mobile}px)`,\n  tablet: `@media (max-width: ${theme.breakpoints.tablet}px)`,\n  desktop: `@media (min-width: ${theme.breakpoints.desktop}px)`\n};\n\n// 响应式组件样式\nconst cardStyles = {\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 8,\n    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',\n    padding: theme.spacing.md,\n    [media.mobile]: {\n      padding: theme.spacing.sm,\n      margin: theme.spacing.xs\n    },\n    [media.desktop]: {\n      padding: theme.spacing.lg\n    }\n  }\n};",
      "// 高级动态样式示例\nimport { keyframes } from '@emotion/css';\n\n// 动画定义\nconst fadeIn = keyframes`\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n`;\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n`;\n\n// 复杂组件样式\nconst createModalStyles = (isOpen, theme) => ({\n  overlay: {\n    position: 'fixed',\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0,\n    backgroundColor: 'rgba(0,0,0,0.5)',\n    display: isOpen ? 'flex' : 'none',\n    justifyContent: 'center',\n    alignItems: 'center',\n    zIndex: 1000,\n    animation: isOpen ? `${fadeIn} 0.3s ease-out` : 'none'\n  },\n  \n  modal: {\n    backgroundColor: 'white',\n    borderRadius: theme.borderRadius,\n    padding: theme.spacing.lg,\n    maxWidth: '90vw',\n    maxHeight: '90vh',\n    overflow: 'auto',\n    position: 'relative',\n    transform: isOpen ? 'scale(1)' : 'scale(0.8)',\n    transition: 'transform 0.3s ease-out'\n  },\n  \n  loader: {\n    width: 40,\n    height: 40,\n    border: `4px solid ${theme.colors.primary}20`,\n    borderTop: `4px solid ${theme.colors.primary}`,\n    borderRadius: '50%',\n    animation: `${spin} 1s linear infinite`\n  }\n});"
    ],
    resources: [
      { name: "CSS-in-JS对比", url: "https://github.com/michelebertoli/css-in-js" },
      { name: "Emotion文档", url: "https://emotion.sh/docs/introduction" },
      { name: "CSS-in-JS最佳实践", url: "https://styled-components.com/docs/best-practices" }
    ]
  },

  "Styled Components": {
    title: "Styled Components React样式库",
    content: `Styled Components 是React生态系统中最流行的CSS-in-JS库，使用模板字符串创建样式化组件。

## 核心特性
- **样式化组件**: 将样式直接附加到组件上
- **动态样式**: 基于props动态生成样式
- **主题支持**: 内置主题系统
- **自动前缀**: 自动添加浏览器前缀

## 主要优势
- **直观语法**: 使用模板字符串编写CSS
- **组件化**: 样式与组件逻辑分离
- **作用域隔离**: 自动生成唯一类名
- **性能优化**: 自动优化和样式缓存

## 高级功能
- **样式继承**: 基于现有组件创建新样式
- **属性过滤**: 防止props传递给DOM
- **CSS辅助函数**: css、keyframes等工具
- **TypeScript支持**: 完整的类型支持

## 生态系统
- **babel插件**: 编译时优化
- **开发工具**: 浏览器调试扩展
- **测试工具**: 样式测试辅助函数
- **主题工具**: 主题切换和管理

## 最佳实践
1. 使用ThemeProvider管理全局主题
2. 避免过度使用动态样式
3. 合理组织样式文件结构
4. 使用styled.attrs优化性能`,
    examples: [
      "// 基础Styled Components使用\nimport styled from 'styled-components';\n\n// 基础样式化组件\nconst Button = styled.button`\n  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: ${props => props.size === 'large' ? '18px' : '14px'};\n  transition: background-color 0.3s ease;\n  \n  &:hover {\n    background-color: ${props => props.primary ? '#0056b3' : '#545b62'};\n  }\n  \n  &:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n  }\n`;\n\n// 容器组件\nconst Container = styled.div`\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  \n  @media (max-width: 768px) {\n    padding: 0 10px;\n  }\n`;\n\n// 使用示例\nconst App = () => (\n  <Container>\n    <Button primary size=\"large\">Primary Button</Button>\n    <Button>Secondary Button</Button>\n  </Container>\n);",
      "// 主题系统实现\nimport styled, { ThemeProvider } from 'styled-components';\n\n// 主题定义\nconst theme = {\n  colors: {\n    primary: '#007bff',\n    secondary: '#6c757d',\n    success: '#28a745',\n    danger: '#dc3545',\n    light: '#f8f9fa',\n    dark: '#343a40'\n  },\n  spacing: {\n    xs: 4,\n    sm: 8,\n    md: 16,\n    lg: 24,\n    xl: 32\n  },\n  borderRadius: '4px',\n  fontSizes: {\n    small: '12px',\n    normal: '14px',\n    large: '18px',\n    xlarge: '24px'\n  }\n};\n\n// 使用主题的组件\nconst Card = styled.div`\n  background-color: ${props => props.theme.colors.light};\n  border-radius: ${props => props.theme.borderRadius};\n  padding: ${props => props.theme.spacing.lg}px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  margin-bottom: ${props => props.theme.spacing.md}px;\n`;\n\nconst Title = styled.h2`\n  color: ${props => props.theme.colors.dark};\n  font-size: ${props => props.theme.fontSizes.large};\n  margin-bottom: ${props => props.theme.spacing.sm}px;\n`;\n\n// 应用主题\nconst App = () => (\n  <ThemeProvider theme={theme}>\n    <Card>\n      <Title>Card Title</Title>\n      <p>Card content goes here...</p>\n    </Card>\n  </ThemeProvider>\n);",
      "// 高级功能示例\nimport styled, { css, keyframes } from 'styled-components';\n\n// 动画定义\nconst rotate = keyframes`\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n`;\n\nconst fadeIn = keyframes`\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n`;\n\n// CSS辅助函数使用\nconst flexCenter = css`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n`;\n\n// 复杂组件样式\nconst Modal = styled.div`\n  ${flexCenter}\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 1000;\n  animation: ${fadeIn} 0.3s ease-out;\n`;\n\nconst Spinner = styled.div`\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: ${rotate} 1s linear infinite;\n`;\n\n// 样式继承\nconst BaseButton = styled.button`\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n`;\n\nconst PrimaryButton = styled(BaseButton)`\n  background-color: #007bff;\n  color: white;\n  &:hover {\n    background-color: #0056b3;\n  }\n`;\n\n// 属性过滤\nconst Input = styled.input.attrs(props => ({\n  type: 'text',\n  placeholder: props.placeholder || 'Enter text...'\n}))`\n  padding: 8px 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n  \n  &:focus {\n    outline: none;\n    border-color: #007bff;\n  }\n`;"
    ],
    resources: [
      { name: "Styled Components官方文档", url: "https://styled-components.com/" },
      { name: "最佳实践指南", url: "https://styled-components.com/docs/best-practices" },
      { name: "TypeScript支持", url: "https://styled-components.com/docs/api#typescript" }
    ]
  },

  Emotion: {
    title: "Emotion CSS-in-JS库",
    content: `Emotion 是一个高性能、灵活的CSS-in-JS库，提供多种写样式的方式。

## 核心特性
- **高性能**: 优化的运行时性能
- **多种API**: css、styled、Global等多种API
- **框架无关**: 支持React、Vue等多个框架
- **源码映射**: 完整的开发工具支持

## 主要API
- **@emotion/css**: 框架无关的css API
- **@emotion/styled**: 类似styled-components的API
- **@emotion/react**: React特定的功能
- **@emotion/cache**: 样式缓存管理

## 核心优势
- **更小体积**: 比styled-components更小的包体积
- **更快性能**: 更好的运行时性能
- **更灵活**: 多种使用方式和集成选项
- **更好工具**: 优秀的开发工具支持

## 高级功能
- **主题**: Theme Provider和useTheme
- **全局样式**: Global组件
- **关键帧动画**: keyframes工具函数
- **媒体查询**: 响应式设计支持

## 最佳实践
1. 根据需求选择合适的API
2. 使用babel插件优化性能
3. 合理使用缓存策略
4. 避免样式重复计算`,
    examples: [
      "// @emotion/css 基础使用\nimport { css, cx } from '@emotion/css';\n\n// 基础样式\nconst container = css`\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 8px;\n`;\n\nconst button = (primary, size) => css`\n  background-color: ${primary ? '#007bff' : '#6c757d'};\n  color: white;\n  border: none;\n  padding: ${size === 'large' ? '15px 30px' : '10px 20px'};\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: ${size === 'large' ? '18px' : '14px'};\n  transition: background-color 0.3s ease;\n  \n  &:hover {\n    background-color: ${primary ? '#0056b3' : '#545b62'};\n  }\n`;\n\n// 样式组合\nconst activeButton = css`\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n`;\n\n// 使用示例\nconst Button = ({ primary, size, active, children, ...props }) => (\n  <button \n    className={cx(\n      button(primary, size),\n      active && activeButton\n    )}\n    {...props}\n  >\n    {children}\n  </button>\n);",
      "// @emotion/styled 和主题系统\nimport styled from '@emotion/styled';\nimport { ThemeProvider, useTheme } from '@emotion/react';\n\n// 主题定义\nconst theme = {\n  colors: {\n    primary: '#007bff',\n    secondary: '#6c757d',\n    background: '#ffffff',\n    text: '#333333'\n  },\n  breakpoints: {\n    mobile: '480px',\n    tablet: '768px',\n    desktop: '1024px'\n  },\n  spacing: [0, 4, 8, 16, 24, 32, 48, 64]\n};\n\n// 媒体查询辅助函数\nconst mq = {\n  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,\n  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,\n  desktop: `@media (min-width: ${theme.breakpoints.desktop})`\n};\n\n// 样式化组件\nconst Card = styled.div`\n  background-color: ${props => props.theme.colors.background};\n  color: ${props => props.theme.colors.text};\n  padding: ${props => props.theme.spacing[4]}px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  \n  ${mq.mobile} {\n    padding: ${props => props.theme.spacing[3]}px;\n  }\n`;\n\n// 使用主题hook的组件\nconst ThemedButton = () => {\n  const theme = useTheme();\n  \n  return (\n    <button\n      css={{\n        backgroundColor: theme.colors.primary,\n        color: 'white',\n        padding: `${theme.spacing[2]}px ${theme.spacing[4]}px`,\n        border: 'none',\n        borderRadius: 4,\n        cursor: 'pointer'\n      }}\n    >\n      Themed Button\n    </button>\n  );\n};",
      "// 高级功能：动画、全局样式、缓存\nimport { css, keyframes, Global, cache, CacheProvider } from '@emotion/react';\n\n// 动画定义\nconst bounce = keyframes`\n  0%, 20%, 53%, 80%, 100% {\n    transform: translate3d(0,0,0);\n  }\n  40%, 43% {\n    transform: translate3d(0, -30px, 0);\n  }\n  70% {\n    transform: translate3d(0, -15px, 0);\n  }\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n`;\n\nconst pulse = keyframes`\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n`;\n\n// 全局样式\nconst GlobalStyles = () => (\n  <Global\n    styles={css`\n      * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n      \n      body {\n        font-family: 'Helvetica Neue', Arial, sans-serif;\n        line-height: 1.6;\n        color: #333;\n        background-color: #f8f9fa;\n      }\n      \n      a {\n        color: #007bff;\n        text-decoration: none;\n        \n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    `}\n  />\n);\n\n// 动画组件\nconst AnimatedCard = styled.div`\n  padding: 20px;\n  background-color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  \n  &:hover {\n    animation: ${pulse} 0.6s ease-in-out;\n  }\n  \n  &.bounce {\n    animation: ${bounce} 1s ease-in-out;\n  }\n`;\n\n// 自定义缓存配置\nconst myCache = cache({\n  key: 'my-app',\n  prepend: true\n});\n\n// 应用配置\nconst App = () => (\n  <CacheProvider value={myCache}>\n    <ThemeProvider theme={theme}>\n      <GlobalStyles />\n      <div>Your app content</div>\n    </ThemeProvider>\n  </CacheProvider>\n);"
    ],
    resources: [
      { name: "Emotion官方文档", url: "https://emotion.sh/docs/introduction" },
      { name: "Emotion最佳实践", url: "https://emotion.sh/docs/best-practices" },
      { name: "Emotion性能优化", url: "https://emotion.sh/docs/performance" }
    ]
  },

  // === Cross-Platform Development ===
  "React Native": {
    title: "React Native 移动应用开发",
    content: `React Native 是Facebook开发的使用JavaScript和React构建原生移动应用的框架。

## 核心理念
- **Learn Once, Write Anywhere**: 学会一种技术，到处使用
- **原生性能**: 编译为原生代码，性能接近原生应用
- **热重载**: 快速开发和调试体验
- **跨平台**: 一套代码，同时支持iOS和Android

## 主要特性
- **原生组件**: 使用原生UI组件而非WebView
- **JavaScript引擎**: 使用JavaScriptCore引擎
- **桥接机制**: JavaScript与原生代码通信
- **第三方库**: 丰富的第三方组件和库

## 开发工具
- **Expo**: 快速开发和部署工具
- **React Native CLI**: 官方命令行工具
- **Flipper**: 强大的调试工具
- **CodePush**: 热更新解决方案

## 核心组件
- **View**: 基础容器组件
- **Text**: 文本显示组件
- **ScrollView**: 滚动视图
- **FlatList**: 高性能列表组件

## 最佳实践
1. 合理使用FlatList处理长列表
2. 优化图片加载和缓存
3. 使用原生模块处理复杂逻辑
4. 注意平台差异和适配`,
    examples: [
      "// React Native 基础组件使用\nimport React, { useState } from 'react';\nimport {\n  View,\n  Text,\n  TextInput,\n  TouchableOpacity,\n  StyleSheet,\n  Alert,\n  ScrollView\n} from 'react-native';\n\nconst LoginScreen = () => {\n  const [username, setUsername] = useState('');\n  const [password, setPassword] = useState('');\n  \n  const handleLogin = () => {\n    if (username && password) {\n      Alert.alert('成功', '登录成功！');\n    } else {\n      Alert.alert('错误', '请填写用户名和密码');\n    }\n  };\n  \n  return (\n    <ScrollView contentContainerStyle={styles.container}>\n      <View style={styles.formContainer}>\n        <Text style={styles.title}>用户登录</Text>\n        \n        <TextInput\n          style={styles.input}\n          placeholder=\"用户名\"\n          value={username}\n          onChangeText={setUsername}\n          autoCapitalize=\"none\"\n        />\n        \n        <TextInput\n          style={styles.input}\n          placeholder=\"密码\"\n          value={password}\n          onChangeText={setPassword}\n          secureTextEntry\n        />\n        \n        <TouchableOpacity \n          style={styles.button} \n          onPress={handleLogin}\n        >\n          <Text style={styles.buttonText}>登录</Text>\n        </TouchableOpacity>\n      </View>\n    </ScrollView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    backgroundColor: '#f5f5f5'\n  },\n  formContainer: {\n    margin: 20,\n    padding: 20,\n    backgroundColor: 'white',\n    borderRadius: 10,\n    elevation: 3,\n    shadowOffset: { width: 0, height: 2 },\n    shadowOpacity: 0.1,\n    shadowRadius: 4\n  },\n  title: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n    marginBottom: 30,\n    color: '#333'\n  },\n  input: {\n    borderWidth: 1,\n    borderColor: '#ddd',\n    padding: 15,\n    marginBottom: 15,\n    borderRadius: 8,\n    fontSize: 16\n  },\n  button: {\n    backgroundColor: '#007bff',\n    padding: 15,\n    borderRadius: 8,\n    alignItems: 'center'\n  },\n  buttonText: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 'bold'\n  }\n});",
      "// FlatList 高性能列表实现\nimport React, { useState, useEffect } from 'react';\nimport {\n  View,\n  Text,\n  FlatList,\n  Image,\n  StyleSheet,\n  ActivityIndicator,\n  RefreshControl\n} from 'react-native';\n\nconst ProductList = () => {\n  const [products, setProducts] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [refreshing, setRefreshing] = useState(false);\n  const [page, setPage] = useState(1);\n  \n  const fetchProducts = async (isRefresh = false) => {\n    if (isRefresh) {\n      setRefreshing(true);\n      setPage(1);\n    } else {\n      setLoading(true);\n    }\n    \n    try {\n      const response = await fetch(`/api/products?page=${isRefresh ? 1 : page}`);\n      const data = await response.json();\n      \n      if (isRefresh) {\n        setProducts(data.products);\n      } else {\n        setProducts(prev => [...prev, ...data.products]);\n      }\n    } catch (error) {\n      console.error('获取产品失败:', error);\n    } finally {\n      setLoading(false);\n      setRefreshing(false);\n    }\n  };\n  \n  useEffect(() => {\n    fetchProducts();\n  }, []);\n  \n  const renderProduct = ({ item }) => (\n    <View style={styles.productCard}>\n      <Image source={{ uri: item.image }} style={styles.productImage} />\n      <View style={styles.productInfo}>\n        <Text style={styles.productName}>{item.name}</Text>\n        <Text style={styles.productPrice}>¥{item.price}</Text>\n        <Text style={styles.productDescription} numberOfLines={2}>\n          {item.description}\n        </Text>\n      </View>\n    </View>\n  );\n  \n  const handleLoadMore = () => {\n    if (!loading) {\n      setPage(prev => prev + 1);\n      fetchProducts();\n    }\n  };\n  \n  return (\n    <View style={styles.container}>\n      <FlatList\n        data={products}\n        renderItem={renderProduct}\n        keyExtractor={item => item.id.toString()}\n        onEndReached={handleLoadMore}\n        onEndReachedThreshold={0.1}\n        refreshControl={\n          <RefreshControl\n            refreshing={refreshing}\n            onRefresh={() => fetchProducts(true)}\n          />\n        }\n        ListFooterComponent={\n          loading ? <ActivityIndicator size=\"large\" /> : null\n        }\n        showsVerticalScrollIndicator={false}\n      />\n    </View>\n  );\n};",
      "// 原生模块集成示例\nimport { NativeModules, Platform } from 'react-native';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\nimport { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';\n\n// 设备信息获取\nconst { DeviceInfo } = NativeModules;\n\nclass DeviceService {\n  static async getDeviceInfo() {\n    try {\n      const info = await DeviceInfo.getDeviceInfo();\n      return {\n        platform: Platform.OS,\n        version: Platform.Version,\n        ...info\n      };\n    } catch (error) {\n      console.error('获取设备信息失败:', error);\n      return null;\n    }\n  }\n}\n\n// 权限管理\nclass PermissionService {\n  static async requestCameraPermission() {\n    const permission = Platform.OS === 'ios' \n      ? PERMISSIONS.IOS.CAMERA \n      : PERMISSIONS.ANDROID.CAMERA;\n    \n    try {\n      const result = await check(permission);\n      \n      if (result === RESULTS.DENIED) {\n        const requestResult = await request(permission);\n        return requestResult === RESULTS.GRANTED;\n      }\n      \n      return result === RESULTS.GRANTED;\n    } catch (error) {\n      console.error('权限请求失败:', error);\n      return false;\n    }\n  }\n}\n\n// 本地存储管理\nclass StorageService {\n  static async setItem(key, value) {\n    try {\n      await AsyncStorage.setItem(key, JSON.stringify(value));\n      return true;\n    } catch (error) {\n      console.error('存储失败:', error);\n      return false;\n    }\n  }\n  \n  static async getItem(key) {\n    try {\n      const value = await AsyncStorage.getItem(key);\n      return value ? JSON.parse(value) : null;\n    } catch (error) {\n      console.error('读取失败:', error);\n      return null;\n    }\n  }\n  \n  static async removeItem(key) {\n    try {\n      await AsyncStorage.removeItem(key);\n      return true;\n    } catch (error) {\n      console.error('删除失败:', error);\n      return false;\n    }\n  }\n}"
    ],
    resources: [
      { name: "React Native官方文档", url: "https://reactnative.dev/" },
      { name: "Expo开发文档", url: "https://docs.expo.dev/" },
      { name: "React Native组件库", url: "https://github.com/jondot/awesome-react-native" }
    ]
  },

  Flutter: {
    title: "Flutter 跨平台应用框架",
    content: `Flutter 是Google开发的使用Dart语言构建跨平台应用的UI框架。

## 核心特性
- **一套代码**: 支持iOS、Android、Web、Desktop
- **高性能**: 直接编译为原生代码
- **丰富组件**: 丰富的Material和Cupertino组件
- **热重载**: 极速开发体验

## 主要优势
- **统一体验**: 所有平台保持一致的UI和UX
- **自绘引擎**: 使用Skia引擎自绘UI
- **响应式框架**: 声明式UI编程范式
- **开源生态**: 活跃的开源社区

## 核心概念
- **Widget**: 一切皆为Widget的设计理念
- **State管理**: StatefulWidget和StatelessWidget
- **布局系统**: 灵活的Flex布局
- **Material Design**: 内置Material设计组件

## 状态管理
- **Provider**: 简单的状态管理方案
- **Bloc/Cubit**: 基于事件的状态管理
- **Riverpod**: 现代化的状态管理
- **GetX**: 轻量级的状态管理

## 最佳实践
1. 合理使用StatelessWidget提升性能
2. 善用Flutter Inspector调试UI
3. 使用适当的状态管理方案
4. 注意Widget重建优化`,
    examples: [
      "// Flutter 基础Widget使用\nimport 'package:flutter/material.dart';\n\nclass LoginPage extends StatefulWidget {\n  @override\n  _LoginPageState createState() => _LoginPageState();\n}\n\nclass _LoginPageState extends State<LoginPage> {\n  final _formKey = GlobalKey<FormState>();\n  final _usernameController = TextEditingController();\n  final _passwordController = TextEditingController();\n  bool _isLoading = false;\n  \n  @override\n  void dispose() {\n    _usernameController.dispose();\n    _passwordController.dispose();\n    super.dispose();\n  }\n  \n  void _handleLogin() async {\n    if (_formKey.currentState!.validate()) {\n      setState(() {\n        _isLoading = true;\n      });\n      \n      // 模拟API调用\n      await Future.delayed(Duration(seconds: 2));\n      \n      setState(() {\n        _isLoading = false;\n      });\n      \n      ScaffoldMessenger.of(context).showSnackBar(\n        SnackBar(content: Text('登录成功！'))\n      );\n    }\n  }\n  \n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('用户登录'),\n        backgroundColor: Colors.blue,\n      ),\n      body: Padding(\n        padding: EdgeInsets.all(20.0),\n        child: Form(\n          key: _formKey,\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n              Icon(\n                Icons.account_circle,\n                size: 100,\n                color: Colors.blue,\n              ),\n              SizedBox(height: 30),\n              TextFormField(\n                controller: _usernameController,\n                decoration: InputDecoration(\n                  labelText: '用户名',\n                  prefixIcon: Icon(Icons.person),\n                  border: OutlineInputBorder(),\n                ),\n                validator: (value) {\n                  if (value == null || value.isEmpty) {\n                    return '请输入用户名';\n                  }\n                  return null;\n                },\n              ),\n              SizedBox(height: 20),\n              TextFormField(\n                controller: _passwordController,\n                obscureText: true,\n                decoration: InputDecoration(\n                  labelText: '密码',\n                  prefixIcon: Icon(Icons.lock),\n                  border: OutlineInputBorder(),\n                ),\n                validator: (value) {\n                  if (value == null || value.isEmpty) {\n                    return '请输入密码';\n                  }\n                  if (value.length < 6) {\n                    return '密码至少6位';\n                  }\n                  return null;\n                },\n              ),\n              SizedBox(height: 30),\n              SizedBox(\n                width: double.infinity,\n                height: 50,\n                child: ElevatedButton(\n                  onPressed: _isLoading ? null : _handleLogin,\n                  child: _isLoading\n                      ? CircularProgressIndicator(color: Colors.white)\n                      : Text('登录', style: TextStyle(fontSize: 18)),\n                  style: ElevatedButton.styleFrom(\n                    backgroundColor: Colors.blue,\n                    shape: RoundedRectangleBorder(\n                      borderRadius: BorderRadius.circular(8),\n                    ),\n                  ),\n                ),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}",
      "// Provider状态管理示例\nimport 'package:flutter/material.dart';\nimport 'package:provider/provider.dart';\n\n// 计数器状态类\nclass CounterProvider extends ChangeNotifier {\n  int _count = 0;\n  \n  int get count => _count;\n  \n  void increment() {\n    _count++;\n    notifyListeners();\n  }\n  \n  void decrement() {\n    _count--;\n    notifyListeners();\n  }\n  \n  void reset() {\n    _count = 0;\n    notifyListeners();\n  }\n}\n\n// 主应用\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MultiProvider(\n      providers: [\n        ChangeNotifierProvider(create: (_) => CounterProvider()),\n      ],\n      child: MaterialApp(\n        title: 'Flutter Demo',\n        theme: ThemeData(\n          primarySwatch: Colors.blue,\n        ),\n        home: CounterPage(),\n      ),\n    );\n  }\n}\n\n// 计数器页面\nclass CounterPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text('计数器示例'),\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            Text(\n              '当前计数:',\n              style: TextStyle(fontSize: 20),\n            ),\n            Consumer<CounterProvider>(\n              builder: (context, counter, child) {\n                return Text(\n                  '${counter.count}',\n                  style: TextStyle(\n                    fontSize: 48,\n                    fontWeight: FontWeight.bold,\n                    color: counter.count > 0 ? Colors.green : Colors.red,\n                  ),\n                );\n              },\n            ),\n            SizedBox(height: 30),\n            Row(\n              mainAxisAlignment: MainAxisAlignment.spaceEvenly,\n              children: [\n                FloatingActionButton(\n                  onPressed: () {\n                    context.read<CounterProvider>().decrement();\n                  },\n                  child: Icon(Icons.remove),\n                  backgroundColor: Colors.red,\n                ),\n                FloatingActionButton(\n                  onPressed: () {\n                    context.read<CounterProvider>().reset();\n                  },\n                  child: Icon(Icons.refresh),\n                  backgroundColor: Colors.grey,\n                ),\n                FloatingActionButton(\n                  onPressed: () {\n                    context.read<CounterProvider>().increment();\n                  },\n                  child: Icon(Icons.add),\n                  backgroundColor: Colors.green,\n                ),\n              ],\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}",
      "// 自定义Widget和动画\nimport 'package:flutter/material.dart';\n\nclass AnimatedCard extends StatefulWidget {\n  final String title;\n  final String content;\n  final VoidCallback? onTap;\n  \n  const AnimatedCard({\n    Key? key,\n    required this.title,\n    required this.content,\n    this.onTap,\n  }) : super(key: key);\n  \n  @override\n  _AnimatedCardState createState() => _AnimatedCardState();\n}\n\nclass _AnimatedCardState extends State<AnimatedCard>\n    with TickerProviderStateMixin {\n  late AnimationController _controller;\n  late Animation<double> _scaleAnimation;\n  late Animation<double> _fadeAnimation;\n  \n  @override\n  void initState() {\n    super.initState();\n    _controller = AnimationController(\n      duration: Duration(milliseconds: 300),\n      vsync: this,\n    );\n    \n    _scaleAnimation = Tween<double>(\n      begin: 0.8,\n      end: 1.0,\n    ).animate(CurvedAnimation(\n      parent: _controller,\n      curve: Curves.easeOutBack,\n    ));\n    \n    _fadeAnimation = Tween<double>(\n      begin: 0.0,\n      end: 1.0,\n    ).animate(CurvedAnimation(\n      parent: _controller,\n      curve: Curves.easeIn,\n    ));\n    \n    _controller.forward();\n  }\n  \n  @override\n  void dispose() {\n    _controller.dispose();\n    super.dispose();\n  }\n  \n  @override\n  Widget build(BuildContext context) {\n    return AnimatedBuilder(\n      animation: _controller,\n      builder: (context, child) {\n        return Transform.scale(\n          scale: _scaleAnimation.value,\n          child: Opacity(\n            opacity: _fadeAnimation.value,\n            child: GestureDetector(\n              onTap: widget.onTap,\n              onTapDown: (_) {\n                _controller.reverse();\n              },\n              onTapUp: (_) {\n                _controller.forward();\n              },\n              onTapCancel: () {\n                _controller.forward();\n              },\n              child: Container(\n                margin: EdgeInsets.all(10),\n                padding: EdgeInsets.all(16),\n                decoration: BoxDecoration(\n                  color: Colors.white,\n                  borderRadius: BorderRadius.circular(12),\n                  boxShadow: [\n                    BoxShadow(\n                      color: Colors.grey.withOpacity(0.2),\n                      spreadRadius: 2,\n                      blurRadius: 8,\n                      offset: Offset(0, 4),\n                    ),\n                  ],\n                ),\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    Text(\n                      widget.title,\n                      style: TextStyle(\n                        fontSize: 18,\n                        fontWeight: FontWeight.bold,\n                        color: Colors.black87,\n                      ),\n                    ),\n                    SizedBox(height: 8),\n                    Text(\n                      widget.content,\n                      style: TextStyle(\n                        fontSize: 14,\n                        color: Colors.grey[600],\n                      ),\n                    ),\n                  ],\n                ),\n              ),\n            ),\n          ),\n        );\n      },\n    );\n  }\n}"
    ],
    resources: [
      { name: "Flutter官方文档", url: "https://flutter.dev/docs" },
      { name: "Dart语言教程", url: "https://dart.dev/guides" },
      { name: "Flutter Widget目录", url: "https://flutter.dev/docs/development/ui/widgets" }
    ]
  },

  Electron: {
    title: "Electron 桌面应用框架",
    content: `Electron 是一个使用JavaScript、HTML和CSS构建跨平台桌面应用的框架。

## 核心架构
- **主进程**: 管理应用生命周期和创建渲染进程
- **渲染进程**: 显示用户界面，基于Chromium
- **IPC通信**: 主进程与渲染进程间通信
- **原生API**: 访问操作系统原生功能

## 主要特性
- **跨平台**: 支持Windows、macOS、Linux
- **Web技术**: 使用熟悉的前端技术栈
- **原生集成**: 访问文件系统、系统通知等
- **自动更新**: 内置应用更新机制

## 核心模块
- **app**: 控制应用的事件生命周期
- **BrowserWindow**: 创建和管理应用窗口
- **ipcMain/ipcRenderer**: 进程间通信
- **dialog**: 原生系统对话框

## 性能优化
- **进程管理**: 合理管理主进程和渲染进程
- **内存优化**: 避免内存泄漏和过度使用
- **启动优化**: 减少启动时间
- **资源优化**: 压缩资源和代码分割

## 最佳实践
1. 分离主进程和渲染进程逻辑
2. 使用IPC进行安全的进程间通信
3. 启用上下文隔离增强安全性
4. 合理配置CSP安全策略`,
    examples: [
      "// main.js - 主进程配置\nconst { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');\nconst path = require('path');\nconst isDev = require('electron-is-dev');\n\n// 保持对window对象的全局引用\nlet mainWindow;\n\nfunction createWindow() {\n  // 创建浏览器窗口\n  mainWindow = new BrowserWindow({\n    width: 1200,\n    height: 800,\n    minWidth: 800,\n    minHeight: 600,\n    webPreferences: {\n      nodeIntegration: false, // 出于安全考虑\n      contextIsolation: true, // 启用上下文隔离\n      enableRemoteModule: false,\n      preload: path.join(__dirname, 'preload.js')\n    },\n    icon: path.join(__dirname, 'assets/icon.png'),\n    show: false, // 初始隐藏，加载完成后显示\n    titleBarStyle: 'default'\n  });\n  \n  // 加载应用的HTML文件\n  const startUrl = isDev \n    ? 'http://localhost:3000' \n    : `file://${path.join(__dirname, '../build/index.html')}`;\n  \n  mainWindow.loadURL(startUrl);\n  \n  // 窗口准备显示时显示\n  mainWindow.once('ready-to-show', () => {\n    mainWindow.show();\n    \n    // 开发环境下打开开发者工具\n    if (isDev) {\n      mainWindow.webContents.openDevTools();\n    }\n  });\n  \n  // 当窗口关闭时触发\n  mainWindow.on('closed', () => {\n    mainWindow = null;\n  });\n}\n\n// 应用准备就绪时创建窗口\napp.whenReady().then(createWindow);\n\n// 所有窗口关闭时退出应用 (macOS除外)\napp.on('window-all-closed', () => {\n  if (process.platform !== 'darwin') {\n    app.quit();\n  }\n});\n\n// macOS上点击dock图标时重新创建窗口\napp.on('activate', () => {\n  if (BrowserWindow.getAllWindows().length === 0) {\n    createWindow();\n  }\n});\n\n// 文件操作IPC处理\nipcMain.handle('read-file', async (event, filePath) => {\n  try {\n    const fs = require('fs').promises;\n    const content = await fs.readFile(filePath, 'utf8');\n    return { success: true, content };\n  } catch (error) {\n    return { success: false, error: error.message };\n  }\n});\n\nipcMain.handle('save-file', async (event, filePath, content) => {\n  try {\n    const fs = require('fs').promises;\n    await fs.writeFile(filePath, content, 'utf8');\n    return { success: true };\n  } catch (error) {\n    return { success: false, error: error.message };\n  }\n});\n\n// 显示文件选择对话框\nipcMain.handle('show-open-dialog', async () => {\n  const result = await dialog.showOpenDialog(mainWindow, {\n    properties: ['openFile'],\n    filters: [\n      { name: 'Text Files', extensions: ['txt', 'md'] },\n      { name: 'All Files', extensions: ['*'] }\n    ]\n  });\n  return result;\n});",
      "// preload.js - 预加载脚本\nconst { contextBridge, ipcRenderer } = require('electron');\n\n// 向渲染进程暴露安全的API\ncontextBridge.exposeInMainWorld('electronAPI', {\n  // 文件操作\n  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),\n  saveFile: (filePath, content) => ipcRenderer.invoke('save-file', filePath, content),\n  showOpenDialog: () => ipcRenderer.invoke('show-open-dialog'),\n  \n  // 应用信息\n  getVersion: () => ipcRenderer.invoke('get-app-version'),\n  \n  // 窗口操作\n  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),\n  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),\n  closeWindow: () => ipcRenderer.invoke('close-window'),\n  \n  // 系统通知\n  showNotification: (title, body) => {\n    ipcRenderer.invoke('show-notification', title, body);\n  },\n  \n  // 监听主进程事件\n  onUpdateAvailable: (callback) => {\n    ipcRenderer.on('update-available', callback);\n  },\n  \n  onUpdateDownloaded: (callback) => {\n    ipcRenderer.on('update-downloaded', callback);\n  },\n  \n  // 移除事件监听\n  removeAllListeners: (channel) => {\n    ipcRenderer.removeAllListeners(channel);\n  }\n});\n\n// 阻止页面导航和新窗口\nwindow.addEventListener('DOMContentLoaded', () => {\n  // 阻止拖拽文件时的页面导航\n  document.addEventListener('dragover', (e) => {\n    e.preventDefault();\n    e.stopPropagation();\n  });\n  \n  document.addEventListener('drop', (e) => {\n    e.preventDefault();\n    e.stopPropagation();\n  });\n  \n  // 阻止新窗口打开\n  document.addEventListener('click', (e) => {\n    if (e.target.tagName === 'A' && e.target.href) {\n      if (e.target.href.startsWith('http')) {\n        e.preventDefault();\n        require('electron').shell.openExternal(e.target.href);\n      }\n    }\n  });\n});",
      "// renderer.js - 渲染进程中使用Electron API\nclass FileManager {\n  constructor() {\n    this.currentFile = null;\n    this.initializeEventListeners();\n  }\n  \n  initializeEventListeners() {\n    // 打开文件按钮\n    document.getElementById('open-file').addEventListener('click', () => {\n      this.openFile();\n    });\n    \n    // 保存文件按钮\n    document.getElementById('save-file').addEventListener('click', () => {\n      this.saveFile();\n    });\n    \n    // 显示通知按钮\n    document.getElementById('show-notification').addEventListener('click', () => {\n      this.showNotification();\n    });\n    \n    // 监听更新事件\n    window.electronAPI.onUpdateAvailable(() => {\n      this.showUpdateNotification('有新版本可用！');\n    });\n    \n    window.electronAPI.onUpdateDownloaded(() => {\n      this.showUpdateNotification('更新已下载，将在重启后安装。');\n    });\n  }\n  \n  async openFile() {\n    try {\n      const result = await window.electronAPI.showOpenDialog();\n      \n      if (!result.canceled && result.filePaths.length > 0) {\n        const filePath = result.filePaths[0];\n        const fileResult = await window.electronAPI.readFile(filePath);\n        \n        if (fileResult.success) {\n          this.currentFile = filePath;\n          document.getElementById('editor').value = fileResult.content;\n          this.updateTitle(filePath);\n        } else {\n          alert(`读取文件失败: ${fileResult.error}`);\n        }\n      }\n    } catch (error) {\n      console.error('打开文件失败:', error);\n      alert('打开文件失败');\n    }\n  }\n  \n  async saveFile() {\n    if (!this.currentFile) {\n      alert('请先打开一个文件');\n      return;\n    }\n    \n    try {\n      const content = document.getElementById('editor').value;\n      const result = await window.electronAPI.saveFile(this.currentFile, content);\n      \n      if (result.success) {\n        this.showNotification('文件保存成功', '文件已成功保存到磁盘');\n      } else {\n        alert(`保存文件失败: ${result.error}`);\n      }\n    } catch (error) {\n      console.error('保存文件失败:', error);\n      alert('保存文件失败');\n    }\n  }\n  \n  showNotification(title = '测试通知', body = '这是一个来自Electron应用的通知') {\n    window.electronAPI.showNotification(title, body);\n  }\n  \n  updateTitle(filePath) {\n    const fileName = filePath.split(/[\\\\/]/).pop();\n    document.title = `文本编辑器 - ${fileName}`;\n  }\n  \n  showUpdateNotification(message) {\n    const notification = document.createElement('div');\n    notification.className = 'update-notification';\n    notification.textContent = message;\n    document.body.appendChild(notification);\n    \n    setTimeout(() => {\n      notification.remove();\n    }, 5000);\n  }\n}\n\n// 应用初始化\nconst fileManager = new FileManager();\n\n// 键盘快捷键\ndocument.addEventListener('keydown', (e) => {\n  if (e.ctrlKey || e.metaKey) {\n    switch (e.key) {\n      case 'o':\n        e.preventDefault();\n        fileManager.openFile();\n        break;\n      case 's':\n        e.preventDefault();\n        fileManager.saveFile();\n        break;\n    }\n  }\n});"
    ],
    resources: [
      { name: "Electron官方文档", url: "https://www.electronjs.org/docs" },
      { name: "Electron安全指南", url: "https://www.electronjs.org/docs/latest/tutorial/security" },
      { name: "Electron应用示例", url: "https://github.com/electron/electron-api-demos" }
    ]
  },

  Taro: {
    title: "Taro 多端开发框架",
    content: `Taro 是由京东凹凸实验室开发的多端统一开发框架，支持一套代码多端运行。

## 支持平台
- **小程序**: 微信、支付宝、百度、字节跳动等
- **H5**: 移动端和桌面端Web应用
- **React Native**: iOS和Android原生应用
- **快应用**: 华为、小米等快应用平台

## 核心特性
- **语法统一**: 基于React语法，学习成本低
- **组件化**: 内置丰富的跨端组件
- **插件系统**: 丰富的插件扩展能力
- **TypeScript**: 完整的TypeScript支持

## 主要组件
- **View**: 基础视图容器
- **Text**: 文本组件
- **Button**: 按钮组件
- **Input**: 输入框组件
- **Image**: 图片组件
- **ScrollView**: 滚动视图

## 开发工具
- **Taro CLI**: 命令行开发工具
- **Taro UI**: UI组件库
- **Taro DevTools**: 开发调试工具
- **代码检查**: ESLint配置和规则

## 最佳实践
1. 遵循小程序开发规范
2. 使用Taro UI组件库
3. 合理处理平台差异
4. 优化包体积和性能`,
    examples: [
      "// Taro 应用入口配置 - app.config.ts\nexport default defineAppConfig({\n  pages: [\n    'pages/index/index',\n    'pages/profile/index',\n    'pages/login/index'\n  ],\n  window: {\n    backgroundTextStyle: 'light',\n    navigationBarBackgroundColor: '#fff',\n    navigationBarTitleText: 'Taro应用',\n    navigationBarTextStyle: 'black'\n  },\n  tabBar: {\n    color: '#666',\n    selectedColor: '#b4282d',\n    backgroundColor: '#fafafa',\n    borderStyle: 'black',\n    list: [\n      {\n        pagePath: 'pages/index/index',\n        iconPath: 'assets/tab-home.png',\n        selectedIconPath: 'assets/tab-home-active.png',\n        text: '首页'\n      },\n      {\n        pagePath: 'pages/profile/index',\n        iconPath: 'assets/tab-profile.png',\n        selectedIconPath: 'assets/tab-profile-active.png',\n        text: '我的'\n      }\n    ]\n  },\n  // 小程序特定配置\n  lazyCodeLoading: 'requiredComponents',\n  // H5特定配置\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    router: {\n      mode: 'hash'\n    }\n  }\n});",
      "// Taro 组件开发示例\nimport { useState, useEffect } from 'react';\nimport { View, Text, Button, Input, ScrollView } from '@tarojs/components';\nimport { useRouter, useLoad, useDidShow } from '@tarojs/taro';\nimport Taro from '@tarojs/taro';\nimport './index.scss';\n\ninterface TodoItem {\n  id: number;\n  text: string;\n  completed: boolean;\n}\n\nconst TodoList: React.FC = () => {\n  const [todos, setTodos] = useState<TodoItem[]>([]);\n  const [inputText, setInputText] = useState('');\n  const [loading, setLoading] = useState(false);\n  const router = useRouter();\n  \n  useLoad(() => {\n    console.log('页面加载完成');\n    loadTodos();\n  });\n  \n  useDidShow(() => {\n    console.log('页面显示');\n  });\n  \n  const loadTodos = async () => {\n    try {\n      setLoading(true);\n      // 模拟API调用\n      await new Promise(resolve => setTimeout(resolve, 1000));\n      const savedTodos = Taro.getStorageSync('todos') || [];\n      setTodos(savedTodos);\n    } catch (error) {\n      Taro.showToast({\n        title: '加载失败',\n        icon: 'error'\n      });\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  const addTodo = () => {\n    if (!inputText.trim()) {\n      Taro.showToast({\n        title: '请输入待办事项',\n        icon: 'none'\n      });\n      return;\n    }\n    \n    const newTodo: TodoItem = {\n      id: Date.now(),\n      text: inputText.trim(),\n      completed: false\n    };\n    \n    const newTodos = [...todos, newTodo];\n    setTodos(newTodos);\n    setInputText('');\n    \n    // 保存到本地存储\n    Taro.setStorage({\n      key: 'todos',\n      data: newTodos\n    });\n    \n    Taro.showToast({\n      title: '添加成功',\n      icon: 'success'\n    });\n  };\n  \n  const toggleTodo = (id: number) => {\n    const newTodos = todos.map(todo => \n      todo.id === id ? { ...todo, completed: !todo.completed } : todo\n    );\n    setTodos(newTodos);\n    \n    Taro.setStorage({\n      key: 'todos',\n      data: newTodos\n    });\n  };\n  \n  const deleteTodo = (id: number) => {\n    Taro.showModal({\n      title: '确认删除',\n      content: '确定要删除这个待办事项吗？',\n      success: (res) => {\n        if (res.confirm) {\n          const newTodos = todos.filter(todo => todo.id !== id);\n          setTodos(newTodos);\n          \n          Taro.setStorage({\n            key: 'todos',\n            data: newTodos\n          });\n        }\n      }\n    });\n  };\n  \n  return (\n    <View className='todo-container'>\n      <View className='header'>\n        <Text className='title'>待办清单</Text>\n      </View>\n      \n      <View className='input-section'>\n        <Input\n          className='todo-input'\n          type='text'\n          placeholder='输入待办事项...'\n          value={inputText}\n          onInput={(e) => setInputText(e.detail.value)}\n          confirmType='done'\n          onConfirm={addTodo}\n        />\n        <Button \n          className='add-button' \n          type='primary'\n          size='mini'\n          onClick={addTodo}\n        >\n          添加\n        </Button>\n      </View>\n      \n      <ScrollView\n        className='todo-list'\n        scrollY\n        enableBackToTop\n        refresherEnabled\n        refresherTriggered={loading}\n        onRefresherRefresh={loadTodos}\n      >\n        {todos.length === 0 ? (\n          <View className='empty-state'>\n            <Text className='empty-text'>暂无待办事项</Text>\n          </View>\n        ) : (\n          todos.map(todo => (\n            <View key={todo.id} className='todo-item'>\n              <View \n                className={`todo-content ${todo.completed ? 'completed' : ''}`}\n                onClick={() => toggleTodo(todo.id)}\n              >\n                <Text className='todo-text'>{todo.text}</Text>\n                <Text className='todo-status'>\n                  {todo.completed ? '✓' : '○'}\n                </Text>\n              </View>\n              <Button\n                className='delete-button'\n                type='warn'\n                size='mini'\n                onClick={() => deleteTodo(todo.id)}\n              >\n                删除\n              </Button>\n            </View>\n          ))\n        )}\n      </ScrollView>\n      \n      <View className='footer'>\n        <Text className='stats'>\n          总计: {todos.length} 项，已完成: {todos.filter(t => t.completed).length} 项\n        </Text>\n      </View>\n    </View>\n  );\n};\n\nexport default TodoList;",
      "// Taro 配置和多端适配示例\n// config/index.ts\nimport { defineConfig } from '@tarojs/cli';\n\nexport default defineConfig({\n  projectName: 'taro-app',\n  date: '2024-1-1',\n  designWidth: 750,\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2\n  },\n  sourceRoot: 'src',\n  outputRoot: 'dist',\n  plugins: [],\n  defineConstants: {\n    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')\n  },\n  copy: {\n    patterns: [],\n    options: {}\n  },\n  framework: 'react',\n  compiler: 'webpack5',\n  cache: {\n    enable: false\n  },\n  mini: {\n    postcss: {\n      pxtransform: {\n        enable: true,\n        config: {}\n      },\n      url: {\n        enable: true,\n        config: {\n          limit: 1024\n        }\n      },\n      cssModules: {\n        enable: false\n      }\n    }\n  },\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    postcss: {\n      autoprefixer: {\n        enable: true,\n        config: {}\n      },\n      cssModules: {\n        enable: false\n      }\n    },\n    devServer: {\n      port: 3000\n    },\n    router: {\n      mode: 'hash',\n      basename: '/'\n    }\n  },\n  rn: {\n    appName: 'taroDemo',\n    postcss: {\n      cssModules: {\n        enable: false\n      }\n    }\n  }\n});\n\n// 平台差异化处理工具\nimport Taro from '@tarojs/taro';\n\nclass PlatformUtils {\n  // 获取当前平台\n  static getCurrentPlatform() {\n    return process.env.TARO_ENV;\n  }\n  \n  // 判断是否为小程序环境\n  static isMiniProgram() {\n    return ['weapp', 'alipay', 'swan', 'tt'].includes(process.env.TARO_ENV!);\n  }\n  \n  // 判断是否为H5环境\n  static isH5() {\n    return process.env.TARO_ENV === 'h5';\n  }\n  \n  // 判断是否为RN环境\n  static isRN() {\n    return process.env.TARO_ENV === 'rn';\n  }\n  \n  // 平台特定的存储方法\n  static async setStorage(key: string, data: any) {\n    if (this.isH5()) {\n      localStorage.setItem(key, JSON.stringify(data));\n    } else {\n      return Taro.setStorage({ key, data });\n    }\n  }\n  \n  static async getStorage(key: string) {\n    if (this.isH5()) {\n      const data = localStorage.getItem(key);\n      return data ? JSON.parse(data) : null;\n    } else {\n      return Taro.getStorage({ key }).then(res => res.data);\n    }\n  }\n  \n  // 平台特定的导航方法\n  static navigateTo(url: string) {\n    if (this.isH5()) {\n      Taro.navigateTo({ url });\n    } else {\n      Taro.navigateTo({ url });\n    }\n  }\n}"
    ],
    resources: [
      { name: "Taro官方文档", url: "https://taro-docs.jd.com/taro/docs/README" },
      { name: "Taro UI组件库", url: "https://taro-ui.jd.com/" },
      { name: "Taro物料市场", url: "https://taro-ext.jd.com/" }
    ]
  },

  UniApp: {
    title: "UniApp 跨平台应用框架",
    content: `UniApp 是DCloud推出的使用Vue语法开发所有前端应用的框架。

## 支持平台
- **小程序**: 微信、支付宝、百度、字节跳动、QQ等
- **App**: iOS、Android原生应用
- **H5**: 移动端和桌面端Web应用
- **快应用**: 华为、小米等快应用平台

## 核心特性
- **Vue语法**: 基于Vue.js开发，学习成本低
- **组件化**: 内置丰富的跨端组件
- **条件编译**: 灵活的平台差异化处理
- **原生能力**: 丰富的原生API和插件

## 主要组件
- **view**: 视图容器组件
- **text**: 文本组件
- **button**: 按钮组件
- **input**: 输入框组件
- **image**: 图片组件
- **scroll-view**: 滚动视图

## 开发工具
- **HBuilderX**: 官方IDE
- **uni-cli**: 命令行工具
- **uniCloud**: 云端一体化开发
- **插件市场**: 丰富的插件生态

## 最佳实践
1. 使用条件编译处理平台差异
2. 合理使用uni-app内置组件
3. 优化应用性能和用户体验
4. 利用uniCloud提升开发效率`,
    examples: [
      "// UniApp 应用配置 - pages.json\n{\n  \"pages\": [\n    {\n      \"path\": \"pages/index/index\",\n      \"style\": {\n        \"navigationBarTitleText\": \"首页\",\n        \"backgroundColor\": \"#f8f8f8\",\n        \"enablePullDownRefresh\": true\n      }\n    },\n    {\n      \"path\": \"pages/profile/profile\",\n      \"style\": {\n        \"navigationBarTitleText\": \"个人中心\"\n      }\n    },\n    {\n      \"path\": \"pages/webview/webview\",\n      \"style\": {\n        \"navigationBarTitleText\": \"网页\"\n      }\n    }\n  ],\n  \"globalStyle\": {\n    \"navigationBarTextStyle\": \"black\",\n    \"navigationBarTitleText\": \"UniApp示例\",\n    \"navigationBarBackgroundColor\": \"#F8F8F8\",\n    \"backgroundColor\": \"#F8F8F8\"\n  },\n  \"tabBar\": {\n    \"color\": \"#7A7E83\",\n    \"selectedColor\": \"#3cc51f\",\n    \"borderStyle\": \"black\",\n    \"backgroundColor\": \"#ffffff\",\n    \"list\": [\n      {\n        \"pagePath\": \"pages/index/index\",\n        \"iconPath\": \"static/tab-home.png\",\n        \"selectedIconPath\": \"static/tab-home-active.png\",\n        \"text\": \"首页\"\n      },\n      {\n        \"pagePath\": \"pages/profile/profile\",\n        \"iconPath\": \"static/tab-profile.png\",\n        \"selectedIconPath\": \"static/tab-profile-active.png\",\n        \"text\": \"我的\"\n      }\n    ]\n  },\n  // 条件编译配置\n  \"condition\": {\n    \"current\": 0,\n    \"list\": [\n      {\n        \"name\": \"首页\",\n        \"path\": \"pages/index/index\",\n        \"query\": \"id=1&name=uniapp\"\n      }\n    ]\n  }\n}",
      "// UniApp Vue组件示例\n<template>\n  <view class=\"container\">\n    <view class=\"header\">\n      <text class=\"title\">商品列表</text>\n      <button @click=\"refresh\" :loading=\"refreshing\" class=\"refresh-btn\">\n        刷新\n      </button>\n    </view>\n    \n    <scroll-view \n      class=\"scroll-area\"\n      scroll-y=\"true\"\n      @scrolltolower=\"loadMore\"\n      :refresher-enabled=\"true\"\n      :refresher-triggered=\"refreshing\"\n      @refresherrefresh=\"refresh\"\n    >\n      <view \n        v-for=\"item in productList\" \n        :key=\"item.id\" \n        class=\"product-item\"\n        @click=\"goToDetail(item.id)\"\n      >\n        <image \n          :src=\"item.image\" \n          class=\"product-image\"\n          mode=\"aspectFill\"\n          :lazy-load=\"true\"\n        ></image>\n        <view class=\"product-info\">\n          <text class=\"product-name\">{{ item.name }}</text>\n          <text class=\"product-price\">¥{{ item.price }}</text>\n          <text class=\"product-desc\">{{ item.description }}</text>\n        </view>\n        <view class=\"product-actions\">\n          <button \n            @click.stop=\"addToCart(item)\" \n            class=\"cart-btn\"\n            :disabled=\"item.stock === 0\"\n          >\n            {{ item.stock > 0 ? '加入购物车' : '库存不足' }}\n          </button>\n        </view>\n      </view>\n      \n      <view v-if=\"loading\" class=\"loading\">\n        <text>加载中...</text>\n      </view>\n      \n      <view v-if=\"!hasMore && productList.length > 0\" class=\"no-more\">\n        <text>没有更多商品了</text>\n      </view>\n    </scroll-view>\n    \n    <!-- 购物车悬浮按钮 -->\n    <view class=\"cart-float\" @click=\"goToCart\">\n      <text class=\"cart-count\" v-if=\"cartCount > 0\">{{ cartCount }}</text>\n      <text class=\"cart-icon\">🛒</text>\n    </view>\n  </view>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      productList: [],\n      loading: false,\n      refreshing: false,\n      page: 1,\n      pageSize: 10,\n      hasMore: true,\n      cartCount: 0\n    }\n  },\n  \n  onLoad(options) {\n    console.log('页面参数:', options);\n    this.loadProducts();\n    this.getCartCount();\n  },\n  \n  onShow() {\n    // 页面显示时更新购物车数量\n    this.getCartCount();\n  },\n  \n  onPullDownRefresh() {\n    this.refresh();\n  },\n  \n  onReachBottom() {\n    this.loadMore();\n  },\n  \n  methods: {\n    async loadProducts(isRefresh = false) {\n      if (this.loading) return;\n      \n      this.loading = true;\n      \n      try {\n        // 模拟API调用\n        const response = await uni.request({\n          url: 'https://api.example.com/products',\n          data: {\n            page: isRefresh ? 1 : this.page,\n            pageSize: this.pageSize\n          }\n        });\n        \n        const { products, hasMore } = response.data;\n        \n        if (isRefresh) {\n          this.productList = products;\n          this.page = 2;\n        } else {\n          this.productList.push(...products);\n          this.page++;\n        }\n        \n        this.hasMore = hasMore;\n        \n      } catch (error) {\n        uni.showToast({\n          title: '加载失败',\n          icon: 'error'\n        });\n        console.error('加载商品失败:', error);\n      } finally {\n        this.loading = false;\n        this.refreshing = false;\n        \n        if (isRefresh) {\n          uni.stopPullDownRefresh();\n        }\n      }\n    },\n    \n    async refresh() {\n      this.refreshing = true;\n      await this.loadProducts(true);\n    },\n    \n    loadMore() {\n      if (this.hasMore && !this.loading) {\n        this.loadProducts();\n      }\n    },\n    \n    goToDetail(productId) {\n      uni.navigateTo({\n        url: `/pages/detail/detail?id=${productId}`\n      });\n    },\n    \n    async addToCart(product) {\n      try {\n        // 添加到购物车逻辑\n        await this.saveToCart(product);\n        \n        this.cartCount++;\n        \n        uni.showToast({\n          title: '已加入购物车',\n          icon: 'success'\n        });\n        \n        // 震动反馈\n        // #ifdef APP-PLUS\n        plus.device.vibrate(100);\n        // #endif\n        \n        // #ifdef MP-WEIXIN\n        wx.vibrateShort();\n        // #endif\n        \n      } catch (error) {\n        uni.showToast({\n          title: '添加失败',\n          icon: 'error'\n        });\n      }\n    },\n    \n    async saveToCart(product) {\n      // 获取现有购物车\n      const cart = uni.getStorageSync('cart') || [];\n      \n      // 查找是否已存在该商品\n      const existingIndex = cart.findIndex(item => item.id === product.id);\n      \n      if (existingIndex >= 0) {\n        cart[existingIndex].quantity += 1;\n      } else {\n        cart.push({\n          ...product,\n          quantity: 1,\n          addTime: new Date().getTime()\n        });\n      }\n      \n      // 保存到本地存储\n      uni.setStorageSync('cart', cart);\n    },\n    \n    getCartCount() {\n      const cart = uni.getStorageSync('cart') || [];\n      this.cartCount = cart.reduce((total, item) => total + item.quantity, 0);\n    },\n    \n    goToCart() {\n      uni.navigateTo({\n        url: '/pages/cart/cart'\n      });\n    }\n  }\n}\n</script>\n\n<style lang=\"scss\">\n.container {\n  padding: 20rpx;\n  background-color: #f8f8f8;\n  min-height: 100vh;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20rpx;\n  \n  .title {\n    font-size: 36rpx;\n    font-weight: bold;\n    color: #333;\n  }\n  \n  .refresh-btn {\n    padding: 10rpx 20rpx;\n    font-size: 28rpx;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 8rpx;\n  }\n}\n\n.scroll-area {\n  height: calc(100vh - 200rpx);\n}\n\n.product-item {\n  display: flex;\n  background-color: white;\n  margin-bottom: 20rpx;\n  padding: 20rpx;\n  border-radius: 16rpx;\n  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1);\n  \n  .product-image {\n    width: 160rpx;\n    height: 160rpx;\n    border-radius: 12rpx;\n  }\n  \n  .product-info {\n    flex: 1;\n    margin-left: 20rpx;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    \n    .product-name {\n      font-size: 32rpx;\n      font-weight: bold;\n      color: #333;\n      margin-bottom: 10rpx;\n    }\n    \n    .product-price {\n      font-size: 36rpx;\n      color: #e4393c;\n      font-weight: bold;\n      margin-bottom: 10rpx;\n    }\n    \n    .product-desc {\n      font-size: 28rpx;\n      color: #666;\n      line-height: 1.4;\n    }\n  }\n  \n  .product-actions {\n    display: flex;\n    align-items: flex-end;\n    \n    .cart-btn {\n      padding: 12rpx 24rpx;\n      font-size: 26rpx;\n      background-color: #28a745;\n      color: white;\n      border: none;\n      border-radius: 8rpx;\n      \n      &:disabled {\n        background-color: #ccc;\n      }\n    }\n  }\n}\n\n.loading, .no-more {\n  text-align: center;\n  padding: 40rpx 0;\n  color: #999;\n  font-size: 28rpx;\n}\n\n.cart-float {\n  position: fixed;\n  right: 40rpx;\n  bottom: 100rpx;\n  width: 100rpx;\n  height: 100rpx;\n  background-color: #007bff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 4rpx 12rpx rgba(0,123,255,0.3);\n  \n  .cart-icon {\n    font-size: 40rpx;\n    color: white;\n  }\n  \n  .cart-count {\n    position: absolute;\n    top: -10rpx;\n    right: -10rpx;\n    background-color: #e4393c;\n    color: white;\n    font-size: 20rpx;\n    width: 36rpx;\n    height: 36rpx;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n// 条件编译样式\n// #ifdef H5\n.container {\n  max-width: 750rpx;\n  margin: 0 auto;\n}\n// #endif\n\n// #ifdef MP-WEIXIN\n.product-item {\n  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.1);\n}\n// #endif\n</style>",
      "// UniApp 条件编译和平台API使用\n// utils/platform.js\nexport class PlatformUtils {\n  // 获取系统信息\n  static getSystemInfo() {\n    return new Promise((resolve) => {\n      uni.getSystemInfo({\n        success: (res) => {\n          resolve(res);\n        }\n      });\n    });\n  }\n  \n  // 平台特定的分享功能\n  static share(options) {\n    // #ifdef MP-WEIXIN\n    return uni.showShareMenu({\n      withShareTicket: true,\n      menus: ['shareAppMessage', 'shareTimeline']\n    });\n    // #endif\n    \n    // #ifdef H5\n    if (navigator.share) {\n      return navigator.share(options);\n    } else {\n      // 降级处理\n      this.copyToClipboard(options.url || window.location.href);\n    }\n    // #endif\n    \n    // #ifdef APP-PLUS\n    return plus.share.sendWithSystem(options);\n    // #endif\n  }\n  \n  // 复制到剪贴板\n  static copyToClipboard(text) {\n    // #ifdef H5\n    if (navigator.clipboard) {\n      return navigator.clipboard.writeText(text);\n    } else {\n      const textArea = document.createElement('textarea');\n      textArea.value = text;\n      document.body.appendChild(textArea);\n      textArea.select();\n      document.execCommand('copy');\n      document.body.removeChild(textArea);\n    }\n    // #endif\n    \n    // #ifndef H5\n    return uni.setClipboardData({\n      data: text\n    });\n    // #endif\n  }\n  \n  // 获取位置信息\n  static getLocation() {\n    return new Promise((resolve, reject) => {\n      uni.getLocation({\n        type: 'gcj02',\n        success: (res) => {\n          resolve({\n            latitude: res.latitude,\n            longitude: res.longitude,\n            address: res.address\n          });\n        },\n        fail: (error) => {\n          reject(error);\n        }\n      });\n    });\n  }\n  \n  // 选择图片\n  static chooseImage(options = {}) {\n    const defaultOptions = {\n      count: 1,\n      sizeType: ['original', 'compressed'],\n      sourceType: ['album', 'camera']\n    };\n    \n    return new Promise((resolve, reject) => {\n      uni.chooseImage({\n        ...defaultOptions,\n        ...options,\n        success: (res) => {\n          resolve(res.tempFilePaths);\n        },\n        fail: reject\n      });\n    });\n  }\n  \n  // 上传文件\n  static uploadFile(filePath, uploadUrl, formData = {}) {\n    return new Promise((resolve, reject) => {\n      const uploadTask = uni.uploadFile({\n        url: uploadUrl,\n        filePath: filePath,\n        name: 'file',\n        formData: formData,\n        success: (res) => {\n          resolve(JSON.parse(res.data));\n        },\n        fail: reject\n      });\n      \n      // 监听上传进度\n      uploadTask.onProgressUpdate((progress) => {\n        console.log('上传进度:', progress.progress);\n      });\n    });\n  }\n  \n  // 支付功能\n  static payment(paymentData) {\n    // #ifdef MP-WEIXIN\n    return uni.requestPayment(paymentData);\n    // #endif\n    \n    // #ifdef APP-PLUS\n    return plus.payment.request(\n      plus.payment.getChannels()[0],\n      paymentData\n    );\n    // #endif\n    \n    // #ifdef H5\n    // H5环境下调用第三方支付SDK\n    return this.h5Payment(paymentData);\n    // #endif\n  }\n  \n  // 设备震动\n  static vibrate(duration = 400) {\n    // #ifdef APP-PLUS\n    plus.device.vibrate(duration);\n    // #endif\n    \n    // #ifdef MP-WEIXIN\n    if (duration <= 15) {\n      wx.vibrateShort();\n    } else {\n      wx.vibrateLong();\n    }\n    // #endif\n    \n    // #ifdef H5\n    if (navigator.vibrate) {\n      navigator.vibrate(duration);\n    }\n    // #endif\n  }\n}"
    ],
    resources: [
      { name: "UniApp官方文档", url: "https://uniapp.dcloud.net.cn/" },
      { name: "UniApp插件市场", url: "https://ext.dcloud.net.cn/" },
      { name: "HBuilderX下载", url: "https://www.dcloud.io/hbuilderx.html" }
    ]
  },

  // === Testing Tools ===
  Vitest: {
    title: "Vitest 现代化测试框架",
    content: `Vitest 是一个基于Vite的快速单元测试框架，专为现代前端项目设计。

## 核心特性
- **极速运行**: 基于Vite的快速热重载和执行
- **兼容Jest**: 兼容大部分Jest API和语法
- **TypeScript支持**: 开箱即用的TypeScript支持
- **ESM优先**: 原生支持ES模块

## 主要优势
- **零配置**: 继承Vite配置，无需额外设置
- **智能监听**: 只运行相关的测试用例
- **并行执行**: 多线程并行执行测试
- **丰富断言**: 内置chai断言库

## 核心API
- **describe**: 测试套件组织
- **test/it**: 单个测试用例
- **expect**: 断言库
- **beforeEach/afterEach**: 生命周期钩子

## 测试类型
- **单元测试**: 组件和函数的单元测试
- **集成测试**: 多组件协作测试
- **快照测试**: UI组件快照对比
- **异步测试**: Promise和异步函数测试

## 最佳实践
1. 编写清晰的测试描述
2. 使用适当的断言方法
3. 合理组织测试文件结构
4. 利用并行执行提升速度`,
    examples: [
      "// vitest.config.ts 配置文件\nimport { defineConfig } from 'vitest/config';\nimport vue from '@vitejs/plugin-vue';\nimport { resolve } from 'path';\n\nexport default defineConfig({\n  plugins: [vue()],\n  test: {\n    globals: true,\n    environment: 'jsdom',\n    setupFiles: ['./src/test/setup.ts'],\n    include: ['src/**/*.{test,spec}.{js,ts,vue}'],\n    exclude: ['node_modules', 'dist'],\n    coverage: {\n      provider: 'v8',\n      reporter: ['text', 'json', 'html'],\n      exclude: [\n        'node_modules/',\n        'src/test/',\n        '**/*.d.ts',\n        '**/*.config.*'\n      ]\n    },\n    // 并行测试配置\n    threads: true,\n    maxThreads: 4,\n    minThreads: 1,\n    // 监听模式配置\n    watch: {\n      ignore: ['node_modules', 'dist']\n    }\n  },\n  resolve: {\n    alias: {\n      '@': resolve(__dirname, 'src')\n    }\n  }\n});",
      "// 基础函数测试示例\n// src/utils/math.ts\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n\nexport function divide(a: number, b: number): number {\n  if (b === 0) throw new Error('Division by zero');\n  return a / b;\n}\n\nexport function factorial(n: number): number {\n  if (n < 0) throw new Error('Negative number');\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\n\n// src/utils/__tests__/math.test.ts\nimport { describe, it, expect } from 'vitest';\nimport { add, divide, factorial } from '../math';\n\ndescribe('数学工具函数', () => {\n  describe('add函数', () => {\n    it('应该正确计算两个正数的和', () => {\n      expect(add(2, 3)).toBe(5);\n      expect(add(10, 20)).toBe(30);\n    });\n    \n    it('应该处理负数', () => {\n      expect(add(-5, 3)).toBe(-2);\n      expect(add(-10, -20)).toBe(-30);\n    });\n    \n    it('应该处理零值', () => {\n      expect(add(0, 5)).toBe(5);\n      expect(add(0, 0)).toBe(0);\n    });\n    \n    it('应该处理小数', () => {\n      expect(add(0.1, 0.2)).toBeCloseTo(0.3);\n    });\n  });\n  \n  describe('divide函数', () => {\n    it('应该正确计算除法', () => {\n      expect(divide(10, 2)).toBe(5);\n      expect(divide(15, 3)).toBe(5);\n    });\n    \n    it('除以零时应该抛出错误', () => {\n      expect(() => divide(10, 0)).toThrow('Division by zero');\n    });\n    \n    it('应该处理小数除法', () => {\n      expect(divide(1, 3)).toBeCloseTo(0.333333);\n    });\n  });\n  \n  describe('factorial函数', () => {\n    it('应该计算正确的阶乘', () => {\n      expect(factorial(0)).toBe(1);\n      expect(factorial(1)).toBe(1);\n      expect(factorial(5)).toBe(120);\n    });\n    \n    it('负数应该抛出错误', () => {\n      expect(() => factorial(-1)).toThrow('Negative number');\n    });\n  });\n});",
      "// Vue组件测试示例\n// src/components/Counter.vue\n<template>\n  <div class=\"counter\">\n    <h2>{{ title }}</h2>\n    <p>计数: {{ count }}</p>\n    <button @click=\"increment\" data-testid=\"increment-btn\">\n      增加\n    </button>\n    <button @click=\"decrement\" data-testid=\"decrement-btn\">\n      减少\n    </button>\n    <button @click=\"reset\" data-testid=\"reset-btn\">\n      重置\n    </button>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\ninterface Props {\n  title?: string;\n  initialValue?: number;\n}\n\nconst props = withDefaults(defineProps<Props>(), {\n  title: '计数器',\n  initialValue: 0\n});\n\nconst count = ref(props.initialValue);\n\nfunction increment() {\n  count.value++;\n}\n\nfunction decrement() {\n  count.value--;\n}\n\nfunction reset() {\n  count.value = props.initialValue;\n}\n</script>\n\n// src/components/__tests__/Counter.test.ts\nimport { describe, it, expect } from 'vitest';\nimport { mount } from '@vue/test-utils';\nimport Counter from '../Counter.vue';\n\ndescribe('Counter组件', () => {\n  it('应该渲染默认标题和初始值', () => {\n    const wrapper = mount(Counter);\n    \n    expect(wrapper.find('h2').text()).toBe('计数器');\n    expect(wrapper.find('p').text()).toContain('计数: 0');\n  });\n  \n  it('应该接受props并显示自定义值', () => {\n    const wrapper = mount(Counter, {\n      props: {\n        title: '自定义计数器',\n        initialValue: 10\n      }\n    });\n    \n    expect(wrapper.find('h2').text()).toBe('自定义计数器');\n    expect(wrapper.find('p').text()).toContain('计数: 10');\n  });\n  \n  it('点击增加按钮应该增加计数', async () => {\n    const wrapper = mount(Counter);\n    const incrementBtn = wrapper.find('[data-testid=\"increment-btn\"]');\n    \n    await incrementBtn.trigger('click');\n    expect(wrapper.find('p').text()).toContain('计数: 1');\n    \n    await incrementBtn.trigger('click');\n    expect(wrapper.find('p').text()).toContain('计数: 2');\n  });\n  \n  it('点击减少按钮应该减少计数', async () => {\n    const wrapper = mount(Counter, {\n      props: { initialValue: 5 }\n    });\n    const decrementBtn = wrapper.find('[data-testid=\"decrement-btn\"]');\n    \n    await decrementBtn.trigger('click');\n    expect(wrapper.find('p').text()).toContain('计数: 4');\n  });\n  \n  it('点击重置按钮应该重置到初始值', async () => {\n    const wrapper = mount(Counter, {\n      props: { initialValue: 3 }\n    });\n    \n    // 先增加几次\n    const incrementBtn = wrapper.find('[data-testid=\"increment-btn\"]');\n    await incrementBtn.trigger('click');\n    await incrementBtn.trigger('click');\n    expect(wrapper.find('p').text()).toContain('计数: 5');\n    \n    // 然后重置\n    const resetBtn = wrapper.find('[data-testid=\"reset-btn\"]');\n    await resetBtn.trigger('click');\n    expect(wrapper.find('p').text()).toContain('计数: 3');\n  });\n  \n  it('应该生成正确的快照', () => {\n    const wrapper = mount(Counter, {\n      props: {\n        title: '测试计数器',\n        initialValue: 0\n      }\n    });\n    \n    expect(wrapper.html()).toMatchSnapshot();\n  });\n});"
    ],
    resources: [
      { name: "Vitest官方文档", url: "https://vitest.dev/" },
      { name: "Vue Testing Library", url: "https://testing-library.com/docs/vue-testing-library/intro" },
      { name: "Vitest最佳实践", url: "https://vitest.dev/guide/best-practices.html" }
    ]
  },

  Cypress: {
    title: "Cypress 端到端测试框架",
    content: `Cypress 是一个现代化的端到端测试框架，专为现代Web应用设计。

## 核心特性
- **真实浏览器**: 在真实浏览器环境中运行测试
- **时间旅行**: 可以回溯查看每一步操作
- **自动等待**: 智能等待元素和异步操作
- **实时重载**: 修改测试文件后自动重新运行

## 主要优势
- **简单易用**: 直观的API和丰富的文档
- **强大调试**: 内置开发者工具和错误提示
- **自动截图**: 测试失败时自动截图
- **视频录制**: 完整的测试执行过程录制

## 测试类型
- **端到端测试**: 完整用户流程测试
- **集成测试**: 多个组件交互测试
- **单元测试**: 独立组件或函数测试
- **API测试**: 后端接口测试

## 核心命令
- **cy.visit()**: 访问页面
- **cy.get()**: 选择元素
- **cy.click()**: 点击操作
- **cy.type()**: 输入文本
- **cy.should()**: 断言验证

## 最佳实践
1. 使用data-cy属性选择元素
2. 避免使用固定的等待时间
3. 利用自定义命令复用逻辑
4. 合理组织测试文件结构`,
    examples: [
      "// cypress.config.js 配置文件\nimport { defineConfig } from 'cypress';\n\nexport default defineConfig({\n  e2e: {\n    baseUrl: 'http://localhost:3000',\n    viewportWidth: 1280,\n    viewportHeight: 720,\n    video: true,\n    screenshotOnRunFailure: true,\n    defaultCommandTimeout: 10000,\n    requestTimeout: 10000,\n    responseTimeout: 10000,\n    \n    // 支持的浏览器\n    supportFile: 'cypress/support/e2e.js',\n    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',\n    \n    setupNodeEvents(on, config) {\n      // 插件配置\n      on('task', {\n        log(message) {\n          console.log(message);\n          return null;\n        },\n        \n        // 数据库清理任务\n        'db:seed'() {\n          // 执行数据库种子数据\n          return null;\n        },\n        \n        'db:clean'() {\n          // 清理测试数据\n          return null;\n        }\n      });\n      \n      // 环境变量配置\n      config.env = {\n        ...config.env,\n        API_URL: process.env.VITE_API_BASE_URL || 'http://localhost:8000',\n        TEST_USER_EMAIL: 'test@example.com',\n        TEST_USER_PASSWORD: 'password123'\n      };\n      \n      return config;\n    }\n  },\n  \n  component: {\n    devServer: {\n      framework: 'vue',\n      bundler: 'vite'\n    },\n    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}'\n  }\n});",
      "// 登录流程端到端测试\n// cypress/e2e/auth/login.cy.js\ndescribe('用户登录功能', () => {\n  beforeEach(() => {\n    // 每个测试前访问登录页面\n    cy.visit('/login');\n    \n    // 清理可能存在的登录状态\n    cy.window().then((win) => {\n      win.localStorage.clear();\n      win.sessionStorage.clear();\n    });\n  });\n  \n  it('应该显示登录表单', () => {\n    cy.get('[data-cy=\"login-form\"]').should('be.visible');\n    cy.get('[data-cy=\"email-input\"]').should('be.visible');\n    cy.get('[data-cy=\"password-input\"]').should('be.visible');\n    cy.get('[data-cy=\"login-button\"]').should('be.visible');\n    \n    // 检查页面标题\n    cy.title().should('eq', '用户登录 - My App');\n    cy.get('h1').should('contain.text', '登录');\n  });\n  \n  it('空表单提交应该显示错误信息', () => {\n    cy.get('[data-cy=\"login-button\"]').click();\n    \n    cy.get('[data-cy=\"email-error\"]')\n      .should('be.visible')\n      .and('contain.text', '请输入邮箱地址');\n    \n    cy.get('[data-cy=\"password-error\"]')\n      .should('be.visible')\n      .and('contain.text', '请输入密码');\n  });\n  \n  it('无效邮箱格式应该显示错误', () => {\n    cy.get('[data-cy=\"email-input\"]').type('invalid-email');\n    cy.get('[data-cy=\"password-input\"]').type('password123');\n    cy.get('[data-cy=\"login-button\"]').click();\n    \n    cy.get('[data-cy=\"email-error\"]')\n      .should('be.visible')\n      .and('contain.text', '请输入有效的邮箱地址');\n  });\n  \n  it('错误的登录凭据应该显示错误信息', () => {\n    cy.get('[data-cy=\"email-input\"]').type('wrong@example.com');\n    cy.get('[data-cy=\"password-input\"]').type('wrongpassword');\n    cy.get('[data-cy=\"login-button\"]').click();\n    \n    // 等待API请求完成\n    cy.intercept('POST', '/api/v1/auth/login').as('loginRequest');\n    cy.wait('@loginRequest');\n    \n    cy.get('[data-cy=\"login-error\"]')\n      .should('be.visible')\n      .and('contain.text', '邮箱或密码错误');\n  });\n  \n  it('成功登录应该跳转到首页', () => {\n    // 模拟成功的登录API响应\n    cy.intercept('POST', '/api/v1/auth/login', {\n      statusCode: 200,\n      body: {\n        user: {\n          id: 1,\n          name: '测试用户',\n          email: 'test@example.com'\n        },\n        token: 'mock-jwt-token'\n      }\n    }).as('successLogin');\n    \n    cy.get('[data-cy=\"email-input\"]').type(Cypress.env('TEST_USER_EMAIL'));\n    cy.get('[data-cy=\"password-input\"]').type(Cypress.env('TEST_USER_PASSWORD'));\n    cy.get('[data-cy=\"login-button\"]').click();\n    \n    cy.wait('@successLogin');\n    \n    // 验证跳转到首页\n    cy.url().should('eq', Cypress.config().baseUrl + '/');\n    \n    // 验证用户信息显示\n    cy.get('[data-cy=\"user-menu\"]').should('be.visible');\n    cy.get('[data-cy=\"user-name\"]').should('contain.text', '测试用户');\n    \n    // 验证localStorage中保存了token\n    cy.window().its('localStorage.token').should('exist');\n  });\n  \n  it('记住我功能应该正常工作', () => {\n    cy.get('[data-cy=\"email-input\"]').type('test@example.com');\n    cy.get('[data-cy=\"remember-me\"]').check();\n    \n    // 验证复选框状态\n    cy.get('[data-cy=\"remember-me\"]').should('be.checked');\n    \n    // 模拟表单提交\n    cy.get('[data-cy=\"password-input\"]').type('password123');\n    cy.get('[data-cy=\"login-button\"]').click();\n    \n    // 再次访问登录页面，邮箱应该被记住\n    cy.visit('/login');\n    cy.get('[data-cy=\"email-input\"]').should('have.value', 'test@example.com');\n  });\n});",
      "// 自定义命令和高级功能\n// cypress/support/commands.js\n\n// 登录命令\nCypress.Commands.add('login', (email, password) => {\n  cy.session([email, password], () => {\n    cy.visit('/login');\n    cy.get('[data-cy=\"email-input\"]').type(email);\n    cy.get('[data-cy=\"password-input\"]').type(password);\n    cy.get('[data-cy=\"login-button\"]').click();\n    \n    // 等待登录成功\n    cy.url().should('not.include', '/login');\n  });\n});\n\n// 数据库种子命令\nCypress.Commands.add('seedDatabase', () => {\n  cy.task('db:seed');\n});\n\n// 清理数据库命令\nCypress.Commands.add('cleanDatabase', () => {\n  cy.task('db:clean');\n});\n\n// 拖拽命令\nCypress.Commands.add('drag', { prevSubject: 'element' }, (subject, target) => {\n  cy.wrap(subject)\n    .trigger('mousedown', { button: 0 });\n  \n  cy.get(target)\n    .trigger('mousemove')\n    .trigger('mouseup');\n});\n\n// API请求命令\nCypress.Commands.add('apiRequest', (method, url, body = {}) => {\n  return cy.request({\n    method,\n    url: `${Cypress.env('API_URL')}${url}`,\n    body,\n    headers: {\n      'Authorization': `Bearer ${window.localStorage.getItem('token')}`\n    }\n  });\n});\n\n// 等待加载完成\nCypress.Commands.add('waitForLoad', () => {\n  cy.get('[data-cy=\"loading\"]', { timeout: 10000 }).should('not.exist');\n});\n\n// 检查无障碍性\nCypress.Commands.add('checkA11y', () => {\n  cy.injectAxe();\n  cy.checkA11y();\n});\n\n// 使用示例测试\ndescribe('购物车功能测试', () => {\n  beforeEach(() => {\n    cy.seedDatabase();\n    cy.login('test@example.com', 'password123');\n    cy.visit('/products');\n  });\n  \n  afterEach(() => {\n    cy.cleanDatabase();\n  });\n  \n  it('添加商品到购物车', () => {\n    // 等待页面加载完成\n    cy.waitForLoad();\n    \n    // 添加第一个商品\n    cy.get('[data-cy=\"product-item\"]').first().within(() => {\n      cy.get('[data-cy=\"add-to-cart\"]').click();\n    });\n    \n    // 验证购物车数量更新\n    cy.get('[data-cy=\"cart-count\"]').should('contain.text', '1');\n    \n    // 验证成功提示\n    cy.get('[data-cy=\"toast-message\"]')\n      .should('be.visible')\n      .and('contain.text', '已添加到购物车');\n    \n    // 检查无障碍性\n    cy.checkA11y();\n  });\n  \n  it('购物车拖拽排序', () => {\n    // 先添加一些商品\n    cy.get('[data-cy=\"product-item\"]').first().find('[data-cy=\"add-to-cart\"]').click();\n    cy.get('[data-cy=\"product-item\"]').eq(1).find('[data-cy=\"add-to-cart\"]').click();\n    \n    // 进入购物车页面\n    cy.get('[data-cy=\"cart-link\"]').click();\n    \n    // 拖拽重新排序\n    cy.get('[data-cy=\"cart-item\"]').first().drag('[data-cy=\"cart-item\"]:last');\n    \n    // 验证顺序改变\n    cy.get('[data-cy=\"cart-item\"]').first().should('contain', '商品2');\n  });\n});"
    ],
    resources: [
      { name: "Cypress官方文档", url: "https://docs.cypress.io/" },
      { name: "Cypress最佳实践", url: "https://docs.cypress.io/guides/references/best-practices" },
      { name: "Cypress实战教程", url: "https://learn.cypress.io/" }
    ]
  },

  Playwright: {
    title: "Playwright 端到端测试框架",
    content: `Playwright 是Microsoft开发的现代Web测试和自动化框架，支持多浏览器测试。

## 核心特性
- **多浏览器支持**: Chromium、Firefox、Safari
- **真实用户模拟**: 模拟真实用户交互行为
- **自动等待**: 智能等待元素可用
- **并行执行**: 多浏览器并行测试

## 主要优势
- **跨浏览器**: 一套代码多浏览器执行
- **移动端支持**: 模拟移动设备测试
- **网络控制**: 模拟网络条件和API响应
- **视觉对比**: 截图对比和视觉回归测试

## 测试类型
- **端到端测试**: 完整用户流程
- **API测试**: RESTful API接口测试
- **视觉测试**: UI视觉回归测试
- **性能测试**: 页面加载性能测试

## 核心API
- **page.goto()**: 导航到页面
- **page.locator()**: 定位元素
- **page.click()**: 点击操作
- **page.fill()**: 填写表单
- **expect()**: 断言验证

## 最佳实践
1. 使用Page Object模式组织代码
2. 合理使用定位器策略
3. 利用并行执行提升效率
4. 重视视觉测试和截图对比`,
    examples: [
      "// playwright.config.ts 配置文件\nimport { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  testDir: './tests',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: [\n    ['html'],\n    ['json', { outputFile: 'test-results.json' }],\n    ['junit', { outputFile: 'results.xml' }]\n  ],\n  \n  use: {\n    baseURL: 'http://localhost:3000',\n    trace: 'on-first-retry',\n    screenshot: 'only-on-failure',\n    video: 'retain-on-failure',\n    actionTimeout: 10000,\n    navigationTimeout: 30000\n  },\n  \n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] }\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] }\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] }\n    },\n    {\n      name: 'Mobile Chrome',\n      use: { ...devices['Pixel 5'] }\n    },\n    {\n      name: 'Mobile Safari',\n      use: { ...devices['iPhone 12'] }\n    }\n  ],\n  \n  webServer: {\n    command: 'npm run dev',\n    port: 3000,\n    reuseExistingServer: !process.env.CI\n  }\n});",
      "// Page Object模式测试示例\n// tests/pages/LoginPage.ts\nimport { Page, Locator, expect } from '@playwright/test';\n\nexport class LoginPage {\n  readonly page: Page;\n  readonly emailInput: Locator;\n  readonly passwordInput: Locator;\n  readonly loginButton: Locator;\n  readonly errorMessage: Locator;\n  readonly rememberMeCheckbox: Locator;\n  \n  constructor(page: Page) {\n    this.page = page;\n    this.emailInput = page.locator('[data-testid=\"email\"]');\n    this.passwordInput = page.locator('[data-testid=\"password\"]');\n    this.loginButton = page.locator('[data-testid=\"login-button\"]');\n    this.errorMessage = page.locator('[data-testid=\"error-message\"]');\n    this.rememberMeCheckbox = page.locator('[data-testid=\"remember-me\"]');\n  }\n  \n  async goto() {\n    await this.page.goto('/login');\n    await expect(this.page).toHaveTitle(/登录/);\n  }\n  \n  async login(email: string, password: string, rememberMe = false) {\n    await this.emailInput.fill(email);\n    await this.passwordInput.fill(password);\n    \n    if (rememberMe) {\n      await this.rememberMeCheckbox.check();\n    }\n    \n    await this.loginButton.click();\n  }\n  \n  async expectErrorMessage(message: string) {\n    await expect(this.errorMessage).toBeVisible();\n    await expect(this.errorMessage).toContainText(message);\n  }\n  \n  async expectSuccessfulLogin() {\n    await expect(this.page).toHaveURL('/dashboard');\n  }\n}\n\n// tests/auth/login.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { LoginPage } from '../pages/LoginPage';\n\ntest.describe('用户登录功能', () => {\n  let loginPage: LoginPage;\n  \n  test.beforeEach(async ({ page }) => {\n    loginPage = new LoginPage(page);\n    await loginPage.goto();\n  });\n  \n  test('成功登录流程', async ({ page }) => {\n    await loginPage.login('test@example.com', 'password123');\n    await loginPage.expectSuccessfulLogin();\n    \n    // 验证用户菜单显示\n    const userMenu = page.locator('[data-testid=\"user-menu\"]');\n    await expect(userMenu).toBeVisible();\n    \n    // 验证本地存储\n    const token = await page.evaluate(() => localStorage.getItem('token'));\n    expect(token).toBeTruthy();\n  });\n  \n  test('错误的凭据显示错误信息', async () => {\n    await loginPage.login('wrong@example.com', 'wrongpassword');\n    await loginPage.expectErrorMessage('邮箱或密码错误');\n  });\n  \n  test('记住我功能', async ({ page }) => {\n    await loginPage.login('test@example.com', 'password123', true);\n    await loginPage.expectSuccessfulLogin();\n    \n    // 清除session但保留localStorage\n    await page.evaluate(() => sessionStorage.clear());\n    \n    // 重新访问登录页面\n    await page.goto('/login');\n    \n    // 验证邮箱被记住\n    await expect(loginPage.emailInput).toHaveValue('test@example.com');\n    await expect(loginPage.rememberMeCheckbox).toBeChecked();\n  });\n});",
      "// API测试和高级功能示例\n// tests/api/products.spec.ts\nimport { test, expect, request } from '@playwright/test';\n\ntest.describe('产品API测试', () => {\n  let apiContext: any;\n  \n  test.beforeAll(async ({ playwright }) => {\n    apiContext = await playwright.request.newContext({\n      baseURL: 'http://localhost:8000/api/v1',\n      extraHTTPHeaders: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      }\n    });\n  });\n  \n  test.afterAll(async () => {\n    await apiContext.dispose();\n  });\n  \n  test('获取产品列表', async () => {\n    const response = await apiContext.get('/products');\n    expect(response.ok()).toBeTruthy();\n    \n    const products = await response.json();\n    expect(products).toHaveProperty('data');\n    expect(products.data).toBeInstanceOf(Array);\n    expect(products.data.length).toBeGreaterThan(0);\n    \n    // 验证产品结构\n    const firstProduct = products.data[0];\n    expect(firstProduct).toHaveProperty('id');\n    expect(firstProduct).toHaveProperty('name');\n    expect(firstProduct).toHaveProperty('price');\n  });\n  \n  test('创建新产品', async () => {\n    const newProduct = {\n      name: '测试产品',\n      description: '这是一个测试产品',\n      price: 99.99,\n      category: 'electronics'\n    };\n    \n    const response = await apiContext.post('/products', {\n      data: newProduct\n    });\n    \n    expect(response.ok()).toBeTruthy();\n    \n    const createdProduct = await response.json();\n    expect(createdProduct).toHaveProperty('id');\n    expect(createdProduct.name).toBe(newProduct.name);\n    expect(createdProduct.price).toBe(newProduct.price);\n  });\n});\n\n// 视觉回归测试\n// tests/visual/homepage.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('首页视觉测试', () => {\n  test('首页截图对比', async ({ page }) => {\n    await page.goto('/');\n    \n    // 等待页面完全加载\n    await page.waitForLoadState('networkidle');\n    \n    // 全页面截图对比\n    await expect(page).toHaveScreenshot('homepage.png');\n  });\n  \n  test('响应式设计测试', async ({ page }) => {\n    // 桌面版本\n    await page.setViewportSize({ width: 1920, height: 1080 });\n    await page.goto('/');\n    await expect(page).toHaveScreenshot('homepage-desktop.png');\n    \n    // 平板版本\n    await page.setViewportSize({ width: 768, height: 1024 });\n    await expect(page).toHaveScreenshot('homepage-tablet.png');\n    \n    // 手机版本\n    await page.setViewportSize({ width: 375, height: 667 });\n    await expect(page).toHaveScreenshot('homepage-mobile.png');\n  });\n  \n  test('组件级截图对比', async ({ page }) => {\n    await page.goto('/');\n    \n    // 导航栏截图\n    const header = page.locator('header');\n    await expect(header).toHaveScreenshot('header-component.png');\n    \n    // 产品卡片截图\n    const productCard = page.locator('[data-testid=\"product-card\"]').first();\n    await expect(productCard).toHaveScreenshot('product-card.png');\n  });\n});\n\n// 性能测试\ntest('页面性能测试', async ({ page }) => {\n  // 开始性能追踪\n  await page.tracing.start({ screenshots: true, snapshots: true });\n  \n  const startTime = Date.now();\n  await page.goto('/');\n  \n  // 等待页面完全加载\n  await page.waitForLoadState('networkidle');\n  const loadTime = Date.now() - startTime;\n  \n  // 停止追踪\n  await page.tracing.stop({ path: 'trace.zip' });\n  \n  // 断言加载时间\n  expect(loadTime).toBeLessThan(3000); // 3秒内加载完成\n  \n  // 获取Web Vitals\n  const vitals = await page.evaluate(() => {\n    return new Promise((resolve) => {\n      new PerformanceObserver((list) => {\n        const entries = list.getEntries();\n        resolve(entries.map(entry => ({\n          name: entry.name,\n          value: entry.value\n        })));\n      }).observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });\n    });\n  });\n  \n  console.log('Web Vitals:', vitals);\n});"
    ],
    resources: [
      { name: "Playwright官方文档", url: "https://playwright.dev/" },
      { name: "Playwright测试生成器", url: "https://playwright.dev/docs/codegen" },
      { name: "Playwright最佳实践", url: "https://playwright.dev/docs/best-practices" }
    ]
  },

  // === Database & Storage ===
  MongoDB: {
    title: "MongoDB 文档数据库",
    content: `MongoDB 是一个基于分布式文件存储的文档数据库，使用JSON风格的文档存储数据。

## 核心特性
- **文档存储**: 使用BSON格式存储文档
- **动态模式**: 无需预定义表结构
- **水平扩展**: 支持分片集群部署
- **丰富查询**: 支持复杂查询和聚合操作

## 主要优势
- **灵活性**: 文档结构可以灵活变化
- **高性能**: 优化的读写性能
- **高可用**: 副本集提供数据冗余
- **易扩展**: 分片支持水平扩展

## 核心概念
- **Database**: 数据库，包含多个集合
- **Collection**: 集合，类似关系数据库的表
- **Document**: 文档，类似关系数据库的行
- **Field**: 字段，文档中的键值对

## 查询操作
- **find()**: 查询文档
- **aggregate()**: 聚合管道操作
- **createIndex()**: 创建索引
- **updateOne/updateMany()**: 更新文档

## 最佳实践
1. 合理设计文档结构
2. 创建合适的索引
3. 使用聚合管道优化查询
4. 监控数据库性能指标`,
    examples: [
      "// MongoDB 基础操作示例\n// 连接MongoDB\nconst { MongoClient } = require('mongodb');\n\nasync function connectDB() {\n  const uri = 'mongodb://localhost:27017';\n  const client = new MongoClient(uri);\n  \n  try {\n    await client.connect();\n    console.log('Connected to MongoDB');\n    \n    const db = client.db('myapp');\n    const collection = db.collection('users');\n    \n    // 插入文档\n    const user = {\n      name: 'John Doe',\n      email: 'john@example.com',\n      age: 30,\n      skills: ['JavaScript', 'Python', 'MongoDB'],\n      profile: {\n        bio: 'Full-stack developer',\n        location: 'New York',\n        joinDate: new Date()\n      }\n    };\n    \n    const result = await collection.insertOne(user);\n    console.log('User inserted:', result.insertedId);\n    \n    return { client, db, collection };\n  } catch (error) {\n    console.error('Connection error:', error);\n    throw error;\n  }\n}",
      "// 复杂查询和聚合操作\nasync function advancedQueries(collection) {\n  try {\n    // 1. 基础查询\n    const users = await collection.find({\n      age: { $gte: 25, $lte: 40 },\n      'skills': { $in: ['JavaScript', 'Python'] }\n    }).toArray();\n    \n    console.log('查询结果:', users);\n    \n    // 2. 聚合管道\n    const pipeline = [\n      // 匹配条件\n      {\n        $match: {\n          age: { $gte: 20 }\n        }\n      },\n      // 分组统计\n      {\n        $group: {\n          _id: '$profile.location',\n          count: { $sum: 1 },\n          avgAge: { $avg: '$age' },\n          skills: { $addToSet: '$skills' }\n        }\n      },\n      // 排序\n      {\n        $sort: { count: -1 }\n      },\n      // 限制结果\n      {\n        $limit: 10\n      }\n    ];\n    \n    const aggregateResult = await collection.aggregate(pipeline).toArray();\n    console.log('聚合结果:', aggregateResult);\n    \n    // 3. 文本搜索\n    await collection.createIndex({ name: 'text', 'profile.bio': 'text' });\n    \n    const textSearchResult = await collection.find({\n      $text: { $search: 'developer javascript' }\n    }).toArray();\n    \n    console.log('文本搜索结果:', textSearchResult);\n    \n    // 4. 地理位置查询\n    await collection.updateMany({}, {\n      $set: {\n        location: {\n          type: 'Point',\n          coordinates: [-74.0059, 40.7128] // 纽约坐标\n        }\n      }\n    });\n    \n    await collection.createIndex({ location: '2dsphere' });\n    \n    const nearbyUsers = await collection.find({\n      location: {\n        $near: {\n          $geometry: {\n            type: 'Point',\n            coordinates: [-74.0059, 40.7128]\n          },\n          $maxDistance: 1000 // 1公里内\n        }\n      }\n    }).toArray();\n    \n    console.log('附近用户:', nearbyUsers);\n    \n  } catch (error) {\n    console.error('查询错误:', error);\n  }\n}",
      "// MongoDB with Express.js 集成示例\nconst express = require('express');\nconst { MongoClient, ObjectId } = require('mongodb');\nconst app = express();\n\napp.use(express.json());\n\nlet db;\n\n// 数据库连接中间件\nasync function initDB() {\n  try {\n    const client = new MongoClient('mongodb://localhost:27017');\n    await client.connect();\n    db = client.db('blog');\n    console.log('Database connected');\n  } catch (error) {\n    console.error('DB connection failed:', error);\n    process.exit(1);\n  }\n}\n\n// 博客文章 API\napp.get('/api/posts', async (req, res) => {\n  try {\n    const { page = 1, limit = 10, category, author } = req.query;\n    const skip = (page - 1) * limit;\n    \n    let query = {};\n    if (category) query.category = category;\n    if (author) query.author = new RegExp(author, 'i');\n    \n    const posts = await db.collection('posts')\n      .find(query)\n      .sort({ createdAt: -1 })\n      .skip(skip)\n      .limit(parseInt(limit))\n      .toArray();\n    \n    const total = await db.collection('posts').countDocuments(query);\n    \n    res.json({\n      posts,\n      pagination: {\n        page: parseInt(page),\n        limit: parseInt(limit),\n        total,\n        pages: Math.ceil(total / limit)\n      }\n    });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\napp.post('/api/posts', async (req, res) => {\n  try {\n    const post = {\n      ...req.body,\n      createdAt: new Date(),\n      updatedAt: new Date(),\n      views: 0,\n      likes: 0\n    };\n    \n    // 数据验证\n    if (!post.title || !post.content || !post.author) {\n      return res.status(400).json({ error: '标题、内容和作者不能为空' });\n    }\n    \n    const result = await db.collection('posts').insertOne(post);\n    \n    res.status(201).json({\n      id: result.insertedId,\n      message: '文章创建成功'\n    });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\napp.put('/api/posts/:id', async (req, res) => {\n  try {\n    const { id } = req.params;\n    const updateData = {\n      ...req.body,\n      updatedAt: new Date()\n    };\n    \n    const result = await db.collection('posts').updateOne(\n      { _id: new ObjectId(id) },\n      { $set: updateData }\n    );\n    \n    if (result.matchedCount === 0) {\n      return res.status(404).json({ error: '文章不存在' });\n    }\n    \n    res.json({ message: '文章更新成功' });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// 增加文章浏览量\napp.patch('/api/posts/:id/view', async (req, res) => {\n  try {\n    const { id } = req.params;\n    \n    const result = await db.collection('posts').updateOne(\n      { _id: new ObjectId(id) },\n      { $inc: { views: 1 } }\n    );\n    \n    if (result.matchedCount === 0) {\n      return res.status(404).json({ error: '文章不存在' });\n    }\n    \n    res.json({ message: '浏览量已更新' });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\ninitDB().then(() => {\n  app.listen(3000, () => {\n    console.log('Server running on port 3000');\n  });\n});"
    ],
    resources: [
      { name: "MongoDB官方文档", url: "https://docs.mongodb.com/" },
      { name: "MongoDB大学", url: "https://university.mongodb.com/" },
      { name: "Mongoose ODM", url: "https://mongoosejs.com/" }
    ]
  },

  MySQL: {
    title: "MySQL 关系型数据库",
    content: `MySQL 是世界上最流行的开源关系型数据库管理系统，广泛应用于Web开发。

## 核心特性
- **ACID属性**: 保证数据的原子性、一致性、隔离性、持久性
- **多存储引擎**: InnoDB、MyISAM等多种存储引擎
- **高性能**: 优化的查询执行引擎
- **跨平台**: 支持多种操作系统

## 主要优势
- **成熟稳定**: 经过长期验证的稳定性
- **标准SQL**: 支持标准SQL语法
- **丰富生态**: 大量工具和驱动支持
- **高可用**: 支持主从复制和集群

## 数据类型
- **数值类型**: INT、DECIMAL、FLOAT等
- **字符串类型**: VARCHAR、TEXT、CHAR等
- **日期时间**: DATE、DATETIME、TIMESTAMP
- **JSON类型**: MySQL 5.7+支持JSON数据类型

## 核心概念
- **数据库**: 数据的逻辑容器
- **表**: 数据的结构化存储
- **索引**: 提升查询性能
- **视图**: 虚拟表，简化复杂查询

## 最佳实践
1. 合理设计表结构和索引
2. 使用事务保证数据一致性
3. 优化慢查询
4. 定期备份数据`,
    examples: [
      "-- MySQL 基础操作示例\n-- 创建数据库和表\nCREATE DATABASE ecommerce;\nUSE ecommerce;\n\n-- 用户表\nCREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    username VARCHAR(50) UNIQUE NOT NULL,\n    email VARCHAR(100) UNIQUE NOT NULL,\n    password_hash VARCHAR(255) NOT NULL,\n    first_name VARCHAR(50),\n    last_name VARCHAR(50),\n    phone VARCHAR(20),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    is_active BOOLEAN DEFAULT TRUE,\n    INDEX idx_username (username),\n    INDEX idx_email (email)\n);\n\n-- 产品表\nCREATE TABLE products (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    name VARCHAR(200) NOT NULL,\n    description TEXT,\n    price DECIMAL(10, 2) NOT NULL,\n    stock_quantity INT DEFAULT 0,\n    category_id INT,\n    image_url VARCHAR(500),\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    INDEX idx_category (category_id),\n    INDEX idx_price (price)\n);\n\n-- 订单表\nCREATE TABLE orders (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    user_id INT NOT NULL,\n    total_amount DECIMAL(10, 2) NOT NULL,\n    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',\n    shipping_address TEXT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,\n    INDEX idx_user_id (user_id),\n    INDEX idx_status (status),\n    INDEX idx_created_at (created_at)\n);",
      "-- 复杂查询和存储过程示例\n-- 插入测试数据\nINSERT INTO users (username, email, password_hash, first_name, last_name) VALUES\n('john_doe', 'john@example.com', 'hashed_password_1', 'John', 'Doe'),\n('jane_smith', 'jane@example.com', 'hashed_password_2', 'Jane', 'Smith'),\n('mike_brown', 'mike@example.com', 'hashed_password_3', 'Mike', 'Brown');\n\nINSERT INTO products (name, description, price, stock_quantity, category_id) VALUES\n('笔记本电脑', '高性能游戏笔记本', 8999.99, 50, 1),\n('无线鼠标', '人体工学设计无线鼠标', 299.99, 200, 2),\n('机械键盘', '青轴机械键盘，手感极佳', 599.99, 100, 2);\n\n-- 复杂联表查询\nSELECT \n    u.username,\n    u.email,\n    COUNT(o.id) as order_count,\n    SUM(o.total_amount) as total_spent,\n    AVG(o.total_amount) as avg_order_value,\n    MAX(o.created_at) as last_order_date\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.is_active = TRUE\nGROUP BY u.id, u.username, u.email\nHAVING order_count > 0\nORDER BY total_spent DESC\nLIMIT 10;\n\n-- 创建存储过程：处理订单\nDELIMITER //\n\nCREATE PROCEDURE ProcessOrder(\n    IN p_user_id INT,\n    IN p_product_id INT,\n    IN p_quantity INT,\n    OUT p_order_id INT,\n    OUT p_success BOOLEAN\n)\nBEGIN\n    DECLARE product_price DECIMAL(10,2);\n    DECLARE available_stock INT;\n    DECLARE total_amount DECIMAL(10,2);\n    DECLARE EXIT HANDLER FOR SQLEXCEPTION\n    BEGIN\n        ROLLBACK;\n        SET p_success = FALSE;\n        SET p_order_id = 0;\n    END;\n\n    START TRANSACTION;\n    \n    -- 检查库存\n    SELECT price, stock_quantity INTO product_price, available_stock\n    FROM products \n    WHERE id = p_product_id FOR UPDATE;\n    \n    IF available_stock >= p_quantity THEN\n        -- 计算总金额\n        SET total_amount = product_price * p_quantity;\n        \n        -- 创建订单\n        INSERT INTO orders (user_id, total_amount, status)\n        VALUES (p_user_id, total_amount, 'pending');\n        \n        SET p_order_id = LAST_INSERT_ID();\n        \n        -- 更新库存\n        UPDATE products \n        SET stock_quantity = stock_quantity - p_quantity\n        WHERE id = p_product_id;\n        \n        SET p_success = TRUE;\n        COMMIT;\n    ELSE\n        SET p_success = FALSE;\n        SET p_order_id = 0;\n        ROLLBACK;\n    END IF;\nEND //\n\nDELIMITER ;\n\n-- 调用存储过程\nCALL ProcessOrder(1, 1, 2, @order_id, @success);\nSELECT @order_id, @success;",
      "// Node.js + MySQL 集成示例\nconst mysql = require('mysql2/promise');\nconst express = require('express');\nconst bcrypt = require('bcrypt');\nconst jwt = require('jsonwebtoken');\n\nconst app = express();\napp.use(express.json());\n\n// 数据库连接池\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'your_username',\n  password: 'your_password',\n  database: 'ecommerce',\n  waitForConnections: true,\n  connectionLimit: 10,\n  queueLimit: 0,\n  acquireTimeout: 60000,\n  timeout: 60000\n});\n\n// 用户注册\napp.post('/api/register', async (req, res) => {\n  const connection = await pool.getConnection();\n  \n  try {\n    const { username, email, password, firstName, lastName } = req.body;\n    \n    // 检查用户是否已存在\n    const [existingUsers] = await connection.execute(\n      'SELECT id FROM users WHERE username = ? OR email = ?',\n      [username, email]\n    );\n    \n    if (existingUsers.length > 0) {\n      return res.status(400).json({ error: '用户名或邮箱已存在' });\n    }\n    \n    // 密码加密\n    const saltRounds = 10;\n    const passwordHash = await bcrypt.hash(password, saltRounds);\n    \n    // 插入新用户\n    const [result] = await connection.execute(\n      'INSERT INTO users (username, email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?, ?)',\n      [username, email, passwordHash, firstName, lastName]\n    );\n    \n    res.status(201).json({\n      id: result.insertId,\n      username,\n      email,\n      message: '用户注册成功'\n    });\n    \n  } catch (error) {\n    console.error('注册错误:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  } finally {\n    connection.release();\n  }\n});\n\n// 用户登录\napp.post('/api/login', async (req, res) => {\n  const connection = await pool.getConnection();\n  \n  try {\n    const { username, password } = req.body;\n    \n    // 查找用户\n    const [users] = await connection.execute(\n      'SELECT id, username, email, password_hash, first_name, last_name FROM users WHERE username = ? AND is_active = TRUE',\n      [username]\n    );\n    \n    if (users.length === 0) {\n      return res.status(401).json({ error: '用户名或密码错误' });\n    }\n    \n    const user = users[0];\n    \n    // 验证密码\n    const isPasswordValid = await bcrypt.compare(password, user.password_hash);\n    \n    if (!isPasswordValid) {\n      return res.status(401).json({ error: '用户名或密码错误' });\n    }\n    \n    // 生成JWT token\n    const token = jwt.sign(\n      { userId: user.id, username: user.username },\n      'your_jwt_secret',\n      { expiresIn: '24h' }\n    );\n    \n    // 更新最后登录时间\n    await connection.execute(\n      'UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = ?',\n      [user.id]\n    );\n    \n    res.json({\n      token,\n      user: {\n        id: user.id,\n        username: user.username,\n        email: user.email,\n        firstName: user.first_name,\n        lastName: user.last_name\n      }\n    });\n    \n  } catch (error) {\n    console.error('登录错误:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  } finally {\n    connection.release();\n  }\n});\n\n// 获取产品列表（带分页和搜索）\napp.get('/api/products', async (req, res) => {\n  const connection = await pool.getConnection();\n  \n  try {\n    const { page = 1, limit = 10, search, category, minPrice, maxPrice } = req.query;\n    const offset = (page - 1) * limit;\n    \n    let whereClause = 'WHERE 1=1';\n    let params = [];\n    \n    if (search) {\n      whereClause += ' AND (name LIKE ? OR description LIKE ?)';\n      params.push(`%${search}%`, `%${search}%`);\n    }\n    \n    if (category) {\n      whereClause += ' AND category_id = ?';\n      params.push(category);\n    }\n    \n    if (minPrice) {\n      whereClause += ' AND price >= ?';\n      params.push(minPrice);\n    }\n    \n    if (maxPrice) {\n      whereClause += ' AND price <= ?';\n      params.push(maxPrice);\n    }\n    \n    // 获取产品列表\n    const [products] = await connection.execute(\n      `SELECT id, name, description, price, stock_quantity, image_url \n       FROM products \n       ${whereClause} \n       ORDER BY created_at DESC \n       LIMIT ? OFFSET ?`,\n      [...params, parseInt(limit), parseInt(offset)]\n    );\n    \n    // 获取总数\n    const [countResult] = await connection.execute(\n      `SELECT COUNT(*) as total FROM products ${whereClause}`,\n      params\n    );\n    \n    const total = countResult[0].total;\n    \n    res.json({\n      products,\n      pagination: {\n        page: parseInt(page),\n        limit: parseInt(limit),\n        total,\n        pages: Math.ceil(total / limit)\n      }\n    });\n    \n  } catch (error) {\n    console.error('获取产品列表错误:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  } finally {\n    connection.release();\n  }\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
    ],
    resources: [
      { name: "MySQL官方文档", url: "https://dev.mysql.com/doc/" },
      { name: "MySQL教程", url: "https://www.runoob.com/mysql/mysql-tutorial.html" },
      { name: "MySQL性能优化", url: "https://dev.mysql.com/doc/refman/8.0/en/optimization.html" }
    ]
  },

  Redis: {
    title: "Redis 内存数据库",
    content: `Redis 是一个开源的内存中数据结构存储系统，可用作数据库、缓存和消息代理。

## 核心特性
- **内存存储**: 数据存储在内存中，访问速度极快
- **多数据结构**: 支持字符串、哈希、列表、集合等多种数据结构
- **持久化**: 支持RDB和AOF两种持久化方式
- **高可用**: 支持主从复制和哨兵模式

## 主要优势
- **高性能**: 读写操作都非常快速
- **原子操作**: 所有操作都是原子性的
- **丰富功能**: 支持发布订阅、事务、Lua脚本
- **易扩展**: 支持集群模式水平扩展

## 数据类型
- **String**: 字符串类型，最基础的数据类型
- **Hash**: 哈希表，适合存储对象
- **List**: 列表，支持队列和栈操作
- **Set**: 集合，无重复元素
- **Sorted Set**: 有序集合，带权重排序

## 使用场景
- **缓存**: 提升数据访问速度
- **会话存储**: 存储用户会话信息
- **消息队列**: 实现简单的消息队列
- **实时统计**: 计数器、排行榜等

## 最佳实践
1. 合理设置过期时间
2. 使用合适的数据结构
3. 监控内存使用情况
4. 配置合适的持久化策略`,
    examples: [
      "// Redis 基础操作示例\nconst redis = require('redis');\nconst client = redis.createClient({\n  host: 'localhost',\n  port: 6379,\n  password: 'your_redis_password', // 如果设置了密码\n  db: 0 // 使用第0号数据库\n});\n\nclient.on('connect', () => {\n  console.log('Connected to Redis');\n});\n\nclient.on('error', (err) => {\n  console.error('Redis error:', err);\n});\n\n// 字符串操作\nasync function stringOperations() {\n  try {\n    // 设置键值对\n    await client.set('user:1:name', 'John Doe');\n    await client.set('user:1:email', 'john@example.com');\n    \n    // 设置带过期时间的键值对（10分钟）\n    await client.setex('session:abc123', 600, JSON.stringify({\n      userId: 1,\n      username: 'john_doe',\n      loginTime: new Date().toISOString()\n    }));\n    \n    // 获取值\n    const name = await client.get('user:1:name');\n    const session = await client.get('session:abc123');\n    \n    console.log('Name:', name);\n    console.log('Session:', JSON.parse(session));\n    \n    // 原子递增操作\n    await client.incr('page_views');\n    await client.incrby('user:1:points', 100);\n    \n    const views = await client.get('page_views');\n    const points = await client.get('user:1:points');\n    \n    console.log('Page views:', views);\n    console.log('User points:', points);\n    \n  } catch (error) {\n    console.error('String operations error:', error);\n  }\n}",
      "// Redis 高级数据结构操作\nasync function advancedOperations() {\n  try {\n    // 哈希操作 - 存储用户信息\n    await client.hset('user:2', {\n      'name': 'Jane Smith',\n      'email': 'jane@example.com',\n      'age': '28',\n      'city': 'New York'\n    });\n    \n    // 获取哈希字段\n    const userName = await client.hget('user:2', 'name');\n    const userInfo = await client.hgetall('user:2');\n    \n    console.log('User name:', userName);\n    console.log('User info:', userInfo);\n    \n    // 列表操作 - 消息队列\n    await client.lpush('message_queue', \n      JSON.stringify({ type: 'email', to: 'user@example.com', content: 'Welcome!' }),\n      JSON.stringify({ type: 'sms', to: '+1234567890', content: 'Verification code: 123456' })\n    );\n    \n    // 从队列中取出消息\n    const message = await client.rpop('message_queue');\n    console.log('Dequeued message:', JSON.parse(message));\n    \n    // 获取队列长度\n    const queueLength = await client.llen('message_queue');\n    console.log('Queue length:', queueLength);\n    \n    // 集合操作 - 标签系统\n    await client.sadd('user:1:tags', 'developer', 'javascript', 'nodejs');\n    await client.sadd('user:2:tags', 'designer', 'css', 'javascript');\n    \n    // 获取用户标签\n    const user1Tags = await client.smembers('user:1:tags');\n    console.log('User 1 tags:', user1Tags);\n    \n    // 查找共同标签\n    const commonTags = await client.sinter('user:1:tags', 'user:2:tags');\n    console.log('Common tags:', commonTags);\n    \n    // 有序集合操作 - 排行榜\n    await client.zadd('leaderboard', \n      1500, 'player1',\n      2000, 'player2', \n      1800, 'player3',\n      2200, 'player4'\n    );\n    \n    // 获取排行榜前3名\n    const topPlayers = await client.zrevrange('leaderboard', 0, 2, 'WITHSCORES');\n    console.log('Top players:', topPlayers);\n    \n    // 获取玩家排名\n    const player1Rank = await client.zrevrank('leaderboard', 'player1');\n    console.log('Player1 rank:', player1Rank + 1); // Redis排名从0开始\n    \n  } catch (error) {\n    console.error('Advanced operations error:', error);\n  }\n}",
      "// Redis 与 Express.js 集成 - 缓存和会话管理\nconst express = require('express');\nconst session = require('express-session');\nconst RedisStore = require('connect-redis')(session);\nconst redis = require('redis');\n\nconst app = express();\nconst redisClient = redis.createClient();\n\napp.use(express.json());\n\n// 使用 Redis 存储会话\napp.use(session({\n  store: new RedisStore({ client: redisClient }),\n  secret: 'your_session_secret',\n  resave: false,\n  saveUninitialized: false,\n  cookie: { \n    secure: false, // 在生产环境中设置为 true（需要 HTTPS）\n    httpOnly: true,\n    maxAge: 1000 * 60 * 60 * 24 // 24小时\n  }\n}));\n\n// 缓存中间件\nconst cache = (duration) => {\n  return async (req, res, next) => {\n    const key = `cache:${req.originalUrl}`;\n    \n    try {\n      const cachedResponse = await redisClient.get(key);\n      \n      if (cachedResponse) {\n        console.log('Cache hit for:', key);\n        return res.json(JSON.parse(cachedResponse));\n      }\n      \n      // 如果没有缓存，继续处理请求\n      res.sendResponse = res.json;\n      res.json = (body) => {\n        // 缓存响应\n        redisClient.setex(key, duration, JSON.stringify(body));\n        res.sendResponse(body);\n      };\n      \n      next();\n    } catch (error) {\n      console.error('Cache middleware error:', error);\n      next();\n    }\n  };\n};\n\n// 登录接口\napp.post('/api/login', async (req, res) => {\n  try {\n    const { username, password } = req.body;\n    \n    // 检查登录失败次数\n    const failKey = `login_fail:${username}`;\n    const failCount = await redisClient.get(failKey) || 0;\n    \n    if (failCount >= 5) {\n      return res.status(429).json({ \n        error: '登录失败次数过多，请30分钟后重试' \n      });\n    }\n    \n    // 模拟用户验证\n    if (username === 'admin' && password === 'password') {\n      // 登录成功，清除失败计数\n      await redisClient.del(failKey);\n      \n      // 设置会话\n      req.session.user = {\n        id: 1,\n        username: 'admin',\n        role: 'admin'\n      };\n      \n      // 记录在线用户\n      await redisClient.sadd('online_users', username);\n      \n      res.json({ message: '登录成功', user: req.session.user });\n    } else {\n      // 登录失败，增加失败计数\n      await redisClient.incr(failKey);\n      await redisClient.expire(failKey, 1800); // 30分钟过期\n      \n      res.status(401).json({ error: '用户名或密码错误' });\n    }\n  } catch (error) {\n    console.error('Login error:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  }\n});\n\n// 获取用户信息（带缓存）\napp.get('/api/users/:id', cache(300), async (req, res) => {\n  try {\n    const { id } = req.params;\n    \n    // 模拟数据库查询延迟\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    \n    const user = {\n      id: parseInt(id),\n      username: `user${id}`,\n      email: `user${id}@example.com`,\n      createdAt: new Date().toISOString()\n    };\n    \n    res.json(user);\n  } catch (error) {\n    console.error('Get user error:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  }\n});\n\n// 获取在线用户统计\napp.get('/api/stats/online', async (req, res) => {\n  try {\n    const onlineCount = await redisClient.scard('online_users');\n    const onlineUsers = await redisClient.smembers('online_users');\n    \n    res.json({\n      count: onlineCount,\n      users: onlineUsers\n    });\n  } catch (error) {\n    console.error('Stats error:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  }\n});\n\n// 实时计数器\napp.post('/api/page-view', async (req, res) => {\n  try {\n    const { page } = req.body;\n    const today = new Date().toISOString().split('T')[0];\n    \n    // 增加页面浏览量\n    await redisClient.incr(`pv:${page}:${today}`);\n    await redisClient.incr(`pv:total:${today}`);\n    \n    // 设置过期时间（7天）\n    await redisClient.expire(`pv:${page}:${today}`, 604800);\n    await redisClient.expire(`pv:total:${today}`, 604800);\n    \n    const pageViews = await redisClient.get(`pv:${page}:${today}`);\n    \n    res.json({ \n      page, \n      views: parseInt(pageViews),\n      date: today \n    });\n  } catch (error) {\n    console.error('Page view error:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  }\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
    ],
    resources: [
      { name: "Redis官方文档", url: "https://redis.io/documentation" },
      { name: "Redis命令参考", url: "https://redis.io/commands" },
      { name: "Redis最佳实践", url: "https://redis.io/docs/manual/patterns/" }
    ]
  },

  // === Backend & Network ===
  Node: {
    title: "Node.js 服务端JavaScript",
    content: `Node.js 是一个基于Chrome V8引擎的JavaScript运行时，用于构建快速、可扩展的网络应用。

## 核心特性
- **事件驱动**: 基于事件驱动的非阻塞I/O模型
- **单线程**: 主线程单线程，通过事件循环处理请求
- **跨平台**: 支持Windows、Linux、macOS
- **NPM生态**: 世界上最大的开源库生态系统

## 主要优势
- **高性能**: 非阻塞I/O带来高并发性能
- **统一语言**: 前后端使用相同的JavaScript语言
- **快速开发**: 丰富的第三方模块和工具
- **活跃社区**: 大量的开源项目和社区支持

## 核心模块
- **fs**: 文件系统操作
- **http/https**: HTTP服务器和客户端
- **path**: 路径处理工具
- **os**: 操作系统相关实用程序
- **crypto**: 加密功能
- **stream**: 流处理

## 事件循环
- **调用栈**: 同步代码执行
- **回调队列**: 异步回调等待执行
- **事件循环**: 协调调用栈和回调队列
- **微任务**: Promise等高优先级任务

## 最佳实践
1. 合理使用异步编程模式
2. 错误处理和异常捕获
3. 使用流处理大文件
4. 监控内存使用和性能`,
    examples: [
      "// Node.js 基础服务器和核心模块\nconst http = require('http');\nconst fs = require('fs');\nconst path = require('path');\nconst url = require('url');\nconst querystring = require('querystring');\n\n// 创建HTTP服务器\nconst server = http.createServer((req, res) => {\n  const parsedUrl = url.parse(req.url, true);\n  const pathname = parsedUrl.pathname;\n  const method = req.method;\n  \n  console.log(`${method} ${pathname}`);\n  \n  // 设置CORS头\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');\n  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n  \n  if (method === 'OPTIONS') {\n    res.writeHead(200);\n    res.end();\n    return;\n  }\n  \n  // 路由处理\n  if (pathname === '/' && method === 'GET') {\n    // 返回HTML首页\n    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {\n      if (err) {\n        res.writeHead(500, { 'Content-Type': 'text/plain' });\n        res.end('Internal Server Error');\n        return;\n      }\n      res.writeHead(200, { 'Content-Type': 'text/html' });\n      res.end(data);\n    });\n    \n  } else if (pathname === '/api/users' && method === 'GET') {\n    // 返回用户列表\n    const users = [\n      { id: 1, name: 'John Doe', email: 'john@example.com' },\n      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }\n    ];\n    \n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify(users));\n    \n  } else if (pathname === '/api/users' && method === 'POST') {\n    // 创建新用户\n    let body = '';\n    \n    req.on('data', chunk => {\n      body += chunk.toString();\n    });\n    \n    req.on('end', () => {\n      try {\n        const userData = JSON.parse(body);\n        \n        // 简单验证\n        if (!userData.name || !userData.email) {\n          res.writeHead(400, { 'Content-Type': 'application/json' });\n          res.end(JSON.stringify({ error: '姓名和邮箱必填' }));\n          return;\n        }\n        \n        // 模拟保存用户\n        const newUser = {\n          id: Date.now(),\n          ...userData,\n          createdAt: new Date().toISOString()\n        };\n        \n        res.writeHead(201, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify(newUser));\n        \n      } catch (error) {\n        res.writeHead(400, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify({ error: '无效的JSON数据' }));\n      }\n    });\n    \n  } else if (pathname.startsWith('/static/')) {\n    // 静态文件服务\n    const filePath = path.join(__dirname, 'public', pathname.replace('/static/', ''));\n    \n    fs.stat(filePath, (err, stats) => {\n      if (err) {\n        res.writeHead(404, { 'Content-Type': 'text/plain' });\n        res.end('File Not Found');\n        return;\n      }\n      \n      if (stats.isFile()) {\n        const ext = path.extname(filePath);\n        const contentType = getContentType(ext);\n        \n        const stream = fs.createReadStream(filePath);\n        res.writeHead(200, { 'Content-Type': contentType });\n        stream.pipe(res);\n      } else {\n        res.writeHead(403, { 'Content-Type': 'text/plain' });\n        res.end('Forbidden');\n      }\n    });\n    \n  } else {\n    // 404处理\n    res.writeHead(404, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({ error: 'Route not found' }));\n  }\n});\n\n// 内容类型映射\nfunction getContentType(ext) {\n  const types = {\n    '.html': 'text/html',\n    '.css': 'text/css',\n    '.js': 'text/javascript',\n    '.json': 'application/json',\n    '.png': 'image/png',\n    '.jpg': 'image/jpeg',\n    '.gif': 'image/gif'\n  };\n  return types[ext] || 'application/octet-stream';\n}\n\nconst PORT = process.env.PORT || 3000;\n\nserver.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});",
      "// Node.js 文件系统和流处理\nconst fs = require('fs');\nconst path = require('path');\nconst crypto = require('crypto');\nconst { pipeline } = require('stream');\nconst { promisify } = require('util');\n\n// 将callback风格的函数转换为Promise\nconst readFile = promisify(fs.readFile);\nconst writeFile = promisify(fs.writeFile);\nconst mkdir = promisify(fs.mkdir);\n\n// 文件操作工具类\nclass FileManager {\n  constructor(baseDir = './uploads') {\n    this.baseDir = baseDir;\n    this.ensureDirectory();\n  }\n  \n  async ensureDirectory() {\n    try {\n      await mkdir(this.baseDir, { recursive: true });\n    } catch (error) {\n      console.error('创建目录失败:', error);\n    }\n  }\n  \n  // 读取文件内容\n  async readFileContent(filename) {\n    try {\n      const filePath = path.join(this.baseDir, filename);\n      const content = await readFile(filePath, 'utf8');\n      return { success: true, content };\n    } catch (error) {\n      return { success: false, error: error.message };\n    }\n  }\n  \n  // 写入文件\n  async writeFileContent(filename, content) {\n    try {\n      const filePath = path.join(this.baseDir, filename);\n      await writeFile(filePath, content, 'utf8');\n      return { success: true, filePath };\n    } catch (error) {\n      return { success: false, error: error.message };\n    }\n  }\n  \n  // 使用流复制大文件\n  async copyLargeFile(sourcePath, destFilename) {\n    return new Promise((resolve, reject) => {\n      const destPath = path.join(this.baseDir, destFilename);\n      const readStream = fs.createReadStream(sourcePath);\n      const writeStream = fs.createWriteStream(destPath);\n      \n      pipeline(readStream, writeStream, (error) => {\n        if (error) {\n          reject(error);\n        } else {\n          resolve({ success: true, destPath });\n        }\n      });\n    });\n  }\n  \n  // 计算文件MD5哈希\n  async calculateFileHash(filename) {\n    return new Promise((resolve, reject) => {\n      const filePath = path.join(this.baseDir, filename);\n      const hash = crypto.createHash('md5');\n      const stream = fs.createReadStream(filePath);\n      \n      stream.on('data', (chunk) => {\n        hash.update(chunk);\n      });\n      \n      stream.on('end', () => {\n        resolve(hash.digest('hex'));\n      });\n      \n      stream.on('error', (error) => {\n        reject(error);\n      });\n    });\n  }\n  \n  // 获取目录中的所有文件\n  async listFiles() {\n    try {\n      const files = await promisify(fs.readdir)(this.baseDir, { withFileTypes: true });\n      \n      const fileList = await Promise.all(\n        files.map(async (file) => {\n          const filePath = path.join(this.baseDir, file.name);\n          const stats = await promisify(fs.stat)(filePath);\n          \n          return {\n            name: file.name,\n            isDirectory: file.isDirectory(),\n            size: stats.size,\n            createdAt: stats.birthtime,\n            modifiedAt: stats.mtime,\n            extension: path.extname(file.name)\n          };\n        })\n      );\n      \n      return { success: true, files: fileList };\n    } catch (error) {\n      return { success: false, error: error.message };\n    }\n  }\n  \n  // 监听文件变化\n  watchDirectory(callback) {\n    const watcher = fs.watch(this.baseDir, { recursive: true }, (eventType, filename) => {\n      if (filename) {\n        callback({\n          eventType,\n          filename,\n          fullPath: path.join(this.baseDir, filename),\n          timestamp: new Date().toISOString()\n        });\n      }\n    });\n    \n    return watcher;\n  }\n}\n\n// 使用示例\nasync function demonstrateFileOperations() {\n  const fm = new FileManager('./data');\n  \n  try {\n    // 写入文件\n    const writeResult = await fm.writeFileContent('example.txt', 'Hello, Node.js!');\n    console.log('写入结果:', writeResult);\n    \n    // 读取文件\n    const readResult = await fm.readFileContent('example.txt');\n    console.log('读取结果:', readResult);\n    \n    // 计算文件哈希\n    const hash = await fm.calculateFileHash('example.txt');\n    console.log('文件哈希:', hash);\n    \n    // 列出所有文件\n    const listResult = await fm.listFiles();\n    console.log('文件列表:', listResult);\n    \n    // 监听文件变化\n    const watcher = fm.watchDirectory((event) => {\n      console.log('文件变化:', event);\n    });\n    \n    // 5秒后停止监听\n    setTimeout(() => {\n      watcher.close();\n      console.log('停止文件监听');\n    }, 5000);\n    \n  } catch (error) {\n    console.error('操作失败:', error);\n  }\n}\n\ndemonstrateFileOperations();",
      "// Node.js 进程管理和性能监控\nconst os = require('os');\nconst process = require('process');\nconst cluster = require('cluster');\nconst numCPUs = os.cpus().length;\n\n// 系统信息监控\nclass SystemMonitor {\n  constructor() {\n    this.startTime = Date.now();\n    this.requestCount = 0;\n    this.errorCount = 0;\n  }\n  \n  // 获取系统信息\n  getSystemInfo() {\n    return {\n      // 系统基本信息\n      platform: os.platform(),\n      arch: os.arch(),\n      hostname: os.hostname(),\n      uptime: os.uptime(),\n      \n      // CPU信息\n      cpus: os.cpus().length,\n      loadavg: os.loadavg(),\n      \n      // 内存信息\n      totalMemory: os.totalmem(),\n      freeMemory: os.freemem(),\n      memoryUsage: process.memoryUsage(),\n      \n      // 进程信息\n      pid: process.pid,\n      processUptime: process.uptime(),\n      nodeVersion: process.version,\n      \n      // 应用统计\n      requestCount: this.requestCount,\n      errorCount: this.errorCount,\n      startTime: this.startTime\n    };\n  }\n  \n  // 格式化内存大小\n  formatBytes(bytes) {\n    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];\n    if (bytes === 0) return '0 Bytes';\n    const i = Math.floor(Math.log(bytes) / Math.log(1024));\n    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];\n  }\n  \n  // 获取格式化的系统状态\n  getFormattedStatus() {\n    const info = this.getSystemInfo();\n    const memUsage = info.memoryUsage;\n    \n    return {\n      system: {\n        platform: info.platform,\n        arch: info.arch,\n        cpus: info.cpus,\n        hostname: info.hostname,\n        uptime: `${Math.floor(info.uptime / 3600)}h ${Math.floor((info.uptime % 3600) / 60)}m`\n      },\n      memory: {\n        total: this.formatBytes(info.totalMemory),\n        free: this.formatBytes(info.freeMemory),\n        used: this.formatBytes(info.totalMemory - info.freeMemory),\n        process: {\n          rss: this.formatBytes(memUsage.rss),\n          heapTotal: this.formatBytes(memUsage.heapTotal),\n          heapUsed: this.formatBytes(memUsage.heapUsed),\n          external: this.formatBytes(memUsage.external)\n        }\n      },\n      cpu: {\n        count: info.cpus,\n        loadAverage: info.loadavg.map(avg => Math.round(avg * 100) / 100)\n      },\n      application: {\n        pid: info.pid,\n        uptime: `${Math.floor(info.processUptime / 3600)}h ${Math.floor((info.processUptime % 3600) / 60)}m`,\n        nodeVersion: info.nodeVersion,\n        requests: info.requestCount,\n        errors: info.errorCount\n      }\n    };\n  }\n  \n  // 增加请求计数\n  incrementRequest() {\n    this.requestCount++;\n  }\n  \n  // 增加错误计数\n  incrementError() {\n    this.errorCount++;\n  }\n  \n  // 开始性能监控\n  startMonitoring(interval = 10000) {\n    setInterval(() => {\n      const status = this.getFormattedStatus();\n      console.log('=== 系统状态 ===');\n      console.log('CPU负载:', status.cpu.loadAverage);\n      console.log('内存使用:', status.memory.process.heapUsed, '/', status.memory.process.heapTotal);\n      console.log('总请求数:', status.application.requests);\n      console.log('错误数:', status.application.errors);\n      console.log('运行时间:', status.application.uptime);\n      console.log('==================');\n    }, interval);\n  }\n}\n\n// 集群管理\nif (cluster.isMaster) {\n  console.log(`主进程 ${process.pid} 正在启动`);\n  console.log(`CPU核心数: ${numCPUs}`);\n  \n  // 启动工作进程\n  const numWorkers = Math.min(numCPUs, 4); // 最多4个工作进程\n  for (let i = 0; i < numWorkers; i++) {\n    cluster.fork();\n  }\n  \n  // 监听工作进程事件\n  cluster.on('online', (worker) => {\n    console.log(`工作进程 ${worker.process.pid} 已启动`);\n  });\n  \n  cluster.on('exit', (worker, code, signal) => {\n    console.log(`工作进程 ${worker.process.pid} 已退出`);\n    console.log('启动新的工作进程...');\n    cluster.fork();\n  });\n  \n  // 优雅关闭\n  process.on('SIGTERM', () => {\n    console.log('收到SIGTERM信号，开始优雅关闭...');\n    \n    for (const id in cluster.workers) {\n      cluster.workers[id].kill();\n    }\n  });\n  \n} else {\n  // 工作进程代码\n  const http = require('http');\n  const monitor = new SystemMonitor();\n  \n  // 启动监控（仅在一个工作进程中）\n  if (cluster.worker.id === 1) {\n    monitor.startMonitoring(30000); // 每30秒监控一次\n  }\n  \n  const server = http.createServer((req, res) => {\n    monitor.incrementRequest();\n    \n    try {\n      if (req.url === '/health') {\n        res.writeHead(200, { 'Content-Type': 'application/json' });\n        res.end(JSON.stringify({\n          status: 'ok',\n          worker: cluster.worker.id,\n          pid: process.pid,\n          ...monitor.getFormattedStatus()\n        }));\n      } else {\n        res.writeHead(200, { 'Content-Type': 'text/plain' });\n        res.end(`Hello from worker ${cluster.worker.id} (PID: ${process.pid})`);\n      }\n    } catch (error) {\n      monitor.incrementError();\n      console.error('请求处理错误:', error);\n      res.writeHead(500, { 'Content-Type': 'text/plain' });\n      res.end('Internal Server Error');\n    }\n  });\n  \n  const PORT = process.env.PORT || 3000;\n  server.listen(PORT, () => {\n    console.log(`工作进程 ${process.pid} 在端口 ${PORT} 上监听`);\n  });\n  \n  // 处理未捕获的异常\n  process.on('uncaughtException', (error) => {\n    console.error('未捕获的异常:', error);\n    monitor.incrementError();\n    process.exit(1);\n  });\n  \n  process.on('unhandledRejection', (reason, promise) => {\n    console.error('未处理的Promise拒绝:', reason);\n    monitor.incrementError();\n  });\n}"
    ],
    resources: [
      { name: "Node.js官方文档", url: "https://nodejs.org/docs/latest/api/" },
      { name: "NPM包管理器", url: "https://www.npmjs.com/" },
      { name: "Node.js最佳实践", url: "https://github.com/goldbergyoni/nodebestpractices" }
    ]
  },

  Express: {
    title: "Express.js Web应用框架",
    content: `Express.js 是Node.js最流行的Web应用框架，提供了一套强大的特性来开发Web和移动应用。

## 核心特性
- **轻量级**: 最小化且灵活的框架
- **路由系统**: 强大的路由处理机制
- **中间件**: 丰富的中间件生态系统
- **模板引擎**: 支持多种模板引擎

## 主要组件
- **Application**: 主应用对象
- **Router**: 路由管理器
- **Request**: HTTP请求对象
- **Response**: HTTP响应对象
- **Middleware**: 中间件函数

## 路由方法
- **app.get()**: 处理GET请求
- **app.post()**: 处理POST请求
- **app.put()**: 处理PUT请求
- **app.delete()**: 处理DELETE请求
- **app.use()**: 使用中间件

## 中间件类型
- **应用级中间件**: 绑定到app实例
- **路由级中间件**: 绑定到router实例
- **错误处理中间件**: 处理错误的特殊中间件
- **内置中间件**: Express内置的中间件
- **第三方中间件**: 第三方开发的中间件

## 最佳实践
1. 合理组织路由结构
2. 使用适当的中间件
3. 实现错误处理机制
4. 配置安全相关的中间件`,
    examples: [
      "// Express.js 基础应用搭建\nconst express = require('express');\nconst cors = require('cors');\nconst helmet = require('helmet');\nconst morgan = require('morgan');\nconst rateLimit = require('express-rate-limit');\n\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// 基础中间件配置\napp.use(helmet()); // 安全相关的HTTP头\napp.use(cors()); // 跨域资源共享\napp.use(morgan('combined')); // 日志记录\napp.use(express.json({ limit: '10mb' })); // 解析JSON请求体\napp.use(express.urlencoded({ extended: true, limit: '10mb' })); // 解析URL编码请求体\napp.use(express.static('public')); // 静态文件服务\n\n// 速率限制\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15分钟\n  max: 100, // 限制每个IP在窗口时间内最多100个请求\n  message: {\n    error: '请求过于频繁，请稍后再试',\n    retryAfter: '15分钟'\n  },\n  standardHeaders: true,\n  legacyHeaders: false\n});\n\napp.use('/api/', limiter);\n\n// 请求日志中间件\napp.use((req, res, next) => {\n  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);\n  req.requestTime = Date.now();\n  next();\n});\n\n// 根路由\napp.get('/', (req, res) => {\n  res.json({\n    message: 'Welcome to Express.js API',\n    version: '1.0.0',\n    timestamp: new Date().toISOString(),\n    endpoints: [\n      'GET /api/users',\n      'POST /api/users',\n      'GET /api/users/:id',\n      'PUT /api/users/:id',\n      'DELETE /api/users/:id'\n    ]\n  });\n});\n\n// 用户数据（模拟数据库）\nlet users = [\n  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },\n  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }\n];\n\nlet nextId = 3;\n\n// 用户相关路由\napp.get('/api/users', (req, res) => {\n  const { page = 1, limit = 10, search } = req.query;\n  const startIndex = (page - 1) * limit;\n  const endIndex = page * limit;\n  \n  let filteredUsers = users;\n  \n  // 搜索功能\n  if (search) {\n    filteredUsers = users.filter(user => \n      user.name.toLowerCase().includes(search.toLowerCase()) ||\n      user.email.toLowerCase().includes(search.toLowerCase())\n    );\n  }\n  \n  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);\n  \n  res.json({\n    users: paginatedUsers,\n    pagination: {\n      page: parseInt(page),\n      limit: parseInt(limit),\n      total: filteredUsers.length,\n      pages: Math.ceil(filteredUsers.length / limit)\n    },\n    requestTime: Date.now() - req.requestTime + 'ms'\n  });\n});\n\n// 获取单个用户\napp.get('/api/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const user = users.find(u => u.id === id);\n  \n  if (!user) {\n    return res.status(404).json({ \n      error: '用户不存在',\n      id: id \n    });\n  }\n  \n  res.json({\n    user,\n    requestTime: Date.now() - req.requestTime + 'ms'\n  });\n});\n\n// 创建用户\napp.post('/api/users', (req, res) => {\n  const { name, email, age } = req.body;\n  \n  // 数据验证\n  if (!name || !email) {\n    return res.status(400).json({\n      error: '姓名和邮箱是必填字段',\n      received: { name, email, age }\n    });\n  }\n  \n  // 邮箱格式验证\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  if (!emailRegex.test(email)) {\n    return res.status(400).json({\n      error: '邮箱格式不正确',\n      email: email\n    });\n  }\n  \n  // 检查邮箱是否已存在\n  const existingUser = users.find(u => u.email === email);\n  if (existingUser) {\n    return res.status(409).json({\n      error: '邮箱已存在',\n      email: email\n    });\n  }\n  \n  const newUser = {\n    id: nextId++,\n    name,\n    email,\n    age: age ? parseInt(age) : null,\n    createdAt: new Date().toISOString()\n  };\n  \n  users.push(newUser);\n  \n  res.status(201).json({\n    message: '用户创建成功',\n    user: newUser,\n    requestTime: Date.now() - req.requestTime + 'ms'\n  });\n});\n\n// 更新用户\napp.put('/api/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const userIndex = users.findIndex(u => u.id === id);\n  \n  if (userIndex === -1) {\n    return res.status(404).json({ error: '用户不存在' });\n  }\n  \n  const { name, email, age } = req.body;\n  \n  // 如果要更新邮箱，检查是否与其他用户冲突\n  if (email && email !== users[userIndex].email) {\n    const existingUser = users.find(u => u.email === email && u.id !== id);\n    if (existingUser) {\n      return res.status(409).json({\n        error: '邮箱已被其他用户使用',\n        email: email\n      });\n    }\n  }\n  \n  // 更新用户信息\n  users[userIndex] = {\n    ...users[userIndex],\n    ...(name && { name }),\n    ...(email && { email }),\n    ...(age !== undefined && { age: parseInt(age) }),\n    updatedAt: new Date().toISOString()\n  };\n  \n  res.json({\n    message: '用户更新成功',\n    user: users[userIndex],\n    requestTime: Date.now() - req.requestTime + 'ms'\n  });\n});\n\n// 删除用户\napp.delete('/api/users/:id', (req, res) => {\n  const id = parseInt(req.params.id);\n  const userIndex = users.findIndex(u => u.id === id);\n  \n  if (userIndex === -1) {\n    return res.status(404).json({ error: '用户不存在' });\n  }\n  \n  const deletedUser = users.splice(userIndex, 1)[0];\n  \n  res.json({\n    message: '用户删除成功',\n    deletedUser,\n    requestTime: Date.now() - req.requestTime + 'ms'\n  });\n});\n\n// 健康检查端点\napp.get('/health', (req, res) => {\n  res.json({\n    status: 'ok',\n    timestamp: new Date().toISOString(),\n    uptime: process.uptime(),\n    memory: process.memoryUsage(),\n    userCount: users.length\n  });\n});\n\n// 404错误处理\napp.use('*', (req, res) => {\n  res.status(404).json({\n    error: '路由不存在',\n    method: req.method,\n    path: req.path,\n    timestamp: new Date().toISOString()\n  });\n});\n\n// 全局错误处理中间件\napp.use((error, req, res, next) => {\n  console.error('未处理的错误:', error);\n  \n  res.status(error.status || 500).json({\n    error: error.message || '服务器内部错误',\n    timestamp: new Date().toISOString(),\n    path: req.path,\n    method: req.method\n  });\n});\n\napp.listen(PORT, () => {\n  console.log(`Express服务器运行在端口 ${PORT}`);\n  console.log(`访问 http://localhost:${PORT} 查看API`);\n});",
      "// Express.js 高级路由和中间件\nconst express = require('express');\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\nconst multer = require('multer');\nconst path = require('path');\nconst fs = require('fs');\n\nconst app = express();\napp.use(express.json());\n\n// JWT密钥（生产环境应该使用环境变量）\nconst JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';\n\n// 模拟用户数据库\nconst users = [\n  {\n    id: 1,\n    username: 'admin',\n    email: 'admin@example.com',\n    password: '$2b$10$123', // 实际应用中应该是加密的密码\n    role: 'admin'\n  }\n];\n\n// 文件上传配置\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    const uploadDir = './uploads';\n    if (!fs.existsSync(uploadDir)) {\n      fs.mkdirSync(uploadDir, { recursive: true });\n    }\n    cb(null, uploadDir);\n  },\n  filename: (req, file, cb) => {\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);\n    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));\n  }\n});\n\nconst upload = multer({ \n  storage: storage,\n  limits: {\n    fileSize: 5 * 1024 * 1024 // 5MB限制\n  },\n  fileFilter: (req, file, cb) => {\n    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;\n    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());\n    const mimetype = allowedTypes.test(file.mimetype);\n    \n    if (mimetype && extname) {\n      return cb(null, true);\n    } else {\n      cb(new Error('只允许上传图片、PDF和Word文档'));\n    }\n  }\n});\n\n// 身份验证中间件\nconst authenticateToken = (req, res, next) => {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1];\n  \n  if (!token) {\n    return res.status(401).json({ error: '访问令牌缺失' });\n  }\n  \n  jwt.verify(token, JWT_SECRET, (err, user) => {\n    if (err) {\n      return res.status(403).json({ error: '令牌无效或已过期' });\n    }\n    req.user = user;\n    next();\n  });\n};\n\n// 管理员权限中间件\nconst requireAdmin = (req, res, next) => {\n  if (req.user.role !== 'admin') {\n    return res.status(403).json({ error: '需要管理员权限' });\n  }\n  next();\n};\n\n// 请求验证中间件\nconst validateRequest = (schema) => {\n  return (req, res, next) => {\n    const { error } = schema.validate(req.body);\n    if (error) {\n      return res.status(400).json({\n        error: '请求数据验证失败',\n        details: error.details.map(detail => detail.message)\n      });\n    }\n    next();\n  };\n};\n\n// 登录路由\napp.post('/api/auth/login', async (req, res) => {\n  try {\n    const { username, password } = req.body;\n    \n    // 查找用户\n    const user = users.find(u => u.username === username);\n    if (!user) {\n      return res.status(401).json({ error: '用户名或密码错误' });\n    }\n    \n    // 验证密码（这里简化处理，实际应用中应该使用bcrypt比较）\n    const isPasswordValid = await bcrypt.compare(password, user.password);\n    if (!isPasswordValid) {\n      return res.status(401).json({ error: '用户名或密码错误' });\n    }\n    \n    // 生成JWT令牌\n    const token = jwt.sign(\n      { \n        id: user.id, \n        username: user.username, \n        role: user.role \n      },\n      JWT_SECRET,\n      { expiresIn: '24h' }\n    );\n    \n    res.json({\n      message: '登录成功',\n      token,\n      user: {\n        id: user.id,\n        username: user.username,\n        email: user.email,\n        role: user.role\n      }\n    });\n    \n  } catch (error) {\n    console.error('登录错误:', error);\n    res.status(500).json({ error: '服务器内部错误' });\n  }\n});\n\n// 受保护的路由示例\napp.get('/api/profile', authenticateToken, (req, res) => {\n  const user = users.find(u => u.id === req.user.id);\n  if (!user) {\n    return res.status(404).json({ error: '用户不存在' });\n  }\n  \n  res.json({\n    profile: {\n      id: user.id,\n      username: user.username,\n      email: user.email,\n      role: user.role\n    },\n    tokenInfo: {\n      issuedAt: new Date(req.user.iat * 1000).toISOString(),\n      expiresAt: new Date(req.user.exp * 1000).toISOString()\n    }\n  });\n});\n\n// 管理员专用路由\napp.get('/api/admin/users', authenticateToken, requireAdmin, (req, res) => {\n  res.json({\n    users: users.map(u => ({\n      id: u.id,\n      username: u.username,\n      email: u.email,\n      role: u.role\n    }))\n  });\n});\n\n// 文件上传路由\napp.post('/api/upload', authenticateToken, upload.single('file'), (req, res) => {\n  if (!req.file) {\n    return res.status(400).json({ error: '没有上传文件' });\n  }\n  \n  res.json({\n    message: '文件上传成功',\n    file: {\n      filename: req.file.filename,\n      originalname: req.file.originalname,\n      mimetype: req.file.mimetype,\n      size: req.file.size,\n      path: req.file.path,\n      uploadTime: new Date().toISOString()\n    }\n  });\n});\n\n// 多文件上传\napp.post('/api/upload/multiple', authenticateToken, upload.array('files', 5), (req, res) => {\n  if (!req.files || req.files.length === 0) {\n    return res.status(400).json({ error: '没有上传文件' });\n  }\n  \n  res.json({\n    message: `成功上传 ${req.files.length} 个文件`,\n    files: req.files.map(file => ({\n      filename: file.filename,\n      originalname: file.originalname,\n      mimetype: file.mimetype,\n      size: file.size\n    }))\n  });\n});\n\n// 文件下载路由\napp.get('/api/download/:filename', authenticateToken, (req, res) => {\n  const filename = req.params.filename;\n  const filePath = path.join(__dirname, 'uploads', filename);\n  \n  // 检查文件是否存在\n  if (!fs.existsSync(filePath)) {\n    return res.status(404).json({ error: '文件不存在' });\n  }\n  \n  // 设置下载头\n  res.download(filePath, (err) => {\n    if (err) {\n      console.error('文件下载错误:', err);\n      if (!res.headersSent) {\n        res.status(500).json({ error: '文件下载失败' });\n      }\n    }\n  });\n});\n\n// 路由参数验证中间件示例\napp.param('id', (req, res, next, id) => {\n  const numericId = parseInt(id);\n  if (isNaN(numericId) || numericId < 1) {\n    return res.status(400).json({ error: 'ID必须是正整数' });\n  }\n  req.numericId = numericId;\n  next();\n});\n\n// 使用参数验证的路由\napp.get('/api/items/:id', (req, res) => {\n  res.json({\n    message: `获取ID为 ${req.numericId} 的项目`,\n    id: req.numericId\n  });\n});\n\napp.listen(3000, () => {\n  console.log('高级Express服务器运行在端口3000');\n});",
      "// Express.js 错误处理和日志系统\nconst express = require('express');\nconst winston = require('winston');\nconst expressWinston = require('express-winston');\nconst { v4: uuidv4 } = require('uuid');\n\nconst app = express();\napp.use(express.json());\n\n// 配置Winston日志系统\nconst logger = winston.createLogger({\n  level: 'info',\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.errors({ stack: true }),\n    winston.format.json()\n  ),\n  defaultMeta: { service: 'express-api' },\n  transports: [\n    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),\n    new winston.transports.File({ filename: 'logs/combined.log' }),\n    new winston.transports.Console({\n      format: winston.format.simple()\n    })\n  ]\n});\n\n// 请求ID中间件\napp.use((req, res, next) => {\n  req.requestId = uuidv4();\n  res.setHeader('X-Request-ID', req.requestId);\n  next();\n});\n\n// Express-Winston请求日志\napp.use(expressWinston.logger({\n  winstonInstance: logger,\n  meta: true,\n  msg: 'HTTP {{req.method}} {{req.url}}',\n  expressFormat: true,\n  colorize: false,\n  dynamicMeta: (req, res) => {\n    return {\n      requestId: req.requestId,\n      userAgent: req.get('User-Agent'),\n      ip: req.ip\n    };\n  }\n}));\n\n// 自定义错误类\nclass AppError extends Error {\n  constructor(message, statusCode, isOperational = true) {\n    super(message);\n    this.statusCode = statusCode;\n    this.isOperational = isOperational;\n    this.timestamp = new Date().toISOString();\n    \n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\n// 异步错误处理包装器\nconst catchAsync = (fn) => {\n  return (req, res, next) => {\n    Promise.resolve(fn(req, res, next)).catch(next);\n  };\n};\n\n// 模拟数据库操作\nconst simulateDbOperation = async (shouldFail = false) => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (shouldFail) {\n        reject(new Error('数据库连接失败'));\n      } else {\n        resolve({ id: 1, name: '示例数据' });\n      }\n    }, 100);\n  });\n};\n\n// 路由示例\napp.get('/api/success', catchAsync(async (req, res) => {\n  const data = await simulateDbOperation();\n  \n  logger.info('成功获取数据', { \n    requestId: req.requestId, \n    data: data \n  });\n  \n  res.json({\n    success: true,\n    data,\n    requestId: req.requestId\n  });\n}));\n\napp.get('/api/error', catchAsync(async (req, res, next) => {\n  // 模拟业务逻辑错误\n  throw new AppError('这是一个业务逻辑错误', 400);\n}));\n\napp.get('/api/database-error', catchAsync(async (req, res, next) => {\n  // 模拟数据库错误\n  await simulateDbOperation(true);\n}));\n\napp.get('/api/validation-error', (req, res, next) => {\n  const { email } = req.query;\n  \n  if (!email) {\n    return next(new AppError('邮箱参数是必需的', 400));\n  }\n  \n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  if (!emailRegex.test(email)) {\n    return next(new AppError('邮箱格式无效', 400));\n  }\n  \n  res.json({ \n    message: '邮箱验证通过', \n    email,\n    requestId: req.requestId \n  });\n});\n\n// 404处理\napp.all('*', (req, res, next) => {\n  next(new AppError(`路由 ${req.originalUrl} 不存在`, 404));\n});\n\n// 全局错误处理中间件\napp.use((error, req, res, next) => {\n  error.statusCode = error.statusCode || 500;\n  error.status = error.status || 'error';\n  \n  // 记录错误日志\n  logger.error('应用错误', {\n    requestId: req.requestId,\n    error: {\n      message: error.message,\n      stack: error.stack,\n      statusCode: error.statusCode,\n      isOperational: error.isOperational\n    },\n    request: {\n      method: req.method,\n      url: req.url,\n      headers: req.headers,\n      body: req.body,\n      params: req.params,\n      query: req.query\n    }\n  });\n  \n  // 开发环境返回详细错误信息\n  if (process.env.NODE_ENV === 'development') {\n    res.status(error.statusCode).json({\n      status: error.status,\n      error: error,\n      message: error.message,\n      stack: error.stack,\n      requestId: req.requestId,\n      timestamp: new Date().toISOString()\n    });\n  } else {\n    // 生产环境只返回必要信息\n    if (error.isOperational) {\n      res.status(error.statusCode).json({\n        status: error.status,\n        message: error.message,\n        requestId: req.requestId,\n        timestamp: new Date().toISOString()\n      });\n    } else {\n      res.status(500).json({\n        status: 'error',\n        message: '服务器内部错误',\n        requestId: req.requestId,\n        timestamp: new Date().toISOString()\n      });\n    }\n  }\n});\n\n// Express-Winston错误日志\napp.use(expressWinston.errorLogger({\n  winstonInstance: logger\n}));\n\n// 未捕获异常处理\nprocess.on('uncaughtException', (error) => {\n  logger.error('未捕获异常', { error: error.message, stack: error.stack });\n  console.log('未捕获异常，应用即将退出...');\n  process.exit(1);\n});\n\n// 未处理的Promise拒绝\nprocess.on('unhandledRejection', (reason, promise) => {\n  logger.error('未处理的Promise拒绝', { reason, promise });\n  console.log('未处理的Promise拒绝，应用即将退出...');\n  process.exit(1);\n});\n\nconst PORT = process.env.PORT || 3000;\n\nconst server = app.listen(PORT, () => {\n  logger.info(`Express服务器启动`, { port: PORT, env: process.env.NODE_ENV });\n  console.log(`服务器运行在端口 ${PORT}`);\n});\n\n// 优雅关闭\nprocess.on('SIGTERM', () => {\n  logger.info('收到SIGTERM信号，开始优雅关闭');\n  server.close(() => {\n    logger.info('进程已终止');\n    process.exit(0);\n  });\n});\n\nprocess.on('SIGINT', () => {\n  logger.info('收到SIGINT信号，开始优雅关闭');\n  server.close(() => {\n    logger.info('进程已终止');\n    process.exit(0);\n  });\n});"
    ],
    resources: [
      { name: "Express.js官方文档", url: "https://expressjs.com/" },
      { name: "Express.js中间件", url: "https://expressjs.com/en/resources/middleware.html" },
      { name: "Express.js最佳实践", url: "https://expressjs.com/en/advanced/best-practice-security.html" }
    ]
  },
  
  // === Build Tools ===
  Parcel: {
    title: "Parcel 零配置构建工具",
    content: `Parcel 是一个快速、零配置的Web应用程序打包工具，适用于不同经验水平的开发者。

## 核心特性
- **零配置**: 开箱即用，无需复杂配置
- **快速构建**: 多核心并行处理，极快的构建速度
- **热模块替换**: 快速的热重载开发体验
- **自动代码拆分**: 智能的代码分割和懒加载

## 支持的资源类型
- **JavaScript**: ES6+, TypeScript, JSX
- **样式**: CSS, Sass, Less, Stylus
- **模板**: HTML, Pug, Handlebars
- **图片**: PNG, JPG, SVG, WebP
- **字体**: WOFF, WOFF2, TTF, OTF

## 技术优势
- **开发友好**: 内置开发服务器和错误覆盖
- **生产优化**: 自动压缩、Tree Shaking、作用域提升
- **插件系统**: 丰富的插件生态系统
- **跨平台**: 支持多种目标平台

## 最佳实践
1. 使用.parcelrc配置文件进行自定义配置
2. 合理使用动态导入进行代码分割
3. 配置browserslist指定目标浏览器
4. 使用环境变量管理不同构建环境`,
    examples: [
      "// Parcel 项目初始化和基本使用\n// package.json\n{\n  \"name\": \"my-parcel-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"start\": \"parcel index.html\",\n    \"build\": \"parcel build index.html\",\n    \"clean\": \"rimraf dist .parcel-cache\"\n  },\n  \"devDependencies\": {\n    \"parcel\": \"^2.10.0\"\n  }\n}\n\n// index.html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parcel App</title>\n</head>\n<body>\n  <div id=\"app\"></div>\n  <script type=\"module\" src=\"./src/index.js\"></script>\n</body>\n</html>\n\n// src/index.js\nimport './styles.css';\nimport { createApp } from './app';\n\nconst app = createApp();\ndocument.getElementById('app').appendChild(app);",
      "// Parcel 高级配置和优化\n// .parcelrc 配置文件\n{\n  \"extends\": \"@parcel/config-default\",\n  \"transformers\": {\n    \"*.{ts,tsx}\": [\"@parcel/transformer-typescript-types\", \"@parcel/transformer-typescript-tsc\"],\n    \"*.{jpg,png}\": [\"@parcel/transformer-image\"]\n  },\n  \"optimizers\": {\n    \"*.{js,mjs,jsm,jsx,ts,tsx}\": [\"@parcel/optimizer-swc\"],\n    \"*.css\": [\"@parcel/optimizer-css\"],\n    \"*.{png,jpg,jpeg,webp}\": [\"@parcel/optimizer-imagemin\"]\n  }\n}\n\n// 代码分割和懒加载\n// src/router.js\nconst routes = {\n  '/': () => import('./pages/Home'),\n  '/about': () => import('./pages/About'),\n  '/contact': () => import('./pages/Contact')\n};\n\nclass Router {\n  constructor() {\n    this.currentComponent = null;\n    this.init();\n  }\n\n  init() {\n    window.addEventListener('popstate', () => this.route());\n    this.route();\n  }\n\n  async route() {\n    const path = window.location.pathname;\n    const loadComponent = routes[path] || routes['/'];\n    \n    try {\n      const module = await loadComponent();\n      const Component = module.default;\n      \n      if (this.currentComponent) {\n        this.currentComponent.destroy();\n      }\n      \n      this.currentComponent = new Component();\n      document.getElementById('app').replaceChildren(this.currentComponent.render());\n    } catch (error) {\n      console.error('路由加载失败:', error);\n    }\n  }\n}\n\nexport default Router;",
      "// Parcel 环境变量和多目标构建\n// .env 文件\nNODE_ENV=development\nAPI_BASE_URL=http://localhost:3000/api\nAPP_VERSION=1.0.0\nDEBUG=true\n\n// src/config.js\nconst config = {\n  apiBaseUrl: process.env.API_BASE_URL || 'https://api.production.com',\n  version: process.env.APP_VERSION || '1.0.0',\n  debug: process.env.DEBUG === 'true',\n  isDevelopment: process.env.NODE_ENV === 'development',\n  isProduction: process.env.NODE_ENV === 'production'\n};\n\nexport default config;\n\n// src/api.js\nimport config from './config';\n\nclass ApiClient {\n  constructor() {\n    this.baseUrl = config.apiBaseUrl;\n    this.debug = config.debug;\n  }\n\n  async request(endpoint, options = {}) {\n    const url = `${this.baseUrl}${endpoint}`;\n    \n    const defaultOptions = {\n      headers: {\n        'Content-Type': 'application/json',\n        'X-App-Version': config.version\n      }\n    };\n\n    const finalOptions = { ...defaultOptions, ...options };\n\n    if (this.debug) {\n      console.log(`API Request: ${options.method || 'GET'} ${url}`, finalOptions);\n    }\n\n    try {\n      const response = await fetch(url, finalOptions);\n      \n      if (!response.ok) {\n        throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n      }\n\n      const data = await response.json();\n      \n      if (this.debug) {\n        console.log('API Response:', data);\n      }\n\n      return data;\n    } catch (error) {\n      console.error('API请求失败:', error);\n      throw error;\n    }\n  }\n}\n\nexport default new ApiClient();"
    ],
    resources: [
      { "name": "Parcel官方文档", "url": "https://parceljs.org/" },
      { "name": "Parcel快速开始", "url": "https://parceljs.org/getting-started/webapp/" },
      { "name": "Parcel配置指南", "url": "https://parceljs.org/features/parcel-config/" }
    ]
  },

  PostCSS: {
    title: "PostCSS CSS后处理器",
    content: `PostCSS 是一个用JavaScript转换CSS的工具，通过插件系统提供强大的CSS处理能力。

## 核心概念
- **插件架构**: 基于插件的模块化CSS处理系统
- **AST转换**: 将CSS解析为抽象语法树进行处理
- **自动化处理**: 自动添加浏览器前缀、优化CSS代码
- **生态丰富**: 拥有丰富的插件生态系统

## 主要功能
- **Autoprefixer**: 自动添加浏览器前缀
- **CSS压缩**: 代码压缩和优化
- **语法转换**: 未来CSS语法转换为兼容语法
- **代码检查**: CSS代码质量检查和修复

## 技术优势
- **高性能**: 比Sass等预处理器更快的处理速度
- **可定制**: 可以根据项目需求选择所需插件
- **标准兼容**: 支持最新CSS标准和实验性功能
- **工具集成**: 与各种构建工具无缝集成

## 最佳实践
1. 根据项目需求选择合适的插件
2. 使用browserslist配置目标浏览器
3. 合理配置插件执行顺序
4. 定期更新插件版本保持最新特性`,
    examples: [
      "// PostCSS 配置文件\n// postcss.config.js\nmodule.exports = {\n  plugins: [\n    require('autoprefixer')({\n      overrideBrowserslist: [\n        '> 1%',\n        'last 3 versions',\n        'ie >= 9',\n        'ios >= 8',\n        'android >= 4.3'\n      ]\n    }),\n    require('postcss-preset-env')({\n      stage: 3,\n      features: {\n        'nesting-rules': true,\n        'custom-properties': true,\n        'custom-media-queries': true\n      }\n    }),\n    require('cssnano')({\n      preset: 'default'\n    })\n  ]\n};",
      "// PostCSS与Webpack集成\n// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader',\n          {\n            loader: 'postcss-loader',\n            options: {\n              postcssOptions: {\n                plugins: [\n                  ['autoprefixer', {}],\n                  ['postcss-preset-env', {\n                    stage: 1\n                  }],\n                  ['cssnano', {\n                    preset: 'default'\n                  }]\n                ]\n              }\n            }\n          }\n        ]\n      }\n    ]\n  }\n};",
      "// 使用PostCSS的现代CSS功能\n/* 源CSS文件 */\n:root {\n  --main-color: #007bff;\n  --secondary-color: #6c757d;\n  --border-radius: 8px;\n}\n\n.card {\n  background-color: var(--main-color);\n  border-radius: var(--border-radius);\n  \n  /* CSS嵌套 */\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n  \n  /* 现代CSS选择器 */\n  & .title {\n    color: white;\n    font-weight: 600;\n    \n    &:focus-visible {\n      outline: 2px solid var(--secondary-color);\n      outline-offset: 2px;\n    }\n  }\n}\n\n/* 自定义媒体查询 */\n@custom-media --viewport-medium (width <= 768px);\n\n@media (--viewport-medium) {\n  .card {\n    padding: 1rem;\n    margin: 0.5rem;\n  }\n}"
    ],
    resources: [
      { "name": "PostCSS官方文档", "url": "https://postcss.org/" },
      { "name": "PostCSS插件搜索", "url": "https://www.postcss.parts/" },
      { "name": "Autoprefixer在线工具", "url": "https://autoprefixer.github.io/" }
    ]
  },

  StyledComp: {
    title: "Styled Components 样式化组件",
    content: `Styled Components 是React生态系统中最流行的CSS-in-JS库，使用模板字符串创建样式化组件。

## 核心理念
- **组件化样式**: 将样式直接附加到组件上
- **动态样式**: 基于props动态生成样式
- **主题系统**: 内置主题提供者和主题上下文
- **零类名冲突**: 自动生成唯一的类名

## 主要特性
- **模板字符串语法**: 使用标记模板字面量编写CSS
- **自动厂商前缀**: 自动添加浏览器前缀
- **服务端渲染**: 完整的SSR支持
- **TypeScript支持**: 完整的类型定义和推断

## 核心优势
- **开发体验**: 组件级别的样式管理
- **运行时优化**: 只渲染使用的样式
- **动态主题**: 轻松实现主题切换
- **生态丰富**: 大量社区插件和工具

## 使用场景
- React/Next.js项目的样式管理
- 需要动态样式的复杂应用
- 组件库和设计系统开发
- 多主题应用开发

## 最佳实践
1. 使用ThemeProvider管理全局主题
2. 避免在render函数中创建样式组件
3. 合理使用attrs()方法优化性能
4. 使用css helper处理复杂样式逻辑`
  },

  CrossPlat: {
    title: "跨端开发解决方案",
    content: `跨端开发是现代应用开发的重要趋势，通过一套代码库可以同时支持多个平台。

## 核心理念
- **一次开发，随处运行**: 用一套代码支持多个平台
- **原生性能**: 接近原生应用的性能表现
- **统一用户体验**: 保持各平台下的一致性
- **高效开发**: 降低开发成本和维护复杂度

## 主流方案
- **React Native**: 基于React的移动端跨平台开发
- **Flutter**: Google推出的UI工具包
- **Electron**: 基于Web技术的桌面应用开发
- **Taro**: 多端统一开发解决方案
- **uni-app**: Vue.js跨端开发框架

## 技术优势
- **成本效益**: 减少重复开发成本
- **快速迭代**: 同步更新多个平台
- **人才复用**: 减少不同平台的人才需求
- **代码复用**: 逻辑层面的高度复用

## 选择考量
- **应用类型**: 内容型 vs 交互型
- **性能要求**: 高性能 vs 快速开发
- **团队技能**: 现有技术栈考量
- **生态支持**: 第三方库和工具链

## 最佳实践
1. 根据项目需求选择合适的跨端方案
2. 重视平台特性的适配和优化
3. 建立完善的测试和发布流程
4. 关注用户体验的一致性`,
    examples: [
      "// 跨端应用架构设计\n// 使用React Native作为示例的跨平台应用结构\n\n// src/shared/utils/platform.ts\nexport const isIOS = Platform.OS === 'ios';\nexport const isAndroid = Platform.OS === 'android';\nexport const isWeb = Platform.OS === 'web';\n\nexport const getStatusBarHeight = () => {\n  if (isIOS) {\n    return StatusBar.currentHeight || 44;\n  }\n  if (isAndroid) {\n    return StatusBar.currentHeight || 24;\n  }\n  return 0;\n};\n\n// src/components/PlatformButton.tsx\nimport { TouchableOpacity, Pressable } from 'react-native';\n\nconst PlatformButton = ({ children, onPress, style }) => {\n  const ButtonComponent = isIOS ? TouchableOpacity : Pressable;\n  \n  return (\n    <ButtonComponent\n      onPress={onPress}\n      style={[\n        styles.button,\n        isIOS && styles.iOSButton,\n        isAndroid && styles.androidButton,\n        style\n      ]}\n    >\n      {children}\n    </ButtonComponent>\n  );\n};\n\nconst styles = StyleSheet.create({\n  button: {\n    padding: 16,\n    borderRadius: 8,\n    alignItems: 'center'\n  },\n  iOSButton: {\n    backgroundColor: '#007AFF',\n    shadowColor: '#000',\n    shadowOffset: { width: 0, height: 2 },\n    shadowOpacity: 0.25\n  },\n  androidButton: {\n    backgroundColor: '#2196F3',\n    elevation: 3\n  }\n});",
      "// 多端适配策略\n// Taro跨端开发示例\n\n// src/utils/env.ts\nimport Taro from '@tarojs/taro';\n\nexport const ENV = {\n  isWeapp: process.env.TARO_ENV === 'weapp',\n  isAlipay: process.env.TARO_ENV === 'alipay',\n  isH5: process.env.TARO_ENV === 'h5',\n  isRN: process.env.TARO_ENV === 'rn'\n};\n\n// 获取系统信息\nexport const getSystemInfo = () => {\n  return new Promise((resolve) => {\n    Taro.getSystemInfo({\n      success: (res) => {\n        resolve({\n          ...res,\n          isIOS: res.system.toLowerCase().includes('ios'),\n          statusBarHeight: res.statusBarHeight || 0\n        });\n      }\n    });\n  });\n};\n\n// src/components/AdaptiveView.tsx\nimport { View } from '@tarojs/components';\nimport { ENV } from '../utils/env';\n\ninterface AdaptiveViewProps {\n  children: React.ReactNode;\n  h5Style?: React.CSSProperties;\n  weappStyle?: React.CSSProperties;\n  className?: string;\n}\n\nconst AdaptiveView: React.FC<AdaptiveViewProps> = ({\n  children,\n  h5Style = {},\n  weappStyle = {},\n  className\n}) => {\n  const adaptiveStyle = {\n    ...(ENV.isH5 && h5Style),\n    ...(ENV.isWeapp && weappStyle)\n  };\n\n  return (\n    <View className={className} style={adaptiveStyle}>\n      {children}\n    </View>\n  );\n};\n\nexport default AdaptiveView;",
      "// 跨端开发性能优化\n// Flutter跨平台性能优化示例\n\n// lib/utils/platform_utils.dart\nimport 'dart:io';\nimport 'package:flutter/foundation.dart';\n\nclass PlatformUtils {\n  static bool get isIOS => !kIsWeb && Platform.isIOS;\n  static bool get isAndroid => !kIsWeb && Platform.isAndroid;\n  static bool get isWeb => kIsWeb;\n  static bool get isMobile => isIOS || isAndroid;\n  static bool get isDesktop => !kIsWeb && (Platform.isWindows || Platform.isMacOS || Platform.isLinux);\n\n  // 根据平台返回不同的配置\n  static T platformValue<T>({\n    required T mobile,\n    required T desktop,\n    T? web,\n  }) {\n    if (isWeb) return web ?? mobile;\n    if (isMobile) return mobile;\n    return desktop;\n  }\n}\n\n// lib/widgets/adaptive_widget.dart\nimport 'package:flutter/material.dart';\nimport '../utils/platform_utils.dart';\n\nclass AdaptiveWidget extends StatelessWidget {\n  final Widget mobile;\n  final Widget? desktop;\n  final Widget? web;\n\n  const AdaptiveWidget({\n    Key? key,\n    required this.mobile,\n    this.desktop,\n    this.web,\n  }) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return PlatformUtils.platformValue(\n      mobile: mobile,\n      desktop: desktop ?? mobile,\n      web: web,\n    );\n  }\n}\n\n// 使用示例\nclass ResponsiveLayout extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return AdaptiveWidget(\n      mobile: _buildMobileLayout(),\n      desktop: _buildDesktopLayout(),\n      web: _buildWebLayout(),\n    );\n  }\n\n  Widget _buildMobileLayout() {\n    return Column(\n      children: [\n        AppBar(title: Text('移动端布局')),\n        Expanded(child: ListView(...)),\n      ],\n    );\n  }\n\n  Widget _buildDesktopLayout() {\n    return Row(\n      children: [\n        NavigationRail(...),\n        Expanded(child: GridView(...)),\n      ],\n    );\n  }\n\n  Widget _buildWebLayout() {\n    return Scaffold(\n      body: Center(child: Container(...)),\n    );\n  }\n}"
    ],
    resources: [
      { "name": "React Native官方文档", "url": "https://reactnative.dev/" },
      { "name": "Flutter开发指南", "url": "https://flutter.dev/docs" },
      { "name": "Electron教程", "url": "https://electronjs.org/docs" },
      { "name": "Taro跨端开发", "url": "https://taro.jd.com/" },
      { "name": "uni-app开发文档", "url": "https://uniapp.dcloud.io/" }
    ]
  },

  RN: {
    title: "React Native 移动端开发框架",
    content: `React Native是Facebook开发的使用React构建跨平台原生移动应用的框架。

## 核心原理
- **虚拟DOM映射**: 将React组件映射到原生平台组件
- **Bridge通信**: JavaScript和原生代码之间的异步通信
- **线程模型**: JS线程、原生线程和UI线程分离
- **热更新**: 开发时的快速迭代和调试

## 主要特性
- **Learn Once, Write Anywhere**: 一次学习，随处编写
- **原生性能**: 接近原生应用的性能表现
- **快速迭代**: 支持热重载和实时预览
- **丰富组件**: 内置丰富的UI组件和API
- **强大生态**: 丰富的第三方库和工具支持

## 技术优势
- **开发效率**: 使用熟悉的React开发模式
- **代码复用**: iOS和Android共享大部分业务逻辑
- **社区活跃**: 广泛的开发者支持和贡献
- **持续更新**: Facebook的持续投入和维护

## 最佳实践
1. 合理使用FlatList处理大量数据
2. 优化图片加载和缓存策略
3. 避免在render中创建新对象
4. 使用Hermes引擎优化性能
5. 正确处理导航和状态管理。`,
    examples: [
      "// React Native 基础组件和布局\nimport React, { useState } from 'react';\nimport {\n  View,\n  Text,\n  StyleSheet,\n  TouchableOpacity,\n  TextInput,\n  ScrollView,\n  Alert\n} from 'react-native';\n\nconst LoginScreen = () => {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [loading, setLoading] = useState(false);\n\n  const handleLogin = async () => {\n    if (!email || !password) {\n      Alert.alert('错误', '请填写邮箱和密码');\n      return;\n    }\n\n    setLoading(true);\n    try {\n      // 模拟登录请求\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ email, password })\n      });\n      \n      const result = await response.json();\n      if (result.success) {\n        Alert.alert('成功', '登录成功!');\n      }\n    } catch (error) {\n      Alert.alert('错误', '登录失败，请重试');\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return (\n    <ScrollView contentContainerStyle={styles.container}>\n      <Text style={styles.title}>欢迎回来</Text>\n      \n      <TextInput\n        style={styles.input}\n        placeholder=\"邮箱地址\"\n        value={email}\n        onChangeText={setEmail}\n        keyboardType=\"email-address\"\n        autoCapitalize=\"none\"\n      />\n      \n      <TextInput\n        style={styles.input}\n        placeholder=\"密码\"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      \n      <TouchableOpacity \n        style={[styles.button, loading && styles.buttonDisabled]}\n        onPress={handleLogin}\n        disabled={loading}\n      >\n        <Text style={styles.buttonText}>\n          {loading ? '登录中...' : '登录'}\n        </Text>\n      </TouchableOpacity>\n    </ScrollView>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 20,\n    justifyContent: 'center',\n    backgroundColor: '#f5f5f5'\n  },\n  title: {\n    fontSize: 28,\n    fontWeight: 'bold',\n    textAlign: 'center',\n    marginBottom: 40,\n    color: '#333'\n  },\n  input: {\n    backgroundColor: 'white',\n    padding: 15,\n    borderRadius: 10,\n    marginBottom: 15,\n    fontSize: 16,\n    borderWidth: 1,\n    borderColor: '#ddd'\n  },\n  button: {\n    backgroundColor: '#007bff',\n    padding: 15,\n    borderRadius: 10,\n    marginTop: 10\n  },\n  buttonDisabled: {\n    backgroundColor: '#ccc'\n  },\n  buttonText: {\n    color: 'white',\n    textAlign: 'center',\n    fontSize: 18,\n    fontWeight: 'bold'\n  }\n});\n\nexport default LoginScreen;",
      "// React Native Hook和状态管理\nimport React, { useState, useEffect, useContext } from 'react';\nimport {\n  View,\n  Text,\n  FlatList,\n  StyleSheet,\n  RefreshControl,\n  ActivityIndicator\n} from 'react-native';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\n\n// 创建 Context\nconst UserContext = React.createContext();\n\n// 自定义 Hook\nconst useApi = (url) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  const fetchData = async () => {\n    try {\n      setLoading(true);\n      setError(null);\n      const response = await fetch(url);\n      const result = await response.json();\n      setData(result);\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  useEffect(() => {\n    fetchData();\n  }, [url]);\n\n  return { data, loading, error, refetch: fetchData };\n};\n\n// 本地存储 Hook\nconst useAsyncStorage = (key, initialValue) => {\n  const [value, setValue] = useState(initialValue);\n\n  useEffect(() => {\n    AsyncStorage.getItem(key).then(storedValue => {\n      if (storedValue !== null) {\n        setValue(JSON.parse(storedValue));\n      }\n    });\n  }, [key]);\n\n  const setStoredValue = async (newValue) => {\n    setValue(newValue);\n    await AsyncStorage.setItem(key, JSON.stringify(newValue));\n  };\n\n  return [value, setStoredValue];\n};\n\n// 主组件\nconst NewsListScreen = () => {\n  const { data: news, loading, error, refetch } = useApi('/api/news');\n  const [favorites, setFavorites] = useAsyncStorage('favorites', []);\n  const [refreshing, setRefreshing] = useState(false);\n\n  const onRefresh = async () => {\n    setRefreshing(true);\n    await refetch();\n    setRefreshing(false);\n  };\n\n  const toggleFavorite = (newsId) => {\n    const newFavorites = favorites.includes(newsId)\n      ? favorites.filter(id => id !== newsId)\n      : [...favorites, newsId];\n    setFavorites(newFavorites);\n  };\n\n  const renderNewsItem = ({ item }) => (\n    <View style={styles.newsItem}>\n      <Text style={styles.newsTitle}>{item.title}</Text>\n      <Text style={styles.newsContent}>{item.summary}</Text>\n      <TouchableOpacity \n        onPress={() => toggleFavorite(item.id)}\n        style={styles.favoriteButton}\n      >\n        <Text style={[\n          styles.favoriteText,\n          favorites.includes(item.id) && styles.favoriteActive\n        ]}>\n          {favorites.includes(item.id) ? '♥' : '♡'} 收藏\n        </Text>\n      </TouchableOpacity>\n    </View>\n  );\n\n  if (loading && !refreshing) {\n    return (\n      <View style={styles.centerContainer}>\n        <ActivityIndicator size=\"large\" color=\"#007bff\" />\n        <Text>加载中...</Text>\n      </View>\n    );\n  }\n\n  if (error) {\n    return (\n      <View style={styles.centerContainer}>\n        <Text style={styles.errorText}>加载失败: {error}</Text>\n      </View>\n    );\n  }\n\n  return (\n    <FlatList\n      data={news}\n      renderItem={renderNewsItem}\n      keyExtractor={item => item.id.toString()}\n      refreshControl={\n        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />\n      }\n      contentContainerStyle={styles.container}\n    />\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    padding: 15\n  },\n  centerContainer: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center'\n  },\n  newsItem: {\n    backgroundColor: 'white',\n    padding: 15,\n    marginVertical: 8,\n    borderRadius: 10,\n    elevation: 2,\n    shadowColor: '#000',\n    shadowOffset: { width: 0, height: 2 },\n    shadowOpacity: 0.1,\n    shadowRadius: 2\n  },\n  newsTitle: {\n    fontSize: 18,\n    fontWeight: 'bold',\n    marginBottom: 8,\n    color: '#333'\n  },\n  newsContent: {\n    fontSize: 14,\n    color: '#666',\n    lineHeight: 20\n  },\n  favoriteButton: {\n    alignSelf: 'flex-end',\n    marginTop: 10\n  },\n  favoriteText: {\n    color: '#007bff',\n    fontWeight: 'bold'\n  },\n  favoriteActive: {\n    color: '#ff4757'\n  },\n  errorText: {\n    color: '#ff4757',\n    textAlign: 'center',\n    fontSize: 16\n  }\n});\n\nexport default NewsListScreen;",
      "// React Native 导航和性能优化\nimport React, { useCallback, useMemo, memo } from 'react';\nimport {\n  View,\n  Text,\n  FlatList,\n  Image,\n  StyleSheet,\n  Dimensions\n} from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nconst { width: screenWidth } = Dimensions.get('window');\n\n// 优化的列表项组件\nconst OptimizedListItem = memo(({ item, onPress }) => {\n  const handlePress = useCallback(() => {\n    onPress(item.id);\n  }, [item.id, onPress]);\n\n  return (\n    <TouchableOpacity style={styles.listItem} onPress={handlePress}>\n      <Image \n        source={{ uri: item.thumbnail }} \n        style={styles.thumbnail}\n        resizeMode=\"cover\"\n      />\n      <View style={styles.itemContent}>\n        <Text style={styles.itemTitle} numberOfLines={2}>\n          {item.title}\n        </Text>\n        <Text style={styles.itemDate}>{item.date}</Text>\n      </View>\n    </TouchableOpacity>\n  );\n});\n\n// 优化的列表组件\nconst OptimizedList = ({ data }) => {\n  const handleItemPress = useCallback((id) => {\n    console.log('点击了项目:', id);\n  }, []);\n\n  const renderItem = useCallback(({ item }) => (\n    <OptimizedListItem item={item} onPress={handleItemPress} />\n  ), [handleItemPress]);\n\n  const keyExtractor = useCallback((item) => item.id.toString(), []);\n\n  const getItemLayout = useCallback((data, index) => ({\n    length: 80,\n    offset: 80 * index,\n    index,\n  }), []);\n\n  return (\n    <FlatList\n      data={data}\n      renderItem={renderItem}\n      keyExtractor={keyExtractor}\n      getItemLayout={getItemLayout}\n      removeClippedSubviews={true}\n      maxToRenderPerBatch={10}\n      windowSize={10}\n      initialNumToRender={15}\n      showsVerticalScrollIndicator={false}\n    />\n  );\n};\n\n// 导航配置\nconst Tab = createBottomTabNavigator();\nconst Stack = createStackNavigator();\n\nconst HomeStack = () => (\n  <Stack.Navigator\n    screenOptions={{\n      headerStyle: {\n        backgroundColor: '#007bff'\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold'\n      }\n    }}\n  >\n    <Stack.Screen \n      name=\"HomeList\" \n      component={HomeScreen} \n      options={{ title: '首页' }}\n    />\n    <Stack.Screen \n      name=\"Detail\" \n      component={DetailScreen} \n      options={({ route }) => ({ \n        title: route.params?.title || '详情' \n      })}\n    />\n  </Stack.Navigator>\n);\n\nconst MainNavigator = () => (\n  <NavigationContainer>\n    <Tab.Navigator\n      screenOptions={({ route }) => ({\n        tabBarIcon: ({ focused, color, size }) => {\n          // 这里可以添加图标\n          return <Text style={{ fontSize: size, color }}>•</Text>;\n        },\n        tabBarActiveTintColor: '#007bff',\n        tabBarInactiveTintColor: 'gray',\n        headerShown: false\n      })}\n    >\n      <Tab.Screen \n        name=\"Home\" \n        component={HomeStack} \n        options={{ title: '首页' }}\n      />\n      <Tab.Screen \n        name=\"Profile\" \n        component={ProfileScreen} \n        options={{ title: '个人中心' }}\n      />\n    </Tab.Navigator>\n  </NavigationContainer>\n);\n\nconst styles = StyleSheet.create({\n  listItem: {\n    flexDirection: 'row',\n    padding: 15,\n    borderBottomWidth: 1,\n    borderBottomColor: '#eee',\n    height: 80\n  },\n  thumbnail: {\n    width: 60,\n    height: 60,\n    borderRadius: 8\n  },\n  itemContent: {\n    flex: 1,\n    marginLeft: 15,\n    justifyContent: 'space-between'\n  },\n  itemTitle: {\n    fontSize: 16,\n    fontWeight: 'bold',\n    color: '#333'\n  },\n  itemDate: {\n    fontSize: 12,\n    color: '#999'\n  }\n});\n\nexport default MainNavigator;"
    ],
    resources: [
      { "name": "React Native官方文档", "url": "https://reactnative.dev/docs/getting-started" },
      { "name": "React Navigation", "url": "https://reactnavigation.org/" },
      { "name": "Expo开发平台", "url": "https://expo.dev/" },
      { "name": "React Native Elements", "url": "https://reactnativeelements.com/" },
      { "name": "Flipper调试工具", "url": "https://fbflipper.com/" }
    ]
  },

  // --- New Node: Testing ---
  Testing: {
    title: "前端测试技术",
    content: `前端测试是现代Web开发中确保代码质量和应用稳定性的关键环节，涵盖单元测试、集成测试和端到端测试。

## 测试类型
- **单元测试**: 测试独立的函数或组件
- **集成测试**: 测试多个模块的交互
- **端到端测试**: 测试完整的用户流程
- **快照测试**: 验证UI组件的渲染输出
- **性能测试**: 测试应用的性能指标

## 主流工具
- **Jest**: Facebook开发的JavaScript测试框架
- **Vitest**: Vite原生测试工具，速度极快
- **Cypress**: 现代化的端到端测试框架
- **Playwright**: 微软开发的浏览器自动化工具
- **Testing Library**: 专注于用户行为的测试工具

## 核心理念
- **测试驱动开发(TDD)**: 先写测试再写代码
- **行为驱动开发(BDD)**: 关注用户行为和业务需求
- **测试金字塔**: 大量单元测试，适量集成测试，少量E2E测试
- **用户中心测试**: 从用户角度编写测试用例

## 最佳实践
1. 保持测试简单且专注单一功能
2. 使用描述性的测试名称和断言
3. 合理设置测试覆盖率目标
4. 定期重构和维护测试代码
5. 在CI/CD流程中集成自动化测试`,
    examples: [
      "// Jest 单元测试示例\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport '@testing-library/jest-dom';\nimport Counter from '../Counter';\n\ndescribe('Counter组件', () => {\n  test('应该显示初始计数值', () => {\n    render(<Counter initialCount={0} />);\n    expect(screen.getByText('Count: 0')).toBeInTheDocument();\n  });\n\n  test('点击增加按钮应该增加计数', () => {\n    render(<Counter initialCount={0} />);\n    const incrementButton = screen.getByRole('button', { name: /increment/i });\n    \n    fireEvent.click(incrementButton);\n    expect(screen.getByText('Count: 1')).toBeInTheDocument();\n  });\n\n  test('点击减少按钮应该减少计数', () => {\n    render(<Counter initialCount={5} />);\n    const decrementButton = screen.getByRole('button', { name: /decrement/i });\n    \n    fireEvent.click(decrementButton);\n    expect(screen.getByText('Count: 4')).toBeInTheDocument();\n  });\n\n  test('应该处理异步操作', async () => {\n    render(<Counter />);\n    const asyncButton = screen.getByRole('button', { name: /async increment/i });\n    \n    fireEvent.click(asyncButton);\n    \n    // 等待异步操作完成\n    await screen.findByText('Count: 1');\n    expect(screen.getByText('Loading...')).not.toBeInTheDocument();\n  });\n});\n\n// 测试自定义Hook\nimport { renderHook, act } from '@testing-library/react';\nimport useCounter from '../hooks/useCounter';\n\ndescribe('useCounter Hook', () => {\n  test('应该返回初始值和操作函数', () => {\n    const { result } = renderHook(() => useCounter(0));\n    \n    expect(result.current.count).toBe(0);\n    expect(typeof result.current.increment).toBe('function');\n    expect(typeof result.current.decrement).toBe('function');\n  });\n\n  test('increment函数应该增加计数', () => {\n    const { result } = renderHook(() => useCounter(0));\n    \n    act(() => {\n      result.current.increment();\n    });\n    \n    expect(result.current.count).toBe(1);\n  });\n});",
      "// Vitest 现代测试框架示例\nimport { describe, it, expect, vi, beforeEach } from 'vitest';\nimport { mount } from '@vue/test-utils';\nimport TodoList from '../TodoList.vue';\n\ndescribe('TodoList组件', () => {\n  let wrapper;\n\n  beforeEach(() => {\n    wrapper = mount(TodoList, {\n      props: {\n        todos: [\n          { id: 1, text: '学习Vue', completed: false },\n          { id: 2, text: '写测试', completed: true }\n        ]\n      }\n    });\n  });\n\n  it('应该渲染所有待办事项', () => {\n    const todoItems = wrapper.findAll('[data-testid=\"todo-item\"]');\n    expect(todoItems).toHaveLength(2);\n    expect(todoItems[0].text()).toContain('学习Vue');\n    expect(todoItems[1].text()).toContain('写测试');\n  });\n\n  it('应该处理待办事项的切换', async () => {\n    const checkbox = wrapper.find('input[type=\"checkbox\"]');\n    await checkbox.setChecked(true);\n    \n    expect(wrapper.emitted('toggle')).toBeTruthy();\n    expect(wrapper.emitted('toggle')[0]).toEqual([1]);\n  });\n\n  it('应该添加新的待办事项', async () => {\n    const input = wrapper.find('input[type=\"text\"]');\n    const addButton = wrapper.find('[data-testid=\"add-button\"]');\n    \n    await input.setValue('新任务');\n    await addButton.trigger('click');\n    \n    expect(wrapper.emitted('add')).toBeTruthy();\n    expect(wrapper.emitted('add')[0]).toEqual(['新任务']);\n  });\n});\n\n// API测试和Mock\nimport { vi } from 'vitest';\nimport apiService from '../services/apiService';\n\n// Mock整个模块\nvi.mock('../services/apiService', () => ({\n  default: {\n    fetchUsers: vi.fn(),\n    createUser: vi.fn()\n  }\n}));\n\ndescribe('用户管理', () => {\n  it('应该获取用户列表', async () => {\n    const mockUsers = [\n      { id: 1, name: '张三', email: 'zhangsan@example.com' },\n      { id: 2, name: '李四', email: 'lisi@example.com' }\n    ];\n    \n    apiService.fetchUsers.mockResolvedValue(mockUsers);\n    \n    const users = await apiService.fetchUsers();\n    \n    expect(users).toEqual(mockUsers);\n    expect(apiService.fetchUsers).toHaveBeenCalledOnce();\n  });\n\n  it('应该处理API错误', async () => {\n    const errorMessage = '网络错误';\n    apiService.fetchUsers.mockRejectedValue(new Error(errorMessage));\n    \n    await expect(apiService.fetchUsers()).rejects.toThrow(errorMessage);\n  });\n});",
      "// Cypress 端到端测试示例\n// cypress/e2e/todo-app.cy.js\ndescribe('待办事项应用', () => {\n  beforeEach(() => {\n    cy.visit('http://localhost:3000');\n  });\n\n  it('应该显示应用标题', () => {\n    cy.contains('h1', '我的待办事项');\n    cy.get('[data-cy=\"app-title\"]').should('be.visible');\n  });\n\n  it('应该添加新的待办事项', () => {\n    const todoText = '学习Cypress测试';\n    \n    cy.get('[data-cy=\"todo-input\"]').type(todoText);\n    cy.get('[data-cy=\"add-button\"]').click();\n    \n    cy.get('[data-cy=\"todo-list\"]')\n      .should('contain', todoText)\n      .find('.todo-item')\n      .should('have.length', 1);\n  });\n\n  it('应该标记待办事项为完成', () => {\n    // 添加待办事项\n    cy.get('[data-cy=\"todo-input\"]').type('测试任务');\n    cy.get('[data-cy=\"add-button\"]').click();\n    \n    // 标记为完成\n    cy.get('.todo-item')\n      .first()\n      .find('input[type=\"checkbox\"]')\n      .check();\n    \n    // 验证样式变化\n    cy.get('.todo-item')\n      .first()\n      .should('have.class', 'completed');\n  });\n\n  it('应该删除待办事项', () => {\n    // 添加待办事项\n    cy.get('[data-cy=\"todo-input\"]').type('要删除的任务');\n    cy.get('[data-cy=\"add-button\"]').click();\n    \n    // 删除待办事项\n    cy.get('.todo-item')\n      .first()\n      .find('[data-cy=\"delete-button\"]')\n      .click();\n    \n    // 确认删除对话框\n    cy.get('[data-cy=\"confirm-dialog\"]').should('be.visible');\n    cy.get('[data-cy=\"confirm-yes\"]').click();\n    \n    // 验证删除成功\n    cy.get('[data-cy=\"todo-list\"]')\n      .should('not.contain', '要删除的任务');\n  });\n\n  it('应该过滤待办事项', () => {\n    // 添加多个待办事项\n    ['任务1', '任务2', '任务3'].forEach(task => {\n      cy.get('[data-cy=\"todo-input\"]').type(task);\n      cy.get('[data-cy=\"add-button\"]').click();\n    });\n    \n    // 标记第一个为完成\n    cy.get('.todo-item')\n      .first()\n      .find('input[type=\"checkbox\"]')\n      .check();\n    \n    // 测试过滤功能\n    cy.get('[data-cy=\"filter-completed\"]').click();\n    cy.get('.todo-item').should('have.length', 1);\n    \n    cy.get('[data-cy=\"filter-active\"]').click();\n    cy.get('.todo-item').should('have.length', 2);\n    \n    cy.get('[data-cy=\"filter-all\"]').click();\n    cy.get('.todo-item').should('have.length', 3);\n  });\n});\n\n// 自定义Cypress命令\n// cypress/support/commands.js\nCypress.Commands.add('addTodo', (todoText) => {\n  cy.get('[data-cy=\"todo-input\"]').type(todoText);\n  cy.get('[data-cy=\"add-button\"]').click();\n});\n\nCypress.Commands.add('completeTodo', (todoText) => {\n  cy.contains('.todo-item', todoText)\n    .find('input[type=\"checkbox\"]')\n    .check();\n});\n\n// 使用自定义命令\nit('应该使用自定义命令', () => {\n  cy.addTodo('自定义命令测试');\n  cy.completeTodo('自定义命令测试');\n  \n  cy.contains('.todo-item', '自定义命令测试')\n    .should('have.class', 'completed');\n});"
    ],
    resources: [
      { "name": "Jest官方文档", "url": "https://jestjs.io/docs/getting-started" },
      { "name": "Vitest测试框架", "url": "https://vitest.dev/" },
      { "name": "Testing Library", "url": "https://testing-library.com/" },
      { "name": "Cypress端到端测试", "url": "https://docs.cypress.io/" },
      { "name": "Playwright自动化工具", "url": "https://playwright.dev/" }
    ]
  },

  // --- New Node: Database ---
  Database: {
    title: "Database 数据库技术",
    content: `Database（数据库）是用于存储、组织和管理数据的系统，是现代应用程序的核心基础设施。

## 核心概念
- **数据持久化**: 将应用数据永久存储在磁盘或其他存储介质中
- **ACID特性**: 原子性、一致性、隔离性、持久性，保证数据库事务的可靠性
- **数据建模**: 关系型、文档型、键值型、图形等不同的数据组织方式
- **查询语言**: SQL、NoSQL查询语法，用于数据的增删改查操作

## 主要特性/功能
- **事务管理**: 确保数据操作的原子性和一致性
- **并发控制**: 支持多用户同时访问，保证数据完整性
- **索引优化**: 提高查询性能，支持复合索引和全文搜索
- **备份恢复**: 数据备份、增量备份、灾难恢复机制
- **安全控制**: 用户权限管理、数据加密、访问审计

## 技术优势/应用场景
- **数据一致性**: 相比文件存储，提供更强的数据一致性保证
- **高并发支持**: 适用于多用户、高并发的Web应用
- **复杂查询**: 支持复杂的联表查询和数据分析
- **企业级应用**: 银行、电商、ERP等对数据可靠性要求极高的场景

## 最佳实践
1. **选择合适的数据库类型**: 关系型数据库适合结构化数据，NoSQL适合灵活数据结构
2. **设计合理的数据模型**: 避免数据冗余，保证查询效率
3. **建立适当的索引**: 在常查询字段上建索引，但避免过度索引
4. **定期备份数据**: 制定备份策略，定期测试恢复流程
5. **监控性能指标**: 关注查询执行时间、连接数、磁盘使用率等`,
    examples: [
      "// SQL 基础操作示例\n// 创建表和基本CRUD操作\n-- 创建用户表\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 插入数据\nINSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');\n\n-- 查询数据\nSELECT * FROM users WHERE email = 'alice@example.com';\n\n-- 更新数据\nUPDATE users SET name = 'Alice Smith' WHERE id = 1;\n\n-- 删除数据\nDELETE FROM users WHERE id = 1;",
      "// Node.js 数据库连接示例\n// 使用 PostgreSQL 和 Node.js\nconst { Pool } = require('pg');\n\nconst pool = new Pool({\n  user: 'username',\n  host: 'localhost',\n  database: 'myapp',\n  password: 'password',\n  port: 5432,\n});\n\n// 查询用户\nasync function getUser(userId) {\n  try {\n    const client = await pool.connect();\n    const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);\n    client.release();\n    return result.rows[0];\n  } catch (err) {\n    console.error('数据库查询错误:', err);\n    throw err;\n  }\n}\n\n// 创建用户\nasync function createUser(name, email) {\n  const client = await pool.connect();\n  try {\n    await client.query('BEGIN');\n    const result = await client.query(\n      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',\n      [name, email]\n    );\n    await client.query('COMMIT');\n    return result.rows[0];\n  } catch (err) {\n    await client.query('ROLLBACK');\n    throw err;\n  } finally {\n    client.release();\n  }\n}",
      "// MongoDB 操作示例\n// 使用 Mongoose 进行 MongoDB 操作\nconst mongoose = require('mongoose');\n\n// 定义用户模型\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// 连接数据库\nasync function connectDB() {\n  try {\n    await mongoose.connect('mongodb://localhost:27017/myapp');\n    console.log('MongoDB 连接成功');\n  } catch (error) {\n    console.error('MongoDB 连接失败:', error);\n  }\n}\n\n// CRUD 操作\nclass UserService {\n  // 创建用户\n  static async createUser(userData) {\n    const user = new User(userData);\n    return await user.save();\n  }\n\n  // 查找用户\n  static async findUserByEmail(email) {\n    return await User.findOne({ email });\n  }\n\n  // 更新用户\n  static async updateUser(id, updates) {\n    return await User.findByIdAndUpdate(id, updates, { new: true });\n  }\n\n  // 删除用户\n  static async deleteUser(id) {\n    return await User.findByIdAndDelete(id);\n  }\n\n  // 分页查询\n  static async getUsers(page = 1, limit = 10) {\n    const skip = (page - 1) * limit;\n    return await User.find().skip(skip).limit(limit).sort({ createdAt: -1 });\n  }\n}",
      "// Redis 缓存示例\n// 使用 Redis 作为缓存数据库\nconst redis = require('redis');\nconst client = redis.createClient({\n  host: 'localhost',\n  port: 6379\n});\n\nclient.on('error', (err) => console.log('Redis Client Error', err));\n\n// 缓存操作类\nclass CacheService {\n  static async connect() {\n    await client.connect();\n  }\n\n  // 设置缓存\n  static async set(key, value, expireInSeconds = 3600) {\n    await client.setEx(key, expireInSeconds, JSON.stringify(value));\n  }\n\n  // 获取缓存\n  static async get(key) {\n    const value = await client.get(key);\n    return value ? JSON.parse(value) : null;\n  }\n\n  // 删除缓存\n  static async del(key) {\n    return await client.del(key);\n  }\n\n  // 检查是否存在\n  static async exists(key) {\n    return await client.exists(key);\n  }\n\n  // Hash 操作\n  static async hSet(key, field, value) {\n    return await client.hSet(key, field, JSON.stringify(value));\n  }\n\n  static async hGet(key, field) {\n    const value = await client.hGet(key, field);\n    return value ? JSON.parse(value) : null;\n  }\n}\n\n// 使用示例\nasync function cacheUserData(userId, userData) {\n  await CacheService.set(`user:${userId}`, userData, 1800); // 30分钟过期\n}\n\nasync function getUserFromCache(userId) {\n  return await CacheService.get(`user:${userId}`);\n}"
    ],
    resources: [
      {"name": "SQL 教程 - W3Schools", "url": "https://www.w3schools.com/sql/"},
      {"name": "PostgreSQL 官方文档", "url": "https://www.postgresql.org/docs/"},
      {"name": "MongoDB 大学", "url": "https://university.mongodb.com/"},
      {"name": "Redis 官方文档", "url": "https://redis.io/documentation"},
      {"name": "数据库设计原理 - 慕课网", "url": "https://www.imooc.com/learn/117"}
    ]
  },

  // --- New Node: PostgreSQL ---
  PostgreSQL: {
    title: "PostgreSQL 技术文档",
    content: `PostgreSQL 是一个功能强大的开源关系型数据库管理系统，被誉为"世界上最先进的开源关系型数据库"。

## 核心概念
- **ACID 事务支持**: PostgreSQL 完全支持 ACID（原子性、一致性、隔离性、持久性）事务，确保数据的完整性和可靠性。
- **多版本并发控制 (MVCC)**: 采用 MVCC 技术实现高并发，读操作不会阻塞写操作，写操作也不会阻塞读操作。
- **扩展性架构**: 支持自定义数据类型、函数、操作符、聚合函数等，具有高度的可扩展性。
- **SQL 标准兼容**: 高度兼容 SQL 标准，支持复杂查询、子查询、窗口函数等高级 SQL 特性。

## 主要特性/功能
- **丰富的数据类型**: 支持 JSON/JSONB、数组、几何类型、UUID、全文搜索等高级数据类型
- **强大的索引系统**: 提供 B-tree、Hash、GiST、SP-GiST、GIN、BRIN 等多种索引类型
- **分区表支持**: 支持范围、列表、哈希分区，提升大表查询性能
- **扩展生态**: PostGIS（地理信息）、TimescaleDB（时序数据）等丰富扩展

## 技术优势/应用场景
- **企业级可靠性**: 相比 MySQL，在处理复杂查询和保证数据一致性方面更加可靠
- **地理信息系统**: PostGIS 扩展使其成为 GIS 应用的理想选择
- **数据分析应用**: 窗口函数、CTE、数组处理等特性适合复杂数据分析
- **高并发Web应用**: MVCC 机制确保高并发场景下的性能表现

## 最佳实践
1. **性能调优**: 合理配置 shared_buffers、work_mem、maintenance_work_mem 等内存参数
2. **索引优化**: 使用 EXPLAIN 分析查询计划，为频繁查询的列创建合适索引
3. **定期维护**: 执行 VACUUM、ANALYZE、REINDEX 操作保持数据库性能
4. **监控查询**: 启用 pg_stat_statements 扩展监控慢查询和性能瓶颈
5. **备份策略**: 结合 pg_dump 逻辑备份和 WAL 连续归档实现完整备份方案

`,


    examples: [
      `// 基础数据库连接和查询\nimport { Pool } from 'pg';\n\nconst pool = new Pool({\n  user: 'your_username',\n  host: 'localhost',\n  database: 'your_database',\n  password: 'your_password',\n  port: 5432,\n  max: 20, // 最大连接数\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 2000,\n});\n\n// 基础查询示例\nasync function getUsers() {\n  const client = await pool.connect();\n  try {\n    const result = await client.query('SELECT id, name, email FROM users WHERE active = $1', [true]);\n    return result.rows;\n  } finally {\n    client.release();\n  }\n}`,
      
      `// 事务处理示例\nasync function transferMoney(fromUserId, toUserId, amount) {\n  const client = await pool.connect();\n  \n  try {\n    await client.query('BEGIN');\n    \n    // 扣除发送方余额\n    await client.query(\n      'UPDATE accounts SET balance = balance - $1 WHERE user_id = $2',\n      [amount, fromUserId]\n    );\n    \n    // 增加接收方余额\n    await client.query(\n      'UPDATE accounts SET balance = balance + $1 WHERE user_id = $2',\n      [amount, toUserId]\n    );\n    \n    // 记录转账日志\n    await client.query(\n      'INSERT INTO transfer_logs (from_user, to_user, amount, created_at) VALUES ($1, $2, $3, NOW())',\n      [fromUserId, toUserId, amount]\n    );\n    \n    await client.query('COMMIT');\n    console.log('转账成功');\n  } catch (error) {\n    await client.query('ROLLBACK');\n    throw error;\n  } finally {\n    client.release();\n  }\n}`,
      
      "// JSON/JSONB 数据操作\nasync function manageUserProfiles() {\n  const client = await pool.connect();\n  \n  try {\n    // 创建包含 JSONB 字段的表\n    await client.query(\n      'CREATE TABLE IF NOT EXISTS user_profiles (id SERIAL PRIMARY KEY, user_id INTEGER NOT NULL, profile_data JSONB NOT NULL, created_at TIMESTAMP DEFAULT NOW())'\n    );\n    \n    // 插入 JSON 数据\n    await client.query(\n      'INSERT INTO user_profiles (user_id, profile_data) VALUES ($1, $2)',\n      [1, JSON.stringify({ \n        name: '张三', \n        age: 30, \n        skills: ['JavaScript', 'PostgreSQL', 'React'],\n        address: { city: '北京', district: '朝阳区' }\n      })]\n    );\n    \n    // 查询 JSON 数据\n    const result = await client.query(\n      \\\"SELECT profile_data->>'name' as name, profile_data->'skills' as skills FROM user_profiles WHERE profile_data->>'age' > '25'\\\"\n    );\n    \n    return result.rows;\n  } finally {\n    client.release();\n  }\n}",
      
      "// 全文搜索功能\nasync function fullTextSearch(searchTerm) {\n  const client = await pool.connect();\n  \n  try {\n    // 创建全文搜索索引\n    await client.query(\n      'CREATE INDEX IF NOT EXISTS articles_search_idx ON articles USING GIN(to_tsvector(\\\\'chinese\\\\', title || \\\\' \\\\' || content))'\n    );\n    \n    // 全文搜索查询\n    const result = await client.query(\n      'SELECT id, title, ts_headline(\\\\'chinese\\\\', content, plainto_tsquery(\\\\'chinese\\\\', $1)) as highlight FROM articles WHERE to_tsvector(\\\\'chinese\\\\', title || \\\\' \\\\' || content) @@ plainto_tsquery(\\\\'chinese\\\\', $1) ORDER BY ts_rank(to_tsvector(\\\\'chinese\\\\', title || \\\\' \\\\' || content), plainto_tsquery(\\\\'chinese\\\\', $1)) DESC LIMIT 10',\n      [searchTerm]\n    );\n    \n    return result.rows;\n  } finally {\n    client.release();\n  }\n}",
      
      "// 高级查询：窗口函数和 CTE\nasync function advancedAnalytics() {\n  const client = await pool.connect();\n  \n  try {\n    const result = await client.query(\n      'WITH monthly_sales AS (SELECT DATE_TRUNC(\\\\'month\\\\', created_at) as month, SUM(amount) as total_sales, COUNT(*) as order_count FROM orders WHERE created_at >= NOW() - INTERVAL \\\\'12 months\\\\' GROUP BY DATE_TRUNC(\\\\'month\\\\', created_at)), sales_with_trend AS (SELECT month, total_sales, order_count, LAG(total_sales) OVER (ORDER BY month) as prev_month_sales, ROW_NUMBER() OVER (ORDER BY total_sales DESC) as sales_rank FROM monthly_sales) SELECT month, total_sales, order_count, CASE WHEN prev_month_sales IS NULL THEN 0 ELSE ROUND(((total_sales - prev_month_sales) / prev_month_sales * 100)::numeric, 2) END as growth_rate, sales_rank FROM sales_with_trend ORDER BY month'\n    );\n    \n    return result.rows;\n  } finally {\n    client.release();\n  }\n}"
    ],
    resources: [
      {"name": "PostgreSQL 官方文档", "url": "https://www.postgresql.org/docs/"},
      {"name": "PostgreSQL 中文文档", "url": "http://postgres.cn/docs/"},
      {"name": "PostgreSQL 教程", "url": "https://www.postgresqltutorial.com/"},
      {"name": "node-postgres 库文档", "url": "https://node-postgres.com/"},
      {"name": "PostgreSQL GitHub 仓库", "url": "https://github.com/postgres/postgres"},
      {"name": "PostGIS 空间数据扩展", "url": "https://postgis.net/"},
      {"name": "pgAdmin 管理工具", "url": "https://www.pgadmin.org/"}
    ]
  },

  // --- New Node: IndexedDB ---
  IndexedDB: {
    title: "IndexedDB 技术文档",
    content: `IndexedDB 是浏览器提供的客户端数据库，用于在用户设备上存储大量结构化数据，支持事务和索引。

## 核心概念
- **对象存储**: IndexedDB 使用对象存储（Object Store）而非表格来组织数据
- **事务支持**: 所有数据操作都在事务中进行，确保数据一致性
- **异步操作**: 所有操作都是异步的，不会阻塞主线程
- **键值存储**: 支持多种数据类型作为键，包括字符串、数字、日期等

## 主要特性/功能
- **大容量存储**: 相比 localStorage（5-10MB），可存储几百MB到几GB数据
- **索引查询**: 支持在非主键字段上创建索引，实现复杂查询
- **版本控制**: 数据库版本管理，支持结构升级和迁移
- **同源策略**: 遵循同源策略，保证数据安全性

## 技术优势/应用场景
- **离线应用**: 相比 localStorage，更适合存储复杂的应用数据
- **PWA 应用**: Progressive Web App 的核心存储技术
- **缓存管理**: 缓存 API 响应数据，提升应用性能
- **富客户端应用**: 需要在客户端处理大量数据的 Web 应用

## 最佳实践
1. **合理设计索引**: 在频繁查询的字段上创建索引，但避免过度索引
2. **事务管理**: 将相关操作放在同一事务中，减少事务开销
3. **错误处理**: 完善的错误处理机制，特别是配额超限和版本冲突
4. **性能优化**: 使用游标进行大数据量遍历，避免一次性加载所有数据
5. **数据备份**: 提供数据导出功能，防止浏览器数据丢失`,
    examples: [
      "// IndexedDB 基础操作 - 打开数据库和创建对象存储\nfunction openDatabase() {\n  return new Promise((resolve, reject) => {\n    const request = indexedDB.open('MyDatabase', 1);\n    \n    request.onerror = () => reject(request.error);\n    request.onsuccess = () => resolve(request.result);\n    \n    request.onupgradeneeded = (event) => {\n      const db = event.target.result;\n      \n      // 创建用户对象存储\n      const userStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });\n      userStore.createIndex('email', 'email', { unique: true });\n      userStore.createIndex('name', 'name');\n      \n      // 创建文章对象存储\n      const articleStore = db.createObjectStore('articles', { keyPath: 'id', autoIncrement: true });\n      articleStore.createIndex('title', 'title');\n      articleStore.createIndex('date', 'createdAt');\n    };\n  });\n}",
      "// IndexedDB CRUD 操作封装类\nclass IndexedDBManager {\n  constructor(dbName, version = 1) {\n    this.dbName = dbName;\n    this.version = version;\n    this.db = null;\n  }\n\n  async open() {\n    return new Promise((resolve, reject) => {\n      const request = indexedDB.open(this.dbName, this.version);\n      \n      request.onerror = () => reject(request.error);\n      request.onsuccess = () => {\n        this.db = request.result;\n        resolve(this.db);\n      };\n      \n      request.onupgradeneeded = (event) => {\n        this.db = event.target.result;\n        this.onUpgradeNeeded(event);\n      };\n    });\n  }\n\n  // 添加数据\n  async add(storeName, data) {\n    const transaction = this.db.transaction([storeName], 'readwrite');\n    const store = transaction.objectStore(storeName);\n    return new Promise((resolve, reject) => {\n      const request = store.add(data);\n      request.onerror = () => reject(request.error);\n      request.onsuccess = () => resolve(request.result);\n    });\n  }\n\n  // 获取数据\n  async get(storeName, key) {\n    const transaction = this.db.transaction([storeName], 'readonly');\n    const store = transaction.objectStore(storeName);\n    return new Promise((resolve, reject) => {\n      const request = store.get(key);\n      request.onerror = () => reject(request.error);\n      request.onsuccess = () => resolve(request.result);\n    });\n  }\n\n  // 更新数据\n  async update(storeName, data) {\n    const transaction = this.db.transaction([storeName], 'readwrite');\n    const store = transaction.objectStore(storeName);\n    return new Promise((resolve, reject) => {\n      const request = store.put(data);\n      request.onerror = () => reject(request.error);\n      request.onsuccess = () => resolve(request.result);\n    });\n  }\n\n  // 删除数据\n  async delete(storeName, key) {\n    const transaction = this.db.transaction([storeName], 'readwrite');\n    const store = transaction.objectStore(storeName);\n    return new Promise((resolve, reject) => {\n      const request = store.delete(key);\n      request.onerror = () => reject(request.error);\n      request.onsuccess = () => resolve(request.result);\n    });\n  }\n\n  onUpgradeNeeded(event) {\n    // 子类重写此方法来定义数据库结构\n  }\n}",
      "// 使用索引进行复杂查询\nasync function queryWithIndex() {\n  const db = await openDatabase();\n  \n  // 通过邮箱索引查询用户\n  function getUserByEmail(email) {\n    return new Promise((resolve, reject) => {\n      const transaction = db.transaction(['users'], 'readonly');\n      const store = transaction.objectStore('users');\n      const index = store.index('email');\n      const request = index.get(email);\n      \n      request.onerror = () => reject(request.error);\n      request.onsuccess = () => resolve(request.result);\n    });\n  }\n  \n  // 使用游标遍历所有用户\n  function getAllUsers() {\n    return new Promise((resolve, reject) => {\n      const transaction = db.transaction(['users'], 'readonly');\n      const store = transaction.objectStore('users');\n      const request = store.openCursor();\n      const users = [];\n      \n      request.onerror = () => reject(request.error);\n      request.onsuccess = (event) => {\n        const cursor = event.target.result;\n        if (cursor) {\n          users.push(cursor.value);\n          cursor.continue();\n        } else {\n          resolve(users);\n        }\n      };\n    });\n  }\n  \n  // 范围查询示例\n  function getUsersInDateRange(startDate, endDate) {\n    return new Promise((resolve, reject) => {\n      const transaction = db.transaction(['articles'], 'readonly');\n      const store = transaction.objectStore('articles');\n      const index = store.index('date');\n      const range = IDBKeyRange.bound(startDate, endDate);\n      const request = index.openCursor(range);\n      const articles = [];\n      \n      request.onerror = () => reject(request.error);\n      request.onsuccess = (event) => {\n        const cursor = event.target.result;\n        if (cursor) {\n          articles.push(cursor.value);\n          cursor.continue();\n        } else {\n          resolve(articles);\n        }\n      };\n    });\n  }\n}",
      "// IndexedDB 事务和错误处理最佳实践\nclass UserDataManager {\n  constructor() {\n    this.dbName = 'UserApp';\n    this.version = 1;\n    this.db = null;\n  }\n\n  async init() {\n    try {\n      this.db = await this.openDB();\n      console.log('数据库初始化成功');\n    } catch (error) {\n      console.error('数据库初始化失败:', error);\n      throw error;\n    }\n  }\n\n  openDB() {\n    return new Promise((resolve, reject) => {\n      // 检查浏览器支持\n      if (!('indexedDB' in window)) {\n        reject(new Error('浏览器不支持 IndexedDB'));\n        return;\n      }\n\n      const request = indexedDB.open(this.dbName, this.version);\n      \n      request.onerror = () => {\n        console.error('打开数据库失败:', request.error);\n        reject(request.error);\n      };\n      \n      request.onsuccess = () => {\n        const db = request.result;\n        \n        // 处理版本变更错误\n        db.onversionchange = () => {\n          console.warn('数据库版本已更新，请刷新页面');\n          db.close();\n        };\n        \n        resolve(db);\n      };\n      \n      request.onupgradeneeded = (event) => {\n        const db = event.target.result;\n        \n        // 创建对象存储时的错误处理\n        try {\n          if (!db.objectStoreNames.contains('users')) {\n            const store = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });\n            store.createIndex('email', 'email', { unique: true });\n          }\n        } catch (error) {\n          console.error('创建对象存储失败:', error);\n          reject(error);\n        }\n      };\n      \n      // 处理配额超限\n      request.onblocked = () => {\n        console.warn('数据库被阻塞，请关闭其他标签页');\n      };\n    });\n  }\n\n  // 批量操作事务示例\n  async batchInsert(users) {\n    if (!this.db) throw new Error('数据库未初始化');\n    \n    const transaction = this.db.transaction(['users'], 'readwrite');\n    const store = transaction.objectStore('users');\n    \n    return new Promise((resolve, reject) => {\n      transaction.oncomplete = () => {\n        console.log('批量插入完成');\n        resolve();\n      };\n      \n      transaction.onerror = () => {\n        console.error('批量插入失败:', transaction.error);\n        reject(transaction.error);\n      };\n      \n      // 批量添加数据\n      users.forEach(user => {\n        store.add(user);\n      });\n    });\n  }\n\n  // 存储空间管理\n  async getStorageEstimate() {\n    if ('storage' in navigator && 'estimate' in navigator.storage) {\n      const estimate = await navigator.storage.estimate();\n      console.log('已用存储:', estimate.usage);\n      console.log('可用配额:', estimate.quota);\n      return estimate;\n    }\n  }\n}"
    ],
    resources: [
      {"name": "MDN IndexedDB API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API"},
      {"name": "IndexedDB 使用指南", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB"},
      {"name": "Google Developers - IndexedDB", "url": "https://developers.google.com/web/ilt/pwa/working-with-indexeddb"},
      {"name": "Dexie.js - IndexedDB 包装库", "url": "https://dexie.org/"},
      {"name": "IDB - 轻量级 IndexedDB 库", "url": "https://github.com/jakearchibald/idb"}
    ]
  },

  // --- Missing Core Nodes ---
  BuildTool: {
    title: "构建工具",
    content: `构建工具是现代前端开发的基础设施，用于处理代码的编译、打包、优化等任务。

## 核心功能
- **代码转换**: ES6+转ES5、TypeScript转JavaScript、Sass转CSS
- **模块打包**: 将多个模块文件合并为少数几个文件
- **代码优化**: 压缩、Tree Shaking、代码分割
- **开发体验**: 热重载、源码映射、错误提示

## 主要工具对比
- **Webpack**: 功能最全面，配置复杂，生态丰富
- **Vite**: 开发速度快，基于ESM，配置简单
- **Parcel**: 零配置，开箱即用，适合小项目
- **Rollup**: 专注库打包，Tree Shaking效果好

## 选择建议
1. 大型应用推荐Webpack或Vite
2. 组件库开发推荐Rollup
3. 快速原型推荐Parcel
4. Vue/React项目推荐官方脚手架`,
    examples: [
      "// 构建工具选择对比\nconst buildTools = {\n  webpack: {\n    pros: ['生态丰富', '功能完善', '可高度定制'],\n    cons: ['配置复杂', '构建较慢'],\n    bestFor: ['大型项目', '复杂需求']\n  },\n  vite: {\n    pros: ['开发快速', '配置简单', '现代化'],\n    cons: ['生态较新', '某些插件不兼容'],\n    bestFor: ['Vue项目', '现代化项目']\n  }\n};"
    ],
    resources: [
      {"name": "Webpack 官方文档", "url": "https://webpack.js.org/"},
      {"name": "Vite 官方文档", "url": "https://vitejs.dev/"},
      {"name": "构建工具对比", "url": "https://tool.lu/js/"}
    ]
  },

  Zustand: {
    title: "Zustand 轻量状态管理",
    content: `Zustand 是一个轻量级的React状态管理库，提供简单而强大的状态管理解决方案。

## 核心特性
- **极简API**: 仅需几行代码即可创建store
- **无样板代码**: 不需要providers、reducers或actions
- **TypeScript友好**: 完美的类型推断支持
- **体积小巧**: 仅2KB，无依赖

## 主要优势
- **学习成本低**: API设计直观，容易上手
- **性能优秀**: 基于订阅模式，精确更新组件
- **灵活性强**: 支持多种状态管理模式
- **可测试**: 状态逻辑易于单元测试

## 使用场景
- 中小型React应用的状态管理
- 替代复杂的Redux方案
- 组件间状态共享
- 表单状态管理`,
    examples: [
      "// Zustand 基础用法\nimport { create } from 'zustand';\n\nconst useStore = create((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  decrement: () => set((state) => ({ count: state.count - 1 })),\n  reset: () => set({ count: 0 })\n}));\n\n// 在组件中使用\nfunction Counter() {\n  const { count, increment, decrement } = useStore();\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n    </div>\n  );\n}",
      "// TypeScript 支持\nimport { create } from 'zustand';\n\ninterface BearState {\n  bears: number;\n  increase: (by: number) => void;\n  removeAll: () => void;\n}\n\nconst useBearStore = create<BearState>()((set) => ({\n  bears: 0,\n  increase: (by) => set((state) => ({ bears: state.bears + by })),\n  removeAll: () => set({ bears: 0 })\n}));\n\n// 选择性订阅\nfunction BearCounter() {\n  const bears = useBearStore((state) => state.bears);\n  return <h1>{bears} around here ...</h1>;\n}",
      "// 异步操作和中间件\nimport { create } from 'zustand';\nimport { persist, devtools } from 'zustand/middleware';\n\ninterface UserState {\n  user: User | null;\n  login: (credentials: LoginData) => Promise<void>;\n  logout: () => void;\n  fetchProfile: () => Promise<void>;\n}\n\nconst useUserStore = create<UserState>()()\n  devtools(\n    persist(\n      (set, get) => ({\n        user: null,\n        \n        login: async (credentials) => {\n          try {\n            const user = await authAPI.login(credentials);\n            set({ user }, false, 'user/login');\n          } catch (error) {\n            throw error;\n          }\n        },\n        \n        logout: () => {\n          authAPI.logout();\n          set({ user: null }, false, 'user/logout');\n        },\n        \n        fetchProfile: async () => {\n          const user = await authAPI.getProfile();\n          set({ user }, false, 'user/fetchProfile');\n        }\n      }),\n      {\n        name: 'user-storage',\n        partialize: (state) => ({ user: state.user })\n      }\n    )\n  );"
    ],
    resources: [
      {"name": "Zustand 官方文档", "url": "https://github.com/pmndrs/zustand"},
      {"name": "Zustand 最佳实践", "url": "https://docs.pmnd.rs/zustand/guides/practice-with-no-store-actions"},
      {"name": "状态管理对比", "url": "https://npmtrends.com/zustand-vs-redux-vs-mobx"}
    ]
  },

  Network: {
    title: "网络协议与通信",
    content: `网络协议是Web应用通信的基础，了解各种协议特性对构建高效应用至关重要。

## 主要协议类型
- **HTTP/HTTPS**: 基础的请求-响应协议
- **WebSocket**: 全双工通信协议
- **Server-Sent Events**: 服务端推送协议
- **WebRTC**: 点对点实时通信

## 协议选择原则
- **HTTP**: 标准的API调用、资源获取
- **WebSocket**: 实时聊天、游戏、协作应用
- **SSE**: 服务端推送、实时通知
- **WebRTC**: 音视频通话、文件传输

## 性能考量
- 连接建立开销
- 数据传输效率
- 浏览器兼容性
- 服务器资源消耗`,
    examples: [
      "// 网络请求封装示例\nclass NetworkManager {\n  constructor(baseURL) {\n    this.baseURL = baseURL;\n    this.interceptors = [];\n  }\n  \n  // HTTP请求\n  async request(url, options = {}) {\n    const fullUrl = `${this.baseURL}${url}`;\n    const config = {\n      headers: {\n        'Content-Type': 'application/json',\n        ...options.headers\n      },\n      ...options\n    };\n    \n    try {\n      const response = await fetch(fullUrl, config);\n      if (!response.ok) {\n        throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n      }\n      return await response.json();\n    } catch (error) {\n      console.error('Network request failed:', error);\n      throw error;\n    }\n  }\n  \n  // WebSocket连接\n  createWebSocket(path, protocols) {\n    const wsUrl = this.baseURL.replace(/^http/, 'ws') + path;\n    return new WebSocket(wsUrl, protocols);\n  }\n}"
    ],
    resources: [
      {"name": "HTTP协议详解", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP"},
      {"name": "WebSocket API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket"},
      {"name": "网络协议对比", "url": "https://web.dev/articles/websockets-vs-sse"}
    ]
  },

  Animation: {
    title: "Web动画技术",
    content: `Web动画是提升用户体验的重要手段，包括CSS动画、JS动画、SVG动画等多种实现方式。

## 核心概念
- **CSS动画**: 使用@keyframes和animation属性创建动画
- **JS动画**: 通过requestAnimationFrame实现精确控制
- **Web Animations API**: 现代化的动画控制接口
- **性能优化**: 利用GPU加速和合成层优化

## 动画类型
- **过渡动画**: transition实现简单的状态变化
- **关键帧动画**: 复杂的多阶段动画效果
- **交互动画**: 响应用户操作的动态效果
- **加载动画**: 骨架屏、loading等反馈动画

## 技术优势
- **流畅体验**: 60fps的高性能动画
- **用户反馈**: 及时的交互响应
- **视觉吸引**: 增强界面的吸引力
- **引导作用**: 帮助用户理解界面变化

## 最佳实践
1. 优先使用CSS动画和transform
2. 避免触发layout和paint
3. 使用will-change提示浏览器优化
4. 考虑用户的减少动画偏好设置`,
    examples: [
      "// CSS关键帧动画\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.slide-in {\n  animation: slideIn 0.5s ease-out;\n}\n\n/* 弹跳效果 */\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n\n.bounce {\n  animation: bounce 1s infinite;\n}",
      "// Web Animations API\nconst element = document.querySelector('.box');\n\n// 创建动画\nconst animation = element.animate([\n  { transform: 'translateX(0px)', opacity: 0 },\n  { transform: 'translateX(100px)', opacity: 0.5, offset: 0.7 },\n  { transform: 'translateX(200px)', opacity: 1 }\n], {\n  duration: 1000,\n  easing: 'ease-in-out',\n  fill: 'forwards'\n});\n\n// 控制动画\nanimation.pause();\nanimation.play();\nanimation.reverse();\n\n// 监听动画事件\nanimation.onfinish = () => {\n  console.log('Animation completed');\n};\n\n// 动画序列\nasync function animateSequence() {\n  await element.animate([...], { duration: 500 }).finished;\n  await element.animate([...], { duration: 300 }).finished;\n  console.log('Sequence complete');\n}",
      "// requestAnimationFrame动画\nclass Animator {\n  constructor(element) {\n    this.element = element;\n    this.isRunning = false;\n    this.startTime = null;\n  }\n  \n  start(duration = 1000) {\n    this.isRunning = true;\n    this.startTime = null;\n    \n    const animate = (timestamp) => {\n      if (!this.startTime) this.startTime = timestamp;\n      const progress = (timestamp - this.startTime) / duration;\n      \n      if (progress < 1) {\n        // 缓动函数\n        const eased = this.easeOutCubic(progress);\n        this.element.style.transform = `translateX(${eased * 300}px)`;\n        this.element.style.opacity = eased;\n        \n        if (this.isRunning) {\n          requestAnimationFrame(animate);\n        }\n      } else {\n        this.element.style.transform = 'translateX(300px)';\n        this.element.style.opacity = 1;\n        this.isRunning = false;\n      }\n    };\n    \n    requestAnimationFrame(animate);\n  }\n  \n  stop() {\n    this.isRunning = false;\n  }\n  \n  easeOutCubic(t) {\n    return 1 - Math.pow(1 - t, 3);\n  }\n}\n\n// 使用\nconst animator = new Animator(document.querySelector('.box'));\nanimator.start(2000);"
    ],
    resources: [
      {"name": "CSS动画指南", "url": "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animations"},
      {"name": "Web Animations API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API"},
      {"name": "动画性能优化", "url": "https://web.dev/animations-guide/"},
      {"name": "缓动函数参考", "url": "https://easings.net/"}
    ]
  },

  Auth: {
    title: "认证与鉴权",
    content: `认证(Authentication)和鉴权(Authorization)是Web应用安全的核心，用于验证用户身份和控制访问权限。

## 核心概念
- **认证(Authentication)**: 验证用户身份，确认"你是谁"
- **鉴权(Authorization)**: 验证访问权限，确认"你能做什么"
- **会话管理**: 维护用户登录状态
- **Token机制**: JWT、OAuth等现代认证方案

## 认证方式
- **基础认证**: HTTP Basic Auth
- **Session-Cookie**: 传统的会话管理
- **Token认证**: JWT、Access Token等
- **OAuth2.0**: 第三方授权登录
- **SSO单点登录**: 统一身份认证

## 安全要点
- **密码加密**: bcrypt、scrypt等哈希算法
- **Token安全**: 设置过期时间和刷新机制
- **HTTPS传输**: 加密通信防止窃听
- **CSRF防护**: 防止跨站请求伪造
- **XSS防护**: 防止脚本注入攻击

## 最佳实践
1. 永远不要在前端存储敏感信息
2. 使用HttpOnly Cookie防止XSS
3. 实现Token刷新机制
4. 设置合理的过期时间
5. 记录审计日志`,
    examples: [
      "// JWT认证实现\nimport jwt from 'jsonwebtoken';\n\nclass AuthService {\n  constructor(secretKey) {\n    this.secretKey = secretKey;\n    this.tokenExpiry = '7d';\n    this.refreshExpiry = '30d';\n  }\n  \n  // 生成访问令牌\n  generateAccessToken(userId, email) {\n    return jwt.sign(\n      { userId, email, type: 'access' },\n      this.secretKey,\n      { expiresIn: this.tokenExpiry }\n    );\n  }\n  \n  // 生成刷新令牌\n  generateRefreshToken(userId) {\n    return jwt.sign(\n      { userId, type: 'refresh' },\n      this.secretKey,\n      { expiresIn: this.refreshExpiry }\n    );\n  }\n  \n  // 验证令牌\n  verifyToken(token) {\n    try {\n      return jwt.verify(token, this.secretKey);\n    } catch (error) {\n      if (error.name === 'TokenExpiredError') {\n        throw new Error('Token已过期');\n      }\n      throw new Error('无效的Token');\n    }\n  }\n  \n  // 刷新访问令牌\n  async refreshAccessToken(refreshToken) {\n    const decoded = this.verifyToken(refreshToken);\n    if (decoded.type !== 'refresh') {\n      throw new Error('无效的刷新令牌');\n    }\n    \n    // 从数据库获取用户信息\n    const user = await getUserById(decoded.userId);\n    return this.generateAccessToken(user.id, user.email);\n  }\n}",
      "// 前端认证状态管理\nclass AuthManager {\n  constructor() {\n    this.accessToken = null;\n    this.refreshToken = null;\n    this.user = null;\n  }\n  \n  // 登录\n  async login(email, password) {\n    try {\n      const response = await fetch('/api/auth/login', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ email, password })\n      });\n      \n      if (!response.ok) throw new Error('登录失败');\n      \n      const data = await response.json();\n      this.setTokens(data.accessToken, data.refreshToken);\n      this.user = data.user;\n      \n      return data.user;\n    } catch (error) {\n      console.error('Login error:', error);\n      throw error;\n    }\n  }\n  \n  // 保存令牌\n  setTokens(accessToken, refreshToken) {\n    this.accessToken = accessToken;\n    this.refreshToken = refreshToken;\n    \n    // 存储到localStorage（仅演示，生产环境建议用HttpOnly Cookie）\n    localStorage.setItem('accessToken', accessToken);\n    localStorage.setItem('refreshToken', refreshToken);\n  }\n  \n  // 带认证的请求\n  async authenticatedRequest(url, options = {}) {\n    let token = this.accessToken || localStorage.getItem('accessToken');\n    \n    const headers = {\n      ...options.headers,\n      'Authorization': `Bearer ${token}`\n    };\n    \n    let response = await fetch(url, { ...options, headers });\n    \n    // Token过期，尝试刷新\n    if (response.status === 401) {\n      try {\n        await this.refreshToken();\n        token = this.accessToken;\n        headers['Authorization'] = `Bearer ${token}`;\n        response = await fetch(url, { ...options, headers });\n      } catch (error) {\n        // 刷新失败，跳转登录\n        this.logout();\n        window.location.href = '/login';\n      }\n    }\n    \n    return response;\n  }\n  \n  // 刷新令牌\n  async refreshToken() {\n    const refreshToken = this.refreshToken || localStorage.getItem('refreshToken');\n    \n    const response = await fetch('/api/auth/refresh', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ refreshToken })\n    });\n    \n    if (!response.ok) throw new Error('Token刷新失败');\n    \n    const data = await response.json();\n    this.setTokens(data.accessToken, refreshToken);\n  }\n  \n  // 登出\n  logout() {\n    this.accessToken = null;\n    this.refreshToken = null;\n    this.user = null;\n    localStorage.removeItem('accessToken');\n    localStorage.removeItem('refreshToken');\n  }\n  \n  // 检查是否已登录\n  isAuthenticated() {\n    return !!this.accessToken || !!localStorage.getItem('accessToken');\n  }\n}",
      "// 权限控制中间件（Express示例）\nconst authorize = (requiredPermissions = []) => {\n  return async (req, res, next) => {\n    try {\n      // 从请求头获取token\n      const token = req.headers.authorization?.replace('Bearer ', '');\n      \n      if (!token) {\n        return res.status(401).json({ error: '未提供认证令牌' });\n      }\n      \n      // 验证token\n      const decoded = jwt.verify(token, process.env.JWT_SECRET);\n      \n      // 获取用户信息和权限\n      const user = await User.findById(decoded.userId).populate('role');\n      \n      if (!user) {\n        return res.status(401).json({ error: '用户不存在' });\n      }\n      \n      // 检查权限\n      if (requiredPermissions.length > 0) {\n        const hasPermission = requiredPermissions.every(permission =>\n          user.role.permissions.includes(permission)\n        );\n        \n        if (!hasPermission) {\n          return res.status(403).json({ error: '权限不足' });\n        }\n      }\n      \n      // 将用户信息附加到请求对象\n      req.user = user;\n      next();\n    } catch (error) {\n      if (error.name === 'JsonWebTokenError') {\n        return res.status(401).json({ error: '无效的令牌' });\n      }\n      if (error.name === 'TokenExpiredError') {\n        return res.status(401).json({ error: '令牌已过期' });\n      }\n      res.status(500).json({ error: '服务器错误' });\n    }\n  };\n};\n\n// 使用示例\napp.get('/api/admin/users', \n  authorize(['admin', 'user:read']), \n  async (req, res) => {\n    const users = await User.find();\n    res.json(users);\n  }\n);"
    ],
    resources: [
      {"name": "JWT官方文档", "url": "https://jwt.io/"},
      {"name": "OAuth 2.0指南", "url": "https://oauth.net/2/"},
      {"name": "Web安全最佳实践", "url": "https://owasp.org/www-project-web-security-testing-guide/"},
      {"name": "身份认证方案对比", "url": "https://auth0.com/docs/authenticate"}
    ]
  },

  Canvas: {
    title: "Canvas 2D绘图",
    content: `Canvas是HTML5提供的强大的2D绘图API，可以绘制图形、处理图像、创建动画和游戏。

## 核心概念
- **画布元素**: \`<canvas>\`标签创建绘图区域
- **绘图上下文**: \`getContext('2d')\`获取2D绘图API
- **坐标系统**: 左上角为原点(0,0)
- **状态管理**: \`save()\`和\`restore()\`保存恢复状态

## 基础绘图
- **路径绘制**: moveTo、lineTo、arc等
- **形状绘制**: rect、circle、polygon
- **文本渲染**: fillText、strokeText
- **图像处理**: drawImage、getImageData

## 高级特性
- **渐变填充**: 线性渐变和径向渐变
- **图案填充**: 使用图片或canvas作为填充
- **阴影效果**: 为图形添加阴影
- **合成模式**: 控制图层混合方式
- **变换操作**: translate、rotate、scale

## 应用场景
- **数据可视化**: 图表、仪表盘
- **图像编辑**: 滤镜、裁剪、水印
- **游戏开发**: 2D游戏渲染
- **动画效果**: 粒子效果、动态背景

## 最佳实践
1. 使用离屏Canvas提升性能
2. 批量绘制减少API调用
3. 合理使用requestAnimationFrame
4. 注意Canvas尺寸和CSS尺寸的区别`,
    examples: [
      "// Canvas基础绘图\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\n// 设置Canvas实际尺寸（避免模糊）\nconst dpr = window.devicePixelRatio || 1;\ncanvas.width = canvas.clientWidth * dpr;\ncanvas.height = canvas.clientHeight * dpr;\nctx.scale(dpr, dpr);\n\n// 绘制矩形\nctx.fillStyle = '#007bff';\nctx.fillRect(50, 50, 200, 100);\n\n// 绘制圆形\nctx.beginPath();\nctx.arc(150, 200, 50, 0, Math.PI * 2);\nctx.fillStyle = '#28a745';\nctx.fill();\n\n// 绘制线条\nctx.beginPath();\nctx.moveTo(50, 300);\nctx.lineTo(250, 300);\nctx.lineWidth = 3;\nctx.strokeStyle = '#dc3545';\nctx.stroke();\n\n// 绘制文本\nctx.font = '24px Arial';\nctx.fillStyle = '#333';\nctx.fillText('Hello Canvas', 50, 350);\n\n// 渐变填充\nconst gradient = ctx.createLinearGradient(0, 0, 200, 0);\ngradient.addColorStop(0, '#ff0000');\ngradient.addColorStop(0.5, '#00ff00');\ngradient.addColorStop(1, '#0000ff');\nctx.fillStyle = gradient;\nctx.fillRect(50, 380, 200, 50);",
      "// Canvas动画系统\nclass CanvasAnimator {\n  constructor(canvasId) {\n    this.canvas = document.getElementById(canvasId);\n    this.ctx = this.canvas.getContext('2d');\n    this.particles = [];\n    this.animationId = null;\n    \n    this.setupCanvas();\n  }\n  \n  setupCanvas() {\n    const dpr = window.devicePixelRatio || 1;\n    this.canvas.width = window.innerWidth * dpr;\n    this.canvas.height = window.innerHeight * dpr;\n    this.ctx.scale(dpr, dpr);\n    \n    // 监听窗口大小变化\n    window.addEventListener('resize', () => this.setupCanvas());\n  }\n  \n  // 创建粒子\n  createParticle(x, y) {\n    return {\n      x, y,\n      vx: (Math.random() - 0.5) * 5,\n      vy: (Math.random() - 0.5) * 5,\n      radius: Math.random() * 3 + 1,\n      color: `hsl(${Math.random() * 360}, 70%, 50%)`,\n      alpha: 1,\n      life: 100\n    };\n  }\n  \n  // 更新粒子\n  updateParticles() {\n    for (let i = this.particles.length - 1; i >= 0; i--) {\n      const p = this.particles[i];\n      \n      p.x += p.vx;\n      p.y += p.vy;\n      p.vy += 0.1; // 重力\n      p.alpha -= 0.01;\n      p.life--;\n      \n      // 移除死亡粒子\n      if (p.life <= 0 || p.alpha <= 0) {\n        this.particles.splice(i, 1);\n      }\n    }\n  }\n  \n  // 绘制粒子\n  drawParticles() {\n    this.particles.forEach(p => {\n      this.ctx.save();\n      this.ctx.globalAlpha = p.alpha;\n      this.ctx.fillStyle = p.color;\n      this.ctx.beginPath();\n      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);\n      this.ctx.fill();\n      this.ctx.restore();\n    });\n  }\n  \n  // 动画循环\n  animate() {\n    // 清空画布（半透明实现拖尾效果）\n    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    \n    this.updateParticles();\n    this.drawParticles();\n    \n    this.animationId = requestAnimationFrame(() => this.animate());\n  }\n  \n  // 开始动画\n  start() {\n    // 鼠标点击创建粒子\n    this.canvas.addEventListener('click', (e) => {\n      for (let i = 0; i < 30; i++) {\n        this.particles.push(this.createParticle(e.clientX, e.clientY));\n      }\n    });\n    \n    this.animate();\n  }\n  \n  // 停止动画\n  stop() {\n    if (this.animationId) {\n      cancelAnimationFrame(this.animationId);\n      this.animationId = null;\n    }\n  }\n}\n\n// 使用\nconst animator = new CanvasAnimator('myCanvas');\nanimator.start();",
      "// Canvas图像处理\nclass ImageProcessor {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n  }\n  \n  // 加载图片\n  async loadImage(src) {\n    return new Promise((resolve, reject) => {\n      const img = new Image();\n      img.onload = () => resolve(img);\n      img.onerror = reject;\n      img.src = src;\n    });\n  }\n  \n  // 绘制图片\n  drawImage(img, x = 0, y = 0) {\n    this.canvas.width = img.width;\n    this.canvas.height = img.height;\n    this.ctx.drawImage(img, x, y);\n  }\n  \n  // 灰度滤镜\n  applyGrayscale() {\n    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);\n    const data = imageData.data;\n    \n    for (let i = 0; i < data.length; i += 4) {\n      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;\n      data[i] = avg;     // R\n      data[i + 1] = avg; // G\n      data[i + 2] = avg; // B\n    }\n    \n    this.ctx.putImageData(imageData, 0, 0);\n  }\n  \n  // 亮度调整\n  adjustBrightness(amount) {\n    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);\n    const data = imageData.data;\n    \n    for (let i = 0; i < data.length; i += 4) {\n      data[i] += amount;     // R\n      data[i + 1] += amount; // G\n      data[i + 2] += amount; // B\n    }\n    \n    this.ctx.putImageData(imageData, 0, 0);\n  }\n  \n  // 模糊效果\n  applyBlur(radius = 5) {\n    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);\n    const blurred = this.boxBlur(imageData, radius);\n    this.ctx.putImageData(blurred, 0, 0);\n  }\n  \n  boxBlur(imageData, radius) {\n    const { width, height, data } = imageData;\n    const result = new ImageData(width, height);\n    \n    for (let y = 0; y < height; y++) {\n      for (let x = 0; x < width; x++) {\n        let r = 0, g = 0, b = 0, count = 0;\n        \n        for (let ky = -radius; ky <= radius; ky++) {\n          for (let kx = -radius; kx <= radius; kx++) {\n            const px = x + kx;\n            const py = y + ky;\n            \n            if (px >= 0 && px < width && py >= 0 && py < height) {\n              const i = (py * width + px) * 4;\n              r += data[i];\n              g += data[i + 1];\n              b += data[i + 2];\n              count++;\n            }\n          }\n        }\n        \n        const i = (y * width + x) * 4;\n        result.data[i] = r / count;\n        result.data[i + 1] = g / count;\n        result.data[i + 2] = b / count;\n        result.data[i + 3] = data[i + 3];\n      }\n    }\n    \n    return result;\n  }\n  \n  // 导出图片\n  exportImage(format = 'image/png', quality = 0.92) {\n    return this.canvas.toDataURL(format, quality);\n  }\n}\n\n// 使用示例\nconst processor = new ImageProcessor(document.getElementById('canvas'));\nprocessor.loadImage('photo.jpg').then(img => {\n  processor.drawImage(img);\n  processor.applyGrayscale();\n  processor.adjustBrightness(20);\n  \n  // 下载处理后的图片\n  const link = document.createElement('a');\n  link.download = 'processed.png';\n  link.href = processor.exportImage();\n  link.click();\n});"
    ],
    resources: [
      {"name": "Canvas API文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API"},
      {"name": "Canvas教程", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial"},
      {"name": "HTML5 Canvas核心技术", "url": "https://www.html5canvastutorials.com/"},
      {"name": "Canvas性能优化", "url": "https://web.dev/canvas-performance/"}
    ]
  },

  CDN: {
    title: "内容分发网络 (CDN)",
    content: `CDN (Content Delivery Network) 是一种分布式服务器系统，通过将内容缓存到全球各地的边缘节点，为用户提供快速、可靠的内容访问。

## 核心概念
- **边缘节点**: 分布在全球各地的缓存服务器
- **回源**: 边缘节点向源服务器获取内容
- **缓存策略**: 控制内容在CDN节点的存储时间
- **智能调度**: 自动将用户请求路由到最近的节点

## 主要功能
- **静态资源加速**: JS、CSS、图片等静态文件分发
- **动态内容加速**: API请求优化和加速
- **流媒体分发**: 视频、音频内容传输
- **安全防护**: DDoS防护、WAF防火墙

## 技术优势
- **访问加速**: 减少网络延迟，提升加载速度
- **减轻负载**: 降低源站服务器压力
- **高可用性**: 多节点冗余，提高服务稳定性
- **成本优化**: 减少带宽消耗和服务器成本

## 缓存控制
- **Cache-Control**: 控制缓存行为
- **ETag/Last-Modified**: 验证缓存是否过期
- **URL参数**: 版本控制和缓存刷新
- **Purge API**: 主动清除CDN缓存

## 最佳实践
1. 为静态资源设置长期缓存
2. 使用版本号或哈希实现缓存更新
3. 配置合理的缓存策略
4. 启用HTTPS加密传输
5. 使用CDN预热功能提前缓存热点内容`,
    examples: [
      "// CDN资源加载配置\n// HTML中引入CDN资源\n<!DOCTYPE html>\n<html>\n<head>\n  <!-- 使用CDN加载库文件，设置integrity保证安全 -->\n  <script \n    src=\"https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js\"\n    integrity=\"sha384-xxx\"\n    crossorigin=\"anonymous\"\n  ></script>\n  \n  <!-- 使用多个CDN提供备份 -->\n  <script \n    src=\"https://cdn1.example.com/lib.js\"\n    onerror=\"this.onerror=null;this.src='https://cdn2.example.com/lib.js'\"\n  ></script>\n  \n  <!-- 带版本号的静态资源 -->\n  <link rel=\"stylesheet\" href=\"https://cdn.example.com/css/style.v1.2.3.css\">\n  <script src=\"https://cdn.example.com/js/app.v1.2.3.js\"></script>\n</head>\n<body>\n  <!-- 图片使用CDN -->\n  <img \n    src=\"https://cdn.example.com/images/logo.png\" \n    srcset=\"https://cdn.example.com/images/logo@2x.png 2x\"\n    alt=\"Logo\"\n  >\n</body>\n</html>",
      "// CDN缓存控制配置\n// Nginx配置示例\nserver {\n  listen 80;\n  server_name cdn.example.com;\n  \n  # 静态资源目录\n  root /var/www/cdn;\n  \n  # 通用缓存配置\n  location / {\n    # 启用缓存\n    add_header Cache-Control \"public, max-age=31536000, immutable\";\n    \n    # 启用gzip压缩\n    gzip on;\n    gzip_types text/css application/javascript image/svg+xml;\n    gzip_comp_level 6;\n    \n    # 跨域配置\n    add_header Access-Control-Allow-Origin \"*\";\n    add_header Access-Control-Allow-Methods \"GET, OPTIONS\";\n  }\n  \n  # HTML文件不缓存\n  location ~* \\.html$ {\n    add_header Cache-Control \"no-cache, no-store, must-revalidate\";\n    expires 0;\n  }\n  \n  # CSS/JS文件长期缓存\n  location ~* \\.(css|js)$ {\n    add_header Cache-Control \"public, max-age=31536000, immutable\";\n    expires 1y;\n  }\n  \n  # 图片文件缓存\n  location ~* \\.(jpg|jpeg|png|gif|ico|svg|webp)$ {\n    add_header Cache-Control \"public, max-age=2592000\";\n    expires 30d;\n  }\n  \n  # 字体文件缓存\n  location ~* \\.(woff|woff2|ttf|eot)$ {\n    add_header Cache-Control \"public, max-age=31536000, immutable\";\n    add_header Access-Control-Allow-Origin \"*\";\n    expires 1y;\n  }\n}",
      "// JavaScript中的CDN资源管理\nclass CDNManager {\n  constructor() {\n    this.cdnHosts = [\n      'https://cdn1.example.com',\n      'https://cdn2.example.com',\n      'https://cdn3.example.com'\n    ];\n    this.currentIndex = 0;\n    this.version = '1.2.3';\n  }\n  \n  // 获取CDN URL（带版本号）\n  getUrl(path) {\n    const host = this.cdnHosts[this.currentIndex];\n    // 添加版本号参数，便于缓存控制\n    return `${host}${path}?v=${this.version}`;\n  }\n  \n  // CDN故障切换\n  switchToNextCDN() {\n    this.currentIndex = (this.currentIndex + 1) % this.cdnHosts.length;\n    console.log(`Switched to CDN: ${this.cdnHosts[this.currentIndex]}`);\n  }\n  \n  // 加载资源（带重试机制）\n  async loadResource(path, type = 'script', retries = 3) {\n    for (let i = 0; i < retries; i++) {\n      try {\n        const url = this.getUrl(path);\n        \n        if (type === 'script') {\n          await this.loadScript(url);\n        } else if (type === 'style') {\n          await this.loadStylesheet(url);\n        } else if (type === 'image') {\n          await this.loadImage(url);\n        }\n        \n        return url;\n      } catch (error) {\n        console.error(`Failed to load from CDN (attempt ${i + 1}):`, error);\n        \n        if (i < retries - 1) {\n          this.switchToNextCDN();\n        } else {\n          throw new Error(`Failed to load resource after ${retries} attempts`);\n        }\n      }\n    }\n  }\n  \n  // 加载脚本\n  loadScript(url) {\n    return new Promise((resolve, reject) => {\n      const script = document.createElement('script');\n      script.src = url;\n      script.onload = resolve;\n      script.onerror = reject;\n      document.head.appendChild(script);\n    });\n  }\n  \n  // 加载样式表\n  loadStylesheet(url) {\n    return new Promise((resolve, reject) => {\n      const link = document.createElement('link');\n      link.rel = 'stylesheet';\n      link.href = url;\n      link.onload = resolve;\n      link.onerror = reject;\n      document.head.appendChild(link);\n    });\n  }\n  \n  // 预加载图片\n  loadImage(url) {\n    return new Promise((resolve, reject) => {\n      const img = new Image();\n      img.onload = () => resolve(img);\n      img.onerror = reject;\n      img.src = url;\n    });\n  }\n  \n  // 批量预加载资源\n  async preloadResources(resources) {\n    const promises = resources.map(({ path, type }) => \n      this.loadResource(path, type)\n    );\n    \n    return Promise.all(promises);\n  }\n}\n\n// 使用示例\nconst cdn = new CDNManager();\n\n// 加载资源\nawait cdn.loadResource('/js/app.js', 'script');\nawait cdn.loadResource('/css/style.css', 'style');\n\n// 批量预加载\nawait cdn.preloadResources([\n  { path: '/images/hero.jpg', type: 'image' },\n  { path: '/js/vendor.js', type: 'script' },\n  { path: '/css/vendor.css', type: 'style' }\n]);"
    ],
    resources: [
      {"name": "CDN工作原理", "url": "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"},
      {"name": "HTTP缓存策略", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching"},
      {"name": "jsdelivr免费CDN", "url": "https://www.jsdelivr.com/"},
      {"name": "CDN性能优化", "url": "https://web.dev/content-delivery-networks/"}
    ]
  },

  CI_CD: {
    title: "持续集成/持续部署",
    content: `CI/CD (Continuous Integration/Continuous Deployment) 是现代软件开发的核心实践，通过自动化构建、测试和部署流程，提高开发效率和软件质量。

## 核心概念
- **持续集成(CI)**: 频繁地将代码集成到主分支，自动运行测试
- **持续交付(CD)**: 代码随时处于可部署状态
- **持续部署(CD)**: 自动将代码部署到生产环境
- **流水线(Pipeline)**: 自动化的构建、测试、部署流程

## CI流程
1. **代码提交**: 开发者提交代码到版本控制系统
2. **自动构建**: 触发自动构建流程
3. **运行测试**: 执行单元测试、集成测试
4. **代码检查**: 运行linter、代码质量分析
5. **生成报告**: 测试覆盖率、构建状态报告

## CD流程
1. **构建产物**: 生成可部署的应用包
2. **环境准备**: 配置部署环境
3. **自动部署**: 部署到测试/生产环境
4. **健康检查**: 验证部署是否成功
5. **回滚机制**: 失败时自动回滚

## 主流工具
- **GitHub Actions**: GitHub集成的CI/CD平台
- **GitLab CI/CD**: GitLab内置的CI/CD系统
- **Jenkins**: 开源的自动化服务器
- **CircleCI**: 云端CI/CD平台
- **Travis CI**: 开源项目CI平台

## 最佳实践
1. 保持构建快速（<10分钟）
2. 每次提交都运行CI
3. 自动化所有测试
4. 使用环境变量管理配置
5. 实现蓝绿部署或金丝雀发布
6. 监控部署后的应用健康状态`,
    examples: [
      "# GitHub Actions配置示例\n# .github/workflows/ci-cd.yml\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  # CI阶段：构建和测试\n  build-and-test:\n    runs-on: ubuntu-latest\n    \n    strategy:\n      matrix:\n        node-version: [16.x, 18.x, 20.x]\n    \n    steps:\n    - name: 检出代码\n      uses: actions/checkout@v3\n    \n    - name: 设置Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'npm'\n    \n    - name: 安装依赖\n      run: npm ci\n    \n    - name: 代码检查\n      run: npm run lint\n    \n    - name: 运行测试\n      run: npm test\n    \n    - name: 生成测试覆盖率报告\n      run: npm run test:coverage\n    \n    - name: 上传覆盖率报告\n      uses: codecov/codecov-action@v3\n      with:\n        files: ./coverage/lcov.info\n    \n    - name: 构建项目\n      run: npm run build\n    \n    - name: 上传构建产物\n      uses: actions/upload-artifact@v3\n      with:\n        name: build-files\n        path: dist/\n  \n  # CD阶段：部署\n  deploy:\n    needs: build-and-test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    \n    steps:\n    - name: 检出代码\n      uses: actions/checkout@v3\n    \n    - name: 下载构建产物\n      uses: actions/download-artifact@v3\n      with:\n        name: build-files\n        path: dist/\n    \n    - name: 部署到Vercel\n      uses: amondnet/vercel-action@v20\n      with:\n        vercel-token: ${{ secrets.VERCEL_TOKEN }}\n        vercel-org-id: ${{ secrets.ORG_ID }}\n        vercel-project-id: ${{ secrets.PROJECT_ID }}\n        vercel-args: '--prod'\n    \n    - name: 发送部署通知\n      uses: 8398a7/action-slack@v3\n      with:\n        status: ${{ job.status }}\n        webhook_url: ${{ secrets.SLACK_WEBHOOK }}\n      if: always()",
      "# GitLab CI/CD配置示例\n# .gitlab-ci.yml\nstages:\n  - build\n  - test\n  - deploy\n\nvariables:\n  NODE_VERSION: \"18\"\n  DOCKER_DRIVER: overlay2\n\n# 缓存依赖\ncache:\n  key: ${CI_COMMIT_REF_SLUG}\n  paths:\n    - node_modules/\n    - .npm/\n\n# 构建阶段\nbuild:\n  stage: build\n  image: node:${NODE_VERSION}\n  script:\n    - npm ci --cache .npm --prefer-offline\n    - npm run build\n  artifacts:\n    paths:\n      - dist/\n    expire_in: 1 hour\n  only:\n    - main\n    - develop\n\n# 测试阶段\ntest:unit:\n  stage: test\n  image: node:${NODE_VERSION}\n  script:\n    - npm ci --cache .npm --prefer-offline\n    - npm run test:unit\n  coverage: '/Statements\\s+:\\s+(\\d+\\.\\d+)%/'\n  artifacts:\n    reports:\n      coverage_report:\n        coverage_format: cobertura\n        path: coverage/cobertura-coverage.xml\n\ntest:e2e:\n  stage: test\n  image: cypress/browsers:node18.12.0-chrome106\n  script:\n    - npm ci --cache .npm --prefer-offline\n    - npm run test:e2e\n  artifacts:\n    when: always\n    paths:\n      - cypress/videos/\n      - cypress/screenshots/\n\nlint:\n  stage: test\n  image: node:${NODE_VERSION}\n  script:\n    - npm ci --cache .npm --prefer-offline\n    - npm run lint\n\n# 部署到生产环境\ndeploy:production:\n  stage: deploy\n  image: node:${NODE_VERSION}\n  script:\n    - npm install -g vercel\n    - vercel --token=$VERCEL_TOKEN --prod\n  environment:\n    name: production\n    url: https://myapp.com\n  only:\n    - main\n  when: manual  # 手动触发部署\n\n# 部署到测试环境\ndeploy:staging:\n  stage: deploy\n  image: node:${NODE_VERSION}\n  script:\n    - npm install -g vercel\n    - vercel --token=$VERCEL_TOKEN\n  environment:\n    name: staging\n    url: https://staging.myapp.com\n  only:\n    - develop",
      "// Docker多阶段构建配置\n// Dockerfile\n# 构建阶段\nFROM node:18-alpine AS builder\n\nWORKDIR /app\n\n# 复制package文件\nCOPY package*.json ./\n\n# 安装依赖\nRUN npm ci --only=production && \\\n    npm cache clean --force\n\n# 复制源代码\nCOPY . .\n\n# 构建应用\nRUN npm run build\n\n# 生产阶段\nFROM nginx:alpine\n\n# 从构建阶段复制构建产物\nCOPY --from=builder /app/dist /usr/share/nginx/html\n\n# 复制nginx配置\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n\n# 暴露端口\nEXPOSE 80\n\n# 健康检查\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1\n\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n# docker-compose.yml配置\nversion: '3.8'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - \"3000:80\"\n    environment:\n      - NODE_ENV=production\n    restart: unless-stopped\n    healthcheck:\n      test: [\"CMD\", \"wget\", \"--quiet\", \"--tries=1\", \"--spider\", \"http://localhost/\"]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n\n# 部署脚本\n# deploy.sh\n#!/bin/bash\n\nset -e\n\necho \"🚀 Starting deployment...\"\n\n# 构建Docker镜像\necho \"📦 Building Docker image...\"\ndocker build -t myapp:latest .\n\n# 标记镜像\necho \"🏷️  Tagging image...\"\ndocker tag myapp:latest registry.example.com/myapp:latest\ndocker tag myapp:latest registry.example.com/myapp:$(git rev-parse --short HEAD)\n\n# 推送镜像\necho \"⬆️  Pushing image to registry...\"\ndocker push registry.example.com/myapp:latest\ndocker push registry.example.com/myapp:$(git rev-parse --short HEAD)\n\n# 部署到Kubernetes\necho \"☸️  Deploying to Kubernetes...\"\nkubectl set image deployment/myapp myapp=registry.example.com/myapp:$(git rev-parse --short HEAD)\n\n# 等待部署完成\necho \"⏳ Waiting for rollout to complete...\"\nkubectl rollout status deployment/myapp\n\n# 验证部署\necho \"✅ Verifying deployment...\"\nkubectl get pods -l app=myapp\n\necho \"🎉 Deployment completed successfully!\""
    ],
    resources: [
      {"name": "GitHub Actions文档", "url": "https://docs.github.com/en/actions"},
      {"name": "GitLab CI/CD文档", "url": "https://docs.gitlab.com/ee/ci/"},
      {"name": "Jenkins官方文档", "url": "https://www.jenkins.io/doc/"},
      {"name": "CI/CD最佳实践", "url": "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment"}
    ]
  },

  Cookie: {
    title: "Cookie浏览器存储",
    content: `Cookie是存储在用户浏览器中的小型文本数据，主要用于会话管理、个性化设置和用户跟踪。

## 核心概念
- **键值对**: Cookie以键值对形式存储数据
- **过期时间**: 可设置Cookie的有效期
- **作用域**: 通过Domain和Path控制Cookie的作用范围
- **安全属性**: HttpOnly、Secure等安全标志

## Cookie属性
- **Name/Value**: Cookie的名称和值
- **Expires/Max-Age**: 过期时间
- **Domain**: 作用域名
- **Path**: 作用路径
- **Secure**: 仅HTTPS传输
- **HttpOnly**: 禁止JavaScript访问
- **SameSite**: 防止CSRF攻击

## 使用场景
- **会话管理**: 保持用户登录状态
- **个性化**: 保存用户偏好设置
- **追踪**: 分析用户行为
- **购物车**: 临时存储购物信息

## 安全注意事项
- **敏感信息**: 不要存储敏感数据
- **XSS防护**: 使用HttpOnly标志
- **CSRF防护**: 使用SameSite属性
- **HTTPS**: 使用Secure标志确保加密传输
- **大小限制**: 单个Cookie最大4KB

## 最佳实践
1. 为敏感Cookie设置HttpOnly和Secure
2. 使用SameSite=Strict或Lax防止CSRF
3. 设置合理的过期时间
4. 最小化Cookie大小
5. 考虑隐私法规要求（GDPR等）`,
    examples: [
      "// JavaScript Cookie操作\nclass CookieManager {\n  // 设置Cookie\n  static set(name, value, options = {}) {\n    const {\n      expires = 7,        // 默认7天过期\n      path = '/',\n      domain,\n      secure = false,\n      sameSite = 'Lax'\n    } = options;\n    \n    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;\n    \n    // 设置过期时间\n    if (expires) {\n      const date = new Date();\n      date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);\n      cookie += `; expires=${date.toUTCString()}`;\n    }\n    \n    cookie += `; path=${path}`;\n    \n    if (domain) {\n      cookie += `; domain=${domain}`;\n    }\n    \n    if (secure) {\n      cookie += '; secure';\n    }\n    \n    cookie += `; SameSite=${sameSite}`;\n    \n    document.cookie = cookie;\n  }\n  \n  // 获取Cookie\n  static get(name) {\n    const cookies = document.cookie.split('; ');\n    \n    for (const cookie of cookies) {\n      const [key, value] = cookie.split('=');\n      \n      if (decodeURIComponent(key) === name) {\n        return decodeURIComponent(value);\n      }\n    }\n    \n    return null;\n  }\n  \n  // 删除Cookie\n  static remove(name, options = {}) {\n    this.set(name, '', {\n      ...options,\n      expires: -1\n    });\n  }\n  \n  // 获取所有Cookie\n  static getAll() {\n    const cookies = {};\n    const cookieStrings = document.cookie.split('; ');\n    \n    for (const cookie of cookieStrings) {\n      const [key, value] = cookie.split('=');\n      cookies[decodeURIComponent(key)] = decodeURIComponent(value);\n    }\n    \n    return cookies;\n  }\n  \n  // 检查Cookie是否存在\n  static has(name) {\n    return this.get(name) !== null;\n  }\n}\n\n// 使用示例\n// 设置普通Cookie\nCookieManager.set('username', 'john_doe', { expires: 30 });\n\n// 设置安全Cookie\nCookieManager.set('session_token', 'abc123xyz', {\n  expires: 1,\n  secure: true,\n  sameSite: 'Strict'\n});\n\n// 获取Cookie\nconst username = CookieManager.get('username');\nconsole.log('Username:', username);\n\n// 删除Cookie\nCookieManager.remove('username');\n\n// 获取所有Cookie\nconst allCookies = CookieManager.getAll();\nconsole.log('All cookies:', allCookies);",
      "// Express.js中的Cookie操作\nconst express = require('express');\nconst cookieParser = require('cookie-parser');\n\nconst app = express();\n\n// 使用cookie-parser中间件\napp.use(cookieParser('your-secret-key'));\n\n// 设置Cookie\napp.get('/set-cookie', (req, res) => {\n  // 普通Cookie\n  res.cookie('user', 'john_doe', {\n    maxAge: 24 * 60 * 60 * 1000, // 24小时\n    httpOnly: false  // JavaScript可访问\n  });\n  \n  // 安全Cookie（会话Cookie）\n  res.cookie('sessionId', 'abc123xyz', {\n    httpOnly: true,   // 防止XSS攻击\n    secure: true,     // 仅HTTPS传输\n    sameSite: 'strict', // 防止CSRF攻击\n    maxAge: 60 * 60 * 1000 // 1小时\n  });\n  \n  // 签名Cookie（防篡改）\n  res.cookie('verified', 'true', {\n    signed: true,\n    httpOnly: true\n  });\n  \n  res.send('Cookies have been set');\n});\n\n// 读取Cookie\napp.get('/get-cookie', (req, res) => {\n  // 读取普通Cookie\n  const user = req.cookies.user;\n  \n  // 读取签名Cookie\n  const verified = req.signedCookies.verified;\n  \n  res.json({\n    user,\n    verified,\n    allCookies: req.cookies,\n    allSignedCookies: req.signedCookies\n  });\n});\n\n// 删除Cookie\napp.get('/clear-cookie', (req, res) => {\n  res.clearCookie('user');\n  res.clearCookie('sessionId', {\n    httpOnly: true,\n    secure: true\n  });\n  \n  res.send('Cookies have been cleared');\n});\n\n// Cookie认证中间件\nconst authenticate = (req, res, next) => {\n  const sessionId = req.cookies.sessionId;\n  \n  if (!sessionId) {\n    return res.status(401).json({ error: '未授权访问' });\n  }\n  \n  // 验证session\n  // ... 验证逻辑\n  \n  next();\n};\n\n// 受保护的路由\napp.get('/protected', authenticate, (req, res) => {\n  res.json({ message: '这是受保护的资源' });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
      "// Cookie同意管理（GDPR合规）\nclass CookieConsent {\n  constructor() {\n    this.consentKey = 'cookie_consent';\n    this.categories = {\n      necessary: true,      // 必要Cookie，始终启用\n      analytics: false,     // 分析Cookie\n      marketing: false,     // 营销Cookie\n      preferences: false    // 偏好Cookie\n    };\n    \n    this.loadConsent();\n  }\n  \n  // 加载用户同意状态\n  loadConsent() {\n    const consent = localStorage.getItem(this.consentKey);\n    \n    if (consent) {\n      try {\n        this.categories = JSON.parse(consent);\n      } catch (e) {\n        console.error('Failed to parse cookie consent:', e);\n      }\n    }\n  }\n  \n  // 保存用户同意\n  saveConsent() {\n    localStorage.setItem(this.consentKey, JSON.stringify(this.categories));\n    this.applyConsent();\n  }\n  \n  // 应用同意设置\n  applyConsent() {\n    // 启用/禁用分析Cookie\n    if (this.categories.analytics) {\n      this.enableAnalytics();\n    } else {\n      this.disableAnalytics();\n    }\n    \n    // 启用/禁用营销Cookie\n    if (this.categories.marketing) {\n      this.enableMarketing();\n    } else {\n      this.disableMarketing();\n    }\n  }\n  \n  // 启用分析\n  enableAnalytics() {\n    // 加载Google Analytics\n    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-XXXXXXX');\n  }\n  \n  // 禁用分析\n  disableAnalytics() {\n    // 删除分析Cookie\n    this.deleteCookiesByPattern(/^_ga/);\n  }\n  \n  // 启用营销\n  enableMarketing() {\n    // 加载营销脚本\n    console.log('Marketing cookies enabled');\n  }\n  \n  // 禁用营销\n  disableMarketing() {\n    // 删除营销Cookie\n    this.deleteCookiesByPattern(/^_fbp|^_gcl/);\n  }\n  \n  // 删除匹配模式的Cookie\n  deleteCookiesByPattern(pattern) {\n    const cookies = document.cookie.split('; ');\n    \n    for (const cookie of cookies) {\n      const [name] = cookie.split('=');\n      \n      if (pattern.test(name)) {\n        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;\n      }\n    }\n  }\n  \n  // 显示Cookie横幅\n  showBanner() {\n    if (localStorage.getItem(this.consentKey)) {\n      return; // 已经设置过同意\n    }\n    \n    const banner = document.createElement('div');\n    banner.className = 'cookie-consent-banner';\n    banner.innerHTML = `\n      <div class=\"cookie-consent-content\">\n        <p>我们使用Cookie来改善您的体验。请选择您同意的Cookie类型：</p>\n        <div class=\"cookie-options\">\n          <label><input type=\"checkbox\" checked disabled> 必要Cookie</label>\n          <label><input type=\"checkbox\" id=\"analytics-consent\"> 分析Cookie</label>\n          <label><input type=\"checkbox\" id=\"marketing-consent\"> 营销Cookie</label>\n        </div>\n        <div class=\"cookie-actions\">\n          <button id=\"accept-all\">全部接受</button>\n          <button id=\"accept-selected\">保存选择</button>\n          <button id=\"reject-all\">仅必要</button>\n        </div>\n      </div>\n    `;\n    \n    document.body.appendChild(banner);\n    \n    // 绑定事件\n    document.getElementById('accept-all').onclick = () => {\n      this.categories = {\n        necessary: true,\n        analytics: true,\n        marketing: true,\n        preferences: true\n      };\n      this.saveConsent();\n      banner.remove();\n    };\n    \n    document.getElementById('accept-selected').onclick = () => {\n      this.categories.analytics = document.getElementById('analytics-consent').checked;\n      this.categories.marketing = document.getElementById('marketing-consent').checked;\n      this.saveConsent();\n      banner.remove();\n    };\n    \n    document.getElementById('reject-all').onclick = () => {\n      this.categories = {\n        necessary: true,\n        analytics: false,\n        marketing: false,\n        preferences: false\n      };\n      this.saveConsent();\n      banner.remove();\n    };\n  }\n}\n\n// 初始化\nconst cookieConsent = new CookieConsent();\ncookieConsent.showBanner();"
    ],
    resources: [
      {"name": "HTTP Cookie文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies"},
      {"name": "Cookie属性详解", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie"},
      {"name": "SameSite Cookie说明", "url": "https://web.dev/samesite-cookies-explained/"},
      {"name": "GDPR Cookie合规", "url": "https://gdpr.eu/cookies/"}
    ]
  },

  CORS: {
    title: "跨域资源共享 (CORS)",
    content: `CORS (Cross-Origin Resource Sharing) 是一种基于HTTP头的机制，允许服务器指示浏览器应该允许哪些源访问其资源。

## 核心概念
- **同源策略**: 浏览器的安全机制，限制不同源之间的资源访问
- **源(Origin)**: 协议、域名、端口的组合
- **预检请求**: OPTIONS请求，检查实际请求是否安全
- **简单请求**: 满足特定条件，不触发预检的请求

## CORS头部
**请求头**:
- \`Origin\`: 请求来源
- \`Access-Control-Request-Method\`: 预检请求的HTTP方法
- \`Access-Control-Request-Headers\`: 预检请求的自定义头

**响应头**:
- \`Access-Control-Allow-Origin\`: 允许的源
- \`Access-Control-Allow-Methods\`: 允许的HTTP方法
- \`Access-Control-Allow-Headers\`: 允许的请求头
- \`Access-Control-Allow-Credentials\`: 是否允许携带凭证
- \`Access-Control-Max-Age\`: 预检请求的缓存时间

## 简单请求条件
1. 方法: GET、POST、HEAD
2. 头部: Accept、Accept-Language、Content-Language、Content-Type
3. Content-Type: application/x-www-form-urlencoded、multipart/form-data、text/plain

## 预检请求
不满足简单请求条件时，浏览器会先发送OPTIONS请求进行预检：
- 使用PUT、DELETE、PATCH等方法
- 设置自定义请求头
- Content-Type为application/json

## 凭证请求
携带Cookie或HTTP认证信息的请求：
- 前端设置: \`credentials: 'include'\`
- 后端响应: \`Access-Control-Allow-Credentials: true\`
- \`Access-Control-Allow-Origin\`不能为\`*\`

## 常见问题
- **CORS错误**: 检查服务器配置和响应头
- **预检失败**: 确保OPTIONS请求正确处理
- **凭证问题**: 正确配置Credentials相关设置
- **缓存问题**: 合理设置Max-Age避免频繁预检`,
    examples: [
      "// 前端CORS请求配置\n// 使用Fetch API\nclass ApiClient {\n  constructor(baseURL) {\n    this.baseURL = baseURL;\n  }\n  \n  // 简单GET请求\n  async get(endpoint) {\n    const response = await fetch(`${this.baseURL}${endpoint}`, {\n      method: 'GET',\n      // 默认不携带凭证\n    });\n    \n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n    }\n    \n    return response.json();\n  }\n  \n  // 带凭证的请求\n  async getWithCredentials(endpoint) {\n    const response = await fetch(`${this.baseURL}${endpoint}`, {\n      method: 'GET',\n      credentials: 'include', // 携带Cookie\n      headers: {\n        'Accept': 'application/json'\n      }\n    });\n    \n    return response.json();\n  }\n  \n  // POST请求（会触发预检）\n  async post(endpoint, data) {\n    const response = await fetch(`${this.baseURL}${endpoint}`, {\n      method: 'POST',\n      credentials: 'include',\n      headers: {\n        'Content-Type': 'application/json',\n        'X-Custom-Header': 'value' // 自定义头会触发预检\n      },\n      body: JSON.stringify(data)\n    });\n    \n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}`);\n    }\n    \n    return response.json();\n  }\n  \n  // 处理CORS错误\n  async requestWithErrorHandling(endpoint, options) {\n    try {\n      const response = await fetch(`${this.baseURL}${endpoint}`, options);\n      return response.json();\n    } catch (error) {\n      if (error.message.includes('CORS')) {\n        console.error('CORS错误：', error);\n        throw new Error('跨域请求失败，请检查服务器CORS配置');\n      }\n      throw error;\n    }\n  }\n}\n\n// 使用示例\nconst api = new ApiClient('https://api.example.com');\n\n// 简单请求\napi.get('/users').then(users => console.log(users));\n\n// 带凭证的请求\napi.getWithCredentials('/profile').then(profile => console.log(profile));\n\n// POST请求\napi.post('/users', { name: 'John', email: 'john@example.com' })\n  .then(result => console.log(result));",
      "// Express.js CORS中间件配置\nconst express = require('express');\nconst cors = require('cors');\n\nconst app = express();\n\n// 方法1: 简单配置（允许所有源）\napp.use(cors());\n\n// 方法2: 基础配置\napp.use(cors({\n  origin: 'https://example.com',           // 允许的源\n  methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的方法\n  allowedHeaders: ['Content-Type', 'Authorization'], // 允许的头部\n  credentials: true,                        // 允许携带凭证\n  maxAge: 86400                            // 预检缓存24小时\n}));\n\n// 方法3: 动态配置（多个源）\nconst allowedOrigins = [\n  'https://example.com',\n  'https://app.example.com',\n  'http://localhost:3000'\n];\n\nconst corsOptions = {\n  origin: function(origin, callback) {\n    // 允许没有origin的请求（如移动应用、Postman）\n    if (!origin) return callback(null, true);\n    \n    if (allowedOrigins.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error('Not allowed by CORS'));\n    }\n  },\n  credentials: true,\n  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],\n  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],\n  exposedHeaders: ['X-Total-Count', 'X-Page-Number'], // 暴露自定义响应头\n  maxAge: 600 // 预检缓存10分钟\n};\n\napp.use(cors(corsOptions));\n\n// 方法4: 手动设置CORS头\napp.use((req, res, next) => {\n  const origin = req.headers.origin;\n  \n  if (allowedOrigins.includes(origin)) {\n    res.setHeader('Access-Control-Allow-Origin', origin);\n  }\n  \n  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');\n  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');\n  res.setHeader('Access-Control-Allow-Credentials', 'true');\n  res.setHeader('Access-Control-Max-Age', '86400');\n  \n  // 处理预检请求\n  if (req.method === 'OPTIONS') {\n    return res.status(204).end();\n  }\n  \n  next();\n});\n\n// 方法5: 针对特定路由的CORS配置\napp.get('/api/public', cors(), (req, res) => {\n  res.json({ message: 'This route has CORS enabled for all origins' });\n});\n\napp.post('/api/private', cors(corsOptions), (req, res) => {\n  res.json({ message: 'This route has CORS enabled for specific origins' });\n});\n\n// 错误处理\napp.use((err, req, res, next) => {\n  if (err.message === 'Not allowed by CORS') {\n    res.status(403).json({\n      error: 'CORS policy: No access allowed from your origin'\n    });\n  } else {\n    next(err);\n  }\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
      "// Nginx CORS配置\n# nginx.conf\nserver {\n    listen 80;\n    server_name api.example.com;\n    \n    # 添加CORS头部\n    add_header 'Access-Control-Allow-Origin' '$http_origin' always;\n    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;\n    add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, X-Requested-With' always;\n    add_header 'Access-Control-Allow-Credentials' 'true' always;\n    add_header 'Access-Control-Max-Age' '86400' always;\n    \n    # 处理预检请求\n    if ($request_method = 'OPTIONS') {\n        add_header 'Access-Control-Allow-Origin' '$http_origin' always;\n        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;\n        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, X-Requested-With' always;\n        add_header 'Access-Control-Allow-Credentials' 'true' always;\n        add_header 'Access-Control-Max-Age' '86400' always;\n        add_header 'Content-Length' '0';\n        add_header 'Content-Type' 'text/plain';\n        return 204;\n    }\n    \n    location /api {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n\n# 限制特定源的配置\nserver {\n    listen 80;\n    server_name api.example.com;\n    \n    # 定义允许的源\n    set $cors '';\n    if ($http_origin ~* '^https?://(example\\.com|app\\.example\\.com|localhost:3000)$') {\n        set $cors 'true';\n    }\n    \n    # 添加CORS头\n    if ($cors = 'true') {\n        add_header 'Access-Control-Allow-Origin' '$http_origin' always;\n        add_header 'Access-Control-Allow-Credentials' 'true' always;\n        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;\n        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;\n    }\n    \n    # 处理预检\n    if ($request_method = 'OPTIONS') {\n        if ($cors = 'true') {\n            add_header 'Access-Control-Allow-Origin' '$http_origin' always;\n            add_header 'Access-Control-Allow-Credentials' 'true' always;\n            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;\n            add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;\n            add_header 'Access-Control-Max-Age' '86400' always;\n            return 204;\n        }\n        return 403;\n    }\n    \n    location / {\n        proxy_pass http://localhost:3000;\n    }\n}"
    ],
    resources: [
      {"name": "CORS MDN文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS"},
      {"name": "CORS详解教程", "url": "https://web.dev/cross-origin-resource-sharing/"},
      {"name": "CORS测试工具", "url": "https://www.test-cors.org/"},
      {"name": "同源策略说明", "url": "https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy"}
    ]
  },

  CSP: {
    title: "内容安全策略 (CSP)",
    content: `CSP (Content Security Policy) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括XSS和数据注入攻击。

## 核心概念
- **白名单机制**: 明确指定浏览器可以加载哪些资源
- **指令(Directive)**: 控制不同类型资源的加载规则
- **源(Source)**: 定义允许的资源来源
- **报告模式**: 只报告违规但不阻止执行

## 主要指令
- \`default-src\`: 默认策略，所有未指定指令的回退
- \`script-src\`: 控制JavaScript来源
- \`style-src\`: 控制CSS样式来源
- \`img-src\`: 控制图片来源
- \`connect-src\`: 控制XMLHttpRequest、WebSocket等连接
- \`font-src\`: 控制字体来源
- \`frame-src\`: 控制iframe来源
- \`media-src\`: 控制音视频来源

## 源值类型
- \`'self'\`: 同源资源
- \`'none'\`: 不允许任何来源
- \`'unsafe-inline'\`: 允许内联脚本/样式（不安全）
- \`'unsafe-eval'\`: 允许eval()等动态代码执行（不安全）
- \`https:\`: 仅允许HTTPS协议
- \`*.example.com\`: 允许特定域名

## 实施方式
1. **HTTP响应头**: \`Content-Security-Policy\`
2. **Meta标签**: \`<meta http-equiv="Content-Security-Policy">\`
3. **报告模式**: \`Content-Security-Policy-Report-Only\`

## 安全优势
- **防止XSS**: 阻止未授权脚本执行
- **防止数据窃取**: 限制数据发送目标
- **防止点击劫持**: 控制页面嵌入
- **减少攻击面**: 限制资源加载来源

## 最佳实践
1. 从严格策略开始，逐步放宽
2. 避免使用unsafe-inline和unsafe-eval
3. 使用nonce或hash允许必要的内联脚本
4. 先用Report-Only模式测试
5. 配置violation报告收集违规信息`,
    examples: [
      "<!-- HTML Meta标签设置CSP -->\n<!DOCTYPE html>\n<html>\n<head>\n  <!-- 基础CSP策略 -->\n  <meta http-equiv=\"Content-Security-Policy\" \n        content=\"default-src 'self'; \n                 script-src 'self' https://cdn.example.com; \n                 style-src 'self' 'unsafe-inline'; \n                 img-src 'self' data: https:; \n                 font-src 'self' https://fonts.gstatic.com; \n                 connect-src 'self' https://api.example.com;\">\n  \n  <!-- 严格CSP策略（使用nonce） -->\n  <meta http-equiv=\"Content-Security-Policy\" \n        content=\"default-src 'none'; \n                 script-src 'self' 'nonce-2726c7f26c'; \n                 style-src 'self' 'nonce-2726c7f26c'; \n                 img-src 'self' data:; \n                 font-src 'self'; \n                 connect-src 'self';\">\n  \n  <!-- 使用nonce的脚本 -->\n  <script nonce=\"2726c7f26c\">\n    console.log('This script is allowed by CSP nonce');\n  </script>\n  \n  <!-- 使用nonce的样式 -->\n  <style nonce=\"2726c7f26c\">\n    body { margin: 0; padding: 0; }\n  </style>\n</head>\n<body>\n  <h1>CSP Protected Page</h1>\n  \n  <!-- 这个脚本会被CSP阻止（没有nonce） -->\n  <script>\n    // 这段代码不会执行\n    alert('This will be blocked');\n  </script>\n</body>\n</html>",
      "// Express.js服务器端CSP配置\nconst express = require('express');\nconst helmet = require('helmet');\nconst crypto = require('crypto');\n\nconst app = express();\n\n// 方法1: 使用helmet中间件（推荐）\napp.use(\n  helmet.contentSecurityPolicy({\n    directives: {\n      defaultSrc: [\"'self'\"],\n      scriptSrc: [\n        \"'self'\",\n        \"https://cdn.jsdelivr.net\",\n        \"https://unpkg.com\",\n        // 使用nonce（动态生成）\n        (req, res) => `'nonce-${res.locals.cspNonce}'`\n      ],\n      styleSrc: [\n        \"'self'\",\n        \"https://fonts.googleapis.com\",\n        (req, res) => `'nonce-${res.locals.cspNonce}'`\n      ],\n      imgSrc: [\"'self'\", \"data:\", \"https:\"],\n      fontSrc: [\"'self'\", \"https://fonts.gstatic.com\"],\n      connectSrc: [\"'self'\", \"https://api.example.com\"],\n      frameSrc: [\"'none'\"],\n      objectSrc: [\"'none'\"],\n      upgradeInsecureRequests: [],\n    },\n    reportOnly: false, // 改为true启用报告模式\n  })\n);\n\n// CSP Nonce中间件\napp.use((req, res, next) => {\n  // 为每个请求生成唯一的nonce\n  res.locals.cspNonce = crypto.randomBytes(16).toString('base64');\n  next();\n});\n\n// 方法2: 手动设置CSP头\napp.use((req, res, next) => {\n  const nonce = crypto.randomBytes(16).toString('base64');\n  res.locals.cspNonce = nonce;\n  \n  const cspHeader = [\n    \"default-src 'self'\",\n    `script-src 'self' 'nonce-${nonce}' https://cdn.jsdelivr.net`,\n    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,\n    \"img-src 'self' data: https:\",\n    \"font-src 'self' https://fonts.gstatic.com\",\n    \"connect-src 'self' https://api.example.com\",\n    \"frame-src 'none'\",\n    \"object-src 'none'\",\n    \"base-uri 'self'\",\n    \"form-action 'self'\",\n    \"upgrade-insecure-requests\"\n  ].join('; ');\n  \n  res.setHeader('Content-Security-Policy', cspHeader);\n  next();\n});\n\n// CSP违规报告端点\napp.post('/csp-violation-report', express.json({ type: 'application/csp-report' }), (req, res) => {\n  const report = req.body['csp-report'];\n  \n  console.error('CSP Violation:', {\n    documentUri: report['document-uri'],\n    violatedDirective: report['violated-directive'],\n    blockedUri: report['blocked-uri'],\n    sourceFile: report['source-file'],\n    lineNumber: report['line-number']\n  });\n  \n  // 保存到日志系统或数据库\n  // logViolation(report);\n  \n  res.status(204).end();\n});\n\n// 渲染页面时传递nonce\napp.get('/', (req, res) => {\n  res.send(`\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <title>CSP Protected</title>\n      <script nonce=\"${res.locals.cspNonce}\">\n        console.log('This script is allowed');\n      </script>\n    </head>\n    <body>\n      <h1>CSP Protected Page</h1>\n    </body>\n    </html>\n  `);\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
      "// Nginx CSP配置\n# nginx.conf\nserver {\n    listen 443 ssl http2;\n    server_name example.com;\n    \n    # 基础CSP头\n    add_header Content-Security-Policy \"default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.example.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';\" always;\n    \n    # 或者使用报告模式测试\n    # add_header Content-Security-Policy-Report-Only \"default-src 'self'; report-uri /csp-violation-report;\" always;\n    \n    # 其他安全头\n    add_header X-Frame-Options \"DENY\" always;\n    add_header X-Content-Type-Options \"nosniff\" always;\n    add_header X-XSS-Protection \"1; mode=block\" always;\n    add_header Referrer-Policy \"strict-origin-when-cross-origin\" always;\n    \n    # CSP违规报告接收\n    location /csp-violation-report {\n        proxy_pass http://localhost:3000/csp-violation-report;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n    \n    location / {\n        root /var/www/html;\n        index index.html;\n    }\n}\n\n# 为不同路径设置不同的CSP\nserver {\n    listen 443 ssl;\n    server_name app.example.com;\n    \n    # API端点的CSP\n    location /api {\n        add_header Content-Security-Policy \"default-src 'none'; connect-src 'self';\" always;\n        proxy_pass http://localhost:3000;\n    }\n    \n    # 管理后台的CSP\n    location /admin {\n        add_header Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;\" always;\n        root /var/www/admin;\n    }\n    \n    # 公开页面的严格CSP\n    location / {\n        add_header Content-Security-Policy \"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;\" always;\n        root /var/www/public;\n    }\n}"
    ],
    resources: [
      {"name": "CSP MDN文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP"},
      {"name": "CSP在线生成器", "url": "https://report-uri.com/home/generate"},
      {"name": "CSP评估工具", "url": "https://csp-evaluator.withgoogle.com/"},
      {"name": "CSP最佳实践", "url": "https://web.dev/csp/"}
    ]
  },

  CSRF: {
    title: "跨站请求伪造防护",
    content: `CSRF (Cross-Site Request Forgery) 是一种Web安全漏洞，攻击者诱使用户在已登录的Web应用中执行非本意的操作。

## 攻击原理
1. 用户登录信任网站A，获得Cookie
2. 用户访问恶意网站B
3. 网站B向网站A发送请求（携带用户Cookie）
4. 网站A无法区分请求来源，执行操作

## 防护策略
- **CSRF Token**: 服务器生成随机令牌，验证请求合法性
- **SameSite Cookie**: 限制Cookie的跨站发送
- **双重Cookie验证**: 同时验证Cookie和请求参数
- **Referer/Origin检查**: 验证请求来源
- **自定义请求头**: AJAX请求添加自定义头部

## CSRF Token工作流程
1. 服务器生成唯一Token
2. Token存储在session并发送给客户端
3. 客户端在表单或请求头中包含Token
4. 服务器验证Token的有效性
5. Token验证通过才执行操作

## SameSite属性
- \`Strict\`: 完全禁止跨站发送Cookie
- \`Lax\`: 导航跨站时发送（默认值）
- \`None\`: 允许跨站发送（需配合Secure）

## 常见误区
- GET请求也需要CSRF保护
- AJAX请求仍可能受到攻击
- 验证码不是完整的CSRF防护方案
- HTTPS不能防止CSRF

## 最佳实践
1. 对所有状态改变操作使用CSRF Token
2. 设置Cookie的SameSite属性
3. 验证请求的Origin和Referer头
4. 重要操作要求二次确认
5. 使用自动化CSRF保护中间件`,
    examples: [
      "// Express.js CSRF保护实现\nconst express = require('express');\nconst csrf = require('csurf');\nconst cookieParser = require('cookie-parser');\nconst session = require('express-session');\n\nconst app = express();\n\n// 中间件配置\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\n\n// Session配置\napp.use(session({\n  secret: 'your-secret-key',\n  resave: false,\n  saveUninitialized: true,\n  cookie: {\n    httpOnly: true,\n    secure: true,     // 生产环境必须使用HTTPS\n    sameSite: 'strict' // 防止CSRF的关键设置\n  }\n}));\n\n// CSRF保护中间件\nconst csrfProtection = csrf({ cookie: true });\n\n// 为所有路由启用CSRF保护\napp.use(csrfProtection);\n\n// 将CSRF Token注入到所有视图\napp.use((req, res, next) => {\n  res.locals.csrfToken = req.csrfToken();\n  next();\n});\n\n// 渲染表单页面\napp.get('/form', (req, res) => {\n  res.send(`\n    <form action=\"/submit\" method=\"POST\">\n      <input type=\"hidden\" name=\"_csrf\" value=\"${req.csrfToken()}\">\n      <input type=\"text\" name=\"data\" placeholder=\"Enter data\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  `);\n});\n\n// 处理表单提交（自动验证CSRF Token）\napp.post('/submit', (req, res) => {\n  // CSRF Token自动验证，验证失败会返回403\n  res.json({ \n    success: true, \n    data: req.body.data \n  });\n});\n\n// API端点的CSRF保护\napp.get('/api/token', (req, res) => {\n  // 返回CSRF Token给前端\n  res.json({ csrfToken: req.csrfToken() });\n});\n\napp.post('/api/data', (req, res) => {\n  // 前端需在请求头中包含CSRF Token\n  // 例如：X-CSRF-Token: <token>\n  res.json({ message: 'Data processed successfully' });\n});\n\n// CSRF错误处理\napp.use((err, req, res, next) => {\n  if (err.code === 'EBADCSRFTOKEN') {\n    res.status(403).json({\n      error: 'Invalid CSRF token',\n      message: 'Form submission rejected'\n    });\n  } else {\n    next(err);\n  }\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
      "// 前端CSRF Token处理\nclass CSRFProtection {\n  constructor() {\n    this.token = null;\n    this.tokenHeaderName = 'X-CSRF-Token';\n  }\n  \n  // 从Meta标签获取Token\n  getTokenFromMeta() {\n    const meta = document.querySelector('meta[name=\"csrf-token\"]');\n    return meta ? meta.getAttribute('content') : null;\n  }\n  \n  // 从Cookie获取Token\n  getTokenFromCookie(name = 'XSRF-TOKEN') {\n    const value = `; ${document.cookie}`;\n    const parts = value.split(`; ${name}=`);\n    if (parts.length === 2) {\n      return parts.pop().split(';').shift();\n    }\n    return null;\n  }\n  \n  // 从服务器获取Token\n  async fetchToken() {\n    try {\n      const response = await fetch('/api/token', {\n        credentials: 'include'\n      });\n      const data = await response.json();\n      this.token = data.csrfToken;\n      return this.token;\n    } catch (error) {\n      console.error('Failed to fetch CSRF token:', error);\n      throw error;\n    }\n  }\n  \n  // 获取Token（优先级：Meta > Cookie > API）\n  async getToken() {\n    if (this.token) return this.token;\n    \n    this.token = this.getTokenFromMeta() || this.getTokenFromCookie();\n    \n    if (!this.token) {\n      this.token = await this.fetchToken();\n    }\n    \n    return this.token;\n  }\n  \n  // 为请求添加CSRF Token\n  async addTokenToRequest(url, options = {}) {\n    const token = await this.getToken();\n    \n    // 默认配置\n    const config = {\n      credentials: 'include',\n      ...options,\n      headers: {\n        ...options.headers,\n        [this.tokenHeaderName]: token\n      }\n    };\n    \n    return fetch(url, config);\n  }\n  \n  // POST请求封装\n  async post(url, data) {\n    return this.addTokenToRequest(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // PUT请求封装\n  async put(url, data) {\n    return this.addTokenToRequest(url, {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    });\n  }\n  \n  // DELETE请求封装\n  async delete(url) {\n    return this.addTokenToRequest(url, {\n      method: 'DELETE'\n    });\n  }\n  \n  // 为表单添加CSRF Token\n  addTokenToForm(form) {\n    const token = this.getTokenFromMeta() || this.getTokenFromCookie();\n    \n    if (!token) {\n      console.error('CSRF token not found');\n      return;\n    }\n    \n    // 移除旧的token输入框\n    const oldInput = form.querySelector('input[name=\"_csrf\"]');\n    if (oldInput) {\n      oldInput.remove();\n    }\n    \n    // 添加新的token\n    const input = document.createElement('input');\n    input.type = 'hidden';\n    input.name = '_csrf';\n    input.value = token;\n    form.appendChild(input);\n  }\n  \n  // 拦截所有表单提交\n  protectAllForms() {\n    document.querySelectorAll('form').forEach(form => {\n      this.addTokenToForm(form);\n      \n      // 在提交前再次验证token\n      form.addEventListener('submit', (e) => {\n        const tokenInput = form.querySelector('input[name=\"_csrf\"]');\n        if (!tokenInput || !tokenInput.value) {\n          e.preventDefault();\n          alert('Security token missing. Please refresh the page.');\n        }\n      });\n    });\n  }\n}\n\n// 使用示例\nconst csrf = new CSRFProtection();\n\n// 初始化：保护所有表单\ncsrf.protectAllForms();\n\n// API请求\nasync function submitData() {\n  try {\n    const response = await csrf.post('/api/data', {\n      name: 'John Doe',\n      email: 'john@example.com'\n    });\n    \n    const result = await response.json();\n    console.log('Success:', result);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\n// Axios拦截器配置\nimport axios from 'axios';\n\naxios.interceptors.request.use(async (config) => {\n  // 为所有非GET请求添加CSRF Token\n  if (config.method !== 'get') {\n    const token = await csrf.getToken();\n    config.headers['X-CSRF-Token'] = token;\n  }\n  return config;\n});\n\n// 使用配置后的axios\naxios.post('/api/users', { name: 'Jane' })\n  .then(response => console.log(response.data))\n  .catch(error => console.error(error));",
      "// Vue 3 + Express CSRF完整示例\n// 后端：server.js\nconst express = require('express');\nconst csrf = require('csurf');\nconst cookieParser = require('cookie-parser');\nconst cors = require('cors');\n\nconst app = express();\n\napp.use(express.json());\napp.use(cookieParser());\n\n// CORS配置（允许前端域名）\napp.use(cors({\n  origin: 'http://localhost:5173',\n  credentials: true\n}));\n\n// CSRF保护\nconst csrfProtection = csrf({\n  cookie: {\n    httpOnly: true,\n    sameSite: 'strict',\n    secure: false // 开发环境设为false\n  }\n});\n\napp.use(csrfProtection);\n\n// 获取CSRF Token的端点\napp.get('/api/csrf-token', (req, res) => {\n  res.json({ csrfToken: req.csrfToken() });\n});\n\n// 受保护的API端点\napp.post('/api/users', (req, res) => {\n  res.json({ \n    message: 'User created',\n    data: req.body \n  });\n});\n\napp.listen(3000);\n\n// 前端：Vue 3组件\n// CSRFService.js\nexport class CSRFService {\n  static token = null;\n  \n  static async getToken() {\n    if (this.token) return this.token;\n    \n    const response = await fetch('http://localhost:3000/api/csrf-token', {\n      credentials: 'include'\n    });\n    const data = await response.json();\n    this.token = data.csrfToken;\n    return this.token;\n  }\n  \n  static async request(url, options = {}) {\n    const token = await this.getToken();\n    \n    return fetch(url, {\n      ...options,\n      credentials: 'include',\n      headers: {\n        ...options.headers,\n        'X-CSRF-Token': token\n      }\n    });\n  }\n}\n\n// UserForm.vue\n<template>\n  <form @submit.prevent=\"handleSubmit\">\n    <input v-model=\"formData.name\" placeholder=\"Name\" required>\n    <input v-model=\"formData.email\" type=\"email\" placeholder=\"Email\" required>\n    <button type=\"submit\" :disabled=\"submitting\">Submit</button>\n    <p v-if=\"message\" :class=\"messageClass\">{{ message }}</p>\n  </form>\n</template>\n\n<script setup>\nimport { ref, reactive } from 'vue';\nimport { CSRFService } from './CSRFService';\n\nconst formData = reactive({\n  name: '',\n  email: ''\n});\n\nconst submitting = ref(false);\nconst message = ref('');\nconst messageClass = ref('');\n\nconst handleSubmit = async () => {\n  submitting.value = true;\n  message.value = '';\n  \n  try {\n    const response = await CSRFService.request('http://localhost:3000/api/users', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    });\n    \n    if (response.ok) {\n      const result = await response.json();\n      message.value = 'User created successfully!';\n      messageClass.value = 'success';\n      \n      // 重置表单\n      formData.name = '';\n      formData.email = '';\n    } else {\n      throw new Error('Request failed');\n    }\n  } catch (error) {\n    console.error('Error:', error);\n    message.value = 'Failed to create user. Please try again.';\n    messageClass.value = 'error';\n  } finally {\n    submitting.value = false;\n  }\n};\n</script>\n\n<style scoped>\n.success { color: green; }\n.error { color: red; }\n</style>"
    ],
    resources: [
      {"name": "CSRF攻击详解", "url": "https://owasp.org/www-community/attacks/csrf"},
      {"name": "CSRF防护指南", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"},
      {"name": "SameSite Cookie说明", "url": "https://web.dev/samesite-cookies-explained/"},
      {"name": "csurf中间件文档", "url": "https://github.com/expressjs/csurf"}
    ]
  },

  CSS_Sol: {
    title: "CSS解决方案",
    content: `CSS解决方案是指各种CSS编写、组织和管理的方法论和工具，帮助开发者更高效地编写可维护的样式代码。

## 主要方案
- **原生CSS**: 标准CSS语法和特性
- **预处理器**: Sass、Less、Stylus等
- **后处理器**: PostCSS及其插件生态
- **CSS-in-JS**: Styled-Components、Emotion等
- **实用工具类**: Tailwind CSS、UnoCSS等
- **CSS Modules**: 局部作用域的CSS
- **原子化CSS**: 单一用途的样式类

## 预处理器特性
- **变量**: 定义可复用的值
- **嵌套**: 层次化的样式结构
- **混合(Mixin)**: 可复用的样式块
- **函数**: 动态计算样式值
- **继承**: 样式的扩展和复用
- **模块化**: 分离和组织样式文件

## 现代CSS特性
- **CSS变量**: 原生的自定义属性
- **Grid布局**: 二维网格系统
- **Flexbox**: 一维弹性布局
- **容器查询**: 基于容器的响应式
- **层叠层(@layer)**: 控制样式优先级
- **嵌套语法**: 原生CSS嵌套

## 方案选择考虑
- **项目规模**: 小型项目vs大型应用
- **团队熟悉度**: 学习成本和维护成本
- **性能要求**: 运行时vs构建时
- **开发体验**: 工具链和IDE支持
- **可维护性**: 长期维护和扩展

## 组织方法论
- **BEM**: Block Element Modifier命名规范
- **OOCSS**: 面向对象的CSS
- **SMACSS**: 可扩展的模块化架构
- **ITCSS**: 倒三角CSS架构

## 最佳实践
1. 选择适合团队的方案并保持一致
2. 建立清晰的样式组织结构
3. 使用变量管理设计令牌
4. 避免过深的选择器嵌套
5. 利用现代CSS特性减少依赖
6. 注重样式的可复用性和可维护性`,
    examples: [
      "// CSS方案对比示例\n\n/* 1. 原生CSS */\n:root {\n  --primary-color: #007bff;\n  --spacing-unit: 8px;\n}\n\n.button {\n  background-color: var(--primary-color);\n  padding: calc(var(--spacing-unit) * 2);\n  border-radius: 4px;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #0056b3;\n}\n\n.button--large {\n  padding: calc(var(--spacing-unit) * 3);\n  font-size: 1.2rem;\n}\n\n/* 2. Sass预处理器 */\n$primary-color: #007bff;\n$spacing-unit: 8px;\n\n@mixin button-base {\n  padding: $spacing-unit * 2;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n}\n\n.button {\n  @include button-base;\n  background-color: $primary-color;\n  color: white;\n  \n  &:hover {\n    background-color: darken($primary-color, 10%);\n  }\n  \n  &--large {\n    padding: $spacing-unit * 3;\n    font-size: 1.2rem;\n  }\n  \n  &--small {\n    padding: $spacing-unit;\n    font-size: 0.875rem;\n  }\n}\n\n/* 3. Tailwind CSS实用工具 */\n<button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\">\n  Click me\n</button>\n\n<button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg\">\n  Large Button\n</button>\n\n/* 4. CSS Modules */\n/* Button.module.css */\n.button {\n  background-color: #007bff;\n  padding: 16px;\n  border-radius: 4px;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #0056b3;\n}\n\n.large {\n  composes: button;\n  padding: 24px;\n  font-size: 1.2rem;\n}\n\n// Button.jsx\nimport styles from './Button.module.css';\n\nfunction Button({ size, children }) {\n  const className = size === 'large' ? styles.large : styles.button;\n  return <button className={className}>{children}</button>;\n}",
      "// BEM命名规范完整示例\n/* BEM (Block Element Modifier) */\n\n/* Block - 独立的组件 */\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  padding: 20px;\n}\n\n/* Element - Block的组成部分 */\n.card__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #eee;\n}\n\n.card__title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n\n.card__icon {\n  width: 24px;\n  height: 24px;\n  color: #666;\n}\n\n.card__body {\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n\n.card__footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #eee;\n}\n\n.card__button {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n\n/* Modifier - Block或Element的变体 */\n.card--featured {\n  border: 2px solid #007bff;\n  box-shadow: 0 4px 12px rgba(0,123,255,0.2);\n}\n\n.card--compact {\n  padding: 12px;\n}\n\n.card__title--large {\n  font-size: 2rem;\n}\n\n.card__button--primary {\n  background-color: #007bff;\n  color: white;\n}\n\n.card__button--primary:hover {\n  background-color: #0056b3;\n}\n\n.card__button--secondary {\n  background-color: transparent;\n  color: #007bff;\n  border: 1px solid #007bff;\n}\n\n.card__button--secondary:hover {\n  background-color: #f0f8ff;\n}\n\n/* HTML使用示例 */\n<div class=\"card card--featured\">\n  <div class=\"card__header\">\n    <h2 class=\"card__title card__title--large\">Featured Article</h2>\n    <svg class=\"card__icon\">...</svg>\n  </div>\n  <div class=\"card__body\">\n    <p>This is a featured card with special styling.</p>\n  </div>\n  <div class=\"card__footer\">\n    <button class=\"card__button card__button--secondary\">Cancel</button>\n    <button class=\"card__button card__button--primary\">Read More</button>\n  </div>\n</div>",
      "// 设计系统与CSS变量实践\n/* design-tokens.css */\n:root {\n  /* 颜色系统 */\n  --color-primary-50: #e3f2fd;\n  --color-primary-100: #bbdefb;\n  --color-primary-200: #90caf9;\n  --color-primary-300: #64b5f6;\n  --color-primary-400: #42a5f5;\n  --color-primary-500: #2196f3;\n  --color-primary-600: #1e88e5;\n  --color-primary-700: #1976d2;\n  --color-primary-800: #1565c0;\n  --color-primary-900: #0d47a1;\n  \n  /* 语义化颜色 */\n  --color-success: #4caf50;\n  --color-warning: #ff9800;\n  --color-error: #f44336;\n  --color-info: #2196f3;\n  \n  /* 灰度 */\n  --color-gray-50: #fafafa;\n  --color-gray-100: #f5f5f5;\n  --color-gray-200: #eeeeee;\n  --color-gray-300: #e0e0e0;\n  --color-gray-400: #bdbdbd;\n  --color-gray-500: #9e9e9e;\n  --color-gray-600: #757575;\n  --color-gray-700: #616161;\n  --color-gray-800: #424242;\n  --color-gray-900: #212121;\n  \n  /* 间距系统 */\n  --spacing-0: 0;\n  --spacing-1: 0.25rem;  /* 4px */\n  --spacing-2: 0.5rem;   /* 8px */\n  --spacing-3: 0.75rem;  /* 12px */\n  --spacing-4: 1rem;     /* 16px */\n  --spacing-5: 1.25rem;  /* 20px */\n  --spacing-6: 1.5rem;   /* 24px */\n  --spacing-8: 2rem;     /* 32px */\n  --spacing-10: 2.5rem;  /* 40px */\n  --spacing-12: 3rem;    /* 48px */\n  --spacing-16: 4rem;    /* 64px */\n  \n  /* 字体系统 */\n  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\n  --font-family-mono: 'Fira Code', 'Courier New', monospace;\n  \n  --font-size-xs: 0.75rem;    /* 12px */\n  --font-size-sm: 0.875rem;   /* 14px */\n  --font-size-base: 1rem;     /* 16px */\n  --font-size-lg: 1.125rem;   /* 18px */\n  --font-size-xl: 1.25rem;    /* 20px */\n  --font-size-2xl: 1.5rem;    /* 24px */\n  --font-size-3xl: 1.875rem;  /* 30px */\n  --font-size-4xl: 2.25rem;   /* 36px */\n  \n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  \n  /* 行高 */\n  --line-height-tight: 1.25;\n  --line-height-normal: 1.5;\n  --line-height-relaxed: 1.75;\n  \n  /* 圆角 */\n  --radius-sm: 0.125rem;  /* 2px */\n  --radius-md: 0.25rem;   /* 4px */\n  --radius-lg: 0.5rem;    /* 8px */\n  --radius-xl: 0.75rem;   /* 12px */\n  --radius-2xl: 1rem;     /* 16px */\n  --radius-full: 9999px;\n  \n  /* 阴影 */\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  \n  /* 过渡 */\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n  /* Z-index层级 */\n  --z-dropdown: 1000;\n  --z-sticky: 1020;\n  --z-fixed: 1030;\n  --z-modal-backdrop: 1040;\n  --z-modal: 1050;\n  --z-popover: 1060;\n  --z-tooltip: 1070;\n}\n\n/* 暗色主题 */\n[data-theme=\"dark\"] {\n  --color-primary-500: #64b5f6;\n  --color-gray-50: #212121;\n  --color-gray-900: #fafafa;\n  /* ... 其他颜色反转 */\n}\n\n/* 使用设计令牌的组件 */\n.button {\n  /* 使用设计系统变量 */\n  padding: var(--spacing-2) var(--spacing-4);\n  font-family: var(--font-family-sans);\n  font-size: var(--font-size-base);\n  font-weight: var(--font-weight-medium);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-base);\n  box-shadow: var(--shadow-sm);\n  \n  background-color: var(--color-primary-500);\n  color: white;\n}\n\n.button:hover {\n  background-color: var(--color-primary-600);\n  box-shadow: var(--shadow-md);\n}\n\n.card {\n  padding: var(--spacing-6);\n  border-radius: var(--radius-lg);\n  background-color: var(--color-gray-50);\n  box-shadow: var(--shadow-md);\n}\n\n.text-heading-1 {\n  font-size: var(--font-size-4xl);\n  font-weight: var(--font-weight-bold);\n  line-height: var(--line-height-tight);\n  margin-bottom: var(--spacing-6);\n}"
    ],
    resources: [
      {"name": "CSS方案对比", "url": "https://css-tricks.com/different-ways-to-write-css-in-js/"},
      {"name": "BEM命名规范", "url": "https://getbem.com/"},
      {"name": "现代CSS特性", "url": "https://web.dev/learn/css/"},
      {"name": "CSS架构指南", "url": "https://cssguidelin.es/"}
    ]
  },

  DevTools: {
    title: "开发者工具",
    content: `DevTools（开发者工具）是现代浏览器内置的强大调试和性能分析工具集，帮助开发者检查、调试和优化Web应用。

## 主要面板
- **Elements/元素**: 检查和修改DOM结构和CSS样式
- **Console/控制台**: 执行JavaScript代码和查看日志
- **Sources/源代码**: 调试JavaScript代码，设置断点
- **Network/网络**: 监控网络请求和响应
- **Performance/性能**: 分析页面性能和渲染过程
- **Memory/内存**: 检测内存泄漏和分析内存使用
- **Application/应用**: 查看存储、缓存、Service Workers等
- **Lighthouse**: 自动化审计工具，评估性能、可访问性等

## Elements面板功能
- **DOM检查**: 实时查看和编辑HTML结构
- **CSS调试**: 查看应用的样式规则和优先级
- **样式实验**: 即时修改样式查看效果
- **布局调试**: Grid和Flexbox可视化工具
- **计算样式**: 查看最终计算后的CSS值
- **事件监听器**: 查看元素绑定的事件

## Console面板技巧
- **日志级别**: log、warn、error、info、debug
- **对象检查**: console.dir()、console.table()
- **性能测量**: console.time()、console.timeEnd()
- **分组输出**: console.group()、console.groupEnd()
- **断言**: console.assert()
- **选择器**: $()、$$()快捷选择元素

## Sources面板调试
- **断点**: 行断点、条件断点、日志断点
- **调试控制**: Step over、Step into、Step out
- **作用域检查**: 查看变量值和调用栈
- **Watch表达式**: 监视特定变量或表达式
- **黑盒脚本**: 跳过第三方库代码
- **源码映射**: 调试编译后的代码

## Network面板分析
- **请求时间轴**: 瀑布图分析请求顺序
- **请求详情**: 查看Headers、Preview、Response
- **性能指标**: DOMContentLoaded、Load时间
- **过滤器**: 按类型、域名、状态过滤请求
- **限流测试**: 模拟慢速网络环境
- **离线模式**: 测试离线体验

## Performance面板优化
- **录制性能**: 记录页面加载或交互过程
- **火焰图**: 分析函数调用栈和耗时
- **帧率分析**: 检测卡顿和掉帧
- **Main线程分析**: 查看JS执行、渲染、布局
- **性能瓶颈**: 识别长任务和重排重绘

## 移动端调试
- **设备模式**: 模拟不同设备尺寸和触摸
- **远程调试**: Chrome DevTools远程调试移动设备
- **响应式测试**: 测试不同视口尺寸
- **传感器模拟**: 模拟地理位置、加速度计等

## 最佳实践
1. 使用快捷键提高效率
2. 善用Snippets保存常用代码片段
3. 利用Workspace实现本地文件映射
4. 使用性能分析找出瓶颈
5. 定期使用Lighthouse审计
6. 学习使用命令菜单（Cmd/Ctrl+Shift+P）`,
    examples: [
      "// Console面板高级技巧\n\n// 1. 使用console.table()美化对象数组输出\nconst users = [\n  { id: 1, name: 'Alice', age: 25, role: 'Developer' },\n  { id: 2, name: 'Bob', age: 30, role: 'Designer' },\n  { id: 3, name: 'Charlie', age: 28, role: 'Manager' }\n];\nconsole.table(users);\n// 显示为表格，可以点击列头排序\n\n// 只显示特定列\nconsole.table(users, ['name', 'role']);\n\n// 2. 使用console.group()组织日志\nconsole.group('User Login Process');\nconsole.log('1. Validating credentials');\nconsole.log('2. Checking session');\nconsole.group('Database Operations');\nconsole.log('- Query user table');\nconsole.log('- Update last login');\nconsole.groupEnd();\nconsole.log('3. Redirect to dashboard');\nconsole.groupEnd();\n\n// 3. 性能测量\nconsole.time('Data Processing');\nconst data = Array.from({ length: 10000 }, (_, i) => i);\nconst processed = data.map(x => x * 2).filter(x => x % 3 === 0);\nconsole.timeEnd('Data Processing');\n// 输出: Data Processing: 2.5ms\n\n// 4. 使用console.assert()进行断言\nfunction divide(a, b) {\n  console.assert(b !== 0, 'Divisor cannot be zero!', { a, b });\n  return a / b;\n}\ndivide(10, 0);  // 触发断言错误\n\n// 5. 使用console.trace()查看调用栈\nfunction foo() {\n  function bar() {\n    function baz() {\n      console.trace('Call stack:');\n    }\n    baz();\n  }\n  bar();\n}\nfoo();\n\n// 6. 样式化输出\nconsole.log(\n  '%c Success! %c Operation completed successfully',\n  'background: #4caf50; color: white; padding: 4px 8px; border-radius: 3px;',\n  'color: #4caf50; font-weight: bold;'\n);\n\nconsole.log(\n  '%c⚠️ Warning %c Check your input parameters',\n  'background: #ff9800; color: white; padding: 4px 8px; border-radius: 3px;',\n  'color: #ff9800;'\n);\n\n// 7. 使用$和$$快速选择元素（仅在Console中可用）\nconst button = $('button');  // 等同于 document.querySelector('button')\nconst allButtons = $$('button');  // 等同于 document.querySelectorAll('button')\n\n// 8. 监控元素变化\nmonitorEvents($('button'), 'click');  // 监控按钮点击\nmonitorEvents(window, ['resize', 'scroll']);  // 监控多个事件\nunmonitorEvents($('button'));  // 停止监控\n\n// 9. 复制数据到剪贴板\nconst data = { name: 'test', values: [1, 2, 3] };\ncopy(data);  // 复制到剪贴板，可以粘贴到编辑器\n\n// 10. 获取最后一个表达式的结果\n2 + 2  // 输出: 4\n$_  // 输出: 4（上一个表达式的结果）\n$_ * 10  // 输出: 40\n\n// 11. 使用console.dir()查看对象的完整结构\nconst element = document.querySelector('div');\nconsole.dir(element);  // 显示DOM对象的所有属性和方法\n\n// 12. 性能标记\nperformance.mark('start-operation');\n// ... 执行某些操作\nperformance.mark('end-operation');\nperformance.measure('operation-duration', 'start-operation', 'end-operation');\nconst measures = performance.getEntriesByType('measure');\nconsole.table(measures);",
      "// Sources面板调试技巧\n\n// 1. 使用debugger语句设置断点\nfunction processData(data) {\n  // 程序会在这里暂停\n  debugger;\n  \n  const result = data.map(item => {\n    // 可以在这里设置条件断点\n    if (item.value > 100) {\n      debugger;  // 只在值大于100时暂停\n    }\n    return item.value * 2;\n  });\n  \n  return result;\n}\n\n// 2. 条件断点（在DevTools中设置）\n// 右键点击行号 -> Add conditional breakpoint\n// 条件: item.id === 5\nfunction findUser(id) {\n  const users = getUsers();\n  return users.find(user => user.id === id);  // 在此行设置条件断点\n}\n\n// 3. 日志断点（Logpoint）- 不暂停执行，只打印日志\n// 右键点击行号 -> Add logpoint\n// 输入: 'Processing item:', item.name\nfunction processItems(items) {\n  items.forEach(item => {\n    // 在此行设置logpoint，自动输出日志但不暂停\n    doSomething(item);\n  });\n}\n\n// 4. 使用Live Expressions实时监控变量\n// DevTools -> Console -> 点击眼睛图标\n// 输入表达式: document.body.scrollTop\n// 该表达式会实时更新显示\n\n// 5. 使用Snippets保存常用代码\n// Sources -> Snippets -> New snippet\n// 保存常用的调试脚本，可以随时运行\n\n// 调试性能的Snippet示例\n(function measurePerformance() {\n  const entries = performance.getEntriesByType('navigation')[0];\n  console.group('⚡ Performance Metrics');\n  console.log('DNS Lookup:', entries.domainLookupEnd - entries.domainLookupStart, 'ms');\n  console.log('TCP Connection:', entries.connectEnd - entries.connectStart, 'ms');\n  console.log('Request + Response:', entries.responseEnd - entries.requestStart, 'ms');\n  console.log('DOM Processing:', entries.domComplete - entries.domLoading, 'ms');\n  console.log('Load Complete:', entries.loadEventEnd - entries.fetchStart, 'ms');\n  console.groupEnd();\n  \n  // 资源加载分析\n  const resources = performance.getEntriesByType('resource');\n  const byType = resources.reduce((acc, res) => {\n    const type = res.initiatorType;\n    if (!acc[type]) acc[type] = { count: 0, size: 0, duration: 0 };\n    acc[type].count++;\n    acc[type].size += res.transferSize || 0;\n    acc[type].duration += res.duration;\n    return acc;\n  }, {});\n  \n  console.group('📦 Resource Loading');\n  console.table(byType);\n  console.groupEnd();\n})();\n\n// 6. 使用Workspaces编辑本地文件\n// Sources -> Filesystem -> Add folder to workspace\n// 映射后可以直接在DevTools中编辑并保存到本地文件\n\n// 7. 使用Overrides覆盖网络资源\n// Sources -> Overrides -> Enable Local Overrides\n// 选择文件夹后，可以修改并保存网络资源的本地副本\n\n// 8. 黑盒脚本（跳过第三方库）\n// Settings -> Blackboxing -> Add pattern\n// 例如: node_modules/.*\n// 调试时会自动跳过这些文件\n\n// 9. 异步调试\nasync function fetchUserData(userId) {\n  try {\n    debugger;  // 第一个断点\n    const response = await fetch(`/api/users/${userId}`);\n    \n    debugger;  // 第二个断点（等待Promise resolved后）\n    const data = await response.json();\n    \n    return data;\n  } catch (error) {\n    debugger;  // 错误处理断点\n    console.error('Failed to fetch user:', error);\n  }\n}\n\n// 10. 使用Event Listener Breakpoints\n// Sources -> Event Listener Breakpoints\n// 勾选需要监听的事件类型（如Mouse -> click）\n// 任何click事件触发时都会暂停执行",
      "// Network和Performance面板优化实践\n\n// 1. 使用Resource Timing API分析资源加载\nfunction analyzeResourceTiming() {\n  const resources = performance.getEntriesByType('resource');\n  \n  // 找出加载最慢的资源\n  const slowest = [...resources]\n    .sort((a, b) => b.duration - a.duration)\n    .slice(0, 10);\n  \n  console.group('🐌 Slowest Resources');\n  slowest.forEach((res, i) => {\n    console.log(`${i + 1}. ${res.name}`);\n    console.log(`   Duration: ${res.duration.toFixed(2)}ms`);\n    console.log(`   Size: ${(res.transferSize / 1024).toFixed(2)}KB`);\n    console.log('---');\n  });\n  console.groupEnd();\n  \n  // 按类型统计\n  const byType = resources.reduce((acc, res) => {\n    const type = res.initiatorType || 'other';\n    if (!acc[type]) {\n      acc[type] = { count: 0, totalSize: 0, totalDuration: 0 };\n    }\n    acc[type].count++;\n    acc[type].totalSize += res.transferSize || 0;\n    acc[type].totalDuration += res.duration;\n    return acc;\n  }, {});\n  \n  console.group('📊 Resources by Type');\n  Object.entries(byType).forEach(([type, stats]) => {\n    console.log(`${type}:`);\n    console.log(`  Count: ${stats.count}`);\n    console.log(`  Total Size: ${(stats.totalSize / 1024).toFixed(2)}KB`);\n    console.log(`  Avg Duration: ${(stats.totalDuration / stats.count).toFixed(2)}ms`);\n  });\n  console.groupEnd();\n}\n\n// 2. 监控长任务（Long Tasks）\nif ('PerformanceObserver' in window) {\n  const observer = new PerformanceObserver((list) => {\n    for (const entry of list.getEntries()) {\n      console.warn('⚠️ Long Task detected:', {\n        duration: entry.duration,\n        startTime: entry.startTime,\n        name: entry.name\n      });\n    }\n  });\n  \n  observer.observe({ entryTypes: ['longtask'] });\n}\n\n// 3. 监控布局抖动（Layout Thrashing）\nfunction detectLayoutThrashing() {\n  const startTime = performance.now();\n  let readCount = 0;\n  let writeCount = 0;\n  \n  // 性能问题示例：频繁的读写DOM导致多次重排\n  const elements = document.querySelectorAll('.item');\n  elements.forEach(el => {\n    // ❌ 不好的做法：每次循环都读取和写入\n    const height = el.offsetHeight;  // 读取（触发重排）\n    readCount++;\n    el.style.height = (height + 10) + 'px';  // 写入（触发重排）\n    writeCount++;\n  });\n  \n  const duration = performance.now() - startTime;\n  console.warn('Layout Thrashing detected:', {\n    duration: duration.toFixed(2) + 'ms',\n    reads: readCount,\n    writes: writeCount\n  });\n}\n\n// 优化后的版本：批量读取，然后批量写入\nfunction optimizedDOMOperations() {\n  const startTime = performance.now();\n  const elements = document.querySelectorAll('.item');\n  \n  // ✅ 好的做法：先读取所有\n  const heights = Array.from(elements).map(el => el.offsetHeight);\n  \n  // 然后写入所有\n  elements.forEach((el, i) => {\n    el.style.height = (heights[i] + 10) + 'px';\n  });\n  \n  const duration = performance.now() - startTime;\n  console.log('✅ Optimized:', duration.toFixed(2) + 'ms');\n}\n\n// 4. 使用Performance API标记关键时刻\nclass PerformanceMonitor {\n  constructor() {\n    this.marks = {};\n  }\n  \n  mark(name) {\n    performance.mark(name);\n    this.marks[name] = performance.now();\n  }\n  \n  measure(name, startMark, endMark) {\n    performance.measure(name, startMark, endMark);\n    const measure = performance.getEntriesByName(name, 'measure')[0];\n    console.log(`⏱️ ${name}: ${measure.duration.toFixed(2)}ms`);\n    return measure.duration;\n  }\n  \n  getMetrics() {\n    const navigation = performance.getEntriesByType('navigation')[0];\n    const paint = performance.getEntriesByType('paint');\n    \n    return {\n      // 页面加载指标\n      ttfb: navigation.responseStart - navigation.requestStart,\n      domLoad: navigation.domContentLoadedEventEnd - navigation.fetchStart,\n      windowLoad: navigation.loadEventEnd - navigation.fetchStart,\n      \n      // 渲染指标\n      fcp: paint.find(p => p.name === 'first-contentful-paint')?.startTime,\n      \n      // 自定义标记\n      customMarks: this.marks\n    };\n  }\n  \n  logMetrics() {\n    const metrics = this.getMetrics();\n    console.group('📈 Performance Metrics');\n    console.log('TTFB (Time to First Byte):', metrics.ttfb.toFixed(2), 'ms');\n    console.log('DOM Content Loaded:', metrics.domLoad.toFixed(2), 'ms');\n    console.log('Window Load:', metrics.windowLoad.toFixed(2), 'ms');\n    console.log('FCP (First Contentful Paint):', metrics.fcp?.toFixed(2), 'ms');\n    console.groupEnd();\n  }\n}\n\n// 使用示例\nconst monitor = new PerformanceMonitor();\n\nmonitor.mark('app-start');\n// ... 应用初始化\nmonitor.mark('app-ready');\n\nmonitor.measure('app-startup', 'app-start', 'app-ready');\nmonitor.logMetrics();"
    ],
    resources: [
      {"name": "Chrome DevTools官方文档", "url": "https://developer.chrome.com/docs/devtools/"},
      {"name": "DevTools调试技巧", "url": "https://developers.google.com/web/tools/chrome-devtools/javascript"},
      {"name": "性能分析指南", "url": "https://web.dev/performance-chrome-devtools/"},
      {"name": "DevTools快捷键", "url": "https://developer.chrome.com/docs/devtools/shortcuts/"}
    ]
  },

  CSSinJS: {
    title: "CSS-in-JS 样式方案",
    content: `CSS-in-JS是一种将CSS样式直接写在JavaScript代码中的技术方案，提供了动态样式、作用域隔离和类型安全等特性。

## 核心概念
- **样式即组件**: 将样式作为JavaScript对象或模板字符串定义
- **动态样式**: 基于props和state动态生成样式
- **作用域隔离**: 自动生成唯一的类名避免样式冲突
- **主题支持**: 便捷的主题切换和全局样式管理
- **类型安全**: TypeScript类型检查支持

## 主流方案
- **styled-components**: 使用模板字符串的组件样式库
- **Emotion**: 高性能的CSS-in-JS库
- **JSS**: JavaScript样式表
- **Linaria**: 零运行时的CSS-in-JS
- **vanilla-extract**: 类型安全的零运行时方案
- **Stitches**: 接近零运行时的现代方案

## styled-components特性
- **Tagged Templates**: 使用模板字符串编写CSS
- **Props传递**: 根据props动态调整样式
- **主题注入**: ThemeProvider统一管理主题
- **样式扩展**: 基于现有组件创建新样式
- **全局样式**: createGlobalStyle定义全局样式
- **关键帧动画**: keyframes定义动画

## Emotion特性
- **CSS Prop**: 直接在JSX元素上使用css属性
- **样式组合**: cx()函数组合多个样式
- **对象样式**: 支持对象和字符串两种写法
- **缓存优化**: 高性能的样式缓存机制
- **Source Maps**: 便于调试的源码映射
- **框架无关**: 可在React、Vue等框架中使用

## 优势
- **组件化**: 样式与组件紧密耦合，便于维护
- **动态性**: 轻松实现基于状态的动态样式
- **无命名冲突**: 自动生成唯一类名
- **代码分割**: 样式按需加载，减少首屏体积
- **类型检查**: TypeScript完整支持
- **工具链**: 完善的编辑器支持和开发工具

## 劣势与考虑
- **运行时开销**: 样式在运行时生成（部分方案）
- **学习曲线**: 需要熟悉新的API和概念
- **调试难度**: 生成的类名不直观
- **包体积**: 需要额外的运行时库
- **服务端渲染**: 需要特殊配置SSR

## 最佳实践
1. 使用主题提供程序统一管理设计令牌
2. 提取可复用的样式片段和mixins
3. 避免在render中定义样式对象
4. 合理使用样式组合和继承
5. 考虑使用零运行时方案（如Linaria）
6. 配合TypeScript获得类型安全`,
    examples: [
      "// styled-components完整示例\nimport styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';\nimport React from 'react';\n\n// 1. 定义主题\nconst lightTheme = {\n  colors: {\n    primary: '#007bff',\n    secondary: '#6c757d',\n    success: '#28a745',\n    danger: '#dc3545',\n    background: '#ffffff',\n    text: '#212529',\n  },\n  spacing: {\n    small: '8px',\n    medium: '16px',\n    large: '24px',\n  },\n  borderRadius: '4px',\n  transition: '0.3s ease',\n};\n\nconst darkTheme = {\n  ...lightTheme,\n  colors: {\n    ...lightTheme.colors,\n    background: '#1a1a1a',\n    text: '#f8f9fa',\n  },\n};\n\n// 2. 全局样式\nconst GlobalStyle = createGlobalStyle`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    background-color: ${props => props.theme.colors.background};\n    color: ${props => props.theme.colors.text};\n    transition: all ${props => props.theme.transition};\n  }\n`;\n\n// 3. 定义动画\nconst fadeIn = keyframes`\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n`;\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n`;\n\n// 4. 基础按钮组件\nconst Button = styled.button`\n  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};\n  background-color: ${props => props.theme.colors[props.variant || 'primary']};\n  color: white;\n  border: none;\n  border-radius: ${props => props.theme.borderRadius};\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all ${props => props.theme.transition};\n  animation: ${fadeIn} 0.5s ease;\n  \n  &:hover {\n    opacity: 0.9;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  }\n  \n  &:active {\n    transform: translateY(0);\n  }\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  \n  ${props => props.size === 'large' && `\n    padding: ${props.theme.spacing.medium} ${props.theme.spacing.large};\n    font-size: 18px;\n  `}\n  \n  ${props => props.size === 'small' && `\n    padding: 4px 8px;\n    font-size: 14px;\n  `}\n  \n  ${props => props.fullWidth && `\n    width: 100%;\n  `}\n`;\n\n// 5. 扩展按钮创建新组件\nconst OutlineButton = styled(Button)`\n  background-color: transparent;\n  color: ${props => props.theme.colors[props.variant || 'primary']};\n  border: 2px solid ${props => props.theme.colors[props.variant || 'primary']};\n  \n  &:hover {\n    background-color: ${props => props.theme.colors[props.variant || 'primary']};\n    color: white;\n  }\n`;\n\n// 6. 卡片组件\nconst Card = styled.div`\n  background-color: ${props => props.theme.colors.background};\n  border-radius: ${props => props.theme.borderRadius};\n  padding: ${props => props.theme.spacing.large};\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  animation: ${fadeIn} 0.5s ease;\n`;\n\nconst CardTitle = styled.h2`\n  color: ${props => props.theme.colors.text};\n  margin-bottom: ${props => props.theme.spacing.medium};\n  font-size: 24px;\n`;\n\nconst CardContent = styled.p`\n  color: ${props => props.theme.colors.text};\n  line-height: 1.6;\n  margin-bottom: ${props => props.theme.spacing.medium};\n`;\n\n// 7. 加载指示器\nconst Spinner = styled.div`\n  border: 4px solid ${props => props.theme.colors.background};\n  border-top: 4px solid ${props => props.theme.colors.primary};\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: ${spin} 1s linear infinite;\n`;\n\n// 8. 使用示例\nfunction App() {\n  const [isDark, setIsDark] = React.useState(false);\n  const [loading, setLoading] = React.useState(false);\n  \n  return (\n    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>\n      <GlobalStyle />\n      <div style={{ padding: '40px' }}>\n        <Card>\n          <CardTitle>styled-components Demo</CardTitle>\n          <CardContent>\n            This is a demonstration of styled-components with theming support.\n          </CardContent>\n          \n          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>\n            <Button variant=\"primary\" onClick={() => setIsDark(!isDark)}>\n              Toggle Theme\n            </Button>\n            \n            <Button variant=\"success\" size=\"large\">\n              Large Button\n            </Button>\n            \n            <Button variant=\"danger\" size=\"small\">\n              Small Button\n            </Button>\n            \n            <OutlineButton variant=\"secondary\">\n              Outline Button\n            </OutlineButton>\n            \n            <Button fullWidth disabled>\n              Disabled Button\n            </Button>\n          </div>\n          \n          {loading && (\n            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>\n              <Spinner />\n            </div>\n          )}\n        </Card>\n      </div>\n    </ThemeProvider>\n  );\n}\n\nexport default App;",
      "// Emotion完整示例\n/** @jsxImportSource @emotion/react */\nimport { css, cx } from '@emotion/css';\nimport styled from '@emotion/styled';\nimport { ThemeProvider, useTheme } from '@emotion/react';\n\n// 1. 使用css()函数创建样式\nconst buttonBase = css`\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s;\n  \n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  }\n`;\n\nconst primaryButton = css`\n  background-color: #007bff;\n  color: white;\n  \n  &:hover {\n    background-color: #0056b3;\n  }\n`;\n\nconst dangerButton = css`\n  background-color: #dc3545;\n  color: white;\n  \n  &:hover {\n    background-color: #c82333;\n  }\n`;\n\n// 2. 使用对象样式\nconst cardStyle = css({\n  backgroundColor: 'white',\n  borderRadius: '8px',\n  padding: '24px',\n  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',\n  marginBottom: '20px',\n});\n\n// 3. 动态样式函数\nconst dynamicButton = (variant, size) => css`\n  ${buttonBase}\n  background-color: ${variant === 'primary' ? '#007bff' : '#6c757d'};\n  color: white;\n  padding: ${size === 'large' ? '16px 32px' : '8px 16px'};\n  font-size: ${size === 'large' ? '18px' : '14px'};\n`;\n\n// 4. 使用styled创建组件\nconst Container = styled.div`\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 20px;\n`;\n\nconst Title = styled.h1`\n  color: ${props => props.theme.colors.primary};\n  font-size: 32px;\n  margin-bottom: 24px;\n  text-align: center;\n`;\n\nconst Grid = styled.div`\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n`;\n\nconst Card = styled.div`\n  background-color: ${props => props.theme.colors.background};\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s;\n  \n  &:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  }\n`;\n\n// 5. 使用css prop（需要@jsxImportSource）\nfunction CssPropExample() {\n  return (\n    <div\n      css={css`\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 20px;\n        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n        color: white;\n        border-radius: 8px;\n        \n        &:hover {\n          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);\n        }\n      `}\n    >\n      <p>Styled with css prop</p>\n    </div>\n  );\n}\n\n// 6. 组合样式\nfunction CompositionExample() {\n  const [isActive, setIsActive] = React.useState(false);\n  \n  const activeStyle = css`\n    background-color: #28a745;\n    border: 2px solid #1e7e34;\n  `;\n  \n  return (\n    <button\n      className={cx(buttonBase, primaryButton, isActive && activeStyle)}\n      onClick={() => setIsActive(!isActive)}\n    >\n      {isActive ? 'Active' : 'Inactive'}\n    </button>\n  );\n}\n\n// 7. 主题支持\nconst theme = {\n  colors: {\n    primary: '#007bff',\n    secondary: '#6c757d',\n    success: '#28a745',\n    background: '#ffffff',\n    text: '#212529',\n  },\n  spacing: (multiplier) => `${8 * multiplier}px`,\n};\n\nfunction ThemedComponent() {\n  const theme = useTheme();\n  \n  return (\n    <div\n      css={css`\n        background-color: ${theme.colors.background};\n        color: ${theme.colors.text};\n        padding: ${theme.spacing(3)};\n      `}\n    >\n      <h2 css={css`color: ${theme.colors.primary};`}>\n        Themed Component\n      </h2>\n    </div>\n  );\n}\n\n// 8. 完整应用示例\nfunction App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <Container>\n        <Title>Emotion CSS-in-JS Demo</Title>\n        \n        {/* 使用className */}\n        <div className={cardStyle}>\n          <h3>Using className</h3>\n          <button className={cx(buttonBase, primaryButton)}>\n            Primary Button\n          </button>\n          <button className={cx(buttonBase, dangerButton)}>\n            Danger Button\n          </button>\n        </div>\n        \n        {/* 使用css prop */}\n        <CssPropExample />\n        \n        {/* 样式组合 */}\n        <div className={cardStyle}>\n          <h3>Style Composition</h3>\n          <CompositionExample />\n        </div>\n        \n        {/* 主题使用 */}\n        <ThemedComponent />\n        \n        {/* 动态样式 */}\n        <Grid>\n          {['small', 'medium', 'large'].map(size => (\n            <Card key={size}>\n              <h4>Size: {size}</h4>\n              <button className={dynamicButton('primary', size)}>\n                Click me\n              </button>\n            </Card>\n          ))}\n        </Grid>\n      </Container>\n    </ThemeProvider>\n  );\n}\n\nexport default App;",
      "// CSS-in-JS方案对比与选择\n\n// 1. styled-components vs Emotion\n// styled-components: 更成熟的社区和生态\nimport styled from 'styled-components';\n\nconst StyledButton = styled.button`\n  background: blue;\n  color: white;\n`;\n\n// Emotion: 更小的包体积和更好的性能\nimport styled from '@emotion/styled';\nimport { css } from '@emotion/react';\n\nconst EmotionButton = styled.button`\n  background: blue;\n  color: white;\n`;\n\n// Emotion还支持css prop\nconst CssPropButton = () => (\n  <button css={css`background: blue; color: white;`}>\n    Click\n  </button>\n);\n\n// 2. 零运行时方案：Linaria\nimport { css } from '@linaria/core';\nimport { styled } from '@linaria/react';\n\n// 编译时提取为普通CSS，零运行时开销\nconst LinariaButton = styled.button`\n  background: blue;\n  color: white;\n`;\n\nconst className = css`\n  font-size: 16px;\n  color: red;\n`;\n\n// 3. vanilla-extract：类型安全的零运行时\n// styles.css.ts\nimport { style, createTheme } from '@vanilla-extract/css';\n\nexport const [themeClass, vars] = createTheme({\n  color: {\n    primary: 'blue',\n    secondary: 'gray',\n  },\n  spacing: {\n    small: '4px',\n    medium: '8px',\n  },\n});\n\nexport const button = style({\n  backgroundColor: vars.color.primary,\n  padding: vars.spacing.medium,\n  border: 'none',\n  color: 'white',\n  ':hover': {\n    opacity: 0.8,\n  },\n});\n\n// Component.tsx\nimport { button, themeClass } from './styles.css';\n\nfunction Button() {\n  return (\n    <div className={themeClass}>\n      <button className={button}>Click</button>\n    </div>\n  );\n}\n\n// 4. Stitches：接近零运行时的现代方案\nimport { createStitches } from '@stitches/react';\n\nconst { styled, css } = createStitches({\n  theme: {\n    colors: {\n      primary: 'blue',\n      secondary: 'gray',\n    },\n    space: {\n      1: '4px',\n      2: '8px',\n      3: '16px',\n    },\n  },\n});\n\nconst StitchesButton = styled('button', {\n  backgroundColor: '$primary',\n  padding: '$2 $3',\n  border: 'none',\n  color: 'white',\n  \n  variants: {\n    size: {\n      small: { fontSize: '14px' },\n      large: { fontSize: '18px' },\n    },\n    variant: {\n      primary: { backgroundColor: '$primary' },\n      secondary: { backgroundColor: '$secondary' },\n    },\n  },\n  \n  defaultVariants: {\n    size: 'small',\n    variant: 'primary',\n  },\n});\n\n// 使用\n<StitchesButton size=\"large\" variant=\"secondary\">\n  Click\n</StitchesButton>\n\n// 5. 选择建议\n/*\n运行时方案（styled-components, Emotion）：\n✅ 完整的动态样式能力\n✅ 成熟的生态和社区\n✅ 优秀的开发体验\n❌ 运行时性能开销\n❌ 包体积较大\n适用场景：需要大量动态样式的复杂应用\n\n零运行时方案（Linaria, vanilla-extract）：\n✅ 零运行时开销\n✅ 编译为标准CSS\n✅ 更好的性能\n❌ 动态样式受限\n❌ 学习曲线较陡\n适用场景：追求极致性能的应用\n\n混合方案（Stitches）：\n✅ 接近零运行时\n✅ 良好的类型支持\n✅ 优秀的变体系统\n❌ 较新，生态较小\n适用场景：需要平衡性能和灵活性\n*/"
    ],
    resources: [
      {"name": "styled-components官方文档", "url": "https://styled-components.com/"},
      {"name": "Emotion官方文档", "url": "https://emotion.sh/"},
      {"name": "CSS-in-JS对比", "url": "https://github.com/andreipfeiffer/css-in-js"},
      {"name": "零运行时方案", "url": "https://vanilla-extract.style/"}
    ]
  },

  Deploy: {
    title: "应用部署",
    content: `Deploy（部署）是将应用程序从开发环境发布到生产环境的过程，涉及构建、测试、发布和监控等多个环节。

## 部署方式
- **传统部署**: 手动上传到服务器，使用FTP/SSH
- **CI/CD自动化**: 通过持续集成和持续部署实现自动化
- **容器化部署**: 使用Docker等容器技术
- **Serverless**: 无服务器架构，按需付费
- **静态网站托管**: Vercel、Netlify、GitHub Pages等
- **PaaS平台**: Heroku、Railway、Render等

## 前端部署平台
- **Vercel**: Next.js官方推荐，自动构建部署
- **Netlify**: 强大的静态网站托管和Serverless功能
- **GitHub Pages**: 免费的静态网站托管
- **Cloudflare Pages**: 快速的全球CDN网络
- **AWS Amplify**: 亚马逊的全栈部署平台
- **Firebase Hosting**: Google的应用托管服务

## 部署流程
1. **代码提交**: 推送代码到Git仓库
2. **自动构建**: CI服务器自动拉取代码并构建
3. **运行测试**: 执行单元测试和集成测试
4. **构建产物**: 生成优化后的生产版本
5. **部署发布**: 上传到服务器或CDN
6. **健康检查**: 验证部署是否成功
7. **监控告警**: 持续监控应用状态

## 环境配置
- **开发环境（Development）**: 本地开发调试
- **测试环境（Testing）**: 测试团队验证
- **预发环境（Staging）**: 生产环境镜像
- **生产环境（Production）**: 用户访问的正式环境

## 部署策略
- **蓝绿部署**: 两个相同环境交替部署
- **滚动部署**: 逐步更新服务器实例
- **金丝雀发布**: 先发布到小部分用户
- **A/B测试**: 同时运行多个版本对比效果
- **灰度发布**: 按比例逐步放量

## Docker容器化
- **镜像构建**: Dockerfile定义镜像
- **多阶段构建**: 优化镜像大小
- **容器编排**: Docker Compose、Kubernetes
- **镜像仓库**: Docker Hub、阿里云容器镜像
- **环境一致性**: 开发、测试、生产环境统一

## 性能优化
- **代码分割**: 按需加载减少首屏体积
- **资源压缩**: Gzip、Brotli压缩
- **CDN加速**: 静态资源分发到全球节点
- **缓存策略**: 浏览器缓存和服务器缓存
- **预加载**: DNS预解析、资源预加载
- **SSR/SSG**: 服务端渲染或静态生成

## 安全配置
- **HTTPS**: SSL/TLS证书配置
- **环境变量**: 敏感信息不提交到代码库
- **CORS配置**: 跨域资源共享控制
- **CSP策略**: 内容安全策略
- **访问控制**: IP白名单、身份验证
- **定期更新**: 依赖包和系统补丁

## 监控与日志
- **性能监控**: 响应时间、错误率、资源使用
- **日志收集**: 应用日志、访问日志、错误日志
- **告警通知**: 异常自动通知开发团队
- **分析工具**: Google Analytics、Sentry等

## 最佳实践
1. 使用版本控制和Git工作流
2. 实施自动化测试和CI/CD
3. 配置多环境和环境变量管理
4. 使用CDN加速静态资源
5. 定期备份和灾难恢复计划
6. 监控应用性能和错误
7. 实施渐进式部署策略
8. 文档化部署流程`,
    examples: [
      "# Vercel部署配置示例\n\n# 1. vercel.json配置文件\n{\n  \"version\": 2,\n  \"name\": \"my-app\",\n  \"builds\": [\n    {\n      \"src\": \"package.json\",\n      \"use\": \"@vercel/node\"\n    }\n  ],\n  \"routes\": [\n    {\n      \"src\": \"/api/(.*)\",\n      \"dest\": \"/api/$1\"\n    },\n    {\n      \"src\": \"/(.*)\",\n      \"dest\": \"/index.html\"\n    }\n  ],\n  \"env\": {\n    \"NODE_ENV\": \"production\"\n  },\n  \"build\": {\n    \"env\": {\n      \"VITE_API_URL\": \"@api_url\"\n    }\n  },\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        {\n          \"key\": \"Cache-Control\",\n          \"value\": \"public, max-age=31536000, immutable\"\n        },\n        {\n          \"key\": \"X-Content-Type-Options\",\n          \"value\": \"nosniff\"\n        },\n        {\n          \"key\": \"X-Frame-Options\",\n          \"value\": \"DENY\"\n        }\n      ]\n    }\n  ]\n}\n\n# 2. Next.js项目部署到Vercel\n# 在项目根目录执行\nnpm install -g vercel\nvercel login\nvercel\n\n# 或通过Git集成自动部署\n# 1. 将代码推送到GitHub\n# 2. 访问vercel.com导入仓库\n# 3. 配置环境变量\n# 4. 每次push自动触发部署\n\n# 3. 环境变量配置\n# Vercel Dashboard -> Settings -> Environment Variables\n# 或使用.env.local（不提交到Git）\nVITE_API_URL=https://api.example.com\nVITE_APP_KEY=your-app-key\nDATABASE_URL=postgresql://user:pass@host:5432/db\n\n# 4. 自定义域名配置\n# Vercel Dashboard -> Domains\n# 添加域名并配置DNS\n# A记录: 76.76.21.21\n# CNAME: cname.vercel-dns.com\n\n# 5. 预览部署\n# 每个PR自动创建预览环境\n# https://my-app-git-feature-branch.vercel.app\n\n# 6. Vercel CLI命令\nvercel --prod              # 部署到生产环境\nvercel --env-file .env     # 使用特定环境变量文件\nvercel logs                # 查看部署日志\nvercel ls                  # 列出所有部署\nvercel rm deployment-url   # 删除部署",
      "# GitHub Actions CI/CD自动化部署\n\n# .github/workflows/deploy.yml\nname: Deploy to Production\n\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\n\nenv:\n  NODE_VERSION: '18.x'\n\njobs:\n  # 测试任务\n  test:\n    runs-on: ubuntu-latest\n    \n    steps:\n    - name: Checkout代码\n      uses: actions/checkout@v3\n    \n    - name: 设置Node.js\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ env.NODE_VERSION }}\n        cache: 'npm'\n    \n    - name: 安装依赖\n      run: npm ci\n    \n    - name: 运行Lint检查\n      run: npm run lint\n    \n    - name: 运行单元测试\n      run: npm run test:unit\n    \n    - name: 运行E2E测试\n      run: npm run test:e2e\n    \n    - name: 生成测试覆盖率报告\n      run: npm run test:coverage\n    \n    - name: 上传覆盖率到Codecov\n      uses: codecov/codecov-action@v3\n\n  # 构建任务\n  build:\n    runs-on: ubuntu-latest\n    needs: test\n    \n    steps:\n    - name: Checkout代码\n      uses: actions/checkout@v3\n    \n    - name: 设置Node.js\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ env.NODE_VERSION }}\n        cache: 'npm'\n    \n    - name: 安装依赖\n      run: npm ci\n    \n    - name: 构建应用\n      env:\n        VITE_API_URL: ${{ secrets.API_URL }}\n        VITE_APP_KEY: ${{ secrets.APP_KEY }}\n      run: npm run build\n    \n    - name: 上传构建产物\n      uses: actions/upload-artifact@v3\n      with:\n        name: dist\n        path: dist/\n        retention-days: 7\n\n  # 部署到服务器\n  deploy:\n    runs-on: ubuntu-latest\n    needs: build\n    if: github.ref == 'refs/heads/main'\n    \n    steps:\n    - name: 下载构建产物\n      uses: actions/download-artifact@v3\n      with:\n        name: dist\n        path: dist/\n    \n    - name: 部署到服务器（通过SSH）\n      uses: appleboy/scp-action@master\n      with:\n        host: ${{ secrets.SERVER_HOST }}\n        username: ${{ secrets.SERVER_USER }}\n        key: ${{ secrets.SERVER_SSH_KEY }}\n        source: \"dist/*\"\n        target: \"/var/www/html\"\n    \n    - name: 重启服务\n      uses: appleboy/ssh-action@master\n      with:\n        host: ${{ secrets.SERVER_HOST }}\n        username: ${{ secrets.SERVER_USER }}\n        key: ${{ secrets.SERVER_SSH_KEY }}\n        script: |\n          cd /var/www/html\n          pm2 restart app\n          nginx -s reload\n    \n    - name: 发送部署通知\n      if: always()\n      uses: 8398a7/action-slack@v3\n      with:\n        status: ${{ job.status }}\n        text: '部署状态: ${{ job.status }}'\n        webhook_url: ${{ secrets.SLACK_WEBHOOK }}\n\n  # 部署到Netlify（替代方案）\n  deploy-netlify:\n    runs-on: ubuntu-latest\n    needs: build\n    if: github.ref == 'refs/heads/main'\n    \n    steps:\n    - name: 下载构建产物\n      uses: actions/download-artifact@v3\n      with:\n        name: dist\n    \n    - name: 部署到Netlify\n      uses: netlify/actions/cli@master\n      env:\n        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}\n        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}\n      with:\n        args: deploy --prod --dir=dist\n\n  # 健康检查\n  health-check:\n    runs-on: ubuntu-latest\n    needs: deploy\n    \n    steps:\n    - name: 等待服务启动\n      run: sleep 30\n    \n    - name: 检查网站可访问性\n      run: |\n        response=$(curl -s -o /dev/null -w \"%{http_code}\" https://example.com)\n        if [ $response -eq 200 ]; then\n          echo \"✅ 网站正常运行\"\n        else\n          echo \"❌ 网站访问失败: HTTP $response\"\n          exit 1\n        fi",
      "# Docker容器化部署完整示例\n\n# 1. 多阶段构建的Dockerfile\n# Dockerfile\nFROM node:18-alpine AS builder\n\n# 设置工作目录\nWORKDIR /app\n\n# 复制package文件\nCOPY package*.json ./\n\n# 安装依赖（使用ci确保一致性）\nRUN npm ci\n\n# 复制源代码\nCOPY . .\n\n# 构建应用\nRUN npm run build\n\n# 生产环境镜像\nFROM nginx:alpine\n\n# 复制自定义nginx配置\nCOPY nginx.conf /etc/nginx/nginx.conf\n\n# 从builder阶段复制构建产物\nCOPY --from=builder /app/dist /usr/share/nginx/html\n\n# 暴露端口\nEXPOSE 80\n\n# 健康检查\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1\n\n# 启动nginx\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n# 2. nginx配置文件\n# nginx.conf\nuser nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log warn;\npid /var/run/nginx.pid;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    log_format main '$remote_addr - $remote_user [$time_local] \"$request\" '\n                    '$status $body_bytes_sent \"$http_referer\" '\n                    '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    access_log /var/log/nginx/access.log main;\n\n    sendfile on;\n    tcp_nopush on;\n    keepalive_timeout 65;\n    gzip on;\n    gzip_vary on;\n    gzip_min_length 1024;\n    gzip_types text/plain text/css text/xml text/javascript \n               application/x-javascript application/xml+rss \n               application/json application/javascript;\n\n    server {\n        listen 80;\n        server_name localhost;\n        root /usr/share/nginx/html;\n        index index.html;\n\n        # SPA路由支持\n        location / {\n            try_files $uri $uri/ /index.html;\n        }\n\n        # 静态资源缓存\n        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {\n            expires 1y;\n            add_header Cache-Control \"public, immutable\";\n        }\n\n        # API代理（可选）\n        location /api {\n            proxy_pass http://backend:3000;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection 'upgrade';\n            proxy_set_header Host $host;\n            proxy_cache_bypass $http_upgrade;\n        }\n\n        # 安全头\n        add_header X-Frame-Options \"DENY\" always;\n        add_header X-Content-Type-Options \"nosniff\" always;\n        add_header X-XSS-Protection \"1; mode=block\" always;\n    }\n}\n\n# 3. docker-compose.yml\nversion: '3.8'\n\nservices:\n  frontend:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    container_name: my-app-frontend\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n    environment:\n      - NODE_ENV=production\n    volumes:\n      - ./ssl:/etc/nginx/ssl:ro\n    restart: unless-stopped\n    networks:\n      - app-network\n\n  backend:\n    image: my-backend:latest\n    container_name: my-app-backend\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=${DATABASE_URL}\n      - JWT_SECRET=${JWT_SECRET}\n    restart: unless-stopped\n    networks:\n      - app-network\n    depends_on:\n      - database\n\n  database:\n    image: postgres:15-alpine\n    container_name: my-app-db\n    environment:\n      - POSTGRES_DB=myapp\n      - POSTGRES_USER=admin\n      - POSTGRES_PASSWORD=${DB_PASSWORD}\n    volumes:\n      - postgres-data:/var/lib/postgresql/data\n    restart: unless-stopped\n    networks:\n      - app-network\n\nvolumes:\n  postgres-data:\n\nnetworks:\n  app-network:\n    driver: bridge\n\n# 4. .dockerignore\nnode_modules\ndist\nnpm-debug.log\n.git\n.gitignore\n.env\n.env.local\nREADME.md\n.vscode\n.idea\ncoverage\n\n# 5. 构建和部署命令\n# 构建镜像\ndocker build -t my-app:latest .\n\n# 运行容器\ndocker run -d -p 80:80 --name my-app my-app:latest\n\n# 使用docker-compose\ndocker-compose up -d\n\n# 查看日志\ndocker logs -f my-app\n\n# 停止容器\ndocker-compose down\n\n# 推送到镜像仓库\ndocker tag my-app:latest registry.example.com/my-app:latest\ndocker push registry.example.com/my-app:latest\n\n# 6. 生产环境部署脚本\n#!/bin/bash\n# deploy.sh\n\nset -e\n\necho \"🚀 开始部署...\"\n\n# 拉取最新代码\ngit pull origin main\n\n# 构建新镜像\ndocker-compose build\n\n# 停止旧容器\ndocker-compose down\n\n# 启动新容器\ndocker-compose up -d\n\n# 清理旧镜像\ndocker image prune -f\n\necho \"✅ 部署完成！\"\n\n# 健康检查\nsleep 10\nif curl -f http://localhost:80 > /dev/null 2>&1; then\n    echo \"✅ 应用运行正常\"\nelse\n    echo \"❌ 应用启动失败\"\n    exit 1\nfi"
    ],
    resources: [
      {"name": "Vercel部署文档", "url": "https://vercel.com/docs"},
      {"name": "Netlify部署指南", "url": "https://docs.netlify.com/"},
      {"name": "GitHub Actions", "url": "https://docs.github.com/actions"},
      {"name": "Docker部署实践", "url": "https://docs.docker.com/"}
    ]
  },

  Fastify: {
    title: "Fastify 高性能Node.js框架",
    content: `Fastify是一个专注于性能和低开销的Node.js Web框架，提供了最佳的开发者体验和应用性能。

## 核心特性
- **高性能**: 比Express快2倍以上
- **低开销**: 优化的内存使用和CPU占用
- **JSON Schema验证**: 内置高效的请求/响应验证
- **日志系统**: 内置Pino日志记录器
- **插件架构**: 完全封装的插件系统
- **TypeScript支持**: 完整的类型定义
- **异步处理**: 原生支持async/await
- **装饰器**: 扩展核心对象的能力

## 与Express对比
- **性能**: Fastify比Express快2-3倍
- **Schema验证**: Fastify内置，Express需要中间件
- **序列化**: Fastify使用fast-json-stringify优化
- **插件系统**: Fastify更强大的封装机制
- **异步支持**: Fastify原生支持，Express需要包装

## 插件系统
- **完全封装**: 插件作用域隔离
- **依赖管理**: 声明插件依赖关系
- **装饰器**: 扩展request、reply等对象
- **钩子系统**: 生命周期钩子函数
- **异步注册**: 支持异步插件加载

## JSON Schema验证
- **请求验证**: 自动验证请求体、参数、查询
- **响应验证**: 验证响应数据格式
- **快速序列化**: 基于Schema的快速JSON序列化
- **类型安全**: TypeScript类型推断
- **错误处理**: 自动返回验证错误

## 路由系统
- **路径参数**: 动态路由参数
- **查询参数**: URL查询字符串
- **请求体**: JSON、表单、文件上传
- **路由前缀**: 路由分组和版本控制
- **路由约束**: 基于host、version等的路由

## 钩子生命周期
- **onRequest**: 请求开始时触发
- **preParsing**: 解析前处理
- **preValidation**: 验证前处理
- **preHandler**: 处理器前执行
- **onSend**: 发送响应前
- **onResponse**: 响应完成后
- **onError**: 错误处理

## 常用插件
- **@fastify/cors**: CORS支持
- **@fastify/helmet**: 安全头设置
- **@fastify/jwt**: JWT认证
- **@fastify/cookie**: Cookie支持
- **@fastify/multipart**: 文件上传
- **@fastify/static**: 静态文件服务
- **@fastify/rate-limit**: 速率限制
- **@fastify/swagger**: API文档生成

## 最佳实践
1. 使用JSON Schema定义接口规范
2. 合理使用插件封装功能模块
3. 利用装饰器扩展功能
4. 使用钩子处理通用逻辑
5. 配置日志记录和监控
6. 实施错误处理策略
7. 使用TypeScript获得类型安全
8. 性能测试和优化`,
    examples: [
      "// Fastify基础应用示例\nimport Fastify from 'fastify';\nimport type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';\n\n// 创建Fastify实例\nconst fastify: FastifyInstance = Fastify({\n  logger: {\n    level: 'info',\n    prettyPrint: process.env.NODE_ENV === 'development'\n  },\n  trustProxy: true,\n  requestIdHeader: 'x-request-id',\n  requestIdLogLabel: 'reqId'\n});\n\n// 定义Schema\nconst userSchema = {\n  type: 'object',\n  required: ['name', 'email'],\n  properties: {\n    name: { type: 'string', minLength: 2, maxLength: 50 },\n    email: { type: 'string', format: 'email' },\n    age: { type: 'integer', minimum: 0, maximum: 150 }\n  }\n};\n\nconst getUserSchema = {\n  params: {\n    type: 'object',\n    properties: {\n      id: { type: 'string', pattern: '^[0-9]+$' }\n    },\n    required: ['id']\n  },\n  response: {\n    200: {\n      type: 'object',\n      properties: {\n        id: { type: 'number' },\n        name: { type: 'string' },\n        email: { type: 'string' },\n        createdAt: { type: 'string' }\n      }\n    },\n    404: {\n      type: 'object',\n      properties: {\n        error: { type: 'string' },\n        message: { type: 'string' }\n      }\n    }\n  }\n};\n\n// 基础路由\nfastify.get('/', async (request, reply) => {\n  return { message: 'Hello Fastify!' };\n});\n\n// 带参数的路由\nfastify.get('/users/:id', {\n  schema: getUserSchema\n}, async (request: FastifyRequest<{ Params: { id: string } }>, reply) => {\n  const { id } = request.params;\n  \n  // 模拟数据库查询\n  const user = await findUserById(id);\n  \n  if (!user) {\n    return reply.code(404).send({\n      error: 'Not Found',\n      message: `User with id ${id} not found`\n    });\n  }\n  \n  return user;\n});\n\n// POST路由（带Schema验证）\nfastify.post('/users', {\n  schema: {\n    body: userSchema,\n    response: {\n      201: {\n        type: 'object',\n        properties: {\n          id: { type: 'number' },\n          name: { type: 'string' },\n          email: { type: 'string' }\n        }\n      }\n    }\n  }\n}, async (request: FastifyRequest<{ Body: { name: string; email: string; age?: number } }>, reply) => {\n  const userData = request.body;\n  \n  // 创建用户\n  const newUser = await createUser(userData);\n  \n  return reply.code(201).send(newUser);\n});\n\n// PUT路由\nfastify.put('/users/:id', {\n  schema: {\n    params: {\n      type: 'object',\n      properties: { id: { type: 'string' } },\n      required: ['id']\n    },\n    body: userSchema\n  }\n}, async (request, reply) => {\n  const { id } = request.params;\n  const userData = request.body;\n  \n  const updatedUser = await updateUser(id, userData);\n  return updatedUser;\n});\n\n// DELETE路由\nfastify.delete('/users/:id', async (request, reply) => {\n  const { id } = request.params;\n  await deleteUser(id);\n  return reply.code(204).send();\n});\n\n// 错误处理\nfastify.setErrorHandler((error, request, reply) => {\n  request.log.error(error);\n  \n  if (error.validation) {\n    return reply.code(400).send({\n      error: 'Validation Error',\n      message: error.message,\n      details: error.validation\n    });\n  }\n  \n  return reply.code(error.statusCode || 500).send({\n    error: error.name,\n    message: error.message\n  });\n});\n\n// 404处理\nfastify.setNotFoundHandler((request, reply) => {\n  return reply.code(404).send({\n    error: 'Not Found',\n    message: `Route ${request.method}:${request.url} not found`\n  });\n});\n\n// 启动服务器\nconst start = async () => {\n  try {\n    await fastify.listen({ port: 3000, host: '0.0.0.0' });\n    console.log('Server listening on http://localhost:3000');\n  } catch (err) {\n    fastify.log.error(err);\n    process.exit(1);\n  }\n};\n\nstart();\n\n// 模拟数据库函数\nconst users = new Map();\nlet userId = 1;\n\nasync function findUserById(id: string) {\n  return users.get(parseInt(id));\n}\n\nasync function createUser(userData: any) {\n  const user = { id: userId++, ...userData, createdAt: new Date().toISOString() };\n  users.set(user.id, user);\n  return user;\n}\n\nasync function updateUser(id: string, userData: any) {\n  const user = users.get(parseInt(id));\n  if (user) {\n    Object.assign(user, userData);\n  }\n  return user;\n}\n\nasync function deleteUser(id: string) {\n  users.delete(parseInt(id));\n}",
      "// Fastify插件和钩子系统\nimport Fastify from 'fastify';\nimport fp from 'fastify-plugin';\nimport cors from '@fastify/cors';\nimport helmet from '@fastify/helmet';\nimport jwt from '@fastify/jwt';\nimport rateLimit from '@fastify/rate-limit';\n\nconst fastify = Fastify({ logger: true });\n\n// 1. 注册第三方插件\nawait fastify.register(cors, {\n  origin: true,\n  credentials: true\n});\n\nawait fastify.register(helmet, {\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: [\"'self'\"],\n      styleSrc: [\"'self'\", \"'unsafe-inline'\"]\n    }\n  }\n});\n\nawait fastify.register(jwt, {\n  secret: process.env.JWT_SECRET || 'supersecret'\n});\n\nawait fastify.register(rateLimit, {\n  max: 100,\n  timeWindow: '15 minutes'\n});\n\n// 2. 自定义插件 - 数据库连接\nconst dbPlugin = fp(async (fastify, options) => {\n  // 模拟数据库连接\n  const db = {\n    connect: async () => {\n      fastify.log.info('Database connected');\n      return { client: 'postgresql' };\n    },\n    close: async () => {\n      fastify.log.info('Database connection closed');\n    }\n  };\n  \n  const connection = await db.connect();\n  \n  // 装饰器：将db添加到fastify实例\n  fastify.decorate('db', connection);\n  \n  // 添加钩子：服务器关闭时断开数据库\n  fastify.addHook('onClose', async (instance) => {\n    await db.close();\n  });\n});\n\nawait fastify.register(dbPlugin);\n\n// 3. 认证装饰器\nfastify.decorate('authenticate', async (request, reply) => {\n  try {\n    await request.jwtVerify();\n  } catch (err) {\n    reply.code(401).send({ error: 'Unauthorized' });\n  }\n});\n\n// 4. 请求日志钩子\nfastify.addHook('onRequest', async (request, reply) => {\n  request.log.info({\n    method: request.method,\n    url: request.url,\n    ip: request.ip,\n    userAgent: request.headers['user-agent']\n  }, 'Incoming request');\n});\n\n// 5. 响应时间钩子\nfastify.addHook('onRequest', async (request, reply) => {\n  request.startTime = Date.now();\n});\n\nfastify.addHook('onResponse', async (request, reply) => {\n  const duration = Date.now() - request.startTime;\n  request.log.info({ duration, statusCode: reply.statusCode }, 'Request completed');\n});\n\n// 6. 预处理钩子（解析前）\nfastify.addHook('preParsing', async (request, reply) => {\n  // 可以在这里修改原始请求流\n  request.log.debug('Preparing to parse request');\n});\n\n// 7. 预验证钩子（验证前）\nfastify.addHook('preValidation', async (request, reply) => {\n  // 在Schema验证前执行\n  if (request.method === 'POST' && !request.headers['content-type']) {\n    throw new Error('Content-Type header is required for POST requests');\n  }\n});\n\n// 8. 预处理钩子（处理前）\nfastify.addHook('preHandler', async (request, reply) => {\n  // 在路由处理器前执行\n  request.customData = { timestamp: Date.now() };\n});\n\n// 9. 发送前钩子\nfastify.addHook('onSend', async (request, reply, payload) => {\n  // 可以修改响应payload\n  return payload;\n});\n\n// 10. 错误钩子\nfastify.addHook('onError', async (request, reply, error) => {\n  request.log.error({\n    error: error.message,\n    stack: error.stack,\n    url: request.url\n  }, 'Request error');\n});\n\n// 11. 路由级别的钩子\nfastify.get('/protected', {\n  preHandler: fastify.authenticate\n}, async (request, reply) => {\n  return { message: 'Protected data', user: request.user };\n});\n\n// 12. 插件作用域\nawait fastify.register(async (instance, opts) => {\n  // 这个装饰器只在这个作用域可用\n  instance.decorate('utility', () => 'helper function');\n  \n  instance.get('/scoped', async (request, reply) => {\n    return { result: instance.utility() };\n  });\n});\n\n// 13. 插件依赖\nconst pluginA = fp(async (fastify, options) => {\n  fastify.decorate('pluginA', () => 'A');\n}, {\n  name: 'plugin-a'\n});\n\nconst pluginB = fp(async (fastify, options) => {\n  // pluginB依赖pluginA\n  const result = fastify.pluginA();\n  fastify.decorate('pluginB', () => `B depends on ${result}`);\n}, {\n  name: 'plugin-b',\n  dependencies: ['plugin-a']\n});\n\nawait fastify.register(pluginA);\nawait fastify.register(pluginB);\n\n// 14. 路由示例\nfastify.post('/login', async (request, reply) => {\n  const { username, password } = request.body;\n  \n  // 验证用户\n  if (username === 'admin' && password === 'secret') {\n    const token = fastify.jwt.sign({ username, role: 'admin' });\n    return { token };\n  }\n  \n  return reply.code(401).send({ error: 'Invalid credentials' });\n});\n\nfastify.get('/user/profile', {\n  preHandler: fastify.authenticate\n}, async (request, reply) => {\n  return {\n    user: request.user,\n    timestamp: request.customData.timestamp\n  };\n});\n\nawait fastify.listen({ port: 3000 });",
      "// Fastify完整实战示例：RESTful API\nimport Fastify from 'fastify';\nimport swagger from '@fastify/swagger';\nimport swaggerUi from '@fastify/swagger-ui';\nimport multipart from '@fastify/multipart';\nimport fastifyStatic from '@fastify/static';\nimport path from 'path';\nimport { fileURLToPath } from 'url';\n\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(__filename);\n\nconst fastify = Fastify({\n  logger: {\n    level: process.env.LOG_LEVEL || 'info',\n    transport: {\n      target: 'pino-pretty',\n      options: {\n        translateTime: 'HH:MM:ss Z',\n        ignore: 'pid,hostname'\n      }\n    }\n  },\n  ajv: {\n    customOptions: {\n      removeAdditional: 'all',\n      coerceTypes: true,\n      useDefaults: true\n    }\n  }\n});\n\n// 1. Swagger文档配置\nawait fastify.register(swagger, {\n  swagger: {\n    info: {\n      title: 'My API',\n      description: 'API documentation',\n      version: '1.0.0'\n    },\n    host: 'localhost:3000',\n    schemes: ['http'],\n    consumes: ['application/json'],\n    produces: ['application/json'],\n    tags: [\n      { name: 'users', description: 'User related endpoints' },\n      { name: 'posts', description: 'Post related endpoints' }\n    ]\n  }\n});\n\nawait fastify.register(swaggerUi, {\n  routePrefix: '/docs',\n  uiConfig: {\n    docExpansion: 'list',\n    deepLinking: false\n  }\n});\n\n// 2. 静态文件服务\nawait fastify.register(fastifyStatic, {\n  root: path.join(__dirname, 'public'),\n  prefix: '/public/'\n});\n\n// 3. 文件上传支持\nawait fastify.register(multipart, {\n  limits: {\n    fieldNameSize: 100,\n    fieldSize: 100,\n    fields: 10,\n    fileSize: 1000000, // 1MB\n    files: 1\n  }\n});\n\n// 4. 类型定义\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  role: 'admin' | 'user';\n  createdAt: string;\n}\n\ninterface Post {\n  id: number;\n  userId: number;\n  title: string;\n  content: string;\n  published: boolean;\n  createdAt: string;\n}\n\n// 5. 内存数据存储（实际应用使用数据库）\nconst users: User[] = [];\nconst posts: Post[] = [];\nlet userIdCounter = 1;\nlet postIdCounter = 1;\n\n// 6. Schema定义\nconst userSchema = {\n  type: 'object',\n  properties: {\n    id: { type: 'number' },\n    name: { type: 'string', minLength: 2 },\n    email: { type: 'string', format: 'email' },\n    role: { type: 'string', enum: ['admin', 'user'] },\n    createdAt: { type: 'string' }\n  }\n};\n\nconst postSchema = {\n  type: 'object',\n  properties: {\n    id: { type: 'number' },\n    userId: { type: 'number' },\n    title: { type: 'string', minLength: 5 },\n    content: { type: 'string', minLength: 10 },\n    published: { type: 'boolean' },\n    createdAt: { type: 'string' }\n  }\n};\n\n// 7. User路由\nawait fastify.register(async (userRoutes) => {\n  // GET /api/users\n  userRoutes.get('/users', {\n    schema: {\n      description: 'Get all users',\n      tags: ['users'],\n      response: {\n        200: {\n          type: 'array',\n          items: userSchema\n        }\n      }\n    }\n  }, async (request, reply) => {\n    return users;\n  });\n  \n  // GET /api/users/:id\n  userRoutes.get('/users/:id', {\n    schema: {\n      description: 'Get user by ID',\n      tags: ['users'],\n      params: {\n        type: 'object',\n        properties: {\n          id: { type: 'number' }\n        }\n      },\n      response: {\n        200: userSchema,\n        404: {\n          type: 'object',\n          properties: {\n            error: { type: 'string' }\n          }\n        }\n      }\n    }\n  }, async (request, reply) => {\n    const { id } = request.params as { id: number };\n    const user = users.find(u => u.id === id);\n    \n    if (!user) {\n      return reply.code(404).send({ error: 'User not found' });\n    }\n    \n    return user;\n  });\n  \n  // POST /api/users\n  userRoutes.post('/users', {\n    schema: {\n      description: 'Create a new user',\n      tags: ['users'],\n      body: {\n        type: 'object',\n        required: ['name', 'email'],\n        properties: {\n          name: { type: 'string', minLength: 2 },\n          email: { type: 'string', format: 'email' },\n          role: { type: 'string', enum: ['admin', 'user'], default: 'user' }\n        }\n      },\n      response: {\n        201: userSchema\n      }\n    }\n  }, async (request, reply) => {\n    const { name, email, role = 'user' } = request.body as Partial<User>;\n    \n    const newUser: User = {\n      id: userIdCounter++,\n      name,\n      email,\n      role,\n      createdAt: new Date().toISOString()\n    };\n    \n    users.push(newUser);\n    return reply.code(201).send(newUser);\n  });\n  \n  // DELETE /api/users/:id\n  userRoutes.delete('/users/:id', {\n    schema: {\n      description: 'Delete a user',\n      tags: ['users'],\n      params: {\n        type: 'object',\n        properties: {\n          id: { type: 'number' }\n        }\n      },\n      response: {\n        204: { type: 'null' }\n      }\n    }\n  }, async (request, reply) => {\n    const { id } = request.params as { id: number };\n    const index = users.findIndex(u => u.id === id);\n    \n    if (index !== -1) {\n      users.splice(index, 1);\n    }\n    \n    return reply.code(204).send();\n  });\n}, { prefix: '/api' });\n\n// 8. Post路由\nawait fastify.register(async (postRoutes) => {\n  // GET /api/posts\n  postRoutes.get('/posts', {\n    schema: {\n      description: 'Get all posts',\n      tags: ['posts'],\n      querystring: {\n        type: 'object',\n        properties: {\n          published: { type: 'boolean' },\n          userId: { type: 'number' }\n        }\n      },\n      response: {\n        200: {\n          type: 'array',\n          items: postSchema\n        }\n      }\n    }\n  }, async (request, reply) => {\n    const { published, userId } = request.query as { published?: boolean; userId?: number };\n    \n    let filtered = posts;\n    if (published !== undefined) {\n      filtered = filtered.filter(p => p.published === published);\n    }\n    if (userId !== undefined) {\n      filtered = filtered.filter(p => p.userId === userId);\n    }\n    \n    return filtered;\n  });\n  \n  // POST /api/posts\n  postRoutes.post('/posts', {\n    schema: {\n      description: 'Create a new post',\n      tags: ['posts'],\n      body: {\n        type: 'object',\n        required: ['userId', 'title', 'content'],\n        properties: {\n          userId: { type: 'number' },\n          title: { type: 'string', minLength: 5 },\n          content: { type: 'string', minLength: 10 },\n          published: { type: 'boolean', default: false }\n        }\n      },\n      response: {\n        201: postSchema\n      }\n    }\n  }, async (request, reply) => {\n    const { userId, title, content, published = false } = request.body as Partial<Post>;\n    \n    const newPost: Post = {\n      id: postIdCounter++,\n      userId,\n      title,\n      content,\n      published,\n      createdAt: new Date().toISOString()\n    };\n    \n    posts.push(newPost);\n    return reply.code(201).send(newPost);\n  });\n}, { prefix: '/api' });\n\n// 9. 健康检查\nfastify.get('/health', async (request, reply) => {\n  return {\n    status: 'ok',\n    timestamp: new Date().toISOString(),\n    uptime: process.uptime()\n  };\n});\n\n// 10. 启动服务器\nconst start = async () => {\n  try {\n    await fastify.listen({ port: 3000, host: '0.0.0.0' });\n    console.log('🚀 Server running at http://localhost:3000');\n    console.log('📚 API docs at http://localhost:3000/docs');\n  } catch (err) {\n    fastify.log.error(err);\n    process.exit(1);\n  }\n};\n\nstart();"
    ],
    resources: [
      {"name": "Fastify官方文档", "url": "https://www.fastify.io/docs/latest/"},
      {"name": "Fastify插件生态", "url": "https://www.fastify.io/ecosystem/"},
      {"name": "JSON Schema指南", "url": "https://json-schema.org/learn/"},
      {"name": "Fastify性能对比", "url": "https://www.fastify.io/benchmarks/"}
    ]
  },

  Framer: {
    title: "Framer Motion 动画库",
    content: `Framer Motion是一个强大的React动画库，提供声明式API和生产就绪的动画效果。

## 核心特性
- **声明式API**: 简洁直观的动画定义方式
- **手势支持**: 拖拽、点击、悬停等交互动画
- **布局动画**: 自动处理布局变化的动画
- **SVG动画**: 完整的SVG路径和形变动画
- **变体系统**: 定义多个动画状态并轻松切换
- **滚动动画**: 基于滚动位置的动画触发
- **服务端渲染**: 完美支持SSR和Next.js

## 基础动画属性
- \`x, y\`: 平移动画
- \`scale\`: 缩放动画
- \`rotate\`: 旋转动画
- \`opacity\`: 透明度动画
- \`backgroundColor\`: 颜色渐变
- \`pathLength\`: SVG路径动画

## 过渡配置
- \`duration\`: 动画持续时间
- \`delay\`: 延迟时间
- \`ease\`: 缓动函数
- \`repeat\`: 重复次数
- \`type\`: 动画类型（spring、tween、inertia）

## 变体（Variants）
- 定义多个动画状态
- 父子组件自动协调
- 动画状态管理
- 交错动画效果

## 手势动画
- \`whileHover\`: 悬停时的动画
- \`whileTap\`: 点击时的动画
- \`drag\`: 拖拽功能
- \`dragConstraints\`: 拖拽限制区域

## 布局动画
- \`layout\`: 自动布局过渡
- \`layoutId\`: 共享布局动画
- \`AnimatePresence\`: 进入/退出动画

## 最佳实践
1. 使用变体管理复杂动画状态
2. 合理使用弹簧动画提升自然感
3. 利用AnimatePresence处理列表动画
4. 使用useAnimation钩子精确控制
5. 优化性能：使用transform和opacity
6. 避免动画过度使用影响性能`,
    examples: [
      "// Framer Motion 基础动画示例\nimport { motion, AnimatePresence } from 'framer-motion';\nimport { useState } from 'react';\n\n// 1. 基础动画\nfunction BasicAnimation() {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 50 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.5 }}\n      style={{ padding: '20px', background: '#007bff', color: 'white' }}\n    >\n      淡入并上移的元素\n    </motion.div>\n  );\n}\n\n// 2. 手势动画\nfunction GestureAnimation() {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.1 }}\n      whileTap={{ scale: 0.95 }}\n      style={{ padding: '12px 24px', fontSize: '16px' }}\n    >\n      悬停放大，点击缩小\n    </motion.button>\n  );\n}\n\n// 3. 拖拽动画\nfunction DragAnimation() {\n  return (\n    <motion.div\n      drag\n      dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}\n      dragElastic={0.2}\n      style={{\n        width: '100px',\n        height: '100px',\n        background: '#28a745',\n        borderRadius: '12px',\n        cursor: 'grab'\n      }}\n    >\n      拖动我\n    </motion.div>\n  );\n}",
      "// 变体系统和列表动画\nimport { motion, AnimatePresence } from 'framer-motion';\nimport { useState } from 'react';\n\n// 1. 变体系统\nconst containerVariants = {\n  hidden: { opacity: 0 },\n  visible: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.1\n    }\n  }\n};\n\nconst itemVariants = {\n  hidden: { y: 20, opacity: 0 },\n  visible: { y: 0, opacity: 1 }\n};\n\nfunction VariantsList() {\n  const items = ['项目 1', '项目 2', '项目 3', '项目 4'];\n  \n  return (\n    <motion.ul\n      variants={containerVariants}\n      initial=\"hidden\"\n      animate=\"visible\"\n      style={{ listStyle: 'none', padding: 0 }}\n    >\n      {items.map((item, i) => (\n        <motion.li\n          key={i}\n          variants={itemVariants}\n          style={{ padding: '12px', margin: '8px 0', background: '#f0f0f0' }}\n        >\n          {item}\n        </motion.li>\n      ))}\n    </motion.ul>\n  );\n}\n\n// 2. 进入/退出动画\nfunction AnimatedList() {\n  const [items, setItems] = useState([1, 2, 3]);\n  \n  return (\n    <div>\n      <button onClick={() => setItems([...items, items.length + 1])}>\n        添加\n      </button>\n      <AnimatePresence>\n        {items.map(item => (\n          <motion.div\n            key={item}\n            initial={{ opacity: 0, x: -50 }}\n            animate={{ opacity: 1, x: 0 }}\n            exit={{ opacity: 0, x: 50 }}\n            layout\n            style={{ padding: '12px', margin: '8px 0', background: '#007bff' }}\n          >\n            Item {item}\n            <button onClick={() => setItems(items.filter(i => i !== item))}>\n              删除\n            </button>\n          </motion.div>\n        ))}\n      </AnimatePresence>\n    </div>\n  );\n}",
      "// 高级动画效果\nimport { motion, useAnimation, useScroll, useTransform } from 'framer-motion';\nimport { useEffect } from 'react';\n\n// 1. 滚动视差动画\nfunction ScrollAnimation() {\n  const { scrollYProgress } = useScroll();\n  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);\n  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);\n  \n  return (\n    <motion.div\n      style={{\n        scale,\n        opacity,\n        height: '100vh',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center'\n      }}\n    >\n      <h1>滚动查看效果</h1>\n    </motion.div>\n  );\n}\n\n// 2. 路径动画（SVG）\nfunction PathAnimation() {\n  return (\n    <svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\">\n      <motion.circle\n        cx=\"100\"\n        cy=\"100\"\n        r=\"80\"\n        stroke=\"#007bff\"\n        strokeWidth=\"4\"\n        fill=\"none\"\n        initial={{ pathLength: 0 }}\n        animate={{ pathLength: 1 }}\n        transition={{ duration: 2, ease: \"easeInOut\" }}\n      />\n    </svg>\n  );\n}\n\n// 3. 编程式动画控制\nfunction ControlledAnimation() {\n  const controls = useAnimation();\n  \n  useEffect(() => {\n    controls.start({\n      rotate: 360,\n      transition: { duration: 2, repeat: Infinity }\n    });\n  }, []);\n  \n  return (\n    <motion.div\n      animate={controls}\n      style={{ width: '100px', height: '100px', background: '#dc3545' }}\n    />\n  );\n}"
    ],
    resources: [
      {"name": "Framer Motion官方文档", "url": "https://www.framer.com/motion/"},
      {"name": "动画示例集合", "url": "https://www.framer.com/motion/examples/"},
      {"name": "API参考文档", "url": "https://www.framer.com/motion/component/"},
      {"name": "动画最佳实践", "url": "https://www.framer.com/motion/guide-performance/"}
    ]
  },

  Graphics: {
    title: "图形渲染技术",
    content: `前端图形渲染技术涵盖2D和3D图形的绘制、动画和交互，从Canvas到WebGL/WebGPU的完整生态。

## 技术栈
- **Canvas 2D**: 基础的2D图形绘制API
- **SVG**: 矢量图形，支持CSS和DOM操作
- **WebGL**: 基于OpenGL ES的3D图形API
- **WebGPU**: 下一代图形API，更高性能
- **Three.js**: 封装WebGL的3D库
- **D3.js**: 数据可视化库
- **PixiJS**: 高性能2D渲染引擎
- **Babylon.js**: 游戏级3D引擎

## Canvas 2D特性
- 路径绘制和填充
- 图像处理和像素操作
- 文本渲染
- 变换和合成
- 动画和交互

## WebGL能力
- 硬件加速的3D渲染
- 着色器编程（GLSL）
- 纹理映射和光照
- 粒子系统
- 后处理效果

## Three.js核心
- 场景、相机、渲染器
- 几何体和材质
- 光源和阴影
- 动画系统
- 加载器（GLTF、OBJ等）

## D3.js应用
- 数据绑定和DOM操作
- SVG图表生成
- 比例尺和坐标轴
- 布局算法
- 过渡动画

## 性能优化
- 离屏Canvas渲染
- 对象池和批量绘制
- LOD（细节层次）
- 视锥体裁剪
- GPU实例化

## 应用场景
- 数据可视化和图表
- 游戏开发
- 3D模型展示
- 图像编辑器
- 地图应用
- 动画和特效`,
    examples: [
      "// Canvas 2D 基础绘图\nconst canvas = document.getElementById('myCanvas') as HTMLCanvasElement;\nconst ctx = canvas.getContext('2d')!;\n\n// 1. 绘制基本形状\nctx.fillStyle = '#007bff';\nctx.fillRect(50, 50, 100, 100);\n\nctx.strokeStyle = '#dc3545';\nctx.lineWidth = 3;\nctx.strokeRect(200, 50, 100, 100);\n\n// 2. 绘制路径\nctx.beginPath();\nctx.arc(400, 100, 50, 0, Math.PI * 2);\nctx.fillStyle = '#28a745';\nctx.fill();\nctx.stroke();\n\n// 3. 绘制文本\nctx.font = '24px Arial';\nctx.fillStyle = '#000';\nctx.fillText('Hello Canvas', 50, 200);\n\n// 4. 简单动画\nlet x = 0;\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = '#007bff';\n  ctx.fillRect(x, 250, 50, 50);\n  x = (x + 2) % canvas.width;\n  requestAnimationFrame(animate);\n}\nanimate();",
      "// Three.js 3D场景示例\nimport * as THREE from 'three';\nimport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';\n\n// 1. 创建场景\nconst scene = new THREE.Scene();\nscene.background = new THREE.Color(0xf0f0f0);\n\n// 2. 创建相机\nconst camera = new THREE.PerspectiveCamera(\n  75,\n  window.innerWidth / window.innerHeight,\n  0.1,\n  1000\n);\ncamera.position.z = 5;\n\n// 3. 创建渲染器\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\n// 4. 添加立方体\nconst geometry = new THREE.BoxGeometry(1, 1, 1);\nconst material = new THREE.MeshPhongMaterial({ color: 0x007bff });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n\n// 5. 添加光源\nconst light = new THREE.DirectionalLight(0xffffff, 1);\nlight.position.set(5, 5, 5);\nscene.add(light);\nscene.add(new THREE.AmbientLight(0x404040));\n\n// 6. 添加控制器\nconst controls = new OrbitControls(camera, renderer.domElement);\n\n// 7. 动画循环\nfunction animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n  controls.update();\n  renderer.render(scene, camera);\n}\nanimate();",
      "// D3.js 数据可视化示例\nimport * as d3 from 'd3';\n\n// 1. 创建SVG容器\nconst svg = d3.select('#chart')\n  .append('svg')\n  .attr('width', 600)\n  .attr('height', 400);\n\n// 2. 数据\nconst data = [30, 86, 168, 281, 303, 365];\n\n// 3. 比例尺\nconst xScale = d3.scaleBand()\n  .domain(data.map((d, i) => i.toString()))\n  .range([0, 600])\n  .padding(0.1);\n\nconst yScale = d3.scaleLinear()\n  .domain([0, d3.max(data)!])\n  .range([400, 0]);\n\n// 4. 绘制柱状图\nsvg.selectAll('rect')\n  .data(data)\n  .enter()\n  .append('rect')\n  .attr('x', (d, i) => xScale(i.toString())!)\n  .attr('y', d => yScale(d))\n  .attr('width', xScale.bandwidth())\n  .attr('height', d => 400 - yScale(d))\n  .attr('fill', '#007bff')\n  .on('mouseover', function() {\n    d3.select(this).attr('fill', '#0056b3');\n  })\n  .on('mouseout', function() {\n    d3.select(this).attr('fill', '#007bff');\n  });\n\n// 5. 添加过渡动画\nsvg.selectAll('rect')\n  .transition()\n  .duration(1000)\n  .attr('y', d => yScale(d))\n  .attr('height', d => 400 - yScale(d));"
    ],
    resources: [
      {"name": "Canvas MDN文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API"},
      {"name": "Three.js官方文档", "url": "https://threejs.org/docs/"},
      {"name": "D3.js官方网站", "url": "https://d3js.org/"},
      {"name": "WebGL基础教程", "url": "https://webglfundamentals.org/"}
    ]
  },

  HTTP: {
    title: "HTTP协议",
    content: `HTTP（HyperText Transfer Protocol）是Web通信的基础协议，定义了客户端和服务器之间的数据传输规则。

## HTTP版本
- **HTTP/1.0**: 每次请求建立新连接
- **HTTP/1.1**: 持久连接、管道化、缓存改进
- **HTTP/2**: 二进制分帧、多路复用、服务器推送
- **HTTP/3**: 基于QUIC协议，更快更稳定

## 请求方法
- **GET**: 获取资源
- **POST**: 提交数据创建资源
- **PUT**: 更新完整资源
- **PATCH**: 部分更新资源
- **DELETE**: 删除资源
- **HEAD**: 获取响应头
- **OPTIONS**: 查询支持的方法

## 状态码
- **1xx**: 信息性状态码
- **2xx**: 成功（200 OK, 201 Created）
- **3xx**: 重定向（301, 302, 304）
- **4xx**: 客户端错误（400, 401, 403, 404）
- **5xx**: 服务器错误（500, 502, 503）

## 请求头
- \`Content-Type\`: 请求体格式
- \`Authorization\`: 认证信息
- \`Accept\`: 可接受的响应格式
- \`User-Agent\`: 客户端信息
- \`Cookie\`: 会话信息

## 响应头
- \`Content-Type\`: 响应体格式
- \`Cache-Control\`: 缓存策略
- \`Set-Cookie\`: 设置Cookie
- \`Access-Control-*\`: CORS相关
- \`ETag\`: 资源版本标识

## 缓存机制
- **强缓存**: Cache-Control, Expires
- **协商缓存**: Last-Modified, ETag
- **缓存策略**: public, private, no-cache

## HTTPS
- SSL/TLS加密传输
- 证书验证
- 数据完整性保护
- 防止中间人攻击

## 最佳实践
1. 使用合适的HTTP方法
2. 正确设置状态码
3. 合理配置缓存策略
4. 启用HTTPS加密
5. 压缩响应数据（Gzip/Brotli）
6. 使用CDN加速静态资源
7. 实施限流和防护措施`,
    examples: [
      "// Fetch API HTTP请求示例\n\n// 1. GET请求\nasync function getUser(id: number) {\n  const response = await fetch(`/api/users/${id}`, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json'\n    }\n  });\n  \n  if (!response.ok) {\n    throw new Error(`HTTP ${response.status}: ${response.statusText}`);\n  }\n  \n  return await response.json();\n}\n\n// 2. POST请求\nasync function createUser(userData: any) {\n  const response = await fetch('/api/users', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': `Bearer ${token}`\n    },\n    body: JSON.stringify(userData)\n  });\n  \n  return await response.json();\n}\n\n// 3. 文件上传\nasync function uploadFile(file: File) {\n  const formData = new FormData();\n  formData.append('file', file);\n  \n  const response = await fetch('/api/upload', {\n    method: 'POST',\n    body: formData\n  });\n  \n  return await response.json();\n}\n\n// 4. 带超时的请求\nasync function fetchWithTimeout(url: string, timeout = 5000) {\n  const controller = new AbortController();\n  const id = setTimeout(() => controller.abort(), timeout);\n  \n  try {\n    const response = await fetch(url, {\n      signal: controller.signal\n    });\n    clearTimeout(id);\n    return await response.json();\n  } catch (error) {\n    clearTimeout(id);\n    throw error;\n  }\n}",
      "// Axios HTTP客户端示例\nimport axios from 'axios';\n\n// 1. 创建实例\nconst api = axios.create({\n  baseURL: 'https://api.example.com',\n  timeout: 10000,\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\n\n// 2. 请求拦截器\napi.interceptors.request.use(\n  config => {\n    const token = localStorage.getItem('token');\n    if (token) {\n      config.headers.Authorization = `Bearer ${token}`;\n    }\n    return config;\n  },\n  error => Promise.reject(error)\n);\n\n// 3. 响应拦截器\napi.interceptors.response.use(\n  response => response.data,\n  error => {\n    if (error.response?.status === 401) {\n      // 处理未授权\n      window.location.href = '/login';\n    }\n    return Promise.reject(error);\n  }\n);\n\n// 4. API方法\nexport const userAPI = {\n  getAll: () => api.get('/users'),\n  getById: (id: number) => api.get(`/users/${id}`),\n  create: (data: any) => api.post('/users', data),\n  update: (id: number, data: any) => api.put(`/users/${id}`, data),\n  delete: (id: number) => api.delete(`/users/${id}`)\n};",
      "// HTTP缓存策略示例\n\n// 1. Service Worker缓存\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request).then((response) => {\n      // 缓存命中，返回缓存\n      if (response) {\n        return response;\n      }\n      \n      // 发起网络请求\n      return fetch(event.request).then((response) => {\n        // 缓存新的响应\n        if (event.request.method === 'GET') {\n          const responseClone = response.clone();\n          caches.open('v1').then((cache) => {\n            cache.put(event.request, responseClone);\n          });\n        }\n        return response;\n      });\n    })\n  );\n});\n\n// 2. 协商缓存请求\nasync function fetchWithCache(url: string) {\n  const cached = await caches.match(url);\n  \n  const headers = new Headers();\n  if (cached) {\n    const etag = cached.headers.get('ETag');\n    const lastModified = cached.headers.get('Last-Modified');\n    \n    if (etag) headers.set('If-None-Match', etag);\n    if (lastModified) headers.set('If-Modified-Since', lastModified);\n  }\n  \n  const response = await fetch(url, { headers });\n  \n  if (response.status === 304) {\n    // 资源未修改，使用缓存\n    return cached!;\n  }\n  \n  // 更新缓存\n  const cache = await caches.open('v1');\n  cache.put(url, response.clone());\n  \n  return response;\n}"
    ],
    resources: [
      {"name": "HTTP MDN文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP"},
      {"name": "HTTP/2详解", "url": "https://http2.github.io/"},
      {"name": "HTTP状态码", "url": "https://httpstatuses.com/"},
      {"name": "Fetch API指南", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API"}
    ]
  },

  HTTP3: {
    title: "HTTP/3 与 QUIC",
    content: `HTTP/3是基于QUIC协议的最新HTTP版本，提供更快、更可靠的Web通信。

## 核心特性
- **基于UDP**: 避免TCP队头阻塞问题
- **内置加密**: TLS 1.3集成到传输层
- **0-RTT连接**: 更快的连接建立
- **连接迁移**: 支持IP地址变化（移动网络切换）
- **改进的拥塞控制**: 更好的网络适应性
- **多路复用**: 真正独立的数据流

## 与HTTP/2对比
- **传输层**: HTTP/2基于TCP，HTTP/3基于QUIC(UDP)
- **队头阻塞**: HTTP/3完全消除队头阻塞
- **连接建立**: HTTP/3更快（0-RTT vs 多次往返）
- **丢包恢复**: HTTP/3单流影响，HTTP/2影响所有流
- **移动性**: HTTP/3支持连接迁移

## QUIC协议
- 在UDP之上实现可靠传输
- 流级别的流控和拥塞控制
- 前向纠错减少重传
- 自定义重传策略

## 浏览器支持
- Chrome/Edge: 完全支持
- Firefox: 实验性支持
- Safari: 部分支持
- 服务器需支持QUIC协议

## 部署要点
- 服务器配置QUIC协议栈
- UDP端口开放（通常443）
- Alt-Svc响应头通知客户端
- 回退到HTTP/2支持

## 最佳实践
1. 渐进式启用HTTP/3
2. 保持HTTP/2作为回退方案
3. 监控性能指标
4. 优化QUIC参数配置
5. 注意防火墙和负载均衡器配置`,
    examples: [
      "// Node.js HTTP/3 服务器示例（使用quiche）\nimport { createQuicSocket } from 'quic';\nimport fs from 'fs';\n\n// 1. 创建QUIC socket\nconst socket = createQuicSocket({\n  endpoint: { address: '0.0.0.0', port: 443 },\n  server: {\n    key: fs.readFileSync('server-key.pem'),\n    cert: fs.readFileSync('server-cert.pem'),\n    alpn: ['h3']  // HTTP/3 ALPN标识\n  }\n});\n\n// 2. 处理连接\nsocket.on('session', (session) => {\n  console.log('New QUIC session established');\n  \n  session.on('stream', (stream) => {\n    let data = '';\n    \n    stream.on('data', (chunk) => {\n      data += chunk.toString();\n    });\n    \n    stream.on('end', () => {\n      // 解析HTTP/3请求\n      console.log('Request:', data);\n      \n      // 发送HTTP/3响应\n      const response = [\n        ':status: 200',\n        'content-type: application/json',\n        '',\n        JSON.stringify({ message: 'Hello HTTP/3!' })\n      ].join('\\r\\n');\n      \n      stream.write(response);\n      stream.end();\n    });\n  });\n});\n\nsocket.listen();\nconsole.log('HTTP/3 server running on port 443');",
      "// Nginx HTTP/3 配置\n# nginx.conf\nserver {\n    # 监听HTTP/3 (QUIC)\n    listen 443 quic reuseport;\n    # 同时监听HTTP/2作为回退\n    listen 443 ssl http2;\n    \n    server_name example.com;\n    \n    # SSL证书\n    ssl_certificate /path/to/cert.pem;\n    ssl_certificate_key /path/to/key.pem;\n    ssl_protocols TLSv1.3;\n    \n    # HTTP/3配置\n    quic_retry on;\n    ssl_early_data on;\n    \n    # 通知客户端支持HTTP/3\n    add_header Alt-Svc 'h3=\":443\"; ma=86400';\n    \n    # QUIC相关头部\n    add_header X-Protocol $server_protocol always;\n    add_header QUIC-Status $quic always;\n    \n    location / {\n        root /var/www/html;\n        index index.html;\n    }\n}\n\n# 防火墙配置（UFW）\n# sudo ufw allow 443/udp\n# sudo ufw allow 443/tcp",
      "// 客户端检测HTTP/3支持\n// 1. 检测浏览器支持\nfunction supportsHTTP3() {\n  // 检查QUIC支持\n  const connection = (navigator as any).connection;\n  if (connection && 'effectiveType' in connection) {\n    return true;\n  }\n  \n  // 检查协议\n  return location.protocol === 'https:' && 'fetch' in window;\n}\n\n// 2. 检测当前连接协议\nfetch('/api/test', { method: 'HEAD' })\n  .then(response => {\n    const protocol = response.headers.get('x-protocol');\n    console.log('Current protocol:', protocol);\n    // 可能的值: HTTP/1.1, h2 (HTTP/2), h3 (HTTP/3)\n  });\n\n// 3. Performance API查看协议\nconst perfEntries = performance.getEntriesByType('navigation');\nif (perfEntries.length > 0) {\n  const navEntry = perfEntries[0] as PerformanceNavigationTiming;\n  console.log('Next Protocol:', navEntry.nextHopProtocol);\n  // h3 表示HTTP/3\n}"
    ],
    resources: [
      {"name": "HTTP/3详解", "url": "https://http3-explained.haxx.se/"},
      {"name": "QUIC协议", "url": "https://www.chromium.org/quic/"},
      {"name": "Cloudflare HTTP/3", "url": "https://blog.cloudflare.com/http3-the-past-present-and-future/"},
      {"name": "浏览器兼容性", "url": "https://caniuse.com/http3"}
    ]
  },

  Husky: {
    title: "Husky Git钩子工具",
    content: `Husky是一个Git钩子管理工具，帮助在Git操作前自动运行脚本，确保代码质量。

## 核心功能
- **Git钩子管理**: 简化Git hooks配置
- **自动化检查**: 提交前运行lint、test等
- **团队规范**: 统一代码质量标准
- **零配置**: 自动安装和配置
- **跨平台**: Windows、Mac、Linux支持

## 常用钩子
- **pre-commit**: 提交前执行（lint、format）
- **commit-msg**: 验证提交消息格式
- **pre-push**: 推送前执行（测试、构建）
- **post-merge**: 合并后执行（安装依赖）
- **post-checkout**: 切换分支后执行

## 配合工具
- **lint-staged**: 只检查暂存文件
- **commitlint**: 验证commit消息
- **prettier**: 代码格式化
- **eslint**: 代码检查

## 提交消息规范
- **feat**: 新功能
- **fix**: 修复bug
- **docs**: 文档更新
- **style**: 代码格式
- **refactor**: 重构
- **test**: 测试相关
- **chore**: 构建/工具变动

## 工作流程
1. 开发者执行git commit
2. Husky触发pre-commit钩子
3. 运行lint-staged检查代码
4. 通过后允许提交，否则阻止
5. 触发commit-msg验证消息
6. git push触发pre-push测试

## 最佳实践
1. 只检查暂存文件提高速度
2. 合理配置钩子避免过度检查
3. 提供清晰的错误提示
4. 允许跳过钩子（--no-verify）
5. 团队共享配置确保一致性`,
    examples: [
      "// 1. 安装和初始化\n// package.json\n{\n  \"scripts\": {\n    \"prepare\": \"husky install\"\n  },\n  \"devDependencies\": {\n    \"husky\": \"^8.0.0\",\n    \"lint-staged\": \"^15.0.0\",\n    \"@commitlint/cli\": \"^18.0.0\",\n    \"@commitlint/config-conventional\": \"^18.0.0\"\n  },\n  \"lint-staged\": {\n    \"*.{js,jsx,ts,tsx}\": [\n      \"eslint --fix\",\n      \"prettier --write\"\n    ],\n    \"*.{css,scss,less}\": [\n      \"stylelint --fix\",\n      \"prettier --write\"\n    ],\n    \"*.{json,md}\": \"prettier --write\"\n  }\n}\n\n// 安装\n// npm install husky lint-staged --save-dev\n// npx husky install\n// npm pkg set scripts.prepare=\"husky install\"",
      "// 2. 配置Git钩子\n# .husky/pre-commit\n#!/usr/bin/env sh\n. \"$(dirname -- \"$0\")/_/husky.sh\"\n\necho '🔍 Running pre-commit checks...'\n\n# 运行lint-staged\nnpx lint-staged\n\n# 运行类型检查\nnpm run type-check\n\necho '✅ Pre-commit checks passed!'\n\n# .husky/commit-msg\n#!/usr/bin/env sh\n. \"$(dirname -- \"$0\")/_/husky.sh\"\n\necho 'Validating commit message...'\n\n# 使用commitlint验证消息\nnpx --no -- commitlint --edit $1\n\n# .husky/pre-push\n#!/usr/bin/env sh\n. \"$(dirname -- \"$0\")/_/husky.sh\"\n\necho 'Running tests before push...'\n\n# 运行测试\nnpm run test\n\n# 运行构建验证\nnpm run build\n\necho '✅ All checks passed, pushing...'\n\n# 创建钩子命令\n# npx husky add .husky/pre-commit \"npx lint-staged\"\n# npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'",
      "// 3. commitlint配置\n// commitlint.config.js\nmodule.exports = {\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    'type-enum': [\n      2,\n      'always',\n      [\n        'feat',     // 新功能\n        'fix',      // 修复bug\n        'docs',     // 文档\n        'style',    // 格式\n        'refactor', // 重构\n        'perf',     // 性能优化\n        'test',     // 测试\n        'chore',    // 构建/工具\n        'revert'    // 回滚\n      ]\n    ],\n    'subject-case': [0], // 不限制大小写\n    'subject-max-length': [2, 'always', 100]\n  }\n};\n\n// 提交消息示例\n// ✅ 正确格式\n// git commit -m \"feat: 添加用户登录功能\"\n// git commit -m \"fix: 修复页面加载错误\"\n// git commit -m \"docs: 更新README文档\"\n\n// ❌ 错误格式\n// git commit -m \"添加登录功能\"  // 缺少type\n// git commit -m \"feature: 新功能\" // type错误\n\n// 跳过钩子（紧急情况）\n// git commit -m \"fix: 紧急修复\" --no-verify"
    ],
    resources: [
      {"name": "Husky官方文档", "url": "https://typicode.github.io/husky/"},
      {"name": "lint-staged指南", "url": "https://github.com/okonet/lint-staged"},
      {"name": "commitlint规范", "url": "https://commitlint.js.org/"},
      {"name": "Git钩子文档", "url": "https://git-scm.com/docs/githooks"}
    ]
  },

  Koa: {
    title: "Koa Web框架",
    content: `Koa是Express原班人马打造的新一代Node.js Web框架，基于async/await提供更优雅的异步处理。

## 核心特点
- **轻量级**: 核心代码极简，功能通过中间件扩展
- **async/await**: 原生支持异步函数，告别回调地狱
- **洋葱模型**: 优雅的中间件执行流程
- **上下文对象**: ctx封装request和response
- **错误处理**: 统一的错误处理机制
- **无内置中间件**: 按需引入保持灵活

## 与Express对比
- **异步处理**: Koa原生async/await，Express使用回调
- **中间件**: Koa洋葱模型，Express线性流
- **体积**: Koa更轻量，Express功能更丰富
- **路由**: Koa需要koa-router，Express内置
- **社区**: Express更成熟，Koa更现代

## 上下文对象(ctx)
- \`ctx.request\`: Koa请求对象
- \`ctx.response\`: Koa响应对象
- \`ctx.req\`: Node原生请求
- \`ctx.res\`: Node原生响应
- \`ctx.state\`: 推荐的命名空间

## 常用中间件
- **koa-router**: 路由
- **koa-bodyparser**: 请求体解析
- **koa-static**: 静态文件
- **koa-session**: 会话管理
- **koa-jwt**: JWT认证
- **koa-cors**: CORS支持
- **koa-logger**: 日志记录

## 洋葱模型
中间件执行流程：
1. 请求进入，从外到内
2. 遇到next()进入下一个中间件
3. 最内层执行完毕
4. 从内到外返回

## 最佳实践
1. 使用async/await处理异步
2. 合理组织中间件顺序
3. 统一错误处理
4. 使用ctx.state共享状态
5. 路由模块化管理`,
    examples: [
      "// Koa基础应用\nimport Koa from 'koa';\nimport Router from '@koa/router';\nimport bodyParser from 'koa-bodyparser';\n\nconst app = new Koa();\nconst router = new Router();\n\n// 1. 错误处理中间件\napp.use(async (ctx, next) => {\n  try {\n    await next();\n  } catch (err) {\n    ctx.status = err.status || 500;\n    ctx.body = {\n      error: err.message\n    };\n    ctx.app.emit('error', err, ctx);\n  }\n});\n\n// 2. 日志中间件\napp.use(async (ctx, next) => {\n  const start = Date.now();\n  await next();\n  const ms = Date.now() - start;\n  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);\n});\n\n// 3. 解析请求体\napp.use(bodyParser());\n\n// 4. 路由\nrouter.get('/', async (ctx) => {\n  ctx.body = { message: 'Hello Koa!' };\n});\n\nrouter.get('/users/:id', async (ctx) => {\n  const { id } = ctx.params;\n  ctx.body = { id, name: 'User ' + id };\n});\n\nrouter.post('/users', async (ctx) => {\n  const userData = ctx.request.body;\n  ctx.status = 201;\n  ctx.body = { id: 1, ...userData };\n});\n\napp.use(router.routes());\napp.use(router.allowedMethods());\n\napp.listen(3000);\nconsole.log('Koa server running on port 3000');",
      "// Koa洋葱模型演示\nimport Koa from 'koa';\n\nconst app = new Koa();\n\n// 中间件1\napp.use(async (ctx, next) => {\n  console.log('1. 进入中间件1');\n  await next();\n  console.log('6. 离开中间件1');\n});\n\n// 中间件2\napp.use(async (ctx, next) => {\n  console.log('2. 进入中间件2');\n  ctx.state.user = { id: 1 }; // 共享状态\n  await next();\n  console.log('5. 离开中间件2');\n});\n\n// 中间件3\napp.use(async (ctx, next) => {\n  console.log('3. 进入中间件3');\n  console.log('4. 处理请求');\n  ctx.body = {\n    message: 'Hello',\n    user: ctx.state.user\n  };\n  // 不调用next()，这是最后一个中间件\n});\n\napp.listen(3000);\n\n// 请求流程输出：\n// 1. 进入中间件1\n// 2. 进入中间件2\n// 3. 进入中间件3\n// 4. 处理请求\n// 5. 离开中间件2\n// 6. 离开中间件1",
      "// Koa完整API应用\nimport Koa from 'koa';\nimport Router from '@koa/router';\nimport bodyParser from 'koa-bodyparser';\nimport cors from '@koa/cors';\nimport jwt from 'koa-jwt';\n\nconst app = new Koa();\nconst router = new Router({ prefix: '/api' });\n\n// 中间件\napp.use(cors());\napp.use(bodyParser());\n\n// JWT保护（排除登录接口）\napp.use(jwt({ secret: 'secret' }).unless({ path: [/^\\/api\\/login/] }));\n\n// 模拟数据\nconst users = new Map([[1, { id: 1, name: 'Alice', email: 'alice@example.com' }]]);\n\n// 路由\nrouter.post('/login', async (ctx) => {\n  const { username, password } = ctx.request.body;\n  if (username === 'admin' && password === 'secret') {\n    const token = 'mock-jwt-token';\n    ctx.body = { token };\n  } else {\n    ctx.status = 401;\n    ctx.body = { error: 'Invalid credentials' };\n  }\n});\n\nrouter.get('/users', async (ctx) => {\n  ctx.body = Array.from(users.values());\n});\n\nrouter.get('/users/:id', async (ctx) => {\n  const user = users.get(Number(ctx.params.id));\n  if (user) {\n    ctx.body = user;\n  } else {\n    ctx.status = 404;\n    ctx.body = { error: 'User not found' };\n  }\n});\n\nrouter.post('/users', async (ctx) => {\n  const user = ctx.request.body;\n  const id = users.size + 1;\n  users.set(id, { id, ...user });\n  ctx.status = 201;\n  ctx.body = users.get(id);\n});\n\napp.use(router.routes()).use(router.allowedMethods());\n\napp.on('error', (err) => {\n  console.error('Server error:', err);\n});\n\napp.listen(3000);"
    ],
    resources: [
      {"name": "Koa官方文档", "url": "https://koajs.com/"},
      {"name": "Koa中文文档", "url": "https://koa.bootcss.com/"},
      {"name": "Koa中间件列表", "url": "https://github.com/koajs/koa/wiki"},
      {"name": "Koa vs Express", "url": "https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md"}
    ]
  },

  Kubernetes: {
    title: "Kubernetes 容器编排",
    content: `Kubernetes (K8s) 是开源的容器编排平台，用于自动化部署、扩展和管理容器化应用。

## 核心概念
- **Pod**: 最小部署单元，包含一个或多个容器
- **Service**: 提供稳定的网络访问入口
- **Deployment**: 声明式更新和管理Pod
- **ReplicaSet**: 维护Pod副本数量
- **Namespace**: 资源隔离和组织
- **ConfigMap/Secret**: 配置和敏感信息管理

## 架构组件
- **Master节点**: 控制平面，管理集群
  - API Server: 集群入口
  - Scheduler: 调度Pod到节点
  - Controller Manager: 管理控制器
  - etcd: 分布式存储
- **Worker节点**: 运行应用容器
  - Kubelet: 节点代理
  - Container Runtime: 容器运行时
  - Kube-proxy: 网络代理

## 常用资源
- **Deployment**: 无状态应用
- **StatefulSet**: 有状态应用
- **DaemonSet**: 每个节点运行一个Pod
- **Job/CronJob**: 批处理任务
- **Ingress**: HTTP/HTTPS路由

## 服务发现
- ClusterIP: 集群内部访问
- NodePort: 节点端口暴露
- LoadBalancer: 云负载均衡器
- Ingress: L7层路由

## 部署策略
- **滚动更新**: 逐步替换旧版本
- **蓝绿部署**: 两套环境切换
- **金丝雀发布**: 部分流量测试

## 最佳实践
1. 使用Namespace隔离环境
2. 设置资源限制(requests/limits)
3. 配置健康检查(liveness/readiness)
4. 使用ConfigMap管理配置
5. 定期备份etcd数据
6. 实施RBAC权限控制`,
    examples: [
      "# Kubernetes基础资源配置\n# deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\n  labels:\n    app: web\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: web\n        image: nginx:1.21\n        ports:\n        - containerPort: 80\n        resources:\n          requests:\n            memory: \"64Mi\"\n            cpu: \"250m\"\n          limits:\n            memory: \"128Mi\"\n            cpu: \"500m\"\n        livenessProbe:\n          httpGet:\n            path: /health\n            port: 80\n          initialDelaySeconds: 30\n          periodSeconds: 10\n        readinessProbe:\n          httpGet:\n            path: /ready\n            port: 80\n          initialDelaySeconds: 5\n          periodSeconds: 5\n\n---\n# service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-service\nspec:\n  selector:\n    app: web\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 80\n  type: LoadBalancer",
      "# ConfigMap和Secret配置\n# configmap.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  APP_ENV: production\n  API_URL: https://api.example.com\n  config.json: |\n    {\n      \"database\": {\n        \"host\": \"db.example.com\",\n        \"port\": 5432\n      }\n    }\n\n---\n# secret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: app-secret\ntype: Opaque\ndata:\n  # base64编码\n  DB_PASSWORD: cGFzc3dvcmQxMjM=\n  API_KEY: YXBpa2V5MTIzNDU2\n\n---\n# 在Pod中使用\napiVersion: v1\nkind: Pod\nmetadata:\n  name: app-pod\nspec:\n  containers:\n  - name: app\n    image: myapp:1.0\n    env:\n    - name: APP_ENV\n      valueFrom:\n        configMapKeyRef:\n          name: app-config\n          key: APP_ENV\n    - name: DB_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          name: app-secret\n          key: DB_PASSWORD\n    volumeMounts:\n    - name: config\n      mountPath: /etc/config\n  volumes:\n  - name: config\n    configMap:\n      name: app-config",
      "# Ingress路由配置\n# ingress.yaml\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\n    cert-manager.io/cluster-issuer: letsencrypt\nspec:\n  tls:\n  - hosts:\n    - example.com\n    secretName: example-tls\n  rules:\n  - host: example.com\n    http:\n      paths:\n      - path: /api\n        pathType: Prefix\n        backend:\n          service:\n            name: api-service\n            port:\n              number: 3000\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: web-service\n            port:\n              number: 80\n\n# 常用kubectl命令\n# kubectl apply -f deployment.yaml\n# kubectl get pods\n# kubectl logs pod-name\n# kubectl exec -it pod-name -- /bin/bash\n# kubectl scale deployment web-app --replicas=5\n# kubectl rollout status deployment/web-app\n# kubectl rollout undo deployment/web-app"
    ],
    resources: [
      {"name": "Kubernetes官方文档", "url": "https://kubernetes.io/docs/"},
      {"name": "Kubernetes中文文档", "url": "https://kubernetes.io/zh-cn/docs/"},
      {"name": "kubectl速查表", "url": "https://kubernetes.io/docs/reference/kubectl/cheatsheet/"},
      {"name": "K8s最佳实践", "url": "https://kubernetes.io/docs/concepts/configuration/overview/"}
    ]
  },

  LintStaged: {
    title: "lint-staged 增量检查工具",
    content: `lint-staged 是一个在Git暂存文件上运行linter的工具，只检查即将提交的代码，提高效率。

## 核心功能
- **增量检查**: 只检查暂存(staged)的文件
- **性能优化**: 避免全量扫描，提升速度
- **自动修复**: 支持自动格式化和修复
- **多工具支持**: ESLint、Prettier、Stylelint等
- **灵活配置**: 支持glob模式匹配文件

## 工作原理
1. Git add暂存文件
2. 触发pre-commit钩子
3. lint-staged获取暂存文件列表
4. 对匹配的文件运行配置的命令
5. 命令成功则提交，失败则阻止

## 配置方式
- package.json中的lint-staged字段
- .lintstagedrc文件（JSON/YAML）
- .lintstagedrc.js文件（动态配置）
- lint-staged.config.js文件

## 常用命令
- **ESLint**: 检查和修复JS/TS
- **Prettier**: 格式化代码
- **Stylelint**: 检查CSS/SCSS
- **tsc**: TypeScript类型检查

## 配合工具
- **Husky**: 管理Git钩子
- **commitlint**: 验证commit消息
- **prettier**: 代码格式化
- **eslint**: 代码质量检查

## 最佳实践
1. 只检查暂存文件提高效率
2. 使用自动修复减少手动操作
3. 合理配置避免过度检查
4. 提供清晰的错误信息
5. 允许跳过检查应对紧急情况`,
    examples: [
      "// package.json配置\n{\n  \"scripts\": {\n    \"prepare\": \"husky install\"\n  },\n  \"lint-staged\": {\n    // JavaScript/TypeScript文件\n    \"*.{js,jsx,ts,tsx}\": [\n      \"eslint --fix\",\n      \"prettier --write\"\n    ],\n    // CSS/SCSS文件\n    \"*.{css,scss,less}\": [\n      \"stylelint --fix\",\n      \"prettier --write\"\n    ],\n    // JSON/Markdown文件\n    \"*.{json,md}\": \"prettier --write\",\n    // 图片优化\n    \"*.{png,jpg,jpeg,gif,svg}\": \"imagemin-lint-staged\"\n  },\n  \"devDependencies\": {\n    \"husky\": \"^8.0.0\",\n    \"lint-staged\": \"^15.0.0\",\n    \"eslint\": \"^8.0.0\",\n    \"prettier\": \"^3.0.0\",\n    \"stylelint\": \"^16.0.0\"\n  }\n}\n\n// 安装和配置\n// npm install --save-dev lint-staged husky\n// npx husky install\n// npx husky add .husky/pre-commit \"npx lint-staged\"",
      "// .lintstagedrc.js 高级配置\nmodule.exports = {\n  // 并发执行（默认）\n  '*.{js,jsx,ts,tsx}': [\n    'eslint --fix',\n    'prettier --write',\n    // 自定义函数\n    (filenames) => `jest --bail --findRelatedTests ${filenames.join(' ')}`\n  ],\n  \n  // 只运行类型检查，不修复\n  '*.ts?(x)': () => 'tsc --noEmit',\n  \n  // 条件执行\n  '*.scss': (filenames) => {\n    const commands = ['stylelint --fix'];\n    // 只在生产环境检查未使用的样式\n    if (process.env.NODE_ENV === 'production') {\n      commands.push('purgecss --css');\n    }\n    return commands;\n  },\n  \n  // 忽略特定文件\n  '*.js': [\n    'eslint --fix',\n    // 排除测试文件的某些规则\n    (files) => {\n      const testFiles = files.filter(f => f.includes('.test.'));\n      const srcFiles = files.filter(f => !f.includes('.test.'));\n      \n      const commands = [];\n      if (srcFiles.length) {\n        commands.push(`eslint ${srcFiles.join(' ')}`);\n      }\n      if (testFiles.length) {\n        commands.push(`eslint --rule \"no-console: off\" ${testFiles.join(' ')}`);\n      }\n      return commands;\n    }\n  ]\n};\n\n// 并发和顺序控制\nmodule.exports = {\n  // 顺序执行（使用数组）\n  '*.js': ['eslint --fix', 'prettier --write'],\n  \n  // 并发执行（使用对象）\n  '**/*.js': {\n    eslint: 'eslint --fix',\n    prettier: 'prettier --write'\n  }\n};",
      "// 实战配置示例\n// lint-staged.config.js\nconst path = require('path');\n\nconst buildEslintCommand = (filenames) =>\n  `next lint --fix --file ${filenames\n    .map((f) => path.relative(process.cwd(), f))\n    .join(' --file ')}`;\n\nmodule.exports = {\n  // React/Next.js项目\n  '*.{js,jsx,ts,tsx}': [\n    buildEslintCommand,\n    'prettier --write'\n  ],\n  \n  // Vue项目\n  '*.vue': [\n    'eslint --fix',\n    'stylelint --fix',\n    'prettier --write'\n  ],\n  \n  // 样式文件\n  '*.{css,scss,less}': [\n    'stylelint --fix',\n    'prettier --write'\n  ],\n  \n  // 文档和配置\n  '*.{json,yaml,yml,md}': 'prettier --write',\n  \n  // 包管理文件变化时重新安装\n  'package.json': () => 'npm install',\n  \n  // 测试相关文件变化时运行测试\n  '*.test.{js,ts,tsx}': () => 'npm run test:unit',\n  \n  // 类型定义变化时运行类型检查\n  '*.d.ts': () => 'tsc --noEmit'\n};\n\n// .husky/pre-commit\n#!/usr/bin/env sh\n. \"$(dirname -- \"$0\")/_/husky.sh\"\n\necho '🔍 Running lint-staged...'\nnpx lint-staged\n\n// 跳过检查（紧急情况）\n// git commit -m \"fix: urgent\" --no-verify"
    ],
    resources: [
      {"name": "lint-staged官方文档", "url": "https://github.com/okonet/lint-staged"},
      {"name": "配置示例", "url": "https://github.com/okonet/lint-staged#configuration"},
      {"name": "与Husky集成", "url": "https://typicode.github.io/husky/"},
      {"name": "最佳实践", "url": "https://www.robinwieruch.de/git-hook-lint-staged/"}
    ]
  },

  LocalStorage: {
    title: "LocalStorage 本地存储",
    content: `LocalStorage是HTML5提供的Web Storage API，用于在浏览器中持久化存储数据。

## 核心特性
- **持久化**: 数据永久保存，除非手动清除
- **容量大**: 通常5-10MB（比Cookie大）
- **同步API**: 简单的键值对存储
- **同源策略**: 只能访问同源数据
- **纯文本**: 只能存储字符串

## 基本操作
- \`setItem(key, value)\`: 存储数据
- \`getItem(key)\`: 读取数据
- \`removeItem(key)\`: 删除单条
- \`clear()\`: 清空所有
- \`key(index)\`: 获取第n个键名
- \`length\`: 数据条数

## 与其他存储对比
- **Cookie**: 4KB，每次请求发送，可设置过期
- **LocalStorage**: 5-10MB，不发送，永久保存
- **SessionStorage**: 5-10MB，标签页关闭清除
- **IndexedDB**: 更大容量，支持复杂数据

## 数据类型
- 只能存储字符串
- 存储对象需JSON.stringify()
- 读取对象需JSON.parse()
- 注意循环引用问题

## 应用场景
- 用户偏好设置
- 表单数据暂存
- 购物车数据
- 主题配置
- 访问令牌（注意安全）
- 离线数据缓存

## 安全注意
- 不要存储敏感信息（密码、信用卡）
- XSS攻击可读取LocalStorage
- 考虑加密重要数据
- 定期清理过期数据

## 最佳实践
1. 统一封装存储操作
2. 处理JSON序列化错误
3. 检查浏览器支持
4. 监听存储事件同步状态
5. 设置过期时间机制
6. 控制存储数据大小`,
    examples: [
      "// LocalStorage基础操作\n\n// 1. 存储简单数据\nlocalStorage.setItem('username', 'Alice');\nlocalStorage.setItem('theme', 'dark');\n\n// 2. 读取数据\nconst username = localStorage.getItem('username');\nconsole.log(username); // 'Alice'\n\n// 3. 存储对象（需要序列化）\nconst user = {\n  id: 1,\n  name: 'Bob',\n  email: 'bob@example.com'\n};\nlocalStorage.setItem('user', JSON.stringify(user));\n\n// 4. 读取对象（需要反序列化）\nconst storedUser = JSON.parse(localStorage.getItem('user') || '{}');\nconsole.log(storedUser.name); // 'Bob'\n\n// 5. 删除数据\nlocalStorage.removeItem('username');\n\n// 6. 清空所有\nlocalStorage.clear();\n\n// 7. 遍历所有数据\nfor (let i = 0; i < localStorage.length; i++) {\n  const key = localStorage.key(i);\n  const value = localStorage.getItem(key!);\n  console.log(`${key}: ${value}`);\n}\n\n// 8. 检查是否存在\nif (localStorage.getItem('theme')) {\n  console.log('Theme is set');\n}",
      "// LocalStorage工具类封装\nclass LocalStorageUtil {\n  // 设置数据（支持过期时间）\n  static set(key: string, value: any, expireMinutes?: number) {\n    const data = {\n      value,\n      expire: expireMinutes \n        ? Date.now() + expireMinutes * 60 * 1000 \n        : null\n    };\n    \n    try {\n      localStorage.setItem(key, JSON.stringify(data));\n    } catch (error) {\n      console.error('LocalStorage set error:', error);\n      // 存储满了，清理旧数据\n      if (error instanceof DOMException && error.name === 'QuotaExceededError') {\n        this.clearExpired();\n      }\n    }\n  }\n  \n  // 获取数据（自动检查过期）\n  static get<T = any>(key: string): T | null {\n    try {\n      const item = localStorage.getItem(key);\n      if (!item) return null;\n      \n      const data = JSON.parse(item);\n      \n      // 检查是否过期\n      if (data.expire && Date.now() > data.expire) {\n        this.remove(key);\n        return null;\n      }\n      \n      return data.value;\n    } catch (error) {\n      console.error('LocalStorage get error:', error);\n      return null;\n    }\n  }\n  \n  // 删除数据\n  static remove(key: string) {\n    localStorage.removeItem(key);\n  }\n  \n  // 清空所有\n  static clear() {\n    localStorage.clear();\n  }\n  \n  // 清理过期数据\n  static clearExpired() {\n    for (let i = localStorage.length - 1; i >= 0; i--) {\n      const key = localStorage.key(i);\n      if (key) this.get(key); // 触发过期检查\n    }\n  }\n  \n  // 获取存储大小（估算）\n  static getSize(): string {\n    let size = 0;\n    for (let i = 0; i < localStorage.length; i++) {\n      const key = localStorage.key(i)!;\n      const value = localStorage.getItem(key)!;\n      size += key.length + value.length;\n    }\n    return `${(size / 1024).toFixed(2)} KB`;\n  }\n}\n\n// 使用示例\nLocalStorageUtil.set('user', { name: 'Alice' }, 30); // 30分钟过期\nconst user = LocalStorageUtil.get<{ name: string }>('user');\nconsole.log(LocalStorageUtil.getSize());",
      "// 高级应用示例\n\n// 1. 监听storage事件（跨标签页同步）\nwindow.addEventListener('storage', (e) => {\n  if (e.key === 'theme') {\n    console.log('Theme changed:', e.newValue);\n    // 更新UI\n    document.body.className = e.newValue || 'light';\n  }\n});\n\n// 2. React Hook封装\nimport { useState, useEffect } from 'react';\n\nfunction useLocalStorage<T>(key: string, initialValue: T) {\n  const [value, setValue] = useState<T>(() => {\n    const item = localStorage.getItem(key);\n    return item ? JSON.parse(item) : initialValue;\n  });\n  \n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  \n  // 监听其他标签页的变化\n  useEffect(() => {\n    const handleStorage = (e: StorageEvent) => {\n      if (e.key === key && e.newValue) {\n        setValue(JSON.parse(e.newValue));\n      }\n    };\n    window.addEventListener('storage', handleStorage);\n    return () => window.removeEventListener('storage', handleStorage);\n  }, [key]);\n  \n  return [value, setValue] as const;\n}\n\n// 使用\nfunction App() {\n  const [theme, setTheme] = useLocalStorage('theme', 'light');\n  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>\n    {theme}\n  </button>;\n}\n\n// 3. 数据加密存储\nimport CryptoJS from 'crypto-js';\n\nclass SecureStorage {\n  private static SECRET_KEY = 'your-secret-key';\n  \n  static setSecure(key: string, value: any) {\n    const encrypted = CryptoJS.AES.encrypt(\n      JSON.stringify(value),\n      this.SECRET_KEY\n    ).toString();\n    localStorage.setItem(key, encrypted);\n  }\n  \n  static getSecure<T>(key: string): T | null {\n    const encrypted = localStorage.getItem(key);\n    if (!encrypted) return null;\n    \n    try {\n      const decrypted = CryptoJS.AES.decrypt(\n        encrypted,\n        this.SECRET_KEY\n      ).toString(CryptoJS.enc.Utf8);\n      return JSON.parse(decrypted);\n    } catch {\n      return null;\n    }\n  }\n}"
    ],
    resources: [
      {"name": "LocalStorage MDN文档", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage"},
      {"name": "Web Storage API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API"},
      {"name": "存储最佳实践", "url": "https://web.dev/storage-for-the-web/"},
      {"name": "浏览器存储对比", "url": "https://web.dev/indexeddb/"}
    ]
  },

  Lottie: {
    title: "Lottie 动画库",
    content: `Lottie是Airbnb开源的动画库，可将Adobe After Effects动画导出为JSON格式，在Web、iOS、Android平台无损播放。

## 核心特性
- **矢量动画**: 基于JSON，支持任意缩放不失真
- **跨平台**: Web、iOS、Android、React Native统一格式
- **文件小**: 相比GIF/视频体积更小
- **可交互**: 支持播放控制、状态切换、事件监听
- **性能优秀**: 使用Canvas/SVG渲染，流畅度高

## 工作流程
1. 设计师在AE中创建动画
2. 使用Bodymovin插件导出JSON
3. 开发者使用lottie-web加载播放
4. 可通过代码控制播放状态

## 渲染模式
- **SVG**: 默认模式，支持复杂效果
- **Canvas**: 性能更好，适合大量动画
- **HTML**: 特殊场景使用

## 常用方法
- \`loadAnimation()\`: 加载动画
- \`play()\`: 播放
- \`pause()\`: 暂停
- \`stop()\`: 停止
- \`setSpeed()\`: 设置速度
- \`goToAndStop()\`: 跳转到指定帧
- \`setDirection()\`: 设置方向

## 应用场景
- 加载动画/骨架屏
- 成功/失败状态反馈
- 引导页动画
- 图标动效
- 品牌展示动画
- 数据可视化动画

## 性能优化
1. 控制动画复杂度
2. 使用Canvas模式处理大量元素
3. 按需加载动画资源
4. 及时销毁不使用的实例
5. 预加载常用动画`,
    examples: [
      "// Lottie基础使用\nimport lottie from 'lottie-web';\n\n// 1. 加载并播放动画\nconst animation = lottie.loadAnimation({\n  container: document.getElementById('lottie-container')!, // DOM元素\n  renderer: 'svg', // 渲染模式: svg/canvas/html\n  loop: true, // 循环播放\n  autoplay: true, // 自动播放\n  path: '/animations/data.json' // JSON文件路径\n});\n\n// 2. 或者直接传入JSON数据\nconst animationData = {\n  v: '5.7.4',\n  fr: 30,\n  ip: 0,\n  op: 60,\n  w: 500,\n  h: 500,\n  // ... 动画数据\n};\n\nconst anim = lottie.loadAnimation({\n  container: document.getElementById('container')!,\n  renderer: 'svg',\n  loop: false,\n  autoplay: false,\n  animationData: animationData\n});\n\n// 3. 控制播放\nanim.play(); // 播放\nanim.pause(); // 暂停\nanim.stop(); // 停止\nanim.setSpeed(0.5); // 0.5倍速\nanim.setDirection(-1); // 反向播放\nanim.goToAndStop(30, true); // 跳到第30帧并停止\n\n// 4. 事件监听\nanim.addEventListener('complete', () => {\n  console.log('动画播放完成');\n});\n\nanim.addEventListener('loopComplete', () => {\n  console.log('单次循环完成');\n});\n\n// 5. 销毁动画\nanim.destroy();",
      "// React中使用Lottie\nimport React, { useEffect, useRef } from 'react';\nimport lottie, { AnimationItem } from 'lottie-web';\n\ninterface LottieAnimationProps {\n  animationData: any;\n  loop?: boolean;\n  autoplay?: boolean;\n  onComplete?: () => void;\n}\n\nconst LottieAnimation: React.FC<LottieAnimationProps> = ({\n  animationData,\n  loop = true,\n  autoplay = true,\n  onComplete\n}) => {\n  const containerRef = useRef<HTMLDivElement>(null);\n  const animationRef = useRef<AnimationItem | null>(null);\n\n  useEffect(() => {\n    if (!containerRef.current) return;\n\n    // 加载动画\n    animationRef.current = lottie.loadAnimation({\n      container: containerRef.current,\n      renderer: 'svg',\n      loop,\n      autoplay,\n      animationData\n    });\n\n    // 监听完成事件\n    if (onComplete) {\n      animationRef.current.addEventListener('complete', onComplete);\n    }\n\n    // 清理\n    return () => {\n      animationRef.current?.destroy();\n    };\n  }, [animationData, loop, autoplay, onComplete]);\n\n  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;\n};\n\n// 使用示例\nfunction LoadingScreen() {\n  const [loading, setLoading] = React.useState(true);\n\n  return (\n    <div>\n      {loading && (\n        <LottieAnimation\n          animationData={require('./loading.json')}\n          loop={true}\n          autoplay={true}\n        />\n      )}\n    </div>\n  );\n}",
      "// Vue中使用Lottie\n<template>\n  <div>\n    <div ref=\"lottieContainer\" class=\"lottie-animation\"></div>\n    <div class=\"controls\">\n      <button @click=\"play\">播放</button>\n      <button @click=\"pause\">暂停</button>\n      <button @click=\"stop\">停止</button>\n      <input \n        type=\"range\" \n        min=\"0\" \n        max=\"100\" \n        v-model=\"progress\"\n        @input=\"seekTo\"\n      />\n    </div>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref, onMounted, onUnmounted } from 'vue';\nimport lottie, { AnimationItem } from 'lottie-web';\n\nconst lottieContainer = ref<HTMLElement>();\nlet animation: AnimationItem | null = null;\nconst progress = ref(0);\n\nonMounted(() => {\n  if (!lottieContainer.value) return;\n  \n  animation = lottie.loadAnimation({\n    container: lottieContainer.value,\n    renderer: 'svg',\n    loop: true,\n    autoplay: true,\n    path: '/animations/success.json'\n  });\n  \n  // 监听进度\n  animation.addEventListener('enterFrame', () => {\n    if (animation) {\n      progress.value = (animation.currentFrame / animation.totalFrames) * 100;\n    }\n  });\n});\n\nonUnmounted(() => {\n  animation?.destroy();\n});\n\nconst play = () => animation?.play();\nconst pause = () => animation?.pause();\nconst stop = () => animation?.stop();\nconst seekTo = () => {\n  if (animation) {\n    const frame = (progress.value / 100) * animation.totalFrames;\n    animation.goToAndStop(frame, true);\n  }\n};\n</script>\n\n<style scoped>\n.lottie-animation {\n  width: 300px;\n  height: 300px;\n}\n</style>"
    ],
    resources: [
      {"name": "Lottie官方网站", "url": "https://lottiefiles.com/"},
      {"name": "lottie-web GitHub", "url": "https://github.com/airbnb/lottie-web"},
      {"name": "Bodymovin插件", "url": "https://aescripts.com/bodymovin/"},
      {"name": "LottieFiles动画资源", "url": "https://lottiefiles.com/featured"}
    ]
  },

  MicroFE: {
    title: "微前端架构",
    content: `微前端(Micro Frontend)是将微服务理念扩展到前端，将大型单体应用拆分为多个可独立开发、部署和运行的小型应用。

## 核心概念
- **技术栈无关**: 不同子应用可使用不同框架
- **独立开发部署**: 各团队独立迭代
- **运行时集成**: 主应用动态加载子应用
- **隔离性**: 样式、JS、状态相互隔离
- **通信机制**: 应用间数据共享

## 实现方案
- **iframe**: 天然隔离，但通信困难
- **Web Components**: 标准化组件封装
- **Module Federation**: Webpack 5原生支持
- **Single-SPA**: 微前端框架
- **qiankun**: 基于Single-SPA的增强方案
- **Micro-App**: 类Web Component方案

## 架构模式
- **基座模式**: 主应用加载子应用
- **自组织模式**: 各应用独立，共享导航
- **按需加载**: 路由驱动加载
- **预加载**: 提前加载提升性能

## 技术挑战
- **样式隔离**: Shadow DOM、CSS Modules
- **JS沙箱**: Proxy代理全局对象
- **路由管理**: 主应用路由与子应用路由协调
- **状态共享**: 全局状态管理
- **性能优化**: 资源加载、缓存策略

## 应用场景
- 大型企业后台系统
- 多团队协作项目
- 渐进式重构遗留系统
- 技术栈迁移过渡

## 优势与挑战
优势:
- 技术栈灵活
- 团队独立性强
- 增量升级容易
- 代码复用度高

挑战:
- 复杂度增加
- 性能开销
- 调试困难
- 公共依赖管理`,
    examples: [
      "// qiankun微前端示例\n// 主应用配置\nimport { registerMicroApps, start } from 'qiankun';\n\n// 注册子应用\nregisterMicroApps([\n  {\n    name: 'app-vue',\n    entry: '//localhost:8081',\n    container: '#subapp-container',\n    activeRule: '/vue',\n    props: {\n      data: { authToken: 'xxx' }\n    }\n  },\n  {\n    name: 'app-react',\n    entry: '//localhost:8082',\n    container: '#subapp-container',\n    activeRule: '/react'\n  }\n]);\n\n// 启动qiankun\nstart({\n  prefetch: true, // 预加载\n  sandbox: {\n    strictStyleIsolation: true, // 严格样式隔离\n    experimentalStyleIsolation: true\n  }\n});\n\n// 子应用(Vue)配置\nlet instance: any = null;\n\nexport async function bootstrap() {\n  console.log('app bootstraped');\n}\n\nexport async function mount(props: any) {\n  instance = createApp(App);\n  instance.mount(props.container?.querySelector('#app') || '#app');\n}\n\nexport async function unmount() {\n  instance?.unmount();\n}",
      "// Module Federation配置\n// 主应用 webpack.config.js\nconst { ModuleFederationPlugin } = require('webpack').container;\n\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'host',\n      remotes: {\n        app1: 'app1@http://localhost:3001/remoteEntry.js',\n        app2: 'app2@http://localhost:3002/remoteEntry.js'\n      },\n      shared: {\n        react: { singleton: true, requiredVersion: '^18.0.0' },\n        'react-dom': { singleton: true, requiredVersion: '^18.0.0' }\n      }\n    })\n  ]\n};\n\n// 子应用 webpack.config.js\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: 'app1',\n      filename: 'remoteEntry.js',\n      exposes: {\n        './Button': './src/components/Button',\n        './App': './src/App'\n      },\n      shared: {\n        react: { singleton: true },\n        'react-dom': { singleton: true }\n      }\n    })\n  ]\n};\n\n// 主应用使用远程组件\nimport React, { lazy, Suspense } from 'react';\n\nconst RemoteButton = lazy(() => import('app1/Button'));\nconst RemoteApp = lazy(() => import('app2/App'));\n\nfunction App() {\n  return (\n    <Suspense fallback=\"Loading...\">\n      <RemoteButton />\n      <RemoteApp />\n    </Suspense>\n  );\n}",
      "// 自定义微前端实现\nclass MicroApp {\n  private apps: Map<string, any> = new Map();\n  \n  // 注册应用\n  register(name: string, config: {\n    entry: string;\n    container: string;\n    activeRule: string;\n  }) {\n    this.apps.set(name, config);\n  }\n  \n  // 加载应用\n  async loadApp(name: string) {\n    const config = this.apps.get(name);\n    if (!config) return;\n    \n    // 获取HTML\n    const html = await fetch(config.entry).then(res => res.text());\n    \n    // 解析HTML，提取JS和CSS\n    const { scripts, styles } = this.parseHTML(html);\n    \n    // 创建沙箱\n    const sandbox = this.createSandbox();\n    \n    // 加载样式\n    styles.forEach(style => {\n      const link = document.createElement('link');\n      link.rel = 'stylesheet';\n      link.href = style;\n      document.head.appendChild(link);\n    });\n    \n    // 加载脚本\n    for (const script of scripts) {\n      await this.loadScript(script, sandbox);\n    }\n  }\n  \n  // 创建JS沙箱\n  private createSandbox() {\n    const fakeWindow = Object.create(null);\n    return new Proxy(fakeWindow, {\n      get: (target, prop) => {\n        return prop in target ? target[prop] : window[prop];\n      },\n      set: (target, prop, value) => {\n        target[prop] = value;\n        return true;\n      }\n    });\n  }\n  \n  private parseHTML(html: string) {\n    const scripts: string[] = [];\n    const styles: string[] = [];\n    // 解析逻辑...\n    return { scripts, styles };\n  }\n  \n  private async loadScript(src: string, sandbox: any) {\n    const code = await fetch(src).then(res => res.text());\n    new Function('window', code).call(sandbox, sandbox);\n  }\n}\n\n// 使用\nconst microApp = new MicroApp();\nmicroApp.register('app1', {\n  entry: 'http://localhost:8081',\n  container: '#app',\n  activeRule: '/app1'\n});\nmicroApp.loadApp('app1');"
    ],
    resources: [
      {"name": "qiankun官方文档", "url": "https://qiankun.umijs.org/zh"},
      {"name": "Module Federation", "url": "https://webpack.js.org/concepts/module-federation/"},
      {"name": "Single-SPA", "url": "https://single-spa.js.org/"},
      {"name": "微前端实践", "url": "https://micro-frontends.org/"}
    ]
  },

  MobX: {
    title: "MobX 状态管理",
    content: `MobX是一个简单、可扩展的状态管理库,通过响应式编程实现状态与UI的自动同步。

## 核心概念
- **Observable State**: 可观察的状态
- **Computed Values**: 派生值(自动计算)
- **Reactions**: 副作用(自动执行)
- **Actions**: 修改状态的方法

## 核心原则
- **State**: 驱动应用的数据
- **Derivations**: 任何源自state且不再需要交互的东西
  - Computed values: 纯函数派生
  - Reactions: 副作用(渲染、网络请求)
- **Actions**: 修改state的唯一方式

## 装饰器语法
- \`@observable\`: 标记可观察属性
- \`@computed\`: 标记计算属性
- \`@action\`: 标记修改动作
- \`@observer\`: 标记React组件

## 响应式原理
1. 读取observable时收集依赖
2. 修改observable时通知观察者
3. computed和reaction自动重新执行
4. React组件自动重新渲染

## 与Redux对比
MobX优势:
- 代码量少，学习曲线平缓
- 自动追踪依赖
- 支持面向对象编程
- 性能更好(细粒度更新)

Redux优势:
- 严格的单向数据流
- 时间旅行调试
- 中间件生态丰富
- 更适合大型团队

## 最佳实践
1. 使用严格模式(enforceActions)
2. 状态扁平化
3. 合理使用computed减少计算
4. action中批量更新
5. 避免在render中创建observable`,
    examples: [
      "// MobX基础使用\nimport { makeObservable, observable, computed, action } from 'mobx';\n\n// 1. 定义Store\nclass TodoStore {\n  todos: Todo[] = [];\n  \n  constructor() {\n    makeObservable(this, {\n      todos: observable,\n      completedCount: computed,\n      addTodo: action,\n      toggleTodo: action\n    });\n  }\n  \n  // 计算属性\n  get completedCount() {\n    return this.todos.filter(todo => todo.completed).length;\n  }\n  \n  // 修改状态的方法\n  addTodo(text: string) {\n    this.todos.push({\n      id: Date.now(),\n      text,\n      completed: false\n    });\n  }\n  \n  toggleTodo(id: number) {\n    const todo = this.todos.find(t => t.id === id);\n    if (todo) todo.completed = !todo.completed;\n  }\n}\n\nconst todoStore = new TodoStore();\n\n// 2. 自动执行副作用\nimport { autorun } from 'mobx';\n\nautorun(() => {\n  console.log(`完成: ${todoStore.completedCount}/${todoStore.todos.length}`);\n});\n\ntodoStore.addTodo('学习MobX'); // 输出: 完成: 0/1\ntodoStore.toggleTodo(todoStore.todos[0].id); // 输出: 完成: 1/1",
      "// React中使用MobX\nimport { observer } from 'mobx-react-lite';\nimport { makeAutoObservable } from 'mobx';\nimport React from 'react';\n\n// Store定义\nclass CounterStore {\n  count = 0;\n  \n  constructor() {\n    makeAutoObservable(this); // 自动标记所有属性\n  }\n  \n  get doubleCount() {\n    return this.count * 2;\n  }\n  \n  increment() {\n    this.count++;\n  }\n  \n  decrement() {\n    this.count--;\n  }\n}\n\nconst counterStore = new CounterStore();\n\n// React组件(使用observer包装)\nconst Counter = observer(() => {\n  return (\n    <div>\n      <h1>Count: {counterStore.count}</h1>\n      <h2>Double: {counterStore.doubleCount}</h2>\n      <button onClick={() => counterStore.increment()}>+1</button>\n      <button onClick={() => counterStore.decrement()}>-1</button>\n    </div>\n  );\n});\n\n// Context方式共享Store\nconst StoreContext = React.createContext<CounterStore | null>(null);\n\nfunction App() {\n  const store = React.useMemo(() => new CounterStore(), []);\n  return (\n    <StoreContext.Provider value={store}>\n      <Counter />\n    </StoreContext.Provider>\n  );\n}\n\nfunction useStore() {\n  const store = React.useContext(StoreContext);\n  if (!store) throw new Error('Store not found');\n  return store;\n}",
      "// MobX高级特性\nimport { \n  observable, \n  action, \n  runInAction, \n  reaction,\n  when,\n  configure\n} from 'mobx';\n\n// 1. 严格模式配置\nconfigure({\n  enforceActions: 'always', // 强制使用action修改状态\n  computedRequiresReaction: true, // computed必须被观察才计算\n  observableRequiresReaction: true\n});\n\n// 2. 异步Action\nclass UserStore {\n  users = [];\n  loading = false;\n  \n  constructor() {\n    makeAutoObservable(this);\n  }\n  \n  async fetchUsers() {\n    this.loading = true;\n    try {\n      const response = await fetch('/api/users');\n      const data = await response.json();\n      // 使用runInAction包装异步后的状态修改\n      runInAction(() => {\n        this.users = data;\n        this.loading = false;\n      });\n    } catch (error) {\n      runInAction(() => {\n        this.loading = false;\n      });\n    }\n  }\n}\n\n// 3. reaction - 监听变化\nconst userStore = new UserStore();\n\nreaction(\n  () => userStore.users.length, // 追踪的数据\n  (length) => { // 变化时执行\n    console.log(`用户数量变为: ${length}`);\n  }\n);\n\n// 4. when - 条件满足时执行一次\nwhen(\n  () => userStore.users.length > 0,\n  () => console.log('已加载用户数据')\n);\n\n// 5. 批量更新\nimport { transaction } from 'mobx';\n\ntransaction(() => {\n  userStore.users.push({ id: 1, name: 'Alice' });\n  userStore.users.push({ id: 2, name: 'Bob' });\n  // 只触发一次reaction\n});"
    ],
    resources: [
      {"name": "MobX官方文档", "url": "https://mobx.js.org/"},
      {"name": "MobX中文文档", "url": "https://zh.mobx.js.org/"},
      {"name": "mobx-react-lite", "url": "https://github.com/mobxjs/mobx-react-lite"},
      {"name": "MobX最佳实践", "url": "https://mobx.js.org/best-practices.html"}
    ]
  },

  NestJS: {
    title: "NestJS 企业级框架",
    content: `NestJS是一个用于构建高效、可扩展的Node.js服务端应用的框架，基于TypeScript构建，深受Angular启发。

## 核心特性
- **TypeScript原生支持**: 完整的类型系统
- **模块化架构**: Controllers、Providers、Modules
- **依赖注入**: 强大的IoC容器
- **装饰器语法**: 声明式编程风格
- **中间件支持**: Express/Fastify兼容
- **微服务支持**: 多种传输层(TCP、Redis、gRPC)

## 核心概念
- **Controllers**: 处理HTTP请求和响应
- **Providers**: 可注入的服务类
- **Modules**: 组织应用结构
- **Middleware**: 请求处理管道
- **Guards**: 权限守卫
- **Interceptors**: 拦截器
- **Pipes**: 数据转换和验证
- **Exception Filters**: 异常过滤器

## 架构优势
- **可测试性**: 依赖注入便于单元测试
- **可维护性**: 清晰的代码组织
- **可扩展性**: 模块化设计易于扩展
- **企业级**: 适合大型项目开发

## 常用模块
- **@nestjs/platform-express**: Express适配器
- **@nestjs/typeorm**: ORM集成
- **@nestjs/swagger**: API文档生成
- **@nestjs/jwt**: JWT认证
- **@nestjs/graphql**: GraphQL支持
- **@nestjs/websockets**: WebSocket支持

## 应用场景
- RESTful API服务
- GraphQL服务
- 微服务架构
- 实时通信应用
- 企业级后台系统

## 最佳实践
1. 合理划分模块边界
2. 使用DTO进行数据验证
3. 统一异常处理
4. 配置管理使用ConfigModule
5. 日志记录和监控
6. 编写单元测试和E2E测试`,
    examples: [
      "// NestJS基础结构\n// main.ts\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.enableCors();\n  await app.listen(3000);\n}\nbootstrap();\n\n// app.module.ts\nimport { Module } from '@nestjs/common';\nimport { UsersModule } from './users/users.module';\n\n@Module({\n  imports: [UsersModule],\n})\nexport class AppModule {}\n\n// users.controller.ts\nimport { Controller, Get, Post, Body, Param } from '@nestjs/common';\nimport { UsersService } from './users.service';\nimport { CreateUserDto } from './dto/create-user.dto';\n\n@Controller('users')\nexport class UsersController {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Get()\n  findAll() {\n    return this.usersService.findAll();\n  }\n\n  @Get(':id')\n  findOne(@Param('id') id: string) {\n    return this.usersService.findOne(+id);\n  }\n\n  @Post()\n  create(@Body() createUserDto: CreateUserDto) {\n    return this.usersService.create(createUserDto);\n  }\n}",
      "// NestJS高级特性\n// users.service.ts\nimport { Injectable, NotFoundException } from '@nestjs/common';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { User } from './entities/user.entity';\n\n@Injectable()\nexport class UsersService {\n  constructor(\n    @InjectRepository(User)\n    private usersRepository: Repository<User>,\n  ) {}\n\n  async findAll(): Promise<User[]> {\n    return this.usersRepository.find();\n  }\n\n  async findOne(id: number): Promise<User> {\n    const user = await this.usersRepository.findOne({ where: { id } });\n    if (!user) {\n      throw new NotFoundException(`User #${id} not found`);\n    }\n    return user;\n  }\n\n  async create(createUserDto: CreateUserDto): Promise<User> {\n    const user = this.usersRepository.create(createUserDto);\n    return this.usersRepository.save(user);\n  }\n}\n\n// auth.guard.ts - JWT守卫\nimport { Injectable, ExecutionContext } from '@nestjs/common';\nimport { AuthGuard } from '@nestjs/passport';\n\n@Injectable()\nexport class JwtAuthGuard extends AuthGuard('jwt') {\n  canActivate(context: ExecutionContext) {\n    return super.canActivate(context);\n  }\n}\n\n// 使用守卫\n@Controller('users')\n@UseGuards(JwtAuthGuard)\nexport class UsersController {\n  // 所有路由都需要JWT认证\n}",
      "// NestJS完整示例\n// dto/create-user.dto.ts\nimport { IsEmail, IsString, MinLength } from 'class-validator';\n\nexport class CreateUserDto {\n  @IsString()\n  @MinLength(3)\n  username: string;\n\n  @IsEmail()\n  email: string;\n\n  @IsString()\n  @MinLength(6)\n  password: string;\n}\n\n// entities/user.entity.ts\nimport { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  username: string;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @Column({ default: true })\n  isActive: boolean;\n}\n\n// interceptors/transform.interceptor.ts\nimport { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Injectable()\nexport class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {\n    return next.handle().pipe(\n      map(data => ({\n        success: true,\n        data,\n        timestamp: new Date().toISOString(),\n      })),\n    );\n  }\n}\n\n// 全局应用\napp.useGlobalInterceptors(new TransformInterceptor());"
    ],
    resources: [
      {"name": "NestJS官方文档", "url": "https://nestjs.com/"},
      {"name": "NestJS中文文档", "url": "https://nestjs.bootcss.com/"},
      {"name": "NestJS GitHub", "url": "https://github.com/nestjs/nest"},
      {"name": "NestJS示例项目", "url": "https://github.com/nestjs/nest/tree/master/sample"}
    ]
  },

  Netlify: {
    title: "Netlify 部署平台",
    content: `Netlify是一个现代化的Web应用托管平台，专注于Jamstack架构，提供持续部署、无服务器函数等功能。

## 核心功能
- **持续部署**: Git集成，自动构建部署
- **全球CDN**: 边缘节点加速访问
- **无服务器函数**: Netlify Functions (AWS Lambda)
- **表单处理**: 内置表单数据收集
- **身份认证**: Netlify Identity服务
- **A/B测试**: 分支部署和流量分配

## 部署流程
1. 连接Git仓库(GitHub/GitLab/Bitbucket)
2. 配置构建命令和输出目录
3. 推送代码自动触发构建
4. 部署到全球CDN
5. 获得HTTPS域名

## 配置文件
netlify.toml用于配置:
- 构建设置
- 环境变量
- 重定向规则
- Headers配置
- 函数设置

## 特色功能
- **Deploy Previews**: 每个PR自动部署预览
- **Split Testing**: A/B测试不同版本
- **Forms**: 无需后端的表单处理
- **Analytics**: 隐私友好的分析工具
- **Large Media**: Git LFS集成

## 无服务器函数
- 基于AWS Lambda
- 支持Node.js、Go等语言
- 自动扩展
- 按使用付费

## 适用场景
- 静态网站托管
- Jamstack应用
- 前端项目展示
- 文档网站
- 单页应用(SPA)
- 博客和个人网站

## 最佳实践
1. 使用netlify.toml版本化配置
2. 设置合理的缓存策略
3. 利用环境变量管理敏感信息
4. 配置自定义域名和HTTPS
5. 使用Deploy Previews审查变更
6. 监控构建时间和性能`,
    examples: [
      "// netlify.toml配置文件\n# 基础构建设置\n[build]\n  command = \"npm run build\"\n  publish = \"dist\"\n  functions = \"netlify/functions\"\n\n# 环境变量\n[build.environment]\n  NODE_VERSION = \"18\"\n  NPM_VERSION = \"9\"\n\n# 重定向规则\n[[redirects]]\n  from = \"/api/*\"\n  to = \"https://api.example.com/:splat\"\n  status = 200\n  force = true\n\n[[redirects]]\n  from = \"/*\"\n  to = \"/index.html\"\n  status = 200\n\n# Headers配置\n[[headers]]\n  for = \"/*\"\n  [headers.values]\n    X-Frame-Options = \"DENY\"\n    X-XSS-Protection = \"1; mode=block\"\n    Content-Security-Policy = \"default-src 'self'\"\n\n# 上下文特定配置\n[context.production]\n  environment = { NODE_ENV = \"production\" }\n\n[context.deploy-preview]\n  command = \"npm run build:preview\"\n\n[context.branch-deploy]\n  command = \"npm run build:staging\"",
      "// Netlify Functions示例\n// netlify/functions/hello.js\nexports.handler = async (event, context) => {\n  const { name = 'World' } = event.queryStringParameters || {};\n  \n  return {\n    statusCode: 200,\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      message: `Hello, ${name}!`,\n      timestamp: new Date().toISOString(),\n    }),\n  };\n};\n\n// netlify/functions/api.ts - TypeScript函数\nimport { Handler } from '@netlify/functions';\n\ninterface RequestBody {\n  email: string;\n  message: string;\n}\n\nexport const handler: Handler = async (event) => {\n  // 只允许POST请求\n  if (event.httpMethod !== 'POST') {\n    return {\n      statusCode: 405,\n      body: 'Method Not Allowed',\n    };\n  }\n\n  try {\n    const data: RequestBody = JSON.parse(event.body || '{}');\n    \n    // 处理业务逻辑\n    console.log('Received:', data);\n    \n    return {\n      statusCode: 200,\n      body: JSON.stringify({ success: true }),\n    };\n  } catch (error) {\n    return {\n      statusCode: 500,\n      body: JSON.stringify({ error: 'Internal Server Error' }),\n    };\n  }\n};\n\n// 前端调用\nfetch('/.netlify/functions/hello?name=Alice')\n  .then(res => res.json())\n  .then(data => console.log(data));",
      "// Netlify部署脚本和配置\n// package.json\n{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\",\n    \"netlify:dev\": \"netlify dev\",\n    \"netlify:deploy\": \"netlify deploy --prod\"\n  },\n  \"devDependencies\": {\n    \"netlify-cli\": \"^17.0.0\"\n  }\n}\n\n// _redirects文件(放在public目录)\n# SPA路由重定向\n/*    /index.html   200\n\n# API代理\n/api/*  https://api.example.com/:splat  200\n\n# 301重定向\n/old-page  /new-page  301\n\n// _headers文件(放在public目录)\n/*\n  X-Frame-Options: DENY\n  X-XSS-Protection: 1; mode=block\n  Referrer-Policy: strict-origin-when-cross-origin\n\n/static/*\n  Cache-Control: public, max-age=31536000, immutable\n\n// 表单处理示例\n<form name=\"contact\" method=\"POST\" data-netlify=\"true\">\n  <input type=\"hidden\" name=\"form-name\" value=\"contact\" />\n  <input type=\"email\" name=\"email\" required />\n  <textarea name=\"message\" required></textarea>\n  <button type=\"submit\">Submit</button>\n</form>\n\n// GitHub Actions自动部署\n# .github/workflows/netlify.yml\nname: Deploy to Netlify\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n      - run: npm ci\n      - run: npm run build\n      - uses: netlify/actions/cli@master\n        with:\n          args: deploy --prod\n        env:\n          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}\n          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}"
    ],
    resources: [
      {"name": "Netlify官方文档", "url": "https://docs.netlify.com/"},
      {"name": "Netlify Functions", "url": "https://docs.netlify.com/functions/overview/"},
      {"name": "netlify.toml配置", "url": "https://docs.netlify.com/configure-builds/file-based-configuration/"},
      {"name": "Netlify CLI", "url": "https://cli.netlify.com/"}
    ]
  },

  OAuth: {
    title: "OAuth 授权协议",
    content: `OAuth 2.0是一个开放的授权标准，允许用户授权第三方应用访问他们存储在其他服务提供者上的信息，而无需将用户名和密码提供给第三方应用。

## 核心概念
- **Resource Owner**: 资源所有者(用户)
- **Client**: 第三方应用(客户端)
- **Authorization Server**: 认证服务器
- **Resource Server**: 资源服务器
- **Access Token**: 访问令牌
- **Refresh Token**: 刷新令牌

## 授权模式
- **授权码模式(Authorization Code)**: 最安全，适用于有后端的应用
- **隐式模式(Implicit)**: 适用于纯前端应用(已不推荐)
- **密码模式(Password)**: 用户直接提供账密(已不推荐)
- **客户端模式(Client Credentials)**: 服务间调用

## 授权码流程
1. 用户点击登录，跳转到认证服务器
2. 用户授权，返回授权码(code)
3. 客户端用code换取access_token
4. 使用access_token访问资源
5. token过期后用refresh_token刷新

## 安全考虑
- **PKCE**: 防止授权码被拦截
- **State参数**: 防止CSRF攻击
- **HTTPS**: 必须使用加密传输
- **Token存储**: 安全存储令牌
- **Scope控制**: 最小权限原则

## 常见提供商
- Google OAuth
- GitHub OAuth
- Facebook Login
- 微信登录
- 支付宝登录

## 最佳实践
1. 使用授权码模式+PKCE
2. 短期access_token + 长期refresh_token
3. 验证state参数防止CSRF
4. 使用HTTPS传输
5. 安全存储token(HttpOnly Cookie)
6. 实现token刷新机制`,
    examples: [
      "// OAuth 2.0授权码流程(前端)\n// 1. 发起授权请求\nconst CLIENT_ID = 'your_client_id';\nconst REDIRECT_URI = 'http://localhost:3000/callback';\nconst SCOPE = 'read:user user:email';\n\n// 生成随机state防止CSRF\nconst state = Math.random().toString(36).substring(7);\nsessionStorage.setItem('oauth_state', state);\n\n// 跳转到授权页面\nconst authUrl = new URL('https://github.com/login/oauth/authorize');\nauthUrl.searchParams.set('client_id', CLIENT_ID);\nauthUrl.searchParams.set('redirect_uri', REDIRECT_URI);\nauthUrl.searchParams.set('scope', SCOPE);\nauthUrl.searchParams.set('state', state);\n\nwindow.location.href = authUrl.toString();\n\n// 2. 处理回调\nfunction handleOAuthCallback() {\n  const params = new URLSearchParams(window.location.search);\n  const code = params.get('code');\n  const state = params.get('state');\n  const savedState = sessionStorage.getItem('oauth_state');\n  \n  // 验证state\n  if (state !== savedState) {\n    throw new Error('Invalid state parameter');\n  }\n  \n  // 交换access_token(需要后端)\n  return fetch('/api/auth/callback', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ code })\n  })\n  .then(res => res.json())\n  .then(data => {\n    // 保存token\n    localStorage.setItem('access_token', data.access_token);\n    return data;\n  });\n}",
      "// OAuth后端实现(Node.js + Express)\nconst express = require('express');\nconst axios = require('axios');\nconst app = express();\n\nconst CLIENT_ID = process.env.GITHUB_CLIENT_ID;\nconst CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;\nconst REDIRECT_URI = 'http://localhost:3000/callback';\n\n// 交换授权码获取token\napp.post('/api/auth/callback', async (req, res) => {\n  const { code } = req.body;\n  \n  try {\n    // 向GitHub交换token\n    const tokenResponse = await axios.post(\n      'https://github.com/login/oauth/access_token',\n      {\n        client_id: CLIENT_ID,\n        client_secret: CLIENT_SECRET,\n        code: code,\n        redirect_uri: REDIRECT_URI\n      },\n      {\n        headers: { Accept: 'application/json' }\n      }\n    );\n    \n    const { access_token, refresh_token } = tokenResponse.data;\n    \n    // 获取用户信息\n    const userResponse = await axios.get('https://api.github.com/user', {\n      headers: { Authorization: `Bearer ${access_token}` }\n    });\n    \n    res.json({\n      access_token,\n      refresh_token,\n      user: userResponse.data\n    });\n  } catch (error) {\n    res.status(500).json({ error: 'Authentication failed' });\n  }\n});\n\n// Token刷新\napp.post('/api/auth/refresh', async (req, res) => {\n  const { refresh_token } = req.body;\n  \n  try {\n    const response = await axios.post(\n      'https://github.com/login/oauth/access_token',\n      {\n        client_id: CLIENT_ID,\n        client_secret: CLIENT_SECRET,\n        grant_type: 'refresh_token',\n        refresh_token: refresh_token\n      },\n      { headers: { Accept: 'application/json' } }\n    );\n    \n    res.json(response.data);\n  } catch (error) {\n    res.status(401).json({ error: 'Token refresh failed' });\n  }\n});",
      "// React OAuth Hook封装\nimport { useState, useEffect } from 'react';\n\ninterface OAuthConfig {\n  clientId: string;\n  redirectUri: string;\n  authUrl: string;\n  scope: string;\n}\n\nexport function useOAuth(config: OAuthConfig) {\n  const [isAuthenticated, setIsAuthenticated] = useState(false);\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    // 检查是否有token\n    const token = localStorage.getItem('access_token');\n    if (token) {\n      fetchUser(token);\n    } else {\n      setLoading(false);\n    }\n  }, []);\n  \n  const login = () => {\n    const state = Math.random().toString(36).substring(7);\n    sessionStorage.setItem('oauth_state', state);\n    \n    const authUrl = new URL(config.authUrl);\n    authUrl.searchParams.set('client_id', config.clientId);\n    authUrl.searchParams.set('redirect_uri', config.redirectUri);\n    authUrl.searchParams.set('scope', config.scope);\n    authUrl.searchParams.set('state', state);\n    authUrl.searchParams.set('response_type', 'code');\n    \n    window.location.href = authUrl.toString();\n  };\n  \n  const logout = () => {\n    localStorage.removeItem('access_token');\n    setIsAuthenticated(false);\n    setUser(null);\n  };\n  \n  const fetchUser = async (token: string) => {\n    try {\n      const response = await fetch('/api/user', {\n        headers: { Authorization: `Bearer ${token}` }\n      });\n      const userData = await response.json();\n      setUser(userData);\n      setIsAuthenticated(true);\n    } catch (error) {\n      localStorage.removeItem('access_token');\n    } finally {\n      setLoading(false);\n    }\n  };\n  \n  return { isAuthenticated, user, loading, login, logout };\n}\n\n// 使用\nfunction App() {\n  const { isAuthenticated, user, login, logout } = useOAuth({\n    clientId: 'your_client_id',\n    redirectUri: 'http://localhost:3000/callback',\n    authUrl: 'https://github.com/login/oauth/authorize',\n    scope: 'read:user'\n  });\n  \n  return (\n    <div>\n      {isAuthenticated ? (\n        <div>\n          <p>Welcome, {user?.name}</p>\n          <button onClick={logout}>Logout</button>\n        </div>\n      ) : (\n        <button onClick={login}>Login with GitHub</button>\n      )}\n    </div>\n  );\n}"
    ],
    resources: [
      {"name": "OAuth 2.0 RFC", "url": "https://oauth.net/2/"},
      {"name": "OAuth 2.0 简化版", "url": "https://www.ruanyifeng.com/blog/2019/04/oauth_design.html"},
      {"name": "GitHub OAuth文档", "url": "https://docs.github.com/en/developers/apps/building-oauth-apps"},
      {"name": "OAuth 2.0 Playground", "url": "https://www.oauth.com/playground/"}
    ]
  },

  Perf: {
    title: "性能优化",
    content: `前端性能优化是提升用户体验的关键，涉及加载性能、运行时性能、渲染性能等多个方面。

## 核心指标
- **FCP(First Contentful Paint)**: 首次内容绘制
- **LCP(Largest Contentful Paint)**: 最大内容绘制
- **FID(First Input Delay)**: 首次输入延迟
- **CLS(Cumulative Layout Shift)**: 累积布局偏移
- **TTI(Time to Interactive)**: 可交互时间
- **TBT(Total Blocking Time)**: 总阻塞时间

## 加载优化
- **代码分割**: 动态导入、路由懒加载
- **Tree Shaking**: 移除未使用代码
- **压缩**: Gzip/Brotli压缩
- **CDN**: 内容分发网络
- **预加载**: preload、prefetch、dns-prefetch
- **资源优化**: 图片压缩、WebP、懒加载

## 渲染优化
- **避免强制同步布局**: 批量DOM操作
- **使用transform和opacity**: GPU加速
- **虚拟滚动**: 大列表优化
- **防抖节流**: 减少事件触发
- **Web Workers**: 多线程计算

## 网络优化
- **HTTP/2**: 多路复用
- **缓存策略**: 强缓存、协商缓存
- **减少请求**: 合并资源、雪碧图
- **GraphQL**: 精确查询数据

## React优化
- **memo**: 避免不必要的重渲染
- **useMemo/useCallback**: 缓存计算结果
- **懒加载**: React.lazy + Suspense
- **虚拟化**: react-window、react-virtualized

## Vue优化
- **v-once**: 只渲染一次
- **v-memo**: 条件缓存
- **computed**: 缓存计算属性
- **异步组件**: defineAsyncComponent

## 监控工具
- **Lighthouse**: 综合性能评估
- **WebPageTest**: 详细性能分析
- **Chrome DevTools**: 性能分析
- **Performance API**: 自定义性能监控`,
    examples: [
      "// 前端性能优化实践\n\n// 1. 代码分割 - 路由懒加载\nimport { lazy, Suspense } from 'react';\n\nconst Home = lazy(() => import('./pages/Home'));\nconst About = lazy(() => import('./pages/About'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </Suspense>\n  );\n}\n\n// 2. 图片懒加载\nfunction LazyImage({ src, alt }) {\n  const [imageSrc, setImageSrc] = useState('');\n  const imgRef = useRef<HTMLImageElement>(null);\n  \n  useEffect(() => {\n    const observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          setImageSrc(src);\n          observer.disconnect();\n        }\n      });\n    });\n    \n    if (imgRef.current) {\n      observer.observe(imgRef.current);\n    }\n    \n    return () => observer.disconnect();\n  }, [src]);\n  \n  return <img ref={imgRef} src={imageSrc} alt={alt} />;\n}\n\n// 3. 防抖和节流\nfunction debounce<T extends (...args: any[]) => any>(\n  func: T,\n  wait: number\n): (...args: Parameters<T>) => void {\n  let timeout: NodeJS.Timeout;\n  return (...args: Parameters<T>) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func(...args), wait);\n  };\n}\n\nconst handleSearch = debounce((query: string) => {\n  // 搜索逻辑\n}, 300);",
      "// React性能优化\nimport { memo, useMemo, useCallback } from 'react';\n\n// 1. memo避免重渲染\nconst ExpensiveComponent = memo(({ data }) => {\n  console.log('ExpensiveComponent rendered');\n  return <div>{data}</div>;\n});\n\n// 2. useMemo缓存计算结果\nfunction DataList({ items, filter }) {\n  const filteredItems = useMemo(() => {\n    console.log('Filtering items...');\n    return items.filter(item => item.includes(filter));\n  }, [items, filter]);\n  \n  return <ul>{filteredItems.map(item => <li key={item}>{item}</li>)}</ul>;\n}\n\n// 3. useCallback缓存函数\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  \n  const handleClick = useCallback(() => {\n    console.log('Button clicked');\n  }, []); // 依赖为空，函数不会重新创建\n  \n  return (\n    <div>\n      <Child onClick={handleClick} />\n      <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n    </div>\n  );\n}\n\nconst Child = memo(({ onClick }) => {\n  console.log('Child rendered');\n  return <button onClick={onClick}>Click</button>;\n});\n\n// 4. 虚拟滚动(react-window)\nimport { FixedSizeList } from 'react-window';\n\nfunction VirtualList({ items }) {\n  const Row = ({ index, style }) => (\n    <div style={style}>{items[index]}</div>\n  );\n  \n  return (\n    <FixedSizeList\n      height={600}\n      itemCount={items.length}\n      itemSize={50}\n      width=\"100%\"\n    >\n      {Row}\n    </FixedSizeList>\n  );\n}",
      "// 性能监控和优化\n\n// 1. Performance API监控\nclass PerformanceMonitor {\n  static measurePageLoad() {\n    if (window.performance) {\n      const perfData = window.performance.timing;\n      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;\n      const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;\n      const firstPaintTime = perfData.responseEnd - perfData.fetchStart;\n      \n      console.log('Page Load Time:', pageLoadTime, 'ms');\n      console.log('DOM Ready Time:', domReadyTime, 'ms');\n      console.log('First Paint Time:', firstPaintTime, 'ms');\n    }\n  }\n  \n  static measureAPICall(name: string, apiCall: () => Promise<any>) {\n    const start = performance.now();\n    return apiCall().then(result => {\n      const duration = performance.now() - start;\n      console.log(`${name} took ${duration.toFixed(2)}ms`);\n      return result;\n    });\n  }\n}\n\n// 2. 资源预加载\nfunction preloadResources() {\n  // DNS预解析\n  const dnsPrefetch = document.createElement('link');\n  dnsPrefetch.rel = 'dns-prefetch';\n  dnsPrefetch.href = '//api.example.com';\n  document.head.appendChild(dnsPrefetch);\n  \n  // 预加载关键资源\n  const preload = document.createElement('link');\n  preload.rel = 'preload';\n  preload.as = 'font';\n  preload.href = '/fonts/main.woff2';\n  preload.crossOrigin = 'anonymous';\n  document.head.appendChild(preload);\n  \n  // 预取下一页资源\n  const prefetch = document.createElement('link');\n  prefetch.rel = 'prefetch';\n  prefetch.href = '/next-page.js';\n  document.head.appendChild(prefetch);\n}\n\n// 3. 长任务检测\nif ('PerformanceObserver' in window) {\n  const observer = new PerformanceObserver((list) => {\n    for (const entry of list.getEntries()) {\n      if (entry.duration > 50) {\n        console.warn('Long task detected:', entry.duration, 'ms');\n      }\n    }\n  });\n  observer.observe({ entryTypes: ['longtask'] });\n}\n\n// 使用\nwindow.addEventListener('load', () => {\n  PerformanceMonitor.measurePageLoad();\n});"
    ],
    resources: [
      {"name": "Web性能优化指南", "url": "https://web.dev/performance/"},
      {"name": "Core Web Vitals", "url": "https://web.dev/vitals/"},
      {"name": "Lighthouse", "url": "https://developers.google.com/web/tools/lighthouse"},
      {"name": "性能优化最佳实践", "url": "https://developer.mozilla.org/zh-CN/docs/Web/Performance"}
    ]
  },

  Pinia: {
    title: "Pinia 状态管理",
    content: `Pinia是Vue官方推荐的新一代状态管理库，是Vuex的替代方案，设计更加简洁和类型安全。

## 核心特性
- **TypeScript支持**: 完整的类型推断
- **模块化**: 每个store都是独立的
- **无Mutations**: 直接修改state
- **DevTools支持**: 时间旅行、调试
- **插件系统**: 可扩展功能
- **服务端渲染(SSR)**: 完整支持

## 核心概念
- **State**: 响应式状态数据
- **Getters**: 计算属性，自动缓存
- **Actions**: 修改state的方法(支持异步)

## 与Vuex对比
Pinia优势:
- 更简洁的API，无需mutations
- 完整的TypeScript支持
- 更好的代码分割
- 无需嵌套模块
- 轻量级(约1KB)

## 创建Store
使用\`defineStore\`定义:
- Options API风格
- Composition API风格(setup)

## 使用方式
- 组件中通过\`useStore()\`访问
- 支持解构(使用storeToRefs保持响应性)
- 可以在actions中访问其他store

## 插件系统
- 持久化插件(pinia-plugin-persistedstate)
- 订阅state变化
- 扩展store功能

## 最佳实践
1. 按功能模块划分store
2. 使用组合式API风格
3. 善用getters缓存计算结果
4. actions中处理异步逻辑
5. 使用TypeScript获得类型安全`,
    examples: [
      "// Pinia基础使用\nimport { createPinia } from 'pinia';\nimport { createApp } from 'vue';\n\nconst pinia = createPinia();\nconst app = createApp(App);\napp.use(pinia);\n\n// 定义Store - Options API风格\nimport { defineStore } from 'pinia';\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => ({\n    count: 0,\n    name: 'Counter'\n  }),\n  \n  getters: {\n    doubleCount: (state) => state.count * 2,\n    // 访问其他getter\n    doubleCountPlusOne(): number {\n      return this.doubleCount + 1;\n    }\n  },\n  \n  actions: {\n    increment() {\n      this.count++;\n    },\n    decrement() {\n      this.count--;\n    },\n    async fetchCount() {\n      const response = await fetch('/api/count');\n      const data = await response.json();\n      this.count = data.count;\n    }\n  }\n});\n\n// 组件中使用\n<script setup lang=\"ts\">\nimport { useCounterStore } from '@/stores/counter';\nimport { storeToRefs } from 'pinia';\n\nconst counter = useCounterStore();\n\n// 解构保持响应性\nconst { count, doubleCount } = storeToRefs(counter);\nconst { increment, decrement } = counter;\n</script>\n\n<template>\n  <div>\n    <p>Count: {{ count }}</p>\n    <p>Double: {{ doubleCount }}</p>\n    <button @click=\"increment\">+1</button>\n    <button @click=\"decrement\">-1</button>\n  </div>\n</template>",
      "// Pinia Composition API风格\nimport { defineStore } from 'pinia';\nimport { ref, computed } from 'vue';\n\n// Setup语法\nexport const useUserStore = defineStore('user', () => {\n  // State\n  const user = ref<User | null>(null);\n  const token = ref<string>('');\n  const loading = ref(false);\n  \n  // Getters\n  const isLoggedIn = computed(() => !!token.value);\n  const userName = computed(() => user.value?.name || 'Guest');\n  \n  // Actions\n  async function login(username: string, password: string) {\n    loading.value = true;\n    try {\n      const response = await fetch('/api/login', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ username, password })\n      });\n      \n      const data = await response.json();\n      token.value = data.token;\n      user.value = data.user;\n    } catch (error) {\n      console.error('Login failed:', error);\n      throw error;\n    } finally {\n      loading.value = false;\n    }\n  }\n  \n  function logout() {\n    user.value = null;\n    token.value = '';\n  }\n  \n  return {\n    user,\n    token,\n    loading,\n    isLoggedIn,\n    userName,\n    login,\n    logout\n  };\n});\n\n// 在其他store中使用\nexport const useCartStore = defineStore('cart', () => {\n  const userStore = useUserStore();\n  const items = ref<CartItem[]>([]);\n  \n  const total = computed(() => {\n    return items.value.reduce((sum, item) => sum + item.price, 0);\n  });\n  \n  async function checkout() {\n    if (!userStore.isLoggedIn) {\n      throw new Error('Please login first');\n    }\n    // 结账逻辑\n  }\n  \n  return { items, total, checkout };\n});",
      "// Pinia高级特性\n\n// 1. 订阅state变化\nconst store = useCounterStore();\n\nstore.$subscribe((mutation, state) => {\n  console.log('State changed:', mutation.type, state);\n  // 持久化到localStorage\n  localStorage.setItem('counter', JSON.stringify(state));\n});\n\n// 2. 订阅actions\nstore.$onAction(({ name, args, after, onError }) => {\n  console.log(`Action \"${name}\" called with:`, args);\n  \n  after((result) => {\n    console.log('Action finished with result:', result);\n  });\n  \n  onError((error) => {\n    console.error('Action failed:', error);\n  });\n});\n\n// 3. 重置state\nstore.$reset();\n\n// 4. 批量修改state\nstore.$patch({\n  count: store.count + 1,\n  name: 'New Name'\n});\n\n// 或使用函数\nstore.$patch((state) => {\n  state.items.push({ id: 1, name: 'Item' });\n  state.total += 10;\n});\n\n// 5. 持久化插件\nimport { createPinia } from 'pinia';\nimport piniaPluginPersistedstate from 'pinia-plugin-persistedstate';\n\nconst pinia = createPinia();\npinia.use(piniaPluginPersistedstate);\n\nexport const useStore = defineStore('main', {\n  state: () => ({ count: 0 }),\n  persist: {\n    key: 'my-store',\n    storage: localStorage,\n    paths: ['count'] // 只持久化指定字段\n  }\n});\n\n// 6. 自定义插件\nfunction myPiniaPlugin(context) {\n  const { store } = context;\n  \n  // 给所有store添加属性\n  store.$customProperty = 'Hello';\n  \n  // 监听所有store的变化\n  store.$subscribe((mutation) => {\n    console.log(`[${store.$id}] changed:`, mutation);\n  });\n}\n\npinia.use(myPiniaPlugin);"
    ],
    resources: [
      {"name": "Pinia官方文档", "url": "https://pinia.vuejs.org/"},
      {"name": "Pinia中文文档", "url": "https://pinia.vuejs.org/zh/"},
      {"name": "Pinia GitHub", "url": "https://github.com/vuejs/pinia"},
      {"name": "Pinia示例", "url": "https://github.com/vuejs/pinia/tree/v2/packages/playground"}
    ]
  },

  Prettier: {
    title: "Prettier 代码格式化",
    content: `Prettier是一个固执己见的代码格式化工具，支持多种语言，自动统一代码风格，减少团队争论。

## 核心特性
- **固执己见**: 默认配置即可使用，减少配置
- **多语言支持**: JavaScript、TypeScript、CSS、HTML、JSON、Markdown等
- **编辑器集成**: VSCode、WebStorm等主流编辑器
- **Git集成**: 配合lint-staged格式化暂存文件
- **配置简单**: 最小化配置项

## 工作原理
1. 解析代码生成AST(抽象语法树)
2. 删除原有格式
3. 按规则重新格式化输出
4. 确保一致的代码风格

## 配置方式
- \`.prettierrc\`: JSON/YAML配置文件
- \`.prettierrc.js\`: JavaScript配置
- \`package.json\`中的prettier字段
- \`.prettierignore\`: 忽略文件

## 常用配置
- **printWidth**: 单行长度(默认80)
- **tabWidth**: 缩进空格数(默认2)
- **semi**: 是否使用分号
- **singleQuote**: 使用单引号
- **trailingComma**: 尾随逗号
- **bracketSpacing**: 对象括号空格
- **arrowParens**: 箭头函数参数括号

## 与ESLint集成
- **eslint-config-prettier**: 关闭ESLint中与Prettier冲突的规则
- **eslint-plugin-prettier**: 将Prettier规则作为ESLint规则运行

## 编辑器集成
- VSCode插件自动格式化
- 保存时自动格式化
- 格式化选中代码

## 最佳实践
1. 团队统一使用默认配置
2. 配合lint-staged在commit时格式化
3. 启用编辑器保存时自动格式化
4. 最小化自定义配置
5. 使用.prettierignore排除不需要格式化的文件`,
    examples: [
      "// Prettier配置文件\n// .prettierrc.json\n{\n  \"printWidth\": 100,\n  \"tabWidth\": 2,\n  \"useTabs\": false,\n  \"semi\": true,\n  \"singleQuote\": true,\n  \"quoteProps\": \"as-needed\",\n  \"jsxSingleQuote\": false,\n  \"trailingComma\": \"es5\",\n  \"bracketSpacing\": true,\n  \"bracketSameLine\": false,\n  \"arrowParens\": \"always\",\n  \"endOfLine\": \"lf\",\n  \"overrides\": [\n    {\n      \"files\": \"*.md\",\n      \"options\": {\n        \"proseWrap\": \"always\"\n      }\n    }\n  ]\n}\n\n// .prettierrc.js (支持注释和逻辑)\nmodule.exports = {\n  printWidth: 100,\n  tabWidth: 2,\n  semi: true,\n  singleQuote: true,\n  trailingComma: 'es5',\n  bracketSpacing: true,\n  arrowParens: 'always',\n  endOfLine: 'lf',\n};\n\n// .prettierignore\ndist\nbuild\ncoverage\nnode_modules\n*.min.js\n*.bundle.js\npackage-lock.json\nyarn.lock\n.next\n.nuxt",
      "// 与ESLint集成\n// .eslintrc.js\nmodule.exports = {\n  extends: [\n    'eslint:recommended',\n    'plugin:react/recommended',\n    'plugin:@typescript-eslint/recommended',\n    // 关闭与Prettier冲突的规则(必须放在最后)\n    'prettier'\n  ],\n  plugins: ['prettier'],\n  rules: {\n    // 将Prettier错误作为ESLint错误显示\n    'prettier/prettier': 'error'\n  }\n};\n\n// package.json配置\n{\n  \"scripts\": {\n    \"format\": \"prettier --write \\\"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\\\"\",\n    \"format:check\": \"prettier --check \\\"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\\\"\",\n    \"lint\": \"eslint src --ext .js,.jsx,.ts,.tsx\",\n    \"lint:fix\": \"eslint src --ext .js,.jsx,.ts,.tsx --fix\"\n  },\n  \"devDependencies\": {\n    \"prettier\": \"^3.0.0\",\n    \"eslint\": \"^8.0.0\",\n    \"eslint-config-prettier\": \"^9.0.0\",\n    \"eslint-plugin-prettier\": \"^5.0.0\"\n  }\n}\n\n// lint-staged集成\n{\n  \"lint-staged\": {\n    \"*.{js,jsx,ts,tsx}\": [\n      \"eslint --fix\",\n      \"prettier --write\"\n    ],\n    \"*.{json,css,scss,md}\": \"prettier --write\"\n  }\n}",
      "// VSCode配置\n// .vscode/settings.json\n{\n  // 启用Prettier作为默认格式化工具\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n  \n  // 保存时自动格式化\n  \"editor.formatOnSave\": true,\n  \n  // 针对特定语言\n  \"[javascript]\": {\n    \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n  },\n  \"[typescript]\": {\n    \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n  },\n  \"[json]\": {\n    \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n  },\n  \n  // ESLint配置\n  \"eslint.validate\": [\n    \"javascript\",\n    \"javascriptreact\",\n    \"typescript\",\n    \"typescriptreact\"\n  ],\n  \"eslint.format.enable\": false, // 不使用ESLint格式化\n  \n  // 其他设置\n  \"files.eol\": \"\\n\",\n  \"files.insertFinalNewline\": true,\n  \"files.trimTrailingWhitespace\": true\n}\n\n// 编程方式使用Prettier\nimport prettier from 'prettier';\n\nconst code = 'const  foo  =  {  bar:  \"baz\"  };';\n\nconst formatted = await prettier.format(code, {\n  parser: 'babel',\n  singleQuote: true,\n  semi: true,\n});\n\nconsole.log(formatted); // const foo = { bar: 'baz' };\n\n// 检查是否已格式化\nconst isFormatted = await prettier.check(code, {\n  parser: 'babel',\n});\n\nconsole.log(isFormatted); // false"
    ],
    resources: [
      {"name": "Prettier官方网站", "url": "https://prettier.io/"},
      {"name": "Prettier配置选项", "url": "https://prettier.io/docs/en/options.html"},
      {"name": "Prettier Playground", "url": "https://prettier.io/playground/"},
      {"name": "与ESLint集成", "url": "https://prettier.io/docs/en/integrating-with-linters.html"}
    ]
  },

  PWA: {
    title: "PWA 渐进式Web应用",
    content: `PWA(Progressive Web App)是一种结合了Web和原生应用优势的应用模式，提供类似原生应用的体验。

## 核心特性
- **可靠性**: 离线也能使用(Service Worker)
- **快速**: 即时加载，流畅体验
- **可安装**: 添加到主屏幕
- **响应式**: 适配各种设备
- **安全**: 必须使用HTTPS
- **可更新**: 自动更新内容

## 关键技术
- **Service Worker**: 离线缓存、后台同步
- **Web App Manifest**: 应用元数据、图标
- **HTTPS**: 安全传输协议
- **Cache API**: 资源缓存
- **Push API**: 消息推送
- **Background Sync**: 后台同步

## Service Worker
生命周期:
1. 注册(Register)
2. 安装(Install)
3. 激活(Activate)
4. 拦截请求(Fetch)

## 缓存策略
- **Cache First**: 优先使用缓存
- **Network First**: 优先使用网络
- **Cache Only**: 仅缓存
- **Network Only**: 仅网络
- **Stale While Revalidate**: 缓存优先，后台更新

## Manifest配置
- name、short_name: 应用名称
- icons: 应用图标
- start_url: 启动URL
- display: 显示模式(standalone/fullscreen)
- theme_color、background_color: 主题色

## 优势
- 离线访问
- 快速加载
- 推送通知
- 类原生体验
- SEO友好
- 低流量消耗

## 适用场景
- 新闻资讯应用
- 社交媒体
- 电商应用
- 工具类应用
- 内容管理系统`,
    examples: [
      "// PWA基础配置\n// manifest.json\n{\n  \"name\": \"My PWA Application\",\n  \"short_name\": \"MyPWA\",\n  \"description\": \"A Progressive Web App\",\n  \"start_url\": \"/\",\n  \"display\": \"standalone\",\n  \"background_color\": \"#ffffff\",\n  \"theme_color\": \"#2196F3\",\n  \"orientation\": \"portrait\",\n  \"icons\": [\n    {\n      \"src\": \"/icons/icon-72x72.png\",\n      \"sizes\": \"72x72\",\n      \"type\": \"image/png\"\n    },\n    {\n      \"src\": \"/icons/icon-192x192.png\",\n      \"sizes\": \"192x192\",\n      \"type\": \"image/png\"\n    },\n    {\n      \"src\": \"/icons/icon-512x512.png\",\n      \"sizes\": \"512x512\",\n      \"type\": \"image/png\",\n      \"purpose\": \"any maskable\"\n    }\n  ],\n  \"categories\": [\"productivity\", \"utilities\"],\n  \"screenshots\": [\n    {\n      \"src\": \"/screenshots/home.png\",\n      \"sizes\": \"540x720\",\n      \"type\": \"image/png\"\n    }\n  ]\n}\n\n// index.html中引用\n<link rel=\"manifest\" href=\"/manifest.json\">\n<meta name=\"theme-color\" content=\"#2196F3\">\n<link rel=\"apple-touch-icon\" href=\"/icons/icon-192x192.png\">",
      "// Service Worker实现\n// sw.js\nconst CACHE_NAME = 'my-pwa-v1';\nconst urlsToCache = [\n  '/',\n  '/index.html',\n  '/styles/main.css',\n  '/scripts/main.js',\n  '/images/logo.png'\n];\n\n// 安装事件 - 缓存资源\nself.addEventListener('install', (event) => {\n  event.waitUntil(\n    caches.open(CACHE_NAME)\n      .then((cache) => {\n        console.log('Opened cache');\n        return cache.addAll(urlsToCache);\n      })\n  );\n  self.skipWaiting(); // 立即激活\n});\n\n// 激活事件 - 清理旧缓存\nself.addEventListener('activate', (event) => {\n  event.waitUntil(\n    caches.keys().then((cacheNames) => {\n      return Promise.all(\n        cacheNames.map((cacheName) => {\n          if (cacheName !== CACHE_NAME) {\n            console.log('Deleting old cache:', cacheName);\n            return caches.delete(cacheName);\n          }\n        })\n      );\n    })\n  );\n  return self.clients.claim(); // 立即控制所有页面\n});\n\n// 拦截请求 - Cache First策略\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request)\n      .then((response) => {\n        // 缓存命中，返回缓存\n        if (response) {\n          return response;\n        }\n        // 否则请求网络\n        return fetch(event.request).then((response) => {\n          // 缓存新资源\n          if (event.request.method === 'GET') {\n            const responseToCache = response.clone();\n            caches.open(CACHE_NAME).then((cache) => {\n              cache.put(event.request, responseToCache);\n            });\n          }\n          return response;\n        });\n      })\n  );\n});\n\n// 注册Service Worker\n// main.js\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/sw.js')\n      .then((registration) => {\n        console.log('SW registered:', registration);\n      })\n      .catch((error) => {\n        console.log('SW registration failed:', error);\n      });\n  });\n}",
      "// PWA高级功能\n// 推送通知\nif ('Notification' in window && 'serviceWorker' in navigator) {\n  // 请求通知权限\n  Notification.requestPermission().then((permission) => {\n    if (permission === 'granted') {\n      console.log('Notification permission granted');\n      \n      // 订阅推送\n      navigator.serviceWorker.ready.then((registration) => {\n        registration.pushManager.subscribe({\n          userVisibleOnly: true,\n          applicationServerKey: 'YOUR_PUBLIC_KEY'\n        }).then((subscription) => {\n          console.log('Push subscription:', subscription);\n          // 发送订阅信息到服务器\n        });\n      });\n    }\n  });\n}\n\n// Service Worker中处理推送\nself.addEventListener('push', (event) => {\n  const data = event.data ? event.data.json() : {};\n  const options = {\n    body: data.body || 'New notification',\n    icon: '/icons/icon-192x192.png',\n    badge: '/icons/badge-72x72.png',\n    vibrate: [200, 100, 200],\n    data: { url: data.url || '/' }\n  };\n  \n  event.waitUntil(\n    self.registration.showNotification(data.title || 'PWA App', options)\n  );\n});\n\n// 点击通知\nself.addEventListener('notificationclick', (event) => {\n  event.notification.close();\n  event.waitUntil(\n    clients.openWindow(event.notification.data.url)\n  );\n});\n\n// 后台同步\nif ('sync' in self.registration) {\n  navigator.serviceWorker.ready.then((registration) => {\n    registration.sync.register('sync-data');\n  });\n}\n\nself.addEventListener('sync', (event) => {\n  if (event.tag === 'sync-data') {\n    event.waitUntil(syncData());\n  }\n});\n\nasync function syncData() {\n  // 后台同步数据逻辑\n  const data = await getLocalData();\n  await fetch('/api/sync', {\n    method: 'POST',\n    body: JSON.stringify(data)\n  });\n}"
    ],
    resources: [
      {"name": "PWA官方文档", "url": "https://web.dev/progressive-web-apps/"},
      {"name": "Service Worker API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API"},
      {"name": "Web App Manifest", "url": "https://web.dev/add-manifest/"},
      {"name": "Workbox", "url": "https://developers.google.com/web/tools/workbox"}
    ]
  },

  Recoil: {
    title: "Recoil 状态管理",
    content: `Recoil是Facebook推出的React状态管理库，提供灵活的状态共享和派生，保持React的简单性。

## 核心概念
- **Atoms**: 状态单元，可订阅和更新
- **Selectors**: 派生状态，纯函数计算
- **RecoilRoot**: 根组件，提供上下文

## 核心特性
- **最小化重渲染**: 精确订阅依赖
- **并发模式**: 支持React Concurrent Mode
- **派生数据**: selector自动计算缓存
- **异步查询**: 支持异步selector
- **原子化状态**: 细粒度状态管理
- **TypeScript支持**: 完整类型推导

## Atoms
- 使用\`atom()\`创建
- 通过\`useRecoilState()\`读写
- 通过\`useRecoilValue()\`只读
- 通过\`useSetRecoilState()\`只写

## Selectors
- 使用\`selector()\`创建
- 纯函数计算派生值
- 支持异步数据获取
- 自动缓存和依赖追踪

## 异步支持
- Suspense集成
- 异步selector返回Promise
- 错误边界处理

## 与其他方案对比
vs Redux:
- 更简单的API
- 更细粒度的订阅
- 更少的样板代码

vs Context API:
- 避免不必要的重渲染
- 更好的派生值支持
- 异步状态管理

## 最佳实践
1. 保持atoms小而专注
2. 使用selector派生复杂状态
3. 利用atomFamily动态创建atoms
4. 配合Suspense处理异步
5. 使用TypeScript增强类型安全`,
    examples: [
      "// Recoil基础使用\nimport { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';\n\n// 1. 定义Atom\nconst counterState = atom({\n  key: 'counterState', // 唯一标识\n  default: 0, // 默认值\n});\n\nconst userState = atom<User | null>({\n  key: 'userState',\n  default: null,\n});\n\n// 2. 定义Selector(派生状态)\nconst doubleCounterState = selector({\n  key: 'doubleCounterState',\n  get: ({ get }) => {\n    const count = get(counterState);\n    return count * 2;\n  },\n});\n\n// 3. 使用状态\nfunction Counter() {\n  const [count, setCount] = useRecoilState(counterState);\n  const doubleCount = useRecoilValue(doubleCounterState);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <p>Double: {doubleCount}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <button onClick={() => setCount(count - 1)}>-1</button>\n    </div>\n  );\n}\n\n// 4. 根组件\nfunction App() {\n  return (\n    <RecoilRoot>\n      <Counter />\n    </RecoilRoot>\n  );\n}",
      "// Recoil异步Selector\nimport { atom, selector, selectorFamily, useRecoilValue } from 'recoil';\n\n// 异步获取用户数据\nconst currentUserIDState = atom({\n  key: 'currentUserID',\n  default: 1,\n});\n\nconst currentUserState = selector({\n  key: 'currentUser',\n  get: async ({ get }) => {\n    const userId = get(currentUserIDState);\n    const response = await fetch(`/api/users/${userId}`);\n    return response.json();\n  },\n});\n\n// 使用Suspense\nfunction UserProfile() {\n  const user = useRecoilValue(currentUserState);\n  return <div>Welcome, {user.name}!</div>;\n}\n\nfunction App() {\n  return (\n    <RecoilRoot>\n      <Suspense fallback={<div>Loading...</div>}>\n        <UserProfile />\n      </Suspense>\n    </RecoilRoot>\n  );\n}\n\n// SelectorFamily - 参数化selector\nconst userByIDState = selectorFamily({\n  key: 'userByID',\n  get: (userId: number) => async () => {\n    const response = await fetch(`/api/users/${userId}`);\n    return response.json();\n  },\n});\n\nfunction UserCard({ userId }: { userId: number }) {\n  const user = useRecoilValue(userByIDState(userId));\n  return <div>{user.name}</div>;\n}",
      "// Recoil高级特性\nimport {\n  atom,\n  selector,\n  atomFamily,\n  useRecoilState,\n  useRecoilCallback,\n  useRecoilTransaction_UNSTABLE\n} from 'recoil';\n\n// AtomFamily - 动态创建atoms\nconst todoItemState = atomFamily({\n  key: 'todoItem',\n  default: (id: number) => ({\n    id,\n    text: '',\n    completed: false,\n  }),\n});\n\nconst todoListState = atom<number[]>({\n  key: 'todoList',\n  default: [],\n});\n\n// 可写Selector\nconst todoFilterState = atom({\n  key: 'todoFilter',\n  default: 'all',\n});\n\nconst filteredTodoListState = selector({\n  key: 'filteredTodoList',\n  get: ({ get }) => {\n    const filter = get(todoFilterState);\n    const list = get(todoListState);\n    \n    return list.filter(id => {\n      const item = get(todoItemState(id));\n      if (filter === 'completed') return item.completed;\n      if (filter === 'active') return !item.completed;\n      return true;\n    });\n  },\n});\n\n// Callback - 读取状态但不订阅\nfunction TodoList() {\n  const [todoIds, setTodoIds] = useRecoilState(todoListState);\n  \n  const addTodo = useRecoilCallback(({ set }) => (text: string) => {\n    const id = Date.now();\n    set(todoItemState(id), { id, text, completed: false });\n    setTodoIds([...todoIds, id]);\n  }, [todoIds]);\n  \n  return (\n    <div>\n      <button onClick={() => addTodo('New Todo')}>Add</button>\n      {todoIds.map(id => <TodoItem key={id} id={id} />)}\n    </div>\n  );\n}\n\nfunction TodoItem({ id }: { id: number }) {\n  const [item, setItem] = useRecoilState(todoItemState(id));\n  \n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        checked={item.completed}\n        onChange={(e) => setItem({ ...item, completed: e.target.checked })}\n      />\n      <span>{item.text}</span>\n    </div>\n  );\n}"
    ],
    resources: [
      {"name": "Recoil官方文档", "url": "https://recoiljs.org/"},
      {"name": "Recoil GitHub", "url": "https://github.com/facebookexperimental/Recoil"},
      {"name": "Recoil最佳实践", "url": "https://recoiljs.org/docs/guides/best-practices"},
      {"name": "Recoil示例", "url": "https://recoiljs.org/docs/basic-tutorial/intro"}
    ]
  },

  Redux: {
    title: "Redux 状态管理",
    content: `Redux是JavaScript应用的可预测状态容器，基于Flux架构，强调单向数据流和不可变性。

## 三大原则
- **单一数据源**: 整个应用的state存储在单一store中
- **State只读**: 唯一改变state的方式是触发action
- **纯函数修改**: 使用纯函数reducer来修改state

## 核心概念
- **Store**: 存储应用状态
- **Action**: 描述发生了什么的对象
- **Reducer**: 根据action更新state的纯函数
- **Dispatch**: 发送action的方法
- **Subscribe**: 订阅state变化

## 数据流
1. 调用\`store.dispatch(action)\`
2. Redux store调用传入的reducer
3. 根reducer合并多个子reducer的结果
4. Redux store保存新的state
5. 订阅者被通知state更新

## Redux Toolkit
现代Redux开发推荐使用Redux Toolkit:
- **createSlice**: 自动生成action和reducer
- **configureStore**: 简化store配置
- **createAsyncThunk**: 处理异步逻辑
- **RTK Query**: 数据获取和缓存

## 中间件
- **redux-thunk**: 处理异步action
- **redux-saga**: 复杂异步流程管理
- **redux-logger**: 日志记录
- **redux-persist**: 状态持久化

## React集成
- **react-redux**: React绑定
- **useSelector**: 读取state
- **useDispatch**: 获取dispatch函数
- **Provider**: 提供store

## 最佳实践
1. 使用Redux Toolkit简化代码
2. 规范化state结构(扁平化)
3. 按功能模块组织reducer
4. 使用selector提取数据
5. 避免在reducer中执行副作用
6. 使用TypeScript增强类型安全`,
    examples: [
      "// Redux Toolkit基础使用\nimport { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';\n\n// 1. 创建Slice\ninterface CounterState {\n  value: number;\n}\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 } as CounterState,\n  reducers: {\n    increment: (state) => {\n      state.value += 1; // Immer让我们可以\"修改\"state\n    },\n    decrement: (state) => {\n      state.value -= 1;\n    },\n    incrementByAmount: (state, action: PayloadAction<number>) => {\n      state.value += action.payload;\n    },\n  },\n});\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions;\n\n// 2. 配置Store\nconst store = configureStore({\n  reducer: {\n    counter: counterSlice.reducer,\n  },\n});\n\nexport type RootState = ReturnType<typeof store.getState>;\nexport type AppDispatch = typeof store.dispatch;\n\n// 3. React组件中使用\nimport { useSelector, useDispatch } from 'react-redux';\n\nfunction Counter() {\n  const count = useSelector((state: RootState) => state.counter.value);\n  const dispatch = useDispatch();\n  \n  return (\n    <div>\n      <h1>{count}</h1>\n      <button onClick={() => dispatch(increment())}>+</button>\n      <button onClick={() => dispatch(decrement())}>-</button>\n      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>\n    </div>\n  );\n}",
      "// Redux异步处理\nimport { createSlice, createAsyncThunk } from '@reduxjs/toolkit';\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ninterface UserState {\n  users: User[];\n  loading: boolean;\n  error: string | null;\n}\n\n// createAsyncThunk处理异步\nexport const fetchUsers = createAsyncThunk(\n  'users/fetchUsers',\n  async () => {\n    const response = await fetch('/api/users');\n    return response.json();\n  }\n);\n\nconst userSlice = createSlice({\n  name: 'users',\n  initialState: {\n    users: [],\n    loading: false,\n    error: null,\n  } as UserState,\n  reducers: {},\n  extraReducers: (builder) => {\n    builder\n      .addCase(fetchUsers.pending, (state) => {\n        state.loading = true;\n        state.error = null;\n      })\n      .addCase(fetchUsers.fulfilled, (state, action) => {\n        state.loading = false;\n        state.users = action.payload;\n      })\n      .addCase(fetchUsers.rejected, (state, action) => {\n        state.loading = false;\n        state.error = action.error.message || 'Failed to fetch';\n      });\n  },\n});\n\n// 组件中使用\nfunction UserList() {\n  const { users, loading, error } = useSelector((state: RootState) => state.users);\n  const dispatch = useDispatch();\n  \n  useEffect(() => {\n    dispatch(fetchUsers());\n  }, [dispatch]);\n  \n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  \n  return (\n    <ul>\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\n    </ul>\n  );\n}",
      "// Redux高级特性\nimport { createSelector } from '@reduxjs/toolkit';\n\n// 1. Selector - 派生数据\nconst selectTodos = (state: RootState) => state.todos.items;\nconst selectFilter = (state: RootState) => state.todos.filter;\n\n// 使用createSelector创建记忆化selector\nconst selectFilteredTodos = createSelector(\n  [selectTodos, selectFilter],\n  (todos, filter) => {\n    if (filter === 'completed') {\n      return todos.filter(todo => todo.completed);\n    }\n    if (filter === 'active') {\n      return todos.filter(todo => !todo.completed);\n    }\n    return todos;\n  }\n);\n\n// 2. 自定义Hooks\nimport { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';\n\nexport const useAppDispatch = () => useDispatch<AppDispatch>();\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n\n// 使用\nfunction TodoList() {\n  const filteredTodos = useAppSelector(selectFilteredTodos);\n  const dispatch = useAppDispatch();\n  \n  return <div>{/* ... */}</div>;\n}\n\n// 3. Redux中间件\nconst loggerMiddleware = (store) => (next) => (action) => {\n  console.log('dispatching', action);\n  const result = next(action);\n  console.log('next state', store.getState());\n  return result;\n};\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(loggerMiddleware),\n});\n\n// 4. 状态持久化\nimport { persistStore, persistReducer } from 'redux-persist';\nimport storage from 'redux-persist/lib/storage';\n\nconst persistConfig = {\n  key: 'root',\n  storage,\n  whitelist: ['user', 'settings'], // 只持久化指定reducer\n};\n\nconst persistedReducer = persistReducer(persistConfig, rootReducer);\nconst store = configureStore({ reducer: persistedReducer });\nconst persistor = persistStore(store);"
    ],
    resources: [
      {"name": "Redux官方文档", "url": "https://redux.js.org/"},
      {"name": "Redux Toolkit", "url": "https://redux-toolkit.js.org/"},
      {"name": "Redux中文文档", "url": "https://cn.redux.js.org/"},
      {"name": "Redux DevTools", "url": "https://github.com/reduxjs/redux-devtools"}
    ]
  },

  REST: {
    title: "REST API 设计",
    content: `REST(Representational State Transfer)是一种Web服务架构风格，使用HTTP协议进行资源操作。

## 核心原则
- **客户端-服务器分离**: 前后端独立开发
- **无状态**: 每个请求包含完整信息
- **可缓存**: 响应可被缓存提升性能
- **统一接口**: 标准化资源操作
- **分层系统**: 支持中间层(负载均衡、缓存)
- **按需代码**(可选): 服务器可返回可执行代码

## HTTP方法
- **GET**: 获取资源
- **POST**: 创建资源
- **PUT**: 完整更新资源
- **PATCH**: 部分更新资源
- **DELETE**: 删除资源
- **HEAD**: 获取响应头
- **OPTIONS**: 获取支持的方法

## URL设计
- 使用名词表示资源: \`/users\`、\`/products\`
- 复数形式: \`/users\`而非\`/user\`
- 层级关系: \`/users/{id}/posts\`
- 避免动词: 用HTTP方法表示操作
- 使用连字符: \`/user-profiles\`

## 状态码
- **2xx**: 成功(200 OK, 201 Created, 204 No Content)
- **3xx**: 重定向(301 Moved, 304 Not Modified)
- **4xx**: 客户端错误(400 Bad Request, 401 Unauthorized, 404 Not Found)
- **5xx**: 服务器错误(500 Internal Server Error, 503 Service Unavailable)

## 请求/响应格式
- Content-Type: application/json
- 请求体: JSON格式数据
- 响应体: 包含data、message、status

## 最佳实践
1. 版本控制: \`/api/v1/users\`
2. 过滤、排序、分页: 查询参数
3. HATEOAS: 响应包含相关链接
4. 错误处理: 统一错误格式
5. 认证授权: JWT、OAuth
6. 限流: 防止滥用
7. 文档: OpenAPI/Swagger`,
    examples: [
      "// REST API设计示例\n\n// 1. 资源CRUD操作\n// GET /api/v1/users - 获取用户列表\nGET /api/v1/users?page=1&limit=10&sort=createdAt:desc&filter=active\n\n// GET /api/v1/users/:id - 获取单个用户\nGET /api/v1/users/123\n\n// POST /api/v1/users - 创建用户\nPOST /api/v1/users\nContent-Type: application/json\n{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"role\": \"user\"\n}\n\n// PUT /api/v1/users/:id - 完整更新用户\nPUT /api/v1/users/123\n{\n  \"name\": \"John Smith\",\n  \"email\": \"john.smith@example.com\",\n  \"role\": \"admin\"\n}\n\n// PATCH /api/v1/users/:id - 部分更新用户\nPATCH /api/v1/users/123\n{\n  \"role\": \"admin\"\n}\n\n// DELETE /api/v1/users/:id - 删除用户\nDELETE /api/v1/users/123\n\n// 2. 嵌套资源\nGET /api/v1/users/123/posts - 获取用户的所有文章\nPOST /api/v1/users/123/posts - 为用户创建文章\nGET /api/v1/users/123/posts/456 - 获取用户的特定文章\n\n// 3. 统一响应格式\n{\n  \"success\": true,\n  \"data\": { /* 数据 */ },\n  \"message\": \"操作成功\",\n  \"timestamp\": \"2024-01-01T00:00:00Z\"\n}\n\n// 错误响应\n{\n  \"success\": false,\n  \"error\": {\n    \"code\": \"USER_NOT_FOUND\",\n    \"message\": \"用户不存在\",\n    \"details\": {}\n  },\n  \"timestamp\": \"2024-01-01T00:00:00Z\"\n}",
      "// Fetch API调用REST\nclass ApiClient {\n  private baseURL = '/api/v1';\n  private token: string | null = null;\n  \n  setToken(token: string) {\n    this.token = token;\n  }\n  \n  private async request<T>(url: string, options: RequestInit = {}): Promise<T> {\n    const headers: HeadersInit = {\n      'Content-Type': 'application/json',\n      ...(this.token && { Authorization: `Bearer ${this.token}` }),\n      ...options.headers,\n    };\n    \n    const response = await fetch(`${this.baseURL}${url}`, {\n      ...options,\n      headers,\n    });\n    \n    if (!response.ok) {\n      const error = await response.json();\n      throw new Error(error.message || 'Request failed');\n    }\n    \n    return response.json();\n  }\n  \n  // GET请求\n  async get<T>(url: string, params?: Record<string, any>): Promise<T> {\n    const queryString = params ? '?' + new URLSearchParams(params).toString() : '';\n    return this.request<T>(`${url}${queryString}`, { method: 'GET' });\n  }\n  \n  // POST请求\n  async post<T>(url: string, data: any): Promise<T> {\n    return this.request<T>(url, {\n      method: 'POST',\n      body: JSON.stringify(data),\n    });\n  }\n  \n  // PUT请求\n  async put<T>(url: string, data: any): Promise<T> {\n    return this.request<T>(url, {\n      method: 'PUT',\n      body: JSON.stringify(data),\n    });\n  }\n  \n  // PATCH请求\n  async patch<T>(url: string, data: any): Promise<T> {\n    return this.request<T>(url, {\n      method: 'PATCH',\n      body: JSON.stringify(data),\n    });\n  }\n  \n  // DELETE请求\n  async delete<T>(url: string): Promise<T> {\n    return this.request<T>(url, { method: 'DELETE' });\n  }\n}\n\n// 使用\nconst api = new ApiClient();\napi.setToken('your-jwt-token');\n\nconst users = await api.get('/users', { page: 1, limit: 10 });\nconst user = await api.post('/users', { name: 'John', email: 'john@example.com' });\nawait api.delete('/users/123');",
      "// Express.js REST API实现\nimport express from 'express';\n\nconst app = express();\napp.use(express.json());\n\n// 中间件 - 错误处理\nconst asyncHandler = (fn) => (req, res, next) => {\n  Promise.resolve(fn(req, res, next)).catch(next);\n};\n\n// GET /api/users\napp.get('/api/users', asyncHandler(async (req, res) => {\n  const { page = 1, limit = 10, sort = 'createdAt:desc' } = req.query;\n  \n  const users = await User.find()\n    .limit(limit * 1)\n    .skip((page - 1) * limit)\n    .sort(sort);\n  \n  const total = await User.countDocuments();\n  \n  res.json({\n    success: true,\n    data: {\n      users,\n      pagination: {\n        page: Number(page),\n        limit: Number(limit),\n        total,\n        pages: Math.ceil(total / limit),\n      },\n    },\n  });\n}));\n\n// POST /api/users\napp.post('/api/users', asyncHandler(async (req, res) => {\n  const user = await User.create(req.body);\n  res.status(201).json({\n    success: true,\n    data: user,\n    message: '用户创建成功',\n  });\n}));\n\n// PATCH /api/users/:id\napp.patch('/api/users/:id', asyncHandler(async (req, res) => {\n  const user = await User.findByIdAndUpdate(\n    req.params.id,\n    req.body,\n    { new: true, runValidators: true }\n  );\n  \n  if (!user) {\n    return res.status(404).json({\n      success: false,\n      error: { code: 'USER_NOT_FOUND', message: '用户不存在' },\n    });\n  }\n  \n  res.json({ success: true, data: user });\n}));\n\n// 错误处理中间件\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({\n    success: false,\n    error: {\n      message: err.message,\n      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),\n    },\n  });\n});"
    ],
    resources: [
      {"name": "RESTful API设计指南", "url": "https://restfulapi.net/"},
      {"name": "HTTP状态码", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status"},
      {"name": "REST API最佳实践", "url": "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/"},
      {"name": "OpenAPI规范", "url": "https://swagger.io/specification/"}
    ]
  },

  Security: {
    title: "前端安全",
    content: `前端安全是Web应用的重要组成部分，需要防范各种常见攻击，保护用户数据和隐私。

## 常见威胁
- **XSS(跨站脚本攻击)**: 注入恶意脚本
- **CSRF(跨站请求伪造)**: 伪造用户请求
- **SQL注入**: 数据库查询注入
- **点击劫持**: 诱导用户点击
- **中间人攻击**: 拦截网络通信
- **开放重定向**: 恶意重定向

## XSS防护
- **输入验证**: 过滤危险字符
- **输出编码**: HTML实体编码
- **CSP**: Content Security Policy
- **HttpOnly Cookie**: 防止JS访问
- **使用框架**: React自动转义

## CSRF防护
- **CSRF Token**: 随机令牌验证
- **SameSite Cookie**: 限制跨站请求
- **双重Cookie**: 验证Cookie和Header
- **验证Referer**: 检查请求来源

## 认证授权
- **JWT**: JSON Web Token
- **OAuth 2.0**: 第三方授权
- **Session**: 服务端会话
- **多因素认证**: 增强安全性

## 数据安全
- **HTTPS**: 加密传输
- **加密存储**: 敏感数据加密
- **避免明文密码**: 哈希+盐
- **定期更新依赖**: 修复安全漏洞

## 内容安全策略(CSP)
限制资源加载来源:
- script-src: 脚本来源
- style-src: 样式来源
- img-src: 图片来源
- connect-src: 连接来源

## 最佳实践
1. 使用HTTPS传输
2. 设置安全Headers
3. 输入验证和输出编码
4. 实施CSP策略
5. 定期安全审计
6. 依赖安全扫描
7. 最小权限原则
8. 安全编码培训`,
    examples: [
      "// 前端安全实践\n\n// 1. XSS防护 - 输出编码\nfunction escapeHtml(text: string): string {\n  const map: Record<string, string> = {\n    '&': '&amp;',\n    '<': '&lt;',\n    '>': '&gt;',\n    '\"': '&quot;',\n    \"'\": '&#x27;',\n    '/': '&#x2F;',\n  };\n  return text.replace(/[&<>\"'\\/]/g, (char) => map[char]);\n}\n\n// 使用\nconst userInput = '<script>alert(\"XSS\")</script>';\nconst safe = escapeHtml(userInput);\ndocument.getElementById('content')!.textContent = safe; // 使用textContent而非innerHTML\n\n// 2. DOMPurify清理HTML\nimport DOMPurify from 'dompurify';\n\nconst dirty = '<img src=x onerror=alert(1)>';\nconst clean = DOMPurify.sanitize(dirty);\ndocument.getElementById('content')!.innerHTML = clean;\n\n// 3. CSP配置\n// HTML中设置\n<meta http-equiv=\"Content-Security-Policy\" \n      content=\"default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;\">\n\n// 或通过HTTP Header\nContent-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com\n\n// 4. 安全的Cookie设置\ndocument.cookie = 'token=xxx; Secure; HttpOnly; SameSite=Strict; Max-Age=3600';\n\n// Express中设置\nres.cookie('token', token, {\n  httpOnly: true,  // 防止XSS\n  secure: true,    // 仅HTTPS\n  sameSite: 'strict', // 防止CSRF\n  maxAge: 3600000, // 1小时\n});",
      "// CSRF防护\n\n// 1. CSRF Token实现\nclass CsrfProtection {\n  private static TOKEN_KEY = 'csrf_token';\n  \n  // 生成Token\n  static generateToken(): string {\n    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))\n      .map(b => b.toString(16).padStart(2, '0'))\n      .join('');\n    sessionStorage.setItem(this.TOKEN_KEY, token);\n    return token;\n  }\n  \n  // 获取Token\n  static getToken(): string | null {\n    return sessionStorage.getItem(this.TOKEN_KEY);\n  }\n  \n  // 添加Token到请求\n  static addTokenToRequest(config: RequestInit): RequestInit {\n    const token = this.getToken();\n    if (token) {\n      return {\n        ...config,\n        headers: {\n          ...config.headers,\n          'X-CSRF-Token': token,\n        },\n      };\n    }\n    return config;\n  }\n}\n\n// 使用\nconst token = CsrfProtection.generateToken();\nfetch('/api/data', CsrfProtection.addTokenToRequest({\n  method: 'POST',\n  body: JSON.stringify({ data: 'value' }),\n}));\n\n// 2. Express后端验证\nimport csrf from 'csurf';\nconst csrfProtection = csrf({ cookie: true });\n\napp.get('/form', csrfProtection, (req, res) => {\n  res.json({ csrfToken: req.csrfToken() });\n});\n\napp.post('/submit', csrfProtection, (req, res) => {\n  // CSRF token已验证\n  res.json({ success: true });\n});\n\n// 3. SameSite Cookie\nres.cookie('session', sessionId, {\n  sameSite: 'strict', // 或 'lax'\n  secure: true,\n  httpOnly: true,\n});",
      "// 综合安全实践\n\n// 1. 安全的密码处理\nimport bcrypt from 'bcryptjs';\n\n// 哈希密码\nasync function hashPassword(password: string): Promise<string> {\n  const salt = await bcrypt.genSalt(10);\n  return bcrypt.hash(password, salt);\n}\n\n// 验证密码\nasync function verifyPassword(password: string, hash: string): Promise<boolean> {\n  return bcrypt.compare(password, hash);\n}\n\n// 2. JWT安全实践\nimport jwt from 'jsonwebtoken';\n\nconst SECRET = process.env.JWT_SECRET!;\nconst REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;\n\n// 生成短期access token和长期refresh token\nfunction generateTokens(userId: string) {\n  const accessToken = jwt.sign({ userId }, SECRET, { expiresIn: '15m' });\n  const refreshToken = jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: '7d' });\n  return { accessToken, refreshToken };\n}\n\n// 验证token\nfunction verifyToken(token: string): any {\n  try {\n    return jwt.verify(token, SECRET);\n  } catch (error) {\n    throw new Error('Invalid token');\n  }\n}\n\n// 3. 安全Headers设置\nimport helmet from 'helmet';\n\napp.use(helmet({\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: [\"'self'\"],\n      scriptSrc: [\"'self'\", \"'unsafe-inline'\"],\n      styleSrc: [\"'self'\", \"'unsafe-inline'\"],\n      imgSrc: [\"'self'\", \"data:\", \"https:\"],\n    },\n  },\n  hsts: {\n    maxAge: 31536000,\n    includeSubDomains: true,\n    preload: true,\n  },\n}));\n\n// 4. 限流防护\nimport rateLimit from 'express-rate-limit';\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15分钟\n  max: 100, // 最多100个请求\n  message: '请求过于频繁，请稍后再试',\n});\n\napp.use('/api/', limiter);\n\n// 5. 输入验证\nimport validator from 'validator';\n\nfunction validateInput(data: any) {\n  if (!validator.isEmail(data.email)) {\n    throw new Error('Invalid email');\n  }\n  if (!validator.isLength(data.password, { min: 8 })) {\n    throw new Error('Password too short');\n  }\n  // XSS防护\n  data.name = validator.escape(data.name);\n  return data;\n}"
    ],
    resources: [
      {"name": "OWASP Top 10", "url": "https://owasp.org/www-project-top-ten/"},
      {"name": "MDN Web安全", "url": "https://developer.mozilla.org/zh-CN/docs/Web/Security"},
      {"name": "CSP指南", "url": "https://content-security-policy.com/"},
      {"name": "Web安全备忘录", "url": "https://cheatsheetseries.owasp.org/"}
    ]
  },

  ServiceWorker: {
    title: "Service Worker",
    content: `Service Worker是运行在浏览器后台的脚本，独立于网页，为PWA提供离线能力、推送通知、后台同步等功能。

## 核心特性
- **独立线程**: 运行在独立的JavaScript上下文
- **事件驱动**: 响应生命周期事件
- **可编程缓存**: 完全控制资源缓存
- **拦截请求**: 代理网络请求
- **HTTPS要求**: 必须在安全环境运行
- **作用域**: 基于路径的作用域控制

## 生命周期
1. **注册(Register)**: 页面注册Service Worker
2. **安装(Install)**: 下载并安装，缓存资源
3. **激活(Activate)**: 清理旧缓存，接管页面
4. **空闲(Idle)**: 等待事件触发
5. **获取(Fetch)**: 拦截网络请求
6. **终止(Terminated)**: 空闲时自动终止

## 主要事件
- **install**: 安装时触发
- **activate**: 激活时触发
- **fetch**: 拦截请求时触发
- **message**: 接收消息时触发
- **sync**: 后台同步时触发
- **push**: 接收推送时触发

## 缓存策略
- **Cache First**: 优先缓存，失败时网络
- **Network First**: 优先网络，失败时缓存
- **Cache Only**: 仅使用缓存
- **Network Only**: 仅使用网络
- **Stale While Revalidate**: 返回缓存同时更新

## 应用场景
- 离线访问能力
- 资源预缓存
- 推送通知
- 后台数据同步
- 性能优化

## 调试工具
- Chrome DevTools: Application面板
- 查看缓存状态
- 模拟离线环境
- 更新和卸载

## 最佳实践
1. 使用skipWaiting立即激活
2. 版本化缓存名称
3. 清理旧缓存
4. 优雅降级处理
5. 避免缓存敏感数据`,
    examples: [
      "// Service Worker注册和基础生命周期\n// main.js - 注册Service Worker\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', async () => {\n    try {\n      const registration = await navigator.serviceWorker.register('/sw.js');\n      console.log('SW registered:', registration.scope);\n      \n      // 监听更新\n      registration.addEventListener('updatefound', () => {\n        const newWorker = registration.installing;\n        newWorker?.addEventListener('statechange', () => {\n          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {\n            // 新版本可用\n            console.log('New version available!');\n          }\n        });\n      });\n    } catch (error) {\n      console.error('SW registration failed:', error);\n    }\n  });\n}\n\n// sw.js - Service Worker文件\nconst CACHE_VERSION = 'v1';\nconst CACHE_NAME = `my-app-${CACHE_VERSION}`;\nconst urlsToCache = [\n  '/',\n  '/index.html',\n  '/styles/main.css',\n  '/scripts/app.js',\n  '/images/logo.png'\n];\n\n// 安装事件 - 预缓存资源\nself.addEventListener('install', (event) => {\n  console.log('SW installing...');\n  event.waitUntil(\n    caches.open(CACHE_NAME)\n      .then((cache) => cache.addAll(urlsToCache))\n      .then(() => self.skipWaiting()) // 立即激活\n  );\n});\n\n// 激活事件 - 清理旧缓存\nself.addEventListener('activate', (event) => {\n  console.log('SW activating...');\n  event.waitUntil(\n    caches.keys().then((cacheNames) => {\n      return Promise.all(\n        cacheNames\n          .filter((name) => name !== CACHE_NAME)\n          .map((name) => caches.delete(name))\n      );\n    }).then(() => self.clients.claim()) // 立即控制页面\n  );\n});",
      "// Service Worker缓存策略\n// Cache First策略\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request)\n      .then((response) => {\n        if (response) {\n          return response; // 返回缓存\n        }\n        // 网络请求并缓存\n        return fetch(event.request).then((response) => {\n          if (!response || response.status !== 200) {\n            return response;\n          }\n          const responseToCache = response.clone();\n          caches.open(CACHE_NAME).then((cache) => {\n            cache.put(event.request, responseToCache);\n          });\n          return response;\n        });\n      })\n  );\n});\n\n// Network First策略\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    fetch(event.request)\n      .then((response) => {\n        const responseToCache = response.clone();\n        caches.open(CACHE_NAME).then((cache) => {\n          cache.put(event.request, responseToCache);\n        });\n        return response;\n      })\n      .catch(() => caches.match(event.request)) // 网络失败时返回缓存\n  );\n});\n\n// Stale While Revalidate策略\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.open(CACHE_NAME).then((cache) => {\n      return cache.match(event.request).then((cachedResponse) => {\n        const fetchPromise = fetch(event.request).then((networkResponse) => {\n          cache.put(event.request, networkResponse.clone());\n          return networkResponse;\n        });\n        return cachedResponse || fetchPromise;\n      });\n    })\n  );\n});\n\n// 根据资源类型选择策略\nself.addEventListener('fetch', (event) => {\n  const { request } = event;\n  const url = new URL(request.url);\n  \n  // API请求: Network First\n  if (url.pathname.startsWith('/api/')) {\n    event.respondWith(\n      fetch(request)\n        .catch(() => caches.match(request))\n    );\n  }\n  // 静态资源: Cache First\n  else if (url.pathname.match(/\\.(css|js|png|jpg|jpeg|svg|woff2)$/)) {\n    event.respondWith(\n      caches.match(request)\n        .then((response) => response || fetch(request))\n    );\n  }\n  // 其他: Stale While Revalidate\n  else {\n    event.respondWith(\n      caches.match(request).then((cachedResponse) => {\n        const fetchPromise = fetch(request).then((networkResponse) => {\n          caches.open(CACHE_NAME).then((cache) => {\n            cache.put(request, networkResponse.clone());\n          });\n          return networkResponse;\n        });\n        return cachedResponse || fetchPromise;\n      })\n    );\n  }\n});",
      "// Service Worker高级功能\n// 后台同步\nself.addEventListener('sync', (event) => {\n  if (event.tag === 'sync-messages') {\n    event.waitUntil(syncMessages());\n  }\n});\n\nasync function syncMessages() {\n  const cache = await caches.open('pending-requests');\n  const requests = await cache.keys();\n  \n  for (const request of requests) {\n    try {\n      await fetch(request);\n      await cache.delete(request);\n    } catch (error) {\n      console.error('Sync failed:', error);\n    }\n  }\n}\n\n// 推送通知\nself.addEventListener('push', (event) => {\n  const data = event.data ? event.data.json() : {};\n  \n  const options = {\n    body: data.body || 'New notification',\n    icon: '/icon.png',\n    badge: '/badge.png',\n    vibrate: [200, 100, 200],\n    tag: data.tag || 'notification',\n    data: { url: data.url || '/' },\n    actions: [\n      { action: 'open', title: '查看' },\n      { action: 'close', title: '关闭' }\n    ]\n  };\n  \n  event.waitUntil(\n    self.registration.showNotification(data.title || 'App', options)\n  );\n});\n\n// 通知点击\nself.addEventListener('notificationclick', (event) => {\n  event.notification.close();\n  \n  if (event.action === 'open') {\n    event.waitUntil(\n      clients.openWindow(event.notification.data.url)\n    );\n  }\n});\n\n// 页面通信\nself.addEventListener('message', (event) => {\n  if (event.data.type === 'SKIP_WAITING') {\n    self.skipWaiting();\n  }\n  if (event.data.type === 'GET_VERSION') {\n    event.ports[0].postMessage({ version: CACHE_VERSION });\n  }\n});\n\n// 向所有客户端发送消息\nasync function notifyClients(message) {\n  const clients = await self.clients.matchAll();\n  clients.forEach(client => client.postMessage(message));\n}"
    ],
    resources: [
      {"name": "Service Worker API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API"},
      {"name": "Service Worker规范", "url": "https://w3c.github.io/ServiceWorker/"},
      {"name": "Workbox库", "url": "https://developers.google.com/web/tools/workbox"},
      {"name": "PWA训练营", "url": "https://web.dev/learn/pwa/"}
    ]
  },

  SSE: {
    title: "Server-Sent Events",
    content: `SSE(Server-Sent Events)是一种服务器向浏览器推送信息的技术，建立单向通信通道，适合服务器主动推送场景。

## 核心特性
- **单向通信**: 服务器→客户端
- **自动重连**: 连接断开自动重连
- **事件流**: 基于HTTP长连接
- **文本协议**: 简单的文本格式
- **浏览器原生支持**: EventSource API
- **轻量级**: 比WebSocket更简单

## 与WebSocket对比
SSE优势:
- 更简单，基于HTTP
- 自动重连机制
- 事件ID支持断点续传
- 防火墙友好

WebSocket优势:
- 双向通信
- 支持二进制数据
- 更低延迟

## 数据格式
- \`data: 消息内容\\n\\n\`
- \`event: 事件类型\\ndata: JSON数据\\n\\n\`
- \`id: 消息ID\\ndata: 内容\\n\\n\`
- \`retry: 重连间隔(ms)\\n\\n\`

## EventSource API
- \`new EventSource(url)\`: 创建连接
- \`onmessage\`: 接收消息
- \`onerror\`: 错误处理
- \`addEventListener\`: 自定义事件
- \`close()\`: 关闭连接

## 应用场景
- 实时通知推送
- 新闻订阅
- 股票行情
- 进度更新
- 日志流
- 聊天消息(单向)

## 限制
- 单向通信
- 仅支持文本
- 最大连接数限制(6个/域名)
- IE不支持(需polyfill)

## 最佳实践
1. 设置合理的重连间隔
2. 使用事件ID支持断点续传
3. 服务端设置keep-alive
4. 错误处理和降级方案
5. 连接池管理`,
    examples: [
      "// SSE客户端使用\n// 基础连接\nconst eventSource = new EventSource('/api/events');\n\n// 接收默认消息\neventSource.onmessage = (event) => {\n  console.log('Message:', event.data);\n  const data = JSON.parse(event.data);\n  // 处理数据\n};\n\n// 监听自定义事件\neventSource.addEventListener('notification', (event) => {\n  console.log('Notification:', event.data);\n});\n\neventSource.addEventListener('update', (event) => {\n  const update = JSON.parse(event.data);\n  console.log('Update:', update);\n});\n\n// 连接打开\neventSource.onopen = () => {\n  console.log('Connection opened');\n};\n\n// 错误处理\neventSource.onerror = (error) => {\n  console.error('SSE error:', error);\n  if (eventSource.readyState === EventSource.CLOSED) {\n    console.log('Connection closed');\n  }\n};\n\n// 关闭连接\nfunction closeConnection() {\n  eventSource.close();\n  console.log('Connection closed manually');\n}\n\n// React Hook封装\nimport { useEffect, useState } from 'react';\n\nfunction useSSE(url: string) {\n  const [data, setData] = useState(null);\n  const [error, setError] = useState(null);\n  const [status, setStatus] = useState('connecting');\n  \n  useEffect(() => {\n    const eventSource = new EventSource(url);\n    \n    eventSource.onopen = () => setStatus('connected');\n    \n    eventSource.onmessage = (event) => {\n      setData(JSON.parse(event.data));\n    };\n    \n    eventSource.onerror = (error) => {\n      setError(error);\n      setStatus('error');\n    };\n    \n    return () => eventSource.close();\n  }, [url]);\n  \n  return { data, error, status };\n}",
      "// SSE服务端实现(Node.js/Express)\nimport express from 'express';\n\nconst app = express();\n\n// SSE端点\napp.get('/api/events', (req, res) => {\n  // 设置SSE响应头\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  \n  // 发送初始消息\n  res.write('data: {\"message\": \"Connected\"}\\n\\n');\n  \n  // 定期发送数据\n  const intervalId = setInterval(() => {\n    const data = {\n      time: new Date().toISOString(),\n      random: Math.random()\n    };\n    res.write(`data: ${JSON.stringify(data)}\\n\\n`);\n  }, 1000);\n  \n  // 客户端断开连接时清理\n  req.on('close', () => {\n    clearInterval(intervalId);\n    console.log('Client disconnected');\n  });\n});\n\n// 发送自定义事件\napp.get('/api/notifications', (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n  \n  // 发送带事件类型的消息\n  function sendEvent(event: string, data: any, id?: number) {\n    if (id) res.write(`id: ${id}\\n`);\n    res.write(`event: ${event}\\n`);\n    res.write(`data: ${JSON.stringify(data)}\\n\\n`);\n  }\n  \n  let messageId = 0;\n  const interval = setInterval(() => {\n    sendEvent('notification', {\n      title: 'New Message',\n      body: 'You have a new notification'\n    }, ++messageId);\n  }, 5000);\n  \n  req.on('close', () => clearInterval(interval));\n});\n\napp.listen(3000, () => {\n  console.log('SSE server running on port 3000');\n});",
      "// SSE高级应用\n// 实时进度推送\napp.post('/api/process', async (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n  \n  try {\n    // 模拟长时间任务\n    for (let i = 0; i <= 100; i += 10) {\n      await new Promise(resolve => setTimeout(resolve, 500));\n      \n      res.write(`event: progress\\n`);\n      res.write(`data: ${JSON.stringify({ progress: i })}\\n\\n`);\n    }\n    \n    res.write(`event: complete\\n`);\n    res.write(`data: ${JSON.stringify({ message: 'Task completed' })}\\n\\n`);\n    res.end();\n  } catch (error) {\n    res.write(`event: error\\n`);\n    res.write(`data: ${JSON.stringify({ error: error.message })}\\n\\n`);\n    res.end();\n  }\n});\n\n// 客户端接收进度\nconst eventSource = new EventSource('/api/process', {\n  method: 'POST'\n});\n\neventSource.addEventListener('progress', (event) => {\n  const { progress } = JSON.parse(event.data);\n  console.log(`Progress: ${progress}%`);\n  updateProgressBar(progress);\n});\n\neventSource.addEventListener('complete', (event) => {\n  console.log('Task completed');\n  eventSource.close();\n});\n\neventSource.addEventListener('error', (event) => {\n  const { error } = JSON.parse(event.data);\n  console.error('Error:', error);\n  eventSource.close();\n});\n\n// 断点续传支持\nlet lastEventId = localStorage.getItem('lastEventId');\nconst url = lastEventId \n  ? `/api/events?lastEventId=${lastEventId}`\n  : '/api/events';\n\nconst es = new EventSource(url);\n\nes.onmessage = (event) => {\n  if (event.lastEventId) {\n    localStorage.setItem('lastEventId', event.lastEventId);\n  }\n  // 处理消息\n};"
    ],
    resources: [
      {"name": "SSE规范", "url": "https://html.spec.whatwg.org/multipage/server-sent-events.html"},
      {"name": "EventSource API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource"},
      {"name": "SSE vs WebSocket", "url": "https://web.dev/articles/eventsource-basics"},
      {"name": "SSE实战教程", "url": "https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html"}
    ]
  },

  SSR: {
    title: "SSR 服务端渲染",
    content: `SSR(Server-Side Rendering)在服务器端渲染页面HTML，将完整页面发送给客户端，提升首屏速度和SEO效果。

## 核心概念
- **服务端渲染**: 服务器生成完整HTML
- **客户端激活(Hydration)**: 客户端接管交互
- **同构应用**: 代码可在服务端和客户端运行
- **数据预取**: 服务端预先获取数据

## 工作流程
1. 客户端请求页面
2. 服务器执行组件代码
3. 获取数据并渲染HTML
4. 返回完整HTML
5. 客户端下载JS
6. Hydration激活应用

## 与CSR对比
SSR优势:
- 更快的首屏时间
- 更好的SEO
- 社交媒体分享预览
- 低端设备友好

CSR优势:
- 服务器压力小
- 更好的交互体验
- 开发调试简单

## 主流框架
- **Next.js**: React SSR框架
- **Nuxt.js**: Vue SSR框架
- **SvelteKit**: Svelte SSR框架
- **Remix**: React全栈框架
- **Astro**: 静态优先框架

## 渲染模式
- **SSR**: 服务端渲染
- **SSG**: 静态站点生成
- **ISR**: 增量静态再生
- **Streaming SSR**: 流式渲染

## 技术挑战
- 服务器资源消耗
- 代码需要同构
- 生命周期差异
- 第三方库兼容性
- 状态管理复杂度

## 最佳实践
1. 合理选择渲染策略
2. 缓存渲染结果
3. 代码分割和懒加载
4. 优化数据获取
5. 处理好浏览器API兼容
6. 性能监控和优化`,
    examples: [
      "// Next.js SSR示例\n// pages/posts/[id].tsx\nimport { GetServerSideProps } from 'next';\n\ninterface Post {\n  id: number;\n  title: string;\n  content: string;\n}\n\ninterface Props {\n  post: Post;\n}\n\n// 服务端渲染\nexport const getServerSideProps: GetServerSideProps<Props> = async (context) => {\n  const { id } = context.params!;\n  \n  // 服务端获取数据\n  const res = await fetch(`https://api.example.com/posts/${id}`);\n  const post = await res.json();\n  \n  return {\n    props: { post }\n  };\n};\n\n// 组件渲染\nexport default function Post({ post }: Props) {\n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <p>{post.content}</p>\n    </div>\n  );\n}\n\n// 静态生成(SSG)\nexport const getStaticProps: GetStaticProps = async () => {\n  const res = await fetch('https://api.example.com/posts');\n  const posts = await res.json();\n  \n  return {\n    props: { posts },\n    revalidate: 60 // ISR: 60秒后重新生成\n  };\n};\n\n// 动态路由预生成\nexport const getStaticPaths: GetStaticPaths = async () => {\n  const res = await fetch('https://api.example.com/posts');\n  const posts = await res.json();\n  \n  const paths = posts.map((post: Post) => ({\n    params: { id: post.id.toString() }\n  }));\n  \n  return {\n    paths,\n    fallback: 'blocking' // 未预生成的路径会SSR\n  };\n};",
      "// Vue SSR基础实现\n// server.js\nimport express from 'express';\nimport { createSSRApp } from 'vue';\nimport { renderToString } from 'vue/server-renderer';\n\nconst app = express();\n\napp.get('*', async (req, res) => {\n  // 创建Vue应用\n  const vueApp = createSSRApp({\n    data: () => ({ count: 1 }),\n    template: `\n      <div>\n        <button @click=\"count++\">{{ count }}</button>\n      </div>\n    `\n  });\n  \n  // 渲染为HTML\n  const html = await renderToString(vueApp);\n  \n  res.send(`\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Vue SSR</title>\n      </head>\n      <body>\n        <div id=\"app\">${html}</div>\n        <script src=\"/client.js\"></script>\n      </body>\n    </html>\n  `);\n});\n\napp.listen(3000);\n\n// Nuxt.js配置\n// nuxt.config.ts\nexport default defineNuxtConfig({\n  // SSR配置\n  ssr: true,\n  \n  // 路由规则\n  routeRules: {\n    '/': { prerender: true }, // 预渲染首页\n    '/api/**': { cors: true },\n    '/admin/**': { ssr: false }, // 客户端渲染\n  },\n  \n  // 性能优化\n  nitro: {\n    prerender: {\n      crawlLinks: true,\n      routes: ['/sitemap.xml']\n    }\n  }\n});\n\n// 页面组件\n<script setup lang=\"ts\">\nconst { data: post } = await useFetch(`/api/posts/${route.params.id}`);\n</script>\n\n<template>\n  <div>\n    <h1>{{ post?.title }}</h1>\n    <p>{{ post?.content }}</p>\n  </div>\n</template>",
      "// React SSR完整实现\n// server/render.tsx\nimport React from 'react';\nimport { renderToString } from 'react-dom/server';\nimport { StaticRouter } from 'react-router-dom/server';\nimport App from '../App';\n\nexport async function render(url: string) {\n  // 数据预取\n  const data = await fetchData(url);\n  \n  // 渲染应用\n  const html = renderToString(\n    <StaticRouter location={url}>\n      <App initialData={data} />\n    </StaticRouter>\n  );\n  \n  return {\n    html,\n    data\n  };\n}\n\n// server/index.ts\nimport express from 'express';\nimport { render } from './render';\n\nconst app = express();\n\napp.get('*', async (req, res) => {\n  try {\n    const { html, data } = await render(req.url);\n    \n    res.send(`\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>React SSR</title>\n          <link rel=\"stylesheet\" href=\"/styles.css\">\n        </head>\n        <body>\n          <div id=\"root\">${html}</div>\n          <script>\n            window.__INITIAL_DATA__ = ${JSON.stringify(data)};\n          </script>\n          <script src=\"/bundle.js\"></script>\n        </body>\n      </html>\n    `);\n  } catch (error) {\n    res.status(500).send('Server Error');\n  }\n});\n\n// client/index.tsx - Hydration\nimport { hydrateRoot } from 'react-dom/client';\nimport { BrowserRouter } from 'react-router-dom';\nimport App from '../App';\n\nconst initialData = window.__INITIAL_DATA__;\n\nhydrateRoot(\n  document.getElementById('root')!,\n  <BrowserRouter>\n    <App initialData={initialData} />\n  </BrowserRouter>\n);\n\n// 性能优化 - Streaming SSR\nimport { renderToPipeableStream } from 'react-dom/server';\n\napp.get('*', async (req, res) => {\n  const { pipe } = renderToPipeableStream(\n    <App />,\n    {\n      onShellReady() {\n        res.setHeader('Content-Type', 'text/html');\n        pipe(res);\n      },\n      onError(error) {\n        console.error(error);\n        res.status(500).send('Error');\n      }\n    }\n  );\n});"
    ],
    resources: [
      {"name": "Next.js文档", "url": "https://nextjs.org/docs"},
      {"name": "Nuxt.js文档", "url": "https://nuxt.com/"},
      {"name": "React SSR指南", "url": "https://react.dev/reference/react-dom/server"},
      {"name": "SSR vs SSG vs ISR", "url": "https://web.dev/rendering-on-the-web/"}
    ]
  },

  Storage: {
    title: "Web存储技术",
    content: `Web存储是浏览器提供的数据持久化机制，包括多种存储方案，满足不同场景需求。

## 存储方案对比
- **Cookie**: 4KB，自动发送到服务器，可设置过期时间
- **LocalStorage**: 5-10MB，永久存储，同步API
- **SessionStorage**: 5-10MB，标签页关闭清除，同步API
- **IndexedDB**: >50MB，NoSQL数据库，异步API
- **Cache API**: 用于Service Worker，存储HTTP响应
- **Web SQL**: 已废弃，不推荐使用

## LocalStorage
- 简单的键值对存储
- 只能存储字符串
- 同源策略限制
- 永久保存直到手动清除

## SessionStorage
- API与LocalStorage相同
- 标签页独立
- 关闭标签页数据清除
- 适合临时数据

## IndexedDB
- 事务型数据库
- 支持索引和查询
- 存储结构化数据
- 异步操作
- 支持大量数据

## Cache API
- 配合Service Worker使用
- 存储Request/Response对象
- 支持离线缓存
- 可编程的缓存策略

## 选择建议
- **简单配置**: LocalStorage/SessionStorage
- **大量数据**: IndexedDB
- **离线应用**: Cache API + IndexedDB
- **服务器通信**: Cookie
- **临时数据**: SessionStorage

## 最佳实践
1. 根据数据大小选择存储方案
2. 敏感信息加密存储
3. 定期清理过期数据
4. 处理存储空间不足
5. 使用try-catch处理错误`,
    examples: [
      "// Web Storage基础使用\n\n// 1. LocalStorage\nlocalStorage.setItem('username', 'Alice');\nlocalStorage.setItem('settings', JSON.stringify({ theme: 'dark' }));\n\nconst username = localStorage.getItem('username');\nconst settings = JSON.parse(localStorage.getItem('settings') || '{}');\n\nlocalStorage.removeItem('username');\nlocalStorage.clear(); // 清空所有\n\n// 2. SessionStorage\nsessionStorage.setItem('tempData', 'value');\nconst tempData = sessionStorage.getItem('tempData');\n\n// 3. 监听storage事件(跨标签页同步)\nwindow.addEventListener('storage', (e) => {\n  console.log('Key:', e.key);\n  console.log('Old value:', e.oldValue);\n  console.log('New value:', e.newValue);\n  console.log('URL:', e.url);\n});\n\n// 4. 存储工具类\nclass StorageUtil {\n  static set(key: string, value: any, expire?: number) {\n    const data = {\n      value,\n      expire: expire ? Date.now() + expire * 1000 : null\n    };\n    localStorage.setItem(key, JSON.stringify(data));\n  }\n  \n  static get<T>(key: string): T | null {\n    const item = localStorage.getItem(key);\n    if (!item) return null;\n    \n    try {\n      const data = JSON.parse(item);\n      if (data.expire && Date.now() > data.expire) {\n        localStorage.removeItem(key);\n        return null;\n      }\n      return data.value;\n    } catch {\n      return null;\n    }\n  }\n}",
      "// IndexedDB使用\n// 打开数据库\nfunction openDB(): Promise<IDBDatabase> {\n  return new Promise((resolve, reject) => {\n    const request = indexedDB.open('MyDatabase', 1);\n    \n    request.onerror = () => reject(request.error);\n    request.onsuccess = () => resolve(request.result);\n    \n    request.onupgradeneeded = (event) => {\n      const db = (event.target as IDBOpenDBRequest).result;\n      \n      // 创建对象存储\n      if (!db.objectStoreNames.contains('users')) {\n        const objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });\n        objectStore.createIndex('email', 'email', { unique: true });\n        objectStore.createIndex('name', 'name', { unique: false });\n      }\n    };\n  });\n}\n\n// 添加数据\nasync function addUser(user: any) {\n  const db = await openDB();\n  const transaction = db.transaction(['users'], 'readwrite');\n  const store = transaction.objectStore('users');\n  \n  return new Promise((resolve, reject) => {\n    const request = store.add(user);\n    request.onsuccess = () => resolve(request.result);\n    request.onerror = () => reject(request.error);\n  });\n}\n\n// 查询数据\nasync function getUser(id: number) {\n  const db = await openDB();\n  const transaction = db.transaction(['users'], 'readonly');\n  const store = transaction.objectStore('users');\n  \n  return new Promise((resolve, reject) => {\n    const request = store.get(id);\n    request.onsuccess = () => resolve(request.result);\n    request.onerror = () => reject(request.error);\n  });\n}\n\n// 通过索引查询\nasync function getUserByEmail(email: string) {\n  const db = await openDB();\n  const transaction = db.transaction(['users'], 'readonly');\n  const store = transaction.objectStore('users');\n  const index = store.index('email');\n  \n  return new Promise((resolve, reject) => {\n    const request = index.get(email);\n    request.onsuccess = () => resolve(request.result);\n    request.onerror = () => reject(request.error);\n  });\n}\n\n// 使用\nawait addUser({ name: 'Alice', email: 'alice@example.com' });\nconst user = await getUser(1);",
      "// Cache API使用\n// 缓存资源\nasync function cacheResources() {\n  const cache = await caches.open('my-cache-v1');\n  \n  await cache.addAll([\n    '/',\n    '/styles.css',\n    '/script.js',\n    '/image.png'\n  ]);\n}\n\n// 缓存单个请求\nasync function cacheRequest(request: Request, response: Response) {\n  const cache = await caches.open('my-cache-v1');\n  await cache.put(request, response.clone());\n}\n\n// 获取缓存\nasync function getCachedResponse(request: Request): Promise<Response | undefined> {\n  return await caches.match(request);\n}\n\n// 删除缓存\nasync function deleteCache(cacheName: string) {\n  await caches.delete(cacheName);\n}\n\n// 清理旧缓存\nasync function cleanOldCaches(currentCache: string) {\n  const cacheNames = await caches.keys();\n  await Promise.all(\n    cacheNames\n      .filter(name => name !== currentCache)\n      .map(name => caches.delete(name))\n  );\n}\n\n// React Hook封装\nimport { useState, useEffect } from 'react';\n\nfunction useLocalStorage<T>(key: string, initialValue: T) {\n  const [value, setValue] = useState<T>(() => {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch {\n      return initialValue;\n    }\n  });\n  \n  useEffect(() => {\n    try {\n      localStorage.setItem(key, JSON.stringify(value));\n    } catch (error) {\n      console.error('Storage error:', error);\n    }\n  }, [key, value]);\n  \n  return [value, setValue] as const;\n}\n\n// 使用\nconst [theme, setTheme] = useLocalStorage('theme', 'light');"
    ],
    resources: [
      {"name": "Web Storage API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API"},
      {"name": "IndexedDB API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API"},
      {"name": "Cache API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Cache"},
      {"name": "存储最佳实践", "url": "https://web.dev/storage-for-the-web/"}
    ]
  },

  Stylelint: {
    title: "Stylelint CSS检查工具",
    content: `Stylelint是一个强大的CSS代码检查工具，帮助团队统一CSS代码风格，避免错误。

## 核心特性
- **170+内置规则**: 覆盖常见CSS问题
- **可扩展**: 支持插件和自定义规则
- **自动修复**: \`--fix\`自动修复问题
- **多语言支持**: CSS、SCSS、Less、SugarSS
- **编辑器集成**: VSCode、WebStorm等
- **现代CSS**: 支持最新CSS特性

## 配置方式
- \`.stylelintrc.json\`: JSON配置
- \`.stylelintrc.js\`: JavaScript配置
- \`stylelint.config.js\`: 模块化配置
- \`package.json\`中的stylelint字段

## 常用规则
- **颜色**: 颜色格式、大小写
- **字体**: 字体名称引号
- **单位**: 禁止的单位
- **选择器**: 选择器格式、嵌套深度
- **声明**: 属性顺序、简写属性
- **空格**: 缩进、空行

## 预设配置
- **stylelint-config-standard**: 标准规则集
- **stylelint-config-recommended**: 推荐规则
- **stylelint-config-sass-guidelines**: SCSS规则
- **stylelint-config-prettier**: Prettier兼容

## 插件生态
- **stylelint-scss**: SCSS语法支持
- **stylelint-order**: 属性排序
- **stylelint-declaration-block-no-ignored-properties**: 检测无效属性
- **stylelint-high-performance-animation**: 性能优化

## 集成工具
- **Webpack**: stylelint-webpack-plugin
- **Vite**: vite-plugin-stylelint
- **VSCode**: Stylelint扩展
- **Git Hooks**: lint-staged

## 最佳实践
1. 使用标准预设配置
2. 渐进式引入规则
3. 配合Prettier格式化
4. 自动修复常见问题
5. CI/CD集成检查
6. 编辑器实时提示`,
    examples: [
      "// Stylelint配置文件\n// .stylelintrc.json\n{\n  \"extends\": [\n    \"stylelint-config-standard\",\n    \"stylelint-config-prettier\"\n  ],\n  \"plugins\": [\n    \"stylelint-order\",\n    \"stylelint-scss\"\n  ],\n  \"rules\": {\n    \"color-hex-length\": \"short\",\n    \"color-no-invalid-hex\": true,\n    \"font-family-name-quotes\": \"always-where-recommended\",\n    \"function-url-quotes\": \"always\",\n    \"number-leading-zero\": \"always\",\n    \"string-quotes\": \"single\",\n    \"length-zero-no-unit\": true,\n    \"unit-case\": \"lower\",\n    \"value-keyword-case\": \"lower\",\n    \"property-case\": \"lower\",\n    \"declaration-block-trailing-semicolon\": \"always\",\n    \"selector-pseudo-class-case\": \"lower\",\n    \"selector-type-case\": \"lower\",\n    \"max-nesting-depth\": 3,\n    \"order/properties-alphabetical-order\": true\n  },\n  \"ignoreFiles\": [\n    \"node_modules/**\",\n    \"dist/**\",\n    \"build/**\"\n  ]\n}\n\n// .stylelintrc.js (支持更复杂逻辑)\nmodule.exports = {\n  extends: ['stylelint-config-standard'],\n  rules: {\n    'color-hex-case': 'lower',\n    'color-hex-length': 'short',\n    'indentation': 2,\n    'max-empty-lines': 1,\n    'no-duplicate-selectors': true,\n    'selector-max-id': 0, // 禁止ID选择器\n  },\n};",
      "// package.json配置和脚本\n{\n  \"scripts\": {\n    \"lint:css\": \"stylelint \\\"src/**/*.{css,scss,vue}\\\"\",\n    \"lint:css:fix\": \"stylelint \\\"src/**/*.{css,scss,vue}\\\" --fix\"\n  },\n  \"devDependencies\": {\n    \"stylelint\": \"^16.0.0\",\n    \"stylelint-config-standard\": \"^36.0.0\",\n    \"stylelint-config-standard-scss\": \"^13.0.0\",\n    \"stylelint-order\": \"^6.0.0\",\n    \"stylelint-scss\": \"^6.0.0\"\n  },\n  \"lint-staged\": {\n    \"*.{css,scss,vue}\": [\n      \"stylelint --fix\"\n    ]\n  }\n}\n\n// SCSS特定配置\n{\n  \"extends\": \"stylelint-config-standard-scss\",\n  \"rules\": {\n    \"scss/at-rule-no-unknown\": true,\n    \"scss/dollar-variable-pattern\": \"^[a-z][a-zA-Z0-9]+$\",\n    \"scss/selector-no-redundant-nesting-selector\": true,\n    \"scss/at-import-partial-extension\": \"never\"\n  }\n}\n\n// VSCode配置 (.vscode/settings.json)\n{\n  \"stylelint.enable\": true,\n  \"stylelint.validate\": [\"css\", \"scss\", \"sass\", \"less\", \"vue\"],\n  \"editor.codeActionsOnSave\": {\n    \"source.fixAll.stylelint\": true\n  },\n  \"css.validate\": false,\n  \"scss.validate\": false\n}",
      "// Vite集成Stylelint\n// vite.config.ts\nimport { defineConfig } from 'vite';\nimport stylelint from 'vite-plugin-stylelint';\n\nexport default defineConfig({\n  plugins: [\n    stylelint({\n      fix: true, // 自动修复\n      include: ['src/**/*.{css,scss,vue}'],\n      exclude: ['node_modules'],\n    }),\n  ],\n});\n\n// Webpack集成\n// webpack.config.js\nconst StylelintPlugin = require('stylelint-webpack-plugin');\n\nmodule.exports = {\n  plugins: [\n    new StylelintPlugin({\n      files: 'src/**/*.{css,scss,vue}',\n      fix: true,\n    }),\n  ],\n};\n\n// 属性排序配置\n{\n  \"plugins\": [\"stylelint-order\"],\n  \"rules\": {\n    \"order/properties-order\": [\n      \"position\",\n      \"top\",\n      \"right\",\n      \"bottom\",\n      \"left\",\n      \"display\",\n      \"flex-direction\",\n      \"justify-content\",\n      \"align-items\",\n      \"width\",\n      \"height\",\n      \"margin\",\n      \"padding\",\n      \"background\",\n      \"color\",\n      \"font-size\",\n      \"font-weight\"\n    ]\n  }\n}\n\n// 自定义规则示例\nconst stylelint = require('stylelint');\n\nconst ruleName = 'my-plugin/no-foo';\nconst messages = stylelint.utils.ruleMessages(ruleName, {\n  rejected: 'Do not use foo',\n});\n\nmodule.exports = stylelint.createPlugin(ruleName, (primaryOption) => {\n  return (root, result) => {\n    root.walkDecls((decl) => {\n      if (decl.prop === 'foo') {\n        stylelint.utils.report({\n          message: messages.rejected,\n          node: decl,\n          result,\n          ruleName,\n        });\n      }\n    });\n  };\n});"
    ],
    resources: [
      {"name": "Stylelint官方文档", "url": "https://stylelint.io/"},
      {"name": "Stylelint规则列表", "url": "https://stylelint.io/user-guide/rules/"},
      {"name": "Stylelint配置", "url": "https://stylelint.io/user-guide/configure/"},
      {"name": "Awesome Stylelint", "url": "https://github.com/stylelint/awesome-stylelint"}
    ]
  },

  SVG: {
    title: "SVG 矢量图形",
    content: `SVG(Scalable Vector Graphics)是基于XML的矢量图形格式，可无损缩放，适合图标、插图、数据可视化。

## 核心优势
- **矢量图形**: 任意缩放不失真
- **文件小**: 相比位图更小
- **可编程**: JavaScript操作和动画
- **样式控制**: CSS样式化
- **SEO友好**: 文本可索引
- **交互性**: 支持事件监听

## 基本元素
- **rect**: 矩形
- **circle**: 圆形
- **ellipse**: 椭圆
- **line**: 直线
- **polyline**: 折线
- **polygon**: 多边形
- **path**: 路径(最强大)
- **text**: 文本

## Path命令
- **M**: 移动到(Move to)
- **L**: 直线到(Line to)
- **H**: 水平线
- **V**: 垂直线
- **C**: 三次贝塞尔曲线
- **Q**: 二次贝塞尔曲线
- **A**: 弧线
- **Z**: 闭合路径

## 渐变和滤镜
- **linearGradient**: 线性渐变
- **radialGradient**: 径向渐变
- **filter**: 滤镜效果
- **feGaussianBlur**: 高斯模糊
- **feDropShadow**: 阴影

## 动画
- **animate**: 属性动画
- **animateTransform**: 变换动画
- **CSS动画**: 使用CSS控制
- **JavaScript**: SMIL或Web Animations API

## 优化技巧
- 精简路径数据
- 移除无用元素
- 使用SVGO优化
- 合并路径
- 使用CSS类

## 应用场景
- 图标系统
- Logo和品牌
- 数据可视化(图表)
- 地图和地理数据
- 动画和交互
- 响应式图形`,
    examples: [
      "<!-- SVG基础图形 -->\n<svg width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- 矩形 -->\n  <rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" \n        fill=\"#4299e1\" stroke=\"#2b6cb0\" stroke-width=\"2\" />\n  \n  <!-- 圆形 -->\n  <circle cx=\"150\" cy=\"50\" r=\"40\" \n          fill=\"#48bb78\" stroke=\"#2f855a\" stroke-width=\"2\" />\n  \n  <!-- 椭圆 -->\n  <ellipse cx=\"50\" cy=\"150\" rx=\"40\" ry=\"25\" fill=\"#ed8936\" />\n  \n  <!-- 直线 -->\n  <line x1=\"100\" y1=\"100\" x2=\"200\" y2=\"100\" \n        stroke=\"#e53e3e\" stroke-width=\"2\" />\n  \n  <!-- 折线 -->\n  <polyline points=\"10,180 30,160 50,180 70,150\" \n            fill=\"none\" stroke=\"#805ad5\" stroke-width=\"2\" />\n  \n  <!-- 多边形(五角星) -->\n  <polygon points=\"150,120 160,145 187,145 165,160 175,185 150,170 125,185 135,160 113,145 140,145\" \n           fill=\"#ecc94b\" stroke=\"#d69e2e\" stroke-width=\"1\" />\n  \n  <!-- 文本 -->\n  <text x=\"10\" y=\"195\" font-family=\"Arial\" font-size=\"14\" fill=\"#2d3748\">\n    SVG Text\n  </text>\n</svg>\n\n<!-- Path路径示例 -->\n<svg width=\"200\" height=\"200\">\n  <!-- 直线路径 -->\n  <path d=\"M 10 10 L 100 10\" stroke=\"black\" fill=\"none\" />\n  \n  <!-- 贝塞尔曲线 -->\n  <path d=\"M 10 50 Q 55 10 100 50\" stroke=\"blue\" fill=\"none\" />\n  \n  <!-- 弧线 -->\n  <path d=\"M 10 100 A 40 40 0 0 1 100 100\" stroke=\"red\" fill=\"none\" />\n  \n  <!-- 复杂路径(心形) -->\n  <path d=\"M 100,150 \n           C 100,140 90,130 80,130 \n           C 70,130 60,140 60,150 \n           C 60,160 70,170 100,190 \n           C 130,170 140,160 140,150 \n           C 140,140 130,130 120,130 \n           C 110,130 100,140 100,150 Z\" \n        fill=\"#e53e3e\" />\n</svg>",
      "<!-- SVG渐变和滤镜 -->\n<svg width=\"400\" height=\"200\">\n  <defs>\n    <!-- 线性渐变 -->\n    <linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" style=\"stop-color:#667eea;stop-opacity:1\" />\n      <stop offset=\"100%\" style=\"stop-color:#764ba2;stop-opacity:1\" />\n    </linearGradient>\n    \n    <!-- 径向渐变 -->\n    <radialGradient id=\"grad2\">\n      <stop offset=\"0%\" style=\"stop-color:#ffd89b\" />\n      <stop offset=\"100%\" style=\"stop-color:#19547b\" />\n    </radialGradient>\n    \n    <!-- 高斯模糊滤镜 -->\n    <filter id=\"blur\">\n      <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"5\" />\n    </filter>\n    \n    <!-- 阴影滤镜 -->\n    <filter id=\"shadow\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\">\n      <feDropShadow dx=\"2\" dy=\"2\" stdDeviation=\"3\" flood-opacity=\"0.3\" />\n    </filter>\n  </defs>\n  \n  <!-- 使用渐变 -->\n  <rect x=\"10\" y=\"10\" width=\"150\" height=\"80\" fill=\"url(#grad1)\" />\n  <circle cx=\"250\" cy=\"50\" r=\"40\" fill=\"url(#grad2)\" />\n  \n  <!-- 使用滤镜 -->\n  <rect x=\"10\" y=\"110\" width=\"150\" height=\"80\" fill=\"#4299e1\" filter=\"url(#blur)\" />\n  <circle cx=\"250\" cy=\"150\" r=\"40\" fill=\"#48bb78\" filter=\"url(#shadow)\" />\n</svg>\n\n<!-- SVG动画 -->\n<svg width=\"200\" height=\"200\">\n  <!-- SMIL动画 -->\n  <circle cx=\"100\" cy=\"100\" r=\"20\" fill=\"#4299e1\">\n    <animate attributeName=\"r\" from=\"20\" to=\"50\" dur=\"2s\" repeatCount=\"indefinite\" />\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"2s\" repeatCount=\"indefinite\" />\n  </circle>\n  \n  <!-- 变换动画 -->\n  <rect x=\"50\" y=\"50\" width=\"100\" height=\"100\" fill=\"#48bb78\">\n    <animateTransform attributeName=\"transform\" \n                      type=\"rotate\" \n                      from=\"0 100 100\" \n                      to=\"360 100 100\" \n                      dur=\"3s\" \n                      repeatCount=\"indefinite\" />\n  </animateTransform>\n  </rect>\n</svg>",
      "// JavaScript操作SVG\n// 创建SVG元素\nfunction createSVG(width: number, height: number) {\n  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  svg.setAttribute('width', String(width));\n  svg.setAttribute('height', String(height));\n  return svg;\n}\n\n// 创建圆形\nfunction createCircle(cx: number, cy: number, r: number, fill: string) {\n  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\n  circle.setAttribute('cx', String(cx));\n  circle.setAttribute('cy', String(cy));\n  circle.setAttribute('r', String(r));\n  circle.setAttribute('fill', fill);\n  return circle;\n}\n\n// 使用\nconst svg = createSVG(400, 400);\nconst circle = createCircle(200, 200, 50, '#4299e1');\nsvg.appendChild(circle);\ndocument.body.appendChild(svg);\n\n// 添加交互\ncircle.addEventListener('click', () => {\n  circle.setAttribute('fill', '#48bb78');\n});\n\n// CSS动画\nconst style = document.createElement('style');\nstyle.textContent = `\n  @keyframes pulse {\n    0%, 100% { r: 50px; opacity: 1; }\n    50% { r: 70px; opacity: 0.5; }\n  }\n  .animated-circle {\n    animation: pulse 2s infinite;\n  }\n`;\ndocument.head.appendChild(style);\ncircle.classList.add('animated-circle');\n\n// React中使用SVG\nimport React from 'react';\n\nfunction Icon({ size = 24, color = 'currentColor' }) {\n  return (\n    <svg width={size} height={size} viewBox=\"0 0 24 24\" fill=\"none\">\n      <path d=\"M12 2L2 7v10c0 5.5 4.5 10 10 10s10-4.5 10-10V7l-10-5z\" \n            fill={color} />\n    </svg>\n  );\n}\n\n// Vue中使用SVG组件\n<template>\n  <svg :width=\"size\" :height=\"size\" viewBox=\"0 0 24 24\">\n    <circle :cx=\"12\" :cy=\"12\" :r=\"radius\" :fill=\"color\" />\n  </svg>\n</template>\n\n<script setup lang=\"ts\">\ndefineProps<{\n  size?: number;\n  radius?: number;\n  color?: string;\n}>();\n</script>"
    ],
    resources: [
      {"name": "SVG教程", "url": "https://developer.mozilla.org/zh-CN/docs/Web/SVG"},
      {"name": "SVG规范", "url": "https://www.w3.org/TR/SVG2/"},
      {"name": "SVGO优化工具", "url": "https://github.com/svg/svgo"},
      {"name": "SVG动画指南", "url": "https://css-tricks.com/guide-svg-animations-smil/"}
    ]
  },

  ThreeJS: {
    title: "Three.js 3D图形库",
    content: `Three.js是一个强大的JavaScript 3D库，简化了WebGL的使用，让Web 3D图形开发变得简单。

## 核心概念
- **Scene(场景)**: 容纳所有3D对象
- **Camera(相机)**: 观察场景的视角
- **Renderer(渲染器)**: 渲染场景到画布
- **Mesh(网格)**: Geometry + Material
- **Light(光源)**: 照亮场景

## 相机类型
- **PerspectiveCamera**: 透视相机(模拟人眼)
- **OrthographicCamera**: 正交相机(无透视)

## 几何体
- **BoxGeometry**: 立方体
- **SphereGeometry**: 球体
- **PlaneGeometry**: 平面
- **CylinderGeometry**: 圆柱
- **TorusGeometry**: 圆环
- **自定义几何体**: BufferGeometry

## 材质
- **MeshBasicMaterial**: 基础材质(不受光影响)
- **MeshLambertMaterial**: 漫反射材质
- **MeshPhongMaterial**: 高光材质
- **MeshStandardMaterial**: 标准PBR材质
- **MeshPhysicalMaterial**: 物理材质

## 光源
- **AmbientLight**: 环境光
- **DirectionalLight**: 平行光
- **PointLight**: 点光源
- **SpotLight**: 聚光灯
- **HemisphereLight**: 半球光

## 常用功能
- 模型加载(GLTF/OBJ/FBX)
- 纹理贴图
- 粒子系统
- 后处理效果
- 物理引擎集成
- VR/AR支持

## 性能优化
1. 使用BufferGeometry
2. 合并几何体
3. 实例化网格
4. LOD(细节层次)
5. 剔除不可见对象
6. 纹理压缩`,
    examples: [
      "// Three.js基础场景\nimport * as THREE from 'three';\nimport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';\n\n// 1. 创建场景\nconst scene = new THREE.Scene();\nscene.background = new THREE.Color(0x1a1a1a);\n\n// 2. 创建相机\nconst camera = new THREE.PerspectiveCamera(\n  75, // 视野角度\n  window.innerWidth / window.innerHeight, // 宽高比\n  0.1, // 近裁剪面\n  1000 // 远裁剪面\n);\ncamera.position.z = 5;\n\n// 3. 创建渲染器\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setPixelRatio(window.devicePixelRatio);\ndocument.body.appendChild(renderer.domElement);\n\n// 4. 创建几何体和材质\nconst geometry = new THREE.BoxGeometry(1, 1, 1);\nconst material = new THREE.MeshPhongMaterial({ \n  color: 0x00ff00,\n  shininess: 100 \n});\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n\n// 5. 添加光源\nconst ambientLight = new THREE.AmbientLight(0xffffff, 0.5);\nscene.add(ambientLight);\n\nconst pointLight = new THREE.PointLight(0xffffff, 1);\npointLight.position.set(5, 5, 5);\nscene.add(pointLight);\n\n// 6. 添加控制器\nconst controls = new OrbitControls(camera, renderer.domElement);\ncontrols.enableDamping = true;\n\n// 7. 动画循环\nfunction animate() {\n  requestAnimationFrame(animate);\n  \n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n  \n  controls.update();\n  renderer.render(scene, camera);\n}\nanimate();\n\n// 8. 响应式调整\nwindow.addEventListener('resize', () => {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n});",
      "// Three.js加载模型和纹理\nimport { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';\nimport { TextureLoader } from 'three';\n\n// 加载纹理\nconst textureLoader = new TextureLoader();\nconst texture = textureLoader.load('/path/to/texture.jpg');\n\nconst material = new THREE.MeshStandardMaterial({\n  map: texture, // 基础纹理\n  normalMap: textureLoader.load('/normal.jpg'), // 法线贴图\n  roughnessMap: textureLoader.load('/roughness.jpg'), // 粗糙度\n  metalnessMap: textureLoader.load('/metalness.jpg'), // 金属度\n});\n\n// 加载GLTF模型\nconst gltfLoader = new GLTFLoader();\ngltfLoader.load(\n  '/models/scene.gltf',\n  (gltf) => {\n    const model = gltf.scene;\n    model.scale.set(0.5, 0.5, 0.5);\n    model.position.set(0, 0, 0);\n    scene.add(model);\n    \n    // 播放动画\n    if (gltf.animations.length > 0) {\n      const mixer = new THREE.AnimationMixer(model);\n      gltf.animations.forEach((clip) => {\n        mixer.clipAction(clip).play();\n      });\n      \n      // 在动画循环中更新\n      function animate() {\n        requestAnimationFrame(animate);\n        mixer.update(0.016); // 60fps\n        renderer.render(scene, camera);\n      }\n    }\n  },\n  (progress) => {\n    console.log(`Loading: ${(progress.loaded / progress.total * 100)}%`);\n  },\n  (error) => {\n    console.error('Error loading model:', error);\n  }\n);\n\n// 粒子系统\nconst particlesGeometry = new THREE.BufferGeometry();\nconst particlesCount = 5000;\nconst positions = new Float32Array(particlesCount * 3);\n\nfor (let i = 0; i < particlesCount * 3; i++) {\n  positions[i] = (Math.random() - 0.5) * 10;\n}\n\nparticlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n\nconst particlesMaterial = new THREE.PointsMaterial({\n  size: 0.02,\n  color: 0xffffff,\n  transparent: true,\n  opacity: 0.8,\n});\n\nconst particles = new THREE.Points(particlesGeometry, particlesMaterial);\nscene.add(particles);",
      "// React + Three.js (React Three Fiber)\nimport { Canvas, useFrame } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nimport { useRef } from 'react';\n\nfunction Box() {\n  const meshRef = useRef<THREE.Mesh>(null);\n  \n  useFrame((state, delta) => {\n    if (meshRef.current) {\n      meshRef.current.rotation.x += delta;\n      meshRef.current.rotation.y += delta * 0.5;\n    }\n  });\n  \n  return (\n    <mesh ref={meshRef}>\n      <boxGeometry args={[1, 1, 1]} />\n      <meshStandardMaterial color=\"orange\" />\n    </mesh>\n  );\n}\n\nfunction Scene() {\n  return (\n    <Canvas camera={{ position: [0, 0, 5] }}>\n      <ambientLight intensity={0.5} />\n      <pointLight position={[10, 10, 10]} />\n      <Box />\n      <OrbitControls />\n      <Environment preset=\"sunset\" />\n    </Canvas>\n  );\n}\n\nexport default Scene;\n\n// Vue + Three.js (TresJS)\n<template>\n  <TresCanvas>\n    <TresPerspectiveCamera :position=\"[0, 0, 5]\" />\n    <TresAmbientLight :intensity=\"0.5\" />\n    <TresPointLight :position=\"[10, 10, 10]\" />\n    <TresMesh ref=\"boxRef\">\n      <TresBoxGeometry :args=\"[1, 1, 1]\" />\n      <TresMeshStandardMaterial color=\"orange\" />\n    </TresMesh>\n    <OrbitControls />\n  </TresCanvas>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\nimport { TresCanvas, useRenderLoop } from '@tresjs/core';\n\nconst boxRef = ref();\n\nuseRenderLoop().onLoop(() => {\n  if (boxRef.value) {\n    boxRef.value.rotation.x += 0.01;\n    boxRef.value.rotation.y += 0.01;\n  }\n});\n</script>"
    ],
    resources: [
      {"name": "Three.js官方文档", "url": "https://threejs.org/docs/"},
      {"name": "Three.js示例", "url": "https://threejs.org/examples/"},
      {"name": "React Three Fiber", "url": "https://docs.pmnd.rs/react-three-fiber/"},
      {"name": "Three.js Journey", "url": "https://threejs-journey.com/"}
    ]
  },

  Vercel: {
    title: "Vercel 部署平台",
    content: `Vercel是现代化的前端部署平台，专为Next.js和Jamstack应用优化，提供极速的全球部署体验。

## 核心特性
- **零配置部署**: 自动检测框架配置
- **全球CDN**: 边缘网络加速
- **即时回滚**: 一键回退到任何版本
- **预览部署**: 每个PR自动部署预览
- **无服务器函数**: Serverless Functions
- **边缘函数**: Edge Functions(更低延迟)

## 支持框架
- **Next.js**: 原生支持(Vercel开发)
- **React**: Vite、Create React App
- **Vue**: Nuxt、Vite
- **Svelte**: SvelteKit
- **其他**: Astro、Remix、Angular等

## 部署方式
1. **Git集成**: 连接GitHub/GitLab/Bitbucket
2. **CLI部署**: vercel命令行工具
3. **手动上传**: 拖拽文件夹

## 配置文件
vercel.json用于:
- 构建设置
- 路由重写
- 环境变量
- Headers配置
- 边缘函数

## Serverless Functions
- 自动扩展
- 按需执行
- 多语言支持(Node.js、Go、Python、Ruby)
- API路由

## Edge Functions
- 更快的响应时间
- 全球边缘运行
- 基于V8隔离
- 适合中间件和API

## 环境变量
- 开发/预览/生产环境
- 加密存储
- 团队共享

## 分析和监控
- Web Analytics: 性能分析
- Speed Insights: 核心指标
- 实时日志
- 错误追踪

## 最佳实践
1. 使用环境变量管理配置
2. 利用预览部署测试
3. 设置自定义域名
4. 优化构建缓存
5. 监控性能指标`,
    examples: [
      "// vercel.json配置文件\n{\n  // 构建配置\n  \"buildCommand\": \"npm run build\",\n  \"outputDirectory\": \"dist\",\n  \"installCommand\": \"npm install\",\n  \"devCommand\": \"npm run dev\",\n  \n  // 环境变量\n  \"env\": {\n    \"API_URL\": \"https://api.example.com\"\n  },\n  \n  // 路由重写\n  \"rewrites\": [\n    {\n      \"source\": \"/api/:path*\",\n      \"destination\": \"https://api.example.com/:path*\"\n    },\n    {\n      \"source\": \"/:path*\",\n      \"destination\": \"/index.html\"\n    }\n  ],\n  \n  // 重定向\n  \"redirects\": [\n    {\n      \"source\": \"/old-page\",\n      \"destination\": \"/new-page\",\n      \"permanent\": true\n    }\n  ],\n  \n  // Headers\n  \"headers\": [\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        {\n          \"key\": \"X-Frame-Options\",\n          \"value\": \"DENY\"\n        },\n        {\n          \"key\": \"X-Content-Type-Options\",\n          \"value\": \"nosniff\"\n        },\n        {\n          \"key\": \"Cache-Control\",\n          \"value\": \"public, max-age=31536000, immutable\"\n        }\n      ]\n    }\n  ],\n  \n  // 区域设置\n  \"regions\": [\"iad1\", \"sfo1\"],\n  \n  // 忽略构建\n  \"ignoreCommand\": \"git diff --quiet HEAD^ HEAD ./\"\n}",
      "// Vercel Serverless Functions\n// api/hello.ts\nimport { VercelRequest, VercelResponse } from '@vercel/node';\n\nexport default function handler(req: VercelRequest, res: VercelResponse) {\n  const { name = 'World' } = req.query;\n  \n  res.status(200).json({\n    message: `Hello, ${name}!`,\n    timestamp: new Date().toISOString(),\n  });\n}\n\n// api/users/[id].ts - 动态路由\nexport default async function handler(req: VercelRequest, res: VercelResponse) {\n  const { id } = req.query;\n  \n  if (req.method === 'GET') {\n    // 获取用户\n    const user = await fetchUser(id as string);\n    return res.status(200).json(user);\n  }\n  \n  if (req.method === 'POST') {\n    // 创建用户\n    const user = await createUser(req.body);\n    return res.status(201).json(user);\n  }\n  \n  res.status(405).json({ error: 'Method not allowed' });\n}\n\n// Edge Functions\n// middleware.ts\nimport { NextRequest, NextResponse } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  // 地理位置重定向\n  const country = request.geo?.country || 'US';\n  \n  if (country === 'CN') {\n    return NextResponse.redirect(new URL('/cn', request.url));\n  }\n  \n  // A/B测试\n  const bucket = Math.random() < 0.5 ? 'a' : 'b';\n  const response = NextResponse.next();\n  response.cookies.set('bucket', bucket);\n  \n  return response;\n}\n\nexport const config = {\n  matcher: '/',\n};",
      "// Vercel CLI使用\n// 安装CLI\n// npm i -g vercel\n\n// 登录\n// vercel login\n\n// 部署到预览环境\n// vercel\n\n// 部署到生产环境\n// vercel --prod\n\n// package.json脚本\n{\n  \"scripts\": {\n    \"deploy\": \"vercel\",\n    \"deploy:prod\": \"vercel --prod\",\n    \"dev\": \"vercel dev\"\n  }\n}\n\n// 环境变量管理\n// vercel env add API_KEY\n// vercel env pull .env.local\n\n// GitHub Actions自动部署\n// .github/workflows/deploy.yml\nname: Deploy to Vercel\n\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      \n      - name: Install Vercel CLI\n        run: npm install -g vercel\n      \n      - name: Pull Vercel Environment\n        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}\n      \n      - name: Build Project\n        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}\n      \n      - name: Deploy to Vercel\n        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}\n\n// Next.js配置优化\n// next.config.js\nmodule.exports = {\n  // 图片优化\n  images: {\n    domains: ['example.com'],\n    formats: ['image/avif', 'image/webp'],\n  },\n  \n  // ISR配置\n  async rewrites() {\n    return [\n      {\n        source: '/api/:path*',\n        destination: 'https://api.example.com/:path*',\n      },\n    ];\n  },\n  \n  // 分析打包大小\n  webpack: (config, { isServer }) => {\n    if (!isServer) {\n      config.resolve.fallback = { fs: false };\n    }\n    return config;\n  },\n};"
    ],
    resources: [
      {"name": "Vercel官方文档", "url": "https://vercel.com/docs"},
      {"name": "Vercel CLI", "url": "https://vercel.com/docs/cli"},
      {"name": "Edge Functions", "url": "https://vercel.com/docs/functions/edge-functions"},
      {"name": "Vercel模板", "url": "https://vercel.com/templates"}
    ]
  },

  WebAnimations: {
    title: "Web Animations API",
    content: `Web Animations API是浏览器原生的动画接口，结合了CSS动画的性能和JavaScript的灵活性。

## 核心优势
- **统一接口**: CSS和JS动画统一管理
- **精确控制**: 播放、暂停、倒放、速度控制
- **高性能**: 浏览器优化的动画
- **时间轴**: 完整的时间控制
- **组合动画**: 序列和并行动画

## 基本方法
- \`element.animate()\`: 创建动画
- \`animation.play()\`: 播放
- \`animation.pause()\`: 暂停
- \`animation.reverse()\`: 倒放
- \`animation.cancel()\`: 取消
- \`animation.finish()\`: 跳到结束

## 动画选项
- **duration**: 持续时间(ms)
- **delay**: 延迟(ms)
- **iterations**: 重复次数(Infinity无限)
- **direction**: 方向(normal/reverse/alternate)
- **easing**: 缓动函数
- **fill**: 填充模式(forwards/backwards/both)

## 缓动函数
- linear: 线性
- ease: 默认缓动
- ease-in: 加速
- ease-out: 减速
- ease-in-out: 先加速后减速
- cubic-bezier(): 自定义贝塞尔曲线

## 动画事件
- \`onfinish\`: 完成时触发
- \`oncancel\`: 取消时触发
- \`onremove\`: 移除时触发

## 时间轴控制
- \`currentTime\`: 当前时间
- \`playbackRate\`: 播放速率
- \`startTime\`: 开始时间
- \`playState\`: 播放状态

## 应用场景
- 复杂交互动画
- 滚动驱动动画
- 手势动画
- 路径动画
- 元素过渡

## 浏览器支持
- 现代浏览器原生支持
- Polyfill可用`,
    examples: [
      "// Web Animations API基础\n// 1. 简单动画\nconst element = document.querySelector('.box');\n\nconst animation = element.animate(\n  // 关键帧\n  [\n    { transform: 'translateX(0px)', opacity: 1 },\n    { transform: 'translateX(300px)', opacity: 0.5 },\n    { transform: 'translateX(0px)', opacity: 1 }\n  ],\n  // 选项\n  {\n    duration: 2000,\n    iterations: Infinity,\n    easing: 'ease-in-out'\n  }\n);\n\n// 2. 控制动画\nanimation.pause(); // 暂停\nanimation.play(); // 播放\nanimation.reverse(); // 倒放\nanimation.cancel(); // 取消\nanimation.finish(); // 完成\n\n// 3. 调整速度\nanimation.playbackRate = 2; // 2倍速\nanimation.playbackRate = -1; // 倒放\n\n// 4. 监听事件\nanimation.onfinish = () => {\n  console.log('Animation finished');\n};\n\nanimation.addEventListener('finish', () => {\n  console.log('Animation completed');\n});\n\n// 5. 序列动画\nasync function sequentialAnimation() {\n  await element.animate(\n    [{ opacity: 0 }, { opacity: 1 }],\n    { duration: 500, fill: 'forwards' }\n  ).finished;\n  \n  await element.animate(\n    [{ transform: 'scale(1)' }, { transform: 'scale(1.5)' }],\n    { duration: 300, fill: 'forwards' }\n  ).finished;\n  \n  console.log('All animations done');\n}\n\nsequentialAnimation();",
      "// 高级动画效果\n// 1. 路径动画\nfunction animateAlongPath() {\n  const element = document.querySelector('.box');\n  const path = document.querySelector('path');\n  const pathLength = path.getTotalLength();\n  \n  const keyframes = [];\n  const steps = 100;\n  \n  for (let i = 0; i <= steps; i++) {\n    const point = path.getPointAtLength((i / steps) * pathLength);\n    keyframes.push({\n      transform: `translate(${point.x}px, ${point.y}px)`,\n      offset: i / steps\n    });\n  }\n  \n  element.animate(keyframes, {\n    duration: 3000,\n    easing: 'ease-in-out',\n    iterations: Infinity\n  });\n}\n\n// 2. 滚动驱动动画\nfunction scrollAnimation() {\n  const element = document.querySelector('.box');\n  \n  window.addEventListener('scroll', () => {\n    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);\n    \n    element.animate(\n      [\n        { transform: 'translateX(0px)' },\n        { transform: `translateX(${scrollPercent * 500}px)` }\n      ],\n      {\n        duration: 1,\n        fill: 'forwards'\n      }\n    );\n  });\n}\n\n// 3. 弹性动画\nfunction springAnimation(element: HTMLElement) {\n  const keyframes = [];\n  const duration = 1000;\n  const steps = 60;\n  \n  for (let i = 0; i <= steps; i++) {\n    const t = i / steps;\n    // 弹性公式\n    const spring = Math.exp(-5 * t) * Math.cos(10 * Math.PI * t);\n    const scale = 1 + spring * 0.3;\n    \n    keyframes.push({\n      transform: `scale(${scale})`,\n      offset: t\n    });\n  }\n  \n  return element.animate(keyframes, {\n    duration,\n    easing: 'linear'\n  });\n}\n\n// 4. 交错动画\nfunction staggerAnimation() {\n  const items = document.querySelectorAll('.item');\n  \n  items.forEach((item, index) => {\n    item.animate(\n      [\n        { opacity: 0, transform: 'translateY(20px)' },\n        { opacity: 1, transform: 'translateY(0)' }\n      ],\n      {\n        duration: 500,\n        delay: index * 100, // 延迟递增\n        fill: 'forwards'\n      }\n    );\n  });\n}",
      "// React/Vue封装\n// React Hook\nimport { useRef, useEffect } from 'react';\n\nfunction useAnimation(keyframes: Keyframe[], options: KeyframeAnimationOptions) {\n  const ref = useRef<HTMLDivElement>(null);\n  const animationRef = useRef<Animation | null>(null);\n  \n  useEffect(() => {\n    if (ref.current) {\n      animationRef.current = ref.current.animate(keyframes, options);\n    }\n    \n    return () => {\n      animationRef.current?.cancel();\n    };\n  }, []);\n  \n  const play = () => animationRef.current?.play();\n  const pause = () => animationRef.current?.pause();\n  const reverse = () => animationRef.current?.reverse();\n  \n  return { ref, play, pause, reverse };\n}\n\n// 使用\nfunction AnimatedBox() {\n  const { ref, play, pause } = useAnimation(\n    [\n      { transform: 'rotate(0deg)' },\n      { transform: 'rotate(360deg)' }\n    ],\n    {\n      duration: 2000,\n      iterations: Infinity\n    }\n  );\n  \n  return (\n    <div>\n      <div ref={ref} style={{ width: 100, height: 100, background: 'blue' }} />\n      <button onClick={play}>Play</button>\n      <button onClick={pause}>Pause</button>\n    </div>\n  );\n}\n\n// Vue Composable\nimport { ref, onMounted, onUnmounted } from 'vue';\n\nexport function useWebAnimation(keyframes: Keyframe[], options: KeyframeAnimationOptions) {\n  const elementRef = ref<HTMLElement>();\n  let animation: Animation | null = null;\n  \n  onMounted(() => {\n    if (elementRef.value) {\n      animation = elementRef.value.animate(keyframes, options);\n    }\n  });\n  \n  onUnmounted(() => {\n    animation?.cancel();\n  });\n  \n  return {\n    elementRef,\n    play: () => animation?.play(),\n    pause: () => animation?.pause(),\n    reverse: () => animation?.reverse(),\n  };\n}"
    ],
    resources: [
      {"name": "Web Animations API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Animations_API"},
      {"name": "Animation接口", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Animation"},
      {"name": "动画示例", "url": "https://web-animations.github.io/web-animations-demos/"},
      {"name": "Polyfill", "url": "https://github.com/web-animations/web-animations-js"}
    ]
  },

  WebAssembly: {
    title: "WebAssembly 高性能Web技术",
    content: `WebAssembly(WASM)是一种低级字节码格式，允许C/C++/Rust等语言编译后在浏览器中以接近原生的速度运行。

## 核心特性
- **高性能**: 接近原生机器码的执行速度
- **可移植**: 跨平台、跨浏览器
- **安全**: 沙箱环境运行
- **紧凑**: 体积小、加载快
- **与JS互操作**: 可与JavaScript无缝交互

## 主要优势
1. CPU密集型任务加速
2. 跨语言代码复用
3. 游戏和图形渲染
4. 视频/音频处理
5. 加密和压缩算法
6. 科学计算

## 编译工具链
- **Emscripten**: C/C++转WASM
- **wasm-pack**: Rust转WASM
- **AssemblyScript**: TypeScript语法的WASM语言
- **TinyGo**: Go转WASM
- **Blazor**: C#转WASM

## WASM模块加载
- \`WebAssembly.instantiate()\`: 编译和实例化
- \`WebAssembly.compile()\`: 仅编译
- \`WebAssembly.instantiateStreaming()\`: 流式加载

## 内存管理
- 线性内存(Linear Memory)
- SharedArrayBuffer(多线程)
- 手动内存管理

## WASI
WebAssembly System Interface，允许WASM在浏览器外运行(Node.js、服务器)。

## 应用场景
- **游戏引擎**: Unity、Unreal
- **图像处理**: Photoshop Web、Figma
- **视频编辑**: CapCut Web
- **3D渲染**: AutoCAD Web
- **科学计算**: TensorFlow.js
- **数据库**: SQLite WASM

## 性能优化
1. 最小化JS-WASM边界调用
2. 使用SIMD指令
3. 多线程(Web Workers + SharedArrayBuffer)
4. 流式编译`,
    examples: [
      "// WebAssembly基础使用\n// 1. 加载和实例化WASM模块\nasync function loadWasm() {\n  // 方法1: fetch + instantiate\n  const response = await fetch('module.wasm');\n  const buffer = await response.arrayBuffer();\n  const { instance } = await WebAssembly.instantiate(buffer);\n  \n  // 调用WASM导出的函数\n  const result = instance.exports.add(5, 3);\n  console.log(result); // 8\n  \n  // 方法2: 流式加载(推荐)\n  const { instance: streamInstance } = await WebAssembly.instantiateStreaming(\n    fetch('module.wasm')\n  );\n  \n  return streamInstance;\n}\n\n// 2. 传递JavaScript函数给WASM\nconst importObject = {\n  env: {\n    // WASM可以调用这个JS函数\n    consoleLog: (arg: number) => {\n      console.log('From WASM:', arg);\n    },\n    // 提供JavaScript Math函数\n    Math_random: Math.random,\n  },\n};\n\nconst { instance } = await WebAssembly.instantiateStreaming(\n  fetch('module.wasm'),\n  importObject\n);\n\n// 3. 访问WASM内存\nconst memory = instance.exports.memory as WebAssembly.Memory;\nconst buffer = new Uint8Array(memory.buffer);\n\n// 读取WASM内存\nconst dataView = new DataView(memory.buffer);\nconst value = dataView.getInt32(0, true); // 从地址0读取int32\n\n// 写入WASM内存\ndataView.setInt32(0, 42, true);\n\n// 4. 导出多个函数\ninterface WasmExports {\n  add: (a: number, b: number) => number;\n  multiply: (a: number, b: number) => number;\n  fibonacci: (n: number) => number;\n  memory: WebAssembly.Memory;\n}\n\nconst exports = instance.exports as WasmExports;\nconsole.log(exports.add(10, 20)); // 30\nconsole.log(exports.fibonacci(10)); // 55",
      "// Rust + wasm-pack示例\n// Rust源码 (lib.rs)\n/*\nuse wasm_bindgen::prelude::*;\n\n// 导出函数给JavaScript\n#[wasm_bindgen]\npub fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\n#[wasm_bindgen]\npub fn fibonacci(n: i32) -> i32 {\n    match n {\n        0 => 0,\n        1 => 1,\n        _ => fibonacci(n - 1) + fibonacci(n - 2),\n    }\n}\n\n// 导出结构体\n#[wasm_bindgen]\npub struct Calculator {\n    value: f64,\n}\n\n#[wasm_bindgen]\nimpl Calculator {\n    #[wasm_bindgen(constructor)]\n    pub fn new() -> Calculator {\n        Calculator { value: 0.0 }\n    }\n    \n    pub fn add(&mut self, x: f64) {\n        self.value += x;\n    }\n    \n    pub fn get_value(&self) -> f64 {\n        self.value\n    }\n}\n*/\n\n// JavaScript使用\nimport init, { add, fibonacci, Calculator } from './pkg/wasm_module.js';\n\nasync function useWasm() {\n  // 初始化WASM模块\n  await init();\n  \n  // 调用函数\n  console.log(add(5, 3)); // 8\n  console.log(fibonacci(10)); // 55\n  \n  // 使用类\n  const calc = new Calculator();\n  calc.add(10);\n  calc.add(5);\n  console.log(calc.get_value()); // 15\n}\n\n// AssemblyScript示例 (TypeScript语法)\n/*\n// assembly/index.ts\nexport function add(a: i32, b: i32): i32 {\n  return a + b;\n}\n\nexport function processArray(arr: Int32Array): i32 {\n  let sum: i32 = 0;\n  for (let i = 0; i < arr.length; i++) {\n    sum += arr[i];\n  }\n  return sum;\n}\n*/\n\n// 构建命令\n// npm run asbuild\n\n// JavaScript调用\nimport { add, processArray } from './build/optimized.js';\n\nconst sum = add(5, 3);\nconst arr = new Int32Array([1, 2, 3, 4, 5]);\nconst total = processArray(arr);",
      "// 实战案例: 图像处理\n// Rust图像处理 (lib.rs)\n/*\nuse wasm_bindgen::prelude::*;\nuse wasm_bindgen::Clamped;\nuse web_sys::ImageData;\n\n#[wasm_bindgen]\npub fn grayscale(data: &mut [u8]) {\n    for chunk in data.chunks_mut(4) {\n        let avg = (chunk[0] as u32 + chunk[1] as u32 + chunk[2] as u32) / 3;\n        chunk[0] = avg as u8;\n        chunk[1] = avg as u8;\n        chunk[2] = avg as u8;\n    }\n}\n\n#[wasm_bindgen]\npub fn blur(data: &[u8], width: u32, height: u32) -> Vec<u8> {\n    // 简单的3x3模糊实现\n    let mut output = data.to_vec();\n    // ... 模糊算法\n    output\n}\n*/\n\n// TypeScript使用\nimport init, { grayscale } from './pkg/image_processor.js';\n\nclass ImageProcessor {\n  private wasmReady = false;\n  \n  async init() {\n    await init();\n    this.wasmReady = true;\n  }\n  \n  async processImage(imageData: ImageData): Promise<ImageData> {\n    if (!this.wasmReady) await this.init();\n    \n    const data = imageData.data;\n    \n    // 调用WASM进行处理\n    const start = performance.now();\n    grayscale(data);\n    const duration = performance.now() - start;\n    \n    console.log(`WASM处理耗时: ${duration}ms`);\n    \n    return new ImageData(data, imageData.width, imageData.height);\n  }\n}\n\n// Vue组件中使用\nconst processor = new ImageProcessor();\n\nconst handleImage = async (file: File) => {\n  const img = new Image();\n  img.src = URL.createObjectURL(file);\n  \n  await img.decode();\n  \n  const canvas = document.createElement('canvas');\n  canvas.width = img.width;\n  canvas.height = img.height;\n  \n  const ctx = canvas.getContext('2d')!;\n  ctx.drawImage(img, 0, 0);\n  \n  const imageData = ctx.getImageData(0, 0, img.width, img.height);\n  const processed = await processor.processImage(imageData);\n  \n  ctx.putImageData(processed, 0, 0);\n};"
    ],
    resources: [
      {"name": "WebAssembly官网", "url": "https://webassembly.org/"},
      {"name": "MDN WebAssembly", "url": "https://developer.mozilla.org/zh-CN/docs/WebAssembly"},
      {"name": "wasm-pack", "url": "https://rustwasm.github.io/wasm-pack/"},
      {"name": "AssemblyScript", "url": "https://www.assemblyscript.org/"}
    ]
  },

  WebGL: {
    title: "WebGL 3D图形API",
    content: `WebGL(Web Graphics Library)是在浏览器中渲染2D和3D图形的JavaScript API，基于OpenGL ES。

## 核心概念
- **渲染管线**: 顶点着色器 → 光栅化 → 片元着色器
- **着色器**: 用GLSL编写的GPU程序
- **缓冲区**: 存储顶点、颜色、纹理坐标等数据
- **纹理**: 贴图和图像数据
- **帧缓冲**: 离屏渲染目标

## WebGL上下文
\`\`\`javascript
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl2'); // WebGL 2.0
// 或 'webgl' for WebGL 1.0
\`\`\`

## 着色器(Shaders)
- **顶点着色器(Vertex Shader)**: 处理顶点位置
- **片元着色器(Fragment Shader)**: 处理像素颜色

## GLSL语言
- vec2, vec3, vec4: 向量类型
- mat2, mat3, mat4: 矩阵类型
- uniform: 统一变量(全局)
- attribute: 顶点属性(WebGL 1)
- varying: 着色器间传递(WebGL 1)
- in/out: 输入输出(WebGL 2)

## 渲染流程
1. 创建着色器程序
2. 准备顶点数据
3. 创建缓冲区
4. 绑定数据到着色器
5. 设置uniform变量
6. 执行绘制调用

## 绘制方法
- \`gl.drawArrays()\`: 顺序绘制
- \`gl.drawElements()\`: 索引绘制
- \`gl.TRIANGLES\`: 三角形
- \`gl.LINES\`: 线段
- \`gl.POINTS\`: 点

## WebGL 2.0新特性
- 3D纹理
- 多重渲染目标
- 采样器对象
- Transform Feedback
- 统一缓冲区对象(UBO)
- 顶点数组对象(VAO)

## 性能优化
1. 批量绘制
2. 实例化渲染
3. 纹理图集
4. 减少状态切换
5. LOD技术
6. 视锥体剔除

## 常用库
- **Three.js**: 高级3D库
- **Babylon.js**: 游戏引擎
- **PixiJS**: 2D渲染引擎
- **REGL**: 函数式WebGL`,
    examples: [
      "// WebGL基础三角形\nconst canvas = document.getElementById('canvas') as HTMLCanvasElement;\nconst gl = canvas.getContext('webgl2')!;\n\n// 顶点着色器\nconst vertexShaderSource = `#version 300 es\nin vec2 a_position;\nin vec3 a_color;\nout vec3 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_color = a_color;\n}\n`;\n\n// 片元着色器\nconst fragmentShaderSource = `#version 300 es\nprecision highp float;\nin vec3 v_color;\nout vec4 outColor;\n\nvoid main() {\n  outColor = vec4(v_color, 1.0);\n}\n`;\n\n// 编译着色器\nfunction createShader(gl: WebGL2RenderingContext, type: number, source: string) {\n  const shader = gl.createShader(type)!;\n  gl.shaderSource(shader, source);\n  gl.compileShader(shader);\n  \n  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\n    console.error(gl.getShaderInfoLog(shader));\n    gl.deleteShader(shader);\n    return null;\n  }\n  return shader;\n}\n\n// 创建程序\nconst vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)!;\nconst fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)!;\n\nconst program = gl.createProgram()!;\ngl.attachShader(program, vertexShader);\ngl.attachShader(program, fragmentShader);\ngl.linkProgram(program);\n\n// 三角形顶点数据\nconst vertices = new Float32Array([\n  // 位置(x,y)    颜色(r,g,b)\n  0.0,  0.5,      1.0, 0.0, 0.0,  // 顶点1: 红色\n  -0.5, -0.5,     0.0, 1.0, 0.0,  // 顶点2: 绿色\n  0.5, -0.5,      0.0, 0.0, 1.0,  // 顶点3: 蓝色\n]);\n\n// 创建缓冲区\nconst buffer = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, buffer);\ngl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);\n\n// 创建VAO\nconst vao = gl.createVertexArray();\ngl.bindVertexArray(vao);\n\n// 设置位置属性\nconst positionLoc = gl.getAttribLocation(program, 'a_position');\ngl.enableVertexAttribArray(positionLoc);\ngl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 20, 0);\n\n// 设置颜色属性\nconst colorLoc = gl.getAttribLocation(program, 'a_color');\ngl.enableVertexAttribArray(colorLoc);\ngl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, 20, 8);\n\n// 渲染\ngl.viewport(0, 0, canvas.width, canvas.height);\ngl.clearColor(0, 0, 0, 1);\ngl.clear(gl.COLOR_BUFFER_BIT);\ngl.useProgram(program);\ngl.bindVertexArray(vao);\ngl.drawArrays(gl.TRIANGLES, 0, 3);",
      "// WebGL纹理和变换\n// 创建纹理\nfunction createTexture(gl: WebGL2RenderingContext, image: HTMLImageElement) {\n  const texture = gl.createTexture();\n  gl.bindTexture(gl.TEXTURE_2D, texture);\n  \n  // 设置纹理参数\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n  \n  // 上传图像数据\n  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);\n  \n  return texture;\n}\n\n// 矩阵变换\nimport { mat4 } from 'gl-matrix';\n\nconst projectionMatrix = mat4.create();\nmat4.perspective(\n  projectionMatrix,\n  Math.PI / 4, // FOV\n  canvas.width / canvas.height, // 宽高比\n  0.1, // 近裁剪面\n  100.0 // 远裁剪面\n);\n\nconst modelViewMatrix = mat4.create();\nmat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -6]);\nmat4.rotate(modelViewMatrix, modelViewMatrix, rotation, [0, 1, 0]);\n\n// 传递uniform到着色器\nconst projectionLoc = gl.getUniformLocation(program, 'u_projection');\nconst modelViewLoc = gl.getUniformLocation(program, 'u_modelView');\n\ngl.uniformMatrix4fv(projectionLoc, false, projectionMatrix);\ngl.uniformMatrix4fv(modelViewLoc, false, modelViewMatrix);\n\n// 深度测试\ngl.enable(gl.DEPTH_TEST);\ngl.depthFunc(gl.LEQUAL);\n\n// 混合模式\ngl.enable(gl.BLEND);\ngl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\n\n// 动画循环\nfunction render(time: number) {\n  const rotation = time * 0.001;\n  \n  mat4.identity(modelViewMatrix);\n  mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -6]);\n  mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, [0, 1, 0]);\n  \n  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n  gl.uniformMatrix4fv(modelViewLoc, false, modelViewMatrix);\n  gl.drawElements(gl.TRIANGLES, indexCount, gl.UNSIGNED_SHORT, 0);\n  \n  requestAnimationFrame(render);\n}\nrequestAnimationFrame(render);",
      "// WebGL实例化渲染(高性能)\nconst instanceCount = 1000;\n\n// 实例位置数据\nconst offsets = new Float32Array(instanceCount * 2);\nfor (let i = 0; i < instanceCount; i++) {\n  offsets[i * 2] = Math.random() * 2 - 1;\n  offsets[i * 2 + 1] = Math.random() * 2 - 1;\n}\n\n// 创建实例缓冲区\nconst instanceBuffer = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, instanceBuffer);\ngl.bufferData(gl.ARRAY_BUFFER, offsets, gl.STATIC_DRAW);\n\n// 设置实例属性\nconst offsetLoc = gl.getAttribLocation(program, 'a_offset');\ngl.enableVertexAttribArray(offsetLoc);\ngl.vertexAttribPointer(offsetLoc, 2, gl.FLOAT, false, 0, 0);\ngl.vertexAttribDivisor(offsetLoc, 1); // 每个实例使用一次\n\n// 实例化绘制\ngl.drawArraysInstanced(gl.TRIANGLES, 0, 3, instanceCount);\n\n// 顶点着色器(带实例)\nconst instanceVertexShader = `#version 300 es\nin vec2 a_position;\nin vec2 a_offset;  // 实例偏移\nout vec3 v_color;\n\nvoid main() {\n  vec2 pos = a_position * 0.02 + a_offset;\n  gl_Position = vec4(pos, 0.0, 1.0);\n  \n  // 基于实例ID的颜色\n  float hue = float(gl_InstanceID) / float(1000) * 6.28;\n  v_color = vec3(\n    sin(hue) * 0.5 + 0.5,\n    sin(hue + 2.09) * 0.5 + 0.5,\n    sin(hue + 4.18) * 0.5 + 0.5\n  );\n}\n`;\n\n// WebGL封装类\nclass WebGLRenderer {\n  private gl: WebGL2RenderingContext;\n  private program: WebGLProgram;\n  \n  constructor(canvas: HTMLCanvasElement) {\n    this.gl = canvas.getContext('webgl2')!;\n    this.program = this.createProgram();\n  }\n  \n  private createProgram(): WebGLProgram {\n    // ... 创建着色器程序\n    return program;\n  }\n  \n  setUniform(name: string, value: any) {\n    const location = this.gl.getUniformLocation(this.program, name);\n    // 根据类型设置uniform\n    if (value instanceof Float32Array) {\n      this.gl.uniformMatrix4fv(location, false, value);\n    }\n  }\n  \n  render() {\n    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);\n    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);\n  }\n}"
    ],
    resources: [
      {"name": "WebGL官方规范", "url": "https://www.khronos.org/webgl/"},
      {"name": "MDN WebGL教程", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API"},
      {"name": "WebGL基础", "url": "https://webglfundamentals.org/"},
      {"name": "GLSL着色器", "url": "https://thebookofshaders.com/"}
    ]
  },

  WebGPU: {
    title: "WebGPU 下一代图形API",
    content: `WebGPU是新一代的Web图形API，提供比WebGL更现代、更高效的GPU访问能力，基于现代图形API(Vulkan、Metal、DirectX 12)。

## 核心优势
- **更低开销**: 更接近底层GPU
- **计算着色器**: 支持通用GPU计算(GPGPU)
- **多线程**: 更好的CPU并行能力
- **现代设计**: 基于最新图形API理念
- **更好的性能**: 减少CPU瓶颈

## 与WebGL对比
- 更明确的资源管理
- 异步设计
- 管线状态对象
- 命令缓冲和编码器
- 计算管线(WebGL不支持)

## 核心概念
- **Adapter**: GPU适配器
- **Device**: 逻辑设备
- **Queue**: 命令队列
- **Pipeline**: 渲染/计算管线
- **Shader Module**: 着色器模块
- **Buffer**: 缓冲区
- **Texture**: 纹理

## 着色语言: WGSL
WebGPU Shading Language，类似GLSL但更现代。

## 渲染流程
1. 请求Adapter和Device
2. 创建Pipeline
3. 准备缓冲区和纹理
4. 创建Command Encoder
5. 记录渲染/计算命令
6. 提交到Queue

## 计算着色器
WebGPU支持GPU通用计算:
- 图像处理
- 物理模拟
- AI推理
- 粒子系统
- 碰撞检测

## 性能特性
- **Bundle**: 可复用的命令包
- **Indirect Draw**: GPU驱动绘制
- **Query Sets**: 性能查询
- **Timestamp**: 时间测量

## 浏览器支持
- Chrome 113+ (已稳定)
- Edge 113+
- Safari (实验性)
- Firefox (开发中)

## 应用场景
- 高性能3D游戏
- 实时渲染
- 科学可视化
- 机器学习
- 视频处理
- 大规模数据处理

## 库和框架
- **Babylon.js**: 支持WebGPU
- **Three.js**: 正在集成WebGPU
- **wgpu**: Rust的WebGPU实现`,
    examples: [
      "// WebGPU基础初始化\n// 1. 获取GPU适配器和设备\nif (!navigator.gpu) {\n  throw new Error('WebGPU not supported');\n}\n\nconst adapter = await navigator.gpu.requestAdapter();\nif (!adapter) {\n  throw new Error('No GPU adapter found');\n}\n\nconst device = await adapter.requestDevice();\nconst canvas = document.getElementById('canvas') as HTMLCanvasElement;\nconst context = canvas.getContext('webgpu')!;\n\n// 配置上下文\nconst format = navigator.gpu.getPreferredCanvasFormat();\ncontext.configure({\n  device,\n  format,\n  alphaMode: 'premultiplied',\n});\n\n// 2. 创建着色器(WGSL)\nconst shaderCode = `\n@vertex\nfn vertexMain(@location(0) position: vec2f) -> @builtin(position) vec4f {\n  return vec4f(position, 0.0, 1.0);\n}\n\n@fragment\nfn fragmentMain() -> @location(0) vec4f {\n  return vec4f(1.0, 0.0, 0.0, 1.0); // 红色\n}\n`;\n\nconst shaderModule = device.createShaderModule({\n  code: shaderCode,\n});\n\n// 3. 创建渲染管线\nconst pipeline = device.createRenderPipeline({\n  layout: 'auto',\n  vertex: {\n    module: shaderModule,\n    entryPoint: 'vertexMain',\n    buffers: [\n      {\n        arrayStride: 8, // 2 floats * 4 bytes\n        attributes: [\n          {\n            shaderLocation: 0,\n            offset: 0,\n            format: 'float32x2',\n          },\n        ],\n      },\n    ],\n  },\n  fragment: {\n    module: shaderModule,\n    entryPoint: 'fragmentMain',\n    targets: [\n      {\n        format,\n      },\n    ],\n  },\n  primitive: {\n    topology: 'triangle-list',\n  },\n});\n\n// 4. 创建顶点缓冲\nconst vertices = new Float32Array([\n  0.0,  0.5,   // 顶点1\n  -0.5, -0.5,  // 顶点2\n  0.5, -0.5,   // 顶点3\n]);\n\nconst vertexBuffer = device.createBuffer({\n  size: vertices.byteLength,\n  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,\n});\n\ndevice.queue.writeBuffer(vertexBuffer, 0, vertices);\n\n// 5. 渲染\nfunction render() {\n  const commandEncoder = device.createCommandEncoder();\n  const textureView = context.getCurrentTexture().createView();\n  \n  const renderPass = commandEncoder.beginRenderPass({\n    colorAttachments: [\n      {\n        view: textureView,\n        clearValue: { r: 0, g: 0, b: 0, a: 1 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n  });\n  \n  renderPass.setPipeline(pipeline);\n  renderPass.setVertexBuffer(0, vertexBuffer);\n  renderPass.draw(3);\n  renderPass.end();\n  \n  device.queue.submit([commandEncoder.finish()]);\n  \n  requestAnimationFrame(render);\n}\n\nrender();",
      "// WebGPU计算着色器\n// 矩阵乘法示例\nconst computeShader = `\n@group(0) @binding(0) var<storage, read> matrixA: array<f32>;\n@group(0) @binding(1) var<storage, read> matrixB: array<f32>;\n@group(0) @binding(2) var<storage, read_write> result: array<f32>;\n\n@compute @workgroup_size(8, 8)\nfn main(@builtin(global_invocation_id) global_id: vec3u) {\n  let row = global_id.x;\n  let col = global_id.y;\n  let size = 256u;\n  \n  if (row >= size || col >= size) {\n    return;\n  }\n  \n  var sum = 0.0;\n  for (var i = 0u; i < size; i = i + 1u) {\n    sum = sum + matrixA[row * size + i] * matrixB[i * size + col];\n  }\n  \n  result[row * size + col] = sum;\n}\n`;\n\n// 创建计算管线\nconst computeModule = device.createShaderModule({ code: computeShader });\nconst computePipeline = device.createComputePipeline({\n  layout: 'auto',\n  compute: {\n    module: computeModule,\n    entryPoint: 'main',\n  },\n});\n\n// 准备数据\nconst matrixSize = 256;\nconst matrixA = new Float32Array(matrixSize * matrixSize).fill(1.0);\nconst matrixB = new Float32Array(matrixSize * matrixSize).fill(2.0);\n\n// 创建缓冲区\nconst createBuffer = (data: Float32Array, usage: GPUBufferUsageFlags) => {\n  const buffer = device.createBuffer({\n    size: data.byteLength,\n    usage,\n    mappedAtCreation: true,\n  });\n  new Float32Array(buffer.getMappedRange()).set(data);\n  buffer.unmap();\n  return buffer;\n};\n\nconst bufferA = createBuffer(matrixA, GPUBufferUsage.STORAGE);\nconst bufferB = createBuffer(matrixB, GPUBufferUsage.STORAGE);\nconst resultBuffer = device.createBuffer({\n  size: matrixA.byteLength,\n  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,\n});\n\n// 创建绑定组\nconst bindGroup = device.createBindGroup({\n  layout: computePipeline.getBindGroupLayout(0),\n  entries: [\n    { binding: 0, resource: { buffer: bufferA } },\n    { binding: 1, resource: { buffer: bufferB } },\n    { binding: 2, resource: { buffer: resultBuffer } },\n  ],\n});\n\n// 执行计算\nconst commandEncoder = device.createCommandEncoder();\nconst passEncoder = commandEncoder.beginComputePass();\npassEncoder.setPipeline(computePipeline);\npassEncoder.setBindGroup(0, bindGroup);\npassEncoder.dispatchWorkgroups(\n  Math.ceil(matrixSize / 8),\n  Math.ceil(matrixSize / 8)\n);\npassEncoder.end();\n\n// 读取结果\nconst readBuffer = device.createBuffer({\n  size: matrixA.byteLength,\n  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,\n});\n\ncommandEncoder.copyBufferToBuffer(resultBuffer, 0, readBuffer, 0, matrixA.byteLength);\ndevice.queue.submit([commandEncoder.finish()]);\n\nawait readBuffer.mapAsync(GPUMapMode.READ);\nconst result = new Float32Array(readBuffer.getMappedRange());\nconsole.log('计算结果:', result.slice(0, 10));\nreadBuffer.unmap();",
      "// WebGPU纹理和采样\n// 创建纹理\nconst texture = device.createTexture({\n  size: { width: 512, height: 512 },\n  format: 'rgba8unorm',\n  usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,\n});\n\n// 加载图像到纹理\nasync function loadTexture(url: string) {\n  const response = await fetch(url);\n  const blob = await response.blob();\n  const imageBitmap = await createImageBitmap(blob);\n  \n  device.queue.copyExternalImageToTexture(\n    { source: imageBitmap },\n    { texture },\n    { width: imageBitmap.width, height: imageBitmap.height }\n  );\n}\n\n// 创建采样器\nconst sampler = device.createSampler({\n  magFilter: 'linear',\n  minFilter: 'linear',\n  mipmapFilter: 'linear',\n  addressModeU: 'repeat',\n  addressModeV: 'repeat',\n});\n\n// 纹理着色器\nconst textureShader = `\nstruct VertexOutput {\n  @builtin(position) position: vec4f,\n  @location(0) texCoord: vec2f,\n}\n\n@group(0) @binding(0) var textureSampler: sampler;\n@group(0) @binding(1) var textureData: texture_2d<f32>;\n\n@vertex\nfn vertexMain(\n  @location(0) position: vec2f,\n  @location(1) texCoord: vec2f\n) -> VertexOutput {\n  var output: VertexOutput;\n  output.position = vec4f(position, 0.0, 1.0);\n  output.texCoord = texCoord;\n  return output;\n}\n\n@fragment\nfn fragmentMain(input: VertexOutput) -> @location(0) vec4f {\n  return textureSample(textureData, textureSampler, input.texCoord);\n}\n`;\n\n// React组件封装\nimport { useEffect, useRef } from 'react';\n\nfunction WebGPUCanvas() {\n  const canvasRef = useRef<HTMLCanvasElement>(null);\n  \n  useEffect(() => {\n    if (!canvasRef.current) return;\n    \n    const initWebGPU = async () => {\n      const adapter = await navigator.gpu.requestAdapter();\n      const device = await adapter!.requestDevice();\n      // ... 初始化渲染\n    };\n    \n    initWebGPU();\n  }, []);\n  \n  return <canvas ref={canvasRef} width={800} height={600} />;\n}"
    ],
    resources: [
      {"name": "WebGPU官方规范", "url": "https://www.w3.org/TR/webgpu/"},
      {"name": "WebGPU基础教程", "url": "https://webgpufundamentals.org/"},
      {"name": "MDN WebGPU", "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API"},
      {"name": "WGSL语言", "url": "https://www.w3.org/TR/WGSL/"}
    ]
  },

  WebRTC: {
    title: "WebRTC 实时通信",
    content: `WebRTC(Web Real-Time Communication)是一套支持浏览器实时音视频和数据传输的开放标准。

## 核心特性
- **点对点通信**: P2P直连,低延迟
- **音视频通话**: 高质量实时通信
- **数据通道**: 传输任意数据
- **屏幕共享**: 共享屏幕内容
- **无需插件**: 浏览器原生支持

## 三大核心API
- **MediaStream**: 获取音视频流
- **RTCPeerConnection**: P2P连接管理
- **RTCDataChannel**: 数据通道

## 连接建立流程
1. 获取本地媒体流(getUserMedia)
2. 创建RTCPeerConnection
3. 信令交换(SDP + ICE)
4. 建立P2P连接
5. 传输音视频/数据

## 信令(Signaling)
- **SDP**: 会话描述协议
- **Offer/Answer**: 协商参数
- **ICE Candidate**: 网络候选地址
- 需要独立的信令服务器(WebSocket/Socket.io)

## NAT穿透
- **STUN**: 获取公网地址
- **TURN**: 中继服务器(无法直连时)
- **ICE**: 综合连接策略

## 音视频约束
- 分辨率(width/height)
- 帧率(frameRate)
- 码率调整
- 回声消除(echoCancellation)
- 降噪(noiseSuppression)

## 数据通道
- 可靠/不可靠传输
- 有序/无序传输
- 二进制/文本数据
- 适合游戏、文件传输

## 应用场景
- 视频会议
- 在线教育
- 远程协作
- 在线客服
- 云游戏
- IoT设备通信

## 浏览器支持
全平台现代浏览器支持`,
    examples: [
      "// WebRTC基础: 获取媒体流\n// 1. 获取摄像头和麦克风\nasync function getMediaStream() {\n  try {\n    const stream = await navigator.mediaDevices.getUserMedia({\n      video: {\n        width: { ideal: 1280 },\n        height: { ideal: 720 },\n        frameRate: { ideal: 30 },\n      },\n      audio: {\n        echoCancellation: true,\n        noiseSuppression: true,\n        autoGainControl: true,\n      },\n    });\n    \n    // 显示本地视频\n    const videoElement = document.getElementById('localVideo') as HTMLVideoElement;\n    videoElement.srcObject = stream;\n    \n    return stream;\n  } catch (error) {\n    console.error('获取媒体失败:', error);\n    throw error;\n  }\n}\n\n// 2. 屏幕共享\nasync function getDisplayMedia() {\n  const stream = await navigator.mediaDevices.getDisplayMedia({\n    video: {\n      cursor: 'always', // 显示鼠标\n    },\n    audio: true, // 包含系统音频\n  });\n  return stream;\n}\n\n// 3. 切换摄像头\nasync function switchCamera(deviceId: string) {\n  const stream = await navigator.mediaDevices.getUserMedia({\n    video: { deviceId: { exact: deviceId } },\n  });\n  return stream;\n}\n\n// 4. 获取设备列表\nasync function getDevices() {\n  const devices = await navigator.mediaDevices.enumerateDevices();\n  \n  const videoDevices = devices.filter(d => d.kind === 'videoinput');\n  const audioDevices = devices.filter(d => d.kind === 'audioinput');\n  const audioOutputs = devices.filter(d => d.kind === 'audiooutput');\n  \n  return { videoDevices, audioDevices, audioOutputs };\n}\n\n// 5. 停止媒体流\nfunction stopStream(stream: MediaStream) {\n  stream.getTracks().forEach(track => {\n    track.stop();\n    console.log(`Track ${track.kind} stopped`);\n  });\n}",
      "// WebRTC点对点连接\nclass WebRTCClient {\n  private peerConnection: RTCPeerConnection | null = null;\n  private localStream: MediaStream | null = null;\n  private signalingSocket: WebSocket;\n  \n  constructor(signalingUrl: string) {\n    this.signalingSocket = new WebSocket(signalingUrl);\n    this.setupSignaling();\n  }\n  \n  // 创建对等连接\n  async createPeerConnection() {\n    const config: RTCConfiguration = {\n      iceServers: [\n        { urls: 'stun:stun.l.google.com:19302' }, // STUN服务器\n        {\n          urls: 'turn:your-turn-server.com:3478',\n          username: 'user',\n          credential: 'pass',\n        },\n      ],\n    };\n    \n    this.peerConnection = new RTCPeerConnection(config);\n    \n    // 监听ICE候选\n    this.peerConnection.onicecandidate = (event) => {\n      if (event.candidate) {\n        this.sendSignal({ type: 'ice-candidate', candidate: event.candidate });\n      }\n    };\n    \n    // 监听远程流\n    this.peerConnection.ontrack = (event) => {\n      const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;\n      remoteVideo.srcObject = event.streams[0];\n    };\n    \n    // 监听连接状态\n    this.peerConnection.onconnectionstatechange = () => {\n      console.log('连接状态:', this.peerConnection?.connectionState);\n    };\n    \n    return this.peerConnection;\n  }\n  \n  // 发起呼叫\n  async call() {\n    await this.createPeerConnection();\n    \n    // 添加本地流\n    this.localStream = await navigator.mediaDevices.getUserMedia({\n      video: true,\n      audio: true,\n    });\n    \n    this.localStream.getTracks().forEach(track => {\n      this.peerConnection!.addTrack(track, this.localStream!);\n    });\n    \n    // 创建Offer\n    const offer = await this.peerConnection!.createOffer();\n    await this.peerConnection!.setLocalDescription(offer);\n    \n    // 发送Offer\n    this.sendSignal({ type: 'offer', sdp: offer });\n  }\n  \n  // 接听呼叫\n  async answer(offer: RTCSessionDescriptionInit) {\n    await this.createPeerConnection();\n    \n    // 添加本地流\n    this.localStream = await navigator.mediaDevices.getUserMedia({\n      video: true,\n      audio: true,\n    });\n    \n    this.localStream.getTracks().forEach(track => {\n      this.peerConnection!.addTrack(track, this.localStream!);\n    });\n    \n    // 设置远程描述\n    await this.peerConnection!.setRemoteDescription(offer);\n    \n    // 创建Answer\n    const answer = await this.peerConnection!.createAnswer();\n    await this.peerConnection!.setLocalDescription(answer);\n    \n    // 发送Answer\n    this.sendSignal({ type: 'answer', sdp: answer });\n  }\n  \n  // 处理信令\n  private setupSignaling() {\n    this.signalingSocket.onmessage = async (event) => {\n      const message = JSON.parse(event.data);\n      \n      switch (message.type) {\n        case 'offer':\n          await this.answer(message.sdp);\n          break;\n        case 'answer':\n          await this.peerConnection?.setRemoteDescription(message.sdp);\n          break;\n        case 'ice-candidate':\n          await this.peerConnection?.addIceCandidate(message.candidate);\n          break;\n      }\n    };\n  }\n  \n  private sendSignal(message: any) {\n    this.signalingSocket.send(JSON.stringify(message));\n  }\n  \n  // 挂断\n  hangup() {\n    this.localStream?.getTracks().forEach(track => track.stop());\n    this.peerConnection?.close();\n    this.peerConnection = null;\n  }\n}",
      "// WebRTC数据通道\n// 创建数据通道\nconst peerConnection = new RTCPeerConnection();\nconst dataChannel = peerConnection.createDataChannel('chat', {\n  ordered: true, // 有序传输\n  maxRetransmits: 3, // 最大重传次数\n});\n\n// 监听数据通道事件\ndataChannel.onopen = () => {\n  console.log('数据通道已打开');\n  dataChannel.send('Hello!');\n};\n\ndataChannel.onmessage = (event) => {\n  console.log('收到消息:', event.data);\n};\n\ndataChannel.onerror = (error) => {\n  console.error('数据通道错误:', error);\n};\n\ndataChannel.onclose = () => {\n  console.log('数据通道已关闭');\n};\n\n// 接收方监听数据通道\npeerConnection.ondatachannel = (event) => {\n  const receiveChannel = event.channel;\n  \n  receiveChannel.onmessage = (e) => {\n    console.log('收到数据:', e.data);\n  };\n};\n\n// 文件传输\nasync function sendFile(file: File, dataChannel: RTCDataChannel) {\n  const chunkSize = 16384; // 16KB\n  const arrayBuffer = await file.arrayBuffer();\n  \n  // 发送文件元数据\n  dataChannel.send(JSON.stringify({\n    type: 'file-meta',\n    name: file.name,\n    size: file.size,\n    type: file.type,\n  }));\n  \n  // 分块发送\n  for (let offset = 0; offset < arrayBuffer.byteLength; offset += chunkSize) {\n    const chunk = arrayBuffer.slice(offset, offset + chunkSize);\n    dataChannel.send(chunk);\n    \n    // 等待缓冲区\n    if (dataChannel.bufferedAmount > chunkSize * 10) {\n      await new Promise(resolve => {\n        const checkBuffer = () => {\n          if (dataChannel.bufferedAmount < chunkSize * 5) {\n            resolve(null);\n          } else {\n            setTimeout(checkBuffer, 100);\n          }\n        };\n        checkBuffer();\n      });\n    }\n  }\n  \n  dataChannel.send(JSON.stringify({ type: 'file-end' }));\n}\n\n// Vue组合式API封装\nimport { ref, onUnmounted } from 'vue';\n\nexport function useWebRTC() {\n  const localStream = ref<MediaStream | null>(null);\n  const remoteStream = ref<MediaStream | null>(null);\n  const peerConnection = ref<RTCPeerConnection | null>(null);\n  \n  const startCall = async () => {\n    localStream.value = await navigator.mediaDevices.getUserMedia({\n      video: true,\n      audio: true,\n    });\n    \n    peerConnection.value = new RTCPeerConnection();\n    // ... 设置连接\n  };\n  \n  const hangup = () => {\n    localStream.value?.getTracks().forEach(track => track.stop());\n    peerConnection.value?.close();\n  };\n  \n  onUnmounted(() => {\n    hangup();\n  });\n  \n  return {\n    localStream,\n    remoteStream,\n    startCall,\n    hangup,\n  };\n}"
    ],
    resources: [
      {"name": "MDN WebRTC API", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API"},
      {"name": "WebRTC官网", "url": "https://webrtc.org/"},
      {"name": "WebRTC示例", "url": "https://webrtc.github.io/samples/"},
      {"name": "Simple-peer库", "url": "https://github.com/feross/simple-peer"}
    ]
  },

  WebSocket: {
    title: "WebSocket 双向通信",
    content: `WebSocket是HTML5提供的一种浏览器与服务器全双工通信协议，建立在TCP之上。

## 核心特性
- **全双工通信**: 客户端和服务器可同时发送
- **持久连接**: 一次握手，长期保持
- **低延迟**: 无HTTP头开销
- **实时性**: 消息即时推送
- **协议升级**: 从HTTP升级到WebSocket

## 连接建立
1. 客户端发起HTTP请求
2. 服务器返回101状态码(协议切换)
3. 升级为WebSocket连接
4. 开始双向通信

## 连接状态
- **CONNECTING (0)**: 正在连接
- **OPEN (1)**: 已连接,可通信
- **CLOSING (2)**: 正在关闭
- **CLOSED (3)**: 已关闭

## WebSocket事件
- **onopen**: 连接建立
- **onmessage**: 收到消息
- **onerror**: 发生错误
- **onclose**: 连接关闭

## 数据格式
- 文本消息(UTF-8字符串)
- 二进制消息(ArrayBuffer/Blob)
- 支持分片传输

## 与HTTP对比
| 特性 | HTTP | WebSocket |
|------|------|-----------|
| 通信方式 | 半双工 | 全双工 |
| 连接 | 短连接 | 长连接 |
| 开销 | 每次请求带头 | 握手后无头 |
| 实时性 | 轮询/长轮询 | 消息推送 |

## 应用场景
- 实时聊天
- 在线游戏
- 股票行情
- 协同编辑
- 消息推送
- 直播弹幕
- IoT设备

## 心跳机制
保持连接活跃,检测连接状态。

## 重连策略
- 指数退避
- 最大重试次数
- 连接状态管理

## 安全性
- wss:// (WebSocket Secure)
- Token认证
- 消息加密
- 防止CSRF`,
    examples: [
      "// WebSocket基础使用\n// 1. 创建连接\nconst ws = new WebSocket('ws://localhost:8080');\n\n// 或使用安全连接\nconst wss = new WebSocket('wss://example.com/socket');\n\n// 2. 监听事件\nws.onopen = (event) => {\n  console.log('WebSocket连接已建立');\n  ws.send('Hello Server!');\n};\n\nws.onmessage = (event) => {\n  console.log('收到消息:', event.data);\n  \n  // 处理不同类型的数据\n  if (typeof event.data === 'string') {\n    const message = JSON.parse(event.data);\n    console.log('JSON消息:', message);\n  } else if (event.data instanceof Blob) {\n    // 处理二进制数据\n    event.data.arrayBuffer().then(buffer => {\n      console.log('二进制数据:', buffer);\n    });\n  }\n};\n\nws.onerror = (error) => {\n  console.error('WebSocket错误:', error);\n};\n\nws.onclose = (event) => {\n  console.log('连接已关闭', event.code, event.reason);\n  \n  // 关闭码\n  // 1000: 正常关闭\n  // 1001: 端点离开\n  // 1006: 异常关闭\n};\n\n// 3. 发送消息\nfunction sendMessage(data: any) {\n  if (ws.readyState === WebSocket.OPEN) {\n    // 发送文本\n    ws.send(JSON.stringify(data));\n    \n    // 发送二进制\n    const arrayBuffer = new ArrayBuffer(8);\n    ws.send(arrayBuffer);\n    \n    // 发送Blob\n    const blob = new Blob(['Hello'], { type: 'text/plain' });\n    ws.send(blob);\n  } else {\n    console.warn('WebSocket未连接');\n  }\n}\n\n// 4. 关闭连接\nfunction closeConnection() {\n  ws.close(1000, '正常关闭');\n}",
      "// WebSocket封装类\nclass WebSocketClient {\n  private ws: WebSocket | null = null;\n  private url: string;\n  private reconnectAttempts = 0;\n  private maxReconnectAttempts = 5;\n  private reconnectInterval = 1000;\n  private heartbeatInterval: number | null = null;\n  private messageHandlers: Map<string, Function[]> = new Map();\n  \n  constructor(url: string) {\n    this.url = url;\n  }\n  \n  connect() {\n    this.ws = new WebSocket(this.url);\n    \n    this.ws.onopen = () => {\n      console.log('WebSocket已连接');\n      this.reconnectAttempts = 0;\n      this.startHeartbeat();\n      this.emit('open');\n    };\n    \n    this.ws.onmessage = (event) => {\n      try {\n        const message = JSON.parse(event.data);\n        \n        // 处理心跳响应\n        if (message.type === 'pong') {\n          return;\n        }\n        \n        // 触发消息处理器\n        this.emit('message', message);\n        \n        // 触发特定类型的处理器\n        if (message.type) {\n          this.emit(message.type, message.data);\n        }\n      } catch (error) {\n        console.error('消息解析错误:', error);\n      }\n    };\n    \n    this.ws.onerror = (error) => {\n      console.error('WebSocket错误:', error);\n      this.emit('error', error);\n    };\n    \n    this.ws.onclose = (event) => {\n      console.log('WebSocket已关闭');\n      this.stopHeartbeat();\n      this.emit('close', event);\n      \n      // 自动重连\n      if (this.reconnectAttempts < this.maxReconnectAttempts) {\n        this.reconnect();\n      }\n    };\n  }\n  \n  // 重连机制\n  private reconnect() {\n    this.reconnectAttempts++;\n    const delay = Math.min(\n      this.reconnectInterval * Math.pow(2, this.reconnectAttempts),\n      30000\n    );\n    \n    console.log(`${delay}ms后尝试第${this.reconnectAttempts}次重连...`);\n    \n    setTimeout(() => {\n      this.connect();\n    }, delay);\n  }\n  \n  // 心跳机制\n  private startHeartbeat() {\n    this.heartbeatInterval = window.setInterval(() => {\n      if (this.ws?.readyState === WebSocket.OPEN) {\n        this.send({ type: 'ping' });\n      }\n    }, 30000); // 30秒心跳\n  }\n  \n  private stopHeartbeat() {\n    if (this.heartbeatInterval) {\n      clearInterval(this.heartbeatInterval);\n      this.heartbeatInterval = null;\n    }\n  }\n  \n  // 发送消息\n  send(data: any) {\n    if (this.ws?.readyState === WebSocket.OPEN) {\n      this.ws.send(JSON.stringify(data));\n    } else {\n      console.warn('WebSocket未连接,消息未发送:', data);\n    }\n  }\n  \n  // 事件监听\n  on(event: string, handler: Function) {\n    if (!this.messageHandlers.has(event)) {\n      this.messageHandlers.set(event, []);\n    }\n    this.messageHandlers.get(event)!.push(handler);\n  }\n  \n  // 触发事件\n  private emit(event: string, data?: any) {\n    const handlers = this.messageHandlers.get(event);\n    if (handlers) {\n      handlers.forEach(handler => handler(data));\n    }\n  }\n  \n  // 关闭连接\n  close() {\n    this.maxReconnectAttempts = 0; // 阻止重连\n    this.ws?.close(1000, '客户端主动关闭');\n  }\n}\n\n// 使用示例\nconst client = new WebSocketClient('ws://localhost:8080');\nclient.connect();\n\nclient.on('open', () => {\n  console.log('连接成功');\n  client.send({ type: 'join', room: 'chat-room' });\n});\n\nclient.on('message', (msg) => {\n  console.log('新消息:', msg);\n});\n\nclient.on('chat', (data) => {\n  console.log('聊天消息:', data);\n});",
      "// Vue 3 WebSocket Composable\nimport { ref, onMounted, onUnmounted } from 'vue';\n\nexport function useWebSocket(url: string) {\n  const ws = ref<WebSocket | null>(null);\n  const isConnected = ref(false);\n  const messages = ref<any[]>([]);\n  const lastMessage = ref<any>(null);\n  \n  const connect = () => {\n    ws.value = new WebSocket(url);\n    \n    ws.value.onopen = () => {\n      isConnected.value = true;\n      console.log('WebSocket连接成功');\n    };\n    \n    ws.value.onmessage = (event) => {\n      const message = JSON.parse(event.data);\n      messages.value.push(message);\n      lastMessage.value = message;\n    };\n    \n    ws.value.onclose = () => {\n      isConnected.value = false;\n      console.log('WebSocket连接关闭');\n    };\n    \n    ws.value.onerror = (error) => {\n      console.error('WebSocket错误:', error);\n    };\n  };\n  \n  const send = (data: any) => {\n    if (ws.value?.readyState === WebSocket.OPEN) {\n      ws.value.send(JSON.stringify(data));\n    }\n  };\n  \n  const close = () => {\n    ws.value?.close();\n  };\n  \n  onMounted(() => {\n    connect();\n  });\n  \n  onUnmounted(() => {\n    close();\n  });\n  \n  return {\n    isConnected,\n    messages,\n    lastMessage,\n    send,\n    close,\n  };\n}\n\n// 组件中使用\n// <script setup lang=\"ts\">\n// const { isConnected, messages, send } = useWebSocket('ws://localhost:8080');\n// \n// const sendMessage = () => {\n//   send({ type: 'chat', text: 'Hello!' });\n// };\n// </script>\n\n// React Hook\nimport { useState, useEffect, useRef } from 'react';\n\nexport function useWebSocketReact(url: string) {\n  const [isConnected, setIsConnected] = useState(false);\n  const [messages, setMessages] = useState<any[]>([]);\n  const ws = useRef<WebSocket | null>(null);\n  \n  useEffect(() => {\n    ws.current = new WebSocket(url);\n    \n    ws.current.onopen = () => setIsConnected(true);\n    ws.current.onmessage = (event) => {\n      const message = JSON.parse(event.data);\n      setMessages(prev => [...prev, message]);\n    };\n    ws.current.onclose = () => setIsConnected(false);\n    \n    return () => {\n      ws.current?.close();\n    };\n  }, [url]);\n  \n  const send = (data: any) => {\n    if (ws.current?.readyState === WebSocket.OPEN) {\n      ws.current.send(JSON.stringify(data));\n    }\n  };\n  \n  return { isConnected, messages, send };\n}"
    ],
    resources: [
      {"name": "MDN WebSocket", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket"},
      {"name": "WebSocket协议", "url": "https://datatracker.ietf.org/doc/html/rfc6455"},
      {"name": "Socket.IO", "url": "https://socket.io/"},
      {"name": "ws库(Node.js)", "url": "https://github.com/websockets/ws"}
    ]
  },

  WebWorker: {
    title: "Web Workers 多线程",
    content: `Web Workers允许在后台线程运行JavaScript,避免阻塞主线程,提升应用性能。

## 核心特性
- **独立线程**: 运行在后台线程
- **不阻塞UI**: 主线程继续响应
- **消息通信**: 通过postMessage交互
- **无DOM访问**: 不能操作DOM
- **模块化**: 支持ES Modules

## Worker类型
- **Dedicated Worker**: 专用Worker(单页面)
- **Shared Worker**: 共享Worker(多页面/iframe)
- **Service Worker**: 服务Worker(PWA/离线)

## 使用场景
- 复杂计算(加密/解密)
- 数据处理(大文件解析)
- 图像/视频处理
- 后台数据同步
- WebSocket管理
- 游戏物理引擎

## Worker限制
- 无法访问DOM
- 无法访问window对象
- 不能使用alert/confirm
- 可访问navigator、location(只读)
- 可使用XMLHttpRequest、fetch

## 消息传递
- **postMessage()**: 发送消息
- **onmessage**: 接收消息
- **Transferable Objects**: 转移所有权(零拷贝)

## 终止Worker
- **worker.terminate()**: 主线程终止
- **self.close()**: Worker内部关闭

## SharedWorker
多个页面共享同一个Worker实例。

## 模块化Worker
支持import语法和ES Modules。

## 性能优化
1. 使用Transferable Objects
2. 批量处理消息
3. Worker池管理
4. 避免频繁创建/销毁

## 调试
Chrome DevTools支持Worker调试。`,
    examples: [
      "// Web Worker基础使用\n// 主线程 (main.js)\nconst worker = new Worker('worker.js');\n\n// 发送消息给Worker\nworker.postMessage({ type: 'calculate', data: [1, 2, 3, 4, 5] });\n\n// 接收Worker的消息\nworker.onmessage = (event) => {\n  console.log('Worker返回:', event.data);\n  // { result: 15 }\n};\n\n// 错误处理\nworker.onerror = (error) => {\n  console.error('Worker错误:', error.message);\n};\n\n// 终止Worker\nworker.terminate();\n\n// Worker文件 (worker.js)\nself.onmessage = (event) => {\n  const { type, data } = event.data;\n  \n  if (type === 'calculate') {\n    // 执行复杂计算\n    const result = data.reduce((sum: number, n: number) => sum + n, 0);\n    \n    // 返回结果\n    self.postMessage({ result });\n  }\n};\n\n// Transferable Objects (零拷贝传输)\nconst arrayBuffer = new ArrayBuffer(1024 * 1024); // 1MB\nconst uint8Array = new Uint8Array(arrayBuffer);\n\n// 转移所有权(主线程不再能访问)\nworker.postMessage({ buffer: arrayBuffer }, [arrayBuffer]);\n\nconsole.log(arrayBuffer.byteLength); // 0, 已转移\n\n// Worker内部\nself.onmessage = (event) => {\n  const buffer = event.data.buffer;\n  const array = new Uint8Array(buffer);\n  \n  // 处理数据...\n  \n  // 返回时也可以转移\n  self.postMessage({ result: buffer }, [buffer]);\n};",
      "// 高级Worker封装\n// worker-pool.ts - Worker池管理\nclass WorkerPool {\n  private workers: Worker[] = [];\n  private taskQueue: any[] = [];\n  private activeWorkers = 0;\n  \n  constructor(\n    private workerScript: string,\n    private poolSize: number = navigator.hardwareConcurrency || 4\n  ) {\n    this.initWorkers();\n  }\n  \n  private initWorkers() {\n    for (let i = 0; i < this.poolSize; i++) {\n      const worker = new Worker(this.workerScript);\n      this.workers.push(worker);\n    }\n  }\n  \n  async runTask<T>(data: any): Promise<T> {\n    return new Promise((resolve, reject) => {\n      const task = { data, resolve, reject };\n      \n      const availableWorker = this.getAvailableWorker();\n      if (availableWorker) {\n        this.executeTask(availableWorker, task);\n      } else {\n        this.taskQueue.push(task);\n      }\n    });\n  }\n  \n  private getAvailableWorker(): Worker | null {\n    if (this.activeWorkers < this.poolSize) {\n      return this.workers[this.activeWorkers];\n    }\n    return null;\n  }\n  \n  private executeTask(worker: Worker, task: any) {\n    this.activeWorkers++;\n    \n    const messageHandler = (event: MessageEvent) => {\n      task.resolve(event.data);\n      this.activeWorkers--;\n      worker.removeEventListener('message', messageHandler);\n      \n      // 处理队列中的下一个任务\n      if (this.taskQueue.length > 0) {\n        const nextTask = this.taskQueue.shift();\n        this.executeTask(worker, nextTask);\n      }\n    };\n    \n    const errorHandler = (error: ErrorEvent) => {\n      task.reject(error);\n      this.activeWorkers--;\n      worker.removeEventListener('error', errorHandler);\n    };\n    \n    worker.addEventListener('message', messageHandler);\n    worker.addEventListener('error', errorHandler);\n    worker.postMessage(task.data);\n  }\n  \n  terminate() {\n    this.workers.forEach(worker => worker.terminate());\n    this.workers = [];\n  }\n}\n\n// 使用Worker池\nconst pool = new WorkerPool('calculator.worker.js', 4);\n\nasync function processLargeDataset(data: number[][]) {\n  const results = await Promise.all(\n    data.map(chunk => pool.runTask({ type: 'process', data: chunk }))\n  );\n  return results;\n}\n\n// Module Worker (ES Modules)\nconst moduleWorker = new Worker('worker.js', { type: 'module' });\n\n// worker.js (ES Module)\n/*\nimport { processData } from './utils.js';\n\nself.onmessage = (event) => {\n  const result = processData(event.data);\n  self.postMessage(result);\n};\n*/",
      "// 实战案例: 图像处理Worker\n// image-processor.worker.ts\nself.onmessage = (event) => {\n  const { type, imageData } = event.data;\n  \n  switch (type) {\n    case 'grayscale':\n      grayscale(imageData);\n      break;\n    case 'blur':\n      blur(imageData);\n      break;\n    case 'brightness':\n      brightness(imageData, event.data.value);\n      break;\n  }\n  \n  self.postMessage({ imageData }, [imageData.data.buffer]);\n};\n\nfunction grayscale(imageData: ImageData) {\n  const data = imageData.data;\n  for (let i = 0; i < data.length; i += 4) {\n    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;\n    data[i] = avg;\n    data[i + 1] = avg;\n    data[i + 2] = avg;\n  }\n}\n\nfunction blur(imageData: ImageData) {\n  // 简单的3x3模糊\n  const { width, height, data } = imageData;\n  const output = new Uint8ClampedArray(data);\n  \n  for (let y = 1; y < height - 1; y++) {\n    for (let x = 1; x < width - 1; x++) {\n      for (let c = 0; c < 3; c++) {\n        let sum = 0;\n        for (let dy = -1; dy <= 1; dy++) {\n          for (let dx = -1; dx <= 1; dx++) {\n            const idx = ((y + dy) * width + (x + dx)) * 4 + c;\n            sum += data[idx];\n          }\n        }\n        output[(y * width + x) * 4 + c] = sum / 9;\n      }\n    }\n  }\n  \n  data.set(output);\n}\n\nfunction brightness(imageData: ImageData, value: number) {\n  const data = imageData.data;\n  for (let i = 0; i < data.length; i += 4) {\n    data[i] = Math.min(255, data[i] + value);\n    data[i + 1] = Math.min(255, data[i + 1] + value);\n    data[i + 2] = Math.min(255, data[i + 2] + value);\n  }\n}\n\n// 主线程使用\nclass ImageProcessor {\n  private worker: Worker;\n  \n  constructor() {\n    this.worker = new Worker('image-processor.worker.js');\n  }\n  \n  async processImage(imageData: ImageData, type: string): Promise<ImageData> {\n    return new Promise((resolve) => {\n      this.worker.onmessage = (event) => {\n        resolve(event.data.imageData);\n      };\n      \n      // 转移ImageData的buffer\n      this.worker.postMessage(\n        { type, imageData },\n        [imageData.data.buffer]\n      );\n    });\n  }\n}\n\n// Vue组件中使用\nconst processor = new ImageProcessor();\n\nconst applyFilter = async (filter: string) => {\n  const canvas = document.getElementById('canvas') as HTMLCanvasElement;\n  const ctx = canvas.getContext('2d')!;\n  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  \n  const processed = await processor.processImage(imageData, filter);\n  ctx.putImageData(processed, 0, 0);\n};"
    ],
    resources: [
      {"name": "MDN Web Workers", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API"},
      {"name": "使用Web Workers", "url": "https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers"},
      {"name": "Comlink库", "url": "https://github.com/GoogleChromeLabs/comlink"},
      {"name": "Workbox (Service Worker)", "url": "https://developers.google.com/web/tools/workbox"}
    ]
  },

  WebXR: {
    title: "WebXR 沉浸式体验",
    content: `WebXR是Web上的增强现实(AR)和虚拟现实(VR)API，让开发者能够创建沉浸式3D体验。

## 核心特性
- **VR支持**: 完整的虚拟现实体验
- **AR支持**: 增强现实功能
- **设备兼容**: 支持多种XR设备
- **输入追踪**: 手柄、手势、视线追踪
- **空间音频**: 3D音效支持

## 会话类型
- **immersive-vr**: 沉浸式VR
- **immersive-ar**: 沉浸式AR
- **inline**: 内联显示(非沉浸式)

## 核心概念
- **XRSession**: XR会话管理
- **XRFrame**: 渲染帧
- **XRReferenceSpace**: 参考空间
- **XRPose**: 姿态/位置信息
- **XRInputSource**: 输入设备

## 参考空间类型
- **viewer**: 观察者空间
- **local**: 本地空间
- **local-floor**: 地板水平空间
- **bounded-floor**: 有界地板空间
- **unbounded**: 无界空间

## 输入管理
- 手柄按钮/摇杆
- 手部追踪
- 视线追踪
- 空间定位

## 应用场景
- VR游戏和娱乐
- 虚拟展厅/展览
- 在线教育培训
- 建筑可视化
- 产品展示
- 远程协作

## 浏览器支持
- Chrome/Edge (VR+AR)
- Firefox (VR)
- Safari (AR)
- Meta Quest Browser
- 需要HTTPS`,
    examples: [
      "// WebXR基础: VR会话\n// 检查WebXR支持\nif (!navigator.xr) {\n  console.error('WebXR不支持');\n}\n\n// 检查设备支持\nconst isVRSupported = await navigator.xr.isSessionSupported('immersive-vr');\nconst isARSupported = await navigator.xr.isSessionSupported('immersive-ar');\n\n// 创建VR会话\nasync function startVRSession() {\n  const session = await navigator.xr.requestSession('immersive-vr', {\n    requiredFeatures: ['local-floor'],\n    optionalFeatures: ['hand-tracking', 'eye-tracking']\n  });\n  \n  // 设置渲染层\n  const canvas = document.createElement('canvas');\n  const gl = canvas.getContext('webgl2', { xrCompatible: true });\n  const layer = new XRWebGLLayer(session, gl);\n  \n  await session.updateRenderState({\n    baseLayer: layer\n  });\n  \n  // 获取参考空间\n  const referenceSpace = await session.requestReferenceSpace('local-floor');\n  \n  // 开始渲染循环\n  session.requestAnimationFrame(function onFrame(time, frame) {\n    session.requestAnimationFrame(onFrame);\n    \n    // 获取姿态\n    const pose = frame.getViewerPose(referenceSpace);\n    if (!pose) return;\n    \n    // 渲染每个视图(左右眼)\n    for (const view of pose.views) {\n      const viewport = layer.getViewport(view);\n      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);\n      \n      // 使用view.transform和view.projectionMatrix渲染场景\n      renderScene(view);\n    }\n  });\n  \n  return session;\n}\n\n// 结束会话\nfunction endSession(session: XRSession) {\n  session.end().then(() => {\n    console.log('VR会话已结束');\n  });\n}",
      "// WebXR输入和交互\nclass VRController {\n  private session: XRSession;\n  private referenceSpace: XRReferenceSpace;\n  \n  constructor(session: XRSession, referenceSpace: XRReferenceSpace) {\n    this.session = session;\n    this.referenceSpace = referenceSpace;\n    this.setupInputListeners();\n  }\n  \n  private setupInputListeners() {\n    // 监听输入源连接\n    this.session.addEventListener('inputsourceschange', (event) => {\n      event.added.forEach(inputSource => {\n        console.log('输入源已连接:', inputSource.handedness);\n      });\n      \n      event.removed.forEach(inputSource => {\n        console.log('输入源已断开:', inputSource.handedness);\n      });\n    });\n    \n    // 监听选择事件(扳机键)\n    this.session.addEventListener('select', (event) => {\n      const inputSource = event.inputSource;\n      this.handleSelect(inputSource, event.frame);\n    });\n    \n    // 监听挤压事件(握把键)\n    this.session.addEventListener('squeeze', (event) => {\n      const inputSource = event.inputSource;\n      this.handleSqueeze(inputSource, event.frame);\n    });\n  }\n  \n  private handleSelect(inputSource: XRInputSource, frame: XRFrame) {\n    // 获取手柄位置\n    const pose = frame.getPose(inputSource.gripSpace!, this.referenceSpace);\n    if (pose) {\n      const position = pose.transform.position;\n      const orientation = pose.transform.orientation;\n      console.log('选择位置:', position);\n      \n      // 射线检测\n      this.performRaycast(inputSource, frame);\n    }\n  }\n  \n  private performRaycast(inputSource: XRInputSource, frame: XRFrame) {\n    if (inputSource.targetRaySpace) {\n      const pose = frame.getPose(inputSource.targetRaySpace, this.referenceSpace);\n      if (pose) {\n        // 执行射线检测逻辑\n        const ray = {\n          origin: pose.transform.position,\n          direction: pose.transform.orientation\n        };\n        // 检测与场景物体的交互\n      }\n    }\n  }\n  \n  private handleSqueeze(inputSource: XRInputSource, frame: XRFrame) {\n    console.log('握把按下');\n  }\n  \n  // 获取游戏手柄状态\n  getGamepadState(inputSource: XRInputSource) {\n    const gamepad = inputSource.gamepad;\n    if (gamepad) {\n      gamepad.buttons.forEach((button, index) => {\n        if (button.pressed) {\n          console.log(`按钮${index}被按下, 值:${button.value}`);\n        }\n      });\n      \n      gamepad.axes.forEach((axis, index) => {\n        console.log(`摇杆轴${index}: ${axis}`);\n      });\n    }\n  }\n}",
      "// WebXR + Three.js集成\nimport * as THREE from 'three';\nimport { VRButton } from 'three/examples/jsm/webxr/VRButton.js';\n\nclass VRScene {\n  private scene: THREE.Scene;\n  private camera: THREE.PerspectiveCamera;\n  private renderer: THREE.WebGLRenderer;\n  \n  constructor() {\n    this.scene = new THREE.Scene();\n    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    \n    this.renderer = new THREE.WebGLRenderer({ antialias: true });\n    this.renderer.setSize(window.innerWidth, window.innerHeight);\n    this.renderer.xr.enabled = true;\n    document.body.appendChild(this.renderer.domElement);\n    \n    // 添加VR按钮\n    document.body.appendChild(VRButton.createButton(this.renderer));\n    \n    this.setupScene();\n    this.animate();\n  }\n  \n  private setupScene() {\n    // 添加光源\n    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);\n    this.scene.add(light);\n    \n    // 添加地板\n    const floorGeometry = new THREE.PlaneGeometry(10, 10);\n    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });\n    const floor = new THREE.Mesh(floorGeometry, floorMaterial);\n    floor.rotation.x = -Math.PI / 2;\n    this.scene.add(floor);\n    \n    // 添加立方体\n    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);\n    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });\n    const cube = new THREE.Mesh(geometry, material);\n    cube.position.set(0, 1, -2);\n    this.scene.add(cube);\n  }\n  \n  private animate() {\n    this.renderer.setAnimationLoop(() => {\n      this.renderer.render(this.scene, this.camera);\n    });\n  }\n  \n  // 添加手柄模型\n  private addControllers() {\n    const controller1 = this.renderer.xr.getController(0);\n    controller1.addEventListener('selectstart', () => console.log('控制器1选择'));\n    this.scene.add(controller1);\n    \n    const controller2 = this.renderer.xr.getController(1);\n    this.scene.add(controller2);\n    \n    // 添加控制器模型\n    const controllerModelFactory = new XRControllerModelFactory();\n    const controllerGrip1 = this.renderer.xr.getControllerGrip(0);\n    controllerGrip1.add(controllerModelFactory.createControllerModel(controllerGrip1));\n    this.scene.add(controllerGrip1);\n  }\n}\n\n// 初始化VR场景\nconst vrScene = new VRScene();"
    ],
    resources: [
      {"name": "WebXR官方文档", "url": "https://www.w3.org/TR/webxr/"},
      {"name": "MDN WebXR API", "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API"},
      {"name": "WebXR示例", "url": "https://immersive-web.github.io/webxr-samples/"},
      {"name": "Three.js WebXR", "url": "https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content"}
    ]
  },

  XSS: {
    title: "XSS 跨站脚本攻击",
    content: `XSS(Cross-Site Scripting)是一种常见的Web安全漏洞，攻击者通过注入恶意脚本到网页中，在用户浏览器中执行。

## XSS类型
- **反射型XSS**: 恶意脚本通过URL参数传递
- **存储型XSS**: 恶意脚本存储在数据库中
- **DOM型XSS**: 通过修改DOM结构执行

## 攻击危害
- 窃取用户Cookie和Session
- 劫持用户会话
- 钓鱼攻击
- 传播蠕虫
- 修改页面内容
- 重定向用户

## 常见注入点
- URL参数
- 表单输入
- Cookie值
- HTTP头
- 富文本编辑器
- 评论和留言

## 防御策略
### 1. 输入验证
- 白名单验证
- 类型检查
- 长度限制
- 格式校验

### 2. 输出编码
- HTML实体编码
- JavaScript编码
- URL编码
- CSS编码

### 3. CSP(内容安全策略)
限制脚本来源和执行

### 4. HttpOnly Cookie
防止JavaScript访问Cookie

### 5. 使用安全的API
避免危险的DOM操作

## React/Vue防护
现代框架默认转义输出，但需注意:
- dangerouslySetInnerHTML
- v-html指令
- 动态组件渲染`,
    examples: [
      "// XSS攻击示例和防御\n// ❌ 危险: 直接插入HTML\nfunction dangerousRender(userInput) {\n  // 攻击者可输入: <script>alert('XSS')</script>\n  document.getElementById('content').innerHTML = userInput;\n}\n\n// ✅ 安全: HTML实体编码\nfunction safeRender(userInput) {\n  const div = document.createElement('div');\n  div.textContent = userInput; // 自动转义\n  document.getElementById('content').appendChild(div);\n}\n\n// HTML实体编码函数\nfunction escapeHtml(text: string): string {\n  const map: Record<string, string> = {\n    '&': '&amp;',\n    '<': '&lt;',\n    '>': '&gt;',\n    '\"': '&quot;',\n    \"'\": '&#x27;',\n    '/': '&#x2F;'\n  };\n  return text.replace(/[&<>\"'\\/]/g, (char) => map[char]);\n}\n\n// 使用\nconst userInput = '<script>alert(\"XSS\")</script>';\nconst safe = escapeHtml(userInput);\nconsole.log(safe); // &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;\n\n// ❌ 危险: 动态脚本执行\nfunction dangerousEval(userCode) {\n  eval(userCode); // 永远不要用eval!\n}\n\n// ❌ 危险: 动态创建脚本\nfunction dangerousScript(url) {\n  const script = document.createElement('script');\n  script.src = url; // 如果url来自用户输入，非常危险\n  document.body.appendChild(script);\n}\n\n// ✅ 安全: URL验证\nfunction safeScript(url: string) {\n  const allowedDomains = ['cdn.example.com', 'trusted.com'];\n  const urlObj = new URL(url);\n  \n  if (allowedDomains.includes(urlObj.hostname)) {\n    const script = document.createElement('script');\n    script.src = url;\n    document.body.appendChild(script);\n  } else {\n    console.error('不允许的脚本来源');\n  }\n}",
      "// React/Vue中的XSS防护\n// React示例\nimport DOMPurify from 'dompurify';\n\n// ❌ 危险: dangerouslySetInnerHTML\nfunction DangerousComponent({ html }) {\n  return <div dangerouslySetInnerHTML={{ __html: html }} />;\n}\n\n// ✅ 安全: 使用DOMPurify清理\nfunction SafeComponent({ html }) {\n  const cleanHtml = DOMPurify.sanitize(html, {\n    ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'a'],\n    ALLOWED_ATTR: ['href', 'title']\n  });\n  \n  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;\n}\n\n// ✅ React默认安全\nfunction SafeReactComponent({ userInput }) {\n  // React自动转义\n  return <div>{userInput}</div>;\n}\n\n// Vue示例\n// ❌ 危险: v-html指令\n// <div v-html=\"userInput\"></div>\n\n// ✅ 安全: 清理后使用\nimport { computed } from 'vue';\n\nconst props = defineProps<{ html: string }>();\n\nconst sanitizedHtml = computed(() => {\n  return DOMPurify.sanitize(props.html, {\n    ALLOWED_TAGS: ['p', 'b', 'i', 'strong'],\n    ALLOWED_ATTR: []\n  });\n});\n\n// <div v-html=\"sanitizedHtml\"></div>\n\n// ✅ Vue默认安全\n// <div>{{ userInput }}</div> // 自动转义\n\n// 表单输入验证\nfunction validateInput(input: string, type: 'email' | 'url' | 'text') {\n  switch (type) {\n    case 'email':\n      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n      return emailRegex.test(input);\n    case 'url':\n      try {\n        new URL(input);\n        return input.startsWith('http://') || input.startsWith('https://');\n      } catch {\n        return false;\n      }\n    case 'text':\n      // 移除HTML标签\n      return input.replace(/<[^>]*>/g, '');\n    default:\n      return input;\n  }\n}",
      "// CSP和安全头配置\n// Express.js服务器配置\nimport express from 'express';\nimport helmet from 'helmet';\n\nconst app = express();\n\n// 使用helmet设置安全头\napp.use(helmet({\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: [\"'self'\"],\n      scriptSrc: [\n        \"'self'\",\n        \"'unsafe-inline'\", // 生产环境应避免\n        'cdn.example.com'\n      ],\n      styleSrc: [\"'self'\", \"'unsafe-inline'\"],\n      imgSrc: [\"'self'\", 'data:', 'https:'],\n      connectSrc: [\"'self'\", 'api.example.com'],\n      fontSrc: [\"'self'\", 'fonts.googleapis.com'],\n      objectSrc: [\"'none'\"],\n      upgradeInsecureRequests: []\n    }\n  },\n  // 防止点击劫持\n  frameguard: { action: 'deny' },\n  // XSS保护\n  xssFilter: true,\n  // 禁用MIME类型嗅探\n  noSniff: true,\n  // HSTS\n  hsts: {\n    maxAge: 31536000,\n    includeSubDomains: true,\n    preload: true\n  }\n}));\n\n// 设置HttpOnly Cookie\napp.use((req, res, next) => {\n  res.cookie('sessionId', 'xxx', {\n    httpOnly: true,  // JavaScript无法访问\n    secure: true,    // 仅HTTPS\n    sameSite: 'strict' // CSRF保护\n  });\n  next();\n});\n\n// HTML meta标签CSP\n// <meta http-equiv=\"Content-Security-Policy\" \n//       content=\"default-src 'self'; script-src 'self' cdn.example.com\">\n\n// 输入过滤中间件\nfunction sanitizeMiddleware(req, res, next) {\n  // 清理查询参数\n  for (const key in req.query) {\n    if (typeof req.query[key] === 'string') {\n      req.query[key] = escapeHtml(req.query[key]);\n    }\n  }\n  \n  // 清理请求体\n  if (req.body) {\n    for (const key in req.body) {\n      if (typeof req.body[key] === 'string') {\n        req.body[key] = escapeHtml(req.body[key]);\n      }\n    }\n  }\n  \n  next();\n}\n\napp.use(sanitizeMiddleware);\n\n// 安全的JSON响应\napp.get('/api/data', (req, res) => {\n  const data = { message: '<script>alert(\"XSS\")</script>' };\n  \n  // 设置正确的Content-Type\n  res.setHeader('Content-Type', 'application/json');\n  res.setHeader('X-Content-Type-Options', 'nosniff');\n  \n  res.json(data); // Express自动转义\n});"
    ],
    resources: [
      {"name": "OWASP XSS指南", "url": "https://owasp.org/www-community/attacks/xss/"},
      {"name": "MDN XSS攻击", "url": "https://developer.mozilla.org/zh-CN/docs/Glossary/Cross-site_scripting"},
      {"name": "DOMPurify库", "url": "https://github.com/cure53/DOMPurify"},
      {"name": "Content Security Policy", "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP"}
    ]
  }
};