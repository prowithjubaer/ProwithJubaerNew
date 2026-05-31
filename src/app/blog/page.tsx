"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogData as staticBlog } from "@/data/site-data";
import { useBlogData } from "@/hooks/use-site-data";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Workflow", "Tools", "Design", "AI", "Career", "Tutorial"];

export default function BlogPage() {
  const blogData = useBlogData();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogData
      : blogData.filter((p) => p.category === activeCategory);

  const featuredPosts = blogData.filter((p) => p.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              ✍️ Blog &amp; Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights, Tips &amp;
              <br />
              <span className="gradient-text">Creative Knowledge</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing what I learn about video editing, motion graphics, design, freelancing,
              and the creative industry.
            </p>
          </motion.div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="group h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden card-hover">
                    {/* Thumbnail placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary-800/40 via-dark-bg to-accent-cyan/10 flex items-center justify-center relative">
                      <span className="text-3xl opacity-50">
                        {i === 0 ? "🎬" : i === 1 ? "✨" : "🎨"}
                      </span>
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-500/80 text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* All Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary-500/10 text-primary-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary-500 transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get weekly tips on video editing, design, and freelancing delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            />
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:from-primary-500 hover:to-primary-400 transition-all text-sm">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
