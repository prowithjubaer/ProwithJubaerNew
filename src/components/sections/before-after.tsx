"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GripVertical } from "lucide-react";

const comparisons = [
  {
    id: 1,
    title: "Raw Video → Edited Video",
    description: "Color grading, transitions, sound design, and pacing transforms raw footage.",
    beforeLabel: "Raw Footage",
    afterLabel: "Final Edit",
  },
  {
    id: 2,
    title: "Plain Talking-head → Captions + Zoom + Motion Text",
    description: "Dynamic captions, zoom effects, and motion elements make talking-head videos engaging.",
    beforeLabel: "Plain Video",
    afterLabel: "Enhanced",
  },
  {
    id: 3,
    title: "Basic Thumbnail → Clickable Thumbnail",
    description: "Strategic composition, color psychology, and text hierarchy boost CTR.",
    beforeLabel: "Basic",
    afterLabel: "Optimized",
  },
  {
    id: 4,
    title: "Simple Poster → Premium Design",
    description: "Professional typography, layout, and visual hierarchy create premium social content.",
    beforeLabel: "Draft",
    afterLabel: "Final",
  },
  {
    id: 5,
    title: "Normal Intro → Hook-focused Intro",
    description: "First 3 seconds redesigned with hooks, motion, and attention-grabbing elements.",
    beforeLabel: "Normal",
    afterLabel: "Hook-focused",
  },
];

function SliderCard({ item }: { item: (typeof comparisons)[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden card-hover">
      {/* Slider area */}
      <div className="relative aspect-video overflow-hidden select-none">
        {/* Before side */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="text-center p-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
              {item.beforeLabel}
            </span>
            <div className="mt-3 w-16 h-16 rounded-xl bg-gray-600/50 border border-gray-500/30 mx-auto flex items-center justify-center">
              <span className="text-2xl opacity-40">📹</span>
            </div>
          </div>
        </div>

        {/* After side */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-dark-bg to-accent-cyan/20 flex items-center justify-center"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <div className="text-center p-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
              {item.afterLabel}
            </span>
            <div className="mt-3 w-16 h-16 rounded-xl bg-primary-500/20 border border-primary-500/30 mx-auto flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
            <GripVertical className="w-4 h-4 text-gray-600 rotate-90" />
          </div>
        </div>

        {/* Invisible slider input */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
        <p className="text-xs text-muted-foreground">{item.description}</p>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transformation"
          title="Before & After"
          subtitle="See how raw footage and simple ideas become polished content."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SliderCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
