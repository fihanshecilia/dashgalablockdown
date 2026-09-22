export interface LevelInfo {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailedObjective: string;
  interactivity: string[];
  docPageRef: string;
  accentColor: string;
  tags: string[];
}

export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gameplay' | 'Environment' | 'UI' | 'Threat' | 'Concept Art';
  description: string;
  badge: string;
  docPage: number;
}

export interface QuizQuestion {
  id: string;
  level: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface RoadmapItem {
  period: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Upcoming' | 'Planned';
  description: string;
  deliverables: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  avatarSeed: string;
  description: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'update' | 'security' | 'development' | 'milestone';
  read: boolean;
}

export interface UserAccount {
  name: string;
  email: string;
  callsign: string;
  role: 'Agent' | 'Beta Tester' | 'Security Analyst';
  avatarColor: string;
  registeredAt: string;
  hasAccessPass: boolean;
}

export interface AnalyticsStats {
  liveVisitors: number;
  totalPageViews: number;
  todayVisitors: number;
  countriesCount: number;
  avgEngagementTime: string;
  demoCompletions: number;
}
