"""
测试新闻API端点
"""
import requests
import json

def test_news_api():
    base_url = "http://localhost:8000"
    
    print("🧪 测试新闻API端点")
    print("=" * 40)
    
    # 测试健康检查
    try:
        response = requests.get(f"{base_url}/api/v1/health", timeout=5)
        print(f"✅ 健康检查: {response.status_code}")
        if response.status_code == 200:
            print(f"   响应: {response.json()}")
    except Exception as e:
        print(f"❌ 健康检查失败: {e}")
        return
    
    # 测试新闻列表API
    try:
        response = requests.get(f"{base_url}/api/v1/news?limit=5", timeout=10)
        print(f"\n📰 新闻列表API: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   返回条数: {len(data)}")
            if data:
                print("   第一条新闻:")
                first_item = data[0]
                print(f"     标题: {first_item.get('title', 'N/A')}")
                print(f"     来源: {first_item.get('source', 'N/A')}")
                print(f"     URL: {first_item.get('url', 'N/A')}")
        else:
            print(f"   错误响应: {response.text}")
            
    except Exception as e:
        print(f"❌ 新闻API失败: {e}")
    
    # 测试新闻源API
    try:
        response = requests.get(f"{base_url}/api/v1/news/sources", timeout=5)
        print(f"\n📊 新闻源API: {response.status_code}")
        
        if response.status_code == 200:
            sources = response.json()
            print(f"   新闻源: {sources}")
        else:
            print(f"   错误响应: {response.text}")
            
    except Exception as e:
        print(f"❌ 新闻源API失败: {e}")

if __name__ == "__main__":
    test_news_api()