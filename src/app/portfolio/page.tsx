"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ExternalLink, Filter } from "lucide-react";

const categories = [
  "All",
  "Video Editing",
  "Motion Graphics",
  "Shorts/Reels",
  "Thumbnails",
  "Social Media Design",
  "Case Studies",
];

const portfolioItems = [
  {
    id: "youtube-talking-head",
    title: "YouTube Talking-Head Edit",
    category: "Video Editing",
    role: "Full editing, captions, B-roll, sound cleanup",
    tools: "Premiere Pro, After Effects",
    goal: "Create a structured, engaging talking-head video with retention-focused editing.",
    clientType: "YouTube Creator",
    hasVideo: true,
  },
  {
    id: "short-form-reel",
    title: "Short-form Reel Edit",
    category: "Shorts/Reels",
    role: "Editing, captions, motion text, pacing, hooks",
    tools: "CapCut, Premiere Pro",
    goal: "Fast-paced social media video designed to hold attention and drive engagement.",
    clientType: "Content Creator",
    hasVideo: true,
  },
  {
    id: "motion-graphics-promo",
    title: "Motion Graphics Promo",
    category: "Motion Graphics",
    role: "Motion design, kinetic typography, transitions",
    tools: "After Effects, Illustrator",
    goal: "Create an animated promotional video with modern motion elements.",
    clientType: "SaaS Brand",
    hasVideo: true,
  },
  {
    id: "thumbnail-collection",
    title: "Thumbnail Design Collection",
    category: "Thumbnails",
    role: "Concept, design, CTR optimization, A/B testing",
    tools: "Photoshop, Figma",
    goal: "Design high-CTR thumbnails that drive clicks and match content tone.",
    clientType: "YouTube Channel",
    hasVideo: false,
  },
  {
    id: "social-media-poster",
    title: "Social Media Poster Design",
    category: "Social Media Design",
    role: "Visual design, branding, content layout",
    tools: "Photoshop, Canva, Figma",
    goal: "Create scroll-stopping social media visuals for brand awareness.",
    clientType: "Fashion Brand",
    hasVideo: false,
  },
  {
    id: "course-video-edit",
    title: "Course Video Edit",
    category: "Video Editing",
    role: "Structure, editing, captions, screen recording integration",
    tools: "Premiere Pro, After Effects, CapCut",
    goal: "Produce clean, structured educational content that's easy to follow.",
    clientType: "Course Creator",
    hasVideo: true,
  },
  {
    id: "content-workflow-project",
    title: "Content Workflow Project",
    category: "Case Studies",
    role: "Content strategy, editing, thumbnails, SEO, publishing",
    tools: "Premiere Pro, Photoshop, ChatGPT",
    goal: "Build a repeatable content production system for a YouTube channel.",
    clientType: "YouTube Brand",
    hasVideo: true,
  },
  {
    id: "ai-content-production",
    title: "AI-assisted Content Production Workflow",
    category: "Case Studies",
    role: "AI research, scripting, editing, visual planning",
    tools: "ChatGPT, Premiere Pro, Midjourney, CapCut",
    goal: "Integrate AI tools into creative workflow for faster, smarter content production.",
    clientType: "Digital Agency",
    hasVideo: true,
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              🎬 Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work in video editing, motion graphics, thumbnails, and social media content design.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  {/* Preview */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 via-dark-bg to-accent-cyan/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.hasVideo ? (
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      ) : (
                        <ExternalLink className="w-8 h-8 text-white/30" />
                      )}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-primary-500/80 text-white backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {item.goal}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-start gap-2 text-xs">
                        <span className="font-medium text-foreground/80 min-w-[50px]">Role:</span>
                        <span className="text-muted-foreground">{item.role}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <span className="font-medium text-foreground/80 min-w-[50px]">Tools:</span>
                        <span className="text-muted-foreground">{item.tools}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <span className="font-medium text-foreground/80 min-w-[50px]">Client:</span>
                        <span className="text-muted-foreground">{item.clientType}</span>
                      </div>
                    </div>

                    <Link href={`/portfolio/${item.id}`}>
                      <button className="w-full py-2.5 rounded-xl border border-primary-500/30 text-primary-500 text-xs font-semibold hover:bg-primary-500/10 transition-all flex items-center justify-center gap-1.5 group/btn">
                        View Details
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Like What You See?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="secondary" size="lg">
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
