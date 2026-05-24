"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-data";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
        <Link
          href="/blog"
          className="text-primary-500 hover:text-primary-400 mt-4 inline-block"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-500 transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Featured Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-primary-600/20 via-accent-cyan/10 to-primary-500/20 border border-border/50 flex items-center justify-center mb-8"
        >
          <div className="text-6xl opacity-30">📖</div>
        </motion.div>

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          {/* Category */}
          <span className="inline-block bg-primary-500/10 text-primary-500 text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-2xl lg:text-4xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                <User size={12} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <button className="ml-auto flex items-center gap-1 hover:text-primary-500 transition-colors">
              <Share2 size={12} />
              Share
            </button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-xl lg:text-2xl font-bold text-foreground mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-lg font-bold text-foreground mt-6 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.includes("\n-") || paragraph.startsWith("-")) {
              const lines = paragraph.split("\n").filter(Boolean);
              return (
                <ul key={i} className="space-y-2 my-4">
                  {lines.map((line, li) => (
                    <li
                      key={li}
                      className="text-muted-foreground text-base flex items-start gap-2"
                    >
                      <span className="text-primary-500 mt-1">•</span>
                      {line.replace(/^- /, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (
              paragraph.includes("**") ||
              paragraph.match(/^\d+\.\s/)
            ) {
              return (
                <div key={i} className="my-4 space-y-2">
                  {paragraph.split("\n").map((line, li) => (
                    <p
                      key={li}
                      className="text-muted-foreground text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-foreground">$1</strong>'
                          ),
                      }}
                    />
                  ))}
                </div>
              );
            }
            return (
              <p
                key={i}
                className="text-muted-foreground text-base leading-relaxed my-4"
              >
                {paragraph}
              </p>
            );
          })}
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-foreground mb-6">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 card-hover block"
              >
                <div className="w-full h-24 rounded-xl bg-gradient-to-br from-primary-600/15 to-accent-cyan/15 mb-3 flex items-center justify-center">
                  <BookOpen size={20} className="text-primary-500/50" />
                </div>
                <span className="text-[10px] text-primary-500 font-medium uppercase">
                  {related.category}
                </span>
                <h4 className="text-sm font-semibold text-foreground line-clamp-2 mt-1">
                  {related.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {related.readingTime}
                </p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Course CTA Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary-500/10 via-card/80 to-accent-cyan/10 backdrop-blur-sm p-8 text-center"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
            আরও গভীরভাবে শিখতে চান?
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
            AI Expert Course for Content Creation & Freelancing — বাংলায়
            practical AI workflow শিখুন এবং আপনার career next level এ নিয়ে যান।
          </p>
          <Link href="/courses/ai-expert-content-creation">
            <Button variant="cta" size="lg">
              Explore the Course
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.section>
      </article>
    </div>
  );
}
