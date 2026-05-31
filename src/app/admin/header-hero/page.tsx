"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Save, Plus, Trash2, GripVertical, Eye, Loader2, Check } from "lucide-react";
import { useHeroStore, useNavigationStore } from "@/store/admin-store";

export default function AdminHeaderHero() {
  const { hero, loading: heroLoading, fetch: fetchHero, update: updateHero } = useHeroStore();
  const { items: navItems, loading: navLoading, fetch: fetchNav, create: createNav, bulkUpdate, remove: removeNav } = useNavigationStore();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [localNav, setLocalNav] = useState(navItems);
  const [heroForm, setHeroForm] = useState({
    badge_text: "", show_badge: true, tagline: "", description: "",
    supporting_line: "", skill_line: "",
    cta_primary_text: "", cta_primary_link: "",
    cta_secondary_text: "", cta_secondary_link: "",
    cta_tertiary_text: "", cta_tertiary_link: "",
    show_stats: true, show_showreel_card: true, show_floating_elements: true,
  });

  useEffect(() => { fetchHero(); fetchNav(); }, [fetchHero, fetchNav]);


  useEffect(() => { if (hero) setHeroForm({
    badge_text: hero.badge_text || "", show_badge: hero.show_badge ?? true,
    tagline: hero.tagline || "", description: hero.description || "",
    supporting_line: hero.supporting_line || "", skill_line: hero.skill_line || "",
    cta_primary_text: hero.cta_primary_text || "", cta_primary_link: hero.cta_primary_link || "",
    cta_secondary_text: hero.cta_secondary_text || "", cta_secondary_link: hero.cta_secondary_link || "",
    cta_tertiary_text: hero.cta_tertiary_text || "", cta_tertiary_link: hero.cta_tertiary_link || "",
    show_stats: hero.show_stats ?? true, show_showreel_card: hero.show_showreel_card ?? true,
    show_floating_elements: hero.show_floating_elements ?? true,
  }); }, [hero]);

  useEffect(() => { setLocalNav(navItems); }, [navItems]);

  const handleSaveAll = async () => {
    setSaving(true);
    await updateHero(heroForm);
    await bulkUpdate(localNav);
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (heroLoading || navLoading) return <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Header & Hero Settings</h1>
        <p className="text-muted-foreground text-sm mb-8">Full control over your site header navigation and homepage hero section.</p>
      </motion.div>

      <div className="space-y-8">
        {/* Navigation Menu */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <h2 className="text-xl font-bold mb-6">Navigation Menu Items</h2>
          <div className="space-y-2 mb-4">
            {localNav.map((item, index) => (
              <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-muted/20">
                <GripVertical className="w-4 h-4 text-muted-foreground" />
                <input type="text" value={item.name} onChange={(e) => { const u = [...localNav]; u[index] = { ...u[index], name: e.target.value }; setLocalNav(u); }}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" />
                <input type="text" value={item.href} onChange={(e) => { const u = [...localNav]; u[index] = { ...u[index], href: e.target.value }; setLocalNav(u); }}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono" />
                <label className="flex items-center gap-1">
                  <input type="checkbox" checked={item.visible} onChange={(e) => { const u = [...localNav]; u[index] = { ...u[index], visible: e.target.checked }; setLocalNav(u); }} className="rounded" />
                  <Eye className="w-3 h-3 text-muted-foreground" />
                </label>
                <button onClick={() => removeNav(item.id)} className="p-1 rounded hover:bg-red-500/10 text-muted-foreground hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            ))}
          </div>
          <button onClick={() => createNav({ name: "New Link", href: "/new", sort_order: localNav.length + 1, visible: true })} className="text-sm text-primary-500 hover:underline flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" /> Add Menu Item
          </button>
        </div>


        {/* Hero Section */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <h2 className="text-xl font-bold mb-6">Hero Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div><label className="block text-sm font-medium mb-1">Badge Text</label><input type="text" value={heroForm.badge_text} onChange={(e) => setHeroForm({ ...heroForm, badge_text: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            <div><label className="block text-sm font-medium mb-1">Tagline</label><input type="text" value={heroForm.tagline} onChange={(e) => setHeroForm({ ...heroForm, tagline: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Description</label><textarea value={heroForm.description} onChange={(e) => setHeroForm({ ...heroForm, description: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Supporting Line</label><textarea value={heroForm.supporting_line} onChange={(e) => setHeroForm({ ...heroForm, supporting_line: e.target.value })} rows={2} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Skill Line</label><input type="text" value={heroForm.skill_line} onChange={(e) => setHeroForm({ ...heroForm, skill_line: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm" /></div>
          </div>

          {/* CTAs */}
          <h3 className="font-bold text-sm mb-3">CTA Buttons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
              <p className="text-xs font-medium text-primary-500 mb-2">Primary CTA</p>
              <input type="text" value={heroForm.cta_primary_text} onChange={(e) => setHeroForm({ ...heroForm, cta_primary_text: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 outline-none text-sm mb-2" placeholder="Button text" />
              <input type="text" value={heroForm.cta_primary_link} onChange={(e) => setHeroForm({ ...heroForm, cta_primary_link: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 outline-none text-sm font-mono" placeholder="Link" />
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
              <p className="text-xs font-medium text-accent-cyan mb-2">Secondary CTA</p>
              <input type="text" value={heroForm.cta_secondary_text} onChange={(e) => setHeroForm({ ...heroForm, cta_secondary_text: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 outline-none text-sm mb-2" />
              <input type="text" value={heroForm.cta_secondary_link} onChange={(e) => setHeroForm({ ...heroForm, cta_secondary_link: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 outline-none text-sm font-mono" />
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
              <p className="text-xs font-medium text-cta-orange mb-2">Tertiary CTA</p>
              <input type="text" value={heroForm.cta_tertiary_text} onChange={(e) => setHeroForm({ ...heroForm, cta_tertiary_text: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 outline-none text-sm mb-2" />
              <input type="text" value={heroForm.cta_tertiary_link} onChange={(e) => setHeroForm({ ...heroForm, cta_tertiary_link: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 outline-none text-sm font-mono" />
            </div>
          </div>

          {/* Toggles */}
          <h3 className="font-bold text-sm mb-3">Visibility</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { key: "show_badge", label: "Show Badge" },
              { key: "show_stats", label: "Stats Section" },
              { key: "show_showreel_card", label: "Showreel Card" },
              { key: "show_floating_elements", label: "3D Elements" },
            ].map((t) => (
              <label key={t.key} className="flex items-center gap-2 p-3 rounded-xl border border-border/50 bg-muted/20 cursor-pointer">
                <input type="checkbox" checked={(heroForm as Record<string, boolean | string>)[t.key] as boolean} onChange={(e) => setHeroForm({ ...heroForm, [t.key]: e.target.checked })} className="rounded" />
                <span className="text-xs font-medium">{t.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <Button variant="primary" size="lg" onClick={handleSaveAll} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : saved ? <Check className="w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
            {saving ? "Saving..." : saved ? "Saved!" : "Save All Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}
