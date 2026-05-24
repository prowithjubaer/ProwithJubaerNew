"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Film,
  Sparkles,
  Image,
  Workflow,
  Bot,
  Globe,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Users,
  Heart,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const focusAreas = [
  { icon: Film, label: "Video Editing" },
  { icon: Sparkles, label: "Motion Graphics" },
  { icon: Image, label: "Thumbnail Design" },
  { icon: Globe, label: "Social Media Content" },
  { icon: Workflow, label: "Content Workflow" },
  { icon: Bot, label: "AI-assisted Creative Production" },
];

const workingStyle = [
  { icon: CheckCircle, text: "Clean and organized" },
  { icon: Target, text: "Detail-focused" },
  { icon: Zap, text: "Fast learner" },
  { icon: Lightbulb, text: "Creative but practical" },
  { icon: Globe, text: "Comfortable with remote work" },
  { icon: Users, text: "Able to work independently" },
  { icon: Heart, text: "Focused on long-term improvement" },
];

const tools = [
  { name: "Adobe Premiere Pro", category: "Main" },
  { name: "CapCut", category: "Main" },
  { name: "After Effects", category: "Main" },
  { name: "Photoshop", category: "Main" },
  { name: "Canva", category: "Supporting" },
  { name: "Illustrator", category: "Supporting" },
  { name: "ChatGPT", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "AI Voice Tools", category: "AI" },
  { name: "AI Image Tools", category: "AI" },
  { name: "Figma", category: "Supporting" },
  { name: "WordPress", category: "Additional" },
];

const timeline = [
  {
    year: "2021",
    title: "Started Creative Journey",
    description: "Began learning video editing and graphic design, exploring creative tools and techniques.",
  },
  {
    year: "2022",
    title: "First Client Projects",
    description: "Started working with content creators and small brands on video editing and thumbnail design.",
  },
  {
    year: "2023",
    title: "Motion Graphics & Remote Work",
    description: "Expanded into motion graphics and started working with international remote clients.",
  },
  {
    year: "2024",
    title: "AI Integration & Course Creation",
    description: "Integrated AI tools into creative workflow and launched Bangla skill courses for learners.",
  },
  {
    year: "2025",
    title: "Pro with Jubaer Brand",
    description: "Established Pro with Jubaer as a creative brand — services, portfolio, courses, and community.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Me
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-5 gap-10 items-start"
          >
            {/* Profile Visual */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-cyan/10 to-primary-600/20 border border-border/50 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">MJ</span>
                    </div>
                    <h3 className="text-lg font-bold">Md Jubaer Ahmed</h3>
                    <p className="text-sm text-muted-foreground">Video Editor & Motion Graphics Designer</p>
                    <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>Bangladesh</span>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-2 border border-primary-500/20"
                >
                  <span className="text-xs font-semibold text-primary-400">Remote Worldwide</span>
                </motion.div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground font-medium">
                I&apos;m Md Jubaer Ahmed, a Video Editor and Motion Graphics Designer from Bangladesh.
              </p>
              <p>
                My main focus is creating clean, engaging, and retention-focused video content for creators, brands, and businesses.
              </p>
              <p>
                I work with short-form videos, long-form YouTube content, reels, shorts, motion graphics, captions, thumbnails, social media visuals, and content-focused design.
              </p>
              <p>
                What makes my work different is that I understand both the creative and strategic side of content. I don&apos;t only edit videos—I think about viewer attention, pacing, visual clarity, hook, thumbnail concept, and platform-specific presentation.
              </p>
              <p>
                I also use AI-assisted workflows for research, scripting support, content ideas, voice workflow, image ideas, SEO support, and faster creative planning. But my core focus remains video editing, motion graphics, and design.
              </p>
              <p>
                Outside my main creative work, I enjoy exploring web design, no-code development, and digital tools as additional creative interests.
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span>Bangladesh (Remote Worldwide)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <span>hello@prowithjubaer.com</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group">
                    Work With Me
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* My Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading badge="Focus" title="My Focus" align="left" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/40 bg-card/50 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-5 h-5 text-primary-500" />
                </div>
                <span className="text-sm font-medium">{area.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Working Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading badge="Style" title="My Working Style" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {workingStyle.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/40 bg-card/30"
              >
                <item.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools I Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading badge="Toolkit" title="Tools I Use" align="left" />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="px-4 py-2.5 rounded-xl border border-border/50 bg-card/50 text-sm font-medium hover:border-primary-500/40 hover:bg-primary-500/5 transition-all cursor-default"
              >
                {tool.name}
                <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary-500/10 text-primary-400 font-medium">
                  {tool.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeading badge="Journey" title="Experience Timeline" align="left" />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-cyan/50 to-primary-500/20" />

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-primary-500 border-4 border-[var(--background)]" />

                  <div className="p-5 rounded-xl border border-border/40 bg-card/50">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-primary-500/10 text-primary-500">{item.year}</span>
                      <h4 className="font-bold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Want to Know More?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Download my resume for a detailed overview, or get in touch to discuss a project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="group">
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost" size="lg">
                View Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
