"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Save, Plus, Trash2, GripVertical, Eye } from "lucide-react";

export default function AdminHeaderHero() {
  const [headerSettings, setHeaderSettings] = useState({
    logoText: "Pro with Jubaer",
    resumeFile: "/resume.pdf",
    hireMeText: "Hire Me",
    hireMeLink: "/contact",
    loginText: "Login",
    loginLink: "/login",
    resumeButtonText: "Resume",
    showResume: true,
    showLogin: true,
    showHireMe: true,
    showMobileCTA: true,
  });

  const [menuItems, setMenuItems] = useState([
    { name: "Home", href: "/", visible: true },
    { name: "Portfolio", href: "/portfolio", visible: true },
    { name: "Services", href: "/services", visible: true },
    { name: "Courses", href: "/courses", visible: true },
    { name: "Case Studies", href: "/case-studies", visible: true },
    { name: "About", href: "/about", visible: true },
    { name: "Contact", href: "/contact", visible: true },
  ]);

  const [heroSettings, setHeroSettings] = useState({
    badge: "Available for Remote Work",
    showBadge: true,
    tagline: "Video Editor & Motion Graphics Designer",
    description: "I create clean, engaging, and visually strong videos, motion graphics, thumbnails, and social media content for creators, brands, and businesses.",
    supportingLine: "My focus is simple: make content look professional, easy to watch, and visually memorable through editing, pacing, motion, captions, and design.",
    skillLine: "Video Editing • Motion Graphics • Thumbnail Design • Short-form & Long-form Content • AI Workflow Knowledge",
    ctaPrimaryText: "Watch Showreel",
    ctaPrimaryLink: "#showreel",
    ctaSecondaryText: "View Portfolio",
    ctaSecondaryLink: "/portfolio",
    ctaTertiaryText: "Hire Me",
    ctaTertiaryLink: "/contact",
    showFloatingElements: true,
    showStats: true,
    showShowreelCard: true,
  });

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Header & Hero Settings</h1>
        <p className="text-muted-foreground text-sm mb-8">
          Full control over your site header navigation and homepage hero section.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Header Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <h2 className="text-xl font-bold mb-6">Header Configuration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Logo Text</label>
              <input
                type="text"
                value={headerSettings.logoText}
                onChange={(e) => setHeaderSettings({ ...headerSettings, logoText: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Resume File URL</label>
              <input
                type="text"
                value={headerSettings.resumeFile}
                onChange={(e) => setHeaderSettings({ ...headerSettings, resumeFile: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hire Me Button Text</label>
              <input
                type="text"
                value={headerSettings.hireMeText}
                onChange={(e) => setHeaderSettings({ ...headerSettings, hireMeText: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hire Me Link</label>
              <input
                type="text"
                value={headerSettings.hireMeLink}
                onChange={(e) => setHeaderSettings({ ...headerSettings, hireMeLink: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* Visibility Toggles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { key: "showResume", label: "Show Resume Btn" },
              { key: "showLogin", label: "Show Login Btn" },
              { key: "showHireMe", label: "Show Hire Me Btn" },
              { key: "showMobileCTA", label: "Mobile Bottom CTA" },
            ].map((toggle) => (
              <label key={toggle.key} className="flex items-center gap-2 p-3 rounded-xl border border-border/50 bg-muted/20 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(headerSettings as Record<string, boolean | string>)[toggle.key] as boolean}
                  onChange={(e) => setHeaderSettings({ ...headerSettings, [toggle.key]: e.target.checked })}
                  className="rounded"
                />
                <span className="text-xs font-medium">{toggle.label}</span>
              </label>
            ))}
          </div>

          {/* Menu Items */}
          <h3 className="font-bold text-sm mb-3">Navigation Menu Items</h3>
          <div className="space-y-2 mb-4">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-muted/20">
                <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const updated = [...menuItems];
                    updated[index].name = e.target.value;
                    setMenuItems(updated);
                  }}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                />
                <input
                  type="text"
                  value={item.href}
                  onChange={(e) => {
                    const updated = [...menuItems];
                    updated[index].href = e.target.value;
                    setMenuItems(updated);
                  }}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                />
                <label className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={item.visible}
                    onChange={(e) => {
                      const updated = [...menuItems];
                      updated[index].visible = e.target.checked;
                      setMenuItems(updated);
                    }}
                    className="rounded"
                  />
                  <Eye className="w-3 h-3 text-muted-foreground" />
                </label>
                <button
                  onClick={() => setMenuItems(menuItems.filter((_, i) => i !== index))}
                  className="p-1 rounded hover:bg-red-500/10 text-muted-foreground hover:text-red-500"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setMenuItems([...menuItems, { name: "New Link", href: "/new", visible: true }])}
            className="text-sm text-primary-500 hover:underline flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Add Menu Item
          </button>
        </motion.div>

        {/* Hero Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <h2 className="text-xl font-bold mb-6">Hero Section</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Badge Text</label>
              <input
                type="text"
                value={heroSettings.badge}
                onChange={(e) => setHeroSettings({ ...heroSettings, badge: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Headline / Tagline</label>
              <input
                type="text"
                value={heroSettings.tagline}
                onChange={(e) => setHeroSettings({ ...heroSettings, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={heroSettings.description}
                onChange={(e) => setHeroSettings({ ...heroSettings, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Supporting Line</label>
              <textarea
                value={heroSettings.supportingLine}
                onChange={(e) => setHeroSettings({ ...heroSettings, supportingLine: e.target.value })}
                rows={2}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Skill Line</label>
              <input
                type="text"
                value={heroSettings.skillLine}
                onChange={(e) => setHeroSettings({ ...heroSettings, skillLine: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* CTAs */}
          <h3 className="font-bold text-sm mb-3">CTA Buttons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
              <p className="text-xs font-medium text-primary-500 mb-2">Primary CTA</p>
              <input
                type="text"
                value={heroSettings.ctaPrimaryText}
                onChange={(e) => setHeroSettings({ ...heroSettings, ctaPrimaryText: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm mb-2"
                placeholder="Button text"
              />
              <input
                type="text"
                value={heroSettings.ctaPrimaryLink}
                onChange={(e) => setHeroSettings({ ...heroSettings, ctaPrimaryLink: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                placeholder="Link"
              />
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
              <p className="text-xs font-medium text-accent-cyan mb-2">Secondary CTA</p>
              <input
                type="text"
                value={heroSettings.ctaSecondaryText}
                onChange={(e) => setHeroSettings({ ...heroSettings, ctaSecondaryText: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm mb-2"
                placeholder="Button text"
              />
              <input
                type="text"
                value={heroSettings.ctaSecondaryLink}
                onChange={(e) => setHeroSettings({ ...heroSettings, ctaSecondaryLink: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                placeholder="Link"
              />
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-muted/20">
              <p className="text-xs font-medium text-cta-orange mb-2">Tertiary CTA</p>
              <input
                type="text"
                value={heroSettings.ctaTertiaryText}
                onChange={(e) => setHeroSettings({ ...heroSettings, ctaTertiaryText: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm mb-2"
                placeholder="Button text"
              />
              <input
                type="text"
                value={heroSettings.ctaTertiaryLink}
                onChange={(e) => setHeroSettings({ ...heroSettings, ctaTertiaryLink: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                placeholder="Link"
              />
            </div>
          </div>

          {/* Visibility Toggles */}
          <h3 className="font-bold text-sm mb-3">Element Visibility</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { key: "showBadge", label: "Show Badge" },
              { key: "showFloatingElements", label: "Floating 3D Elements" },
              { key: "showStats", label: "Stats Section" },
              { key: "showShowreelCard", label: "Showreel Card" },
            ].map((toggle) => (
              <label key={toggle.key} className="flex items-center gap-2 p-3 rounded-xl border border-border/50 bg-muted/20 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(heroSettings as Record<string, boolean | string>)[toggle.key] as boolean}
                  onChange={(e) => setHeroSettings({ ...heroSettings, [toggle.key]: e.target.checked })}
                  className="rounded"
                />
                <span className="text-xs font-medium">{toggle.label}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Save */}
        <div className="flex justify-end">
          <Button variant="primary" size="lg">
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
