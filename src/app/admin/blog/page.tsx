"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar, Clock, Save, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlogStore } from "@/store/admin-store";
import type { BlogPost } from "@/types/database";

export default function AdminBlog() {
  const { items: posts, loading, fetch, create, update, remove } = useBlogStore();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const handleSave = async (data: Partial<BlogPost>) => {
    setSaving(true);
    if (editing) { await update({ id: editing.id, ...data }); }
    else { await create(data); }
    setSaving(false); setShowForm(false); setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="text-3xl font-bold">Blog Manager</h1>
          <p className="text-muted-foreground text-sm">Create and manage blog posts</p></div>
        <Button variant="primary" size="md" onClick={() => { setEditing(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>


      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <BlogForm post={editing} saving={saving} onClose={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && posts.length === 0 && (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>
      )}

      <div className="space-y-3">
        {posts.map((post, index) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
            className={`p-5 rounded-2xl border bg-card/50 ${!post.published ? "border-yellow-500/20" : "border-border/50"}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary-500/10 text-primary-400">{post.category}</span>
                  {post.featured && <span className="px-2 py-0.5 rounded text-xs font-medium bg-cta-orange/10 text-cta-orange">Featured</span>}
                  {!post.published && <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500">Draft</span>}
                </div>
                <h3 className="font-bold">{post.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read_time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => update({ id: post.id, published: !post.published })} className={`p-1.5 rounded-lg ${post.published ? "text-green-500" : "text-yellow-500"}`} title={post.published ? "Unpublish" : "Publish"}>
                  {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button onClick={() => { setEditing(post); setShowForm(true); }} className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500"><Edit className="w-4 h-4" /></button>
                <button onClick={() => { if(confirm("Delete this post?")) remove(post.id); }} className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!loading && posts.length === 0 && <div className="text-center py-12 text-muted-foreground">No blog posts yet.</div>}
    </div>
  );
}


function BlogForm({ post, saving, onClose, onSave }: {
  post: BlogPost | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<BlogPost>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "Workflow",
    tags: post?.tags?.join(", ") || "",
    read_time: post?.read_time || "5 min read",
    date: post?.date || new Date().toISOString().split("T")[0],
    featured: post?.featured || false,
    published: post?.published ?? false,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{post ? "Edit Post" : "Create New Post"}</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Title *</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Slug</label><input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="auto-generated if empty" /></div>
        <div><label className="block text-sm font-medium mb-1">Category</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"><option>Workflow</option><option>Tools</option><option>Design</option><option>AI</option><option>Career</option><option>Tutorial</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Tags (comma separated)</label><input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Read Time</label><input type="text" value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Excerpt</label><textarea rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Content (Markdown)</label><textarea rows={10} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none font-mono" /></div>
        <div className="md:col-span-2 flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" /><span className="text-sm">Featured</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="rounded" /><span className="text-sm">Published</span></label>
        </div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave({ ...form, tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) })} disabled={saving || !form.title}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{post ? "Update" : "Publish"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
