import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    open: true
  },
  optimizeDeps: {
    include: ['d3', 'canvas-confetti', '@mediapipe/tasks-vision']
  }
});
