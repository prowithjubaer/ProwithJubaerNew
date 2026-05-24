"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Layers,
  Target,
  Mail,
} from "lucide-react";

const caseStudyDetails: Record<string, {
  title: string;
  overview: string;
  problem: string;
  role: string[];
  process: string[];
  outcome: string;
}> = {
  "short-form-editing": {
    title: "Short-form Video Editing System",
    overview:
      "This project focused on creating short-form content for Reels, Shorts, and social media. The goal was to develop a fast, repeatable editing approach that makes every second count — grabbing attention immediately and keeping viewers watching until the end.",
    problem:
      "Short-form videos need to grab attention quickly. Slow openings and weak visual rhythm can make viewers skip. The existing content had low completion rates because the editing lacked hooks, visual variety, and platform-optimized formatting.",
    role: [
      "Short-form editing with fast pacing",
      "Hook structure — strongest moment first",
      "Animated captions for accessibility and engagement",
      "Motion text overlays for visual rhythm",
      "Strategic sound effect placement",
      "Platform-specific formatting (9:16, safe zones)",
      "Multi-platform export (Reels, Shorts, TikTok)",
    ],
    process: [
      "Analyzed top-performing short-form content in the niche",
      "Identified the strongest hook moment from raw footage",
      "Restructured the video to lead with the hook",
      "Applied jump cuts to remove all dead space",
      "Added animated captions with emphasis styling on keywords",
      "Placed zoom-in effects on key emotional moments",
      "Added motion text overlays for visual variation",
      "Inserted sound effects at transition points",
      "Formatted for 9:16 vertical with text-safe zones",
      "Created platform-specific variations for Reels, Shorts, TikTok",
    ],
    outcome:
      "The final videos became more scroll-stopping, visually clear, and easier to watch. Completion rates increased significantly, engagement metrics improved, and the editing style became a repeatable template for ongoing content production.",
  },
  "youtube-workflow": {
    title: "YouTube Content Workflow",
    overview:
      "This project focused on turning raw ideas into organized YouTube-ready content. It wasn't just about editing a single video — it was about building a complete, repeatable content production system from idea to publish.",
    problem:
      "YouTube content needs more than editing. It needs structure, thumbnail concept, SEO basics, and consistent publishing. The creator was spending too much time on each video with inconsistent results and no scalable system.",
    role: [
      "Full video editing with retention-focused techniques",
      "Content structure planning (hook → body → CTA)",
      "Thumbnail concept direction and design feedback",
      "SEO-optimized title and description writing support",
      "Publishing workflow setup and scheduling",
      "Analytics review and optimization suggestions",
    ],
    process: [
      "Audited existing content and identified improvement areas",
      "Designed a content structure framework for consistency",
      "Created an editing template with branded elements",
      "Built a thumbnail concept process (3 options per video)",
      "Implemented SEO research step for titles and descriptions",
      "Set up batch recording schedule for efficiency",
      "Created a pre-publish quality checklist",
      "Established weekly upload cadence with buffer content",
      "Documented the entire workflow for team scalability",
    ],
    outcome:
      "A more organized and repeatable content production system. Production time dropped significantly while quality remained consistent. The channel achieved regular weekly uploads and steady growth through systematic content production.",
  },
  "thumbnail-design-system": {
    title: "Thumbnail & Visual Design System",
    overview:
      "This project focused on creating clickable thumbnails and social media visuals. Beyond individual designs, the goal was to build a visual system — a set of principles and templates that ensure every thumbnail is optimized for clicks while maintaining brand consistency.",
    problem:
      "Many videos fail to attract clicks because the thumbnail is not clear, emotional, or visually focused. The existing thumbnails had low CTR, inconsistent styling, and lacked the visual hierarchy needed to stand out in crowded feeds.",
    role: [
      "Thumbnail concept ideation and direction",
      "Text hierarchy design — readable at all sizes",
      "Color direction using contrast and psychology",
      "Visual layout and composition optimization",
      "Brand consistency across all thumbnails",
      "Social media graphic design for cross-platform use",
      "A/B variant creation and CTR tracking",
    ],
    process: [
      "Analyzed competitor thumbnails and top-performing designs in the niche",
      "Identified patterns: emotion, curiosity gaps, contrast, minimal text",
      "Created a thumbnail style guide with colors, fonts, and layout rules",
      "Designed master templates for different video types",
      "Applied color psychology — complementary and high-contrast palettes",
      "Directed facial expression photography for emotional impact",
      "Optimized text — 3-5 words maximum, readable at mobile size",
      "Created A/B variants for testing",
      "Tracked CTR data and refined approach based on performance",
    ],
    outcome:
      "The content became visually stronger, cleaner, and more clickable. CTR improved consistently across videos, the channel developed a recognizable visual brand, and the template system made producing new thumbnails faster and more predictable.",
  },
};

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const study = caseStudyDetails[id];

  if (!study) {
    return (
      <div className="pt-24 pb-16 text-center min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-primary-500 hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const otherStudies = Object.entries(caseStudyDetails).filter(([key]) => key !== id);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4 inline-block">
            Case Study
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {study.title}
          </h1>
        </motion.div>

        {/* Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-2xl font-bold">Overview</h2>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold">Problem</h2>
          </div>
          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
            <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
          </div>
        </motion.div>

        {/* My Role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-accent-cyan" />
            </div>
            <h2 className="text-2xl font-bold">My Role</h2>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {study.role.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold">Process</h2>
          </div>
          <div className="space-y-3">
            {study.process.map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/30">
                <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-500">
                  {i + 1}
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Outcome</h2>
          </div>
          <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
            <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
          </div>
        </motion.div>

        {/* Other Case Studies */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-12">
          <h3 className="text-xl font-bold mb-5">Other Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherStudies.map(([key, other]) => (
              <Link key={key} href={`/case-studies/${key}`}>
                <div className="group p-5 rounded-xl border border-border/50 bg-card/50 card-hover">
                  <h4 className="font-bold group-hover:text-primary-500 transition-colors mb-2">{other.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{other.overview}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs text-primary-500 font-medium">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center p-8 rounded-2xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5">
          <h3 className="text-2xl font-bold mb-3">Need a Similar System?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how I can help build a creative workflow for your content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">View Portfolio</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
