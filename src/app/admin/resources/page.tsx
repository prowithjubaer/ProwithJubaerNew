"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Download, Save, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResourcesStore } from "@/store/admin-store";
import type { Resource } from "@/types/database";

export default function AdminResources() {
  const { items, loading, fetch, create, update, remove } = useResourcesStore();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Resource | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const handleSave = async (data: Partial<Resource>) => {
    setSaving(true);
    if (editing) { await update({ id: editing.id, ...data }); }
    else { await create(data); }
    setSaving(false); setShowForm(false); setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="text-3xl font-bold">Resources Manager</h1>
          <p className="text-muted-foreground text-sm">Manage free downloads and resources</p></div>
        <Button variant="primary" size="md" onClick={() => { setEditing(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add Resource
        </Button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <ResourceForm resource={editing} saving={saving} onClose={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && items.length === 0 && <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
            className={`rounded-2xl border bg-card/50 p-5 ${!item.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Download className="w-3 h-3" />{item.downloads}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-0.5 rounded bg-primary-500/10 text-primary-400">{item.category}</span>
              <span>{item.format}</span><span>•</span><span>{item.size}</span>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-border/50">
              <button onClick={() => update({ id: item.id, visible: !item.visible })} className={`p-1.5 rounded-lg ${item.visible ? "text-green-500" : "text-red-500"}`}>{item.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}</button>
              <button onClick={() => { setEditing(item); setShowForm(true); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary-500"><Edit className="w-4 h-4" /></button>
              <button onClick={() => { if(confirm("Delete?")) remove(item.id); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
            </div>
          </motion.div>
        ))}
      </div>
      {!loading && items.length === 0 && <div className="text-center py-12 text-muted-foreground">No resources yet.</div>}
    </div>
  );
}


function ResourceForm({ resource, saving, onClose, onSave }: {
  resource: Resource | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<Resource>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    title: resource?.title || "", description: resource?.description || "",
    category: resource?.category || "", format: resource?.format || "",
    size: resource?.size || "", download_url: resource?.download_url || "",
    featured: resource?.featured || false, visible: resource?.visible ?? true,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{resource ? "Edit" : "Add"} Resource</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Title *</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Category</label><input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="Color Grading, Templates..." /></div>
        <div><label className="block text-sm font-medium mb-1">Format</label><input type="text" value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="PDF, ZIP, PSD..." /></div>
        <div><label className="block text-sm font-medium mb-1">Size</label><input type="text" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="15 MB" /></div>
        <div><label className="block text-sm font-medium mb-1">Download URL</label><input type="text" value={form.download_url} onChange={(e) => setForm({ ...form, download_url: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="https://..." /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Description</label><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2 flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" /><span className="text-sm">Featured</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="rounded" /><span className="text-sm">Visible</span></label>
        </div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave(form)} disabled={saving || !form.title}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{resource ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
