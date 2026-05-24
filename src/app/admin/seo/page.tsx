"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Save, Globe, Code } from "lucide-react";

interface PageSEO {
  title: string;
  description: string;
  ogImage: string;
  canonicalUrl: string;
}

const defaultPages: Record<string, PageSEO> = {
  Home: {
    title: "Pro with Jubaer - Video Editing & Design Courses",
    description:
      "Learn professional video editing, motion graphics, and graphic design from industry expert Md Jubaer Ahmed. Bangla courses for everyone.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com",
  },
  Courses: {
    title: "Courses - Pro with Jubaer",
    description:
      "Browse all professional courses on video editing, motion graphics, YouTube growth, and graphic design.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com/courses",
  },
  Portfolio: {
    title: "Portfolio - Pro with Jubaer",
    description:
      "View our professional portfolio showcasing video editing, motion graphics, and design projects.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com/portfolio",
  },
  Services: {
    title: "Services - Pro with Jubaer",
    description:
      "Professional video editing, motion graphics, and graphic design services for your brand.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com/services",
  },
  About: {
    title: "About - Pro with Jubaer",
    description:
      "Learn about Md Jubaer Ahmed, professional video editor and design instructor.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com/about",
  },
  Contact: {
    title: "Contact - Pro with Jubaer",
    description: "Get in touch for project inquiries, collaborations, or course questions.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com/contact",
  },
  Blog: {
    title: "Blog - Pro with Jubaer",
    description:
      "Tips, tutorials, and insights on video editing, motion graphics, AI tools, and freelancing.",
    ogImage: "",
    canonicalUrl: "https://prowithjubaer.com/blog",
  },
};

export default function SEOPage() {
  const [activeTab, setActiveTab] = useState("Home");
  const [pages, setPages] = useState<Record<string, PageSEO>>(defaultPages);
  const [globalSettings, setGlobalSettings] = useState({
    googleAnalyticsId: "",
    facebookPixelId: "",
    gtmId: "",
    customHeadScripts: "",
  });
  const [robotsTxt, setRobotsTxt] = useState(
    `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /dashboard/\n\nSitemap: https://prowithjubaer.com/sitemap.xml`
  );

  const updatePageSEO = (field: keyof PageSEO, value: string) => {
    setPages({
      ...pages,
      [activeTab]: { ...pages[activeTab], [field]: value },
    });
  };

  const handleSave = () => {
    alert("SEO settings saved successfully!");
  };

  const pageTabs = Object.keys(pages);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">SEO Manager</h1>
        <p className="text-muted-foreground">
          Optimize your website for search engines. Manage meta tags, analytics, and more.
        </p>
      </div>

      <div className="space-y-6">
        {/* Page-specific SEO */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-xl font-bold mb-4">Page SEO Settings</h2>

          {/* Page Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-muted/30 border border-border/50 mb-6">
            {pageTabs.map((page) => (
              <button
                key={page}
                onClick={() => setActiveTab(page)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === page
                    ? "bg-primary-500/10 text-primary-500"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* SEO Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                SEO Title
              </label>
              <input
                type="text"
                value={pages[activeTab].title}
                onChange={(e) => updatePageSEO("title", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Page title for search engines"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {pages[activeTab].title.length}/60 characters
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Meta Description
              </label>
              <textarea
                value={pages[activeTab].description}
                onChange={(e) => updatePageSEO("description", e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="Description shown in search results"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {pages[activeTab].description.length}/160 characters
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                OG Image URL
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={pages[activeTab].ogImage}
                  onChange={(e) => updatePageSEO("ogImage", e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                  placeholder="https://example.com/image.jpg"
                />
                <div className="w-16 h-10 rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Canonical URL
              </label>
              <input
                type="text"
                value={pages[activeTab].canonicalUrl}
                onChange={(e) => updatePageSEO("canonicalUrl", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="https://prowithjubaer.com/page"
              />
            </div>
          </div>
        </motion.div>

        {/* Global Settings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-xl font-bold mb-4">Global Analytics & Tracking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Google Analytics ID
              </label>
              <input
                type="text"
                value={globalSettings.googleAnalyticsId}
                onChange={(e) =>
                  setGlobalSettings({
                    ...globalSettings,
                    googleAnalyticsId: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="G-XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Facebook Pixel ID
              </label>
              <input
                type="text"
                value={globalSettings.facebookPixelId}
                onChange={(e) =>
                  setGlobalSettings({
                    ...globalSettings,
                    facebookPixelId: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="XXXXXXXXXXXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                GTM Container ID
              </label>
              <input
                type="text"
                value={globalSettings.gtmId}
                onChange={(e) =>
                  setGlobalSettings({
                    ...globalSettings,
                    gtmId: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="GTM-XXXXXXX"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Custom Head Scripts
            </label>
            <textarea
              value={globalSettings.customHeadScripts}
              onChange={(e) =>
                setGlobalSettings({
                  ...globalSettings,
                  customHeadScripts: e.target.value,
                })
              }
              rows={4}
              className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono resize-none"
              placeholder="<script>...</script>"
            />
          </div>
        </motion.div>

        {/* Robots.txt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-primary-500" />
            <h2 className="text-xl font-bold">Robots.txt</h2>
          </div>
          <textarea
            value={robotsTxt}
            onChange={(e) => setRobotsTxt(e.target.value)}
            rows={6}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm font-mono resize-none"
          />
        </motion.div>

        {/* Save */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg shadow-primary-500/25"
          >
            <Save className="w-4 h-4" />
            Save All SEO Settings
          </button>
        </div>
      </div>
    </div>
  );
}
