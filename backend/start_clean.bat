@echo off
chcp 65001 >nul
echo ====================================
echo 清除环境变量并启动后端服务
echo ====================================

REM 清除可能干扰的环境变量
set OPENAI_API_KEY=
set OPENAI_API_BASE=
set OPENAI_MODEL=

echo ✅ 已清除环境变量
echo.
echo 📋 读取 .env 文件配置...
echo.

REM 启动 uvicorn
cd /d %~dp0
echo 🚀 启动服务器...
echo.
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
