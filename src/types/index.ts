
// User and Authentication Types
export type UserRole = 'student' | 'professor';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Course Types
export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  professorId: string;
  startDate: string;
  endDate: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StudentCourse extends Course {
  progress: number;
  nextDeadline?: string;
  hasInitialAssessment: boolean;
  roadmapGenerated: boolean;
}

export interface ProfessorCourse extends Course {
  studentCount: number;
  activeStudentCount: number;
  averageProgress: number;
  completionRate: number;
}

// Assessment and Quiz Types
export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer' | 'coding';

export interface Question {
  id: string;
  topic: string;
  difficulty: number; // 0.0 - 1.0
  type: QuestionType;
  content: string;
  options?: string[];
  correctAnswer: string | string[];
  weight: number; // For final level calculation
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number; // in minutes
  adaptiveEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

// Roadmap Types
export type NodeType = 'start' | 'topic' | 'assessment' | 'milestone' | 'resource';
export type NodeStatus = 'locked' | 'available' | 'in_progress' | 'completed';
export type EdgeType = 'prerequisite' | 'suggested' | 'optional';

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'interactive' | 'external_link' | 'assignment';
  url: string;
  description: string;
  estimatedTime: number; // in minutes
  difficulty: number; // 0.0 - 1.0
  addedByProfessor: boolean;
  aiRecommended: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RoadmapNode {
  id: string;
  type: NodeType;
  position: { x: number; y: number };
  data: {
    title: string;
    description: string;
    status: NodeStatus;
    difficulty: number;
    estimatedHours: number;
    prerequisites: string[];
    resources: Resource[];
    assessments: Quiz[];
    curriculumWeek: number;
    learningObjectives: string[];
    adaptedContent: boolean;
  };
}

export interface RoadmapEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  animated: boolean;
  style?: React.CSSProperties;
}

export interface Roadmap {
  nodes: RoadmapNode[];
  edges: RoadmapEdge[];
  courseId: string;
  studentId: string;
  generatedAt: string;
  updatedAt: string;
}

// Analytics Types
export interface StudentAnalytics {
  studentId: string;
  courseId: string;
  overallProgress: number;
  quizAverage: number;
  timeSpent: number; // in minutes
  lastActive: string;
  resourcesAccessed: number;
  strengths: string[];
  weaknesses: string[];
}

export interface CourseAnalytics {
  courseId: string;
  totalStudents: number;
  activeStudents: number;
  averageProgress: number;
  completionRate: number;
  averageQuizScore: number;
  modulePerformance: {
    moduleId: string;
    title: string;
    averageScore: number;
    completionRate: number;
  }[];
  resourceUsage: {
    resourceId: string;
    title: string;
    accessCount: number;
    effectivenessScore: number;
  }[];
}
