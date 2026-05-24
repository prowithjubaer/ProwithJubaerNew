"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toolsData } from "@/data/site-data";
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Calendar,
  Award,
  Target,
  Zap,
  Heart,
} from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Started Creative Journey",
    description:
      "Began learning video editing and graphic design, creating content for local businesses.",
  },
  {
    year: "2020",
    title: "First International Client",
    description:
      "Landed my first remote client from the US, editing YouTube content for a tech channel.",
  },
  {
    year: "2021",
    title: "Motion Graphics Mastery",
    description:
      "Specialized in After Effects and started creating professional motion graphics for brands.",
  },
  {
    year: "2022",
    title: "Launched First Course",
    description:
      "Created 'Complete Video Editing Masterclass' which enrolled 1000+ students in the first month.",
  },
  {
    year: "2023",
    title: "50+ Global Clients",
    description:
      "Crossed 50 international clients milestone, working with creators and brands worldwide.",
  },
  {
    year: "2024",
    title: "Pro with Jubaer Brand",
    description:
      "Established Pro with Jubaer as a premium creative brand with courses, services, and community.",
  },
];

const skills = [
  { name: "Video Editing", level: 95 },
  { name: "Motion Graphics", level: 90 },
  { name: "Color Grading", level: 92 },
  { name: "Thumbnail Design", level: 95 },
  { name: "Graphic Design", level: 85 },
  { name: "Sound Design", level: 80 },
  { name: "AI Workflow", level: 88 },
  { name: "Content Strategy", level: 85 },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Md Jubaer Ahmed</span>
            </h1>
            <p className="text-xl text-primary-400 font-medium mb-4">
              Video Editor & Motion Graphics Designer
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I&apos;m a passionate creative professional from Bangladesh,
              specializing in video editing and motion graphics. I help brands
              and content creators worldwide tell their stories through stunning
              visuals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With 5+ years of experience, I&apos;ve worked with 50+
              international clients, delivered 150+ projects, and taught 10,000+
              students through my comprehensive courses. My mission is to create
              world-class content and empower the next generation of creative
              professionals.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>Bangladesh (Remote Worldwide)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>hello@prowithjubaer.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary-500" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary-500" />
                <span>150+ Projects Completed</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Work With Me
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile card */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-cyan/10 to-primary-600/20 border border-border/50 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">MJ</span>
                  </div>
                  <h3 className="text-xl font-bold">Md Jubaer Ahmed</h3>
                  <p className="text-muted-foreground text-sm">
                    Video Editor & Motion Graphics Designer
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 border border-primary-500/20"
              >
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-medium">50+ Clients</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 border border-accent-cyan/20"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">10K+ Students</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              What I&apos;m Good At
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-sm text-primary-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              My Toolkit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Tools & Software
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {toolsData.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-sm font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">My Timeline</h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-cyan to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-background" />
                  {/* Year */}
                  <span className="absolute left-0 top-0 text-xs font-bold text-primary-500">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
