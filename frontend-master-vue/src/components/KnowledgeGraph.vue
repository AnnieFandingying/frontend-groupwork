<template>
  <div ref="containerRef" class="relative w-full h-full bg-surface rounded-2xl overflow-hidden shadow-inner border border-gray-200">
    
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
      
        <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-500">
          <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'point' ? 'bg-green-100 text-green-700 font-bold' : '']">
            <MousePointer2 :size="10" /> 食指: 移动光标
          </div>
          <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'pinch' ? 'bg-green-100 text-green-700 font-bold' : '']">
            <Hand :size="10" /> 捏合: 拖拽/点击
          </div>
          <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'open' ? 'bg-green-100 text-green-700 font-bold' : '']">
            <ZoomIn :size="10" /> 张开: 放大
          </div>
          <div :class="['flex items-center gap-1 p-1 rounded transition-colors', activeGestureType === 'closed' ? 'bg-green-100 text-green-700 font-bold' : '']">
            <ZoomOut :size="10" /> 握拳: 缩小
          </div>
        </div>
      </div>
    </div>

    <!-- Node Detail Modal -->
    <div v-if="selectedNode" class="absolute top-4 left-4 bottom-4 w-80 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl border border-white p-6 overflow-y-auto z-20 animate-in slide-in-from-left duration-300">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-gray-800">{{ selectedNode.label }}</h3>
        <button @click="selectedNode = null" class="text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>
      <div class="space-y-4">
        <div>
          <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">熟练度</span>
          <div class="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div class="h-full bg-primary" :style="{ width: `${selectedNode.mastery || 0}%` }" />
          </div>
        </div>
        
        <div class="p-3 bg-blue-50 rounded-lg border border-blue-100">
          <p class="text-xs text-blue-700 leading-relaxed">
            这里是关于 <strong>{{ selectedNode.label }}</strong> 的核心知识点总结。结合 AI 问答模块，你可以获取该节点的详细代码示例和最佳实践。
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button class="px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-xs font-medium text-gray-600 border border-gray-200 transition-colors">
            查看文档
          </button>
          <button class="px-3 py-2 bg-primary hover:bg-orange-600 text-white rounded-lg text-xs font-medium shadow-lg shadow-orange-200 transition-colors">
            开始练习
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as d3 from 'd3';
import { GraphData, Node } from '../types';
import { Maximize, Loader2, Video, VideoOff, Hand, MousePointer2, ZoomIn, ZoomOut } from 'lucide-vue-next';
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

interface Props {
  data: GraphData;
  onMaximize?: () => void;
}

const props = defineProps<Props>();

const svgRef = ref<SVGSVGElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

const selectedNode = ref<Node | null>(null);
const cameraActive = ref(false);
const isLoadingCamera = ref(false);
const gestureState = ref<string>('无手势');
const activeGestureType = ref<'open' | 'closed' | 'pinch' | 'point' | null>(null);
const debugCursorInfo = ref<string>(''); // 调试光标信息

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

// D3 Initialization
const initD3Graph = () => {
  if (!svgRef.value || !containerRef.value) return;

  const width = containerRef.value.clientWidth;
  const height = containerRef.value.clientHeight;

  const svg = d3.select(svgRef.value);
  d3SvgSelectionRef.value = svg;
  svg.selectAll("*").remove(); 

  // Simulation setup
  const simulation = d3.forceSimulation(props.data.nodes as d3.SimulationNodeDatum[])
    .force("link", d3.forceLink(props.data.links).id((d: any) => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius((d: any) => (d.val || 10) * 2));
  
  simulationRef.value = simulation;

  const contentGroup = svg.append("g").attr("class", "content-group");

  // Links
  const link = contentGroup.append("g")
    .selectAll("line")
    .data(props.data.links)
    .join("line")
    .attr("stroke", "#e5e7eb")
    .attr("stroke-width", 2);

  // Nodes
  const node = contentGroup.append("g")
    .selectAll("circle")
    .data(props.data.nodes)
    .join("circle")
    .attr("r", (d) => (d.val || 10) * 1.5)
    .attr("fill", (d) => {
      if (d.group === 'network' || d.group === 'backend') return '#9C27B0';
      if (d.group === 'security') return '#F44336';
      if (d.group === 'tool') return '#607D8B';
      if (d.group === 'mobile') return '#009688';
      if (d.group === 'style') return '#E91E63';
      if (d.group === 'test') return '#FFC107';
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
    .data(props.data.nodes)
    .join("text")
    .text((d) => d.label)
    .attr("font-size", 12)
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

  // Zoom
  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on("zoom", (event) => {
      contentGroup.attr("transform", event.transform);
    });

  svg.call(zoom as any);
  d3ZoomRef.value = zoom;

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
      numHands: 1
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
      
    } catch (err) {
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
            const landmarks = results.landmarks[0];
            handleGestures(landmarks, canvas.width, canvas.height, ctx);
          } else {
            gestureState.value = '未检测到手部';
            activeGestureType.value = null;
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
const handleGestures = (landmarks: any[], width: number, height: number, ctx: CanvasRenderingContext2D) => {
  drawHand(ctx, landmarks, width, height);

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
  let type: 'open' | 'closed' | 'pinch' | 'point' | null = null;

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
  d3SvgSelectionRef.value.transition().duration(50).call(d3ZoomRef.value.scaleBy, factor);
};

const handlePinchGesture = (landmarks: any[], width: number, height: number) => {
  if (!d3SvgSelectionRef.value || !d3ZoomRef.value) return;

  const cx = (landmarks[8].x + landmarks[4].x) / 2;
  const cy = (landmarks[8].y + landmarks[4].y) / 2;
  
  if (lastPinchRef.value) {
    const dx = (cx - lastPinchRef.value.x) * width * 1.5;
    const dy = (cy - lastPinchRef.value.y) * height * 1.5;
    
    d3SvgSelectionRef.value.call(d3ZoomRef.value.translateBy, -dx, -dy);
  }
  lastPinchRef.value = { x: cx, y: cy };
};

const handleCursorMove = (tip: any, width: number, height: number) => {
  lastPinchRef.value = null;
  
  const svg = d3SvgSelectionRef.value;
  if (!svg || !svgRef.value) return;

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

watch(() => props.data, () => {
  if (svgRef.value) {
    initD3Graph();
  }
}, { deep: true });
</script>
