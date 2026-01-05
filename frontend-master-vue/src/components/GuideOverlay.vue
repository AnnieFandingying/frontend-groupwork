<template>
  <!-- 新手引导遮罩 -->
  <transition name="fade">
    <div v-if="show && currentStep >= 0" class="guide-overlay" @click.stop="handleOverlayClick">
      <!-- 高亮区域（小圆框/方框） -->
      <div class="guide-highlight-box" :style="highlightStyle" :class="steps[currentStep]?.boxType"></div>
      
      <!-- 可爱圆形气泡 -->
      <div class="cute-bubble" :style="bubbleStyle">
        <div class="bubble-content">
          <div class="bubble-icon">{{ steps[currentStep]?.icon }}</div>
          <p class="bubble-text">{{ steps[currentStep]?.text }}</p>
          <button @click.stop="nextStep" class="bubble-btn">
            {{ steps[currentStep]?.btnText }}
          </button>
        </div>
        <!-- 气泡小尾巴 -->
        <div class="bubble-tail" :class="steps[currentStep]?.tailPosition"></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

interface GuideStep {
  selector: string;
  text: string;
  icon: string;
  btnText: string;
  boxType: 'circle-box' | 'round-box';
  tailPosition: 'top' | 'bottom' | 'left' | 'right' | 'top-left';
  findText?: boolean;
}

interface Props {
  show: boolean;
  steps: GuideStep[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: [];
  complete: [];
}>();

const currentStep = ref(-1);
const highlightStyle = ref({});
const bubbleStyle = ref({});

// 监听 show 变化，开始引导
watch(() => props.show, (newVal) => {
  console.log('👀 GuideOverlay watch triggered, show:', newVal, 'steps length:', props.steps.length);
  if (newVal && props.steps.length > 0) {
    console.log('✅ Starting guide, steps:', props.steps);
    currentStep.value = 0;
    nextTick(() => {
      setTimeout(() => {
        console.log('📍 Updating guide position for step 0');
        updateGuidePosition();
      }, 100);
    });
  } else {
    console.log('❌ Not starting guide');
    currentStep.value = -1;
  }
});

// 更新引导位置
const updateGuidePosition = () => {
  if (currentStep.value < 0 || currentStep.value >= props.steps.length) {
    return;
  }

  const step = props.steps[currentStep.value];
  console.log('🔍 Looking for element:', step.selector);
  const targetElement = document.querySelector(step.selector) as HTMLElement;
  
  if (!targetElement) {
    console.error('❌ Target element not found:', step.selector);
    console.log('🌐 Available elements:', {
      'coding-title': document.querySelector('#coding-title'),
      'code-editor': document.querySelector('.code-editor'),
      'preview-panel': document.querySelector('.preview-panel'),
      'run-button': document.querySelector('.run-button')
    });
    return;
  }
  
  console.log('✅ Target element found:', targetElement);

  const rect = targetElement.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // 计算小框位置
  let boxSize = step.boxType === 'circle-box' ? 100 : 140;
  let boxTop = rect.top + scrollTop + 20;
  let boxLeft = rect.left + scrollLeft + 40;
  
  // 根据元素大小调整框的位置
  if (rect.width < 200 && rect.height < 100) {
    // 小元素：框住整个元素
    boxSize = Math.max(rect.width, rect.height) + 20;
    boxTop = rect.top + scrollTop - 10;
    boxLeft = rect.left + scrollLeft - 10;
  }
  
  highlightStyle.value = {
    top: `${boxTop}px`,
    left: `${boxLeft}px`,
    width: `${boxSize}px`,
    height: `${boxSize}px`,
  };

  // 计算小框中心点
  const boxCenterX = boxLeft + boxSize / 2;
  const boxCenterY = boxTop + boxSize / 2;

  // 气泡位置
  const bubbleWidth = 220;
  const bubbleHeight = 180;
  let bubbleTop = 0;
  let bubbleLeft = 0;

  // 根据尾巴位置确定气泡位置
  switch (step.tailPosition) {
    case 'bottom': // 气泡在小框上方
      bubbleTop = boxTop - bubbleHeight - 20;
      bubbleLeft = boxCenterX - bubbleWidth / 2;
      break;
    case 'top': // 气泡在小框下方
      bubbleTop = boxTop + boxSize + 20;
      bubbleLeft = boxCenterX - bubbleWidth / 2;
      break;
    case 'top-left': // 气泡在小框右侧
      bubbleTop = boxCenterY - bubbleHeight / 2;
      bubbleLeft = boxLeft + boxSize + 30;
      break;
    case 'left': // 气泡在小框右侧
      bubbleTop = boxCenterY - bubbleHeight / 2;
      bubbleLeft = boxLeft + boxSize + 25;
      break;
    case 'right': // 气泡在小框左侧
      bubbleTop = boxCenterY - bubbleHeight / 2;
      bubbleLeft = boxLeft - bubbleWidth - 25;
      break;
    default:
      bubbleTop = boxTop + boxSize + 20;
      bubbleLeft = boxCenterX - bubbleWidth / 2;
  }

  // 防止溢出屏幕
  const padding = 20;
  if (bubbleLeft < padding) bubbleLeft = padding;
  if (bubbleLeft + bubbleWidth > window.innerWidth - padding) {
    bubbleLeft = window.innerWidth - bubbleWidth - padding;
  }
  if (bubbleTop < padding) bubbleTop = padding;
  if (bubbleTop + bubbleHeight > window.innerHeight + scrollTop - padding) {
    bubbleTop = window.innerHeight + scrollTop - bubbleHeight - padding;
  }

  bubbleStyle.value = {
    top: `${bubbleTop}px`,
    left: `${bubbleLeft}px`,
  };

  // 滚动到目标元素
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// 下一步
const nextStep = () => {
  if (currentStep.value >= props.steps.length - 1) {
    // 最后一步，完成引导
    emit('complete');
    emit('close');
    return;
  }
  
  currentStep.value++;
  
  nextTick(() => {
    setTimeout(() => {
      updateGuidePosition();
    }, 150);
  });
};

// 点击遮罩关闭
const handleOverlayClick = () => {
  emit('close');
};
</script>

<style scoped>
/* ==================== 可爱风格新手引导 ==================== */
/* 半透明遮罩 */
.guide-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  backdrop-filter: blur(3px);
}

/* 小框高亮（圆形或圆角方形） */
.guide-highlight-box {
  position: absolute;
  background: rgba(255, 107, 157, 0.08);
  border: 3px solid #FF6B9D;
  box-shadow: 
    0 0 0 3px rgba(255, 107, 157, 0.2),
    0 0 20px rgba(255, 107, 157, 0.4),
    0 4px 15px rgba(255, 107, 157, 0.3),
    inset 0 0 15px rgba(255, 255, 255, 0.3);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 9999;
  animation: boxPulse 2s ease-in-out infinite;
}

.guide-highlight-box.circle-box {
  border-radius: 50%;
}

.guide-highlight-box.round-box {
  border-radius: 16px;
}

@keyframes boxPulse {
  0%, 100% { 
    transform: scale(1);
    border-color: #FF6B9D;
    box-shadow: 
      0 0 0 3px rgba(255, 107, 157, 0.2),
      0 0 20px rgba(255, 107, 157, 0.4),
      0 4px 15px rgba(255, 107, 157, 0.3);
  }
  50% { 
    transform: scale(1.05);
    border-color: #FF8AB8;
    box-shadow: 
      0 0 0 5px rgba(255, 107, 157, 0.3),
      0 0 30px rgba(255, 107, 157, 0.6),
      0 6px 25px rgba(255, 107, 157, 0.4);
  }
}

/* 可爱圆形气泡 */
.cute-bubble {
  position: absolute;
  width: 220px;
  background: #ffffff;
  border-radius: 50px;
  padding: 1.5rem 1.8rem;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 0 0 6px rgba(255, 192, 203, 0.1),
    0 0 30px rgba(157, 180, 192, 0.3);
  z-index: 10000;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: bubbleBounce 0.6s ease-out;
}

@keyframes bubbleBounce {
  0% { 
    transform: scale(0.5) rotate(-10deg); 
    opacity: 0; 
  }
  50% { 
    transform: scale(1.1) rotate(5deg); 
  }
  100% { 
    transform: scale(1) rotate(0deg); 
    opacity: 1; 
  }
}

.bubble-content {
  text-align: center;
}

.bubble-icon {
  font-size: 3rem;
  margin-bottom: 0.8rem;
  animation: iconFloat 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}

.bubble-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.2rem 0;
  line-height: 1.6;
  font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;
  letter-spacing: 0.5px;
}

.bubble-btn {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #FF6B9D 0%, #FFA8C5 100%);
  box-shadow: 
    0 6px 20px rgba(255, 107, 157, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;
  letter-spacing: 1px;
}

.bubble-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 10px 30px rgba(255, 107, 157, 0.5),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #FF8AB8 0%, #FFBDD5 100%);
}

.bubble-btn:active {
  transform: translateY(-1px) scale(1.02);
}

/* 气泡小尾巴 */
.bubble-tail {
  position: absolute;
  width: 30px;
  height: 30px;
  background: #ffffff;
  z-index: -1;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.bubble-tail.bottom {
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 0 0 50% 0;
}

.bubble-tail.top {
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.top-left {
  top: 30%;
  left: -12px;
  transform: rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.left {
  top: 50%;
  left: -12px;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.right {
  top: 50%;
  right: -12px;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 0 50% 0 0;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
