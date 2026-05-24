"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Scissors,
  Layout,
  Image,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Layers,
} from "lucide-react";

const caseStudies = [
  {
    id: "short-form-editing",
    icon: Scissors,
    title: "Short-form Video Editing System",
    overview:
      "This project focused on creating short-form content for Reels, Shorts, and social media.",
    problem:
      "Short-form videos need to grab attention quickly. Slow openings and weak visual rhythm can make viewers skip.",
    role: [
      "Short-form editing",
      "Hook structure",
      "Captions",
      "Motion text",
      "Sound effects",
      "Social media formatting",
    ],
    process:
      "I created fast pacing, clean captions, zooms, motion text, and platform-specific formatting.",
    outcome:
      "The final videos became more scroll-stopping, visually clear, and easier to watch.",
    color: "from-primary-500/15 to-primary-600/5",
    iconColor: "text-primary-500",
    iconBg: "bg-primary-500/10",
    borderHover: "hover:border-primary-500/50",
  },
  {
    id: "youtube-workflow",
    icon: Layout,
    title: "YouTube Content Workflow",
    overview:
      "This project focused on turning raw ideas into organized YouTube-ready content.",
    problem:
      "YouTube content needs more than editing. It needs structure, thumbnail concept, SEO basics, and consistent publishing.",
    role: [
      "Video editing",
      "Content structure",
      "Thumbnail concept",
      "SEO title/description support",
      "Publishing workflow support",
    ],
    process:
      "I built a repeatable system from idea → structure → edit → thumbnail → SEO → publish, making the entire workflow consistent and efficient.",
    outcome:
      "A more organized and repeatable content production system.",
    color: "from-accent-cyan/15 to-blue-500/5",
    iconColor: "text-accent-cyan",
    iconBg: "bg-accent-cyan/10",
    borderHover: "hover:border-accent-cyan/50",
  },
  {
    id: "thumbnail-design-system",
    icon: Image,
    title: "Thumbnail & Visual Design System",
    overview:
      "This project focused on creating clickable thumbnails and social media visuals.",
    problem:
      "Many videos fail to attract clicks because the thumbnail is not clear, emotional, or visually focused.",
    role: [
      "Thumbnail concept",
      "Text hierarchy",
      "Color direction",
      "Visual layout",
      "Brand consistency",
      "Social media design",
    ],
    process:
      "I developed a visual system with bold hierarchy, strong contrast, emotion-driven faces, and content-focused design that can be replicated across all videos.",
    outcome:
      "The content became visually stronger, cleaner, and more clickable.",
    color: "from-cta-orange/15 to-yellow-500/5",
    iconColor: "text-cta-orange",
    iconBg: "bg-cta-orange/10",
    borderHover: "hover:border-cta-orange/50",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              📊 Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A closer look at my creative process, editing decisions, and content workflow.
            </p>
          </motion.div>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              id={study.id}
            >
              <div className={`rounded-3xl border border-border/40 bg-gradient-to-br ${study.color} backdrop-blur-sm overflow-hidden`}>
                {/* Header */}
                <div className="p-8 md:p-10 pb-0">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${study.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <study.icon className={`w-7 h-7 ${study.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{study.title}</h2>
                      <p className="text-muted-foreground">{study.overview}</p>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 p-8 md:p-10 pt-4">
                  {/* Problem */}
                  <div className="p-6 rounded-2xl border border-border/40 bg-card/40">
                    <div className="flex items-center gap-2.5 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <h3 className="font-bold">Problem</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>

                  {/* My Role */}
                  <div className="p-6 rounded-2xl border border-border/40 bg-card/40">
                    <div className="flex items-center gap-2.5 mb-3">
                      <Layers className="w-5 h-5 text-primary-500" />
                      <h3 className="font-bold">My Role</h3>
                    </div>
                    <div className="space-y-1.5">
                      {study.role.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="p-6 rounded-2xl border border-border/40 bg-card/40">
                    <div className="flex items-center gap-2.5 mb-3">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-bold">Process</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.process}</p>
                  </div>

                  {/* Outcome */}
                  <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
                    <div className="flex items-center gap-2.5 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="font-bold">Outcome</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Want Results Like These?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let&apos;s discuss your project and build a creative system that works for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
