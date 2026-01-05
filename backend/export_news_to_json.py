"""
导出数据库中的新闻数据到 JSON 文件
"""
import sqlite3
import json
from datetime import datetime
import os

def export_news_to_json(output_file='./data/exported_news_data.json'):
    """导出新闻数据到 JSON 文件"""
    db_path = "./data/frontend_master.db"
    
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        print("=" * 60)
        print("📤 导出新闻数据到 JSON")
        print("=" * 60)
        
        # 查询所有新闻
        cursor.execute("""
            SELECT title, url, source, summary, tags, published_at, created_at 
            FROM news_items 
            ORDER BY created_at DESC
        """)
        
        news_items = cursor.fetchall()
        
        if not news_items:
            print("❌ 没有找到新闻数据")
            return
        
        print(f"📊 找到 {len(news_items)} 条新闻记录")
        
        # 转换为 JSON 格式
        exported_data = []
        for item in news_items:
            title, url, source, summary, tags, published_at, created_at = item
            
            # 解析标签
            try:
                tags_list = json.loads(tags) if tags else []
            except:
                tags_list = []
            
            exported_data.append({
                "title": title,
                "url": url,
                "source": source,
                "summary": summary or "",
                "tags": tags_list,
                "published_at": published_at or created_at
            })
        
        # 确保目录存在
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        
        # 写入 JSON 文件
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(exported_data, f, ensure_ascii=False, indent=2)
        
        print(f"✅ 成功导出 {len(exported_data)} 条新闻到: {output_file}")
        
        # 显示文件大小
        file_size = os.path.getsize(output_file)
        print(f"📁 文件大小: {file_size / 1024:.2f} KB")
        
        # 显示统计信息
        print("\n📈 导出统计:")
        sources = {}
        for item in exported_data:
            source = item['source']
            sources[source] = sources.get(source, 0) + 1
        
        for source, count in sorted(sources.items(), key=lambda x: x[1], reverse=True):
            print(f"   - {source}: {count} 条")
        
        conn.close()
        
    except sqlite3.Error as e:
        print(f"❌ 数据库错误: {e}")
    except Exception as e:
        print(f"❌ 导出失败: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    # 可以指定输出文件路径
    import sys
    
    if len(sys.argv) > 1:
        output_file = sys.argv[1]
    else:
        # 默认导出到 exported_news_data.json，不覆盖 initial_news_data.json
        output_file = './data/exported_news_data.json'
    
    export_news_to_json(output_file)
    
    print("\n" + "=" * 60)
    print("💡 提示:")
    print("   - 如果要覆盖初始数据文件，请运行:")
    print("     python export_news_to_json.py ./data/initial_news_data.json")
    print("   - 默认导出到: ./data/exported_news_data.json")
    print("=" * 60)
