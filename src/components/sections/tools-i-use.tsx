"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

type SkillLevel = "Main tool" | "Supporting tool" | "Exploring/additional";

interface ToolItem {
  name: string;
  category: "creative" | "ai";
  level: SkillLevel;
  abbr: string;
}

const tools: ToolItem[] = [
  { name: "Adobe Premiere Pro", category: "creative", level: "Main tool", abbr: "Pr" },
  { name: "CapCut", category: "creative", level: "Main tool", abbr: "CC" },
  { name: "After Effects", category: "creative", level: "Main tool", abbr: "Ae" },
  { name: "Canva", category: "creative", level: "Supporting tool", abbr: "Ca" },
  { name: "Photoshop", category: "creative", level: "Main tool", abbr: "Ps" },
  { name: "Illustrator", category: "creative", level: "Supporting tool", abbr: "Ai" },
  { name: "ChatGPT", category: "ai", level: "Main tool", abbr: "GP" },
  { name: "Gemini", category: "ai", level: "Supporting tool", abbr: "Gm" },
  { name: "AI Voice Tools", category: "ai", level: "Supporting tool", abbr: "🎙" },
  { name: "AI Image Tools", category: "ai", level: "Supporting tool", abbr: "🖼" },
  { name: "AI Video Tools", category: "ai", level: "Exploring/additional", abbr: "🎬" },
  { name: "WordPress / Elementor", category: "ai", level: "Exploring/additional", abbr: "WP" },
];

const levelColors: Record<SkillLevel, string> = {
  "Main tool": "bg-green-500/10 text-green-500 border-green-500/30",
  "Supporting tool": "bg-blue-500/10 text-blue-500 border-blue-500/30",
  "Exploring/additional": "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
};

export function ToolsIUse() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const creativeTools = tools.filter((t) => t.category === "creative");
  const aiTools = tools.filter((t) => t.category === "ai");

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Toolkit" title="Tools I Work With" subtitle="Industry-standard creative and AI tools powering every project." />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">Main Creative Tools</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {creativeTools.map((tool, index) => (
              <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} onMouseEnter={() => setHoveredTool(tool.name)} onMouseLeave={() => setHoveredTool(null)} className="relative">
                <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-border/30 flex items-center justify-center text-lg font-bold text-primary-500">{tool.abbr}</div>
                  <span className="text-xs font-medium text-center leading-tight">{tool.name}</span>
                </div>
                {hoveredTool === tool.name && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border whitespace-nowrap ${levelColors[tool.level]}`}>{tool.level}</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">AI / Workflow Tools</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {aiTools.map((tool, index) => (
              <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} onMouseEnter={() => setHoveredTool(tool.name)} onMouseLeave={() => setHoveredTool(null)} className="relative">
                <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-blue-500/10 border border-border/30 flex items-center justify-center text-lg font-bold text-accent-cyan">{tool.abbr}</div>
                  <span className="text-xs font-medium text-center leading-tight">{tool.name}</span>
                </div>
                {hoveredTool === tool.name && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border whitespace-nowrap ${levelColors[tool.level]}`}>{tool.level}</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mt-10">
          {(Object.entries(levelColors) as [SkillLevel, string][]).map(([level, color]) => (
            <span key={level} className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${color}`}>{level}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
