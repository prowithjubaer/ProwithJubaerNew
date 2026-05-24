"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Save, Globe, Mail, User, Palette } from "lucide-react";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "Pro with Jubaer",
    siteUrl: "https://prowithjubaer.com",
    email: "hello@prowithjubaer.com",
    phone: "+880 1XXX-XXXXXX",
    description:
      "Premium video editing, motion graphics, and creative design services by Md Jubaer Ahmed.",
    heroTitle: "Md Jubaer Ahmed",
    heroTagline: "Video Editor & Motion Graphics Designer",
    heroDescription:
      "I craft cinematic videos, stunning motion graphics, and scroll-stopping visuals that help brands tell their story.",
    primaryColor: "#8b5cf6",
    accentColor: "#06b6d4",
    ctaColor: "#f97316",
    facebookUrl: "https://facebook.com/prowithjubaer",
    youtubeUrl: "https://youtube.com/@prowithjubaer",
    instagramUrl: "https://instagram.com/prowithjubaer",
    linkedinUrl: "https://linkedin.com/in/prowithjubaer",
    fiverrUrl: "https://fiverr.com/prowithjubaer",
    upworkUrl: "https://upwork.com/freelancers/prowithjubaer",
  });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Site Settings</h1>
        <p className="text-muted-foreground text-sm mb-8">
          Configure your website settings and preferences
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* General Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold">General Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) =>
                  setSettings({ ...settings, siteName: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Site URL</label>
              <input
                type="text"
                value={settings.siteUrl}
                onChange={(e) =>
                  setSettings({ ...settings, siteUrl: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Site Description (SEO)
              </label>
              <textarea
                value={settings.description}
                onChange={(e) =>
                  setSettings({ ...settings, description: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold">Contact Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) =>
                  setSettings({ ...settings, phone: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold">Hero Section</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={settings.heroTitle}
                onChange={(e) =>
                  setSettings({ ...settings, heroTitle: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tagline</label>
              <input
                type="text"
                value={settings.heroTagline}
                onChange={(e) =>
                  setSettings({ ...settings, heroTagline: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={settings.heroDescription}
                onChange={(e) =>
                  setSettings({ ...settings, heroDescription: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Brand Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold">Brand Colors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Primary Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) =>
                    setSettings({ ...settings, primaryColor: e.target.value })
                  }
                  className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.primaryColor}
                  onChange={(e) =>
                    setSettings({ ...settings, primaryColor: e.target.value })
                  }
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Accent Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.accentColor}
                  onChange={(e) =>
                    setSettings({ ...settings, accentColor: e.target.value })
                  }
                  className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.accentColor}
                  onChange={(e) =>
                    setSettings({ ...settings, accentColor: e.target.value })
                  }
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                CTA Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={settings.ctaColor}
                  onChange={(e) =>
                    setSettings({ ...settings, ctaColor: e.target.value })
                  }
                  className="w-10 h-10 rounded-lg border-0 cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.ctaColor}
                  onChange={(e) =>
                    setSettings({ ...settings, ctaColor: e.target.value })
                  }
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <h2 className="text-xl font-bold mb-6">Social Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries({
              facebookUrl: "Facebook",
              youtubeUrl: "YouTube",
              instagramUrl: "Instagram",
              linkedinUrl: "LinkedIn",
              fiverrUrl: "Fiverr",
              upworkUrl: "Upwork",
            }).map(([key, label]) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1">{label}</label>
                <input
                  type="text"
                  value={(settings as Record<string, string>)[key]}
                  onChange={(e) =>
                    setSettings({ ...settings, [key]: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button variant="primary" size="lg">
            <Save className="w-4 h-4 mr-2" />
            Save All Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
