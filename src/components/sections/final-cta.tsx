"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent-cyan/20 rounded-full blur-3xl" />
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
              Need a Video Editor or Motion Graphics Designer?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Let&apos;s create clean, engaging, and professional content for your brand, channel, or business.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90 shadow-xl hover:-translate-y-0.5 transition-all font-bold"><Mail className="w-4 h-4 mr-2" />Contact Me</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold">View Portfolio<ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-transparent border-2 border-white/50 text-white/90 hover:bg-white/10 hover:border-white font-bold"><Download className="w-4 h-4 mr-2" />Download Resume</Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
