from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from ..core.database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    level = Column(Integer, default=1)
    experience = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    progress = relationship("UserProgress", back_populates="user")
    chat_history = relationship("ChatHistory", back_populates="user")

class KnowledgeNode(Base):
    __tablename__ = "knowledge_nodes"
    
    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(String, unique=True, index=True, nullable=False)
    label = Column(String, nullable=False)
    group = Column(String, nullable=False)
    description = Column(Text)
    resources = Column(Text)  # JSON string
    created_at = Column(DateTime, default=datetime.utcnow)

class UserProgress(Base):
    __tablename__ = "user_progress"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    node_id = Column(String, ForeignKey("knowledge_nodes.node_id"))
    mastery = Column(Float, default=0.0)  # 0-100
    last_practiced = Column(DateTime, default=datetime.utcnow)
    
    user = relationship("User", back_populates="progress")

class ChatHistory(Base):
    __tablename__ = "chat_history"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    role = Column(String, nullable=False)  # 'user' or 'assistant'
    message = Column(Text, nullable=False)
    related_nodes = Column(Text)  # JSON string of related node IDs
    created_at = Column(DateTime, default=datetime.utcnow)
    timestamp = Column(DateTime, default=datetime.utcnow)  # 保持向后兼容
    
    user = relationship("User", back_populates="chat_history")

class Question(Base):
    __tablename__ = "questions"
    
    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(String, ForeignKey("knowledge_nodes.node_id"))
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    difficulty = Column(String, nullable=False)  # 'easy', 'medium', 'hard'
    starter_code = Column(Text)
    solution = Column(Text)
    test_cases = Column(Text)  # JSON string
    created_at = Column(DateTime, default=datetime.utcnow)

class NewsItem(Base):
    __tablename__ = "news_items"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(500), nullable=False)
    url = Column(String(1000), unique=True, nullable=False)
    source = Column(String(100), nullable=False)
    summary = Column(Text)
    tags = Column(String)  # JSON string
    published_at = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        import json
        return {
            'id': self.id,
            'title': self.title,
            'url': self.url,
            'source': self.source,
            'summary': self.summary or '',
            'tags': json.loads(self.tags) if self.tags else [],
            'published_at': self.published_at.isoformat() if self.published_at else None,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }
