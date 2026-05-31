"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Star, Save, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCaseStudiesStore } from "@/store/admin-store";
import type { CaseStudy } from "@/types/database";

export default function AdminCaseStudies() {
  const { items, loading, fetch, create, update, remove } = useCaseStudiesStore();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<CaseStudy | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const handleSave = async (data: Partial<CaseStudy>) => {
    setSaving(true);
    if (editing) { await update({ id: editing.id, ...data }); }
    else { await create(data); }
    setSaving(false); setShowForm(false); setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="text-3xl font-bold">Case Studies</h1>
          <p className="text-muted-foreground text-sm">Manage your case studies and client success stories</p></div>
        <Button variant="primary" size="md" onClick={() => { setEditing(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add Case Study
        </Button>
      </div>


      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <CaseStudyForm caseStudy={editing} saving={saving} onClose={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && items.length === 0 && <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>}

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
            className={`rounded-2xl border bg-card/50 p-5 ${!item.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold">{item.title}</h3>
                  {item.featured && <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-500/10 text-yellow-500">Featured</span>}
                  <span className="px-2 py-0.5 rounded text-xs bg-primary-500/10 text-primary-400">{item.category}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span>Client: {item.client}</span><span>•</span><span>Duration: {item.duration}</span>
                </div>
                {item.results && (
                  <div className="flex gap-4 mt-2">
                    {(item.results as { metric: string; value: string }[]).slice(0, 3).map((r, i) => (
                      <div key={i} className="text-xs"><span className="font-bold text-primary-500">{r.value}</span> <span className="text-muted-foreground">{r.metric}</span></div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => update({ id: item.id, featured: !item.featured })} className={`p-1.5 rounded-lg ${item.featured ? "text-yellow-500 bg-yellow-500/10" : "text-muted-foreground"}`}><Star className="w-4 h-4" /></button>
                <button onClick={() => update({ id: item.id, visible: !item.visible })} className={`p-1.5 rounded-lg ${item.visible ? "text-green-500" : "text-red-500"}`}>{item.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}</button>
                <button onClick={() => { setEditing(item); setShowForm(true); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10"><Edit className="w-4 h-4" /></button>
                <button onClick={() => { if(confirm("Delete?")) remove(item.id); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!loading && items.length === 0 && <div className="text-center py-12 text-muted-foreground">No case studies yet.</div>}
    </div>
  );
}


function CaseStudyForm({ caseStudy, saving, onClose, onSave }: {
  caseStudy: CaseStudy | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<CaseStudy>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    title: caseStudy?.title || "", client: caseStudy?.client || "",
    category: caseStudy?.category || "", duration: caseStudy?.duration || "",
    challenge: caseStudy?.challenge || "", solution: caseStudy?.solution || "",
    testimonial: caseStudy?.testimonial || "",
    process: caseStudy?.process?.join("\n") || "",
    tags: caseStudy?.tags?.join(", ") || "",
    featured: caseStudy?.featured || false, visible: caseStudy?.visible ?? true,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{caseStudy ? "Edit" : "Add"} Case Study</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Title *</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Client</label><input type="text" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Category</label><input type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="YouTube Growth, Brand Campaign..." /></div>
        <div><label className="block text-sm font-medium mb-1">Duration</label><input type="text" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="8 months" /></div>
        <div><label className="block text-sm font-medium mb-1">Tags (comma sep)</label><input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Challenge</label><textarea rows={3} value={form.challenge} onChange={(e) => setForm({ ...form, challenge: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Solution</label><textarea rows={3} value={form.solution} onChange={(e) => setForm({ ...form, solution: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Process (one step per line)</label><textarea rows={3} value={form.process} onChange={(e) => setForm({ ...form, process: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Client Testimonial</label><textarea rows={2} value={form.testimonial} onChange={(e) => setForm({ ...form, testimonial: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2 flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" /><span className="text-sm">Featured</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="rounded" /><span className="text-sm">Visible</span></label>
        </div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave({ ...form, process: form.process.split("\n").filter(Boolean), tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) })} disabled={saving || !form.title}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{caseStudy ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
