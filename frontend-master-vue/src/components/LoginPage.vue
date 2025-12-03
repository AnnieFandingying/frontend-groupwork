<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- 返回按钮 -->
      <button 
        @click="$emit('back')"
        class="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft :size="20" />
        <span>返回首页</span>
      </button>

      <!-- 登录卡片 -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <!-- Logo和标题 -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
            <span class="text-white font-bold text-2xl">F</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 mb-2">欢迎回来</h1>
          <p class="text-gray-600">登录你的 Frontend Master 账户</p>
        </div>

        <!-- 错误提示 -->
        <div v-if="loginError" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-center gap-2 text-red-700">
            <AlertCircle :size="16" />
            <span class="text-sm">{{ loginError }}</span>
          </div>
        </div>

        <!-- 登录表单 -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- 邮箱输入 -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              邮箱地址
            </label>
            <div class="relative">
              <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
              <input
                v-model="email"
                type="email"
                required
                class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="输入你的邮箱"
                :disabled="isLoading"
              />
            </div>
          </div>

          <!-- 密码输入 -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              密码
            </label>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="输入你的密码"
                :disabled="isLoading"
                autocomplete="current-password"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                :disabled="isLoading"
              >
                <Eye v-if="showPassword" :size="20" />
                <EyeOff v-else :size="20" />
              </button>
            </div>
          </div>

          <!-- 记住我选项 -->
          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2">
              <input
                v-model="rememberMe"
                type="checkbox"
                class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20"
                :disabled="isLoading"
              />
              <span class="text-sm text-gray-600">记住我</span>
            </label>
            <button
              type="button"
              class="text-sm text-primary hover:text-orange-600 transition-colors"
              @click="forgotPassword"
            >
              忘记密码？
            </button>
          </div>

          <!-- 登录按钮 -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Loader2 v-if="isLoading" :size="20" class="animate-spin" />
            <span>{{ isLoading ? '登录中...' : '登录' }}</span>
          </button>
        </form>



        <!-- 注册链接 -->
        <div class="mt-8 text-center">
          <p class="text-gray-600">
            还没有账户？
            <button
              @click="$emit('switchToRegister')"
              class="text-primary hover:text-orange-600 font-semibold transition-colors"
            >
              立即注册
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  ArrowLeft, Mail, Lock, Eye, EyeOff, Loader2, AlertCircle 
} from 'lucide-vue-next';
import { useAuth } from '../services/authService';

// 获取全局的emit函数
const emit = defineEmits<{
  back: []
  switchToRegister: []
  loginSuccess: []
}>();



const { login, isLoading, clearError } = useAuth();

// 本地错误状态（不与注册页面共享）
const loginError = ref<string>('');

// 表单数据
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);

// 处理登录
const handleLogin = async () => {
  clearError();
  loginError.value = '';
  
  if (!email.value || !password.value) {
    return;
  }

  try {
    await login(email.value, password.value);
    
    // 登录成功
    emit('loginSuccess');
  } catch (err) {
    console.error('登录失败:', err);
    loginError.value = err instanceof Error ? err.message : '登录失败';
  }
};



// 忘记密码
const forgotPassword = () => {
  console.log('忘记密码功能待实现');
};

// 清除本地错误
const clearLoginError = () => {
  loginError.value = '';
};

// 组件初始化时清除错误
onMounted(() => {
  clearError();
  loginError.value = '';
});
</script>