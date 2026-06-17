# Siddhiksha Education Care — Complete Deployment Guide

## Project Overview
A full-stack Next.js 15 educational institution website with:
- Public pages (Home, About, Achievements, Faculty, Admission)
- Admin dashboard (Faculty, Achievements, Testimonials, Admissions, Settings)
- Supabase backend (database + storage + auth)
- Resend email integration
- SEO optimized with sitemap & robots.txt

---

## Prerequisites
- Node.js 18+ installed
- Git installed
- Accounts on: Vercel, Supabase, Resend

---

## Step 1: Clone / Setup Project

```bash
# Create a new directory and copy all project files
mkdir siddhiksha-edu
cd siddhiksha-edu

# Install dependencies
npm install
```

---

## Step 2: Supabase Setup

### 2.1 Create a Supabase Project
1. Go to https://supabase.com → New Project
2. Name it: `siddhiksha-edu`
3. Choose region: `Southeast Asia (Singapore)` (closest to Chennai)
4. Set a strong database password → Save it

### 2.2 Run the Database Schema
1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New Query**
3. Copy & paste the entire contents of `supabase-schema.sql`
4. Click **Run**

### 2.3 Create Storage Buckets
Go to **Storage** → **New Bucket** and create:
- `faculty-photos` — Public bucket
- `student-photos` — Public bucket
- `site-assets` — Public bucket

For each bucket, go to **Policies** and add:
```sql
-- Allow public read
CREATE POLICY "Public read" ON storage.objects FOR SELECT USING (bucket_id = 'faculty-photos');

-- Allow authenticated upload
CREATE POLICY "Auth upload" ON storage.objects FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND bucket_id = 'faculty-photos');
```
Repeat for each bucket with the correct bucket name.

### 2.4 Get API Keys
Go to **Settings → API**:
- Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- Copy **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Copy **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

### 2.5 Create Admin User
Go to **Authentication → Users → Invite User** and enter the admin email.
The admin will receive an email to set their password.

---

## Step 3: Resend Setup (Email)

1. Go to https://resend.com → Sign up
2. Go to **API Keys** → **Create API Key**
3. Name: `siddhiksha-edu` → Copy the key → `RESEND_API_KEY`
4. Go to **Domains** → **Add Domain**
5. Add your domain (e.g., `siddhikshaedu.com`) and follow DNS instructions
6. Once verified, emails will send from `noreply@siddhikshaedu.com`

> **For testing:** You can use Resend's sandbox. Emails will only send to verified email addresses.

---

## Step 4: Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in all values in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
RESEND_API_KEY=re_...
INSTITUTION_EMAIL=info@siddhikshaedu.com
NEXT_PUBLIC_SITE_URL=https://siddhikshaedu.com
```

---

## Step 5: Local Development

```bash
npm run dev
```
Visit http://localhost:3000

**Key URLs:**
- Home: http://localhost:3000
- About: http://localhost:3000/about
- Achievements: http://localhost:3000/achievements
- Faculty: http://localhost:3000/faculty
- Admission: http://localhost:3000/admission
- Admin: http://localhost:3000/admin

---

## Step 6: Deploy to Vercel

### 6.1 Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Siddhiksha Education Care"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/siddhiksha-edu.git
git push -u origin main
```

### 6.2 Connect to Vercel
1. Go to https://vercel.com → **New Project**
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)
4. Click **Environment Variables** and add ALL variables from `.env.local`
5. Click **Deploy**

### 6.3 Custom Domain
1. In Vercel: **Settings → Domains → Add**
2. Enter `siddhikshaedu.com`
3. Update your DNS registrar with the provided records
4. Vercel auto-handles SSL

---

## Step 7: Post-Deployment Checklist

- [ ] All environment variables set in Vercel
- [ ] Database schema applied in Supabase
- [ ] Storage buckets created with correct policies
- [ ] Admin user created in Supabase Auth
- [ ] Test admission form submission
- [ ] Test email delivery via Resend
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Check robots.txt at `/robots.txt`
- [ ] Test mobile responsiveness
- [ ] Add Google Analytics (optional)

---

## Admin Dashboard Access

URL: `https://siddhikshaedu.com/admin`

> **Important:** The current admin layout doesn't include authentication middleware.
> To add login protection, implement Supabase Auth or NextAuth.js.

### Adding Admin Auth (Recommended):

```tsx
// src/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
  return res
}

export const config = { matcher: ['/admin/:path*'] }
```

---

## Connecting Admin to Supabase (Live Data)

Currently, the admin pages use local state (sample data).
To connect to live Supabase data, replace the mock data with Supabase queries:

### Example — Faculty Page:
```tsx
// In /admin/faculty/page.tsx, replace initialFaculty with:
import { supabase } from '@/lib/supabase'

const { data: faculty } = await supabase
  .from('faculty')
  .select('*')
  .order('display_order')
```

### Example — Admissions Page:
```tsx
const { data: admissions } = await supabase
  .from('admissions')
  .select('*')
  .order('created_at', { ascending: false })
```

---

## Updating Content

### Without code changes:
All the following can be managed from the admin dashboard:
- Faculty profiles & photos
- Student achievements
- Testimonials (show/hide)
- Admission records
- Website settings (contact info, social links, about content)

### With code changes:
- Hero section text (src/components/sections/HeroSection.tsx)
- Course offerings (src/components/sections/SubjectsSection.tsx)
- Footer links (src/components/layout/Footer.tsx)

---

## SEO Optimization

The website includes:
- ✅ Meta tags on every page
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap at /sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML headings
- ✅ Target keywords in content

**Additional SEO steps:**
1. Add to Google Search Console
2. Submit sitemap URL
3. Set up Google Analytics (add to layout.tsx)
4. Create Google Business Profile

---

## Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Auth | Supabase Auth |
| Email | Resend |
| Deployment | Vercel |
| Icons | Lucide React |

---

## Support & Maintenance

### Regular tasks:
- Add new achievements after each board exam season
- Update testimonials from satisfied parents
- Review and update admission status in dashboard
- Export admission data monthly (CSV/Excel)

### Performance:
- Images are automatically optimized by Next.js
- Static pages are server-side rendered for fast loading
- Tailwind CSS is purged in production (small CSS bundle)

---

*Built for Siddhiksha Education Care — "A Place to Learn!"*
*Chennai, Tamil Nadu, India*
