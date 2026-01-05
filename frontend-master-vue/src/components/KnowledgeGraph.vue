<template>
  <div ref="containerRef" class="relative w-full h-full bg-surface rounded-2xl overflow-hidden shadow-inner border border-gray-200">
    
    <!-- Search Bar -->
    <div class="absolute top-4 left-4 z-10 w-80">
      <div class="relative">
        <input
          v-model="searchQuery"
          @input="onSearchInput"
          @focus="showSearchResults = true"
          @blur="hideSearchResults"
          type="text"
          placeholder="搜索技术节点..."
          class="w-full px-4 py-2 pl-10 pr-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
        />
        <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="16" />
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X :size="16" />
        </button>
      </div>
      
      <!-- Search Results Dropdown -->
      <div
        v-if="showSearchResults && (searchResults.length > 0 || searchQuery)"
        class="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50"
      >
        <div v-if="searchResults.length === 0 && searchQuery" class="p-3 text-sm text-gray-500 text-center">
          未找到匹配的节点
        </div>
        <div v-else>
          <button
            v-for="result in searchResults.slice(0, 8)"
            :key="result.id"
            @mousedown.prevent="selectSearchResult(result)"
            class="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
          >
            <div class="flex items-center gap-3">
              <div :class="[
                'w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold',
                getNodeColor(result.group)
              ]">
                {{ result.label.substring(0, 1) }}
              </div>
              <div class="flex-1">
                <div class="font-medium text-sm text-gray-800" v-html="highlightMatch(result.label, searchQuery)" />
                <div class="text-xs text-gray-500">{{ getGroupName(result.group) }}</div>
              </div>
              <div class="text-xs text-gray-400" v-if="currentLevel === 'advanced'">
                难度: {{ result.mastery || 0 }}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Level Switcher -->
    <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <div class="flex gap-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-2 shadow-lg">
        <button 
          @click="currentLevel = 'beginner'"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            currentLevel === 'beginner' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          🎯 初阶
        </button>
        <button 
          @click="currentLevel = 'intermediate'"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            currentLevel === 'intermediate' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          🚀 中阶
        </button>
        <button 
          @click="currentLevel = 'advanced'"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            currentLevel === 'advanced' 
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          ⭐ 高阶
        </button>
      </div>
    </div>

    <!-- Node Level Filter (仅在初阶和中阶时显示) -->
    <div v-if="currentLevel === 'beginner' || currentLevel === 'intermediate'" class="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
      <div class="bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-lg">
        <div class="flex items-center gap-3">
          <span class="text-xs font-medium text-gray-600">显示节点层级:</span>
          <div class="flex gap-1">
            <button
              v-for="level in maxNodeLevel"
              :key="level"
              @click="selectedNodeLevel = level"
              :class="[
                'w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200',
                selectedNodeLevel === level
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md scale-110'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              ]"
              :title="`显示到${level}级节点`"
            >
              {{ level }}
            </button>
          </div>
          <span class="text-xs text-gray-500">（1-{{ selectedNodeLevel }}级）</span>
          <button
            v-if="expandedNodes.size > 0"
            @click="resetExpandedNodes"
            class="ml-2 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1 shadow-md"
            title="收起所有展开的子节点"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            重置
          </button>
        </div>
      </div>
    </div>

    <!-- Relation Legend -->
    <div class="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-4">
      <!-- 当前级别信息 -->
      <div class="mb-3 pb-3 border-b border-gray-200">
        <div class="flex items-center gap-2 mb-2">
          <span v-if="currentLevel === 'beginner'" class="text-lg">🎯</span>
          <span v-else-if="currentLevel === 'intermediate'" class="text-lg">🚀</span>
          <span v-else class="text-lg">⭐</span>
          <span class="text-sm font-bold text-gray-700">
            {{ currentLevel === 'beginner' ? '初阶学习' : currentLevel === 'intermediate' ? '中阶进阶' : '高阶专家' }}
          </span>
        </div>
        <div class="text-xs text-gray-500">
          节点: {{ currentGraphData.nodes.length }} | 连接: {{ currentGraphData.links.length }}
        </div>
      </div>
      
      <h4 class="text-xs font-bold text-gray-700 mb-3 flex items-center gap-2">
        <div class="w-5 h-5 rounded bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
          <span class="text-[10px]">🔗</span>
        </div>
        关系类型
      </h4>
      <div class="space-y-2">
        <div v-for="(config, type) in relationTypes" :key="type" class="flex items-center gap-2 text-xs">
          <div class="w-8 h-0.5" :style="{ backgroundColor: config.color }" />
          <span class="font-medium text-gray-700">{{ config.label }}</span>
          <span class="text-gray-400 text-[10px]">({{ config.description }})</span>
        </div>
      </div>
    </div>

    <!-- Top Right Controls (Camera + Maximize) -->
    <div class="absolute top-4 right-4 z-10 flex gap-2">
      <button 
        @click="toggleCamera"
        :class="[
          'p-2 rounded-lg backdrop-blur-md border shadow-sm transition-all hover:scale-105 active:scale-95',
          isLoadingCamera ? 'bg-yellow-500/10 border-yellow-200 text-yellow-600' :
          cameraActive ? 'bg-red-500/10 border-red-200 text-red-600' : 'bg-white/80 border-gray-200 text-gray-600'
        ]"
        :title="isLoadingCamera ? '正在初始化摄像头...' : cameraActive ? '关闭视觉交互' : '开启视觉交互'"
        :disabled="isLoadingCamera"
      >
        <Loader2 v-if="isLoadingCamera" class="animate-spin" :size="20" />
        <VideoOff v-else-if="cameraActive" :size="20" />
        <Video v-else :size="20" />
      </button>
      
      <button 
        v-if="onMaximize"
        @click="onMaximize" 
        class="p-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg text-gray-600 hover:text-primary hover:scale-105 active:scale-95 transition-all shadow-sm"
        title="放大视图"
      >
        <Maximize :size="20" />
      </button>
    </div>

    <!-- Main SVG -->
    <svg ref="svgRef" class="w-full h-full block" />

    <!-- Camera & Gesture Overlay -->
    <div v-if="cameraActive" class="absolute bottom-4 right-4 w-64 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/50 overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
      <div class="relative h-48 bg-gray-800">
        <video 
          ref="videoRef" 
          class="absolute inset-0 w-full h-full object-cover z-10" 
          style="background: #333; transform: scaleX(-1);"
          playsinline 
          muted 
          autoplay
          :width="320"
          :height="240"
        />
        <canvas ref="canvasRef" class="absolute inset-0 w-full h-full object-cover z-20" />
        <div class="absolute top-2 left-2 px-2 py-1 bg-black/50 text-white text-[10px] rounded backdrop-blur">
          {{ isLoadingCamera ? '正在初始化...' : '视觉引擎运行中' }}
        </div>
        
        <!-- 调试信息 -->
        <div class="absolute top-6 left-2 px-2 py-1 bg-black/50 text-white text-[8px] rounded backdrop-blur" v-if="cameraActive">
          视频: {{ videoRef?.videoWidth || 0 }}x{{ videoRef?.videoHeight || 0 }}
          <br>播放: {{ videoRef?.paused ? '暂停' : '播放' }}
          <br>流: {{ streamRef?.active ? '活跃' : '非活跃' }}
          <br>光标调试: {{ debugCursorInfo }}
        </div>
      </div>
      
      <div class="p-3 border-t border-gray-100">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold text-gray-500">当前手势</span>
        <span :class="[
          'text-xs font-bold px-2 py-0.5 rounded-full',
          activeGestureType ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'
        ]">
          {{ gestureState }}
        </span>
      </div>
      
        <div class="space-y-2">
          <!-- 当前手势 -->
          <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-500">
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'point' ? 'bg-green-100 text-green-700 font-bold' : '']">
              <MousePointer2 :size="10" /> 食指: 移动光标
            </div>
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'pinch' ? 'bg-green-100 text-green-700 font-bold' : '']">
              <Hand :size="10" /> 捏合: 拖拽
            </div>
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'open' ? 'bg-green-100 text-green-700 font-bold' : '']">
              <ZoomIn :size="10" /> 张开: 放大
            </div>
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'closed' ? 'bg-green-100 text-green-700 font-bold' : '']">
              <ZoomOut :size="10" /> 握拳: 缩小
            </div>
          </div>
          
          <!-- 双手手势 -->
          <div class="border-t border-gray-200 pt-2">
            <div class="text-[9px] text-gray-400 mb-1 font-bold">双手手势</div>
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors text-[10px]', activeGestureType === 'twopoint' && gestureState.includes('点击') ? 'bg-green-100 text-green-700 font-bold' : 'text-gray-500']">
              <Hand :size="10" /><Hand :size="10" /> 双食指: 点击节点
            </div>
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors text-[10px] mt-1', activeGestureType === 'twopoint' && gestureState.includes('中指滚动') ? 'bg-green-100 text-green-700 font-bold' : 'text-gray-500']">
              <Hand :size="10" /><Hand :size="10" /> 食指+中指: 向下滚动
            </div>
            <div :class="['flex items-center gap-1 p-1 rounded transition-colors text-[10px] mt-1', activeGestureType === 'twopoint' && gestureState.includes('双中指') ? 'bg-green-100 text-green-700 font-bold' : 'text-gray-500']">
              <Hand :size="10" /><Hand :size="10" /> 双手双指: 向上滚动
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Node Detail Modal -->
    <div v-if="selectedNode && !showDocumentation && !gestureTriggered" class="absolute top-4 left-4 bottom-4 w-80 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl border border-white p-6 overflow-y-auto z-20 animate-in slide-in-from-left duration-300">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-gray-800">{{ selectedNode.label }}</h3>
        <button @click="selectedNode = null" class="text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>
      <div class="space-y-4">
        <div v-if="currentLevel === 'advanced'">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">难度</span>
          <div class="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full bg-primary" :style="{ width: `${selectedNode.mastery || 0}%` }" />
          </div>
        </div>
        
        <div class="p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p class="text-xs text-blue-700 leading-relaxed">
            这里是关于 <strong>{{ selectedNode.label }}</strong> 的核心知识点总结。结合 AI 问答模块，你可以获取该节点的详细代码示例和最佳实践。
          </p>
        </div>

        <!-- 查看子级节点按钮（仅在初阶和中阶显示，排除中心节点和level5节点） -->
        <div v-if="(currentLevel === 'beginner' || currentLevel === 'intermediate') && selectedNode.group !== 'center' && selectedNode.group !== 'level5' && hasChildNodes(selectedNode.id)" class="p-3 bg-purple-50 rounded-lg border border-purple-100">
          <button 
            @click="toggleChildNodes(selectedNode.id)"
            class="w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
            :class="expandedNodes.has(selectedNode.id) 
              ? 'bg-purple-500 text-white hover:bg-purple-600' 
              : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50'"
          >
            <svg v-if="expandedNodes.has(selectedNode.id)" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            {{ expandedNodes.has(selectedNode.id) ? '收起子级节点' : '查看子级节点' }}
          </button>
          <p class="text-xs text-purple-600 mt-2 text-center">
            {{ expandedNodes.has(selectedNode.id) ? '已显示该节点的直接子级' : '点击显示下一层级节点' }}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button @click="openDocumentation" class="px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs font-medium text-gray-600 border border-gray-200 transition-colors flex items-center gap-1">
            <BookOpen :size="12" />
            查看文档
          </button>
          <button class="px-3 py-2 bg-primary hover:bg-orange-600 text-white rounded-lg text-xs font-medium shadow-lg shadow-orange-200 transition-colors flex items-center gap-1">
            <Code :size="12" />
            开始练习
          </button>
        </div>
      </div>
    </div>

    <!-- Documentation Modal -->
    <div v-if="showDocumentation && selectedNode" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="closeDocumentation">
      <div class="bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden" @click.stop>
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-blue-500/5">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <BookOpen class="text-primary" :size="20" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-800">{{ getNodeDocumentation(selectedNode.id).title }}</h2>
              <p class="text-sm text-gray-500">组件: {{ selectedNode.label }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button 
              @click="exportToMarkdown" 
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-primary"
              title="导出为 Markdown"
            >
              <Download :size="20" />
            </button>
            <button @click="closeDocumentation" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X :size="20" class="text-gray-500" />
            </button>
          </div>
        </div>

        <!-- Content -->
        <div ref="docContentRef" class="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div class="prose prose-sm max-w-none">
            <!-- 文档内容 -->
            <div class="mb-8">
              <div class="markdown-content text-gray-700 leading-relaxed text-sm" v-html="renderedContent" />
            </div>

            <!-- 代码示例 -->
            <div v-if="getNodeDocumentation(selectedNode.id).examples?.length" class="mb-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Code :size="18" class="text-primary" />
                代码示例
              </h3>
              <div class="space-y-4">
                <div v-for="(example, index) in getNodeDocumentation(selectedNode.id).examples" :key="index" class="relative">
                  <div class="bg-gray-900 rounded-lg overflow-hidden">
                    <div class="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-xs">
                      <span>示例 {{ index + 1 }}</span>
                      <button class="hover:text-white transition-colors">
                        复制代码
                      </button>
                    </div>
                    <pre class="p-4 overflow-x-auto"><code class="text-gray-300 text-sm">{{ example }}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <!-- 学习资源 -->
            <div v-if="getNodeDocumentation(selectedNode.id).resources?.length" class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <ExternalLink :size="18" class="text-primary" />
                学习资源
              </h3>
              <div class="grid gap-2">
                <a v-for="(resource, index) in getNodeDocumentation(selectedNode.id).resources" :key="index" :href="resource.url || '#'" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700 hover:text-blue-800 group">
                  <ExternalLink :size="14" class="group-hover:scale-110 transition-transform" />
                  <span class="text-sm font-medium">{{ resource.name || resource }}</span>
                  <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs text-blue-500">点击访问</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- 练习建议 -->
            <div class="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
              <h4 class="font-semibold text-orange-800 mb-2">学习建议</h4>
              <p class="text-orange-700 text-sm">
                建议结合 AI 导师功能深入学习 {{ selectedNode.label }} 的实际应用和项目实战。
                您可以在代码演练场中练习相关的编程技巧。
              </p>
              <div class="flex gap-2 mt-3">
                <button class="px-3 py-1 bg-primary text-white rounded text-xs font-medium hover:bg-orange-600 transition-colors">
                  询问 AI 导师
                </button>
                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors">
                  进入练习场
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import * as d3 from 'd3';
import { GraphData, Node } from '../types';
import { Maximize, Loader2, Video, VideoOff, Hand, MousePointer2, ZoomIn, ZoomOut, X, ExternalLink, BookOpen, Code, Search, Download } from 'lucide-vue-next';
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
import { NODE_DOCUMENTS } from '../data/nodeDocuments';
import { marked } from 'marked';
import { RELATION_TYPES, ADVANCED_GRAPH_DATA } from '../constants';
import { BEGINNER_GRAPH_DATA, INTERMEDIATE_GRAPH_DATA } from '../graphLevels';

interface Props {
  data: GraphData;
  onMaximize?: () => void;
}

const props = defineProps<Props>();

const svgRef = ref<SVGSVGElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const docContentRef = ref<HTMLDivElement | null>(null); // 文档内容滚动容器

const selectedNode = ref<Node | null>(null);
const showDocumentation = ref(false);
const cameraActive = ref(false);
const isLoadingCamera = ref(false);
const gestureState = ref<string>('无手势');
const activeGestureType = ref<'open' | 'closed' | 'pinch' | 'point' | 'twopoint' | null>(null);
const debugCursorInfo = ref<string>(''); // 调试光标信息
const hoveredNode = ref<Node | null>(null); // 当前悬停的节点
const lastClickTime = ref<number>(0); // 上次点击时间
const wasTwoHandsPointing = ref<boolean>(false); // 上一帧是否是双手食指状态
const gestureTriggered = ref<boolean>(false); // 标记是否通过手势触发的文档显示

// 搜索相关的响应式变量
const searchQuery = ref<string>('');
const searchResults = ref<Node[]>([]);
const showSearchResults = ref<boolean>(false);
const highlightedNodes = ref<Set<string>>(new Set());

// 关系类型配置
const relationTypes = ref(RELATION_TYPES);

// 级别切换相关
const currentLevel = ref<'beginner' | 'intermediate' | 'advanced'>('advanced');

// 节点层级过滤相关
const selectedNodeLevel = ref<number>(1); // 默认只显示1级节点
const expandedNodes = ref<Set<string>>(new Set()); // 记录哪些节点的子级被展开

// 计算当前图谱的最大节点层级
const maxNodeLevel = computed(() => {
  if (currentLevel.value === 'beginner' || currentLevel.value === 'intermediate') {
    // 分析节点的group属性，找出最大层级
    const groups = currentGraphData.value.nodes.map(n => n.group);
    const levels = groups
      .filter(g => g && g.startsWith('level'))
      .map(g => parseInt(g.replace('level', '')))
      .filter(l => !isNaN(l));
    return levels.length > 0 ? Math.max(...levels) : 4;
  }
  return 0; // 高阶模式不使用层级过滤
});

// 动态计算当前使用的图谱数据
const currentGraphData = computed(() => {
  switch (currentLevel.value) {
    case 'beginner': 
      return BEGINNER_GRAPH_DATA;
    case 'intermediate': 
      return INTERMEDIATE_GRAPH_DATA;
    case 'advanced': 
      return ADVANCED_GRAPH_DATA;
    default:
      return BEGINNER_GRAPH_DATA;
  }
});

// 根据选择的层级过滤节点和连接
const filteredGraphData = computed(() => {
  // 高阶模式不过滤
  if (currentLevel.value === 'advanced') {
    return currentGraphData.value;
  }

  // 过滤节点：保留center、指定层级以下的节点，以及被展开节点的子级
  const filteredNodes = currentGraphData.value.nodes.filter(node => {
    if (node.group === 'center') return true;
    if (!node.group || !node.group.startsWith('level')) return true;
    
    const level = parseInt(node.group.replace('level', ''));
    
    // 检查是否在基本层级范围内
    if (!isNaN(level) && level <= selectedNodeLevel.value) {
      return true;
    }
    
    // 检查是否是某个展开节点的直接子级
    if (expandedNodes.value.size > 0) {
      // 查找所有连接，看该节点是否是某个展开节点的直接子级
      const isChildOfExpanded = currentGraphData.value.links.some(link => {
        const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id;
        const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id;
        
        // 如果这个节点是某个展开节点的target
        if (targetId === node.id && expandedNodes.value.has(sourceId)) {
          return true;
        }
        return false;
      });
      
      if (isChildOfExpanded) return true;
    }
    
    return false;
  });

  // 获取过滤后的节点ID集合
  const nodeIds = new Set(filteredNodes.map(n => n.id));

  // 过滤连接：只保留两端节点都存在的连接
  const filteredLinks = currentGraphData.value.links.filter(link => {
    const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id;
    const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id;
    return nodeIds.has(sourceId) && nodeIds.has(targetId);
  });

  console.log(`🔍 过滤层级=${selectedNodeLevel.value}, 展开节点=${expandedNodes.value.size}, 总节点=${currentGraphData.value.nodes.length}, 过滤后=${filteredNodes.length}, 总连接=${currentGraphData.value.links.length}, 过滤后=${filteredLinks.length}`);

  return {
    nodes: filteredNodes,
    links: filteredLinks
  };
});

// 检查节点是否有子级节点
const hasChildNodes = (nodeId: string) => {
  if (currentLevel.value === 'advanced') return false;
  
  // 查找以该节点为source的连接
  return currentGraphData.value.links.some(link => {
    const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id;
    return sourceId === nodeId;
  });
};

// 切换节点的子级显示
const toggleChildNodes = (nodeId: string) => {
  if (expandedNodes.value.has(nodeId)) {
    // 如果已经展开，则收起
    expandedNodes.value.delete(nodeId);
  } else {
    // 如果还没展开，则展开
    expandedNodes.value.add(nodeId);
  }
  // 触发重新渲染
  expandedNodes.value = new Set(expandedNodes.value);
  initD3Graph();
};

// 重置所有展开的子节点
const resetExpandedNodes = () => {
  expandedNodes.value.clear();
  expandedNodes.value = new Set(expandedNodes.value);
  // 关闭节点详情框和文档框
  selectedNode.value = null;
  showDocumentation.value = false;
  initD3Graph();
};

// 文档显示相关函数
const openDocumentation = () => {
  showDocumentation.value = true;
};

const closeDocumentation = () => {
  showDocumentation.value = false;
  // 如果是手势触发的，关闭时清除selectedNode和标记
  if (gestureTriggered.value) {
    selectedNode.value = null;
    gestureTriggered.value = false;
  }
};

const exportToMarkdown = () => {
  if (!selectedNode.value) return;
  
  const doc = getNodeDocumentation(selectedNode.value.id);
  const nodeName = selectedNode.value.label;
  
  // 构建 Markdown 内容
  let markdown = `# ${doc.title}\n\n`;
  markdown += `> 组件: ${nodeName}\n\n`;
  markdown += `${doc.content}\n\n`;
  
  if (doc.examples && doc.examples.length > 0) {
    markdown += `## 代码示例\n\n`;
    doc.examples.forEach((example, index) => {
      markdown += `### 示例 ${index + 1}\n\n`;
      markdown += "```javascript\n";
      markdown += `${example}\n`;
      markdown += "```\n\n";
    });
  }
  
  if (doc.resources && doc.resources.length > 0) {
    markdown += `## 学习资源\n\n`;
    doc.resources.forEach(resource => {
      const name = typeof resource === 'string' ? resource : resource.name;
      const url = typeof resource === 'string' ? '#' : resource.url;
      markdown += `- [${name}](${url})\n`;
    });
  }
  
  // 创建 Blob 并下载
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${nodeName}_文档.md`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const getNodeDocumentation = (nodeId: string) => {
  return NODE_DOCUMENTS[nodeId] || {
    title: '暂无文档',
    content: `关于 ${selectedNode.value?.label} 的详细文档正在完善中，敬请期待。

您可以通过 AI 导师功能获取该技术的学习指导和代码示例。`,
    examples: [],
    resources: [
      { name: 'MDN Web 文档', url: 'https://developer.mozilla.org/' },
      { name: 'W3Schools 教程', url: 'https://www.w3schools.com/' }
    ]
  };
};

// 将Markdown内容渲染为HTML
const renderMarkdown = (content: string) => {
  return marked(content, { breaks: true, gfm: true });
};

// 计算属性：渲染当前选中节点的文档内容
const renderedContent = computed(() => {
  if (!selectedNode.value) return '';
  const doc = getNodeDocumentation(selectedNode.value.id);
  return renderMarkdown(doc.content);
});

// 搜索相关函数
const onSearchInput = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = [];
    highlightedNodes.value.clear();
    updateNodeHighlight();
    return;
  }

  const query = searchQuery.value.toLowerCase().trim();
  const results = filteredGraphData.value.nodes.filter(node => 
    node.label.toLowerCase().includes(query) ||
    node.id.toLowerCase().includes(query) ||
    getGroupName(node.group).toLowerCase().includes(query)
  ).slice(0, 10);

  searchResults.value = results;
  
  // 高亮匹配的节点
  highlightedNodes.value.clear();
  results.forEach(node => highlightedNodes.value.add(node.id));
  updateNodeHighlight();
};

const selectSearchResult = (node: Node) => {
  selectedNode.value = node;
  showSearchResults.value = false;
  
  // 将选中的节点移动到视图中心
  centerNodeInView(node);
};

const clearSearch = () => {
  searchQuery.value = '';
  searchResults.value = [];
  highlightedNodes.value.clear();
  showSearchResults.value = false;
  updateNodeHighlight();
};

const hideSearchResults = () => {
  setTimeout(() => {
    showSearchResults.value = false;
  }, 200); // 延迟隐藏以允许点击搜索结果
};

const highlightMatch = (text: string, query: string) => {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
};

const getGroupName = (group: string) => {
  const groupNames: Record<string, string> = {
    // 层级名称
    'center': '中心节点',
    'level1': '一级分类',
    'level2': '二级分类',
    'level3': '三级节点',
    'level4': '四级节点',
    'level5': '五级节点',
    'level6': '六级节点',
    
    // 旧的组名（兼容高阶图谱）
    'frontend': '前端基础',
    'framework': '框架技术',
    'foundation': '核心基础',
    'core': '核心技术',
    'tool': '开发工具',
    'style': '样式方案',
    'mobile': '移动开发',
    'test': '测试工具',
    'network': '网络技术',
    'backend': '后端技术',
    'security': '安全相关',
    'database': '数据库',
    'devops': '部署运维'
  };
  return groupNames[group] || '其他';
};

const getNodeColor = (group: string) => {
  const colorMap: Record<string, string> = {
    // 层级颜色
    'center': 'bg-red-100 text-red-700',
    'level1': 'bg-teal-100 text-teal-700',
    'level2': 'bg-blue-100 text-blue-700',
    'level3': 'bg-green-100 text-green-700',
    'level4': 'bg-yellow-100 text-yellow-700',
    'level5': 'bg-orange-100 text-orange-700',
    'level6': 'bg-amber-100 text-amber-700',
    
    // 旧的颜色组（兼容高阶图谱）
    'frontend': 'bg-blue-100 text-blue-700',
    'framework': 'bg-green-100 text-green-700',
    'foundation': 'bg-blue-100 text-blue-700',
    'core': 'bg-orange-100 text-orange-700',
    'tool': 'bg-purple-100 text-purple-700',
    'style': 'bg-pink-100 text-pink-700',
    'mobile': 'bg-teal-100 text-teal-700',
    'test': 'bg-yellow-100 text-yellow-700',
    'network': 'bg-indigo-100 text-indigo-700',
    'backend': 'bg-red-100 text-red-700',
    'security': 'bg-orange-100 text-orange-700',
    'database': 'bg-cyan-100 text-cyan-700',
    'devops': 'bg-gray-100 text-gray-700'
  };
  return colorMap[group] || 'bg-gray-100 text-gray-500';
};

const updateNodeHighlight = () => {
  if (!d3SvgSelectionRef.value) return;
  
  d3SvgSelectionRef.value.selectAll('circle')
    .style('opacity', (d: any) => {
      if (highlightedNodes.value.size === 0) return 1;
      return highlightedNodes.value.has(d.id) ? 1 : 0.3;
    })
    .style('stroke-width', (d: any) => {
      return highlightedNodes.value.has(d.id) ? 4 : 2;
    })
    .style('stroke', (d: any) => {
      return highlightedNodes.value.has(d.id) ? '#fbbf24' : '#fff';
    });

  d3SvgSelectionRef.value.selectAll('text')
    .style('opacity', (d: any) => {
      if (highlightedNodes.value.size === 0) return 1;
      return highlightedNodes.value.has(d.id) ? 1 : 0.3;
    })
    .style('font-weight', (d: any) => {
      return highlightedNodes.value.has(d.id) ? 'bold' : 'normal';
    });
};

const centerNodeInView = (node: Node) => {
  if (!d3SvgSelectionRef.value || !simulationRef.value || !d3ZoomRef.value) return;
  
  const svg = d3SvgSelectionRef.value;
  const containerRect = containerRef.value?.getBoundingClientRect();
  
  if (!containerRect) return;
  
  const centerX = containerRect.width / 2;
  const centerY = containerRect.height / 2;
  
  // 计算需要的平移量
  const translateX = centerX - ((node as any).x || 0);
  const translateY = centerY - ((node as any).y || 0);
  
  // 使用D3的zoom transform来设置位置，这样与zoom行为兼容
  const newTransform = d3.zoomIdentity
    .translate(translateX, translateY)
    .scale(1);
  
  // 通过zoom的transform方法来设置，而不是直接修改contentGroup
  svg.transition()
    .duration(600)
    .call(d3ZoomRef.value.transform as any, newTransform);
};

// Refs for D3 objects to access inside gesture loops
const d3ZoomRef = ref<d3.ZoomBehavior<Element, unknown> | null>(null);
const d3SvgSelectionRef = ref<d3.Selection<SVGSVGElement, unknown, null, undefined> | null>(null);
const simulationRef = ref<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null);

// Refs for Gesture Loop (Stable across renders)
const handLandmarkerRef = ref<HandLandmarker | null>(null);
const requestRef = ref<number>(0);
const lastVideoTimeRef = ref<number>(-1);
const lastPinchRef = ref<{x: number, y: number} | null>(null);
const cameraActiveRef = ref<boolean>(false);
const streamRef = ref<MediaStream | null>(null);

// Sync state to ref for loop access
watch(cameraActive, (newVal) => {
  cameraActiveRef.value = newVal;
});

// 自动适配视图函数
const fitGraphToView = () => {
  if (!d3SvgSelectionRef.value || !containerRef.value || !d3ZoomRef.value) return;
  
  const svg = d3SvgSelectionRef.value;
  const nodes = filteredGraphData.value.nodes;
  
  if (nodes.length === 0) return;
  
  // 计算所有节点的边界
  const xExtent = d3.extent(nodes, (d: any) => d.x) as [number, number];
  const yExtent = d3.extent(nodes, (d: any) => d.y) as [number, number];
  
  const width = containerRef.value.clientWidth;
  const height = containerRef.value.clientHeight;
  
  const dx = xExtent[1] - xExtent[0];
  const dy = yExtent[1] - yExtent[0];
  const x = (xExtent[0] + xExtent[1]) / 2;
  const y = (yExtent[0] + yExtent[1]) / 2;
  
  // 计算缩放比例，留出一些边距
  const scale = Math.min(8, 0.9 / Math.max(dx / width, dy / height));
  const translate = [width / 2 - scale * x, height / 2 - scale * y];
  
  // 平滑过渡到新的视图
  svg.transition()
    .duration(750)
    .call(
      d3ZoomRef.value.transform as any,
      d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
    );
};

// D3 Initialization
const initD3Graph = () => {
  if (!svgRef.value || !containerRef.value) return;

  const width = containerRef.value.clientWidth;
  const height = containerRef.value.clientHeight;

  const svg = d3.select(svgRef.value);
  d3SvgSelectionRef.value = svg;
  svg.selectAll("*").remove(); 

  // 根据不同级别动态调整力导向参数
  let linkDistance = 100;
  let chargeStrength = -300;
  let collideRadius = 2;
  
  if (currentLevel.value === 'beginner') {
    // 初阶：423个节点，需要更大的空间
    linkDistance = 120;
    chargeStrength = -400;
    collideRadius = 2.5;
  } else if (currentLevel.value === 'intermediate') {
    // 中阶：235个节点，中等空间
    linkDistance = 110;
    chargeStrength = -350;
    collideRadius = 2.2;
  } else {
    // 高阶：120个节点，保持紧凑
    linkDistance = 100;
    chargeStrength = -300;
    collideRadius = 2;
  }

  // Simulation setup - 使用过滤后的数据和动态参数
  const simulation = d3.forceSimulation(filteredGraphData.value.nodes as d3.SimulationNodeDatum[])
    .force("link", d3.forceLink(filteredGraphData.value.links)
      .id((d: any) => d.id)
      .distance((d: any) => {
        // 动态计算连接距离，根据源节点和目标节点的层级
        const source = d.source as any;
        const target = d.target as any;
        const sourceGroup = source.group || '';
        const targetGroup = target.group || '';
        const sourceId = source.id || '';
        const targetId = target.id || '';
        
        // 仅对初阶图谱应用特殊距离
        if (currentLevel.value === 'beginner') { 
               
          // center <-> level1: 使用较短距离
          if ((sourceGroup === 'center' && targetGroup === 'level1') || 
              (sourceGroup === 'level1' && targetGroup === 'center')) {
            return linkDistance * 0.00001; 
          }
          // level1 <-> level2: 使用中等距离
          if ((sourceGroup === 'level1' && targetGroup === 'level2') || 
              (sourceGroup === 'level2' && targetGroup === 'level1')) {
            return linkDistance * 0.00001; 
          }
        }

        // 仅对中阶图谱应用特殊距离
        if (currentLevel.value === 'intermediate') {
          // 中阶特殊处理：中心节点与"性能优化"的距离保持不变
          if (currentLevel.value === 'intermediate') {
            if ((sourceId === 'Intermediate_Center' && targetId === '性能优化') ||
                (sourceId === '性能优化' && targetId === 'Intermediate_Center')) {
              return linkDistance * 0.0001; 
            }
            // 性能优化与其二级节点的距离也保持不变
            if ((sourceId === '性能优化' && targetGroup === 'level2') ||
                (sourceGroup === 'level2' && targetId === '性能优化')) {
              return linkDistance * 0.0001; 
            }
          }

          if (currentLevel.value === 'intermediate') {
            if ((sourceId === 'Intermediate_Center' && targetId === 'TypeScript') ||
                (sourceId === 'TypeScript' && targetId === 'Intermediate_Center')) {
              return linkDistance * 0.0001; 
            }
            // TypeScript与其二级节点的距离也保持不变
            if ((sourceId === 'TypeScript' && targetGroup === 'level2') ||
                (sourceGroup === 'level2' && targetId === 'TypeScript')) {
              return linkDistance * 2; 
            }
          }
          
          // center <-> level1: 使用较短距离
          if ((sourceGroup === 'center' && targetGroup === 'level1') || 
              (sourceGroup === 'level1' && targetGroup === 'center')) {
            return linkDistance * 0.0001; 
          }
          // level1 <-> level2: 使用中等距离
          if ((sourceGroup === 'level1' && targetGroup === 'level2') || 
              (sourceGroup === 'level2' && targetGroup === 'level1')) {
            return linkDistance * 0.0001; 
          }
        }
        
        // 其他所有连接使用默认距离
        return linkDistance;
      })
    )
    .force("charge", d3.forceManyBody().strength(chargeStrength))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius((d: any) => (d.val || 10) * collideRadius));

  // 对于中阶图谱，添加分区力以将四个一级节点分散到四个不同的区域
  if (currentLevel.value === 'intermediate') {
    // 为一级节点分配区域位置（四象限）
    const quadrantCenters: Record<string, { x: number; y: number }> = {
      'Vue_js': { x: width * 0.25, y: height * 0.25 },           // 左上象限
      'JavaScript_进阶': { x: width * 0.75, y: height * 0.25 },  // 右上象限
      'TypeScript': { x: width * 0.25, y: height * 0.75 },       // 左下象限
      '性能优化': { x: width * 0.75, y: height * 0.75 }          // 右下象限
    };

    // 添加分区力
    simulation.force("partition", (alpha: number) => {
      const strength = 0.15 * alpha; // 分区力强度，随迭代衰减
      
      filteredGraphData.value.nodes.forEach((node: any) => {
        const center = quadrantCenters[node.id];
        if (center) {
          // 对一级节点应用向各象限中心的拉力
          const dx = center.x - node.x;
          const dy = center.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 1) {
            const force = strength;
            node.vx = (node.vx || 0) + (dx / distance) * force;
            node.vy = (node.vy || 0) + (dy / distance) * force;
          }
        } else if (node.group !== 'center') {
          // 非一级、非中心的节点，受其父级一级节点的吸引
          // 查找该节点所属的一级节点
          const relatedLevel1Links = filteredGraphData.value.links.filter((link: any) => {
            const source = typeof link.source === 'string' ? link.source : link.source.id;
            const target = typeof link.target === 'string' ? link.target : link.target.id;
            
            // 找到连接到某个一级节点的路径
            return (source === node.id || target === node.id) && 
                   (source in quadrantCenters || target in quadrantCenters);
          });
          
          if (relatedLevel1Links.length > 0) {
            // 计算平均指向象限的方向
            let sumDx = 0, sumDy = 0;
            relatedLevel1Links.forEach((link: any) => {
              const connectedId = typeof link.source === 'string' ? link.source : link.source.id;
              const otherId = typeof link.target === 'string' ? link.target : link.target.id;
              const level1Id = (connectedId in quadrantCenters) ? connectedId : otherId;
              
              if (level1Id in quadrantCenters) {
                const center = quadrantCenters[level1Id];
                const dx = center.x - node.x;
                const dy = center.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy) || 1;
                sumDx += (dx / distance) * 0.05;
                sumDy += (dy / distance) * 0.05;
              }
            });
            
            node.vx = (node.vx || 0) + sumDx * strength;
            node.vy = (node.vy || 0) + sumDy * strength;
          }
        }
      });
    });
  }

  simulation
    .alpha(1)           // 初始能量
    .alphaDecay(0.02)   // 衰减速度，更快稳定
    .velocityDecay(0.3); // 速度衰减
  
  simulationRef.value = simulation;

  const contentGroup = svg.append("g").attr("class", "content-group");

  // Links with different colors based on relation type
  const link = contentGroup.append("g")
    .selectAll("line")
    .data(filteredGraphData.value.links)
    .join("line")
    .attr("stroke", (d: any) => {
      const type = d.type || 'category';
      return relationTypes.value[type]?.color || '#e5e7eb';
    })
    .attr("stroke-width", 2)
    .attr("stroke-opacity", 0.6);

  // Nodes
  const node = contentGroup.append("g")
    .selectAll("circle")
    .data(filteredGraphData.value.nodes)
    .join("circle")
    .attr("r", (d) => (d.val || 10) * 1.5)
    .attr("fill", (d) => {
      // 层级颜色配置（初阶和中阶图谱使用）
      if (d.group === 'center') return '#FF6B6B';     // 中心节点 - 红色
      if (d.group === 'level1') return '#4ECDC4';     // 一级节点 - 青色
      if (d.group === 'level2') return '#45B7D1';     // 二级节点 - 蓝色
      if (d.group === 'level3') return '#96CEB4';     // 三级节点 - 绿色
      if (d.group === 'level4') return '#FFEAA7';     // 四级节点 - 黄色
      if (d.group === 'level5') return '#DDA15E';     // 五级节点 - 橙色
      if (d.group === 'level6') return '#BC6C25';     // 六级节点 - 棕色
      
      // 高阶图谱特殊颜色组
      if (d.group === 'network' || d.group === 'backend') return '#9C27B0';
      if (d.group === 'security') return '#F44336';
      if (d.group === 'tool') return '#607D8B';
      if (d.group === 'mobile') return '#009688';
      if (d.group === 'style') return '#E91E63';
      if (d.group === 'test') return '#FFC107';
      
      // 高阶图谱默认：根据掌握度动态决定颜色
      const mastery = d.mastery || 0;
      return mastery > 80 ? '#2196F3' : mastery > 50 ? '#FF5722' : '#d1d5db';
    })
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .style("cursor", "pointer")
    .call(drag(simulation) as any)
    .on("click", (event, d) => {
      selectedNode.value = d as Node;
      event.stopPropagation();
    });

  // Labels
  const label = contentGroup.append("g")
    .selectAll("text")
    .data(filteredGraphData.value.nodes)
    .join("text")
    .text((d) => d.label)
    .attr("font-size", (d) => {
      // 根据图谱类型调整字体大小
      if (currentLevel.value === 'beginner' || currentLevel.value === 'intermediate') {
        // 初阶和中阶：字体大小更大
        if (d.group === 'center') return 40;
        if (d.group === 'level1') return 30;
        if (d.group === 'level2') return 22;
        if (d.group === 'level3') return 20;
        return 18;
      } else {
        // 高阶：保持原有大小
        return 12;
      }
    })
    .attr("dx", (d) => ((d.val || 10) * 1.5) + 5)
    .attr("dy", 4)
    .attr("fill", "#374151")
    .style("pointer-events", "none")
    .style("font-family", "Inter, sans-serif")
    .style("font-weight", "500");

  svg.on("click", () => {
    selectedNode.value = null;
  });

  simulation.on("tick", () => {
    link
      .attr("x1", (d: any) => d.source.x)
      .attr("y1", (d: any) => d.source.y)
      .attr("x2", (d: any) => d.target.x)
      .attr("y2", (d: any) => d.target.y);

    node
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y);

    label
      .attr("x", (d: any) => d.x)
      .attr("y", (d: any) => d.y);
  });
  
  // 在模拟稳定后，自动调整视图以适配所有节点（仅在初始化时）
  let hasCalledFit = false;
  simulation.on("end", () => {
    if (!hasCalledFit) {
      hasCalledFit = true;
      fitGraphToView();
    }
  });

  // Zoom - 防止在通过搜索定位节点后被用户交互重置
  let isUserInteracting = false;
  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on("start", () => {
      isUserInteracting = true;
    })
    .on("zoom", (event) => {
      // 只有在用户主动交互时才应用新的transform，防止搜索定位被覆盖
      contentGroup.attr("transform", event.transform);
    })
    .on("end", () => {
      isUserInteracting = false;
    });

  svg.call(zoom as any);
  d3ZoomRef.value = zoom;
  
  // 设置初始缩放为单位变换，防止首次交互时重新定位
  const initialTransform = d3.zoomIdentity.translate(0, 0).scale(1);
  svg.call(zoom.transform as any, initialTransform);
  
  // 等待模拟运行一段时间后适配视图（仅第一次）
  setTimeout(() => {
    if (!hasCalledFit) {
      if (simulation.alpha() > 0.3) {
        // 如果模拟还在活跃，等待更长时间
        const waitTimer = setTimeout(() => {
          if (!hasCalledFit) {
            hasCalledFit = true;
            fitGraphToView();
          }
        }, 500);
        // 组件卸载时清理定时器
        onUnmounted(() => clearTimeout(waitTimer));
      } else {
        hasCalledFit = true;
        fitGraphToView();
      }
    }
  }, 300);

  // Virtual Cursor (创建在SVG顶层，不受缩放影响)
  svg.append("circle")
    .attr("id", "virtual-cursor")
    .attr("r", 15)
    .attr("fill", "rgba(255, 87, 34, 0.4)")
    .attr("stroke", "#FF5722")
    .attr("stroke-width", 2)
    .style("opacity", 0)
    .style("pointer-events", "none");
};

// Drag Helper
const drag = (simulation: d3.Simulation<any, undefined>) => {
  function dragstarted(event: any) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event: any) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event: any) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
};

// MediaPipe Setup
const initMediaPipe = async () => {
  try {
    console.log('正在初始化 MediaPipe...');
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );
    
    handLandmarkerRef.value = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: "CPU" // 改为 CPU，避免 GPU 兼容性问题
      },
      runningMode: "VIDEO",
      numHands: 2 // 支持检测两只手
    });
    console.log('MediaPipe 初始化成功');
  } catch (error) {
    console.error('MediaPipe 初始化失败:', error);
    // 即使 MediaPipe 失败，摄像头仍可使用
  }
};

// Camera Toggle
const toggleCamera = async () => {
  if (cameraActive.value) {
    // Turn OFF
    cameraActive.value = false;
    isLoadingCamera.value = false;
    
    // Stop tracks
    if (streamRef.value) {
      streamRef.value.getTracks().forEach(track => track.stop());
      streamRef.value = null;
    }
    
    if (videoRef.value) {
      videoRef.value.srcObject = null;
    }

    if (requestRef.value) cancelAnimationFrame(requestRef.value);
    
    // Clear canvas
    if (canvasRef.value) {
      const ctx = canvasRef.value.getContext('2d');
      ctx?.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
    }

    // Hide cursor
    d3.select("#virtual-cursor").style("opacity", 0);

  } else {
    // Turn ON
    isLoadingCamera.value = true;
    try {
      console.log('正在请求摄像头权限...');
      
      // 检查是否支持摄像头
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('您的浏览器不支持摄像头功能');
      }
      
      // 先尝试获取设备列表
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      console.log('找到视频设备:', videoDevices.length, '个');
      
      if (videoDevices.length === 0) {
        throw new Error('未找到摄像头设备');
      }
      
      // 获取摄像头流
      const constraints = {
        video: {
          width: { ideal: 320, min: 240, max: 640 },
          height: { ideal: 240, min: 180, max: 480 },
          facingMode: 'user',
          frameRate: { ideal: 30, min: 15, max: 30 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log('摄像头权限获取成功, 轨道数量:', stream.getTracks().length);
      
      // 检查流是否有效
      const videoTracks = stream.getVideoTracks();
      if (videoTracks.length === 0) {
        throw new Error('无法获取视频轨道');
      }
      
      console.log('视频轨道设置:', videoTracks[0].getSettings());
      
      streamRef.value = stream;
      cameraActive.value = true;
      
    } catch (err: any) {
      console.error("摄像头启动失败:", err);
      isLoadingCamera.value = false;
      
      let errorMessage = '无法访问摄像头：';
      if (err.name === 'NotAllowedError') {
        errorMessage += '请允许摄像头权限';
      } else if (err.name === 'NotFoundError') {
        errorMessage += '未找到摄像头设备';
      } else if (err.name === 'NotReadableError') {
        errorMessage += '摄像头被其他应用占用';
      } else if (err.name === 'OverconstrainedError') {
        errorMessage += '摄像头不支持请求的配置';
      } else {
        errorMessage += err.message || '未知错误';
      }
      
      alert(errorMessage);
    }
  }
};

// Handle Video Attachment - 立即处理
watch([cameraActive, streamRef, videoRef], async ([active, stream, video]) => {
  if (active && stream && video) {
    console.log('=== 开始连接视频流 ===');
    
    try {
      // 立即设置视频流
      video.srcObject = stream;
      console.log('视频流已设置到元素');
      
      // 强制设置视频属性
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      
      console.log('等待视频加载...');
      
      // 等待视频元数据加载
      await new Promise<void>((resolve, reject) => {
        let resolved = false;
        
        const onLoadedMetadata = () => {
          if (!resolved) {
            resolved = true;
            console.log('✅ 视频元数据加载成功:', video.videoWidth, 'x', video.videoHeight);
            resolve();
          }
        };
        
        const onError = (err: any) => {
          if (!resolved) {
            resolved = true;
            console.error('❌ 视频加载错误:', err);
            reject(err);
          }
        };
        
        video.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
        video.addEventListener('error', onError, { once: true });
        
        // 10秒超时
        setTimeout(() => {
          if (!resolved) {
            resolved = true;
            reject(new Error('视频加载超时'));
          }
        }, 10000);
      });
      
      // 开始播放
      console.log('开始播放视频...');
      await video.play();
      console.log('✅ 视频播放成功');
      
      isLoadingCamera.value = false;
      predictWebcam();
      
    } catch (err) {
      console.error('❌ 视频连接失败:', err);
      isLoadingCamera.value = false;
      
      // 清理资源
      if (stream) {
        stream.getTracks().forEach(track => {
          console.log('停止轨道:', track.kind, track.label);
          track.stop();
        });
        streamRef.value = null;
      }
      cameraActive.value = false;
      
      alert('视频连接失败: ' + (err instanceof Error ? err.message : '未知错误'));
    }
  }
}, { immediate: true });

// Webcam Prediction Loop
const predictWebcam = () => {
  if (!cameraActiveRef.value || !videoRef.value || !canvasRef.value) return;

  const video = videoRef.value;
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (video.videoWidth > 0 && video.videoHeight > 0) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame mirrored
    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-canvas.width, 0);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // 手势识别（如果可用）
    if (handLandmarkerRef.value) {
      const startTimeMs = performance.now();
      if (lastVideoTimeRef.value !== video.currentTime) {
        lastVideoTimeRef.value = video.currentTime;
        try {
          const results = handLandmarkerRef.value.detectForVideo(video, startTimeMs);

          if (results.landmarks && results.landmarks.length > 0) {
            // 传递所有检测到的手部数据
            handleGestures(results.landmarks, canvas.width, canvas.height, ctx);
          } else {
            gestureState.value = '未检测到手部';
            activeGestureType.value = null;
            hoveredNode.value = null;
            d3.select("#virtual-cursor").style("opacity", 0);
          }
        } catch (error) {
          console.warn('手势检测失败:', error);
          gestureState.value = '手势检测不可用';
        }
      }
    } else {
      gestureState.value = '手势识别未就绪';
    }
  }
  
  requestRef.value = requestAnimationFrame(predictWebcam);
};

// Gesture Handling
const handleGestures = (allHandLandmarks: any[][], width: number, height: number, ctx: CanvasRenderingContext2D) => {
  // 绘制所有检测到的手
  allHandLandmarks.forEach(landmarks => {
    drawHand(ctx, landmarks, width, height);
  });

  // 检查是否检测到两只手，且都是伸出食指的姿势
  if (allHandLandmarks.length === 2) {
    const hand1 = allHandLandmarks[0];
    const hand2 = allHandLandmarks[1];
    
    // 检查两只手是否都只伸出食指
    const hand1IndexExtended = hand1[8].y < hand1[6].y;
    const hand1MiddleExtended = hand1[12].y < hand1[10].y;
    const hand1RingExtended = hand1[16].y < hand1[14].y;
    const hand1PinkyExtended = hand1[20].y < hand1[18].y;
    
    const hand2IndexExtended = hand2[8].y < hand2[6].y;
    const hand2MiddleExtended = hand2[12].y < hand2[10].y;
    const hand2RingExtended = hand2[16].y < hand2[14].y;
    const hand2PinkyExtended = hand2[20].y < hand2[18].y;
    
    const hand1IsPoint = hand1IndexExtended && !hand1MiddleExtended && !hand1RingExtended && !hand1PinkyExtended;
    const hand2IsPoint = hand2IndexExtended && !hand2MiddleExtended && !hand2RingExtended && !hand2PinkyExtended;
    
    // 定义食指+中指手势（两根手指伸出）
    const hand1IsTwoFingers = hand1IndexExtended && hand1MiddleExtended && !hand1RingExtended && !hand1PinkyExtended;
    const hand2IsTwoFingers = hand2IndexExtended && hand2MiddleExtended && !hand2RingExtended && !hand2PinkyExtended;
    
    // 检测双手双指向上滚动：双手都是食指+中指
    if (hand1IsTwoFingers && hand2IsTwoFingers) {
      if (showDocumentation.value) {
        gestureState.value = '双中指滚动 (向上滚动)';
        activeGestureType.value = 'twopoint';
        handleDocScrollUp();
        wasTwoHandsPointing.value = true;
        return;
      }
    }
    
    // 检测滚动手势：一只手食指 + 另一只手食指+中指
    if ((hand1IsPoint && hand2IsTwoFingers) || (hand2IsPoint && hand1IsTwoFingers)) {
      // 滚动文档
      if (showDocumentation.value) {
        gestureState.value = '中指滚动 (向下滚动)';
        activeGestureType.value = 'twopoint';
        handleDocScroll();
        wasTwoHandsPointing.value = true;
        return;
      }
    }
    
    if (hand1IsPoint && hand2IsPoint) {
      // 双手食指：触发点击或保持
      gestureState.value = '双手指引 (点击节点)';
      activeGestureType.value = 'twopoint';
      
      // 使用第一只手的位置作为光标位置
      handleCursorMove(hand1[8], width, height);
      
      // 触发点击（防抖：1秒内只触发一次）
      const now = Date.now();
      if (hoveredNode.value && now - lastClickTime.value > 1000 && !showDocumentation.value) {
        selectedNode.value = hoveredNode.value;
        gestureTriggered.value = true; // 标记为手势触发
        openDocumentation();
        lastClickTime.value = now;
        console.log('双手食指点击节点:', hoveredNode.value.label);
      }
      
      // 标记当前是双手食指状态
      wasTwoHandsPointing.value = true;
      return;
    }
    
    // 其他情况
    {

      // 检测从双手食指状态变为非双手食指状态（放下其中一根手指）
      if (wasTwoHandsPointing.value && showDocumentation.value) {
        closeDocumentation();
        console.log('检测到放下手指，关闭节点文档');
      }
      wasTwoHandsPointing.value = false;
    }
  } else {
    // 如果不是两只手，也重置状态
    if (wasTwoHandsPointing.value && showDocumentation.value) {
      closeDocumentation();
      console.log('检测到放下手指，关闭节点文档');
    }
    wasTwoHandsPointing.value = false;
  }
  
  // 单手手势识别（使用第一只手）
  const landmarks = allHandLandmarks[0];
  
  const isIndexExtended = landmarks[8].y < landmarks[6].y;
  const isMiddleExtended = landmarks[12].y < landmarks[10].y;
  const isRingExtended = landmarks[16].y < landmarks[14].y;
  const isPinkyExtended = landmarks[20].y < landmarks[18].y;
  
  const indexTip = landmarks[8];
  const thumbTip = landmarks[4];
  
  const pinchDist = Math.sqrt(
    Math.pow(indexTip.x - thumbTip.x, 2) + 
    Math.pow(indexTip.y - thumbTip.y, 2)
  );
  const isPinch = pinchDist < 0.05;

  let currentGesture = '无手势';
  let type: 'open' | 'closed' | 'pinch' | 'point' | 'twopoint' | null = null;

  if (isPinch) {
    currentGesture = '捏合 (拖拽/点击)';
    type = 'pinch';
    handlePinchGesture(landmarks, width, height);
  } else if (isIndexExtended && isMiddleExtended && isRingExtended && isPinkyExtended) {
    currentGesture = '张开 (放大)';
    type = 'open';
    handleZoomGesture(1.02);
  } else if (!isIndexExtended && !isMiddleExtended && !isRingExtended && !isPinkyExtended) {
    currentGesture = '握拳 (缩小)';
    type = 'closed';
    handleZoomGesture(0.98);
  } else if (isIndexExtended && !isMiddleExtended && !isRingExtended && !isPinkyExtended) {
    currentGesture = '指引 (移动光标)';
    type = 'point';
    // 使用食指指尖位置 (landmarks[8])
    handleCursorMove(landmarks[8], width, height);
  } else {
    currentGesture = '调整手势...';
    type = null;
    lastPinchRef.value = null;
  }

  if (Math.random() > 0.8) { 
    gestureState.value = currentGesture;
    activeGestureType.value = type;
  }
};

const handleZoomGesture = (factor: number) => {
  if (!d3SvgSelectionRef.value || !d3ZoomRef.value) return;
  d3SvgSelectionRef.value.transition().duration(50).call(d3ZoomRef.value.scaleBy as any, factor);
};

const handlePinchGesture = (landmarks: any[], width: number, height: number) => {
  if (!d3SvgSelectionRef.value || !d3ZoomRef.value) return;

  const cx = (landmarks[8].x + landmarks[4].x) / 2;
  const cy = (landmarks[8].y + landmarks[4].y) / 2;
  
  if (lastPinchRef.value) {
    const dx = (cx - lastPinchRef.value.x) * width * 1.5;
    const dy = (cy - lastPinchRef.value.y) * height * 1.5;
    
    d3SvgSelectionRef.value.call(d3ZoomRef.value.translateBy as any, -dx, -dy);
  }
  lastPinchRef.value = { x: cx, y: cy };
};

const handleDocScroll = () => {
  if (!docContentRef.value) return;
  
  // 缓慢向下滚动
  docContentRef.value.scrollTop += 3; // 每帧滚动3像素
};

const handleDocScrollUp = () => {
  if (!docContentRef.value) return;
  
  // 缓慢向上滚动
  docContentRef.value.scrollTop -= 3; // 每帧向上滚动3像素
};

const handleCursorMove = (tip: any, _width: number, _height: number) => {
  lastPinchRef.value = null;
  
  const svg = d3SvgSelectionRef.value;
  if (!svg || !svgRef.value) return;

  // 只有在摄像头激活时才显示虚拟光标
  if (!cameraActive.value) {
    svg.select("#virtual-cursor").style("opacity", 0);
    return;
  }

  // 获取SVG元素的实际尺寸
  const svgRect = svgRef.value.getBoundingClientRect();
  const svgWidth = svgRect.width;
  const svgHeight = svgRect.height;
  
  // 将食指位置从视频坐标系映射到SVG坐标系
  // tip.x 和 tip.y 是归一化坐标 (0-1)
  // 注意：由于视频是镜像的，需要水平翻转 x 坐标
  const cursorX = (1 - tip.x) * svgWidth;  // 水平翻转并映射到SVG宽度
  const cursorY = tip.y * svgHeight;        // 直接映射到SVG高度
  
  // 更新调试信息
  debugCursorInfo.value = `食指(${tip.x.toFixed(3)},${tip.y.toFixed(3)}) -> 光标(${cursorX.toFixed(0)},${cursorY.toFixed(0)})`;

  const cursor = svg.select("#virtual-cursor");
  cursor
    .attr("cx", cursorX)
    .attr("cy", cursorY)
    .style("opacity", 1);
    
  // 检查是否悬停在节点上
  if (simulationRef.value) {
    // 获取当前的变换状态
    const transform = d3.zoomTransform(svg.node() as Element);
    
    // 将SVG坐标转换为图形坐标系
    const graphX = transform.invertX(cursorX);
    const graphY = transform.invertY(cursorY);
    
    // 查找最近的节点
    const node = simulationRef.value.find(graphX, graphY, 30);
    hoveredNode.value = node as Node | null;
    
    if (node) {
      cursor.attr("stroke", "#2196F3").attr("r", 20);
    } else {
      cursor.attr("stroke", "#FF5722").attr("r", 15);
    }
  }
};

const drawHand = (ctx: CanvasRenderingContext2D, landmarks: any[], width: number, height: number) => {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
  
  const connections = HandLandmarker.HAND_CONNECTIONS;
  for (const connection of connections) {
    const start = landmarks[connection.start];
    const end = landmarks[connection.end];
    ctx.beginPath();
    // 应用水平镜像翻转：(1 - x) * width
    ctx.moveTo((1 - start.x) * width, start.y * height);
    ctx.lineTo((1 - end.x) * width, end.y * height);
    ctx.stroke();
  }
  
  ctx.fillStyle = "red";
  for (const lm of landmarks) {
    ctx.beginPath();
    // 应用水平镜像翻转：(1 - x) * width
    ctx.arc((1 - lm.x) * width, lm.y * height, 3, 0, 2 * Math.PI);
    ctx.fill();
  }
};

onMounted(async () => {
  console.log('组件挂载完成');
  initD3Graph();
  
  // 确保视频元素已准备好
  if (videoRef.value) {
    console.log('视频元素已准备');
    videoRef.value.addEventListener('loadstart', () => console.log('视频开始加载'));
    videoRef.value.addEventListener('loadeddata', () => console.log('视频数据加载完成'));
    videoRef.value.addEventListener('canplay', () => console.log('视频可以播放'));
    videoRef.value.addEventListener('playing', () => console.log('视频正在播放'));
  }
  
  await initMediaPipe();
});

// 监听级别变化，重新渲染图谱
watch(currentLevel, () => {
  console.log('切换到', currentLevel.value, '级别');
  // 清除搜索和选中状态
  searchQuery.value = '';
  searchResults.value = [];
  selectedNode.value = null;
  showDocumentation.value = false;
  highlightedNodes.value.clear();
  
  // 重置节点层级选择为1（仅对初阶和中阶）
  if (currentLevel.value === 'beginner' || currentLevel.value === 'intermediate') {
    selectedNodeLevel.value = 1;
  }
  
  // 清空展开的节点
  expandedNodes.value.clear();
  
  // 重新初始化图谱
  initD3Graph();
});

// 监听节点层级变化，重新渲染图谱
watch(selectedNodeLevel, () => {
  if (currentLevel.value === 'beginner' || currentLevel.value === 'intermediate') {
    console.log('切换显示层级到', selectedNodeLevel.value);
    // 关闭节点详情框和文档框
    selectedNode.value = null;
    showDocumentation.value = false;
    initD3Graph();
  }
});

onUnmounted(() => {
  if (streamRef.value) {
    streamRef.value.getTracks().forEach(track => track.stop());
  }
  if (requestRef.value) {
    cancelAnimationFrame(requestRef.value);
  }
  if (simulationRef.value) {
    simulationRef.value.stop();
  }
});

// 不再需要监听props.data，因为现在使用内部的currentLevel切换
// watch(() => props.data, () => {
//   if (svgRef.value) {
//     initD3Graph();
//   }
// }, { deep: true });
</script>

<style scoped>
/* Markdown内容样式 */
.markdown-content :deep(h1) {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.markdown-content :deep(h2) {
  font-size: 1.25rem;
  font-weight: bold;
  color: #374151;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

.markdown-content :deep(h3) {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4b5563;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.markdown-content :deep(strong) {
  font-weight: 600;
  color: #1f2937;
}

.markdown-content :deep(em) {
  font-style: italic;
  color: #4b5563;
}

.markdown-content :deep(code) {
  background-color: #f3f4f6;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-family: 'Courier New', Courier, monospace;
  color: #dc2626;
}

.markdown-content :deep(pre) {
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.markdown-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: #e5e7eb;
  font-size: 0.875rem;
}

.markdown-content :deep(blockquote) {
  border-left: 4px solid #ff5722;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #6b7280;
  font-style: italic;
}

.markdown-content :deep(a) {
  color: #2563eb;
  text-decoration: underline;
}

.markdown-content :deep(a:hover) {
  color: #1d4ed8;
}

.markdown-content :deep(hr) {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 1.5rem 0;
}
</style>
