from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from .core.config import settings
from .core.database import engine, Base, SessionLocal
from .models.models import *
from .api.v1.endpoints.chat import router as chat_router
from .api.v1.endpoints.news import router as news_router
from .api.v1.endpoints.auth import router as auth_router
from .services.rag_service import rag_service
from .services.scheduler import start_scheduler, stop_scheduler
from .services.initial_data_loader import load_initial_news_data


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 启动时执行
    print("🚀 启动 Frontend Master API...")
    
    # 创建数据库表
    Base.metadata.create_all(bind=engine)
    print("✅ 数据库表创建完成")
    
    # 加载初始新闻数据（如果数据库为空）
    try:
        db = SessionLocal()
        result = load_initial_news_data(db)
        if result['loaded'] > 0:
            print(f"✅ 加载初始新闻数据: {result['loaded']} 条")
        elif result.get('skipped'):
            print(f"ℹ️  {result['message']}")
        db.close()
    except Exception as e:
        print(f"⚠️  初始数据加载失败: {e}")
    
    # 初始化 RAG 知识库
    try:
        rag_service.initialize_default_knowledge()
        print("✅ RAG 知识库初始化完成")
    except Exception as e:
        print(f"⚠️  RAG 初始化失败: {e}")
    
    # 启动新闻爬虫调度器
    try:
        start_scheduler()
        print("✅ 新闻爬虫调度器启动完成")
    except Exception as e:
        print(f"⚠️  调度器启动失败: {e}")
    
    yield
    
    # 关闭时执行
    print("👋 关闭 Frontend Master API...")
    stop_scheduler()


app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Frontend Master 学习平台后端 API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS 配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 路由配置
app.include_router(auth_router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(chat_router, prefix="/api/v1/chat", tags=["chat"])
app.include_router(news_router, prefix="/api/v1", tags=["news"])

@app.get("/")
async def root():
    return {
        "message": "Frontend Master API",
        "version": "1.0.0",
        "status": "running",
        "features": [
            "AI Chat with RAG",
            "Knowledge Graph",
            "Streaming Responses"
        ]
    }

@app.get("/api/v1/health")
async def health_check():
    return {
        "status": "healthy",
        "database": "connected",
        "rag": "initialized" if rag_service.collection else "unavailable"
    }

@app.get("/api/v1/graph/nodes")
async def get_graph_nodes():
    """
    获取知识图谱节点数据
    """
    # TODO: 从数据库或配置文件读取真实数据
    return {"nodes": [], "links": []}

# 新闻路由已移动到 news_router

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
