export interface Database {
  public: {
    Tables: {
      site_settings: {
        Row: SiteSettings;
        Insert: Partial<SiteSettings>;
        Update: Partial<SiteSettings>;
      };
      navigation: {
        Row: NavigationItem;
        Insert: Omit<NavigationItem, "id" | "created_at">;
        Update: Partial<NavigationItem>;
      };
      hero: {
        Row: HeroData;
        Insert: Partial<HeroData>;
        Update: Partial<HeroData>;
      };
      services: {
        Row: Service;
        Insert: Omit<Service, "id" | "created_at">;
        Update: Partial<Service>;
      };
      portfolio: {
        Row: PortfolioProject;
        Insert: Omit<PortfolioProject, "id" | "created_at">;
        Update: Partial<PortfolioProject>;
      };
      courses: {
        Row: Course;
        Insert: Omit<Course, "id" | "created_at">;
        Update: Partial<Course>;
      };
      testimonials: {
        Row: Testimonial;
        Insert: Omit<Testimonial, "id" | "created_at">;
        Update: Partial<Testimonial>;
      };
      blog_posts: {
        Row: BlogPost;
        Insert: Omit<BlogPost, "id" | "created_at">;
        Update: Partial<BlogPost>;
      };
      case_studies: {
        Row: CaseStudy;
        Insert: Omit<CaseStudy, "id" | "created_at">;
        Update: Partial<CaseStudy>;
      };
      resources: {
        Row: Resource;
        Insert: Omit<Resource, "id" | "created_at">;
        Update: Partial<Resource>;
      };
      faq: {
        Row: FAQ;
        Insert: Omit<FAQ, "id" | "created_at">;
        Update: Partial<FAQ>;
      };
      social_links: {
        Row: SocialLinks;
        Insert: Partial<SocialLinks>;
        Update: Partial<SocialLinks>;
      };
      contact_submissions: {
        Row: ContactSubmission;
        Insert: Omit<ContactSubmission, "id" | "created_at">;
        Update: Partial<ContactSubmission>;
      };
    };
  };
}

// ============ TABLE TYPES ============

export interface SiteSettings {
  id: string;
  site_name: string;
  site_url: string;
  site_description: string;
  email: string;
  phone: string;
  logo_text: string;
  primary_color: string;
  accent_color: string;
  cta_color: string;
  og_image: string;
  creator_name: string;
  keywords: string[];
  updated_at: string;
}

export interface NavigationItem {
  id: string;
  name: string;
  href: string;
  sort_order: number;
  visible: boolean;
  created_at: string;
}

export interface HeroData {
  id: string;
  badge_text: string;
  show_badge: boolean;
  name: string;
  tagline: string;
  description: string;
  supporting_line: string;
  skill_line: string;
  cta_primary_text: string;
  cta_primary_link: string;
  cta_secondary_text: string;
  cta_secondary_link: string;
  cta_tertiary_text: string;
  cta_tertiary_link: string;
  show_stats: boolean;
  show_showreel_card: boolean;
  show_floating_elements: boolean;
  stats: { value: string; label: string }[];
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: string;
  color: string;
  sort_order: number;
  visible: boolean;
  created_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  video_url: string;
  description: string;
  tags: string[];
  client: string;
  year: string;
  featured: boolean;
  visible: boolean;
  sort_order: number;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  category: string;
  instructor: string;
  level: string;
  language: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  original_price: number;
  currency: string;
  features: string[];
  modules: { title: string; lessons: number }[];
  badge: string;
  status: "active" | "coming_soon" | "free";
  featured: boolean;
  visible: boolean;
  sort_order: number;
  enrollment_url: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  platform: string;
  featured: boolean;
  visible: boolean;
  sort_order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail: string;
  date: string;
  read_time: string;
  featured: boolean;
  published: boolean;
  views: number;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  duration: string;
  results: { metric: string; value: string; detail: string }[];
  challenge: string;
  solution: string;
  process: string[];
  testimonial: string;
  tags: string[];
  featured: boolean;
  visible: boolean;
  sort_order: number;
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  format: string;
  size: string;
  download_url: string;
  downloads: number;
  featured: boolean;
  visible: boolean;
  sort_order: number;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  visible: boolean;
  created_at: string;
}

export interface SocialLinks {
  id: string;
  youtube: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  fiverr: string;
  upwork: string;
  github: string;
  tiktok: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
  budget: string;
  project_type: string;
  status: "new" | "read" | "replied" | "archived";
  created_at: string;
}
