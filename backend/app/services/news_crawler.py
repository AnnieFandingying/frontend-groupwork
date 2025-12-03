import requests
from bs4 import BeautifulSoup
from typing import List, Dict
from datetime import datetime
from sqlalchemy.orm import Session
import logging

from app.models.models import NewsItem
import json

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class NewsCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
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
            for article in soup.find_all('article', class_='Box-row')[:10]:
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
                    
                    # Get stars count if available
                    stars_element = article.find('a', href=lambda x: x and '/stargazers' in x)
                    stars = stars_element.get_text(strip=True) if stars_element else "0"
                    
                    items.append({
                        'title': title,
                        'url': url,
                        'source': 'GitHub Trending',
                        'summary': f"{summary} ⭐ {stars}",
                        'tags': ['JavaScript', 'GitHub', 'Trending'],
                        'published_at': datetime.utcnow()
                    })
                except Exception as e:
                    logger.error(f"Error parsing GitHub item: {e}")
                    continue
            
            logger.info(f"Found {len(items)} GitHub trending items")
            return items
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
        """Crawl Dev.to for frontend articles"""
        logger.info("Starting Dev.to crawl")
        try:
            url = "https://dev.to/api/articles?tag=javascript&top=7&per_page=5"
            response = requests.get(url, headers=self.headers, timeout=10)
            response.raise_for_status()
            articles = response.json()
            
            items = []
            for article in articles:
                try:
                    items.append({
                        'title': article['title'],
                        'url': article['url'],
                        'source': 'Dev.to',
                        'summary': article.get('description', '')[:200],
                        'tags': article.get('tag_list', [])[:3] + ['Dev.to'],
                        'published_at': datetime.fromisoformat(article['published_at'].replace('Z', '+00:00'))
                    })
                except Exception as e:
                    logger.error(f"Error parsing Dev.to article: {e}")
                    continue
            
            logger.info(f"Found {len(items)} Dev.to articles")
            return items
        except Exception as e:
            logger.error(f"Error crawling Dev.to: {e}")
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
        
        # Crawl GitHub
        github_items = self.crawl_github_trending()
        all_items.extend(github_items)
        
        # Crawl Hacker News
        hn_items = self.crawl_hacker_news()
        all_items.extend(hn_items)
        
        # Crawl Dev.to
        dev_items = self.crawl_dev_to()
        all_items.extend(dev_items)
        
        # Save to database
        saved_count = self.save_news_items(all_items, db)
        
        result = {
            'total_crawled': len(all_items),
            'saved_count': saved_count,
            'sources': {
                'github': len(github_items),
                'hacker_news': len(hn_items),
                'dev_to': len(dev_items)
            }
        }
        
        logger.info(f"Crawl completed: {result}")
        return result


# Singleton instance
news_crawler = NewsCrawler()