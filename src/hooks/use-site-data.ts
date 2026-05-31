"use client";

import { useState, useEffect } from "react";
import {
  heroData as staticHero,
  servicesData as staticServices,
  portfolioData as staticPortfolio,
  testimonialsData as staticTestimonials,
  faqData as staticFaq,
  freeResourcesData as staticResources,
  caseStudiesData as staticCaseStudies,
  blogData as staticBlog,
  socialLinks as staticSocialLinks,
  navigationLinks as staticNavigation,
} from "@/data/site-data";

// Global cache
let globalCache: Record<string, unknown> | null = null;
let fetchPromise: Promise<Record<string, unknown> | null> | null = null;

async function fetchAllSiteData(): Promise<Record<string, unknown> | null> {
  if (globalCache) return globalCache;
  if (fetchPromise) return fetchPromise;

  fetchPromise = fetch("/api/public/site-data?sections=all")
    .then((res) => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    })
    .then((data) => {
      globalCache = data;
      return data;
    })
    .catch(() => null)
    .finally(() => {
      fetchPromise = null;
    });

  return fetchPromise;
}

export function useSiteData<T>(section: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    fetchAllSiteData().then((result) => {
      if (result && result[section]) {
        setData(result[section] as T);
      }
    });
  }, [section]);

  return data;
}

// Pre-built hooks for each section
export function useHeroData() {
  return useSiteData("hero", staticHero);
}

export function useServicesData() {
  return useSiteData("services", staticServices);
}

export function usePortfolioData() {
  return useSiteData("portfolio", staticPortfolio);
}

export function useTestimonialsData() {
  return useSiteData("testimonials", staticTestimonials);
}

export function useFaqData() {
  return useSiteData("faq", staticFaq);
}

export function useResourcesData() {
  return useSiteData("resources", staticResources);
}

export function useCaseStudiesData() {
  return useSiteData("case_studies", staticCaseStudies);
}

export function useBlogData() {
  return useSiteData("blog", staticBlog);
}

export function useSocialLinks() {
  return useSiteData("social_links", staticSocialLinks);
}

export function useNavigationData() {
  return useSiteData(
    "navigation",
    staticNavigation.map((l, i) => ({ ...l, id: String(i), sort_order: i, visible: true }))
  );
}
