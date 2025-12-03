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
    OPENAI_MODEL: str = "gpt-4.1-mini"
    
    # ChromaDB
    CHROMA_PERSIST_DIR: str = "./data/chroma"
    
    # CORS
    BACKEND_CORS_ORIGINS: list = ["http://localhost:5173", "http://127.0.0.1:5173"]
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
