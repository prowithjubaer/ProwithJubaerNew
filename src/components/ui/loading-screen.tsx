"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]">
      <div className="relative flex flex-col items-center">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          {/* Glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border-2 border-transparent"
            style={{
              background: "conic-gradient(from 0deg, transparent 60%, rgba(139,92,246,0.3) 80%, rgba(6,182,212,0.3) 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "2px",
              borderRadius: "9999px",
            }}
          />

          {/* Logo */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center shadow-lg shadow-primary-500/30">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Play button orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 rounded-full bg-cta-orange/20 flex items-center justify-center border border-cta-orange/30">
                <Play className="w-3 h-3 text-cta-orange ml-0.5" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Brand text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-xl font-bold">
            <span className="gradient-text">Pro</span>
            <span className="text-foreground"> with </span>
            <span className="gradient-text">Jubaer</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Video Editor & Motion Graphics Designer
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-1.5 mt-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 rounded-full bg-primary-500"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
