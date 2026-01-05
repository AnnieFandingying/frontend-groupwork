# 初始新闻数据说明

## 📋 功能说明

为了确保项目首次启动时前端能够显示内容，我们预先爬取了一批高质量的前端技术新闻并保存在 `initial_news_data.json` 文件中。

当后端启动时：
1. **自动检测**：检查数据库是否为空
2. **自动加载**：如果数据库为空，自动加载初始数据（约78条新闻）
3. **跳过加载**：如果数据库已有数据，跳过加载

## 📂 文件结构

```
backend/
├── data/
│   └── initial_news_data.json          # 初始新闻数据（78条）
├── app/
│   └── services/
│       └── initial_data_loader.py      # 数据加载模块
└── crawl_initial_data.py               # 重新爬取初始数据的脚本
```

## 🔄 重新生成初始数据

如果需要更新初始数据（获取最新的热门新闻），运行：

```bash
cd backend
python crawl_initial_data.py
```

这个脚本会：
1. 爬取所有配置的新闻源（GitHub、Dev.to、Medium、掘金、Smashing Magazine）
2. 从数据库读取所有新闻
3. 保存到 `data/initial_news_data.json`

## 📊 数据来源

初始数据包含来自以下6个高质量前端技术新闻源：

| 来源 | 数量 | 说明 |
|------|------|------|
| **GitHub Trending** | ~9条 | JavaScript每日热门项目 |
| **Dev.to** | ~5条 | JavaScript标签最近7天热门文章 |
| **Medium** | ~5条 | JavaScript标签最新文章 |
| **掘金** | ~5条 | 前端分类热门文章（中文） |
| **Smashing Magazine** | ~5条 | 前端设计开发专业文章 |
| **历史数据** | ~49条 | 之前爬取的存档数据 |

**总计：约78条高质量前端新闻**

## 🚀 使用方式

### 首次启动项目

```bash
cd backend
python -m uvicorn app.main:app --reload
```

启动时会自动：
1. 创建数据库表
2. **加载初始新闻数据**（如果数据库为空）
3. 启动定时爬虫（每6小时自动爬取最新新闻）

### 日志输出

成功加载初始数据时：
```
✅ 数据库表创建完成
✅ 加载初始新闻数据: 78 条
✅ RAG 知识库初始化完成
✅ 新闻爬虫调度器启动完成
```

数据库已有数据时：
```
✅ 数据库表创建完成
ℹ️  数据库已有 78 条新闻
✅ RAG 知识库初始化完成
✅ 新闻爬虫调度器启动完成
```

## 🎯 优势

1. **即开即用**：首次启动就能看到内容
2. **容错性强**：即使爬虫失败，也有初始数据兜底
3. **高质量**：预先筛选的热门前端技术新闻
4. **自动更新**：定时爬虫会持续补充最新内容
5. **去重机制**：初始数据和爬取数据自动去重

## 📝 数据格式

`initial_news_data.json` 格式：

```json
[
  {
    "title": "新闻标题",
    "url": "https://...",
    "source": "来源网站",
    "summary": "摘要内容",
    "tags": ["JavaScript", "Frontend"],
    "published_at": "2025-12-09T12:00:00"
  }
]
```

## 🔧 手动加载数据

如果需要手动测试加载功能：

```python
from app.services.initial_data_loader import load_initial_news_data
from app.core.database import SessionLocal

db = SessionLocal()
result = load_initial_news_data(db)
print(result)
db.close()
```

## ⚠️ 注意事项

1. 首次运行 `crawl_initial_data.py` 需要网络连接
2. 如果某些源爬取失败，脚本会跳过并继续
3. 初始数据文件约 200KB，不会影响性能
4. 数据加载使用事务，失败会自动回滚
