-- ============================================
-- STORAGE BUCKETS SETUP
-- Run this AFTER the main schema.sql
-- Supabase Dashboard → SQL Editor → New Query
-- ============================================

-- Create public storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio', 'portfolio', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('blog', 'blog', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('courses', 'courses', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('testimonials', 'testimonials', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('resources', 'resources', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('general', 'general', true);

-- Allow public read access to all buckets
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id IN ('portfolio', 'blog', 'courses', 'testimonials', 'resources', 'general'));

-- Allow authenticated users (admin) to upload/update/delete
CREATE POLICY "Admin Upload" ON storage.objects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin Update" ON storage.objects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Delete" ON storage.objects FOR DELETE USING (auth.role() = 'authenticated');
