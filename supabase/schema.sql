-- ============================================
-- Pro with Jubaer - Complete Database Schema
-- Run this SQL in your Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste & Run
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. SITE SETTINGS (Single row - global config)
-- ============================================
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_name TEXT NOT NULL DEFAULT 'Pro with Jubaer',
  site_url TEXT NOT NULL DEFAULT 'https://prowithjubaer.com',
  site_description TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  logo_text TEXT NOT NULL DEFAULT 'Pro with Jubaer',
  primary_color TEXT NOT NULL DEFAULT '#8b5cf6',
  accent_color TEXT NOT NULL DEFAULT '#06b6d4',
  cta_color TEXT NOT NULL DEFAULT '#f97316',
  og_image TEXT NOT NULL DEFAULT '/og-image.jpg',
  creator_name TEXT NOT NULL DEFAULT 'Md Jubaer Ahmed',
  keywords TEXT[] DEFAULT ARRAY['video editor', 'motion graphics', 'graphic design'],
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 2. NAVIGATION ITEMS
-- ============================================
CREATE TABLE IF NOT EXISTS navigation (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  href TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 3. HERO SECTION (Single row)
-- ============================================
CREATE TABLE IF NOT EXISTS hero (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  badge_text TEXT NOT NULL DEFAULT 'Available for Remote Work',
  show_badge BOOLEAN NOT NULL DEFAULT true,
  name TEXT NOT NULL DEFAULT 'Md Jubaer Ahmed',
  tagline TEXT NOT NULL DEFAULT 'Video Editor & Motion Graphics Designer',
  description TEXT NOT NULL DEFAULT '',
  supporting_line TEXT NOT NULL DEFAULT '',
  skill_line TEXT NOT NULL DEFAULT '',
  cta_primary_text TEXT NOT NULL DEFAULT 'Watch Showreel',
  cta_primary_link TEXT NOT NULL DEFAULT '#showreel',
  cta_secondary_text TEXT NOT NULL DEFAULT 'View Portfolio',
  cta_secondary_link TEXT NOT NULL DEFAULT '/portfolio',
  cta_tertiary_text TEXT NOT NULL DEFAULT 'Hire Me',
  cta_tertiary_link TEXT NOT NULL DEFAULT '/contact',
  show_stats BOOLEAN NOT NULL DEFAULT true,
  show_showreel_card BOOLEAN NOT NULL DEFAULT true,
  show_floating_elements BOOLEAN NOT NULL DEFAULT true,
  stats JSONB NOT NULL DEFAULT '[{"value": "150+", "label": "Projects Delivered"}, {"value": "50+", "label": "Happy Clients"}, {"value": "5+", "label": "Years Experience"}, {"value": "10K+", "label": "Students"}]'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 4. SERVICES
-- ============================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT 'Briefcase',
  features TEXT[] DEFAULT ARRAY[]::TEXT[],
  pricing TEXT NOT NULL DEFAULT '',
  color TEXT NOT NULL DEFAULT 'purple',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 5. PORTFOLIO PROJECTS
-- ============================================
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '',
  thumbnail TEXT NOT NULL DEFAULT '',
  video_url TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  client TEXT NOT NULL DEFAULT '',
  year TEXT NOT NULL DEFAULT '',
  featured BOOLEAN NOT NULL DEFAULT false,
  visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 6. COURSES
-- ============================================
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  thumbnail TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  instructor TEXT NOT NULL DEFAULT 'Md Jubaer Ahmed',
  level TEXT NOT NULL DEFAULT 'Beginner',
  language TEXT NOT NULL DEFAULT 'Bangla',
  duration TEXT NOT NULL DEFAULT '',
  lessons INTEGER NOT NULL DEFAULT 0,
  students INTEGER NOT NULL DEFAULT 0,
  rating NUMERIC(2,1) NOT NULL DEFAULT 0.0,
  reviews INTEGER NOT NULL DEFAULT 0,
  price NUMERIC(10,2) NOT NULL DEFAULT 0,
  original_price NUMERIC(10,2) NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'BDT',
  features TEXT[] DEFAULT ARRAY[]::TEXT[],
  modules JSONB NOT NULL DEFAULT '[]'::jsonb,
  badge TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'coming_soon', 'free')),
  featured BOOLEAN NOT NULL DEFAULT false,
  visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  enrollment_url TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 7. TESTIMONIALS
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT '',
  avatar TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  platform TEXT NOT NULL DEFAULT 'Remote Client',
  featured BOOLEAN NOT NULL DEFAULT false,
  visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 8. BLOG POSTS
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  thumbnail TEXT NOT NULL DEFAULT '',
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  read_time TEXT NOT NULL DEFAULT '5 min read',
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  views INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 9. CASE STUDIES
-- ============================================
CREATE TABLE IF NOT EXISTS case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  client TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  thumbnail TEXT NOT NULL DEFAULT '',
  duration TEXT NOT NULL DEFAULT '',
  results JSONB NOT NULL DEFAULT '[]'::jsonb,
  challenge TEXT NOT NULL DEFAULT '',
  solution TEXT NOT NULL DEFAULT '',
  process TEXT[] DEFAULT ARRAY[]::TEXT[],
  testimonial TEXT NOT NULL DEFAULT '',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  featured BOOLEAN NOT NULL DEFAULT false,
  visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 10. FREE RESOURCES / DOWNLOADS
-- ============================================
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  format TEXT NOT NULL DEFAULT '',
  size TEXT NOT NULL DEFAULT '',
  download_url TEXT NOT NULL DEFAULT '',
  downloads INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT false,
  visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 11. FAQ
-- ============================================
CREATE TABLE IF NOT EXISTS faq (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'General',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 12. SOCIAL LINKS (Single row)
-- ============================================
CREATE TABLE IF NOT EXISTS social_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  youtube TEXT NOT NULL DEFAULT '',
  facebook TEXT NOT NULL DEFAULT '',
  instagram TEXT NOT NULL DEFAULT '',
  linkedin TEXT NOT NULL DEFAULT '',
  twitter TEXT NOT NULL DEFAULT '',
  fiverr TEXT NOT NULL DEFAULT '',
  upwork TEXT NOT NULL DEFAULT '',
  github TEXT NOT NULL DEFAULT '',
  tiktok TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 13. CONTACT FORM SUBMISSIONS
-- ============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  budget TEXT NOT NULL DEFAULT '',
  project_type TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_navigation_sort ON navigation(sort_order);
CREATE INDEX IF NOT EXISTS idx_services_sort ON services(sort_order);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio(featured) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio(category) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_courses_featured ON courses(featured) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_courses_status ON courses(status) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_case_studies_featured ON case_studies(featured) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_resources_featured ON resources(featured) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_faq_sort ON faq(sort_order) WHERE visible = true;
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status, created_at DESC);

-- ============================================
-- ROW LEVEL SECURITY (RLS) Policies
-- ============================================

-- Enable RLS on all tables
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ policies (anyone can read visible content)
CREATE POLICY "Public can read site_settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public can read navigation" ON navigation FOR SELECT USING (visible = true);
CREATE POLICY "Public can read hero" ON hero FOR SELECT USING (true);
CREATE POLICY "Public can read services" ON services FOR SELECT USING (visible = true);
CREATE POLICY "Public can read portfolio" ON portfolio FOR SELECT USING (visible = true);
CREATE POLICY "Public can read courses" ON courses FOR SELECT USING (visible = true);
CREATE POLICY "Public can read testimonials" ON testimonials FOR SELECT USING (visible = true);
CREATE POLICY "Public can read blog_posts" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Public can read case_studies" ON case_studies FOR SELECT USING (visible = true);
CREATE POLICY "Public can read resources" ON resources FOR SELECT USING (visible = true);
CREATE POLICY "Public can read faq" ON faq FOR SELECT USING (visible = true);
CREATE POLICY "Public can read social_links" ON social_links FOR SELECT USING (true);

-- PUBLIC INSERT policy for contact form
CREATE POLICY "Public can submit contact forms" ON contact_submissions FOR INSERT WITH CHECK (true);

-- AUTHENTICATED (Admin) - Full CRUD on all tables
CREATE POLICY "Admin full access site_settings" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access navigation" ON navigation FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access hero" ON hero FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access portfolio" ON portfolio FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access courses" ON courses FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access blog_posts" ON blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access case_studies" ON case_studies FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access resources" ON resources FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access faq" ON faq FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access social_links" ON social_links FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access contact_submissions" ON contact_submissions FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- FUNCTIONS: Auto-update timestamps
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hero_updated_at
  BEFORE UPDATE ON hero
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_social_links_updated_at
  BEFORE UPDATE ON social_links
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SEED DATA: Insert default records
-- ============================================

-- Insert default site settings
INSERT INTO site_settings (site_name, site_url, site_description, email, phone, logo_text, creator_name, keywords)
VALUES (
  'Pro with Jubaer',
  'https://prowithjubaer.com',
  'Premium video editing, motion graphics, and creative design services by Md Jubaer Ahmed. Hire for remote projects or learn creative skills through expert-led courses.',
  'hello@prowithjubaer.com',
  '+880 1XXX-XXXXXX',
  'Pro with Jubaer',
  'Md Jubaer Ahmed',
  ARRAY['video editor', 'motion graphics', 'graphic design', 'thumbnail design', 'content creator', 'creative professional', 'remote video editor', 'YouTube editor', 'course platform']
);

-- Insert default hero data
INSERT INTO hero (
  badge_text, name, tagline, description, supporting_line, skill_line,
  cta_primary_text, cta_primary_link, cta_secondary_text, cta_secondary_link,
  cta_tertiary_text, cta_tertiary_link, stats
)
VALUES (
  'Available for Remote Work',
  'Md Jubaer Ahmed',
  'Video Editor & Motion Graphics Designer',
  'I create clean, engaging, and visually strong videos, motion graphics, thumbnails, and social media content for creators, brands, and businesses.',
  'My focus is simple: make content look professional, easy to watch, and visually memorable through editing, pacing, motion, captions, and design.',
  'Video Editing • Motion Graphics • Thumbnail Design • Short-form & Long-form Content • AI Workflow Knowledge',
  'Watch Showreel', '#showreel',
  'View Portfolio', '/portfolio',
  'Hire Me', '/contact',
  '[{"value": "150+", "label": "Projects Delivered"}, {"value": "50+", "label": "Happy Clients"}, {"value": "5+", "label": "Years Experience"}, {"value": "10K+", "label": "Students"}]'::jsonb
);

-- Insert default social links
INSERT INTO social_links (youtube, facebook, instagram, linkedin, twitter, fiverr, upwork, github)
VALUES (
  'https://youtube.com/@prowithjubaer',
  'https://facebook.com/prowithjubaer',
  'https://instagram.com/prowithjubaer',
  'https://linkedin.com/in/prowithjubaer',
  'https://twitter.com/prowithjubaer',
  'https://fiverr.com/prowithjubaer',
  'https://upwork.com/freelancers/prowithjubaer',
  'https://github.com/prowithjubaer'
);

-- Insert default navigation items
INSERT INTO navigation (name, href, sort_order, visible) VALUES
  ('Home', '/', 1, true),
  ('Portfolio', '/portfolio', 2, true),
  ('Services', '/services', 3, true),
  ('Courses', '/courses', 4, true),
  ('Case Studies', '/case-studies', 5, true),
  ('About', '/about', 6, true),
  ('Contact', '/contact', 7, true);

-- Insert default services
INSERT INTO services (title, description, icon, features, pricing, color, sort_order) VALUES
  ('Video Editing', 'Professional video editing for YouTube, social media, documentaries, and brand content. Cinematic color grading, seamless transitions, and storytelling that hooks viewers.', 'Video', ARRAY['YouTube Long-form & Shorts', 'Cinematic Color Grading', 'Sound Design & Mixing', 'Multi-cam Editing', 'Podcast Editing'], 'From $50/video', 'purple', 1),
  ('Motion Graphics', 'Eye-catching animations, logo reveals, intros/outros, explainer videos, and kinetic typography that elevate your brand presence.', 'Sparkles', ARRAY['Logo Animation & Reveals', 'Intro/Outro Design', 'Explainer Videos', 'Kinetic Typography', 'Social Media Animations'], 'From $100/project', 'cyan', 2),
  ('Thumbnail Design', 'High-CTR YouTube thumbnails and social media graphics that grab attention and drive clicks. Data-driven design with A/B testing approach.', 'Image', ARRAY['YouTube Thumbnails', 'A/B Testing Approach', 'Brand Consistency', 'Social Media Graphics', 'Click-optimized Design'], 'From $15/thumbnail', 'orange', 3),
  ('Graphic Design', 'Complete visual identity and content design for social media, presentations, and marketing materials that align with your brand.', 'Palette', ARRAY['Social Media Content', 'Brand Identity Design', 'Presentation Design', 'Marketing Materials', 'Infographics'], 'From $30/design', 'blue', 4),
  ('Content Workflow Support', 'End-to-end creative workflow management for YouTubers and content creators. From ideation to publishing — I handle the entire creative pipeline.', 'Workflow', ARRAY['YouTube Channel Management', 'Content Calendar Planning', 'Upload & SEO Optimization', 'AI-assisted Workflows', 'Batch Production'], 'Custom Pricing', 'green', 5),
  ('Web & Digital Design', 'Modern website design, no-code builds, and digital tool creation as part of a holistic creative solution for your brand.', 'Globe', ARRAY['Landing Page Design', 'No-code Website Builds', 'UI/UX Design', 'Digital Tool Prototypes', 'Creative Microsites'], 'From $200/project', 'pink', 6);

-- Insert default testimonials
INSERT INTO testimonials (name, role, avatar, content, rating, platform, sort_order) VALUES
  ('Alex Chen', 'YouTuber - 2M Subscribers', '/testimonials/alex.jpg', 'Jubaer transformed my channel''s visual identity. His editing style perfectly captures the energy I want, and my watch time increased by 40% after working with him.', 5, 'YouTube', 1),
  ('Sarah Mitchell', 'Marketing Director, TechStartup Inc', '/testimonials/sarah.jpg', 'The motion graphics Jubaer created for our product launch were incredible. Professional, creative, and delivered ahead of schedule. Highly recommend!', 5, 'Remote Client', 2),
  ('Rahman Khan', 'Student - Video Editing Masterclass', '/testimonials/rahman.jpg', 'This course changed my career. I went from knowing nothing about editing to landing my first freelance client within 2 months of completing the course. Best investment ever!', 5, 'Course Student', 3),
  ('James Rodriguez', 'Content Creator & Podcaster', '/testimonials/james.jpg', 'I''ve worked with many editors, but Jubaer stands out. He understands storytelling, pacing, and knows exactly how to make content engaging. He''s my go-to editor now.', 5, 'Remote Client', 4),
  ('Fatima Akter', 'Student - Motion Graphics Course', '/testimonials/fatima.jpg', 'As a Bangla speaker, finding quality motion graphics courses was difficult. Jubaer''s course is world-class quality in our own language. Now I''m earning from Fiverr!', 5, 'Course Student', 5),
  ('David Park', 'Brand Manager, GlobalBrands Co', '/testimonials/david.jpg', 'The thumbnail designs Jubaer created boosted our YouTube CTR from 4% to 9%. His understanding of visual psychology is remarkable. Worth every penny.', 5, 'Remote Client', 6);

-- Insert default FAQ
INSERT INTO faq (question, answer, category, sort_order) VALUES
  ('What software do you use for video editing?', 'I primarily use DaVinci Resolve and Adobe Premiere Pro for editing, After Effects for motion graphics, and Photoshop for thumbnail/graphic design. I also integrate AI tools for enhanced workflows.', 'General', 1),
  ('How long does a typical project take?', 'Turnaround depends on complexity. Simple edits: 2-3 days. Complex videos with motion graphics: 5-7 days. Full brand packages: 2-3 weeks. Rush delivery available for additional fee.', 'General', 2),
  ('Do you work with international clients?', 'Yes! Most of my clients are international. I work remotely with clients from the US, UK, Canada, Australia, and across Europe. I communicate in English and adapt to different time zones.', 'General', 3),
  ('Are the courses in Bangla?', 'Yes, all courses are taught in Bangla to help Bangladeshi learners understand complex concepts easily. However, all tools and techniques taught are industry-standard and globally applicable.', 'Courses', 4),
  ('Do I get lifetime access to courses?', 'Absolutely! Once you enroll, you get lifetime access to all course materials, future updates, and the private community. Learn at your own pace, forever.', 'Courses', 5),
  ('Can you handle ongoing/recurring work?', 'Yes! I offer retainer packages for ongoing clients. Many YouTubers and brands work with me on a monthly basis for consistent content production.', 'Services', 6);

-- Insert default resources
INSERT INTO resources (title, description, category, format, size, downloads, featured, sort_order) VALUES
  ('50 Free LUTs Pack — Cinematic Color Grades', 'Professional color grading LUTs for DaVinci Resolve and Premiere Pro. Includes cinematic, moody, vibrant, and desaturated looks.', 'Color Grading', 'ZIP (CUBE files)', '15 MB', 3200, true, 1),
  ('YouTube Thumbnail PSD Templates (10 Pack)', 'Ready-to-use Photoshop templates for high-CTR YouTube thumbnails. Easily customizable with your own photos and text.', 'Templates', 'PSD', '45 MB', 5100, true, 2),
  ('Motion Graphics Starter Kit — After Effects', '10 pre-built motion graphics elements including lower thirds, transitions, and text animations for After Effects.', 'Motion Graphics', 'AEP + MOGRT', '120 MB', 2800, true, 3),
  ('Freelancer Rate Calculator Spreadsheet', 'Calculate your ideal hourly/project rate based on expenses, desired income, and market positioning.', 'Business', 'Google Sheets', 'Online', 4500, false, 4),
  ('Video Editing Keyboard Shortcuts Cheatsheet', 'Printable keyboard shortcuts for DaVinci Resolve, Premiere Pro, and After Effects.', 'Cheatsheet', 'PDF', '2 MB', 6800, false, 5),
  ('Client Onboarding Template Pack', 'Professional templates for client contracts, project briefs, and revision request forms.', 'Business', 'PDF + DOCX', '5 MB', 3100, false, 6);

-- ============================================
-- STORAGE BUCKETS (Run separately if needed)
-- ============================================
-- Create storage buckets for file uploads
-- Note: Run these in Supabase Dashboard → Storage → New Bucket
--
-- INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio', 'portfolio', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog', 'blog', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('courses', 'courses', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('testimonials', 'testimonials', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('resources', 'resources', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('general', 'general', true);
