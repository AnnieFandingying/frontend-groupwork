"""
爬取初始新闻数据脚本
运行此脚本生成 initial_news_data.json 文件
"""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from app.services.news_crawler import news_crawler
from app.core.database import SessionLocal
import json

def main():
    print("🚀 开始爬取初始新闻数据...")
    print("=" * 60)
    
    db = SessionLocal()
    try:
        # 执行完整爬取
        result = news_crawler.crawl_all(db)
        
        print(f"\n✅ 爬取完成:")
        print(f"   总计爬取: {result['total_crawled']} 条")
        print(f"   保存新数据: {result['saved_count']} 条")
        print(f"\n各源统计:")
        for source, count in result['sources'].items():
            print(f"   - {source}: {count} 条")
        
        # 从数据库读取所有新闻
        from app.models.models import NewsItem
        all_news = db.query(NewsItem).order_by(NewsItem.published_at.desc()).all()
        
        # 转换为JSON格式
        news_data = []
        for item in all_news:
            news_data.append({
                'title': item.title,
                'url': item.url,
                'source': item.source,
                'summary': item.summary or '',
                'tags': json.loads(item.tags) if item.tags else [],
                'published_at': item.published_at.isoformat() if item.published_at else None
            })
        
        # 保存到文件
        output_file = os.path.join(os.path.dirname(__file__), 'data', 'initial_news_data.json')
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(news_data, f, ensure_ascii=False, indent=2)
        
        print(f"\n💾 初始数据已保存到: {output_file}")
        print(f"   共 {len(news_data)} 条新闻")
        
    except Exception as e:
        print(f"❌ 错误: {e}")
        import traceback
        traceback.print_exc()
    finally:
        db.close()

if __name__ == "__main__":
    main()
