"""
初始化新闻数据模块
用于在首次启动或数据库为空时加载初始新闻数据
"""
import os
import json
from datetime import datetime
from sqlalchemy.orm import Session
import logging

from app.models.models import NewsItem
from app.core.database import SessionLocal

logger = logging.getLogger(__name__)

def load_initial_news_data(db: Session = None) -> dict:
    """
    加载初始新闻数据到数据库
    如果数据库已有数据，则跳过
    
    Returns:
        dict: {'loaded': int, 'skipped': bool, 'total': int}
    """
    should_close = False
    if db is None:
        db = SessionLocal()
        should_close = True
    
    try:
        # 检查数据库是否已有数据
        existing_count = db.query(NewsItem).count()
        
        if existing_count > 0:
            logger.info(f"数据库已有 {existing_count} 条新闻，跳过初始数据加载")
            return {
                'loaded': 0,
                'skipped': True,
                'existing': existing_count,
                'message': f'数据库已有 {existing_count} 条新闻'
            }
        
        # 读取初始数据文件
        data_file = os.path.join(
            os.path.dirname(os.path.dirname(os.path.dirname(__file__))),
            'data',
            'initial_news_data.json'
        )
        
        if not os.path.exists(data_file):
            logger.warning(f"初始数据文件不存在: {data_file}")
            return {
                'loaded': 0,
                'skipped': True,
                'message': '初始数据文件不存在'
            }
        
        # 加载JSON数据
        with open(data_file, 'r', encoding='utf-8') as f:
            news_data = json.load(f)
        
        logger.info(f"准备加载 {len(news_data)} 条初始新闻数据...")
        
        loaded_count = 0
        for item in news_data:
            try:
                # 检查URL是否已存在
                existing = db.query(NewsItem).filter(NewsItem.url == item['url']).first()
                if existing:
                    continue
                
                # 解析发布时间
                published_at = None
                if item.get('published_at'):
                    try:
                        published_at = datetime.fromisoformat(item['published_at'])
                    except:
                        published_at = datetime.utcnow()
                else:
                    published_at = datetime.utcnow()
                
                # 创建新闻项
                news_item = NewsItem(
                    title=item['title'][:500],
                    url=item['url'][:1000],
                    source=item['source'],
                    summary=item.get('summary', ''),
                    tags=json.dumps(item.get('tags', []), ensure_ascii=False),
                    published_at=published_at
                )
                
                db.add(news_item)
                loaded_count += 1
                
            except Exception as e:
                logger.error(f"加载新闻项失败: {e}")
                continue
        
        # 提交到数据库
        if loaded_count > 0:
            db.commit()
            logger.info(f"✅ 成功加载 {loaded_count} 条初始新闻数据")
        
        return {
            'loaded': loaded_count,
            'skipped': False,
            'total': len(news_data),
            'message': f'成功加载 {loaded_count} 条新闻'
        }
        
    except Exception as e:
        logger.error(f"加载初始数据失败: {e}")
        if db:
            db.rollback()
        return {
            'loaded': 0,
            'skipped': False,
            'error': str(e),
            'message': f'加载失败: {e}'
        }
    finally:
        if should_close and db:
            db.close()


if __name__ == "__main__":
    # 测试加载
    result = load_initial_news_data()
    print(f"结果: {result}")
