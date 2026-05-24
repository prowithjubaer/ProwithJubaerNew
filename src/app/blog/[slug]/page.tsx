"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogData } from "@/data/site-data";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  BookOpen,
} from "lucide-react";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 pb-16 text-center min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary-500 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 mb-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold">
              MJ
            </div>
            <div>
              <p className="font-semibold text-sm">Md Jubaer Ahmed</p>
              <p className="text-xs text-muted-foreground">Video Editor & Motion Graphics Designer</p>
            </div>
            <button className="ml-auto p-2 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Article Body (sample content) */}
          <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed mb-12">
            <p>
              In this article, I&apos;m going to share my complete workflow and thought process
              behind this topic. Whether you&apos;re a beginner or an experienced professional,
              there&apos;s something here for everyone.
            </p>

            <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
              <h3 className="text-lg font-bold text-foreground mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  Understanding the fundamentals is more important than fancy techniques
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  Consistency in practice beats occasional bursts of creativity
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  Tools matter less than your creative vision and storytelling ability
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  Building a workflow saves more time than any plugin or preset
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground">Getting Started</h2>
            <p>
              The first step in any creative project is understanding your end goal. Before
              opening any software, I always spend time thinking about what the final product
              should look like, feel like, and communicate to the audience.
            </p>
            <p>
              This pre-production mindset has saved me countless hours and helped deliver
              better results for my clients. It&apos;s a habit I teach in all my courses.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-500/5 to-accent-cyan/5 border border-primary-500/20">
              <p className="text-sm italic text-foreground/80">
                💡 <strong>Pro Tip:</strong> Before starting any edit, watch the raw footage at least
                twice. The first time for understanding the content, the second time for identifying
                the best moments and potential story arcs.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground">My Recommended Approach</h2>
            <p>
              After years of trial and error, I&apos;ve developed a systematic approach that
              works for any type of project. The key is having a framework that&apos;s flexible
              enough to adapt to different clients and content types.
            </p>
            <p>
              I cover this entire methodology in detail in my courses, where students get
              hands-on practice with real-world projects and direct feedback from me.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Conclusion</h2>
            <p>
              The creative industry is constantly evolving, but the fundamentals remain the same.
              Focus on storytelling, master your tools, and always prioritize the viewer&apos;s experience.
              If you found this helpful, consider sharing it with someone who might benefit from it.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-border/50">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm bg-primary-500/10 text-primary-400 border border-primary-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>

        {/* Course CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-cta-orange/20 bg-gradient-to-r from-cta-orange/5 to-cta-yellow/5 text-center mb-12"
        >
          <BookOpen className="w-8 h-8 text-cta-orange mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2">Want to Learn More?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get comprehensive, project-based training in my premium courses.
          </p>
          <Link href="/courses">
            <Button variant="cta" size="md">
              Browse Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Related Posts */}
        <div>
          <h3 className="text-xl font-bold mb-6">More Articles</h3>
          <div className="space-y-3">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <div className="group p-4 rounded-xl border border-border/50 bg-card/50 card-hover flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary-500 transition-colors">
                      {related.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {related.category} • {related.readTime}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
