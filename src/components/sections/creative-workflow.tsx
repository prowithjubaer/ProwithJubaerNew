"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Search,
  Layout,
  Film,
  Sparkles,
  Send,
  Bot,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "I understand the video goal, audience, platform, brand style, and expected outcome.",
    color: "from-primary-500 to-primary-600",
  },
  {
    number: "02",
    icon: Layout,
    title: "Structure",
    description:
      "I organize footage, script, references, visuals, and project direction.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "03",
    icon: Film,
    title: "Edit",
    description:
      "I edit with pacing, hook, clarity, captions, sound, and viewer attention in mind.",
    color: "from-accent-cyan to-blue-500",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Enhance",
    description:
      "I add motion graphics, visuals, design elements, and platform-specific improvements.",
    color: "from-purple-500 to-primary-500",
  },
  {
    number: "05",
    icon: Send,
    title: "Deliver",
    description:
      "I export clean, ready-to-publish files for YouTube, Reels, Shorts, ads, or social media.",
    color: "from-green-500 to-emerald-600",
  },
  {
    number: "06",
    icon: Bot,
    title: "Support with AI",
    description:
      "When useful, I use AI for research, script support, idea generation, visual planning, SEO support, and faster creative workflow.",
    color: "from-cta-orange to-yellow-500",
  },
];

export function CreativeWorkflow() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Process"
          title="My Creative Workflow"
          subtitle="A structured approach that ensures quality, consistency, and timely delivery for every project."
        />

        {/* Desktop: Horizontal Process Line */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/50 via-accent-cyan/50 to-cta-orange/50" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="text-center"
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.1, type: "spring" }}
                    className="relative mx-auto mb-6"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mx-auto`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-border flex items-center justify-center text-[10px] font-bold">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-cyan/50 to-cta-orange/50" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Node */}
                  <div className={`absolute left-3 top-4 w-7 h-7 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                    <step.icon className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="p-5 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-primary-500">
                        Step {step.number}
                      </span>
                      <h4 className="font-bold">{step.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
