@echo off
REM 设置环境变量并启动后端服务

echo 正在设置环境变量...
set OPENAI_API_KEY=sk-31zzfEq3t5vpk3T011wobL4a7Eju0wRdZ75dMfo0R8WB3qy2
set OPENAI_API_BASE=https://api.chatanywhere.tech/v1
set OPENAI_MODEL=gpt-3.5-turbo

echo 正在启动 FastAPI 服务器...
echo.
E:\python\python3.12.5\python.exe -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
