"""
测试阿里云 DashScope API 连接
"""
import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

def test_dashscope_api():
    """测试 DashScope API 连接"""
    api_key = os.getenv("OPENAI_API_KEY")
    base_url = os.getenv("OPENAI_API_BASE")
    model = os.getenv("OPENAI_MODEL", "qwen-plus")
    
    print("=" * 60)
    print("📋 配置信息:")
    print(f"API Base: {base_url}")
    print(f"API Key: {api_key[:20]}..." if api_key else "None")
    print(f"Model: {model}")
    print("=" * 60)
    
    if not api_key:
        print("❌ 未找到 API Key")
        return
    
    try:
        from openai import OpenAI
        
        # 初始化客户端
        client = OpenAI(
            api_key=api_key,
            base_url=base_url
        )
        
        print("\n✅ OpenAI 客户端初始化成功")
        print("\n🧪 测试 API 调用...")
        
        # 测试简单调用
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "你是一个有帮助的助手。"},
                {"role": "user", "content": "你好，请简单介绍一下自己。"}
            ],
            stream=False,
            max_tokens=100
        )
        
        print("\n✅ API 调用成功!")
        print("\n💬 AI 响应:")
        print("-" * 60)
        print(response.choices[0].message.content)
        print("-" * 60)
        
    except Exception as e:
        print(f"\n❌ 错误: {type(e).__name__}")
        print(f"详细信息: {str(e)}")
        
        # 如果是 401 错误，提供更多帮助信息
        if "401" in str(e) or "invalid_api_key" in str(e):
            print("\n💡 API Key 问题排查建议:")
            print("1. 确认您的 API key 是否正确")
            print("2. 检查 API key 是否已激活")
            print("3. 访问 https://dashscope.console.aliyun.com/ 确认密钥状态")
            print("4. 确认您的账户是否有余额")
            print("5. 检查 .env 文件中是否有多余的空格或引号")

if __name__ == "__main__":
    test_dashscope_api()
