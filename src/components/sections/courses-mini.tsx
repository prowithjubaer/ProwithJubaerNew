"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export function CoursesMini() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-border/40 bg-gradient-to-br from-primary-500/5 via-card/50 to-cta-orange/5 backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative bg-gradient-to-br from-primary-900/60 via-primary-800/40 to-cta-orange/10 flex items-center justify-center p-8 min-h-[220px]">
              <motion.div animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }} transition={{ duration: 5, repeat: Infinity }} className="relative">
                <div className="w-40 h-52 rounded-xl bg-gradient-to-br from-primary-600 to-cta-orange shadow-2xl flex flex-col items-center justify-center p-4 border border-white/10">
                  <Sparkles className="w-8 h-8 text-white/80 mb-3" />
                  <span className="text-white text-xs font-bold text-center leading-tight">AI Expert Course</span>
                  <span className="text-white/60 text-[9px] text-center mt-1">Content Creation & Freelancing</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 rounded-full blur-md" />
              </motion.div>
            </div>
            <div className="md:col-span-3 p-7 md:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary-500" />
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Practical Digital Skill Courses</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">I also create Bangla digital skill courses for learners in Bangladesh.</p>
              <h3 className="text-xl md:text-2xl font-bold mb-3">AI Expert Course for Content Creation & Freelancing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">Learn how to use AI for content creation, design, video, YouTube SEO, blogging, website planning, and digital product ideas.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Bangla Course", "Beginner Friendly", "Practical Projects", "Templates Included"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">{tag}</span>
                ))}
              </div>
              <Link href="/courses" className="self-start">
                <Button variant="cta" size="md" className="group">Explore Course<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
