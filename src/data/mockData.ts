
import { Course, StudentCourse, ProfessorCourse, Quiz, Resource, RoadmapNode, RoadmapEdge, Roadmap } from '@/types';

// Mock Courses
export const studentCourses: StudentCourse[] = [
  {
    id: '1',
    code: 'CS101',
    name: 'Introduction to Computer Science',
    description: 'A beginner-friendly introduction to computer science principles, programming, and problem-solving.',
    professorId: '2',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    progress: 0.65,
    nextDeadline: '2023-10-20T23:59:59Z',
    hasInitialAssessment: true,
    roadmapGenerated: true
  },
  {
    id: '2',
    code: 'MATH204',
    name: 'Linear Algebra',
    description: 'Explore vectors, matrices, linear transformations, and their applications in computing and data analysis.',
    professorId: '3',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    progress: 0.3,
    nextDeadline: '2023-10-18T23:59:59Z',
    hasInitialAssessment: false,
    roadmapGenerated: false
  },
  {
    id: '3',
    code: 'PHYS101',
    name: 'Physics for Computer Scientists',
    description: 'Fundamental physics concepts relevant to computing, including mechanics, electricity, and quantum phenomena.',
    professorId: '4',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    progress: 0.45,
    nextDeadline: '2023-10-22T23:59:59Z',
    hasInitialAssessment: true,
    roadmapGenerated: true
  },
  {
    id: '4',
    code: 'ENG202',
    name: 'Technical Writing',
    description: 'Learn to communicate technical concepts clearly and effectively through written documentation and reports.',
    professorId: '5',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    progress: 0.8,
    nextDeadline: '2023-10-15T23:59:59Z',
    hasInitialAssessment: true,
    roadmapGenerated: true
  }
];

export const professorCourses: ProfessorCourse[] = [
  {
    id: '1',
    code: 'CS101',
    name: 'Introduction to Computer Science',
    description: 'A beginner-friendly introduction to computer science principles, programming, and problem-solving.',
    professorId: '2',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    studentCount: 120,
    activeStudentCount: 105,
    averageProgress: 0.58,
    completionRate: 0.62
  },
  {
    id: '5',
    code: 'CS205',
    name: 'Data Structures and Algorithms',
    description: 'Advanced study of data structures, algorithm design, and computational complexity analysis.',
    professorId: '2',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    studentCount: 85,
    activeStudentCount: 78,
    averageProgress: 0.45,
    completionRate: 0.48
  },
  {
    id: '6',
    code: 'CS330',
    name: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts, algorithms, and practical applications.',
    professorId: '2',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-15T00:00:00Z',
    studentCount: 65,
    activeStudentCount: 60,
    averageProgress: 0.38,
    completionRate: 0.42
  }
];

// Mock Resources
export const courseResources: Resource[] = [
  {
    id: '1',
    title: 'Introduction to Programming Concepts',
    type: 'video',
    url: 'https://example.com/videos/intro-programming',
    description: 'An overview of fundamental programming concepts and paradigms.',
    estimatedTime: 45,
    difficulty: 0.3,
    addedByProfessor: true,
    aiRecommended: false,
    createdAt: '2023-08-20T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z'
  },
  {
    id: '2',
    title: 'Programming Logic and Algorithms',
    type: 'pdf',
    url: 'https://example.com/pdfs/programming-logic',
    description: 'A comprehensive guide to programming logic and basic algorithmic thinking.',
    estimatedTime: 90,
    difficulty: 0.5,
    addedByProfessor: true,
    aiRecommended: false,
    createdAt: '2023-08-20T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z'
  },
  {
    id: '3',
    title: 'Interactive Python Playground',
    type: 'interactive',
    url: 'https://example.com/interactive/python-playground',
    description: 'Hands-on interactive environment to practice Python programming concepts.',
    estimatedTime: 120,
    difficulty: 0.4,
    addedByProfessor: true,
    aiRecommended: true,
    createdAt: '2023-08-20T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z'
  },
  {
    id: '4',
    title: 'Introduction to Data Structures',
    type: 'video',
    url: 'https://example.com/videos/data-structures',
    description: 'Learn about arrays, linked lists, stacks, and queues.',
    estimatedTime: 60,
    difficulty: 0.6,
    addedByProfessor: true,
    aiRecommended: false,
    createdAt: '2023-08-20T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z'
  },
  {
    id: '5',
    title: 'Algorithmic Complexity Analysis',
    type: 'pdf',
    url: 'https://example.com/pdfs/complexity-analysis',
    description: 'Understanding Big O notation and analyzing algorithm efficiency.',
    estimatedTime: 75,
    difficulty: 0.7,
    addedByProfessor: true,
    aiRecommended: true,
    createdAt: '2023-08-20T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z'
  }
];

// Mock Quiz
export const initialAssessmentQuiz: Quiz = {
  id: 'assessment-1',
  courseId: '1',
  title: 'CS101 Initial Assessment',
  description: 'This assessment will help determine your current level of understanding in computer science fundamentals.',
  questions: [
    {
      id: 'q1',
      topic: 'Programming Basics',
      difficulty: 0.3,
      type: 'multiple_choice',
      content: 'Which of the following is NOT a programming paradigm?',
      options: [
        'Object-Oriented Programming',
        'Functional Programming',
        'Declarative Programming',
        'Sequential Programming'
      ],
      correctAnswer: 'Sequential Programming',
      weight: 1
    },
    {
      id: 'q2',
      topic: 'Data Types',
      difficulty: 0.4,
      type: 'multiple_choice',
      content: 'Which data type would be most appropriate for storing a person\'s age?',
      options: [
        'String',
        'Integer',
        'Float',
        'Boolean'
      ],
      correctAnswer: 'Integer',
      weight: 1
    },
    {
      id: 'q3',
      topic: 'Logic',
      difficulty: 0.5,
      type: 'true_false',
      content: 'The boolean expression (A AND B) OR (NOT A AND B) is equivalent to just B.',
      options: ['True', 'False'],
      correctAnswer: 'True',
      weight: 1.5
    },
    {
      id: 'q4',
      topic: 'Algorithms',
      difficulty: 0.6,
      type: 'multiple_choice',
      content: 'What is the time complexity of binary search?',
      options: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n²)'
      ],
      correctAnswer: 'O(log n)',
      weight: 2
    },
    {
      id: 'q5',
      topic: 'Programming Concepts',
      difficulty: 0.4,
      type: 'short_answer',
      content: 'Explain the concept of variable scope in programming.',
      correctAnswer: ['scope', 'variable scope', 'local', 'global'],
      weight: 1.5
    }
  ],
  timeLimit: 30,
  adaptiveEnabled: true,
  createdAt: '2023-08-25T00:00:00Z',
  updatedAt: '2023-08-25T00:00:00Z'
};

// Mock Roadmap
export const mockRoadmapNodes: RoadmapNode[] = [
  {
    id: 'start',
    type: 'start',
    position: { x: 250, y: 50 },
    data: {
      title: 'Start Your Learning Journey',
      description: 'Begin your journey into Computer Science fundamentals',
      status: 'completed',
      difficulty: 0.1,
      estimatedHours: 0.5,
      prerequisites: [],
      resources: [],
      assessments: [],
      curriculumWeek: 1,
      learningObjectives: ['Understand the course structure', 'Set up your learning environment'],
      adaptedContent: false
    }
  },
  {
    id: 'topic-1',
    type: 'topic',
    position: { x: 250, y: 150 },
    data: {
      title: 'Programming Fundamentals',
      description: 'Learn basic programming concepts and syntax',
      status: 'completed',
      difficulty: 0.3,
      estimatedHours: 4,
      prerequisites: ['start'],
      resources: [courseResources[0], courseResources[1]],
      assessments: [],
      curriculumWeek: 1,
      learningObjectives: ['Understand variables and data types', 'Write basic programs'],
      adaptedContent: false
    }
  },
  {
    id: 'topic-2',
    type: 'topic',
    position: { x: 100, y: 250 },
    data: {
      title: 'Control Structures',
      description: 'Master loops, conditionals, and program flow',
      status: 'in_progress',
      difficulty: 0.4,
      estimatedHours: 6,
      prerequisites: ['topic-1'],
      resources: [courseResources[2]],
      assessments: [],
      curriculumWeek: 2,
      learningObjectives: ['Implement conditional logic', 'Create and use loops effectively'],
      adaptedContent: false
    }
  },
  {
    id: 'topic-3',
    type: 'topic',
    position: { x: 400, y: 250 },
    data: {
      title: 'Functions and Modularity',
      description: 'Learn to organize code into reusable functions',
      status: 'in_progress',
      difficulty: 0.4,
      estimatedHours: 5,
      prerequisites: ['topic-1'],
      resources: [],
      assessments: [],
      curriculumWeek: 2,
      learningObjectives: ['Create and call functions', 'Understand parameter passing and return values'],
      adaptedContent: true
    }
  },
  {
    id: 'assessment-1',
    type: 'assessment',
    position: { x: 250, y: 350 },
    data: {
      title: 'Programming Basics Quiz',
      description: 'Test your understanding of programming fundamentals',
      status: 'available',
      difficulty: 0.5,
      estimatedHours: 1,
      prerequisites: ['topic-2', 'topic-3'],
      resources: [],
      assessments: [],
      curriculumWeek: 3,
      learningObjectives: ['Demonstrate understanding of basic programming concepts'],
      adaptedContent: false
    }
  },
  {
    id: 'topic-4',
    type: 'topic',
    position: { x: 250, y: 450 },
    data: {
      title: 'Data Structures',
      description: 'Introduction to arrays, lists, and basic data structures',
      status: 'locked',
      difficulty: 0.6,
      estimatedHours: 8,
      prerequisites: ['assessment-1'],
      resources: [courseResources[3]],
      assessments: [],
      curriculumWeek: 4,
      learningObjectives: ['Understand and implement basic data structures', 'Choose appropriate data structures for different problems'],
      adaptedContent: false
    }
  },
  {
    id: 'topic-5',
    type: 'topic',
    position: { x: 100, y: 550 },
    data: {
      title: 'Sorting Algorithms',
      description: 'Learn common sorting techniques and their implementations',
      status: 'locked',
      difficulty: 0.7,
      estimatedHours: 6,
      prerequisites: ['topic-4'],
      resources: [],
      assessments: [],
      curriculumWeek: 5,
      learningObjectives: ['Implement and compare different sorting algorithms', 'Analyze algorithm efficiency'],
      adaptedContent: false
    }
  },
  {
    id: 'topic-6',
    type: 'topic',
    position: { x: 400, y: 550 },
    data: {
      title: 'Search Algorithms',
      description: 'Explore techniques for searching data efficiently',
      status: 'locked',
      difficulty: 0.7,
      estimatedHours: 5,
      prerequisites: ['topic-4'],
      resources: [courseResources[4]],
      assessments: [],
      curriculumWeek: 5,
      learningObjectives: ['Implement linear and binary search', 'Understand search algorithm complexity'],
      adaptedContent: false
    }
  },
  {
    id: 'assessment-2',
    type: 'assessment',
    position: { x: 250, y: 650 },
    data: {
      title: 'Data Structures and Algorithms Quiz',
      description: 'Test your understanding of data structures and algorithms',
      status: 'locked',
      difficulty: 0.8,
      estimatedHours: 1.5,
      prerequisites: ['topic-5', 'topic-6'],
      resources: [],
      assessments: [],
      curriculumWeek: 6,
      learningObjectives: ['Demonstrate understanding of data structures and algorithms'],
      adaptedContent: false
    }
  },
  {
    id: 'milestone-1',
    type: 'milestone',
    position: { x: 250, y: 750 },
    data: {
      title: 'Programming Fundamentals Milestone',
      description: 'You have mastered the basics of computer programming!',
      status: 'locked',
      difficulty: 0,
      estimatedHours: 0,
      prerequisites: ['assessment-2'],
      resources: [],
      assessments: [],
      curriculumWeek: 6,
      learningObjectives: ['Celebrate your progress!'],
      adaptedContent: false
    }
  }
];

export const mockRoadmapEdges: RoadmapEdge[] = [
  {
    id: 'e-start-topic1',
    source: 'start',
    target: 'topic-1',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic1-topic2',
    source: 'topic-1',
    target: 'topic-2',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic1-topic3',
    source: 'topic-1',
    target: 'topic-3',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic2-assessment1',
    source: 'topic-2',
    target: 'assessment-1',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic3-assessment1',
    source: 'topic-3',
    target: 'assessment-1',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-assessment1-topic4',
    source: 'assessment-1',
    target: 'topic-4',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic4-topic5',
    source: 'topic-4',
    target: 'topic-5',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic4-topic6',
    source: 'topic-4',
    target: 'topic-6',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic5-assessment2',
    source: 'topic-5',
    target: 'assessment-2',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic6-assessment2',
    source: 'topic-6',
    target: 'assessment-2',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-assessment2-milestone1',
    source: 'assessment-2',
    target: 'milestone-1',
    type: 'prerequisite',
    animated: false,
    style: { stroke: '#3385FF' }
  },
  {
    id: 'e-topic3-topic6',
    source: 'topic-3',
    target: 'topic-6',
    type: 'suggested',
    animated: true,
    style: { stroke: '#8533FF', strokeDasharray: '5,5' }
  }
];

export const mockRoadmap: Roadmap = {
  nodes: mockRoadmapNodes,
  edges: mockRoadmapEdges,
  courseId: '1',
  studentId: '1',
  generatedAt: '2023-09-10T00:00:00Z',
  updatedAt: '2023-09-10T00:00:00Z'
};
