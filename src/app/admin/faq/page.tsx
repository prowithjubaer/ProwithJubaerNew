"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, EyeOff, Save, X, Loader2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFaqStore } from "@/store/admin-store";
import type { FAQ } from "@/types/database";

export default function AdminFAQ() {
  const { items, loading, fetch, create, update, remove } = useFaqStore();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const handleSave = async (data: Partial<FAQ>) => {
    setSaving(true);
    if (editing) { await update({ id: editing.id, ...data }); }
    else { await create(data); }
    setSaving(false); setShowForm(false); setEditing(null);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="text-3xl font-bold">FAQ Manager</h1>
          <p className="text-muted-foreground text-sm">Manage frequently asked questions</p></div>
        <Button variant="primary" size="md" onClick={() => { setEditing(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add FAQ
        </Button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <FAQForm faq={editing} saving={saving} onClose={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && items.length === 0 && <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>}

      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}
            className={`rounded-xl border bg-card/50 p-4 ${!item.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}>
            <div className="flex items-start gap-3">
              <GripVertical className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-xs bg-primary-500/10 text-primary-400">{item.category}</span>
                </div>
                <h3 className="font-bold text-sm mb-1">{item.question}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.answer}</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => update({ id: item.id, visible: !item.visible })} className={`p-1.5 rounded-lg ${item.visible ? "text-green-500" : "text-red-500"}`}>{item.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}</button>
                <button onClick={() => { setEditing(item); setShowForm(true); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary-500"><Edit className="w-4 h-4" /></button>
                <button onClick={() => { if(confirm("Delete?")) remove(item.id); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {!loading && items.length === 0 && <div className="text-center py-12 text-muted-foreground">No FAQ items yet.</div>}
    </div>
  );
}


function FAQForm({ faq, saving, onClose, onSave }: {
  faq: FAQ | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<FAQ>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    question: faq?.question || "", answer: faq?.answer || "",
    category: faq?.category || "General", sort_order: faq?.sort_order || 0,
    visible: faq?.visible ?? true,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{faq ? "Edit" : "Add"} FAQ</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Question *</label><input type="text" value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Category</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"><option>General</option><option>Services</option><option>Courses</option><option>Pricing</option><option>Technical</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Sort Order</label><input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Answer *</label><textarea rows={4} value={form.answer} onChange={(e) => setForm({ ...form, answer: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave(form)} disabled={saving || !form.question || !form.answer}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{faq ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
