/**
 * Data Fetcher - Fetches data from Supabase via API with fallback to static data
 * This allows the frontend to work both with and without Supabase connected.
 */

import {
  heroData,
  servicesData,
  portfolioData,
  coursesData,
  testimonialsData,
  faqData,
  freeResourcesData,
  caseStudiesData,
  blogData,
  socialLinks,
  navigationLinks,
  siteConfig,
} from "@/data/site-data";

const API_BASE = "/api/public/site-data";

interface FetchOptions {
  sections?: string[];
  revalidate?: number;
}

// Cache for fetched data
let cachedData: Record<string, unknown> | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1 minute client-side cache

export async function fetchSiteData(options: FetchOptions = {}) {
  const sections = options.sections || ["all"];
  const now = Date.now();

  // Return cache if fresh
  if (cachedData && now - cacheTime < CACHE_DURATION) {
    return cachedData;
  }

  try {
    const query = sections.join(",");
    const res = await fetch(`${API_BASE}?sections=${query}`, {
      next: { revalidate: options.revalidate || 60 },
    });

    if (!res.ok) throw new Error("API fetch failed");

    const data = await res.json();
    cachedData = data;
    cacheTime = now;
    return data;
  } catch {
    // Fallback to static data if API fails (e.g., Supabase not configured)
    return null;
  }
}

// Individual section fetchers with static fallbacks
export async function getHeroData() {
  const data = await fetchSiteData({ sections: ["hero"] });
  return data?.hero || heroData;
}

export async function getServicesData() {
  const data = await fetchSiteData({ sections: ["services"] });
  return data?.services || servicesData;
}

export async function getPortfolioData() {
  const data = await fetchSiteData({ sections: ["portfolio"] });
  return data?.portfolio || portfolioData;
}

export async function getCoursesData() {
  const data = await fetchSiteData({ sections: ["courses"] });
  return data?.courses || coursesData;
}

export async function getTestimonialsData() {
  const data = await fetchSiteData({ sections: ["testimonials"] });
  return data?.testimonials || testimonialsData;
}

export async function getFaqData() {
  const data = await fetchSiteData({ sections: ["faq"] });
  return data?.faq || faqData;
}

export async function getResourcesData() {
  const data = await fetchSiteData({ sections: ["resources"] });
  return data?.resources || freeResourcesData;
}

export async function getCaseStudiesData() {
  const data = await fetchSiteData({ sections: ["case_studies"] });
  return data?.case_studies || caseStudiesData;
}

export async function getBlogData() {
  const data = await fetchSiteData({ sections: ["blog"] });
  return data?.blog || blogData;
}

export async function getNavigationData() {
  const data = await fetchSiteData({ sections: ["navigation"] });
  return data?.navigation || navigationLinks.map((l, i) => ({ ...l, id: String(i), sort_order: i, visible: true }));
}

export async function getSocialLinks() {
  const data = await fetchSiteData({ sections: ["social_links"] });
  return data?.social_links || socialLinks;
}

export async function getSiteSettings() {
  const data = await fetchSiteData({ sections: ["settings"] });
  return data?.settings || siteConfig;
}

// Server-side fetch (for use in Server Components / generateMetadata)
export async function fetchSiteDataServer(sections: string[] = ["all"]) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const query = sections.join(",");
    const res = await fetch(`${baseUrl}${API_BASE}?sections=${query}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Server fetch failed");
    return await res.json();
  } catch {
    return null;
  }
}
