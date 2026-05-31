"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Star, Save, X, Loader2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTestimonialsStore } from "@/store/admin-store";
import type { Testimonial } from "@/types/database";

export default function AdminTestimonials() {
  const { items, loading, fetch, create, update, remove } = useTestimonialsStore();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const handleSave = async (data: Partial<Testimonial>) => {
    setSaving(true);
    if (editing) { await update({ id: editing.id, ...data }); }
    else { await create(data); }
    setSaving(false); setShowForm(false); setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Testimonials Manager</h1>
          <p className="text-muted-foreground text-sm">Manage client and student testimonials</p>
        </div>
        <Button variant="primary" size="md" onClick={() => { setEditing(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add Testimonial
        </Button>
      </div>


      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <TestimonialForm testimonial={editing} saving={saving} onClose={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && items.length === 0 && (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>
      )}

      <div className="space-y-4">
        {items.map((t, index) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
            className={`rounded-2xl border bg-card/50 p-5 ${!t.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm">{t.name}</h3>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(t.rating)].map((_, i) => (<Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />))}
                    <span className="ml-2 text-xs px-2 py-0.5 rounded bg-primary-500/10 text-primary-400">{t.platform}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">&ldquo;{t.content}&rdquo;</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => update({ id: t.id, visible: !t.visible })} className={`p-1.5 rounded-lg ${t.visible ? "text-green-500" : "text-red-500"}`}>
                  {t.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button onClick={() => { setEditing(t); setShowForm(true); }} className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500"><Edit className="w-4 h-4" /></button>
                <button onClick={() => { if(confirm("Delete?")) remove(t.id); }} className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


function TestimonialForm({ testimonial, saving, onClose, onSave }: {
  testimonial: Testimonial | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<Testimonial>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    name: testimonial?.name || "",
    role: testimonial?.role || "",
    content: testimonial?.content || "",
    rating: testimonial?.rating || 5,
    platform: testimonial?.platform || "Remote Client",
    avatar: testimonial?.avatar || "",
    featured: testimonial?.featured || false,
    visible: testimonial?.visible ?? true,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{testimonial ? "Edit" : "Add"} Testimonial</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium mb-1">Name *</label><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Role / Title</label><input type="text" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Platform</label><select value={form.platform} onChange={(e) => setForm({ ...form, platform: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"><option>Remote Client</option><option>Course Student</option><option>YouTube</option><option>Fiverr</option><option>Upwork</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Rating</label><select value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"><option value={5}>5 Stars</option><option value={4}>4 Stars</option><option value={3}>3 Stars</option></select></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Testimonial *</label><textarea rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave(form)} disabled={saving || !form.name || !form.content}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{testimonial ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
