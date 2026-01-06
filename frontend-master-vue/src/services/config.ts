// SiliconFlow OpenAI 兼容配置
export const USE_OPENAI = import.meta.env.VITE_OPENAI_API_KEY ? true : false;
export const OPENAI_API_BASE = import.meta.env.VITE_OPENAI_API_BASE || 'https://api.siliconflow.cn/v1';
export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
export const OPENAI_MODEL = import.meta.env.VITE_OPENAI_MODEL || 'Pro/deepseek-ai/DeepSeek-V3';

// 后端 API 配置
export const USE_BACKEND = import.meta.env.VITE_USE_BACKEND_AI === 'true';
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Gemini 配置
export const VITE_GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const VITE_GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-1.5-flash';
