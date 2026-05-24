"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Layout, Image } from "lucide-react";

const caseStudies = [
  { icon: Scissors, title: "Short-form Video Editing System", description: "Fast-paced reels/shorts editing with hooks, captions, motion text, sound, and social platform formatting.", color: "from-primary-500/20 to-primary-600/10", iconColor: "text-primary-500", borderHover: "hover:border-primary-500/50" },
  { icon: Layout, title: "YouTube Content Workflow", description: "A complete content workflow from idea and structure to editing, thumbnail concept, SEO basics, and publishing support.", color: "from-accent-cyan/20 to-blue-500/10", iconColor: "text-accent-cyan", borderHover: "hover:border-accent-cyan/50" },
  { icon: Image, title: "Thumbnail & Visual Design System", description: "Clickable thumbnails and social visuals with bold hierarchy, strong contrast, and content-focused design.", color: "from-cta-orange/20 to-yellow-500/10", iconColor: "text-cta-orange", borderHover: "hover:border-cta-orange/50" },
];

export function SelectedCaseStudies() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Case Studies" title="Selected Case Studies" subtitle="Real examples of my creative systems and workflows in action." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div key={study.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
              <div className={`group h-full p-7 rounded-2xl border border-border/40 bg-gradient-to-br ${study.color} backdrop-blur-sm transition-all duration-300 card-hover ${study.borderHover}`}>
                <div className="w-12 h-12 rounded-xl bg-card/60 border border-border/30 flex items-center justify-center mb-5">
                  <study.icon className={`w-6 h-6 ${study.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{study.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{study.description}</p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary-500 group-hover:gap-2.5 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <Link href="/case-studies">
            <Button variant="secondary" size="lg" className="group">View Case Studies<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
