@echo off
chcp 65001 >nul
echo 🔧 启动 Frontend Master Backend API...
echo.

:: 检查是否存在虚拟环境
if not exist "venv" (
    echo 🐍 创建 Python 虚拟环境...
    python -m venv venv
)

:: 激活虚拟环境
echo 🔄 激活虚拟环境...
call venv\Scripts\activate

:: 安装依赖
echo 📦 安装后端依赖...
pip install -r requirements.txt

:: 检查 .env 文件
if not exist ".env" (
    echo ⚠️  未找到 .env 文件，从 .env.example 复制...
    copy .env.example .env
    echo 请编辑 .env 文件，添加你的 OpenAI API Key ^(可选^)
    echo.
)

:: 创建数据目录
if not exist "data" mkdir data

echo ✅ 启动后端 API 服务器...
echo 访问 API 文档: http://localhost:8000/docs
echo 健康检查: http://localhost:8000/api/v1/health
echo.

python -m app.main

pause