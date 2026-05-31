import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";

// GET - Fetch public site data for frontend
// Query params: ?sections=hero,services,portfolio,courses,testimonials,faq,navigation,social_links,settings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sectionsParam = searchParams.get("sections") || "all";
    const sections =
      sectionsParam === "all"
        ? [
            "settings",
            "navigation",
            "hero",
            "services",
            "portfolio",
            "courses",
            "testimonials",
            "blog",
            "case_studies",
            "resources",
            "faq",
            "social_links",
          ]
        : sectionsParam.split(",");

    const supabase = createServerSupabaseClient();
    const result: Record<string, unknown> = {};

    const fetchers: Record<string, () => Promise<unknown>> = {
      settings: async () => {
        const { data } = await supabase.from("site_settings").select("*").limit(1).single();
        return data;
      },
      navigation: async () => {
        const { data } = await supabase
          .from("navigation")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      hero: async () => {
        const { data } = await supabase.from("hero").select("*").limit(1).single();
        return data;
      },
      services: async () => {
        const { data } = await supabase
          .from("services")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      portfolio: async () => {
        const { data } = await supabase
          .from("portfolio")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      courses: async () => {
        const { data } = await supabase
          .from("courses")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      testimonials: async () => {
        const { data } = await supabase
          .from("testimonials")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      blog: async () => {
        const { data } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("date", { ascending: false });
        return data;
      },
      case_studies: async () => {
        const { data } = await supabase
          .from("case_studies")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      resources: async () => {
        const { data } = await supabase
          .from("resources")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      faq: async () => {
        const { data } = await supabase
          .from("faq")
          .select("*")
          .eq("visible", true)
          .order("sort_order");
        return data;
      },
      social_links: async () => {
        const { data } = await supabase.from("social_links").select("*").limit(1).single();
        return data;
      },
    };

    // Fetch requested sections in parallel
    const fetchPromises = sections
      .filter((s) => fetchers[s])
      .map(async (section) => {
        result[section] = await fetchers[section]();
      });

    await Promise.all(fetchPromises);

    // Cache for 60 seconds on CDN, 30 seconds stale-while-revalidate
    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
