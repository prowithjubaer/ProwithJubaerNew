"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Star, Search, Save, X, Loader2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/store/admin-store";
import type { PortfolioProject } from "@/types/database";

export default function AdminPortfolio() {
  const { items: projects, loading, fetch, create, update, remove } = usePortfolioStore();
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await remove(id);
    }
  };

  const handleToggleVisibility = async (project: PortfolioProject) => {
    await update({ id: project.id, visible: !project.visible });
  };

  const handleToggleFeatured = async (project: PortfolioProject) => {
    await update({ id: project.id, featured: !project.featured });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Portfolio Manager</h1>
          <p className="text-muted-foreground text-sm">Manage your portfolio projects</p>
        </div>
        <Button variant="primary" size="md" onClick={() => { setEditingProject(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add Project
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          placeholder="Search projects..."
        />
      </div>

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <PortfolioForm
              project={editingProject}
              saving={saving}
              onClose={() => { setShowForm(false); setEditingProject(null); }}
              onSave={async (data) => {
                setSaving(true);
                if (editingProject) {
                  await update({ id: editingProject.id, ...data });
                } else {
                  await create(data);
                }
                setSaving(false);
                setShowForm(false);
                setEditingProject(null);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading */}
      {loading && projects.length === 0 && (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>
      )}

      {/* Project List */}
      <div className="space-y-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className={`rounded-xl border bg-card/50 p-4 ${!project.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}
          >
            <div className="flex items-center gap-4">
              <GripVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-sm truncate">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-500/10 text-yellow-500">Featured</span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-primary-500/10 text-primary-400">{project.category}</span>
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => handleToggleFeatured(project)} className={`p-2 rounded-lg transition-colors ${project.featured ? "text-yellow-500 bg-yellow-500/10" : "text-muted-foreground hover:text-yellow-500"}`}>
                  <Star className="w-4 h-4" />
                </button>
                <button onClick={() => handleToggleVisibility(project)} className={`p-2 rounded-lg transition-colors ${project.visible ? "text-green-500" : "text-red-500 bg-red-500/10"}`}>
                  {project.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button onClick={() => { setEditingProject(project); setShowForm(true); }} className="p-2 rounded-lg text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10">
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(project.id)} className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!loading && filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">No projects found.</div>
      )}
    </div>
  );
}

function PortfolioForm({ project, saving, onClose, onSave }: {
  project: PortfolioProject | null;
  saving: boolean;
  onClose: () => void;
  onSave: (data: Partial<PortfolioProject>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    title: project?.title || "",
    category: project?.category || "Video Editing",
    description: project?.description || "",
    client: project?.client || "",
    year: project?.year || new Date().getFullYear().toString(),
    video_url: project?.video_url || "",
    thumbnail: project?.thumbnail || "",
    tags: project?.tags?.join(", ") || "",
    featured: project?.featured || false,
    visible: project?.visible ?? true,
    sort_order: project?.sort_order || 0,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{project ? "Edit Project" : "Add New Project"}</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Title *</label>
          <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Project title" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
            <option>Video Editing</option><option>Motion Graphics</option><option>Graphic Design</option><option>Thumbnail Design</option><option>Web Design</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Client</label>
          <input type="text" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Client name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Year</label>
          <input type="text" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Video URL</label>
          <input type="text" value={form.video_url} onChange={(e) => setForm({ ...form, video_url: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="https://youtube.com/..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
          <input type="text" value={form.thumbnail} onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="/portfolio/image.jpg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
          <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Gaming, Montage" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" placeholder="Project description..." />
        </div>
        <div className="md:col-span-2 flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" /><span className="text-sm">Featured</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="rounded" /><span className="text-sm">Visible</span></label>
        </div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave({ ...form, tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) })} disabled={saving || !form.title}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
          {project ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
