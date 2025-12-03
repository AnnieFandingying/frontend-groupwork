<template>
  <div 
    ref="containerRef" 
    class="relative min-h-[150vh] w-full bg-cream overflow-hidden selection:bg-primary selection:text-white"
  >
    <!-- Scroll Hint -->
    <div 
      class="fixed bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-widest uppercase transition-opacity duration-500"
      :style="{ opacity: 1 - scrollProgress }"
    >
      下滑探索
    </div>

    <!-- Spotlight Overlay Layer -->
    <div 
      class="fixed inset-0 pointer-events-none z-20 transition-all duration-75 ease-out"
      :style="{
        background: `radial-gradient(circle ${spotlightSize}px at ${spotX}px ${spotY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)`
      }"
    />

    <!-- Main Content Container - Fixed Position for the visual trick -->
    <div class="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
      
      <!-- The Card - Appears when scrolled -->
      <div 
        class="relative pointer-events-auto p-12 max-w-2xl w-full text-center transform transition-all duration-1000 ease-out glass-panel rounded-2xl shadow-2xl border border-white/50"
        :style="{
          opacity: scrollProgress > 0.8 ? 1 : 0,
          transform: `translateY(${20 * (1 - scrollProgress)}px) scale(${0.9 + (0.1 * scrollProgress)})`,
          visibility: scrollProgress > 0.1 ? 'visible' : 'hidden'
        }"
      >
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-dark tracking-tighter">
          Frontend <span class="text-primary">Master</span>
        </h1>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          通往卓越的沉浸式路径。
          <br />可视化知识体系，与 AI 深度交互，打造属于你的技能宇宙。
        </p>
        
        <div class="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button 
            @click="$emit('navigate', AppRoute.LOGIN)"
            class="group relative px-8 py-4 bg-primary text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-200/50"
          >
            <span class="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
              登录
            </span>
            <div class="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            @click="$emit('navigate', AppRoute.REGISTER)"
            class="group relative px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:border-primary hover:text-primary"
          >
            <span class="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
              注册
            </span>
          </button>
        </div>
        
        <div class="mt-6">
          <p class="text-sm text-gray-500 mb-2">或者</p>
          <button 
            @click="$emit('navigate', AppRoute.DASHBOARD)"
            class="group relative px-6 py-3 bg-gray-100 text-gray-600 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-md hover:bg-gray-200"
          >
            <span class="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide text-sm">
              体验演示
              <svg class="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Background Decor (Minimalist Geometry) -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-spin-slow" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-spin-slow" style="animation-direction: reverse" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { AppRoute } from '../types';

defineEmits<{
  navigate: [route: AppRoute]
}>();

const containerRef = ref<HTMLDivElement | null>(null);
const mousePos = ref({ x: 0, y: 0 });
const scrollProgress = ref(0);

// Track Mouse
const handleMouseMove = (e: MouseEvent) => {
  mousePos.value = { x: e.clientX, y: e.clientY };
};

// Track Scroll for Interaction Phase
const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  // Calculate progress from 0 to 1 based on first screen height
  const progress = Math.min(Math.max(scrollY / (windowHeight * 0.5), 0), 1);
  scrollProgress.value = progress;
};

// Dynamic Styles
const spotlightSize = computed(() => 300 + (scrollProgress.value * 2000)); // Expands as you scroll

// Calculate spotlight position: Interpolate between mouse pos and center screen
const centerX = computed(() => typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
const centerY = computed(() => typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

const spotX = computed(() => mousePos.value.x + (centerX.value - mousePos.value.x) * scrollProgress.value);
const spotY = computed(() => mousePos.value.y + (centerY.value - mousePos.value.y) * scrollProgress.value);

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('scroll', handleScroll);
});
</script>
