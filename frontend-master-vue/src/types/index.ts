export interface Node {
  id: string;
  label: string;
  group: string;
  description?: string;
  mastery?: number; // 0-100
  val?: number; // for d3 visualization size
  level?: 'beginner' | 'intermediate' | 'advanced'; // 难度级别
}

export interface Link {
  source: string;
  target: string;
  type?: 'foundation' | 'ecosystem' | 'dependency' | 'category' | 'application';
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  date: string;
  tags: string[];
}

export enum AppRoute {
  LANDING = 'landing',
  LOGIN = 'login',
  REGISTER = 'register',
  DASHBOARD = 'dashboard',
  GRAPH = 'graph',
  CHAT = 'chat',
  ARENA = 'arena',
  UNIVERSE = 'universe',
  NEWS = 'news',
  AI_TUTOR = 'ai-tutor',
  DAILY_CHALLENGE = 'daily-challenge',
  LEARNING_PATH = 'learning-path',
}

export interface User {
  id: number;
  username: string;
  email: string;
  level: number;
  experience: number;
  created_at: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}
