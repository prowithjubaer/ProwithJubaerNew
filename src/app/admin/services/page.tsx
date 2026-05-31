"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Save, X, Loader2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServicesStore } from "@/store/admin-store";
import type { Service } from "@/types/database";

export default function AdminServices() {
  const { items: services, loading, fetch, create, update, remove } = useServicesStore();
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetch(); }, [fetch]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      await remove(id);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Services Manager</h1>
          <p className="text-muted-foreground text-sm">Manage your service offerings and pricing</p>
        </div>
        <Button variant="primary" size="md" onClick={() => { setEditingService(null); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-6">
            <ServiceForm
              service={editingService}
              saving={saving}
              onClose={() => { setShowForm(false); setEditingService(null); }}
              onSave={async (data) => {
                setSaving(true);
                if (editingService) { await update({ id: editingService.id, ...data }); }
                else { await create(data); }
                setSaving(false); setShowForm(false); setEditingService(null);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {loading && services.length === 0 && (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
            className={`rounded-2xl border bg-card/50 p-5 ${!service.visible ? "border-red-500/20 opacity-60" : "border-border/50"}`}>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold">{service.title}</h3>
              <span className="text-xs font-semibold text-primary-400">{service.pricing}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
            <div className="space-y-1 mb-4">
              {service.features?.slice(0, 3).map((f) => (
                <p key={f} className="text-xs text-muted-foreground">• {f}</p>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-border/50">
              <button onClick={() => update({ id: service.id, visible: !service.visible })} className={`p-1.5 rounded-lg transition-colors ${service.visible ? "text-green-500" : "text-red-500"}`}>
                {service.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              <button onClick={() => { setEditingService(service); setShowForm(true); }} className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500">
                <Edit className="w-4 h-4" />
              </button>
              <button onClick={() => handleDelete(service.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ServiceForm({ service, saving, onClose, onSave }: {
  service: Service | null; saving: boolean; onClose: () => void;
  onSave: (data: Partial<Service>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    title: service?.title || "",
    description: service?.description || "",
    icon: service?.icon || "Briefcase",
    pricing: service?.pricing || "",
    color: service?.color || "purple",
    features: service?.features?.join("\n") || "",
    sort_order: service?.sort_order || 0,
    visible: service?.visible ?? true,
  });

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{service ? "Edit Service" : "Add New Service"}</h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50"><X className="w-5 h-5" /></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><label className="block text-sm font-medium mb-1">Title *</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
        <div><label className="block text-sm font-medium mb-1">Pricing</label><input type="text" value={form.pricing} onChange={(e) => setForm({ ...form, pricing: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" placeholder="From $50/video" /></div>
        <div><label className="block text-sm font-medium mb-1">Icon</label><select value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"><option>Video</option><option>Sparkles</option><option>Image</option><option>Palette</option><option>Workflow</option><option>Globe</option><option>Briefcase</option></select></div>
        <div><label className="block text-sm font-medium mb-1">Color</label><select value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"><option>purple</option><option>cyan</option><option>orange</option><option>blue</option><option>green</option><option>pink</option></select></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Description</label><textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
        <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Features (one per line)</label><textarea rows={4} value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" placeholder="Feature 1&#10;Feature 2" /></div>
      </div>
      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={() => onSave({ ...form, features: form.features.split("\n").filter(Boolean) })} disabled={saving || !form.title}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{service ? "Update" : "Save"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}
