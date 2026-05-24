"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/site-data";
import { ArrowRight, Play, Sparkles, Monitor, Type, MousePointer2, Film, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        {/* Waveform lines */}
        <svg className="absolute bottom-0 left-0 right-0 h-32 opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 120">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,30 1440,60 L1440,120 L0,120 Z" fill="url(#waveGradient)" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-primary-500/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-accent-cyan/12 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/8 rounded-full blur-[180px]" />

      {/* Floating 3D Elements */}
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {heroData.badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="gradient-text">{heroData.tagline}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              {heroData.description}
            </motion.p>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {heroData.supportingLine}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              <Link href={heroData.cta.primary.href}>
                <Button variant="primary" size="lg" className="group">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  {heroData.cta.primary.text}
                </Button>
              </Link>
              <Link href={heroData.cta.secondary.href}>
                <Button variant="secondary" size="lg" className="group">
                  {heroData.cta.secondary.text}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={heroData.cta.tertiary.href}>
                <Button variant="cta" size="lg">
                  {heroData.cta.tertiary.text}
                </Button>
              </Link>
            </motion.div>

            {/* Skill Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-muted-foreground/70 font-medium tracking-wide"
            >
              {heroData.skillLine}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border/30"
            >
              {heroData.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual — Showreel Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <ShowreelCard />
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

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Play button */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[8%] glass rounded-xl p-3 border border-primary-500/20 opacity-60"
      >
        <Play className="w-5 h-5 text-primary-400 fill-primary-400/30" />
      </motion.div>

      {/* Timeline bar */}
      <motion.div
        animate={{ y: [5, -10, 5], x: [-3, 3, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[5%] glass rounded-lg px-4 py-2 border border-accent-cyan/20 opacity-50"
      >
        <div className="flex items-center gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-accent-cyan/60"
              style={{ height: `${8 + Math.random() * 16}px` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Caption block */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[5%] glass rounded-lg px-3 py-2 border border-cta-orange/20 opacity-50"
      >
        <Type className="w-4 h-4 text-cta-orange mb-1" />
        <div className="w-16 h-1.5 bg-cta-orange/30 rounded" />
        <div className="w-12 h-1.5 bg-cta-orange/20 rounded mt-1" />
      </motion.div>

      {/* Motion shapes */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] right-[10%] opacity-30"
      >
        <div className="w-12 h-12 border-2 border-primary-400/40 rounded-lg" />
      </motion.div>

      {/* Cursor */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[20%] opacity-40"
      >
        <MousePointer2 className="w-6 h-6 text-primary-400" />
      </motion.div>

      {/* Video frame */}
      <motion.div
        animate={{ y: [4, -8, 4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] left-[12%] glass rounded-lg p-2 border border-primary-500/15 opacity-40"
      >
        <Film className="w-5 h-5 text-primary-400" />
      </motion.div>

      {/* Layers */}
      <motion.div
        animate={{ y: [-5, 7, -5], rotate: [0, 5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[40%] right-[3%] opacity-35"
      >
        <Layers className="w-8 h-8 text-accent-cyan" />
      </motion.div>
    </div>
  );
}

function ShowreelCard() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-3xl blur-2xl scale-95" />

      {/* Main Card */}
      <div className="relative rounded-3xl overflow-hidden border border-border/50 glass">
        {/* Fake editor UI */}
        <div className="flex flex-col">
          {/* Top bar */}
          <div className="h-10 bg-dark-surface/90 flex items-center px-4 gap-2 border-b border-border/30">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              showreel_2024_final.drp
            </span>
          </div>

          {/* Preview area */}
          <div className="relative aspect-video bg-gradient-to-br from-dark-bg via-primary-900/40 to-dark-bg flex items-center justify-center">
            {/* Play overlay */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-500/40 cursor-pointer group"
            >
              <Play className="w-8 h-8 text-primary-300 ml-1 group-hover:text-white transition-colors fill-primary-300/20" />
            </motion.div>

            {/* Overlay badges */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-mono border border-green-500/20">
              4K 60fps
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-primary-500/20 text-primary-300 text-xs font-mono border border-primary-500/20">
              2024 Showreel
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-white/70 font-mono">03:24</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-20 bg-dark-surface/90 border-t border-border/30 p-3">
            <div className="flex items-center gap-1 mb-2">
              <Monitor className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground font-mono">Timeline</span>
            </div>
            <div className="flex gap-0.5 h-8">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    background: i < 5 
                      ? `hsl(${260 + i * 5}, 70%, ${35 + i * 3}%)`
                      : i < 10 
                      ? `hsl(${185 + i * 3}, 60%, ${30 + i * 2}%)` 
                      : `hsl(${260 + i * 4}, 50%, ${25 + i * 2}%)`,
                    height: `${50 + Math.sin(i * 0.8) * 30 + 20}%`,
                    alignSelf: "flex-end",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges around card */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 border border-primary-500/20 shadow-lg"
      >
        <span className="text-sm font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-primary-400" />
          <span className="text-primary-300">150+ Projects</span>
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 border border-accent-cyan/20 shadow-lg"
      >
        <span className="text-sm font-semibold flex items-center gap-1.5">
          <span className="text-yellow-400">⭐</span>
          <span className="text-accent-cyan">5.0 Client Rating</span>
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [-3, 6, -3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 border border-green-500/20 shadow-lg"
      >
        <span className="text-xs font-semibold text-green-400">50+ Clients</span>
      </motion.div>
    </div>
  );
}
