from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # API Settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Frontend Master API"
    
    # Database
    DATABASE_URL: str = "sqlite:///./data/frontend_master.db"
    
    # Security
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    # OpenAI API (使用环境变量中的 OPENAI_API_KEY)
    OPENAI_API_KEY: Optional[str] = None
    OPENAI_API_BASE: Optional[str] = None
    OPENAI_MODEL: str = "Pro/deepseek-ai/DeepSeek-V3"
    
    # ChromaDB
    CHROMA_PERSIST_DIR: str = "./data/chroma"
    
    # CORS
    BACKEND_CORS_ORIGINS: list = [
        "http://localhost:5173", 
        "http://127.0.0.1:5173",
        "http://localhost:5174", 
        "http://127.0.0.1:5174"
    ]
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()

# 启动时打印配置信息（用于调试）
print(f"\n{'='*60}")
print(f"📋 配置文件加载完成:")
print(f"   - 项目名称: {settings.PROJECT_NAME}")
print(f"   - API Base: {settings.OPENAI_API_BASE}")
print(f"   - Model: {settings.OPENAI_MODEL}")
print(f"   - API Key 存在: {bool(settings.OPENAI_API_KEY)}")
if settings.OPENAI_API_KEY:
    print(f"   - API Key 完整值: {settings.OPENAI_API_KEY}")
else:
    print(f"   ⚠️ 警告: API Key 未设置！")
print(f"{'='*60}\n")
