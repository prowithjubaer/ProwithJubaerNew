# 🚀 Pro with Jubaer — Vercel + Supabase Deployment Guide

## সম্পূর্ণ সেটআপ গাইড (বাংলায়)

এই গাইড অনুসরণ করে আপনি Supabase + Vercel দিয়ে সম্পূর্ণ ওয়েবসাইট ও এডমিন প্যানেল ডিপ্লয় করতে পারবেন।

---

## 📋 Architecture Overview

```
┌─────────────────────────────────────────────┐
│              VERCEL (Frontend)               │
│  ┌─────────────┐     ┌──────────────────┐   │
│  │  Next.js    │────▶│  API Routes      │   │
│  │  Frontend   │     │  /api/admin/*    │   │
│  │  Pages      │     │  /api/public/*   │   │
│  └─────────────┘     └──────────────────┘   │
│                              │               │
└──────────────────────────────┼───────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────┐
│            SUPABASE (Backend)               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Postgres │  │  Auth    │  │ Storage  │  │
│  │ Database │  │ (Login)  │  │ (Files)  │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
```

---

## 🔧 Step 1: Supabase Project তৈরি করুন

### 1.1 Supabase Account & Project

1. https://supabase.com এ গিয়ে Sign Up করুন
2. **New Project** ক্লিক করুন
3. নাম দিন: `prowithjubaer`
4. Database Password দিন (সেভ করে রাখুন)
5. Region সিলেক্ট করুন: `Southeast Asia (Singapore)` (বাংলাদেশের জন্য সবচেয়ে কাছে)
6. **Create Project** ক্লিক করুন — 2-3 মিনিট অপেক্ষা করুন

### 1.2 API Keys কপি করুন

1. Supabase Dashboard → **Settings** → **API**
2. নিচের তথ্যগুলো কপি করুন:
   - **Project URL**: `https://YOUR_PROJECT_ID.supabase.co`
   - **anon (public) key**: `eyJhbGci...` (দীর্ঘ JWT token)
   - **service_role key**: `eyJhbGci...` (এটি সিক্রেট — কখনো পাবলিকলি শেয়ার করবেন না!)

---

## 🗄️ Step 2: Database Schema সেটআপ করুন

### 2.1 Main Schema Run করুন

1. Supabase Dashboard → **SQL Editor**
2. **New Query** ক্লিক করুন
3. `supabase/schema.sql` ফাইলের সম্পূর্ণ কন্টেন্ট পেস্ট করুন
4. **Run** ক্লিক করুন ✅

এটি করবে:
- ১৩টি টেবিল তৈরি করবে
- Indexes তৈরি করবে
- Row Level Security (RLS) policies সেট করবে
- Default seed data insert করবে

### 2.2 Storage Buckets সেটআপ করুন

1. SQL Editor → New Query
2. `supabase/storage-setup.sql` ফাইলের কন্টেন্ট পেস্ট করুন
3. **Run** ক্লিক করুন ✅

---

## 🔐 Step 3: Admin User তৈরি করুন

### 3.1 Supabase Auth এ User তৈরি করুন

1. Supabase Dashboard → **Authentication** → **Users**
2. **Add User** → **Create New User** ক্লিক করুন
3. ফিলাপ করুন:
   - Email: `admin@prowithjubaer.com` (আপনার ইমেইল দিন)
   - Password: একটি শক্তিশালী পাসওয়ার্ড দিন
   - Check: **Auto Confirm User** ✅
4. **Create User** ক্লিক করুন

> ⚠️ এই email + password দিয়ে আপনি `/admin` এ লগইন করবেন

---

## 🌐 Step 4: Vercel এ Deploy করুন

### 4.1 GitHub Repository Push করুন

```bash
git add .
git commit -m "Add Supabase admin panel integration"
git push origin main
```

### 4.2 Vercel এ Import করুন

1. https://vercel.com এ গিয়ে লগইন করুন
2. **Add New** → **Project** ক্লিক করুন
3. GitHub Repository সিলেক্ট করুন: `ProwithJubaerNew`
4. **Import** ক্লিক করুন

### 4.3 Environment Variables সেট করুন

Vercel Project Settings → **Environment Variables** এ যান এবং নিচের variables যোগ করুন:

| Variable Name | Value | Environment |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://YOUR_PROJECT_ID.supabase.co` | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | আপনার anon key | All |
| `SUPABASE_SERVICE_ROLE_KEY` | আপনার service_role key | All |
| `NEXT_PUBLIC_SITE_URL` | `https://prowithjubaer.com` | All |

### 4.4 Deploy করুন

1. **Deploy** ক্লিক করুন
2. 2-3 মিনিট অপেক্ষা করুন
3. ✅ সাইট লাইভ!

---

## 🔄 Step 5: Custom Domain (Optional)

### Vercel Custom Domain

1. Vercel Dashboard → Project → **Settings** → **Domains**
2. `prowithjubaer.com` যোগ করুন
3. আপনার domain registrar এ DNS records সেট করুন:
   - Type: `A` → Value: `76.76.21.21`
   - Type: `CNAME` (www) → Value: `cname.vercel-dns.com`

---

## 🎛️ Admin Panel ব্যবহার

### Access করুন
- URL: `https://prowithjubaer.com/admin`
- Login: আপনার Supabase Auth credentials

### Admin Panel Features

| Page | Function |
|---|---|
| `/admin` | Dashboard — Stats & Overview |
| `/admin/header-hero` | Header Navigation + Hero Section Edit |
| `/admin/portfolio` | Portfolio Projects CRUD |
| `/admin/courses` | Course Management (Price, Status, Badge) |
| `/admin/services` | Services CRUD |
| `/admin/testimonials` | Client Testimonials CRUD |
| `/admin/blog` | Blog Posts (Create, Publish, Draft) |
| `/admin/case-studies` | Case Studies CRUD |
| `/admin/resources` | Free Resources/Downloads CRUD |
| `/admin/faq` | FAQ Management |
| `/admin/messages` | Contact Form Submissions Inbox |
| `/admin/settings` | Site Settings, Colors, Social Links |

### প্রতিটি পেজে যা করতে পারবেন:
- ✅ Add/Create নতুন content
- ✅ Edit/Update existing content
- ✅ Delete content
- ✅ Toggle visibility (Show/Hide)
- ✅ Toggle featured status
- ✅ Reorder items
- ✅ Search & Filter

---

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/           # Admin Panel Pages (11 pages)
│   ├── api/
│   │   ├── admin/       # Protected API Routes (CRUD)
│   │   └── public/      # Public API (site-data)
│   └── (pages)/         # Frontend Pages
├── components/          # UI Components
├── hooks/
│   └── use-site-data.ts # Frontend data hooks (Supabase + fallback)
├── lib/
│   ├── supabase.ts      # Supabase client config
│   ├── data-fetcher.ts  # Server-side data fetcher
│   └── utils.ts         # Utility functions
├── store/
│   └── admin-store.ts   # Zustand stores for admin
├── types/
│   └── database.ts      # TypeScript types for all tables
└── data/
    └── site-data.ts     # Static fallback data
```

---

## 🔒 Security Notes

1. **SUPABASE_SERVICE_ROLE_KEY** কখনো frontend code এ ব্যবহার করবেন না
2. এটি শুধুমাত্র server-side API routes এ ব্যবহৃত হয়
3. Row Level Security (RLS) enabled — public users শুধু visible content দেখতে পারে
4. Admin operations শুধুমাত্র authenticated users করতে পারে
5. File uploads authenticated users এর জন্য restricted

---

## 🛠️ Troubleshooting

### সমস্যা: "Invalid credentials" লগইন এ

**সমাধান:** Supabase Dashboard → Authentication → Users এ গিয়ে নিশ্চিত করুন user আছে এবং confirmed।

### সমস্যা: Data দেখাচ্ছে না

**সমাধান:**
1. Environment variables ঠিকমতো সেট আছে কিনা চেক করুন
2. Vercel redeploy করুন (Settings → Deployments → Redeploy)
3. Schema SQL ঠিকমতো run হয়েছে কিনা Supabase Table Editor এ চেক করুন

### সমস্যা: Static data দেখাচ্ছে (Supabase data না)

**সমাধান:** এটা design অনুযায়ী — Supabase connect না থাকলে static data fallback হিসেবে দেখায়। `.env.local` ঠিকমতো সেটআপ করলে Supabase data আসবে।

### সমস্যা: File upload কাজ করছে না

**সমাধান:** `supabase/storage-setup.sql` রান করেছেন কিনা চেক করুন।

---

## 📊 Data Flow

```
Admin Panel (Create/Edit/Delete)
       │
       ▼
API Route (/api/admin/*)
       │
       ▼
Supabase Database (PostgreSQL)
       │
       ▼
Public API (/api/public/site-data)
       │
       ▼
Frontend Components (with static fallback)
```

---

## 🔄 How Content Updates Work

1. আপনি Admin Panel এ কোনো content change করলেন (যেমন: নতুন portfolio project add)
2. Change সাথে সাথে Supabase Database এ save হয়
3. Frontend পেজগুলো `/api/public/site-data` থেকে data fetch করে
4. CDN Cache 60 seconds পর automatically refresh হয়
5. Users নতুন content দেখতে পায়!

---

## 💡 Tips

- **Local Development:** `.env.local` ফাইল তৈরি করুন `.env.local.example` দেখে
- **Multiple Admins:** Supabase Auth এ একাধিক user তৈরি করতে পারবেন
- **Backup:** Supabase Dashboard → Database → Backups থেকে database backup নিন
- **Monitoring:** Supabase Dashboard → Reports থেকে API usage দেখুন

---

## ✅ Checklist — Deploy করার আগে

- [ ] Supabase project তৈরি হয়েছে
- [ ] `schema.sql` রান করা হয়েছে
- [ ] `storage-setup.sql` রান করা হয়েছে
- [ ] Admin user তৈরি করা হয়েছে (Authentication → Users)
- [ ] Vercel এ environment variables সেট করা হয়েছে
- [ ] Deploy সফল হয়েছে
- [ ] `/admin` এ লগইন টেস্ট করা হয়েছে
- [ ] একটি content add/edit করে টেস্ট করা হয়েছে

---

**Built with ❤️ for Pro with Jubaer**
