// Course Categories
export const courseCategories = [
  "All Courses",
  "AI & Content Creation",
  "Video Editing",
  "Motion Graphics",
  "Graphic Design",
  "YouTube & SEO",
  "Web & No-code",
  "Free Courses",
] as const;

export type CourseCategory = (typeof courseCategories)[number];

export type CourseBadge = "New" | "Best Seller" | "Coming Soon" | "Free" | "Launch Offer";

export type PricingMode = "single" | "multiple" | "free" | "coming_soon";

export interface CoursePricingPackage {
  name: string;
  price: number;
  regularPrice?: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface CourseModule {
  title: string;
  description: string;
  lessons: string[];
}

export interface CourseProject {
  title: string;
  description?: string;
}

export interface CourseResource {
  title: string;
  type: "pdf" | "sheet" | "template" | "pack" | "checklist";
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface CourseDetail {
  heroSubtitle: string;
  heroDescription: string;
  heroBadges: string[];
  heroCTA: { primary: string; secondary: string };

  stickyBar: {
    price: number;
    regularPrice: number;
    level: string;
    language: string;
    access: string;
    lessons: string;
    projects: string;
    certificate: string;
    resources: string;
    support: string;
  };
  problemSection: {
    title: string;
    text: string;
    points: string[];
    conclusion: string;
  };
  outcomeSection: {
    title: string;
    outcomes: string[];
  };
  whoIsFor: string[];
  whoIsNotFor: string[];
  curriculum: CourseModule[];
  projects: CourseProject[];
  resources: CourseResource[];
  instructorSection: {
    title: string;
    text: string;
    workflow: string;
    focus: string;
  };
  pricingMode: PricingMode;
  pricingPackages: CoursePricingPackage[];
  offerStack: {
    title: string;
    items: string[];
    valueBreakdown: { label: string; value: string }[];
    totalValue: string;
    todayPrice: string;
  };
  faq: CourseFAQ[];
  finalCTA: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}


export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  thumbnail?: string;
  category: string;
  instructor: string;
  level: string;
  language: string;
  lessons?: number;
  duration?: string;
  price?: number;
  regularPrice?: number;
  currency: string;
  rating?: number;
  students?: number;
  badge?: CourseBadge;
  status: "active" | "coming_soon" | "free";
  featured: boolean;
  visible: boolean;
  sortOrder: number;
  detail?: CourseDetail;
}


// Full AI Expert Course Detail
const aiExpertCourseDetail: CourseDetail = {
  heroSubtitle: "AI দিয়ে Content, Design, Video, SEO, Website, Blog এবং Digital Product Idea তৈরি করা শিখুন—একদম practical workflow সহ।",
  heroDescription: "বাংলাদেশী students, freelancers, content creators, designers, marketers এবং job seekers দের জন্য beginner-friendly practical AI course.",
  heroBadges: ["Bangla Course", "Beginner Friendly", "Practical Projects", "Templates Included", "Lifetime Access"],
  heroCTA: { primary: "Enroll Now", secondary: "Watch Free Preview" },
  stickyBar: {
    price: 1499,
    regularPrice: 2999,
    level: "Beginner",
    language: "Bangla",
    access: "Lifetime",
    lessons: "80+",
    projects: "10+",
    certificate: "Included",
    resources: "Included",
    support: "Package-based",
  },
  problemSection: {
    title: "শুধু AI Tool জানলেই হবে না, AI দিয়ে কাজ করতে জানতে হবে",
    text: "আজকে সবাই ChatGPT, Gemini বা AI tools নিয়ে কথা বলছে। কিন্তু বেশিরভাগ মানুষ শুধু random prompt দেয়, কিছু output নেয়, তারপর real কাজে লাগাতে পারে না।",
    points: [
      "AI দিয়ে real content বানানো",
      "AI দিয়ে design idea তৈরি করা",
      "AI দিয়ে video workflow তৈরি করা",
      "AI দিয়ে YouTube SEO করা",
      "AI দিয়ে blog/copywriting করা",
      "AI দিয়ে website/landing page plan করা",
      "AI দিয়ে freelancing/client work support করা",
      "AI দিয়ে digital product idea তৈরি করা",
    ],
    conclusion: "এই course আপনাকে শুধু tools দেখাবে না—AI দিয়ে কাজ করার practical system শেখাবে।",
  },

  outcomeSection: {
    title: "Course শেষে আপনি কী করতে পারবেন?",
    outcomes: [
      "AI দিয়ে content idea বের করতে পারবেন",
      "Research করতে পারবেন",
      "Script লিখতে পারবেন",
      "Voice generate করতে পারবেন",
      "Voice enhance করতে পারবেন",
      "Image তৈরি করতে পারবেন",
      "Video workflow বানাতে পারবেন",
      "Reels/Shorts idea তৈরি করতে পারবেন",
      "Graphic design prompt লিখতে পারবেন",
      "YouTube SEO করতে পারবেন",
      "Blog, report, copywriting করতে পারবেন",
      "Website/landing page plan করতে পারবেন",
      "Digital product/tool idea তৈরি করতে পারবেন",
      "Freelancing/client work-এর জন্য AI ব্যবহার করতে পারবেন",
    ],
  },
  whoIsFor: [
    "Students",
    "Freelancers",
    "Content creators",
    "YouTubers",
    "Video editors",
    "Graphic designers",
    "Digital marketers",
    "Job seekers",
    "Small business owners",
    "যারা AI দিয়ে practical কাজ শিখতে চান",
  ],
  whoIsNotFor: [
    "Practice করতে না চান",
    "শুধু certificate চান",
    "একদিনে expert হতে চান",
    "কোনো tool নিজে test করতে না চান",
    "শেখার পর apply করতে না চান",
  ],

  curriculum: [
    {
      title: "Module 1: AI Basics & Smart Prompting",
      description: "AI কীভাবে ব্যবহার করলে ভালো output পাওয়া যায়, কীভাবে prompt লিখতে হয়, কীভাবে Bangla-English prompt ব্যবহার করতে হয়, কীভাবে role-based এবং workflow-based prompt তৈরি করতে হয়।",
      lessons: [
        "What is AI and how to use it practically",
        "Prompting basics",
        "Bangla prompt writing",
        "English prompt writing",
        "Role-based prompt",
        "Step-by-step prompt",
        "Client work prompt",
        "Prompt library building",
      ],
    },
    {
      title: "Module 2: AI in Content Creation",
      description: "AI দিয়ে content idea, research, script, hook, storytelling, voice, image, video idea এবং content workflow বানানো।",
      lessons: [
        "Content idea generation",
        "Research using AI",
        "Script writing",
        "Hook writing",
        "Storytelling structure",
        "Voice generation",
        "Voice enhancement",
        "Image generation",
        "Video finding",
        "Animation/motion idea",
      ],
    },
    {
      title: "Module 3: AI in Graphic Design",
      description: "AI দিয়ে design idea, prompt, thumbnail, poster, banner, ad creative, brand style, social media design এবং Canva workflow।",
      lessons: [
        "Design prompting",
        "Thumbnail idea",
        "Poster idea",
        "Course banner",
        "Ad creative",
        "Social media post",
        "Brand style",
        "60+ design types using AI",
        "Canva + AI workflow",
      ],
    },

    {
      title: "Module 4: AI in YouTube SEO",
      description: "YouTube video-এর জন্য AI দিয়ে title, description, tags, thumbnail concept, hook, retention plan, shorts SEO, long video SEO এবং competitor analysis।",
      lessons: [
        "SEO title creation",
        "Description writing",
        "Tags planning",
        "Chapter writing",
        "Thumbnail concept",
        "Hook optimization",
        "Audience retention planning",
        "Shorts/Reels SEO",
        "Long video SEO",
        "Competitor analysis",
      ],
    },
    {
      title: "Module 5: AI Video Creation",
      description: "AI দিয়ে reels, shorts, long video, faceless video, educational video এবং niche-based video workflow তৈরি করা।",
      lessons: [
        "One-click video creation websites",
        "AI reels creation",
        "Canva reels workflow",
        "100+ reels formats",
        "AI long video creation",
        "Faceless video workflow",
        "Educational video workflow",
        "Niche-based video workflow",
      ],
    },
    {
      title: "Module 6: AI in Website & Landing Page Planning",
      description: "AI দিয়ে website idea, landing page structure, course page, sales page, WordPress/Elementor content, custom website planning।",
      lessons: [
        "Landing page structure",
        "Course page structure",
        "Website copywriting",
        "WordPress page idea",
        "Elementor HTML code idea",
        "Sales page copy",
        "Portfolio website planning",
      ],
    },

    {
      title: "Module 7: AI in SaaS, Tools & Digital Product Ideas",
      description: "AI দিয়ে digital product idea, SaaS idea, tool planning, feature planning, user dashboard, admin panel idea তৈরি করা।",
      lessons: [
        "Tool idea generation",
        "SaaS idea planning",
        "Feature planning",
        "Admin panel planning",
        "User dashboard planning",
        "Educational tool idea",
        "AI-assisted product planning",
      ],
    },
    {
      title: "Module 8: AI in Blogging, Research & Copywriting",
      description: "AI দিয়ে blog, news, report, copywriting, product description, landing page copy, Facebook ad copy এবং research-based writing।",
      lessons: [
        "Blog writing",
        "News writing",
        "Report writing",
        "Copywriting",
        "Product description",
        "Landing page copy",
        "Facebook ad copy",
        "Research-based writing",
      ],
    },
    {
      title: "Bonus Module: CapCut Video Editing Basics",
      description: "AI দিয়ে content বানানোর পর basic editing লাগবে। তাই bonus হিসেবে CapCut video editing workflow থাকবে।",
      lessons: [
        "Basic editing",
        "Reels editing",
        "Captions",
        "Audio cleanup",
        "Course video editing",
        "Export settings",
      ],
    },
    {
      title: "Bonus: Google AI Pro Guide",
      description: "Google AI Pro কীভাবে ব্যবহার করবেন, কোন AI tool কোন কাজে ব্যবহার করবেন, practical workflow setup, free/low-cost tool selection.",
      lessons: [
        "Google AI Pro overview",
        "Tool selection guide",
        "Practical workflow setup",
        "Free/low-cost alternatives",
      ],
    },
  ],

  projects: [
    { title: "AI দিয়ে YouTube video script তৈরি" },
    { title: "AI দিয়ে thumbnail concept তৈরি" },
    { title: "AI দিয়ে ১০টা reels idea তৈরি" },
    { title: "AI দিয়ে landing page copy তৈরি" },
    { title: "AI দিয়ে blog post তৈরি" },
    { title: "AI দিয়ে ad copy তৈরি" },
    { title: "AI দিয়ে faceless video workflow তৈরি" },
    { title: "AI দিয়ে simple tool idea plan করা" },
    { title: "AI দিয়ে client work proposal তৈরি" },
  ],
  resources: [
    { title: "Prompt templates", type: "template" },
    { title: "AI tools list", type: "pdf" },
    { title: "Content idea templates", type: "template" },
    { title: "YouTube SEO templates", type: "sheet" },
    { title: "Reels planning sheet", type: "sheet" },
    { title: "Design prompt library", type: "pack" },
    { title: "Website copy template", type: "template" },
    { title: "Blog writing template", type: "template" },
    { title: "Freelancing prompt pack", type: "pack" },
    { title: "Project checklist", type: "checklist" },
  ],
  instructorSection: {
    title: "কেন আমার কাছ থেকে শিখবেন?",
    text: "আমি শুধু AI tool দেখাই না—আমি নিজে content creation, video editing, graphic design, YouTube SEO, digital platform এবং AI-assisted workflow নিয়ে কাজ করি।",
    workflow: "Idea → Research → Script → Visual → Video → Design → SEO → Publish",
    focus: "এই course-এ আমি আপনাকে random tools না, practical workflow শেখাবো।",
  },

  pricingMode: "multiple",
  pricingPackages: [
    {
      name: "Basic",
      price: 1499,
      regularPrice: 2999,
      features: [
        "Recorded course",
        "Lifetime access",
        "Resources",
        "Prompt templates",
        "Course updates",
      ],
      cta: "Enroll Now",
    },
    {
      name: "Standard",
      price: 2999,
      features: [
        "Everything in Basic",
        "Assignments",
        "Practical projects",
        "Extra templates",
        "Private community access",
      ],
      cta: "Best Value",
      highlighted: true,
    },
    {
      name: "Premium",
      price: 4999,
      features: [
        "Everything in Standard",
        "Live Q&A",
        "Project feedback",
        "Support group",
        "Certificate",
      ],
      cta: "Join Premium",
    },
  ],
  offerStack: {
    title: "Enroll করলে যা যা পাবেন",
    items: [
      "Full AI Expert Course",
      "Prompt Template Pack",
      "AI Tools List",
      "YouTube SEO Template",
      "Reels Idea Sheet",
      "Design Prompt Library",
      "Website Copy Template",
      "Blog Writing Template",
      "Freelancing Prompt Pack",
      "Practical Project Checklist",
      "Bonus CapCut Basics",
      "Bonus Google AI Pro Guide",
    ],
    valueBreakdown: [
      { label: "Course Value", value: "৳2,999" },
      { label: "Templates", value: "৳1,000" },
      { label: "Prompt Pack", value: "৳1,000" },
      { label: "Bonus Lessons", value: "৳1,500" },
    ],
    totalValue: "৳6,499",
    todayPrice: "৳1,499",
  },

  faq: [
    {
      question: "এই course কি beginner দের জন্য?",
      answer: "হ্যাঁ, course beginner-friendly. একদম basic থেকে practical workflow দেখানো হবে।",
    },
    {
      question: "Coding জানা লাগবে?",
      answer: "না, coding জানা লাগবে না। Website/tool planning section AI এবং no-code mindset দিয়ে শেখানো হবে।",
    },
    {
      question: "Mobile দিয়ে করা যাবে?",
      answer: "অনেক কাজ mobile দিয়ে করা যাবে, তবে ভালোভাবে practice করতে laptop/PC থাকলে best.",
    },
    {
      question: "Course কি recorded?",
      answer: "হ্যাঁ, recorded course থাকবে। Premium version-এ support/live Q&A থাকতে পারে।",
    },
    {
      question: "Certificate থাকবে?",
      answer: "থাকতে পারে, তবে main focus certificate না—main focus practical skill.",
    },
    {
      question: "AI tools paid লাগবে?",
      answer: "Course-এ free/low-cost tools দিয়ে যতটা সম্ভব দেখানো হবে। কিছু advanced tool paid হতে পারে, কিন্তু beginner দের জন্য free alternative দেখানো হবে।",
    },
    {
      question: "Course শেষে freelancing করা যাবে?",
      answer: "Course আপনাকে practical AI workflow শেখাবে। Freelancing করতে হলে practice, portfolio, communication এবং consistent effort লাগবে।",
    },
  ],
  finalCTA: {
    title: "আজই শুরু করুন",
    subtitle: "AI দিয়ে practical কাজ শেখার সেরা সুযোগ। Launch offer শেষ হওয়ার আগেই enroll করুন।",
    buttonText: "Enroll Now - ৳1,499",
  },
};


// All Courses Data
export const allCoursesData: Course[] = [
  {
    id: "ai-expert-content-creation",
    title: "AI Expert Course for Content Creation & Freelancing",
    subtitle: "AI দিয়ে Content, Design, Video, SEO, Website সব শিখুন",
    description: "বাংলাদেশী students, freelancers, content creators দের জন্য beginner-friendly practical AI course.",
    category: "AI & Content Creation",
    instructor: "Md Jubaer Ahmed",
    level: "Beginner Friendly",
    language: "Bangla",
    lessons: 80,
    duration: "25+ Hours",
    price: 1499,
    regularPrice: 2999,
    currency: "BDT",
    rating: 4.9,
    students: 1250,
    badge: "Launch Offer",
    status: "active",
    featured: true,
    visible: true,
    sortOrder: 1,
    detail: aiExpertCourseDetail,
  },
  {
    id: "video-editing-capcut-premiere",
    title: "Video Editing with CapCut & Premiere Pro",
    subtitle: "Professional video editing শিখুন zero থেকে",
    category: "Video Editing",
    instructor: "Md Jubaer Ahmed",
    level: "Beginner to Intermediate",
    language: "Bangla",
    currency: "BDT",
    badge: "Coming Soon",
    status: "coming_soon",
    featured: false,
    visible: true,
    sortOrder: 2,
  },
  {
    id: "motion-graphics-content-creators",
    title: "Motion Graphics for Content Creators",
    subtitle: "After Effects দিয়ে stunning animations তৈরি করুন",
    category: "Motion Graphics",
    instructor: "Md Jubaer Ahmed",
    level: "Intermediate",
    language: "Bangla",
    currency: "BDT",
    badge: "Coming Soon",
    status: "coming_soon",
    featured: false,
    visible: true,
    sortOrder: 3,
  },

  {
    id: "graphic-design-freelancers",
    title: "Graphic Design for Freelancers",
    subtitle: "Freelancing-ready graphic design skills শিখুন",
    category: "Graphic Design",
    instructor: "Md Jubaer Ahmed",
    level: "Beginner Friendly",
    language: "Bangla",
    currency: "BDT",
    badge: "Coming Soon",
    status: "coming_soon",
    featured: false,
    visible: true,
    sortOrder: 4,
  },
  {
    id: "youtube-seo-content-strategy",
    title: "YouTube SEO & Content Strategy",
    subtitle: "YouTube growth এর complete strategy শিখুন",
    category: "YouTube & SEO",
    instructor: "Md Jubaer Ahmed",
    level: "All Levels",
    language: "Bangla",
    currency: "BDT",
    badge: "Coming Soon",
    status: "coming_soon",
    featured: false,
    visible: true,
    sortOrder: 5,
  },
  {
    id: "canva-design-pro",
    title: "Canva Design Pro",
    subtitle: "Canva দিয়ে professional design তৈরি করুন",
    category: "Graphic Design",
    instructor: "Md Jubaer Ahmed",
    level: "Beginner Friendly",
    language: "Bangla",
    currency: "BDT",
    badge: "Coming Soon",
    status: "coming_soon",
    featured: false,
    visible: true,
    sortOrder: 6,
  },
  {
    id: "no-code-website-building",
    title: "No-code Website Building",
    subtitle: "Coding ছাড়াই professional website তৈরি করুন",
    category: "Web & No-code",
    instructor: "Md Jubaer Ahmed",
    level: "Beginner Friendly",
    language: "Bangla",
    currency: "BDT",
    badge: "Coming Soon",
    status: "coming_soon",
    featured: false,
    visible: true,
    sortOrder: 7,
  },
  {
    id: "basic-ai-prompting",
    title: "Basic AI Prompting",
    subtitle: "AI prompting এর basics শিখুন—একদম free তে",
    description: "AI tools কীভাবে ব্যবহার করবেন, basic prompting techniques শিখুন।",
    category: "Free Courses",
    instructor: "Md Jubaer Ahmed",
    level: "Beginner",
    language: "Bangla",
    lessons: 12,
    duration: "3+ Hours",
    price: 0,
    currency: "BDT",
    badge: "Free",
    status: "free",
    featured: false,
    visible: true,
    sortOrder: 8,
  },
];


// Courses Page FAQ
export const coursesPageFAQ = [
  {
    question: "Courses গুলো কোন ভাষায়?",
    answer: "সব courses বাংলায় পড়ানো হয়। তবে tools এবং techniques globally applicable।",
  },
  {
    question: "Courses কি recorded নাকি live?",
    answer: "Courses recorded format-এ থাকবে। Premium packages-এ live Q&A sessions থাকতে পারে।",
  },
  {
    question: "Lifetime access পাবো?",
    answer: "হ্যাঁ, enroll করলে lifetime access পাবেন এবং future updates ও পাবেন।",
  },
  {
    question: "Refund policy কী?",
    answer: "Course শুরু করার ৭ দিনের মধ্যে satisfied না হলে refund request করতে পারবেন।",
  },
  {
    question: "কোন course দিয়ে শুরু করবো?",
    answer: "আপনি যদি beginner হন, AI Expert Course দিয়ে শুরু করুন। এটা আপনাকে overall digital skill foundation দেবে।",
  },
];

// Why Learn From Pro with Jubaer
export const whyLearnData = [
  {
    title: "Practical Workflow",
    description: "শুধু tool দেখানো না, real কাজের workflow শেখানো হয়",
    icon: "Workflow",
  },
  {
    title: "Bangla তে শেখা",
    description: "নিজের ভাষায় complex concepts সহজে বোঝা যায়",
    icon: "Globe",
  },
  {
    title: "Project-Based",
    description: "প্রতিটি course-এ practical projects থাকে",
    icon: "FolderOpen",
  },
  {
    title: "Lifetime Access",
    description: "একবার enroll করলে সবসময় access থাকবে",
    icon: "Clock",
  },
  {
    title: "Templates & Resources",
    description: "Ready-to-use templates এবং resources পাবেন",
    icon: "FileText",
  },
  {
    title: "Community Support",
    description: "Private community তে সবার সাথে connected থাকবেন",
    icon: "Users",
  },
];
