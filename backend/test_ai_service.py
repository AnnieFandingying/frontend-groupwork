"""
测试 AI 服务连接和流式输出
"""
import asyncio
from app.services.ai_service import ai_service

async def test_ai_chat():
    """测试 AI 聊天功能"""
    print("🧪 开始测试 AI 服务...")
    print("=" * 70)
    
    test_message = "请用一句话介绍什么是 Vue 3 的 Composition API？"
    
    print(f"📝 测试问题: {test_message}\n")
    
    try:
        async for chunk in ai_service.chat_stream_with_context(test_message):
            # 流式输出已经在 ai_service 中打印到控制台了
            pass
        
        print("\n✅ 测试完成！")
        
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")

if __name__ == "__main__":
    asyncio.run(test_ai_chat())
