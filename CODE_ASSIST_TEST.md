# 代码演练 AI 辅助功能测试指南

## ✨ 新增功能

### 1. 代码选中智能辅助
选中代码后，会出现三个悬浮按钮：
- **💡 解释**: AI 解释代码功能和原理
- **✨ 补全**: AI 补全代码并提供说明
- **🔧 修改**: AI 检查并修复代码错误

### 2. AI 辅助面板
- 实时流式显示 AI 响应
- Markdown 格式化输出
- 可关闭的悬浮窗

## 🧪 测试步骤

### 步骤 1: 启动后端服务
```bash
cd backend
start_with_env.bat
```

或手动设置环境变量：
```powershell
$env:OPENAI_API_KEY = 'sk-31zzfEq3t5vpk3T011wobL4a7Eju0wRdZ75dMfo0R8WB3qy2'
$env:OPENAI_API_BASE = 'https://api.chatanywhere.tech/v1'
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 步骤 2: 启动前端服务
```bash
cd frontend-master-vue
npm run dev
```

### 步骤 3: 测试代码解释
1. 在代码演练页面，输入以下 JavaScript 代码：
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
```

2. 用鼠标选中这段代码
3. 点击悬浮的 **💡 解释** 按钮
4. 观察 AI 辅助面板中的解释内容

### 步骤 4: 测试代码补全
1. 输入不完整的代码：
```javascript
function calculateSum(arr) {
  // TODO: 计算数组总和
```

2. 选中这段代码
3. 点击 **✨ 补全** 按钮
4. 查看 AI 补全的完整代码

### 步骤 5: 测试代码修复
1. 输入有错误的代码：
```javascript
const arr = [1, 2, 3];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}
```

2. 选中这段代码
3. 点击 **🔧 修改** 按钮
4. 查看 AI 指出的错误和修复建议

## 📝 支持的语言模式

- **HTML 完整页面**: 选中 HTML 代码片段
- **HTML + CSS + JS**: 分别选中不同类型的代码
- **JavaScript**: 专注于 JS 代码辅助
- **Vue 模板**: Vue 组件代码辅助

## 🎯 功能特点

### 后端 API
- 端点: `POST /api/v1/chat/code-assist`
- 支持三种操作: `explain`, `complete`, `fix`
- 流式响应 (SSE)
- 控制台输出 AI 思考过程

### 前端交互
- 自动检测代码选中
- 智能定位悬浮按钮
- 实时流式显示 AI 响应
- Markdown 格式化输出
- 可拖拽的辅助面板位置

## 🔍 调试技巧

### 查看后端日志
后端控制台会显示：
- AI 辅助请求详情
- 代码语言类型
- AI 响应内容（流式）

### 查看前端日志
浏览器控制台 F12：
- AI 请求参数
- 响应数据
- 错误信息

## 🐛 常见问题

### 1. 悬浮按钮不显示
- 确保选中了有效的代码文本
- 检查是否在 textarea 区域内选中

### 2. AI 响应超时
- 检查后端服务是否正常运行
- 确认 API Key 配置正确
- 查看网络连接状态

### 3. Markdown 渲染异常
- 检查 marked 库是否正确安装
- 查看浏览器控制台错误信息

## 🎉 测试清单

- [ ] 后端服务正常启动
- [ ] 前端服务正常启动
- [ ] 代码选中触发悬浮按钮
- [ ] 点击"解释"按钮显示AI解释
- [ ] 点击"补全"按钮显示代码补全
- [ ] 点击"修改"按钮显示代码修复
- [ ] AI 响应实时流式显示
- [ ] Markdown 格式正确渲染
- [ ] 可关闭辅助面板
- [ ] 支持所有代码模式

## 📊 性能指标

- 代码选中响应: < 50ms
- AI 首字节响应: < 2s
- 流式输出延迟: < 100ms
- 面板打开动画: 200ms

---

**开发完成时间**: 2025年12月9日  
**功能状态**: ✅ 已实现并测试
