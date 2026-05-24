"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ExternalLink } from "lucide-react";

const categories = [
  "All",
  "Video Editing",
  "Motion Graphics",
  "Shorts/Reels",
  "Thumbnails",
  "Social Media Design",
];

const works = [
  {
    id: "1",
    title: "Short-form Reel Edit",
    category: "Shorts/Reels",
    role: "Editing, captions, motion text, pacing",
    tools: "CapCut, Premiere Pro",
    focus: "Fast-paced social media video designed to hold attention.",
    hasVideo: true,
  },
  {
    id: "2",
    title: "YouTube Tech Review — Full Edit",
    category: "Video Editing",
    role: "Full edit, color grade, sound design, B-roll",
    tools: "DaVinci Resolve, After Effects",
    focus: "10-minute tech review with cinematic pacing and clean transitions.",
    hasVideo: true,
  },
  {
    id: "3",
    title: "SaaS Product Explainer Animation",
    category: "Motion Graphics",
    role: "Motion design, kinetic typography, UI animation",
    tools: "After Effects, Illustrator",
    focus: "60-second animated explainer for a SaaS product launch.",
    hasVideo: true,
  },
  {
    id: "4",
    title: "Finance YouTube Thumbnails (10 Pack)",
    category: "Thumbnails",
    role: "Design, composition, CTR optimization",
    tools: "Photoshop, Figma",
    focus: "High-CTR thumbnail series achieving 8%+ click-through rate.",
    hasVideo: false,
  },
  {
    id: "5",
    title: "Instagram Carousel — AI Tools Guide",
    category: "Social Media Design",
    role: "Content design, layout, brand consistency",
    tools: "Figma, Canva, Photoshop",
    focus: "Educational carousel designed for saves and shares.",
    hasVideo: false,
  },
  {
    id: "6",
    title: "Podcast Episode — Multi-cam Edit",
    category: "Video Editing",
    role: "Multi-cam sync, dynamic layouts, shorts clips",
    tools: "Premiere Pro, After Effects",
    focus: "60-minute podcast edited with engaging visual layouts.",
    hasVideo: true,
  },
  {
    id: "7",
    title: "Logo Reveal Animation Pack",
    category: "Motion Graphics",
    role: "3D animation, particle effects, sound design",
    tools: "After Effects, Cinema 4D",
    focus: "5 premium logo reveal variations for brand intros.",
    hasVideo: true,
  },
  {
    id: "8",
    title: "TikTok Hook Sequence",
    category: "Shorts/Reels",
    role: "Hook editing, zoom effects, captions, pacing",
    tools: "CapCut, Premiere Pro",
    focus: "First 3-second hooks designed for maximum retention.",
    hasVideo: true,
  },
  {
    id: "9",
    title: "Brand Social Media Kit",
    category: "Social Media Design",
    role: "Design system, templates, content graphics",
    tools: "Figma, Photoshop, Illustrator",
    focus: "Complete social media visual identity for a fashion brand.",
    hasVideo: false,
  },
];

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Featured Work"
          subtitle="A selection of my work in video editing, motion graphics, thumbnails, and social media content design."
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Work Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  {/* Thumbnail area */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 via-dark-bg to-accent-cyan/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {work.hasVideo ? (
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      ) : (
                        <ExternalLink className="w-8 h-8 text-white/30" />
                      )}
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-primary-500/80 text-white backdrop-blur-sm">
                        {work.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-500 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {work.focus}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-start gap-2 text-xs">
                        <span className="font-medium text-foreground/80 min-w-[40px]">Role:</span>
                        <span className="text-muted-foreground">{work.role}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <span className="font-medium text-foreground/80 min-w-[40px]">Tools:</span>
                        <span className="text-muted-foreground">{work.tools}</span>
                      </div>
                    </div>

                    <Link href={`/portfolio/${work.id}`}>
                      <button className="w-full py-2.5 rounded-xl border border-primary-500/30 text-primary-500 text-xs font-semibold hover:bg-primary-500/10 transition-all flex items-center justify-center gap-1.5 group/btn">
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button variant="primary" size="lg" className="group">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
