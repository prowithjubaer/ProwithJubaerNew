"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Plus,
  Search,
  Edit,
  Trash2,
  Star,
  StarOff,
  X,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-data";

interface AdminBlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  status: "published" | "draft";
  featured: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<AdminBlogPost[]>(
    blogPosts.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      date: p.date,
      status: "published" as const,
      featured: p.featured,
    }))
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [categories, setCategories] = useState<string[]>(
    blogCategories.filter((c) => c !== "All") as string[]
  );
  const [newCategory, setNewCategory] = useState("");
  const [showCategoryManager, setShowCategoryManager] = useState(false);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleFeatured = (id: string) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const removeCategory = (cat: string) => {
    setCategories(categories.filter((c) => c !== cat));
  };

  const statusStyles: Record<string, string> = {
    published: "bg-green-500/10 text-green-500",
    draft: "bg-yellow-500/10 text-yellow-500",
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blog Management</h1>
        <p className="text-muted-foreground">
          Create, edit, and manage your blog posts and categories.
        </p>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          onClick={() => setShowCategoryManager(!showCategoryManager)}
          className="px-4 py-2.5 rounded-xl border border-border/50 hover:border-primary-500 text-sm font-medium transition-all"
        >
          Categories
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all">
          <Plus className="w-4 h-4" />
          Add Post
        </button>
      </div>

      {/* Category Manager */}
      {showCategoryManager && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 mb-6"
        >
          <h3 className="text-sm font-bold mb-3">Manage Categories</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-xs font-medium"
              >
                {cat}
                <button
                  onClick={() => removeCategory(cat)}
                  className="hover:text-red-500 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New category name"
              className="flex-1 px-4 py-2 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && addCategory()}
            />
            <button
              onClick={addCategory}
              className="px-4 py-2 rounded-xl bg-primary-500/10 text-primary-500 text-sm font-medium hover:bg-primary-500/20 transition-all"
            >
              Add
            </button>
          </div>
        </motion.div>
      )}

      {/* Posts Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Title
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Category
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Date
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Featured
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3 font-medium max-w-[300px] truncate">
                    {post.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 text-accent-cyan">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {post.date}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[post.status]}`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleFeatured(post.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        post.featured
                          ? "text-yellow-500 hover:bg-yellow-500/10"
                          : "text-muted-foreground hover:bg-muted/50"
                      }`}
                    >
                      {post.featured ? (
                        <Star className="w-4 h-4 fill-current" />
                      ) : (
                        <StarOff className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        title="Edit"
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-primary-500 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        title="Delete"
                        onClick={() => deletePost(post.id)}
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <FileText className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>No posts found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
