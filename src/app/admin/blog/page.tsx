"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { blogData } from "@/data/site-data";
import { Plus, Edit, Trash2, Eye, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminBlog() {
  const [posts] = useState(blogData);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Blog Manager</h1>
          <p className="text-muted-foreground text-sm">Create and manage blog posts</p>
        </div>
        <Button variant="primary" size="md" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl border border-border/50 bg-card/50"
        >
          <h2 className="text-xl font-bold mb-4">Create New Post</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Title</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Post title" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Excerpt</label>
              <textarea rows={2} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" placeholder="Short description..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option>Workflow</option>
                <option>Tools</option>
                <option>Design</option>
                <option>AI</option>
                <option>Career</option>
                <option>Tutorial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Editing, Workflow" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
              <textarea rows={8} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none font-mono" placeholder="Write your article content here..." />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" /> Featured Post
              </label>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" size="sm">Publish Post</Button>
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </motion.div>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-5 rounded-2xl border border-border/50 bg-card/50"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary-500/10 text-primary-400">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-cta-orange/10 text-cta-orange">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-bold">{post.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
