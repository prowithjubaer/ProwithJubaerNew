"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/site-data";
import { ArrowRight, Play, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[128px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[200px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for Remote Projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-muted-foreground text-2xl sm:text-3xl block mb-2">
                {heroData.greeting}
              </span>
              <span className="gradient-text">{heroData.name}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold text-primary-400 mb-4"
            >
              {heroData.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href={heroData.cta.primary.href}>
                <Button variant="primary" size="lg" className="group">
                  {heroData.cta.primary.text}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={heroData.cta.secondary.href}>
                <Button variant="secondary" size="lg">
                  {heroData.cta.secondary.text}
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {heroData.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* 3D Card Effect */}
            <div className="relative">
              {/* Main visual card */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 via-accent-cyan to-primary-500 p-[2px] animate-spin-slow opacity-50">
                  <div className="w-full h-full rounded-3xl bg-dark-bg dark:bg-dark-bg" />
                </div>

                {/* Inner content */}
                <div className="absolute inset-4 rounded-2xl glass overflow-hidden">
                  {/* Fake video editor UI */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Toolbar */}
                    <div className="h-10 bg-dark-surface/80 flex items-center px-4 gap-2 border-b border-border/20">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-3 text-xs text-muted-foreground font-mono">
                        project_final_v3.drp
                      </span>
                    </div>
                    {/* Preview area */}
                    <div className="flex-1 relative bg-gradient-to-br from-primary-900/30 to-dark-bg flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center border-2 border-primary-500/40">
                        <Play className="w-8 h-8 text-primary-400 ml-1" />
                      </div>
                      {/* Floating elements */}
                      <div className="absolute top-6 right-6 px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-mono">
                        4K 60fps
                      </div>
                      <div className="absolute bottom-16 left-6 px-3 py-1 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-mono">
                        After Effects
                      </div>
                    </div>
                    {/* Timeline */}
                    <div className="h-24 bg-dark-surface/80 border-t border-border/20 p-3">
                      <div className="flex gap-1 h-full">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              background: `hsl(${260 + i * 10}, 70%, ${30 + i * 3}%)`,
                              height: `${40 + Math.random() * 60}%`,
                              alignSelf: "flex-end",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 border border-primary-500/20"
              >
                <span className="text-sm font-semibold text-primary-400">
                  🎬 150+ Projects
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 border border-accent-cyan/20"
              >
                <span className="text-sm font-semibold text-accent-cyan">
                  ⭐ 5.0 Rating
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-500/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
