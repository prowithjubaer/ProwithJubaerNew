"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Play, Download, Mail } from "lucide-react";

const floatingLabels = [
  { text: "Captions", position: "top-6 left-6" },
  { text: "Motion Text", position: "top-6 right-6" },
  { text: "B-roll", position: "bottom-20 left-6" },
  { text: "Thumbnails", position: "bottom-20 right-6" },
  { text: "Shorts", position: "top-1/2 -translate-y-1/2 left-4" },
  { text: "YouTube", position: "top-1/2 -translate-y-1/2 right-4" },
];

export function ShowreelSection() {
  return (
    <section id="showreel" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Showreel"
          title="Creative Showreel"
          subtitle="A quick preview of my editing, motion graphics, thumbnails, and content-focused visual work."
        />

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glassmorphism frame */}
          <div className="relative rounded-3xl overflow-hidden border border-border/50 glass p-2 md:p-3">
            {/* Inner video area */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-dark-bg via-primary-900/40 to-dark-bg">
              {/* Play button center */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-pointer"
                >
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-primary-500/30 blur-xl group-hover:bg-primary-500/50 transition-all scale-150" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-500/20 backdrop-blur-md flex items-center justify-center border-2 border-primary-500/50 group-hover:border-primary-400 transition-colors">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-white/20" />
                  </div>
                </motion.button>
              </div>

              {/* Floating labels */}
              {floatingLabels.map((label, i) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`absolute ${label.position} hidden md:block`}
                >
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-border/30 text-muted-foreground">
                    {label.text}
                  </span>
                </motion.div>
              ))}

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Duration label */}
              <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/60 text-white text-xs font-mono">
                03:24
              </div>
            </div>
          </div>

          {/* Decorative glow behind */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 via-accent-cyan/10 to-primary-500/10 rounded-[2rem] blur-2xl -z-10 opacity-60" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
