"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Save, Globe, Mail, Palette, Loader2, Check, Share2 } from "lucide-react";
import { useSettingsStore, useSocialLinksStore } from "@/store/admin-store";

export default function AdminSettings() {
  const { settings, loading, fetch, update } = useSettingsStore();
  const { links, loading: linksLoading, fetch: fetchLinks, update: updateLinks } = useSocialLinksStore();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    site_name: "", site_url: "", site_description: "", email: "", phone: "",
    logo_text: "", primary_color: "#8b5cf6", accent_color: "#06b6d4", cta_color: "#f97316",
  });
  const [socialForm, setSocialForm] = useState({
    youtube: "", facebook: "", instagram: "", linkedin: "",
    twitter: "", fiverr: "", upwork: "", github: "", tiktok: "",
  });

  useEffect(() => { fetch(); fetchLinks(); }, [fetch, fetchLinks]);


  useEffect(() => { if (settings) setForm({
    site_name: settings.site_name || "", site_url: settings.site_url || "",
    site_description: settings.site_description || "", email: settings.email || "",
    phone: settings.phone || "", logo_text: settings.logo_text || "",
    primary_color: settings.primary_color || "#8b5cf6",
    accent_color: settings.accent_color || "#06b6d4",
    cta_color: settings.cta_color || "#f97316",
  }); }, [settings]);

  useEffect(() => { if (links) setSocialForm({
    youtube: links.youtube || "", facebook: links.facebook || "",
    instagram: links.instagram || "", linkedin: links.linkedin || "",
    twitter: links.twitter || "", fiverr: links.fiverr || "",
    upwork: links.upwork || "", github: links.github || "", tiktok: links.tiktok || "",
  }); }, [links]);

  const handleSave = async () => {
    setSaving(true);
    await update(form);
    await updateLinks(socialForm);
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading || linksLoading) return <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Site Settings</h1>
        <p className="text-muted-foreground text-sm mb-8">Configure your website settings and preferences</p>
      </motion.div>

      <div className="space-y-8">
        {/* General */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <div className="flex items-center gap-3 mb-6"><Globe className="w-5 h-5 text-primary-500" /><h2 className="text-xl font-bold">General Settings</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Site Name</label><input type="text" value={form.site_name} onChange={(e) => setForm({ ...form, site_name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium mb-1">Site URL</label><input type="text" value={form.site_url} onChange={(e) => setForm({ ...form, site_url: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium mb-1">Logo Text</label><input type="text" value={form.logo_text} onChange={(e) => setForm({ ...form, logo_text: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            <div></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Site Description (SEO)</label><textarea value={form.site_description} onChange={(e) => setForm({ ...form, site_description: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <div className="flex items-center gap-3 mb-6"><Mail className="w-5 h-5 text-primary-500" /><h2 className="text-xl font-bold">Contact Information</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium mb-1">Phone</label><input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
          </div>
        </div>

        {/* Colors */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <div className="flex items-center gap-3 mb-6"><Palette className="w-5 h-5 text-primary-500" /><h2 className="text-xl font-bold">Brand Colors</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ key: "primary_color", label: "Primary" }, { key: "accent_color", label: "Accent" }, { key: "cta_color", label: "CTA" }].map((c) => (
              <div key={c.key}><label className="block text-sm font-medium mb-1">{c.label} Color</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={(form as Record<string, string>)[c.key]} onChange={(e) => setForm({ ...form, [c.key]: e.target.value })} className="w-10 h-10 rounded-lg border-0 cursor-pointer" />
                  <input type="text" value={(form as Record<string, string>)[c.key]} onChange={(e) => setForm({ ...form, [c.key]: e.target.value })} className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono" />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Social Links */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <div className="flex items-center gap-3 mb-6"><Share2 className="w-5 h-5 text-primary-500" /><h2 className="text-xl font-bold">Social Links</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries({ youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", twitter: "Twitter/X", fiverr: "Fiverr", upwork: "Upwork", github: "GitHub", tiktok: "TikTok" }).map(([key, label]) => (
              <div key={key}><label className="block text-sm font-medium mb-1">{label}</label><input type="text" value={(socialForm as Record<string, string>)[key]} onChange={(e) => setSocialForm({ ...socialForm, [key]: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            ))}
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <Button variant="primary" size="lg" onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : saved ? <Check className="w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
            {saving ? "Saving..." : saved ? "Saved!" : "Save All Settings"}
          </Button>
        </div>
      </div>
    </div>
  );
}
