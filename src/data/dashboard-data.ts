export interface EnrolledCourse {
  id: string;
  title: string;
  thumbnail?: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  lastAccessed: string;
  instructor: string;
  category: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
  studentName: string;
}

export interface PurchaseRecord {
  id: string;
  date: string;
  courseName: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: "completed" | "pending" | "refunded";
  invoiceId: string;
}

export interface LessonProgress {
  moduleIndex: number;
  lessonIndex: number;
  completed: boolean;
  title: string;
}

export interface CourseModule {
  title: string;
  lessons: {
    title: string;
    duration: string;
    completed: boolean;
  }[];
}

// Mock enrolled courses
export const enrolledCourses: EnrolledCourse[] = [
  {
    id: "ai-expert-content-creation",
    title: "AI Expert Course for Content Creation & Freelancing",
    progress: 45,
    totalLessons: 80,
    completedLessons: 36,
    lastAccessed: "2025-01-18",
    instructor: "Md Jubaer Ahmed",
    category: "AI & Content Creation",
  },
  {
    id: "basic-ai-prompting",
    title: "Basic AI Prompting",
    progress: 100,
    totalLessons: 12,
    completedLessons: 12,
    lastAccessed: "2025-01-10",
    instructor: "Md Jubaer Ahmed",
    category: "Free Courses",
  },
  {
    id: "video-editing-capcut-premiere",
    title: "Video Editing with CapCut & Premiere Pro",
    progress: 20,
    totalLessons: 60,
    completedLessons: 12,
    lastAccessed: "2025-01-15",
    instructor: "Md Jubaer Ahmed",
    category: "Video Editing",
  },
];

// Mock certificates
export const certificates: Certificate[] = [
  {
    id: "cert-1",
    courseId: "basic-ai-prompting",
    courseName: "Basic AI Prompting",
    completionDate: "2025-01-10",
    certificateId: "PWJ-2025-AI-001",
    studentName: "Rahim Ahmed",
  },
];

// Mock purchase history
export const purchaseHistory: PurchaseRecord[] = [
  {
    id: "pur-1",
    date: "2024-12-01",
    courseName: "AI Expert Course for Content Creation & Freelancing",
    amount: 1499,
    currency: "BDT",
    paymentMethod: "bKash",
    status: "completed",
    invoiceId: "INV-2024-001",
  },
  {
    id: "pur-2",
    date: "2024-12-15",
    courseName: "Video Editing with CapCut & Premiere Pro",
    amount: 1999,
    currency: "BDT",
    paymentMethod: "Nagad",
    status: "completed",
    invoiceId: "INV-2024-002",
  },
  {
    id: "pur-3",
    date: "2025-01-05",
    courseName: "Basic AI Prompting",
    amount: 0,
    currency: "BDT",
    paymentMethod: "Free",
    status: "completed",
    invoiceId: "INV-2025-001",
  },
];

// AI Expert Course lesson progress (curriculum for learning page)
export const aiExpertCourseCurriculum: CourseModule[] = [
  {
    title: "Module 1: AI Basics & Smart Prompting",
    lessons: [
      { title: "What is AI and how to use it practically", duration: "15:30", completed: true },
      { title: "Prompting basics", duration: "12:45", completed: true },
      { title: "Bangla prompt writing", duration: "18:20", completed: true },
      { title: "English prompt writing", duration: "14:10", completed: true },
      { title: "Role-based prompt", duration: "16:00", completed: true },
      { title: "Step-by-step prompt", duration: "13:50", completed: true },
      { title: "Client work prompt", duration: "20:15", completed: false },
      { title: "Prompt library building", duration: "22:00", completed: false },
    ],
  },
  {
    title: "Module 2: AI in Content Creation",
    lessons: [
      { title: "Content idea generation", duration: "18:00", completed: true },
      { title: "Research using AI", duration: "20:30", completed: true },
      { title: "Script writing", duration: "25:00", completed: true },
      { title: "Hook writing", duration: "15:45", completed: true },
      { title: "Storytelling structure", duration: "22:10", completed: true },
      { title: "Voice generation", duration: "18:30", completed: true },
      { title: "Voice enhancement", duration: "14:20", completed: true },
      { title: "Image generation", duration: "20:00", completed: true },
      { title: "Video finding", duration: "16:45", completed: true },
      { title: "Animation/motion idea", duration: "19:00", completed: true },
    ],
  },
  {
    title: "Module 3: AI in Graphic Design",
    lessons: [
      { title: "Design prompting", duration: "17:00", completed: true },
      { title: "Thumbnail idea", duration: "14:30", completed: true },
      { title: "Poster idea", duration: "16:20", completed: true },
      { title: "Course banner", duration: "18:45", completed: true },
      { title: "Ad creative", duration: "15:10", completed: true },
      { title: "Social media post", duration: "13:40", completed: true },
      { title: "Brand style", duration: "20:00", completed: true },
      { title: "60+ design types using AI", duration: "30:00", completed: true },
      { title: "Canva + AI workflow", duration: "25:15", completed: true },
    ],
  },
  {
    title: "Module 4: AI in YouTube SEO",
    lessons: [
      { title: "SEO title creation", duration: "16:00", completed: true },
      { title: "Description writing", duration: "14:30", completed: true },
      { title: "Tags planning", duration: "12:00", completed: true },
      { title: "Chapter writing", duration: "10:45", completed: true },
      { title: "Thumbnail concept", duration: "18:20", completed: true },
      { title: "Hook optimization", duration: "15:30", completed: false },
      { title: "Audience retention planning", duration: "20:00", completed: false },
      { title: "Shorts/Reels SEO", duration: "14:15", completed: false },
      { title: "Long video SEO", duration: "16:40", completed: false },
      { title: "Competitor analysis", duration: "22:00", completed: false },
    ],
  },
  {
    title: "Module 5: AI Video Creation",
    lessons: [
      { title: "One-click video creation websites", duration: "18:00", completed: false },
      { title: "AI reels creation", duration: "20:30", completed: false },
      { title: "Canva reels workflow", duration: "16:45", completed: false },
      { title: "100+ reels formats", duration: "25:00", completed: false },
      { title: "AI long video creation", duration: "22:15", completed: false },
      { title: "Faceless video workflow", duration: "19:30", completed: false },
      { title: "Educational video workflow", duration: "21:00", completed: false },
      { title: "Niche-based video workflow", duration: "18:45", completed: false },
    ],
  },
  {
    title: "Module 6: AI in Website & Landing Page Planning",
    lessons: [
      { title: "Landing page structure", duration: "20:00", completed: false },
      { title: "Course page structure", duration: "18:30", completed: false },
      { title: "Website copywriting", duration: "22:00", completed: false },
      { title: "WordPress page idea", duration: "16:45", completed: false },
      { title: "Elementor HTML code idea", duration: "19:15", completed: false },
      { title: "Sales page copy", duration: "21:00", completed: false },
      { title: "Portfolio website planning", duration: "17:30", completed: false },
    ],
  },
  {
    title: "Module 7: AI in SaaS, Tools & Digital Product Ideas",
    lessons: [
      { title: "Tool idea generation", duration: "18:00", completed: false },
      { title: "SaaS idea planning", duration: "20:30", completed: false },
      { title: "Feature planning", duration: "16:00", completed: false },
      { title: "Admin panel planning", duration: "19:45", completed: false },
      { title: "User dashboard planning", duration: "17:20", completed: false },
      { title: "Educational tool idea", duration: "15:30", completed: false },
      { title: "AI-assisted product planning", duration: "22:00", completed: false },
    ],
  },
  {
    title: "Module 8: AI in Blogging, Research & Copywriting",
    lessons: [
      { title: "Blog writing", duration: "20:00", completed: false },
      { title: "News writing", duration: "14:30", completed: false },
      { title: "Report writing", duration: "16:45", completed: false },
      { title: "Copywriting", duration: "22:00", completed: false },
      { title: "Product description", duration: "15:20", completed: false },
      { title: "Landing page copy", duration: "18:30", completed: false },
      { title: "Facebook ad copy", duration: "13:45", completed: false },
      { title: "Research-based writing", duration: "20:15", completed: false },
    ],
  },
];

// Recent activity mock
export const recentActivity = [
  {
    id: "1",
    type: "lesson_completed" as const,
    message: "Completed 'Thumbnail concept' in AI in YouTube SEO",
    date: "2025-01-18",
    time: "2:30 PM",
  },
  {
    id: "2",
    type: "certificate_earned" as const,
    message: "Earned certificate for Basic AI Prompting",
    date: "2025-01-10",
    time: "5:00 PM",
  },
  {
    id: "3",
    type: "course_enrolled" as const,
    message: "Enrolled in Video Editing with CapCut & Premiere Pro",
    date: "2024-12-15",
    time: "10:15 AM",
  },
  {
    id: "4",
    type: "lesson_completed" as const,
    message: "Completed 'Chapter writing' in AI in YouTube SEO",
    date: "2025-01-17",
    time: "4:45 PM",
  },
  {
    id: "5",
    type: "purchase" as const,
    message: "Purchased AI Expert Course for ৳1,499",
    date: "2024-12-01",
    time: "11:00 AM",
  },
];

// Student profile mock
export const studentProfile = {
  name: "Rahim Ahmed",
  email: "rahim.ahmed@example.com",
  phone: "+880 1712-345678",
  avatar: undefined,
  joinDate: "2024-12-01",
  coursesEnrolled: 3,
  certificatesEarned: 1,
  totalLearningHours: 42,
};
