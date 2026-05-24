"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Film,
  Sparkles,
  Image,
  Workflow,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Search,
  Palette,
  PenTool,
  Send,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "I edit videos that are clean, structured, and easy to watch.",
    includes: [
      "YouTube videos",
      "Reels/Shorts",
      "Talking-head videos",
      "Promotional videos",
      "Tutorials",
      "Social media videos",
      "Captions",
      "Jump cuts",
      "B-roll placement",
      "Sound cleanup",
      "Export for different platforms",
    ],
    cta: { text: "Hire Me for Video Editing", href: "/contact" },
    color: "from-primary-500/20 to-primary-600/10",
    iconColor: "text-primary-500",
    iconBg: "bg-primary-500/10",
    borderHover: "hover:border-primary-500/50",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "I create motion elements that make videos more engaging and visually clear.",
    includes: [
      "Animated text",
      "Lower thirds",
      "Callouts",
      "Kinetic typography",
      "Transitions",
      "Explainer elements",
      "Infographic-style motion",
      "Social media motion graphics",
    ],
    cta: { text: "Discuss a Motion Project", href: "/contact" },
    color: "from-accent-cyan/20 to-blue-500/10",
    iconColor: "text-accent-cyan",
    iconBg: "bg-accent-cyan/10",
    borderHover: "hover:border-accent-cyan/50",
  },
  {
    icon: Image,
    title: "Thumbnail & Graphic Design",
    description: "I design visuals that support content performance and brand presentation.",
    includes: [
      "YouTube thumbnails",
      "Social media posters",
      "Ad creatives",
      "Banners",
      "Course visuals",
      "Brand content graphics",
    ],
    cta: { text: "Design My Visuals", href: "/contact" },
    color: "from-cta-orange/20 to-yellow-500/10",
    iconColor: "text-cta-orange",
    iconBg: "bg-cta-orange/10",
    borderHover: "hover:border-cta-orange/50",
  },
  {
    icon: Workflow,
    title: "Content Workflow Support",
    description: "For clients who need more than editing, I can support the content workflow.",
    includes: [
      "Video structure",
      "Hook planning",
      "Thumbnail idea",
      "YouTube SEO basics",
      "Upload/publishing support",
      "AI-assisted content planning",
    ],
    cta: { text: "Build a Content Workflow", href: "/contact" },
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
    borderHover: "hover:border-green-500/50",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "I understand your goals, audience, platform, and content style.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "I plan the visual approach, structure, and editing style.",
  },
  {
    icon: PenTool,
    title: "Editing / Design",
    description: "I produce the content with pacing, clarity, and engagement in mind.",
  },
  {
    icon: CheckCircle,
    title: "Review",
    description: "You review, provide feedback, and I make revisions.",
  },
  {
    icon: Send,
    title: "Delivery",
    description: "Final files delivered, optimized for your target platform.",
  },
];

const faqs = [
  {
    question: "Do you work remotely?",
    answer: "Yes, I work 100% remotely with clients worldwide. I communicate through email, WhatsApp, or any platform you prefer. Most of my clients are international — from the US, UK, Canada, Australia, and across Europe.",
  },
  {
    question: "What type of videos do you edit?",
    answer: "I edit YouTube videos (talking-head, tutorials, vlogs), social media content (Reels, Shorts, TikTok), promotional videos, course content, and brand videos. My focus is clean, engaging content that holds viewer attention.",
  },
  {
    question: "Can you edit long-form and short-form content?",
    answer: "Yes. I edit both long-form YouTube videos (10–60 minutes) and short-form content (15–90 second Reels/Shorts). Each format has different pacing and editing approaches, and I'm experienced in both.",
  },
  {
    question: "Do you provide thumbnails?",
    answer: "Yes. I design YouTube thumbnails and social media graphics as a standalone service or as part of a content package. I focus on CTR optimization, clear hierarchy, and brand consistency.",
  },
  {
    question: "Can you work monthly?",
    answer: "Absolutely. I offer monthly retainer packages for clients who need ongoing editing, thumbnails, or content production support. This is ideal for YouTubers and brands with regular content schedules.",
  },
  {
    question: "What tools do you use?",
    answer: "My primary tools are Adobe Premiere Pro, After Effects, CapCut, Photoshop, and Canva. For AI workflows, I use ChatGPT, Gemini, and various AI creative tools. I choose tools based on what's best for each project.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              💼 Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional video editing, motion graphics, thumbnails, and content visuals for creators, brands, and businesses.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <div className="space-y-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`rounded-2xl border border-border/40 bg-gradient-to-br ${service.color} backdrop-blur-sm p-8 md:p-10 transition-all duration-300 ${service.borderHover}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>

                    {/* Includes */}
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Includes:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={service.cta.href}>
                      <Button variant="primary" size="md" className="group">
                        {service.cta.text}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <SectionHeading
            badge="How I Work"
            title="My Process"
            subtitle="A simple, structured approach that ensures quality and clear communication at every step."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center p-6 rounded-2xl border border-border/40 bg-card/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary-500" />
                </div>
                <span className="absolute top-3 right-3 text-xs font-mono text-primary-500/60">{String(index + 1).padStart(2, "0")}</span>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about working with me."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 rounded-xl border border-border/50 bg-card/50 text-left transition-all duration-200 hover:border-primary-500/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold pr-4 text-sm md:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Start?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Tell me about your project and let&apos;s create something great together.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
