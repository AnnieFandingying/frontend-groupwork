#!/bin/bash

echo "🚀 启动 Frontend Master..."
echo ""

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装前端依赖..."
    pnpm install || npm install
fi

# 检查 .env 文件
if [ ! -f ".env" ]; then
    echo "⚠️  未找到 .env 文件，从 .env.example 复制..."
    cp .env.example .env
    echo "请编辑 .env 文件，添加你的 Gemini API Key"
    echo ""
fi

echo "✅ 启动前端开发服务器..."
echo "访问: http://localhost:5173"
echo ""

pnpm dev || npm run dev
