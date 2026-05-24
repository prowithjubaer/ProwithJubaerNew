"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog-data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Blog &{" "}
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Video editing, motion graphics, AI tools, এবং freelancing সম্পর্কে
            tips, tutorials এবং industry insights পড়ুন।
          </p>
        </motion.div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary-500/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden card-hover group"
            >
              {/* Featured Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-600/20 via-accent-cyan/10 to-primary-500/20 border-b border-border/30 relative flex items-center justify-center">
                <div className="text-4xl opacity-30">📝</div>
                {post.featured && (
                  <div className="absolute top-3 left-3 bg-cta-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Featured
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-primary-500/90 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-bold text-foreground text-base line-clamp-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <User size={10} />
                    {post.author.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.readingTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors pt-1"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground">
              এই category তে এখনো কোনো post নেই। শীঘ্রই আসছে!
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
