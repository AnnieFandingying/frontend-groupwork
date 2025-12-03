#!/bin/bash

echo "🔧 启动 Frontend Master Backend API..."
echo ""

# 检查是否存在虚拟环境
if [ ! -d "venv" ]; then
    echo "🐍 创建 Python 虚拟环境..."
    python -m venv venv
fi

# 激活虚拟环境
echo "🔄 激活虚拟环境..."
source venv/bin/activate 2>/dev/null || venv\Scripts\activate

# 安装依赖
echo "📦 安装后端依赖..."
pip install -r requirements.txt

# 检查 .env 文件
if [ ! -f ".env" ]; then
    echo "⚠️  未找到 .env 文件，从 .env.example 复制..."
    cp .env.example .env
    echo "请编辑 .env 文件，添加你的 OpenAI API Key (可选)"
    echo ""
fi

# 创建数据目录
mkdir -p data

echo "✅ 启动后端 API 服务器..."
echo "访问 API 文档: http://localhost:8000/docs"
echo "健康检查: http://localhost:8000/api/v1/health"
echo ""

python -m app.main