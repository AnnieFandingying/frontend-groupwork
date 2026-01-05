import { ref, computed } from 'vue';
import type { User, AuthResponse } from '../types';
import { encryptPassword } from '../utils/crypto';

// 用户状态管理
const user = ref<User | null>(null);
const token = ref<string | null>(localStorage.getItem('token'));
const isLoading = ref(false);
const error = ref<string>('');

// 计算属性
const isAuthenticated = computed(() => !!user.value && !!token.value);

// API基础URL
const API_BASE = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/v1`;

// 设置认证头
const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': token.value ? `Bearer ${token.value}` : '',
});

// 用户认证服务
export const useAuth = () => {
  // 登录
  const login = async (email: string, password: string) => {
    isLoading.value = true;
    error.value = '';
    
    try {
      // 加密密码
      const encryptedPassword = await encryptPassword(password);
      
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', encryptedPassword);
      
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || '登录失败');
      }
      
      const data: AuthResponse = await response.json();
      
      // 保存用户信息和token
      user.value = data.user;
      token.value = data.access_token;
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      return data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : '登录失败';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // 注册
  const register = async (username: string, email: string, password: string) => {
    isLoading.value = true;
    error.value = '';
    
    try {
      // 加密密码
      const encryptedPassword = await encryptPassword(password);
      
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password: encryptedPassword }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || '注册失败');
      }
      
      const data: AuthResponse = await response.json();
      
      // 保存用户信息和token
      user.value = data.user;
      token.value = data.access_token;
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      return data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : '注册失败';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // 登出
  const logout = async () => {
    try {
      // 调用后端登出API
      if (token.value) {
        await fetch(`${API_BASE}/auth/logout`, {
          method: 'POST',
          headers: getAuthHeaders(),
        });
      }
    } catch (err) {
      console.error('登出API调用失败:', err);
    } finally {
      // 清除本地状态
      user.value = null;
      token.value = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  // 获取当前用户信息
  const getCurrentUser = async () => {
    if (!token.value) return null;
    
    try {
      const response = await fetch(`${API_BASE}/auth/me`, {
        headers: getAuthHeaders(),
      });
      
      if (response.ok) {
        const userData = await response.json();
        user.value = userData;
        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
      } else {
        // Token可能已过期，清除本地状态
        await logout();
        return null;
      }
    } catch (err) {
      console.error('获取用户信息失败:', err);
      await logout();
      return null;
    }
  };

  // 初始化用户状态（从localStorage恢复）
  const initializeAuth = async () => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      token.value = savedToken;
      user.value = JSON.parse(savedUser);
      
      // 验证token是否仍然有效
      await getCurrentUser();
    }
  };

  // 清除错误
  const clearError = () => {
    error.value = '';
  };

  return {
    // 状态
    user: computed(() => user.value),
    token: computed(() => token.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    
    // 方法
    login,
    register,
    logout,
    getCurrentUser,
    initializeAuth,
    clearError,
    getAuthHeaders,
  };
};