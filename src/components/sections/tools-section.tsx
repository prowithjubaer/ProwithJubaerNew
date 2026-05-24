"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { toolsData } from "@/data/site-data";

export function ToolsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Toolkit"
          title="Tools I Master"
          subtitle="Industry-standard creative tools powering every project."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {toolsData.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-sm font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 cursor-default"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
