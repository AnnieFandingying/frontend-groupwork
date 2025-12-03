<template>
  <div class="h-full overflow-y-auto pr-2">
    <!-- 头部控制栏 -->
    <div class="flex items-center justify-between mb-4 sticky top-0 bg-white z-10 py-2">
      <div class="flex items-center gap-2">
        <h2 class="text-sm font-bold text-gray-700">前沿资讯</h2>
        <span class="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{{ newsItems.length }}</span>
      </div>
      <div class="flex items-center gap-2">
        <select v-model="selectedSource" @change="fetchNews" class="text-xs border border-gray-200 rounded px-2 py-1">
          <option value="">所有来源</option>
          <option v-for="source in sources" :key="source" :value="source">{{ source }}</option>
        </select>
        <button @click="refreshNews" :disabled="isLoading" 
                class="px-2 py-1 bg-primary text-white text-xs rounded hover:bg-orange-600 disabled:opacity-50">
          <Loader2 v-if="isLoading" :size="12" class="animate-spin" />
          <RefreshCw v-else :size="12" />
        </button>
      </div>
    </div>

    <!-- 新闻列表 -->
    <div class="columns-1 gap-4 space-y-4" v-if="!isLoading && newsItems.length > 0">
      <div 
        v-for="item in newsItems" 
        :key="item.id" 
        @click="openLink(item.url)"
        class="break-inside-avoid bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer hover:border-primary/20"
      >
        <div class="flex justify-between items-start mb-2">
          <span class="text-xs font-bold text-primary uppercase tracking-wider">{{ item.source }}</span>
          <span class="text-xs text-gray-400">{{ formatDate(item.published_at) }}</span>
        </div>
        
        <h3 class="font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors leading-snug">
          {{ item.title }}
        </h3>
        
        <p v-if="item.summary" class="text-xs text-gray-600 mb-3 leading-relaxed">
          {{ truncateSummary(item.summary) }}
        </p>
        
        <div class="flex items-center justify-between">
          <div class="flex gap-1 flex-wrap">
            <span 
              v-for="tag in item.tags.slice(0, 3)" 
              :key="tag" 
              class="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-full flex items-center gap-1"
            >
              <Tag :size="8" /> {{ tag }}
            </span>
          </div>
          <ExternalLink :size="14" class="text-gray-300 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </div>
    
    <!-- 加载状态 -->
    <div v-if="isLoading" class="flex items-center justify-center py-8">
      <Loader2 :size="24" class="animate-spin text-primary" />
      <span class="ml-2 text-gray-500">加载中...</span>
    </div>
    
    <!-- 空状态 -->
    <div v-if="!isLoading && newsItems.length === 0" class="text-center py-8 text-gray-400">
      <div class="text-4xl mb-2">📰</div>
      <p>暂无新闻数据</p>
      <button @click="refreshNews" class="mt-2 px-4 py-2 bg-primary text-white text-sm rounded hover:bg-orange-600">
        立即获取
      </button>
    </div>
    
    <!-- 错误状态 -->
    <div v-if="error" class="text-center py-8 text-red-500">
      <div class="text-4xl mb-2">⚠️</div>
      <p>{{ error }}</p>
      <button @click="fetchNews" class="mt-2 px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600">
        重试
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ExternalLink, Tag, RefreshCw, Loader2 } from 'lucide-vue-next';

interface NewsItem {
  id: number;
  title: string;
  url: string;
  source: string;
  summary: string;
  tags: string[];
  published_at: string;
  created_at: string;
}

const newsItems = ref<NewsItem[]>([]);
const sources = ref<string[]>([]);
const selectedSource = ref('');
const isLoading = ref(false);
const error = ref('');

// 获取新闻数据
const fetchNews = async () => {
  isLoading.value = true;
  error.value = '';
  
  try {
    const params = new URLSearchParams();
    params.append('limit', '20');
    if (selectedSource.value) {
      params.append('source', selectedSource.value);
    }
    
    console.log('请求新闻API:', `http://localhost:8000/api/v1/news?${params}`);
    
    const response = await fetch(`http://localhost:8000/api/v1/news?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('API响应状态:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API错误详情:', errorText);
      throw new Error(`获取新闻失败: ${response.status} ${errorText}`);
    }
    
    const data = await response.json();
    console.log('获取到的新闻数据:', data);
    newsItems.value = data;
  } catch (err) {
    console.error('获取新闻失败:', err);
    error.value = err instanceof Error ? err.message : '获取新闻失败';
  } finally {
    isLoading.value = false;
  }
};

// 获取新闻源列表
const fetchSources = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/news/sources');
    if (response.ok) {
      const data = await response.json();
      sources.value = data;
    }
  } catch (err) {
    console.error('获取新闻源失败:', err);
  }
};

// 刷新新闻（手动爬取）
const refreshNews = async () => {
  isLoading.value = true;
  error.value = '';
  
  try {
    const response = await fetch('http://localhost:8000/api/v1/news/crawl', {
      method: 'POST'
    });
    
    if (!response.ok) {
      throw new Error('爬取新闻失败');
    }
    
    const result = await response.json();
    console.log('爬取结果:', result);
    
    // 爬取完成后重新获取新闻
    await fetchNews();
  } catch (err) {
    console.error('爬取新闻失败:', err);
    error.value = err instanceof Error ? err.message : '爬取新闻失败';
    isLoading.value = false;
  }
};

// 格式化日期
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffHours < 1) {
    return '刚刚';
  } else if (diffHours < 24) {
    return `${diffHours}小时前`;
  } else if (diffDays < 7) {
    return `${diffDays}天前`;
  } else {
    return date.toLocaleDateString('zh-CN');
  }
};

// 截断摘要
const truncateSummary = (summary: string) => {
  if (!summary) return '';
  return summary.length > 120 ? summary.substring(0, 120) + '...' : summary;
};

// 打开链接
const openLink = (url: string) => {
  window.open(url, '_blank');
};

// 组件挂载时获取数据
onMounted(async () => {
  console.log('NewsFeed组件加载，开始获取数据...');
  await fetchSources();
  await fetchNews();
  console.log('数据获取完成，新闻数量:', newsItems.value.length);
});
</script>
