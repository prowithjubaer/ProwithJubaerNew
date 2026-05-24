export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  readingTime: string;
  date: string;
  featured: boolean;
  thumbnail?: string;
}

export const blogCategories = [
  "All",
  "Video Editing",
  "Motion Graphics",
  "AI Tools",
  "Graphic Design",
  "YouTube SEO",
  "Freelancing",
  "Course Updates",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-tools-video-editing-2025",
    title: "2025 সালে Video Editing এর জন্য সেরা AI Tools",
    excerpt:
      "AI tools এখন video editing কে আরও সহজ এবং দ্রুত করে দিচ্ছে। জানুন কোন AI tools আপনার editing workflow কে next level এ নিয়ে যাবে।",
    content: `AI technology video editing industry কে completely transform করছে। আজকে আমরা দেখবো 2025 সালের সেরা AI tools যেগুলো আপনার video editing workflow কে 10x faster করে দেবে।

## কেন AI Tools ব্যবহার করবেন?

AI tools ব্যবহার করলে আপনি repetitive tasks automate করতে পারবেন, color grading দ্রুত করতে পারবেন, এবং overall production quality improve করতে পারবেন।

## Top AI Tools for Video Editing

1. **Runway ML** - AI-powered video generation and editing
2. **Descript** - Text-based video editing with AI
3. **CapCut** - Free AI-enhanced mobile editing
4. **Topaz Video AI** - AI upscaling and enhancement
5. **Adobe Sensei** - AI features in Premiere Pro

## কিভাবে শুরু করবেন?

প্রথমে free tools দিয়ে শুরু করুন। CapCut এবং Runway ML এর free tiers চমৎকার। Practice করুন এবং ধীরে ধীরে paid tools এ upgrade করুন।`,
    category: "AI Tools",
    author: {
      name: "Md Jubaer Ahmed",
      role: "Video Editor & AI Expert",
    },
    readingTime: "5 min read",
    date: "2025-01-15",
    featured: true,
  },
  {
    id: "2",
    slug: "youtube-seo-bangla-guide",
    title: "YouTube SEO Complete Guide: বাংলায় সহজ ভাষায়",
    excerpt:
      "YouTube SEO শিখুন একদম beginner-friendly way তে। Title, Description, Tags, Thumbnail — সব কিছু step by step।",
    content: `YouTube এ video rank করাতে SEO জানা mandatory। কিন্তু বেশিরভাগ creators SEO নিয়ে confused থাকেন। আজকে আমরা YouTube SEO এর complete guide দেখবো।

## YouTube SEO কী?

YouTube SEO হলো আপনার video কে YouTube search এবং suggested videos এ rank করানোর process।

## Key SEO Elements

1. **Title** - Keyword-rich, click-worthy title
2. **Description** - Detailed description with keywords
3. **Tags** - Relevant tags for discoverability
4. **Thumbnail** - High-CTR thumbnail design
5. **Chapters** - Proper chapter breakdown

## Pro Tips

- প্রথম 48 ঘণ্টা crucial - maximum promotion করুন
- Audience retention improve করুন storytelling দিয়ে
- End screen এবং cards ব্যবহার করুন
- Community post দিয়ে engagement বাড়ান`,
    category: "YouTube SEO",
    author: {
      name: "Md Jubaer Ahmed",
      role: "Video Editor & AI Expert",
    },
    readingTime: "7 min read",
    date: "2025-01-10",
    featured: true,
  },
  {
    id: "3",
    slug: "freelancing-video-editor-bangladesh",
    title: "বাংলাদেশ থেকে Video Editing Freelancing শুরু করার Complete Roadmap",
    excerpt:
      "Video editing skill দিয়ে কিভাবে international clients পাবেন, portfolio বানাবেন এবং sustainable income তৈরি করবেন — সব জানুন।",
    content: `বাংলাদেশ থেকে video editing freelancing একটি excellent career option। International clients দের সাথে কাজ করে আপনি ভালো income করতে পারবেন।

## শুরু করার আগে যা লাগবে

- Basic video editing skill (DaVinci Resolve or Premiere Pro)
- A decent computer/laptop
- Good internet connection
- English communication skills
- Portfolio website or showreel

## Platform Selection

1. **Fiverr** - Best for beginners
2. **Upwork** - Best for long-term clients
3. **Direct outreach** - Best for premium clients

## Pricing Guide for Bangladeshi Freelancers

- Beginner: $20-50 per video
- Intermediate: $50-150 per video
- Advanced: $150-500+ per video

## Common Mistakes to Avoid

- Pricing too low
- Not having a portfolio
- Poor communication
- Not meeting deadlines`,
    category: "Freelancing",
    author: {
      name: "Md Jubaer Ahmed",
      role: "Video Editor & AI Expert",
    },
    readingTime: "8 min read",
    date: "2025-01-05",
    featured: false,
  },
  {
    id: "4",
    slug: "motion-graphics-beginners-after-effects",
    title: "Motion Graphics শেখা শুরু করবেন কিভাবে? After Effects Beginner Guide",
    excerpt:
      "After Effects দিয়ে motion graphics শেখার complete beginner guide। কোথা থেকে শুরু করবেন, কি শিখবেন, কতদিন লাগবে — সব answer।",
    content: `Motion graphics হলো video content এর সবচেয়ে valuable skill গুলোর একটি। After Effects দিয়ে stunning animations তৈরি করা শিখলে আপনার career completely change হয়ে যাবে।

## Motion Graphics কী?

Motion graphics হলো animated graphic design। Text, shapes, icons, illustrations কে animate করে engaging visual content তৈরি করা।

## শেখার Roadmap

### Month 1: Basics
- After Effects interface
- Keyframe animation
- Easing and timing
- Shape layers

### Month 2: Intermediate
- Text animation
- Logo reveals
- Transitions
- Masks and mattes

### Month 3: Advanced
- Expressions
- 3D in AE
- Character animation
- Complex compositions

## Resources

- YouTube tutorials
- Structured courses (like Pro with Jubaer Motion Graphics course)
- Practice daily for at least 1-2 hours`,
    category: "Motion Graphics",
    author: {
      name: "Md Jubaer Ahmed",
      role: "Video Editor & AI Expert",
    },
    readingTime: "6 min read",
    date: "2024-12-28",
    featured: false,
  },
  {
    id: "5",
    slug: "canva-graphic-design-tips-2025",
    title: "Canva দিয়ে Professional Graphic Design: 10টি Pro Tips",
    excerpt:
      "Canva ব্যবহার করে professional quality designs তৈরি করুন। জানুন ১০টি pro tips যেগুলো আপনার designs কে next level এ নিয়ে যাবে।",
    content: `Canva হলো সবচেয়ে accessible design tool যেটা দিয়ে যে কেউ professional quality designs তৈরি করতে পারে। আজকে আমরা 10টি pro tips দেখবো।

## কেন Canva?

- Free version এই অনেক কিছু করা যায়
- Beginner-friendly interface
- Thousands of templates
- AI features integrated

## 10 Pro Tips

1. **Brand Kit ব্যবহার করুন** - Consistent branding maintain করুন
2. **Grid system follow করুন** - Professional layouts তৈরি করুন
3. **Typography hierarchy** - 2-3 fonts max ব্যবহার করুন
4. **White space** - Cluttered design avoid করুন
5. **Color palette** - 3-4 colors max ব্যবহার করুন
6. **Custom templates** - নিজের templates তৈরি করুন
7. **AI features** - Magic Write, Background Remover ব্যবহার করুন
8. **Animations** - Social media posts এ subtle animations add করুন
9. **Resize feature** - একটা design multiple platforms এ ব্যবহার করুন
10. **Collaboration** - Team members দের সাথে collaborate করুন

## Final Thoughts

Canva powerful tool, কিন্তু design principles জানা important। Tool শেখার পাশাপাশি design fundamentals ও শিখুন।`,
    category: "Graphic Design",
    author: {
      name: "Md Jubaer Ahmed",
      role: "Video Editor & AI Expert",
    },
    readingTime: "5 min read",
    date: "2024-12-20",
    featured: true,
  },
];
