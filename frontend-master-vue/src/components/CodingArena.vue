<template>
  <div class="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 justify-between">
      <span class="font-semibold text-gray-700 flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
        <span class="ml-2 text-sm text-gray-500">每日挑战: 数组操作</span>
      </span>
      <div class="flex gap-2">
        <span class="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded font-bold">极客模式: 开启</span>
      </div>
    </div>
    <div class="relative flex-1 p-0">
      <textarea
        ref="textareaRef"
        v-model="code"
        @input="handleChange"
        class="w-full h-full resize-none p-6 font-mono text-sm leading-6 outline-none bg-[#1e1e1e] text-[#d4d4d4]"
        spellcheck="false"
      />
      <!-- Simplified Syntax Highlighting Mock overlay would go here -->
    </div>
    <div class="h-12 bg-gray-800 text-white flex items-center justify-between px-6">
      <span class="text-xs text-gray-400">Ln 1, Col 1</span>
      <button class="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded hover:bg-orange-600 transition-colors">
        运行代码
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import confetti from 'canvas-confetti';

const code = ref<string>("// 在此编写你的 TypeScript 代码...\nfunction hello() {\n  console.log('Hello World');\n}");
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const fireParticles = (x: number, y: number) => {
  const scalar = 2;
  const unicorn = confetti.shapeFromText({ text: '⚡', scalar });

  confetti({
    particleCount: 5,
    spread: 40,
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    colors: ['#FF5722', '#2196F3', '#FFC107'],
    disableForReducedMotion: true,
    scalar: 0.6,
    shapes: ['circle', 'square'],
  });
};

const handleChange = () => {
  // Get cursor position roughly (for a textarea this is tricky, simplified here for demo)
  // In a real Monaco editor, you get exact coordinates.
  // For this lightweight demo, we just fire from the bottom right of the cursor text or random vicinity.
  
  if (textareaRef.value) {
    const rect = textareaRef.value.getBoundingClientRect();
    // A very rough approximation of cursor X/Y for the effect
    // A real implementation would use a hidden div mirror to calculate caret position
    const x = rect.left + Math.random() * rect.width; 
    const y = rect.top + Math.random() * rect.height;
    fireParticles(x, y);
  }

  // Screen shake effect
  if (document.body.style) {
    document.body.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`;
    setTimeout(() => {
      document.body.style.transform = 'none';
    }, 50);
  }
};
</script>
