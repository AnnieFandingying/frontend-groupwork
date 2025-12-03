"""
数据库检查脚本：查看所有表和数据
"""
import sqlite3
import json
from datetime import datetime

def check_database():
    """检查数据库内容"""
    db_path = "./data/frontend_master.db"
    
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        print("=" * 60)
        print("🗄️  Frontend Master 数据库检查报告")
        print(f"📅 检查时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"📍 数据库路径: {db_path}")
        print("=" * 60)
        
        # 获取所有表名
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()
        
        if not tables:
            print("❌ 数据库中没有找到任何表")
            return
        
        print(f"📊 总共发现 {len(tables)} 个表:")
        for i, (table_name,) in enumerate(tables, 1):
            print(f"   {i}. {table_name}")
        print()
        
        # 检查每个表的结构和数据
        for table_name, in tables:
            print(f"🔍 表: {table_name}")
            print("-" * 40)
            
            # 获取表结构
            cursor.execute(f"PRAGMA table_info({table_name})")
            columns = cursor.fetchall()
            
            print("📋 表结构:")
            for col in columns:
                col_id, col_name, col_type, not_null, default, primary_key = col
                pk_mark = " (主键)" if primary_key else ""
                null_mark = " NOT NULL" if not_null else ""
                default_mark = f" DEFAULT {default}" if default else ""
                print(f"   - {col_name}: {col_type}{pk_mark}{null_mark}{default_mark}")
            
            # 获取数据数量
            cursor.execute(f"SELECT COUNT(*) FROM {table_name}")
            count = cursor.fetchone()[0]
            print(f"\n📈 数据行数: {count}")
            
            if count > 0:
                # 显示前5条数据
                cursor.execute(f"SELECT * FROM {table_name} LIMIT 5")
                rows = cursor.fetchall()
                
                print("🔎 数据示例 (前5条):")
                column_names = [col[1] for col in columns]
                
                for i, row in enumerate(rows, 1):
                    print(f"   第{i}行:")
                    for col_name, value in zip(column_names, row):
                        # 处理JSON字段
                        if col_name in ['tags'] and value:
                            try:
                                if isinstance(value, str):
                                    parsed = json.loads(value)
                                    value = f"{parsed} (JSON)"
                            except:
                                pass
                        
                        # 截断长文本
                        if isinstance(value, str) and len(value) > 100:
                            value = value[:100] + "..."
                        
                        print(f"     {col_name}: {value}")
                    print()
            else:
                print("   (无数据)")
            
            print("=" * 60)
            print()
        
        # 特别检查新闻数据
        print("🗞️  新闻数据详细信息:")
        print("-" * 40)
        
        try:
            # 按来源统计
            cursor.execute("""
                SELECT source, COUNT(*) as count 
                FROM news_items 
                GROUP BY source 
                ORDER BY count DESC
            """)
            source_stats = cursor.fetchall()
            
            if source_stats:
                print("📊 按来源统计:")
                for source, count in source_stats:
                    print(f"   - {source}: {count} 条")
            else:
                print("   没有找到新闻数据")
            
            # 最新的5条新闻
            cursor.execute("""
                SELECT title, source, created_at, url 
                FROM news_items 
                ORDER BY created_at DESC 
                LIMIT 5
            """)
            recent_news = cursor.fetchall()
            
            if recent_news:
                print("\n🕒 最新新闻:")
                for i, (title, source, created_at, url) in enumerate(recent_news, 1):
                    print(f"   {i}. [{source}] {title[:60]}...")
                    print(f"      时间: {created_at}")
                    print(f"      链接: {url}")
                    print()
        
        except Exception as e:
            print(f"   检查新闻数据时出错: {e}")
        
        conn.close()
        
    except sqlite3.Error as e:
        print(f"❌ 数据库连接错误: {e}")
    except FileNotFoundError:
        print(f"❌ 数据库文件不存在: {db_path}")
    except Exception as e:
        print(f"❌ 检查过程中出现错误: {e}")

if __name__ == "__main__":
    check_database()