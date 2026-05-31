"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Star, Search, Save, X, Loader2, Users, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCoursesStore } from "@/store/admin-store";
import type { Course } from "@/types/database";

export default function AdminCourses() {
  const { items: courses, loading, fetch, create, update, remove } = useCoursesStore();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Course | null>(null);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => { fetch(); }, [fetch]);

  const categories = ["All", ...new Set(courses.map(c => c.category).filter(Boolean))];
  const filtered = courses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = filterCategory === "All" || c.category === filterCategory;
    return matchSearch && matchCat;
  });

  const handleSave = async (data: Partial<Course>) => {
    setSaving(true);
    if (editing) { await update({ id: editing.id, ...data }); }
    else { await create(data); }
    setSaving(false); setShowForm(false); setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div><h1 className="text-3xl font-bold">Course Manager</h1>
          <p className="text-muted-foreground text-sm">Manage courses, pricing & visibility</p></div>
        <Button variant="primary" size="md" onClick={() => { setEditing(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add Course
        </Button>
      </div>


      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Search courses..." />
        </div>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <CourseForm course={editing} saving={saving} onClose={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && courses.length === 0 && <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>}

      <div className="space-y-3">
        {filtered.map((course, index) => (
          <motion.div key={course.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}
            className={`rounded-xl border bg-card/50 p-4 ${!course.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}>
            <div className="flex items-center gap-4">
              <GripVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-sm truncate">{course.title}</h3>
                  {course.badge && <span className="px-2 py-0.5 rounded text-xs font-bold bg-primary-500/10 text-primary-500">{course.badge}</span>}
                  {course.featured && <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-500/10 text-yellow-500">Featured</span>}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{course.category}</span><span>•</span><span>{course.level}</span><span>•</span>
                  <span>{course.status === "free" ? "Free" : course.status === "coming_soon" ? "Coming Soon" : `৳${course.price?.toLocaleString()}`}</span>
                  {course.students > 0 && <><span>•</span><span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}</span></>}
                  {course.rating > 0 && <><span>•</span><span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />{course.rating}</span></>}
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => update({ id: course.id, featured: !course.featured })} className={`p-2 rounded-lg ${course.featured ? "text-yellow-500 bg-yellow-500/10" : "text-muted-foreground hover:text-yellow-500"}`}><Star className="w-4 h-4" /></button>
                <button onClick={() => update({ id: course.id, visible: !course.visible })} className={`p-2 rounded-lg ${course.visible ? "text-green-500" : "text-red-500 bg-red-500/10"}`}>{course.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}</button>
                <button onClick={() => { setEditing(course); setShowForm(true); }} className="p-2 rounded-lg text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10"><Edit className="w-4 h-4" /></button>
                <button onClick={() => { if(confirm("Delete?")) remove(course.id); }} className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!loading && filtered.length === 0 && <div className="text-center py-12 text-muted-foreground">No courses found.</div>}
    </div>
  );
}


function CourseForm({ course, saving, onClose, onSave }: {
  course: Course | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<Course>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    title: course?.title || "", subtitle: course?.subtitle || "",
    description: course?.description || "", category: course?.category || "Video Editing",
    instructor: course?.instructor || "Md Jubaer Ahmed", level: course?.level || "Beginner",
    language: course?.language || "Bangla", duration: course?.duration || "",
    lessons: course?.lessons || 0, price: course?.price || 0,
    original_price: course?.original_price || 0, badge: course?.badge || "",
    status: course?.status || "active", featured: course?.featured || false,
    visible: course?.visible ?? true, enrollment_url: course?.enrollment_url || "",
    features: course?.features?.join("\n") || "",
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{course ? "Edit Course" : "Add New Course"}</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Title *</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Subtitle</label><input type="text" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Category</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm"><option>Video Editing</option><option>Motion Graphics</option><option>Graphic Design</option><option>AI & Workflow</option><option>Freelancing</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Level</label><select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm"><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>All Levels</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Status</label><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as "active"|"coming_soon"|"free" })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm"><option value="active">Active</option><option value="coming_soon">Coming Soon</option><option value="free">Free</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Badge</label><select value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm"><option value="">None</option><option>New</option><option>Best Seller</option><option>Coming Soon</option><option>Free</option><option>Launch Offer</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Price (৳)</label><input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Original Price (৳)</label><input type="number" value={form.original_price} onChange={(e) => setForm({ ...form, original_price: Number(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Lessons</label><input type="number" value={form.lessons} onChange={(e) => setForm({ ...form, lessons: Number(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Duration</label><input type="text" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm" placeholder="25+ Hours" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Enrollment URL</label><input type="text" value={form.enrollment_url} onChange={(e) => setForm({ ...form, enrollment_url: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm" placeholder="https://..." /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Description</label><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Features (one per line)</label><textarea rows={4} value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2 flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" /><span className="text-sm">Featured</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="rounded" /><span className="text-sm">Visible</span></label>
        </div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave({ ...form, features: form.features.split("\n").filter(Boolean) })} disabled={saving || !form.title}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{course ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
