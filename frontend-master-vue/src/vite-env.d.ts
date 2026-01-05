/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_USE_BACKEND_AI: string;
  readonly VITE_GEMINI_fAPI_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}