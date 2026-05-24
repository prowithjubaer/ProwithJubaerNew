"use client";

import { motion } from "framer-motion";
import { Clock, Film, Scissors, Sparkles, Bot } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "Years Experience", value: "3+" },
  { icon: Film, label: "YouTube & Social Media Content", value: "" },
  { icon: Scissors, label: "Short-form + Long-form Editing", value: "" },
  { icon: Sparkles, label: "Motion Graphics & Design", value: "" },
  { icon: Bot, label: "AI-assisted Workflow", value: "" },
];

export function TrustBar() {
  return (
    <section className="relative py-6 overflow-hidden border-y border-border/30">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-cyan/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-primary-500" />
              </div>
              <div className="flex items-baseline gap-1.5">
                {item.value && (
                  <span className="text-lg font-bold gradient-text">{item.value}</span>
                )}
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
