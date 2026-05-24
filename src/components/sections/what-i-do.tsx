"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Film, Sparkles, Image, Workflow } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Clean and engaging editing for YouTube videos, reels, shorts, talking-head videos, promotional videos, tutorials, and social media content.",
    color: "from-primary-500/20 to-primary-600/10",
    iconColor: "text-primary-500",
    borderColor: "hover:border-primary-500/50",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Animated text, lower thirds, captions, callouts, transitions, kinetic typography, infographic-style motion, and modern motion elements.",
    color: "from-accent-cyan/20 to-blue-500/10",
    iconColor: "text-accent-cyan",
    borderColor: "hover:border-accent-cyan/50",
  },
  {
    icon: Image,
    title: "Thumbnail & Graphic Design",
    description:
      "Clickable thumbnails, social media posters, banners, ad creatives, and content-focused visuals that support better presentation.",
    color: "from-cta-orange/20 to-yellow-500/10",
    iconColor: "text-cta-orange",
    borderColor: "hover:border-cta-orange/50",
  },
  {
    icon: Workflow,
    title: "Content Workflow Support",
    description:
      "Hook structure, visual flow, thumbnail concept, YouTube SEO basics, publishing support, and AI-assisted creative planning.",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-500",
    borderColor: "hover:border-green-500/50",
  },
];

export function WhatIDo() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="What I Do"
          subtitle="Focused creative services that help your content look professional and perform better."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div
                className={`group relative h-full p-7 rounded-2xl border border-border/40 bg-gradient-to-br ${service.color} backdrop-blur-sm transition-all duration-300 card-hover ${service.borderColor}`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className={`w-14 h-14 rounded-xl bg-card/60 border border-border/30 flex items-center justify-center mb-5`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
