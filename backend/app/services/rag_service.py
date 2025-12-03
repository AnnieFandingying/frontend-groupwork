import os
from typing import List, Dict, Optional

from ..core.config import settings


class RAGService:
    def __init__(self):
        # Initialize ChromaDB
        self.client = None
        self.collection = None
        self.fallback_knowledge = {}  # 备用知识库
        
        try:
            import chromadb
            # 确保目录存在
            os.makedirs(settings.CHROMA_PERSIST_DIR, exist_ok=True)
            
            self.client = chromadb.PersistentClient(
                path=settings.CHROMA_PERSIST_DIR
            )
            
            # Get or create collection
            self.collection = self.client.get_or_create_collection(
                name="knowledge_base",
                metadata={"description": "Frontend knowledge embeddings"}
            )
            print("✅ ChromaDB 初始化成功")
        except ImportError:
            print("⚠️  ChromaDB 未安装，使用备用知识库")
        except Exception as e:
            print(f"⚠️  ChromaDB 初始化失败: {e}，使用备用知识库")
    
    def add_knowledge_node(
        self,
        node_id: str,
        label: str,
        content: str,
        metadata: Optional[Dict] = None
    ) -> bool:
        """Add a knowledge node to the vector database"""
        # 添加到备用知识库
        self.fallback_knowledge[node_id] = f"{label}: {content}"
        
        # 如果有 ChromaDB，也添加到那里
        if self.collection:
            try:
                self.collection.add(
                    ids=[node_id],
                    documents=[f"{label}: {content}"],
                    metadatas=[metadata or {"label": label}]
                )
                return True
            except Exception as e:
                print(f"Error adding node to ChromaDB: {e}")
        
        return True  # 至少添加到了备用知识库
    
    def search_relevant_nodes(
        self,
        query: str,
        top_k: int = 3
    ) -> List[Dict]:
        """Search for relevant knowledge nodes"""
        # 如果有 ChromaDB，使用它
        if self.collection:
            try:
                results = self.collection.query(
                    query_texts=[query],
                    n_results=top_k
                )
                
                if not results or not results['ids'] or not results['ids'][0]:
                    return self._fallback_search(query, top_k)
                
                relevant_nodes = []
                for i, node_id in enumerate(results['ids'][0]):
                    relevant_nodes.append({
                        "node_id": node_id,
                        "content": results['documents'][0][i] if results['documents'] and results['documents'][0] else "",
                        "metadata": results['metadatas'][0][i] if results['metadatas'] and results['metadatas'][0] else {},
                        "distance": results['distances'][0][i] if results.get('distances') and results['distances'][0] else 0
                    })
                
                return relevant_nodes
            except Exception as e:
                print(f"Error searching RAG: {e}")
                return self._fallback_search(query, top_k)
        
        # 使用备用搜索
        return self._fallback_search(query, top_k)
    
    def _fallback_search(self, query: str, top_k: int) -> List[Dict]:
        """备用搜索使用简单的关键词匹配"""
        query_lower = query.lower()
        results = []
        
        for node_id, content in self.fallback_knowledge.items():
            if any(keyword in content.lower() for keyword in query_lower.split()):
                results.append({
                    "node_id": node_id,
                    "content": content,
                    "metadata": {"source": "fallback"},
                    "distance": 0.5
                })
        
        return results[:top_k]
    
    def build_context_from_nodes(
        self,
        nodes: List[Dict]
    ) -> str:
        """Build context string from retrieved nodes"""
        if not nodes:
            return ""
        
        context_parts = ["以下是相关的前端知识点:\n"]
        for node in nodes:
            content = node.get('content', '')
            if content:
                context_parts.append(f"- {content}")
        
        return "\n".join(context_parts) if len(context_parts) > 1 else ""
    
    def initialize_default_knowledge(self):
        """初始化默认的前端知识库"""
        if not self.collection:
            return
        
        # 检查是否已经有数据
        try:
            count = self.collection.count()
            if count > 0:
                print(f"Knowledge base already has {count} entries")
                return
        except:
            pass
        
        # 默认前端知识
        default_knowledge = [
            {
                "id": "vue_basics",
                "label": "Vue.js 基础",
                "content": "Vue.js 是一个渐进式的 JavaScript 框架，用于构建用户界面。它专注于视图层，采用组件化开发模式，支持数据双向绑定和虚拟DOM。Vue 3 引入了 Composition API，提供更好的逻辑复用和 TypeScript 支持。",
                "metadata": {"category": "framework", "difficulty": "beginner"}
            },
            {
                "id": "react_concepts",
                "label": "React 核心概念",
                "content": "React 是一个用于构建用户界面的 JavaScript 库，采用组件化架构和单向数据流。核心概念包括：JSX 语法、组件生命周期、状态管理、Props 传递、Hooks API。React 18 引入了并发特性和自动批处理。",
                "metadata": {"category": "framework", "difficulty": "intermediate"}
            },
            {
                "id": "javascript_es6",
                "label": "ES6+ 现代特性",
                "content": "ES6+ 引入了许多现代 JavaScript 特性：箭头函数、解构赋值、模板字符串、Promise/async-await、模块化、类语法、Symbol、Map/Set 等。这些特性大大提升了开发效率和代码可读性。",
                "metadata": {"category": "language", "difficulty": "intermediate"}
            },
            {
                "id": "css_flexbox",
                "label": "CSS Flexbox 布局",
                "content": "Flexbox 是一种一维布局方法，用于在容器中排列项目。主要属性包括：display: flex、flex-direction、justify-content、align-items、flex-wrap 等。Flexbox 解决了传统布局中的许多问题，如垂直居中和等高列。",
                "metadata": {"category": "css", "difficulty": "beginner"}
            },
            {
                "id": "webpack_bundling",
                "label": "Webpack 模块打包",
                "content": "Webpack 是现代前端项目的核心打包工具。它将模块及其依赖打包成静态资源。核心概念：entry、output、loaders、plugins、optimization。支持代码分割、懒加载、热模块替换等高级特性。",
                "metadata": {"category": "build-tool", "difficulty": "advanced"}
            }
        ]
        
        for knowledge in default_knowledge:
            self.add_knowledge_node(
                knowledge["id"],
                knowledge["label"],
                knowledge["content"],
                knowledge["metadata"]
            )
        
        print(f"Initialized {len(default_knowledge)} default knowledge entries")


# Singleton instance
rag_service = RAGService()