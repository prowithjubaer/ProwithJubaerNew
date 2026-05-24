"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Zap,
  Scissors,
  Type,
  Sparkles,
  Eye,
  Film,
  Volume2,
  Monitor,
  Palette,
} from "lucide-react";

const stylePoints = [
  { icon: Zap, text: "Strong first few seconds" },
  { icon: Scissors, text: "Clean cuts and pacing" },
  { icon: Type, text: "Captions that support attention" },
  { icon: Sparkles, text: "Motion graphics where needed" },
  { icon: Eye, text: "Visual callouts for clarity" },
  { icon: Film, text: "B-roll and screen elements" },
  { icon: Volume2, text: "Sound cleanup and balance" },
  { icon: Monitor, text: "Platform-specific export" },
  { icon: Palette, text: "Thumbnail and visual consistency" },
];

export function EditingStyle() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Approach"
          title="My Editing Style"
          subtitle="I focus on videos that are clean, engaging, and easy to watch."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-cyan/50 to-primary-500/20" />

          <div className="space-y-4">
            {stylePoints.map((point, index) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Node on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.1, type: "spring", stiffness: 300 }}
                  className="absolute left-3.5 md:left-5.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-500/20 border-2 border-primary-500 flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                </motion.div>

                {/* Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary-500/30 hover:bg-primary-500/5 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                    <point.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{point.text}</span>
                  {/* Checkmark */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                    className="ml-auto text-green-500 font-bold text-lg"
                  >
                    ✓
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
