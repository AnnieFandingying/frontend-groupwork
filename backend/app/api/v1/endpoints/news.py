from fastapi import APIRouter, Depends, BackgroundTasks, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timedelta

from app.core.database import get_db
from app.models.models import NewsItem
import json
from app.services.news_crawler import news_crawler
from pydantic import BaseModel

router = APIRouter()

class NewsItemResponse(BaseModel):
    id: int
    title: str
    url: str
    source: str
    summary: str
    tags: List[str]
    published_at: Optional[str]
    created_at: Optional[str]

    class Config:
        from_attributes = True

class CrawlResponse(BaseModel):
    total_crawled: int
    saved_count: int
    sources: dict
    message: str

@router.get("/news", response_model=List[NewsItemResponse])
async def get_news_items(
    limit: int = 20,
    skip: int = 0,
    source: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """获取新闻列表"""
    try:
        query = db.query(NewsItem)
        
        if source:
            query = query.filter(NewsItem.source == source)
        
        # 按发布时间倒序排列
        query = query.order_by(NewsItem.published_at.desc())
        
        # 分页
        news_items = query.offset(skip).limit(limit).all()
        
        return [NewsItemResponse(
            id=item.id,
            title=item.title,
            url=item.url,
            source=item.source,
            summary=item.summary or '',
            tags=json.loads(item.tags) if item.tags else [],
            published_at=item.published_at.isoformat() if item.published_at else None,
            created_at=item.created_at.isoformat() if item.created_at else None
        ) for item in news_items]
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"获取新闻失败: {str(e)}")

@router.post("/news/crawl", response_model=CrawlResponse)
async def crawl_news(
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """手动触发新闻爬取"""
    try:
        result = news_crawler.crawl_all(db)
        
        return CrawlResponse(
            total_crawled=result['total_crawled'],
            saved_count=result['saved_count'],
            sources=result['sources'],
            message=f"成功爬取 {result['total_crawled']} 条新闻，保存 {result['saved_count']} 条新内容"
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"新闻爬取失败: {str(e)}")

@router.get("/news/sources")
async def get_news_sources(db: Session = Depends(get_db)):
    """获取新闻源列表"""
    try:
        sources = db.query(NewsItem.source).distinct().all()
        return [source[0] for source in sources]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"获取新闻源失败: {str(e)}")

@router.get("/news/count")
async def get_news_count(
    source: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """获取新闻总数"""
    try:
        query = db.query(NewsItem)
        if source:
            query = query.filter(NewsItem.source == source)
        count = query.count()
        return {"count": count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"获取新闻总数失败: {str(e)}")

@router.get("/news/stats")
async def get_news_stats(db: Session = Depends(get_db)):
    """获取新闻统计信息"""
    try:
        total_count = db.query(NewsItem).count()
        
        # 最近7天的新闻数量
        week_ago = datetime.utcnow() - timedelta(days=7)
        recent_count = db.query(NewsItem).filter(
            NewsItem.created_at >= week_ago
        ).count()
        
        # 各来源统计
        sources_stats = db.query(
            NewsItem.source,
            db.func.count(NewsItem.id).label('count')
        ).group_by(NewsItem.source).all()
        
        return {
            'total_count': total_count,
            'recent_count': recent_count,
            'sources': {source: count for source, count in sources_stats}
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"获取统计信息失败: {str(e)}")