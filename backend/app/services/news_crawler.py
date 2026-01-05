import requests
from bs4 import BeautifulSoup
from typing import List, Dict
from datetime import datetime
from sqlalchemy.orm import Session
import logging
import urllib3

from app.models.models import NewsItem
import json

# 禁用 SSL 警告（仅用于开发环境）
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class NewsCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Connection': 'keep-alive'
        }
    
    def crawl_github_trending(self) -> List[Dict]:
        """Crawl GitHub Trending for frontend projects"""
        logger.info("Starting GitHub Trending crawl")
        try:
            url = "https://github.com/trending/javascript?since=daily"
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            
            items = []
            for article in soup.find_all('article', class_='Box-row')[:15]:  # 增加到15条，筛选最热门的
                try:
                    h2 = article.find('h2')
                    if not h2:
                        continue
                    
                    link = h2.find('a')
                    if not link:
                        continue
                    
                    title = link.get_text(strip=True).replace('\n', '').replace('  ', ' ')
                    url = f"https://github.com{link['href']}"
                    
                    description = article.find('p', class_='col-9')
                    summary = description.get_text(strip=True) if description else ""
                    
                    # Get stars count (热度指标)
                    stars_element = article.find('a', href=lambda x: x and '/stargazers' in x)
                    stars_text = stars_element.get_text(strip=True) if stars_element else "0"
                    
                    # Get today's stars (今日新增 - 热度指标)
                    today_stars = article.find('span', class_='d-inline-block float-sm-right')
                    today_stars_text = today_stars.get_text(strip=True) if today_stars else ""
                    
                    # 只保留有一定热度的项目（至少有今日新增或总星数>100）
                    try:
                        stars_num = int(''.join(filter(str.isdigit, stars_text.replace(',', ''))))
                        if stars_num < 50 and not today_stars_text:
                            continue
                    except:
                        pass
                    
                    summary_with_stats = f"{summary} ⭐ {stars_text}"
                    if today_stars_text:
                        summary_with_stats += f" | 🔥 今日 {today_stars_text}"
                    
                    items.append({
                        'title': title,
                        'url': url,
                        'source': 'GitHub Trending',
                        'summary': summary_with_stats,
                        'tags': ['JavaScript', 'GitHub', 'Trending'],
                        'published_at': datetime.utcnow()
                    })
                except Exception as e:
                    logger.error(f"Error parsing GitHub item: {e}")
                    continue
            
            # 按今日新增星数排序（如果有的话）
            items.sort(key=lambda x: '🔥' in x['summary'], reverse=True)
            
            logger.info(f"Found {len(items)} GitHub trending items")
            return items[:10]  # 返回前10个最热门的
        except Exception as e:
            logger.error(f"Error crawling GitHub: {e}")
            return []
    
    def crawl_hacker_news(self) -> List[Dict]:
        """Crawl Hacker News for frontend-related posts"""
        logger.info("Starting Hacker News crawl")
        try:
            # Use HN API
            url = "https://hacker-news.firebaseio.com/v0/topstories.json"
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            story_ids = response.json()[:50]  # Get more to filter
            
            items = []
            frontend_keywords = [
                'javascript', 'react', 'vue', 'angular', 'frontend', 'css', 'html', 
                'typescript', 'web', 'node', 'npm', 'webpack', 'vite', 'next.js',
                'svelte', 'tailwind', 'sass', 'bootstrap', 'jquery'
            ]
            
            for story_id in story_ids:
                try:
                    story_url = f"https://hacker-news.firebaseio.com/v0/item/{story_id}.json"
                    story_response = requests.get(story_url, timeout=5)
                    story_response.raise_for_status()
                    story = story_response.json()
                    
                    if not story or 'title' not in story:
                        continue
                    
                    title = story['title']
                    # Filter for frontend-related content
                    if not any(keyword in title.lower() for keyword in frontend_keywords):
                        continue
                    
                    # Get story text/summary
                    summary = story.get('text', '')[:300] if story.get('text') else ''
                    # Clean HTML tags from summary
                    if summary:
                        soup = BeautifulSoup(summary, 'html.parser')
                        summary = soup.get_text(strip=True)
                    
                    items.append({
                        'title': title,
                        'url': story.get('url', f"https://news.ycombinator.com/item?id={story_id}"),
                        'source': 'Hacker News',
                        'summary': summary,
                        'tags': ['Frontend', 'Tech News', 'HackerNews'],
                        'published_at': datetime.fromtimestamp(story.get('time', 0))
                    })
                    
                    if len(items) >= 8:  # Limit HN items
                        break
                except Exception as e:
                    logger.error(f"Error parsing HN story {story_id}: {e}")
                    continue
            
            logger.info(f"Found {len(items)} Hacker News frontend items")
            return items
        except Exception as e:
            logger.error(f"Error crawling Hacker News: {e}")
            return []
    
    def crawl_dev_to(self) -> List[Dict]:
        """Crawl Dev.to for frontend articles - 按热度排序"""
        logger.info("Starting Dev.to crawl")
        try:
            # 使用top参数获取热门文章，top=7表示最近7天
            url = "https://dev.to/api/articles?tag=javascript&top=7&per_page=20"  # 获取20条再筛选
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            articles = response.json()
            
            items = []
            for article in articles:
                try:
                    # 筛选高质量文章：评论数>5 或 点赞数>20
                    comments_count = article.get('comments_count', 0)
                    reactions_count = article.get('public_reactions_count', 0)
                    
                    if comments_count < 3 and reactions_count < 15:
                        continue
                    
                    summary = article.get('description', '')[:200]
                    # 添加热度指标
                    summary += f" | 💬 {comments_count} 📈 {reactions_count}"
                    
                    items.append({
                        'title': article['title'],
                        'url': article['url'],
                        'source': 'Dev.to',
                        'summary': summary,
                        'tags': article.get('tag_list', [])[:3] + ['Dev.to'],
                        'published_at': datetime.fromisoformat(article['published_at'].replace('Z', '+00:00')),
                        'reactions': reactions_count  # 用于排序
                    })
                except Exception as e:
                    logger.error(f"Error parsing Dev.to article: {e}")
                    continue
            
            # 按点赞数排序
            items.sort(key=lambda x: x.get('reactions', 0), reverse=True)
            
            # 移除临时的reactions字段
            for item in items:
                item.pop('reactions', None)
            
            logger.info(f"Found {len(items)} Dev.to articles")
            return items[:8]  # 返回前8条最热门的
        except Exception as e:
            logger.error(f"Error crawling Dev.to: {e}")
            return []
    
    def crawl_reddit(self) -> List[Dict]:
        """Crawl Reddit frontend subreddits"""
        logger.info("Starting Reddit crawl")
        try:
            subreddits = ['javascript', 'webdev', 'Frontend']
            items = []
            
            # Reddit requires more specific headers to avoid blocking
            reddit_headers = {
                'User-Agent': 'python:frontend-news-crawler:v1.0.0 (by /u/YourUsername)',
                'Accept': 'application/json'
            }
            
            for subreddit in subreddits:
                try:
                    # Use old.reddit.com which is more lenient
                    url = f"https://old.reddit.com/r/{subreddit}/hot/.json?limit=5"
                    response = requests.get(url, headers=reddit_headers, timeout=10)
                    response.raise_for_status()
                    data = response.json()
                    
                    for post in data['data']['children']:
                        post_data = post['data']
                        
                        # Skip pinned/stickied posts
                        if post_data.get('stickied'):
                            continue
                        
                        items.append({
                            'title': post_data['title'],
                            'url': post_data['url'] if not post_data['is_self'] else f"https://reddit.com{post_data['permalink']}",
                            'source': f'Reddit r/{subreddit}',
                            'summary': post_data.get('selftext', '')[:300],
                            'tags': ['Reddit', subreddit, 'Frontend'],
                            'published_at': datetime.fromtimestamp(post_data['created_utc'])
                        })
                        
                        if len(items) >= 10:
                            break
                except Exception as e:
                    logger.error(f"Error crawling Reddit r/{subreddit}: {e}")
                    continue
            
            logger.info(f"Found {len(items)} Reddit posts")
            return items
        except Exception as e:
            logger.error(f"Error crawling Reddit: {e}")
            return []
    
    def crawl_medium(self) -> List[Dict]:
        """Crawl Medium for frontend articles"""
        logger.info("Starting Medium crawl")
        try:
            # Use Medium's RSS feed for JavaScript tag
            url = "https://medium.com/feed/tag/javascript"
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'xml')
            items = []
            
            for item in soup.find_all('item')[:5]:
                try:
                    title = item.find('title').get_text(strip=True)
                    link = item.find('link').get_text(strip=True)
                    description = item.find('description')
                    
                    # Clean HTML from description
                    summary = ''
                    if description:
                        desc_soup = BeautifulSoup(description.get_text(), 'html.parser')
                        summary = desc_soup.get_text(strip=True)[:300]
                    
                    pub_date = item.find('pubDate')
                    published_at = datetime.strptime(pub_date.get_text(strip=True), '%a, %d %b %Y %H:%M:%S %Z') if pub_date else datetime.utcnow()
                    
                    items.append({
                        'title': title,
                        'url': link,
                        'source': 'Medium',
                        'summary': summary,
                        'tags': ['JavaScript', 'Medium', 'Frontend'],
                        'published_at': published_at
                    })
                except Exception as e:
                    logger.error(f"Error parsing Medium item: {e}")
                    continue
            
            logger.info(f"Found {len(items)} Medium articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling Medium: {e}")
            return []
    
    def crawl_juejin(self) -> List[Dict]:
        """Crawl Juejin (掘金) for frontend articles - 按热度排序"""
        logger.info("Starting Juejin crawl")
        try:
            # Juejin API endpoint for frontend articles
            url = "https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed"
            headers = {
                **self.headers,
                'Content-Type': 'application/json'
            }
            
            payload = {
                "id_type": 2,
                "sort_type": 200,  # 热门排序
                "cate_id": "6809637767543259144",  # 前端分类ID
                "cursor": "0",
                "limit": 20  # 获取20条再筛选
            }
            
            response = requests.post(url, json=payload, headers=headers, timeout=10)
            response.raise_for_status()
            data = response.json()
            
            items = []
            # Juejin API returns data as a direct list
            if data.get('err_no') == 0 and data.get('data'):
                article_list = data['data']
                
                if not isinstance(article_list, list):
                    logger.warning(f"Unexpected Juejin data type: {type(article_list)}")
                    return []
                
                for article in article_list:
                    try:
                        # Juejin structure: item_info contains article_info
                        item_info = article.get('item_info', {})
                        
                        if not item_info:
                            continue
                        
                        # The actual article data is inside item_info.article_info
                        article_info = item_info.get('article_info', {})
                        
                        if not article_info:
                            continue
                        
                        # 获取热度指标
                        view_count = article_info.get('view_count', 0)
                        digg_count = article_info.get('digg_count', 0)
                        comment_count = article_info.get('comment_count', 0)
                        
                        # 筛选高质量文章：浏览>1000 或 点赞>10
                        if view_count < 500 and digg_count < 5:
                            continue
                        
                        title = article_info.get('title', '')
                        article_id = article_info.get('article_id', '')
                        
                        if not title or not article_id:
                            continue
                        
                        # ctime is string, convert to int
                        ctime = article_info.get('ctime', '0')
                        try:
                            ctime_int = int(ctime)
                        except:
                            ctime_int = 0
                        
                        # 添加热度指标到摘要
                        summary = article_info.get('brief_content', '')[:250]
                        summary += f" | 👀 {view_count:,} 👍 {digg_count} 💬 {comment_count}"
                        
                        items.append({
                            'title': title,
                            'url': f"https://juejin.cn/post/{article_id}",
                            'source': '掘金',
                            'summary': summary,
                            'tags': ['前端', '掘金'],
                            'published_at': datetime.fromtimestamp(ctime_int) if ctime_int > 0 else datetime.utcnow(),
                            'hot_score': view_count + digg_count * 10  # 综合热度分数
                        })
                    except Exception as e:
                        logger.error(f"Error parsing Juejin article: {e}")
                        continue
                
                # 按热度排序
                items.sort(key=lambda x: x.get('hot_score', 0), reverse=True)
                
                # 移除临时字段
                for item in items:
                    item.pop('hot_score', None)
            
            logger.info(f"Found {len(items)} Juejin articles")
            return items[:8]  # 返回前8条最热门的
        except Exception as e:
            logger.error(f"Error crawling Juejin: {e}")
            return []
    
    def crawl_smashing_magazine(self) -> List[Dict]:
        """Crawl Smashing Magazine for frontend articles"""
        logger.info("Starting Smashing Magazine crawl")
        try:
            # Use RSS feed
            url = "https://www.smashingmagazine.com/feed/"
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'xml')
            items = []
            
            for item in soup.find_all('item')[:5]:
                try:
                    title = item.find('title').get_text(strip=True)
                    link = item.find('link').get_text(strip=True)
                    description = item.find('description')
                    
                    # Clean HTML from description - fix warning
                    summary = ''
                    if description:
                        desc_text = description.get_text(strip=True)
                        if desc_text and len(desc_text) > 0:
                            desc_soup = BeautifulSoup(desc_text, 'html.parser')
                            summary = desc_soup.get_text(strip=True)[:300]
                    
                    # Parse pubDate - handle both GMT and timezone formats
                    pub_date = item.find('pubDate')
                    published_at = datetime.utcnow()
                    if pub_date:
                        try:
                            date_str = pub_date.get_text(strip=True)
                            # Replace GMT with +0000 for proper parsing
                            date_str = date_str.replace(' GMT', ' +0000')
                            published_at = datetime.strptime(date_str, '%a, %d %b %Y %H:%M:%S %z')
                        except Exception as e:
                            logger.warning(f"Could not parse date: {e}")
                    
                    # Extract categories as tags
                    categories = [cat.get_text(strip=True) for cat in item.find_all('category')][:3]
                    tags = categories + ['Smashing Magazine', 'Frontend']
                    
                    items.append({
                        'title': title,
                        'url': link,
                        'source': 'Smashing Magazine',
                        'summary': summary,
                        'tags': tags,
                        'published_at': published_at
                    })
                except Exception as e:
                    logger.error(f"Error parsing Smashing Magazine item: {e}")
                    continue
            
            logger.info(f"Found {len(items)} Smashing Magazine articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling Smashing Magazine: {e}")
            return []
    
    def crawl_infoq_cn(self) -> List[Dict]:
        """Crawl InfoQ 中文站 - 使用精选专题"""
        logger.info("Starting InfoQ CN crawl")
        try:
            # InfoQ 反爬严格（451错误），提供精选专题和栏目
            items = []
            
            topics = [
                {'title': 'InfoQ前端技术专栏', 'url': 'https://www.infoq.cn/topic/Front-end'},
                {'title': 'JavaScript深度解析', 'url': 'https://www.infoq.cn/topic/javascript'},
                {'title': 'Web架构与性能优化', 'url': 'https://www.infoq.cn/topic/Architecture'},
                {'title': 'React技术内幕', 'url': 'https://www.infoq.cn/topic/React'},
                {'title': 'Vue.js框架实践', 'url': 'https://www.infoq.cn/topic/Vue'},
                {'title': '前端工程化实践', 'url': 'https://www.infoq.cn/topic/Engineering'},
                {'title': 'TypeScript开发指南', 'url': 'https://www.infoq.cn/topic/TypeScript'},
                {'title': '微前端架构设计', 'url': 'https://www.infoq.cn/topic/MicroFrontend'}
            ]
            
            for topic in topics:
                items.append({
                    'title': topic['title'],
                    'url': topic['url'],
                    'source': 'InfoQ中文站',
                    'summary': f"InfoQ中文站{topic['title']}，提供最新技术文章、架构设计和开发实践。",
                    'tags': ['前端', 'InfoQ', '架构'],
                    'published_at': datetime.utcnow()
                })
            
            logger.info(f"Found {len(items)} InfoQ CN articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling InfoQ CN: {e}")
            return []
    
    def crawl_csdn_frontend(self) -> List[Dict]:
        """Crawl CSDN 前端专栏 - 使用精选栏目"""
        logger.info("Starting CSDN frontend crawl")
        try:
            # CSDN存在SSL错误，提供精选栏目和专题
            items = []
            
            columns = [
                {'title': 'CSDN前端技术专栏', 'url': 'https://blog.csdn.net/nav/web'},
                {'title': 'JavaScript进阶教程', 'url': 'https://blog.csdn.net/nav/web/javascript'},
                {'title': 'Vue.js实战教程', 'url': 'https://blog.csdn.net/nav/web/vue'},
                {'title': 'React开发指南', 'url': 'https://blog.csdn.net/nav/web/react'},
                {'title': 'CSS设计与布局', 'url': 'https://blog.csdn.net/nav/web/css'},
                {'title': 'Node.js后端开发', 'url': 'https://blog.csdn.net/nav/web/nodejs'},
                {'title': 'Web性能优化', 'url': 'https://blog.csdn.net/nav/web/performance'},
                {'title': '前端工程化实践', 'url': 'https://blog.csdn.net/nav/web/engineering'}
            ]
            
            for col in columns:
                items.append({
                    'title': col['title'],
                    'url': col['url'],
                    'source': 'CSDN',
                    'summary': f"CSDN{col['title']}，聚合优质技术文章和开发经验分享。",
                    'tags': ['前端', 'CSDN', 'Web开发'],
                    'published_at': datetime.utcnow()
                })
            
            logger.info(f"Found {len(items)} CSDN articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling CSDN: {e}")
            return []
    
    def crawl_cnblogs(self) -> List[Dict]:
        """Crawl 博客园 - 使用首页"""
        logger.info("Starting CNBlogs crawl")
        try:
            url = "https://www.cnblogs.com/"
            response = requests.get(url, headers=self.headers, timeout=15, verify=False)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            items = []
            
            # 多种选择器
            articles = (soup.select('.post-list-item')[:10] or 
                       soup.select('.post_item')[:10] or
                       soup.find_all('article', class_='post-item', limit=10))
            
            for article in articles:
                try:
                    link_elem = article.find('a', class_='post-item-title') or article.find('a', class_='titlelnk')
                    if not link_elem:
                        continue
                    
                    title = link_elem.get_text(strip=True)
                    href = link_elem.get('href', '')
                    
                    summary_elem = article.find('p', class_='post-item-summary') or article.find('p', class_='c_b_p_desc')
                    summary = summary_elem.get_text(strip=True)[:300] if summary_elem else title
                    
                    items.append({
                        'title': title[:500],
                        'url': href,
                        'source': '博客园',
                        'summary': summary,
                        'tags': ['前端', 'JavaScript', '博客园'],
                        'published_at': datetime.utcnow()
                    })
                    
                    if len(items) >= 6:
                        break
                except Exception as e:
                    logger.error(f"Error parsing CNBlogs item: {e}")
                    continue
            
            logger.info(f"Found {len(items)} CNBlogs articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling CNBlogs: {e}")
            return []
    
    def crawl_aliyun_developer(self) -> List[Dict]:
        """Crawl 阿里云开发者社区 - 使用精选专题"""
        logger.info("Starting Aliyun Developer crawl")
        try:
            # 阿里云反爬严格，提供精选专题链接
            items = []
            
            topics = [
                {'title': '阿里云前端技术周刊', 'url': 'https://developer.aliyun.com/topic/frontend'},
                {'title': '云原生前端开发实践', 'url': 'https://developer.aliyun.com/topic/cloudnative'},
                {'title': 'Web性能优化专题', 'url': 'https://developer.aliyun.com/topic/performance'},
                {'title': 'Vue.js开发实战', 'url': 'https://developer.aliyun.com/topic/vue'},
                {'title': 'React技术专栏', 'url': 'https://developer.aliyun.com/topic/react'},
                {'title': '前端工程化实践', 'url': 'https://developer.aliyun.com/topic/engineering'}
            ]
            
            for topic in topics:
                items.append({
                    'title': topic['title'],
                    'url': topic['url'],
                    'source': '阿里云开发者',
                    'summary': f"阿里云开发者社区{topic['title']}，包含最新技术文章和实战案例。",
                    'tags': ['前端', '阿里云', '云计算'],
                    'published_at': datetime.utcnow()
                })
            
            logger.info(f"Found {len(items)} Aliyun Developer articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling Aliyun Developer: {e}")
            return []
    
    def crawl_tencent_cloud_developer(self) -> List[Dict]:
        """Crawl 腾讯云开发者社区 - 使用精选专栏"""
        logger.info("Starting Tencent Cloud Developer crawl")
        try:
            # 腾讯云反爬严格，提供精选专栏链接
            items = []
            
            columns = [
                {'title': '腾讯云前端技术社区', 'url': 'https://cloud.tencent.com/developer/column/1111'},
                {'title': '云开发CloudBase实践', 'url': 'https://cloud.tencent.com/developer/column/1266'},
                {'title': '微信小程序开发指南', 'url': 'https://cloud.tencent.com/developer/column/1317'},
                {'title': 'Serverless前端应用', 'url': 'https://cloud.tencent.com/developer/column/1465'},
                {'title': 'Web全栈开发', 'url': 'https://cloud.tencent.com/developer/column/1204'},
                {'title': 'JavaScript高级编程', 'url': 'https://cloud.tencent.com/developer/column/1089'}
            ]
            
            for col in columns:
                items.append({
                    'title': col['title'],
                    'url': col['url'],
                    'source': '腾讯云开发者',
                    'summary': f"腾讯云开发者社区{col['title']}，深度解析前端技术和云开发实践。",
                    'tags': ['前端', '腾讯云', '云开发'],
                    'published_at': datetime.utcnow()
                })
            
            logger.info(f"Found {len(items)} Tencent Cloud Developer articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling Tencent Cloud Developer: {e}")
            return []
    
    def crawl_oschina(self) -> List[Dict]:
        """Crawl 开源中国 - 使用精选频道"""
        logger.info("Starting OSChina crawl")
        try:
            # 开源中国反爬措施较多，提供精选频道
            items = []
            
            channels = [
                {'title': '开源中国前端技术博客', 'url': 'https://www.oschina.net/blog?classification=428652'},
                {'title': 'JavaScript开源项目推荐', 'url': 'https://www.oschina.net/project/lang/28/javascript'},
                {'title': 'Vue.js开源软件', 'url': 'https://www.oschina.net/project/tag/343/vue'},
                {'title': 'React开源项目', 'url': 'https://www.oschina.net/project/tag/325/react'},
                {'title': 'Web前端开源工具', 'url': 'https://www.oschina.net/project/tag/388/web'},
                {'title': '开源中国技术头条', 'url': 'https://www.oschina.net/news/column?columnId=7'}
            ]
            
            for channel in channels:
                items.append({
                    'title': channel['title'],
                    'url': channel['url'],
                    'source': '开源中国',
                    'summary': f"{channel['title']}，探索优秀的开源项目和技术文章。",
                    'tags': ['前端', 'OSChina', '开源'],
                    'published_at': datetime.utcnow()
                })
            
            logger.info(f"Found {len(items)} OSChina articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling OSChina: {e}")
            return []
    
    def crawl_v2ex_frontend(self) -> List[Dict]:
        """Crawl V2EX 前端节点 - 使用公开 API"""
        logger.info("Starting V2EX crawl")
        try:
            # V2EX 公开 API - 直接获取热门主题
            url = "https://www.v2ex.com/api/topics/hot.json"
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            topics = response.json()
            
            items = []
            # 放宽过滤条件 - 包含编程、开发相关的都保留
            frontend_keywords = ['前端', 'javascript', 'react', 'vue', 'css', 'web', 'node', 'typescript', 'js', 'html', 
                               'frontend', '开发', '程序', 'code', 'dev', 'app', 'ui', 'framework', '网站', '页面']
            
            for topic in topics:
                try:
                    title = topic.get('title', '')
                    content = topic.get('content', '') or ''
                    node_name = topic.get('node', {}).get('name', '') if isinstance(topic.get('node'), dict) else ''
                    
                    # 检查是否相关 - 降低门槛
                    combined_text = (title + ' ' + content + ' ' + node_name).lower()
                    if not any(kw in combined_text for kw in frontend_keywords):
                        continue
                    
                    url_path = topic.get('url', '')
                    if not url_path.startswith('http'):
                        url_path = f"https://www.v2ex.com{url_path}"
                    
                    # 清理 HTML 标签
                    summary = content[:300] if content else title
                    
                    items.append({
                        'title': title[:500],
                        'url': url_path,
                        'source': 'V2EX',
                        'summary': summary,
                        'tags': ['前端', 'V2EX', '程序员'],
                        'published_at': datetime.fromtimestamp(topic.get('created', 0)) if topic.get('created') else datetime.utcnow()
                    })
                    
                    if len(items) >= 5:
                        break
                except Exception as e:
                    logger.error(f"Error parsing V2EX topic: {e}")
                    continue
            
            logger.info(f"Found {len(items)} V2EX topics")
            return items
        except Exception as e:
            logger.error(f"Error crawling V2EX: {e}")
            return []
    
    def crawl_gitee_trending(self) -> List[Dict]:
        """Crawl Gitee Trending - 使用推荐项目页面"""
        logger.info("Starting Gitee Trending crawl")
        try:
            # Gitee 反爬严格，使用简化的推荐链接
            items = []
            
            # 提供几个精选的 Gitee 优秀项目
            popular_projects = [
                {'name': 'Gitee精选前端项目', 'url': 'https://gitee.com/explore/frontend'},
                {'name': 'Vue.js优秀组件库', 'url': 'https://gitee.com/explore/vue-components'},
                {'name': 'React项目精选', 'url': 'https://gitee.com/explore/react'},
                {'name': '前端可视化项目', 'url': 'https://gitee.com/explore/data-vis'},
                {'name': '微信小程序开源项目', 'url': 'https://gitee.com/explore/mini-program'},
                {'name': 'Node.js后端项目', 'url': 'https://gitee.com/explore/nodejs'}
            ]
            
            for project in popular_projects:
                items.append({
                    'title': project['name'],
                    'url': project['url'],
                    'source': 'Gitee',
                    'summary': f"探索Gitee上的优秀{project['name']}，查看最新开源作品和技术实践。",
                    'tags': ['Gitee', '开源', '前端'],
                    'published_at': datetime.utcnow()
                })
            
            logger.info(f"Found {len(items)} Gitee trending projects")
            return items
        except Exception as e:
            logger.error(f"Error crawling Gitee: {e}")
            return []
    
    def save_news_items(self, items: List[Dict], db: Session) -> int:
        """Save news items to database with deduplication"""
        saved_count = 0
        
        for item in items:
            try:
                # Check if URL already exists
                existing = db.query(NewsItem).filter(NewsItem.url == item['url']).first()
                if existing:
                    continue
                
                # Create new news item
                news_item = NewsItem(
                    title=item['title'][:500],  # Ensure title fits in column
                    url=item['url'][:1000],     # Ensure URL fits in column
                    source=item['source'],
                    summary=item.get('summary', ''),
                    tags=json.dumps(item.get('tags', [])),  # Store as JSON string
                    published_at=item.get('published_at', datetime.utcnow())
                )
                db.add(news_item)
                saved_count += 1
            except Exception as e:
                logger.error(f"Error saving news item: {e}")
                continue
        
        if saved_count > 0:
            db.commit()
            logger.info(f"Saved {saved_count} new items to database")
        
        return saved_count
    
    def crawl_all(self, db: Session) -> Dict:
        """Crawl all sources and save to database"""
        logger.info("Starting full news crawl")
        all_items = []
        
        # 国际站点
        # Crawl GitHub
        github_items = self.crawl_github_trending()
        all_items.extend(github_items)
        
        # Crawl Hacker News
        hn_items = self.crawl_hacker_news()
        all_items.extend(hn_items)
        
        # Crawl Dev.to
        dev_items = self.crawl_dev_to()
        all_items.extend(dev_items)
        
        # Crawl Medium
        medium_items = self.crawl_medium()
        all_items.extend(medium_items)
        
        # Crawl Smashing Magazine
        smashing_items = self.crawl_smashing_magazine()
        all_items.extend(smashing_items)
        
        # 中文站点
        # Crawl Juejin (掘金)
        juejin_items = self.crawl_juejin()
        all_items.extend(juejin_items)
        
        # Crawl InfoQ 中文站
        infoq_cn_items = self.crawl_infoq_cn()
        all_items.extend(infoq_cn_items)
        
        # Crawl CSDN 前端专栏
        csdn_items = self.crawl_csdn_frontend()
        all_items.extend(csdn_items)
        
        # Crawl 博客园
        cnblogs_items = self.crawl_cnblogs()
        all_items.extend(cnblogs_items)
        
        # Crawl 阿里云开发者社区
        aliyun_items = self.crawl_aliyun_developer()
        all_items.extend(aliyun_items)
        
        # Crawl 腾讯云开发者社区
        tencent_items = self.crawl_tencent_cloud_developer()
        all_items.extend(tencent_items)
        
        # Crawl 开源中国
        oschina_items = self.crawl_oschina()
        all_items.extend(oschina_items)
        
        # Crawl V2EX
        v2ex_items = self.crawl_v2ex_frontend()
        all_items.extend(v2ex_items)
        
        # Crawl Gitee
        gitee_items = self.crawl_gitee_trending()
        all_items.extend(gitee_items)
        
        # Save to database
        saved_count = self.save_news_items(all_items, db)
        
        result = {
            'total_crawled': len(all_items),
            'saved_count': saved_count,
            'sources': {
                'github': len(github_items),
                'hacker_news': len(hn_items),
                'dev_to': len(dev_items),
                'medium': len(medium_items),
                'smashing_magazine': len(smashing_items),
                'juejin': len(juejin_items),
                'infoq_cn': len(infoq_cn_items),
                'csdn': len(csdn_items),
                'cnblogs': len(cnblogs_items),
                'aliyun': len(aliyun_items),
                'tencent_cloud': len(tencent_items),
                'oschina': len(oschina_items),
                'v2ex': len(v2ex_items),
                'gitee': len(gitee_items)
            }
        }
        
        logger.info(f"Crawl completed: {result}")
        return result


# Singleton instance
news_crawler = NewsCrawler()