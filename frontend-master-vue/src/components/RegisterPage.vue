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

      <!-- 注册卡片 -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <!-- Logo和标题 -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
            <span class="text-white font-bold text-2xl">F</span>
          </div>
          <h1 class="text-2xl font-bold text-gray-800 mb-2">加入我们</h1>
          <p class="text-gray-600">创建你的 Frontend Master 账户</p>
        </div>

        <!-- 错误提示 -->
        <div v-if="registerError" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-center gap-2 text-red-700">
            <AlertCircle :size="16" />
            <span class="text-sm">{{ registerError }}</span>
          </div>
        </div>

        <!-- 成功提示 -->
        <div v-if="success" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center gap-2 text-green-700">
            <CheckCircle :size="16" />
            <span class="text-sm">{{ success }}</span>
          </div>
        </div>

        <!-- 注册表单 -->
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- 用户名输入 -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              用户名
            </label>
            <div class="relative">
              <User class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
              <input
                v-model="username"
                type="text"
                required
                minlength="3"
                class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="输入用户名"
                :disabled="isLoading"
              />
            </div>
            <p class="mt-1 text-xs text-gray-500">至少3个字符</p>
          </div>

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
                minlength="6"
                class="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="输入你的密码"
                :disabled="isLoading"
                @input="validatePassword"
                autocomplete="new-password"
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
            <!-- 密码强度指示器 -->
            <div class="mt-2 space-y-1">
              <div class="flex gap-1">
                <div 
                  v-for="i in 4" 
                  :key="i"
                  class="h-1 flex-1 rounded transition-colors"
                  :class="i <= passwordStrength ? getStrengthColor(passwordStrength) : 'bg-gray-200'"
                ></div>
              </div>
              <p class="text-xs" :class="getStrengthTextColor(passwordStrength)">
                {{ getStrengthText(passwordStrength) }}
              </p>
            </div>
          </div>

          <!-- 确认密码 -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              确认密码
            </label>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
              <input
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                class="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="再次输入密码"
                :disabled="isLoading"
                :class="{ 'border-red-500': confirmPassword && password !== confirmPassword }"
                autocomplete="new-password"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                :disabled="isLoading"
              >
                <Eye v-if="showConfirmPassword" :size="20" />
                <EyeOff v-else :size="20" />
              </button>
            </div>
            <p v-if="confirmPassword && password !== confirmPassword" class="mt-1 text-xs text-red-600">
              密码不匹配
            </p>
          </div>

          <!-- 服务条款 -->
          <div class="flex items-start gap-3">
            <input
              v-model="agreeTerms"
              type="checkbox"
              required
              class="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20"
              :disabled="isLoading"
            />
            <label class="text-sm text-gray-600 leading-relaxed">
              我已阅读并同意
              <button type="button" class="text-primary hover:text-orange-600 transition-colors" @click="openTerms">
                服务条款
              </button>
              和
              <button type="button" class="text-primary hover:text-orange-600 transition-colors" @click="openPrivacy">
                隐私政策
              </button>
            </label>
          </div>

          <!-- 注册按钮 -->
          <button
            type="submit"
            :disabled="!canRegister || isLoading"
            class="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Loader2 v-if="isLoading" :size="20" class="animate-spin" />
            <span>{{ isLoading ? '注册中...' : '创建账户' }}</span>
          </button>
        </form>



        <!-- 登录链接 -->
        <div class="mt-8 text-center">
          <p class="text-gray-600">
            已有账户？
            <button
              @click="$emit('switchToLogin')"
              class="text-primary hover:text-orange-600 font-semibold transition-colors"
            >
              立即登录
            </button>
          </p>
        </div>
      </div>
    </div>

    <!-- 服务条款弹窗 -->
    <div v-if="showTerms" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click="closeModal">
      <div class="bg-white rounded-2xl max-w-2xl max-h-[80vh] overflow-hidden" @click.stop>
        <div class="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-800">服务条款</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6 overflow-y-auto max-h-[60vh]">
          <div class="prose prose-sm max-w-none text-gray-600">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">1. 服务说明</h3>
            <p class="mb-4">Frontend Master（以下简称"本平台"）是一个专注于前端技术学习的在线平台，为用户提供知识图谱、AI导师、代码练习等服务。</p>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">2. 用户账户</h3>
            <p class="mb-4">用户需要注册账户才能使用本平台的完整服务。用户有责任保护账户安全，不得将账户信息泄露给第三方。</p>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">3. 使用规则</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>用户应遵守相关法律法规，不得利用本平台从事违法活动</li>
              <li>禁止发布有害、诽谤、骚扰或侵犯他人权益的内容</li>
              <li>不得恶意攻击或破坏平台系统</li>
              <li>尊重知识产权，不得抄袭或盗用他人作品</li>
            </ul>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">4. 知识产权</h3>
            <p class="mb-4">本平台的所有内容，包括但不限于文字、图片、代码、设计等，均受知识产权法律保护。未经授权，用户不得复制、传播或商业使用。</p>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">5. 免责声明</h3>
            <p class="mb-4">本平台提供的内容仅供学习参考，不保证内容的完全准确性。用户使用本平台服务产生的任何后果由用户自行承担。</p>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">6. 服务变更</h3>
            <p class="mb-4">本平台保留随时修改或终止服务的权利，如有重大变更会提前通知用户。</p>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">7. 联系我们</h3>
            <p>如有任何问题，请通过平台内的联系方式与我们取得联系。</p>
            
            <p class="text-sm text-gray-500 mt-6">本条款最后更新时间：2025年12月2日</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 隐私政策弹窗 -->
    <div v-if="showPrivacy" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click="closeModal">
      <div class="bg-white rounded-2xl max-w-2xl max-h-[80vh] overflow-hidden" @click.stop>
        <div class="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-800">隐私政策</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6 overflow-y-auto max-h-[60vh]">
          <div class="prose prose-sm max-w-none text-gray-600">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">1. 信息收集</h3>
            <p class="mb-4">我们收集的信息包括：</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>注册信息：用户名、邮箱地址</li>
              <li>学习数据：学习进度、练习记录、AI对话历史</li>
              <li>技术信息：设备信息、浏览器类型、IP地址</li>
              <li>使用数据：访问日志、功能使用统计</li>
            </ul>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">2. 信息使用</h3>
            <p class="mb-4">我们使用收集的信息用于：</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>提供和改进服务</li>
              <li>个性化学习推荐</li>
              <li>维护系统安全</li>
              <li>分析使用趋势</li>
              <li>发送重要通知</li>
            </ul>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">3. 信息保护</h3>
            <p class="mb-4">我们采取以下措施保护您的信息：</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>数据加密传输和存储</li>
              <li>访问权限控制</li>
              <li>定期安全审计</li>
              <li>员工信息保密培训</li>
            </ul>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">4. 信息共享</h3>
            <p class="mb-4">除以下情况外，我们不会与第三方共享您的个人信息：</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>获得您的明确同意</li>
              <li>法律法规要求</li>
              <li>保护用户或公众的合法权益</li>
              <li>与服务提供商合作（严格保密协议约束）</li>
            </ul>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">5. Cookie和追踪技术</h3>
            <p class="mb-4">我们使用Cookie等技术改善用户体验，您可以在浏览器设置中管理Cookie首选项。</p>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">6. 您的权利</h3>
            <p class="mb-4">您有权：</p>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>查看和更新个人信息</li>
              <li>删除账户和相关数据</li>
              <li>拒绝特定数据处理</li>
              <li>数据可移植</li>
            </ul>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-3">7. 联系我们</h3>
            <p class="mb-4">如对隐私政策有任何疑问，请通过平台联系方式与我们联系。我们会在收到请求后及时回复。</p>
            
            <p class="text-sm text-gray-500 mt-6">本政策最后更新时间：2025年12月2日</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { 
  ArrowLeft, Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, CheckCircle, User
} from 'lucide-vue-next';
import { useAuth } from '../services/authService';

// 获取全局的emit函数
const emit = defineEmits<{
  back: []
  switchToLogin: []
  registerSuccess: []
}>();



const { register, isLoading, clearError } = useAuth();

// 本地错误状态（不与登录页面共享）
const registerError = ref<string>('');
const success = ref('');

// 弹窗状态
const showTerms = ref(false);
const showPrivacy = ref(false);

// 表单数据
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const agreeTerms = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// 密码强度
const passwordStrength = ref(0);

// 计算属性
const canRegister = computed(() => {
  return username.value.length >= 3 &&
         email.value &&
         password.value.length >= 6 &&
         password.value === confirmPassword.value &&
         agreeTerms.value &&
         !isLoading.value;
});

// 组件初始化时清除错误
onMounted(() => {
  clearError();
  registerError.value = '';
  success.value = '';
});

// 密码强度验证
const validatePassword = () => {
  const pwd = password.value;
  let strength = 0;

  // 长度检查
  if (pwd.length >= 6) strength++;
  if (pwd.length >= 10) strength++;

  // 复杂性检查
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
  if (/\d/.test(pwd)) strength++;
  if (/[^a-zA-Z\d]/.test(pwd)) strength++;

  passwordStrength.value = Math.min(strength, 4);
};

// 获取密码强度颜色
const getStrengthColor = (strength: number) => {
  const colors = ['bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  return colors[strength - 1] || 'bg-gray-200';
};

// 获取密码强度文本颜色
const getStrengthTextColor = (strength: number) => {
  const colors = ['text-red-600', 'text-yellow-600', 'text-blue-600', 'text-green-600'];
  return colors[strength - 1] || 'text-gray-500';
};

// 获取密码强度文本
const getStrengthText = (strength: number) => {
  const texts = ['密码太弱', '密码较弱', '密码一般', '密码很强'];
  return texts[strength - 1] || '请输入密码';
};

// 处理注册
const handleRegister = async () => {
  clearError();
  registerError.value = '';
  success.value = '';
  
  if (!canRegister.value) {
    return;
  }

  try {
    await register(username.value, email.value, password.value);
    
    success.value = '注册成功！即将跳转到登录页面...';
    
    // 延迟跳转到登录页面
    setTimeout(() => {
      emit('registerSuccess');
    }, 2000);
    
  } catch (err) {
    console.error('注册失败:', err);
    registerError.value = err instanceof Error ? err.message : '注册失败';
  }
};

// 显示服务条款
const openTerms = () => {
  showTerms.value = true;
};

// 显示隐私政策
const openPrivacy = () => {
  showPrivacy.value = true;
};

// 关闭弹窗
const closeModal = () => {
  showTerms.value = false;
  showPrivacy.value = false;
};


</script>