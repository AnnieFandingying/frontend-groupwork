#!/bin/bash

echo "🔧 测试启动 Frontend Master Backend..."
echo ""

# 检查是否存在虚拟环境
if [ ! -d "venv" ]; then
    echo "🐍 创建 Python 虚拟环境..."
    python -m venv venv
fi

# 激活虚拟环境
echo "🔄 激活虚拟环境..."
source venv/bin/activate 2>/dev/null || call venv\\Scripts\\activate.bat

# 安装依赖
echo "📦 安装依赖..."
pip install -r requirements.txt

# 检查 .env 文件
if [ ! -f ".env" ]; then
    echo "⚠️  创建 .env 文件..."
    cp .env.example .env
fi

# 创建必要目录
mkdir -p data/chroma

echo ""
echo "✅ 准备完成！"
echo ""
echo "🚀 启动后端服务器..."
echo "📖 API 文档: http://localhost:8000/docs"
echo "🏥 健康检查: http://localhost:8000/api/v1/health"
echo "💬 聊天测试: http://localhost:8000/api/v1/chat/stream"
echo ""
echo "按 Ctrl+C 停止服务"
echo ""

# 启动服务
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000