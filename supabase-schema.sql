-- =============================================
-- Siddhiksha Education Care — Supabase Schema
-- Run this in Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- FACULTY TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS faculty (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience TEXT NOT NULL,
  subject_expertise TEXT NOT NULL,
  description TEXT,
  photo_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ACHIEVEMENTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS achievements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_name TEXT NOT NULL,
  standard TEXT NOT NULL,
  school_name TEXT NOT NULL,
  board TEXT NOT NULL CHECK (board IN ('State Board', 'CBSE')),
  marks_percentage TEXT NOT NULL,
  achievement_description TEXT,
  photo_url TEXT,
  is_rank_holder BOOLEAN DEFAULT FALSE,
  rank TEXT,
  year TEXT NOT NULL DEFAULT EXTRACT(YEAR FROM NOW())::TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- TESTIMONIALS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  standard TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_active BOOLEAN DEFAULT TRUE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ADMISSIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS admissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  school_name TEXT NOT NULL,
  standard TEXT NOT NULL,
  board TEXT NOT NULL CHECK (board IN ('State Board', 'CBSE')),
  additional_notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'enrolled', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- WEBSITE SETTINGS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS website_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'text' CHECK (type IN ('text', 'image', 'json', 'boolean')),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- UPDATED_AT TRIGGERS
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_faculty_updated_at BEFORE UPDATE ON faculty FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_achievements_updated_at BEFORE UPDATE ON achievements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admissions_updated_at BEFORE UPDATE ON admissions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_website_settings_updated_at BEFORE UPDATE ON website_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE admissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_settings ENABLE ROW LEVEL SECURITY;

-- Public read for faculty, achievements, active testimonials, settings
CREATE POLICY "Public can read faculty" ON faculty FOR SELECT USING (true);
CREATE POLICY "Public can read achievements" ON achievements FOR SELECT USING (true);
CREATE POLICY "Public can read active testimonials" ON testimonials FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read settings" ON website_settings FOR SELECT USING (true);

-- Public can insert admissions (form submissions)
CREATE POLICY "Public can submit admissions" ON admissions FOR INSERT WITH CHECK (true);

-- Authenticated users (admins) can do everything
CREATE POLICY "Admins can manage faculty" ON faculty FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage achievements" ON achievements FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage admissions" ON admissions FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage settings" ON website_settings FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- STORAGE BUCKETS
-- =============================================
-- Run in Supabase Storage section or via API:
-- Create bucket: "faculty-photos" (public)
-- Create bucket: "student-photos" (public)
-- Create bucket: "site-assets" (public)

-- =============================================
-- DEFAULT SETTINGS
-- =============================================
INSERT INTO website_settings (key, value, type) VALUES
  ('institution_name', 'Siddhiksha Education Care', 'text'),
  ('tagline', 'A Place to Learn!', 'text'),
  ('phone', '+91 XXXXX XXXXX', 'text'),
  ('email', 'info@siddhikshaedu.com', 'text'),
  ('address', 'Chennai, Tamil Nadu, India', 'text'),
  ('working_hours', 'Mon – Sat: 9 AM – 7 PM | Sunday: 10 AM – 2 PM', 'text'),
  ('facebook_url', '', 'text'),
  ('instagram_url', '', 'text'),
  ('youtube_url', '', 'text'),
  ('twitter_url', '', 'text'),
  ('admissions_open', 'true', 'boolean'),
  ('about_content', 'Siddhiksha Education Care was founded with a simple but powerful belief: every child deserves access to quality education.', 'text'),
  ('vision', 'To be the most trusted educational institution in Chennai.', 'text'),
  ('mission', 'To provide exceptional, personalized coaching that builds strong academic foundations.', 'text')
ON CONFLICT (key) DO NOTHING;

-- =============================================
-- SAMPLE DATA (Optional — remove in production)
-- =============================================
INSERT INTO faculty (name, qualification, experience, subject_expertise, description, display_order) VALUES
  ('Dr. Ramalingam S.', 'M.Sc., M.Phil., Ph.D. (Mathematics)', '18 Years', 'Mathematics (State Board & CBSE)', 'Dr. Ramalingam brings 18 years of teaching experience and a unique ability to make complex mathematical concepts accessible to all students.', 1),
  ('Mrs. Sumitha Devi', 'M.Sc. Physics, B.Ed.', '14 Years', 'Physics & Chemistry', 'Mrs. Sumitha''s passion for science is contagious. Her lab-oriented teaching style builds deep conceptual understanding.', 2),
  ('Mr. Karthikeyan R.', 'M.A. Tamil, M.Phil., B.Ed.', '20 Years', 'Tamil Language & Literature', 'With two decades of Tamil teaching expertise, Mr. Karthikeyan has guided hundreds of students to score full marks.', 3)
ON CONFLICT DO NOTHING;

INSERT INTO testimonials (parent_name, student_name, standard, content, rating, is_active) VALUES
  ('Rajesh Kumar', 'Priya Kumar', 'Class 10 (State Board)', 'Siddhiksha transformed my daughter''s understanding of Mathematics. She went from struggling with basics to scoring 98 in her board exam. The individual attention here is exceptional.', 5, true),
  ('Lakshmi Devi', 'Arjun Devi', 'Class 8 (CBSE)', 'The teachers here are incredibly patient and methodical. My son''s confidence in Science has grown tremendously. We saw the difference within two months of joining.', 5, true),
  ('Murugesan S.', 'Kavya Murugesan', 'Class 12 (State Board)', 'My daughter scored district first rank in Tamil! The way they teach literature and grammar here is unlike any other coaching centre.', 5, true)
ON CONFLICT DO NOTHING;
