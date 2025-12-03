from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
from sqlalchemy.orm import sessionmaker
from app.core.database import engine
from app.services.news_crawler import news_crawler
import logging

logger = logging.getLogger(__name__)

# 创建数据库会话
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def crawl_news_job():
    """定时爬取新闻的任务"""
    logger.info("Starting scheduled news crawl...")
    
    db = SessionLocal()
    try:
        result = news_crawler.crawl_all(db)
        logger.info(f"Scheduled crawl completed: {result}")
    except Exception as e:
        logger.error(f"Scheduled news crawl failed: {e}")
    finally:
        db.close()

# 创建调度器
scheduler = AsyncIOScheduler()

def start_scheduler():
    """启动调度器"""
    try:
        # 每2小时执行一次新闻爬取
        scheduler.add_job(
            crawl_news_job,
            CronTrigger(minute=0, hour="*/2"),  # 每2小时的整点执行
            id="news_crawler",
            name="定时爬取技术新闻",
            replace_existing=True
        )
        
        scheduler.start()
        logger.info("News crawler scheduler started successfully")
        
        # 启动时执行一次
        crawl_news_job()
        
    except Exception as e:
        logger.error(f"Failed to start scheduler: {e}")

def stop_scheduler():
    """停止调度器"""
    try:
        if scheduler.running:
            scheduler.shutdown()
            logger.info("News crawler scheduler stopped")
    except Exception as e:
        logger.error(f"Failed to stop scheduler: {e}")