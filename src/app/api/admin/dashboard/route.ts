import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";

// GET - Fetch dashboard statistics
export async function GET() {
  try {
    const supabase = createServerSupabaseClient();

    // Fetch counts in parallel
    const [
      portfolioResult,
      coursesResult,
      testimonialsResult,
      blogResult,
      contactResult,
      studentsResult,
    ] = await Promise.all([
      supabase.from("portfolio").select("id", { count: "exact", head: true }),
      supabase.from("courses").select("id", { count: "exact", head: true }),
      supabase.from("testimonials").select("id", { count: "exact", head: true }),
      supabase.from("blog_posts").select("id", { count: "exact", head: true }),
      supabase
        .from("contact_submissions")
        .select("id", { count: "exact", head: true })
        .eq("status", "new"),
      supabase.from("courses").select("students"),
    ]);

    // Calculate total students
    const totalStudents =
      studentsResult.data?.reduce((sum, c) => sum + (c.students || 0), 0) || 0;

    // Get recent contact submissions
    const { data: recentContacts } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    return NextResponse.json({
      stats: {
        totalProjects: portfolioResult.count || 0,
        totalCourses: coursesResult.count || 0,
        totalTestimonials: testimonialsResult.count || 0,
        totalBlogPosts: blogResult.count || 0,
        newMessages: contactResult.count || 0,
        totalStudents,
      },
      recentContacts: recentContacts || [],
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
