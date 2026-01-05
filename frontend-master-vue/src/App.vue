<template>
  <!-- 登录页面 -->
  <div v-if="currentRoute === AppRoute.LOGIN">
    <LoginPage 
      @back="navigate(AppRoute.LANDING)" 
      @switchToRegister="navigate(AppRoute.REGISTER)"
      @loginSuccess="handleLoginSuccess"
    />
  </div>

  <!-- 注册页面 -->
  <div v-else-if="currentRoute === AppRoute.REGISTER">
    <RegisterPage 
      @back="navigate(AppRoute.LANDING)" 
      @switchToLogin="navigate(AppRoute.LOGIN)"
      @registerSuccess="navigate(AppRoute.LOGIN)"
    />
  </div>

  <!-- 登陆页面 -->
  <div v-else-if="currentRoute === AppRoute.LANDING">
    <LandingPage @navigate="navigate" />
  </div>

  <!-- 加载状态 -->
  <div v-else-if="!isAuthenticated && (currentRoute === AppRoute.DASHBOARD || currentRoute === AppRoute.GRAPH || currentRoute === AppRoute.ARENA || currentRoute === AppRoute.NEWS || currentRoute === AppRoute.AI_TUTOR || currentRoute === AppRoute.LEARNING_PATH)" class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
    <div class="text-center">
      <div class="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200 animate-pulse">
        <span class="text-white font-bold text-2xl">F</span>
      </div>
      <p class="text-gray-600">检查登录状态中...</p>
    </div>
  </div>

  <!-- 主界面 -->
  <div v-else-if="isAuthenticated && (currentRoute === AppRoute.DASHBOARD || currentRoute === AppRoute.GRAPH || currentRoute === AppRoute.ARENA || currentRoute === AppRoute.NEWS || currentRoute === AppRoute.AI_TUTOR || currentRoute === AppRoute.LEARNING_PATH)" class="flex h-screen w-full bg-[#FDFBF7] text-dark font-sans overflow-hidden">
    <!-- Sidebar Navigation -->
    <nav class="w-20 lg:w-64 bg-white border-r border-gray-100 flex flex-col justify-between py-6 transition-all duration-300 z-50">
      <div class="flex flex-col items-center lg:items-start px-0 lg:px-6">
        <div 
          class="mb-10 flex items-center gap-3 cursor-pointer" 
          @click="navigate(AppRoute.LANDING)"
        >
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-200">
            F
          </div>
          <span class="hidden lg:block font-bold text-lg tracking-tight">Master</span>
        </div>

        <div class="w-full space-y-2">
          <NavItem 
            :icon="LayoutGrid" 
            label="仪表盘" 
            :active="currentRoute === AppRoute.DASHBOARD" 
            @click="navigate(AppRoute.DASHBOARD)" 
          />
          <NavItem 
            :icon="Network" 
            label="知识图谱" 
            :active="currentRoute === AppRoute.GRAPH" 
            @click="navigate(AppRoute.GRAPH)" 
          />
          <NavItem 
            :icon="Target" 
            label="学习路线" 
            :active="currentRoute === AppRoute.LEARNING_PATH" 
            @click="navigate(AppRoute.LEARNING_PATH)" 
          />
          <NavItem 
            :icon="Bot" 
            label="AI 导师" 
            :active="currentRoute === AppRoute.AI_TUTOR" 
            @click="navigate(AppRoute.AI_TUTOR)" 
          />
          <NavItem 
            :icon="Terminal" 
            label="代码演练" 
            :active="currentRoute === AppRoute.ARENA" 
            @click="navigate(AppRoute.ARENA)" 
          />
          <NavItem 
            :icon="Newspaper" 
            label="前沿资讯" 
            :active="currentRoute === AppRoute.NEWS" 
            @click="navigate(AppRoute.NEWS)" 
          />
        </div>
      </div>

      <div class="flex flex-col items-center lg:items-start px-0 lg:px-6 space-y-2">
        <NavItem :icon="Settings" label="设置" @click="() => {}" />
        <NavItem :icon="LogOut" label="退出登录" @click="handleLogout" />
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="flex-1 h-full overflow-hidden relative">
      <div class="h-full w-full p-6 lg:p-8 grid grid-cols-12 grid-rows-12 gap-6">
        
        <!-- Header / Title Area -->
        <div class="col-span-12 row-span-1 flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-800">
            <template v-if="currentRoute === AppRoute.DASHBOARD">我的学习仪表盘</template>
            <template v-else-if="currentRoute === AppRoute.GRAPH">前端知识星系</template>
            <template v-else-if="currentRoute === AppRoute.ARENA">每日代码挑战</template>
            <template v-else-if="currentRoute === AppRoute.NEWS">前端情报局</template>
            <template v-else-if="currentRoute === AppRoute.AI_TUTOR">AI 学习导师</template>
            <template v-else-if="currentRoute === AppRoute.LEARNING_PATH">个性化学习路线</template>
          </h2>
          <div class="flex items-center gap-4">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-semibold">{{ user?.username || 'Guest' }}</p>
              <p class="text-xs text-gray-500">Lv.{{ user?.level || 1 }} • {{ user?.experience || 0 }} 经验值</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-primary border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
              <span class="text-white font-bold text-sm">{{ (user?.username || 'G')[0].toUpperCase() }}</span>
            </div>
          </div>
        </div>

        <!-- Dynamic Layout based on Route -->
        <template v-if="currentRoute === AppRoute.DASHBOARD">
          <div class="col-span-12 lg:col-span-8 row-span-7">
            <KnowledgeGraph 
              :data="INITIAL_GRAPH_DATA" 
              :onMaximize="() => navigate(AppRoute.GRAPH)"
            />
          </div>
          <div class="col-span-12 lg:col-span-4 row-span-11 flex flex-col gap-6">
            <div class="flex-1 min-h-0">
              <Chat />
            </div>
            <div class="h-1/3 min-h-0">
              <NewsFeed />
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8 row-span-4">
            <CodingArena :isPreview="true" />
          </div>
        </template>

        <div v-if="currentRoute === AppRoute.GRAPH" class="col-span-12 row-span-11">
          <KnowledgeGraph :data="INITIAL_GRAPH_DATA" />
        </div>

        <div v-if="currentRoute === AppRoute.ARENA" class="col-span-12 row-span-11">
          <CodingArena />
        </div>

        <div v-if="currentRoute === AppRoute.NEWS" class="col-span-12 row-span-11">
          <NewsFeed />
        </div>

        <div v-if="currentRoute === AppRoute.AI_TUTOR" class="col-span-12 row-span-11">
          <AITutor />
        </div>

        <div v-if="currentRoute === AppRoute.LEARNING_PATH" class="col-span-12 row-span-11">
          <LearningPath />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Component } from 'vue';
import LandingPage from './components/LandingPage.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import KnowledgeGraph from './components/KnowledgeGraph.vue';
import CodingArena from './components/CodingArena.vue';
import NewsFeed from './components/NewsFeed.vue';
import Chat from './components/Chat.vue';
import AITutor from './components/AITutor.vue';
import LearningPath from './components/LearningPath.vue';
import { AppRoute } from './types';
import { INITIAL_GRAPH_DATA } from './constants';
import { LayoutGrid, Network, Terminal, Newspaper, Bot, Settings, LogOut, Target } from 'lucide-vue-next';
import { useAuth } from './services/authService';

const currentRoute = ref<AppRoute>(AppRoute.LANDING);
const { user, isAuthenticated, logout, initializeAuth } = useAuth();

const navigate = (route: AppRoute) => {
  // 保护需要认证的路由
  const protectedRoutes = [AppRoute.DASHBOARD, AppRoute.GRAPH, AppRoute.ARENA, AppRoute.NEWS, AppRoute.AI_TUTOR, AppRoute.LEARNING_PATH];
  
  if (protectedRoutes.includes(route) && !isAuthenticated.value) {
    // 如果尝试访问受保护的路由但未登录，跳转到登录页
    currentRoute.value = AppRoute.LOGIN;
    return;
  }
  
  currentRoute.value = route;
};

// 处理登录成功
const handleLoginSuccess = () => {
  navigate(AppRoute.DASHBOARD);
};

// 处理登出
const handleLogout = async () => {
  await logout();
  navigate(AppRoute.LANDING);
};

// 页面初始化
onMounted(async () => {
  await initializeAuth();
  
  // 如果已登录且在首页，自动跳转到仪表盘
  if (isAuthenticated.value && currentRoute.value === AppRoute.LANDING) {
    navigate(AppRoute.DASHBOARD);
  }
  
  // 如果未登录但在受保护页面，跳转到首页
  const protectedRoutes = [AppRoute.DASHBOARD, AppRoute.GRAPH, AppRoute.ARENA, AppRoute.NEWS, AppRoute.AI_TUTOR, AppRoute.LEARNING_PATH];
  if (!isAuthenticated.value && protectedRoutes.includes(currentRoute.value)) {
    navigate(AppRoute.LANDING);
  }
});
</script>

<!-- NavItem Component -->
<script lang="ts">
import { defineComponent, h } from 'vue';

const NavItem = defineComponent({
  name: 'NavItem',
  props: {
    icon: {
      type: Object as () => Component,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => h(
      'button',
      {
        onClick: () => emit('click'),
        class: [
          'w-12 lg:w-full h-12 lg:h-auto flex items-center justify-center lg:justify-start gap-3 px-0 lg:px-4 py-3 rounded-xl transition-all duration-200 group',
          props.active 
            ? 'bg-primary text-white shadow-lg shadow-orange-200' 
            : 'text-gray-500 hover:bg-gray-50 hover:text-primary'
        ]
      },
      [
        h('span', { 
          class: props.active ? 'text-white' : 'group-hover:text-primary' 
        }, [
          h(props.icon, { size: 20 })
        ]),
        h('span', { 
          class: 'hidden lg:block font-medium text-sm' 
        }, props.label)
      ]
    );
  }
});

export { NavItem };
</script>
