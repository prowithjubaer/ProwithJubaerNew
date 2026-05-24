"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  ExternalLink,
  User,
  Wrench,
  Target,
  AlertCircle,
  Layers,
  CheckCircle,
  Mail,
} from "lucide-react";

const portfolioDetails: Record<string, {
  title: string;
  category: string;
  overview: string;
  role: string;
  tools: string[];
  challenge: string;
  process: string[];
  outcome: string;
  clientType: string;
  hasVideo: boolean;
  hasBefore: boolean;
}> = {
  "youtube-talking-head": {
    title: "YouTube Talking-Head Edit",
    category: "Video Editing",
    overview: "A full talking-head video edit for a YouTube creator, focused on viewer retention through clean cuts, captions, B-roll integration, zoom effects, and sound cleanup. The goal was to transform raw footage into a structured, engaging video optimized for YouTube.",
    role: "Full video editing including jump cuts, caption placement, B-roll integration, sound cleanup, intro/outro structure, color correction, and platform-specific export.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    challenge: "The raw footage was a 45-minute single-camera recording with minimal visual variety. The challenge was to maintain viewer attention throughout using only editing techniques — without expensive gear or complex setups.",
    process: [
      "Reviewed raw footage and identified key moments",
      "Created rough cut with jump cuts for pacing",
      "Added B-roll and screen recordings for visual variety",
      "Placed captions on key points for accessibility",
      "Applied zoom effects on emphasis moments",
      "Cleaned audio — removed background noise and balanced levels",
      "Added intro hook sequence and end screen",
      "Color corrected for consistent, clean look",
      "Exported in YouTube-optimized format",
    ],
    outcome: "The final video achieved 62% average view duration (above channel average of 45%), received positive comments about the editing quality, and helped the creator establish a consistent visual style for future videos.",
    clientType: "YouTube Creator",
    hasVideo: true,
    hasBefore: true,
  },
  "short-form-reel": {
    title: "Short-form Reel Edit",
    category: "Shorts/Reels",
    overview: "A fast-paced, scroll-stopping short-form video edit designed for Instagram Reels and YouTube Shorts. The focus was on hook-first editing, animated captions, motion text, sound effects, and platform-specific formatting to maximize engagement.",
    role: "Short-form editing including hook creation, dynamic captions, motion text overlays, zoom/pan effects, sound effect placement, pacing optimization, and multi-platform export.",
    tools: ["CapCut", "Premiere Pro", "After Effects"],
    challenge: "Short-form content has less than 1 second to capture attention. The raw content was a standard talking clip with no visual hooks. The challenge was to transform it into something that stops the scroll immediately.",
    process: [
      "Identified the strongest hook moment in raw footage",
      "Restructured content to lead with the hook",
      "Added animated captions with emphasis styling",
      "Applied zoom-in effects on key words",
      "Placed motion text overlays for visual rhythm",
      "Added strategic sound effects for engagement",
      "Optimized pacing — removed all dead space",
      "Formatted for 9:16 vertical with safe zones",
      "Created variations for Reels, Shorts, and TikTok",
    ],
    outcome: "The reel achieved 3x higher engagement than the creator's previous posts, with significantly improved completion rate and shares. The editing style became the template for their ongoing short-form content.",
    clientType: "Content Creator",
    hasVideo: true,
    hasBefore: true,
  },
  "motion-graphics-promo": {
    title: "Motion Graphics Promo",
    category: "Motion Graphics",
    overview: "A 60-second animated promotional video with kinetic typography, UI animations, shape morphing, and modern motion design. Created for a SaaS product launch to explain features in an engaging, non-technical way.",
    role: "Full motion design including concept development, storyboarding, animation, kinetic typography, sound design integration, and multi-format delivery.",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    challenge: "The client needed to explain a complex AI product in 60 seconds without boring the viewer or using overly technical language. The animation needed to feel modern, premium, and on-brand.",
    process: [
      "Creative brief and concept alignment with client",
      "Script review and visual storyboard creation",
      "Designed key visual frames and style guide",
      "Animated kinetic typography for key messages",
      "Created UI mockup animations showing product",
      "Added shape transitions and morphing effects",
      "Integrated voiceover with visual timing",
      "Applied sound design and music",
      "Delivered in multiple formats (16:9, 9:16, 1:1)",
    ],
    outcome: "The video generated 2.5M+ views across platforms, contributed to a 340% increase in sign-ups during launch week, and became the centerpiece of the client's marketing campaign.",
    clientType: "SaaS Brand",
    hasVideo: true,
    hasBefore: false,
  },
  "thumbnail-collection": {
    title: "Thumbnail Design Collection",
    category: "Thumbnails",
    overview: "A series of 10 high-CTR YouTube thumbnails designed for a finance education channel. Each thumbnail was strategically designed using color psychology, text hierarchy, facial expressions, and composition principles to maximize clicks.",
    role: "Complete thumbnail design including concept ideation, photography direction, text placement, color grading, A/B variant creation, and CTR optimization based on analytics feedback.",
    tools: ["Photoshop", "Figma", "Canva"],
    challenge: "The channel's existing thumbnails had an average 3.2% CTR. The goal was to redesign the visual approach to consistently achieve 7%+ CTR while maintaining brand consistency across videos.",
    process: [
      "Analyzed top-performing thumbnails in the finance niche",
      "Identified patterns: emotion, contrast, curiosity gaps",
      "Created a thumbnail style guide for the channel",
      "Designed 10 thumbnails with A/B variants",
      "Applied color psychology — contrast and complementary colors",
      "Optimized text hierarchy — readable at small sizes",
      "Directed facial expression photography for emotion",
      "Tested variants and tracked CTR performance",
      "Refined approach based on analytics data",
    ],
    outcome: "Average CTR increased from 3.2% to 8.7% within the first month. Several thumbnails exceeded 10% CTR. The consistent visual style also improved channel brand recognition.",
    clientType: "YouTube Channel",
    hasVideo: false,
    hasBefore: true,
  },
  "social-media-poster": {
    title: "Social Media Poster Design",
    category: "Social Media Design",
    overview: "A complete social media content design package for a fashion brand, including Instagram posts, story templates, carousel layouts, and promotional graphics. Focused on brand consistency and scroll-stopping visual appeal.",
    role: "Visual design including brand alignment, content layout, typography, color palette application, template creation, and multi-format delivery for Instagram, Facebook, and Pinterest.",
    tools: ["Photoshop", "Canva", "Figma"],
    challenge: "The brand had inconsistent visual presence across social platforms. Posts looked different every time, with no recognizable style. They needed a cohesive visual system that could be maintained long-term.",
    process: [
      "Brand audit — reviewed existing visuals and guidelines",
      "Created social media style guide with colors, fonts, layouts",
      "Designed 15 post templates in various formats",
      "Created story templates with interactive elements",
      "Designed carousel templates for educational content",
      "Produced promotional graphics for campaigns",
      "Delivered editable templates for ongoing use",
      "Provided usage guidelines and best practices",
    ],
    outcome: "The brand's Instagram engagement increased 45% within two months. The consistent visual identity made the feed look premium and professional, attracting brand collaboration opportunities.",
    clientType: "Fashion Brand",
    hasVideo: false,
    hasBefore: true,
  },
  "course-video-edit": {
    title: "Course Video Edit",
    category: "Video Editing",
    overview: "Professional editing for an online course with 40+ lessons. Focused on clean structure, clear screen recording integration, animated callouts, chapter markers, and consistent visual quality across all modules.",
    role: "Course video editing including structure, transitions, screen recording cleanup, caption placement, callout animations, intro/outro consistency, and batch export optimization.",
    tools: ["Premiere Pro", "After Effects", "CapCut"],
    challenge: "Course content needs to be educational AND engaging. Long-form educational videos often suffer from monotony. The challenge was to maintain visual interest across 40+ lessons while keeping production efficient.",
    process: [
      "Established consistent visual template for all lessons",
      "Created intro/outro sequences and lower thirds",
      "Edited each lesson for clarity and pacing",
      "Integrated screen recordings with presenter footage",
      "Added animated callouts and highlight effects",
      "Placed chapter markers for easy navigation",
      "Applied consistent color grading across all modules",
      "Batch exported with consistent settings",
      "Created thumbnail templates for each lesson",
    ],
    outcome: "The course achieved a 78% completion rate (industry average is 15%). Students specifically praised the visual quality and how easy the content was to follow. The production system allowed efficient creation of future courses.",
    clientType: "Course Creator",
    hasVideo: true,
    hasBefore: false,
  },
  "content-workflow-project": {
    title: "Content Workflow Project",
    category: "Case Studies",
    overview: "A complete YouTube content production system built for a creator who needed structure, consistency, and quality across their weekly uploads. This wasn't just editing — it was building a repeatable creative workflow.",
    role: "End-to-end content workflow including video structure planning, editing, thumbnail concepts, title/description SEO support, upload scheduling, and workflow documentation.",
    tools: ["Premiere Pro", "Photoshop", "ChatGPT", "Notion"],
    challenge: "The creator was spending 20+ hours per video with inconsistent quality and no repeatable system. They needed a workflow that could produce quality content faster while maintaining high standards.",
    process: [
      "Audited existing workflow and identified bottlenecks",
      "Designed templated editing workflow for consistency",
      "Created content structure framework (hook → body → CTA)",
      "Built thumbnail concept process with quick iteration",
      "Implemented SEO research workflow for titles/descriptions",
      "Set up batch recording and editing schedule",
      "Created quality checklist for each video",
      "Documented entire workflow for future use",
    ],
    outcome: "Production time reduced from 20+ hours to 8 hours per video. Upload consistency improved from sporadic to weekly. Channel grew 40% in 3 months due to consistent quality and frequency.",
    clientType: "YouTube Brand",
    hasVideo: true,
    hasBefore: false,
  },
  "ai-content-production": {
    title: "AI-assisted Content Production Workflow",
    category: "Case Studies",
    overview: "An innovative project integrating AI tools into the creative production pipeline. Used AI for research, scripting support, visual concept generation, and workflow automation while maintaining human creative direction throughout.",
    role: "AI workflow architect — designed and implemented AI-assisted processes for research, scripting, image generation, editing suggestions, and SEO optimization within a traditional creative pipeline.",
    tools: ["ChatGPT", "Premiere Pro", "Midjourney", "CapCut", "Runway"],
    challenge: "The digital agency needed to produce more content without increasing team size. They wanted to explore AI integration but didn't know how to maintain quality and brand voice while using AI tools.",
    process: [
      "Mapped existing workflow and identified AI-compatible steps",
      "Integrated ChatGPT for research and script drafts",
      "Used Midjourney for visual concept exploration",
      "Applied AI voice tools for rough voiceover drafts",
      "Used Runway for quick visual effect prototyping",
      "Maintained human review at every creative decision point",
      "Built quality control checkpoints throughout",
      "Documented the hybrid human-AI workflow",
      "Trained the team on effective AI prompting",
    ],
    outcome: "Content production speed increased 3x while maintaining quality standards. The team now uses AI as a creative accelerator — handling research and drafts so humans can focus on creative decisions and quality.",
    clientType: "Digital Agency",
    hasVideo: true,
    hasBefore: false,
  },
};

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = portfolioDetails[id];

  if (!project) {
    return (
      <div className="pt-24 pb-16 text-center min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-primary-500 hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = Object.entries(portfolioDetails)
    .filter(([key]) => key !== id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* 1. Project Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4 inline-block">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{project.clientType}</span>
          </div>
        </motion.div>

        {/* 2. Project Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden my-10 border border-border/50 bg-gradient-to-br from-primary-900/50 via-dark-bg to-accent-cyan/10"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {project.hasVideo ? (
              <div className="w-20 h-20 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-500/40 hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-8 h-8 text-primary-300 ml-1 fill-primary-300/20" />
              </div>
            ) : (
              <ExternalLink className="w-12 h-12 text-white/30" />
            )}
          </div>
        </motion.div>

        {/* 3. Project Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center"><Target className="w-5 h-5 text-primary-500" /></div>
            Project Overview
          </h2>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </div>
        </motion.div>

        {/* 4. My Role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center"><User className="w-5 h-5 text-accent-cyan" /></div>
            My Role
          </h2>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <p className="text-muted-foreground leading-relaxed">{project.role}</p>
          </div>
        </motion.div>

        {/* 5. Tools Used */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center"><Wrench className="w-5 h-5 text-green-500" /></div>
            Tools Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-xl border border-border/50 bg-card/50 text-sm font-medium">{tool}</span>
            ))}
          </div>
        </motion.div>

        {/* 6. Challenge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center"><AlertCircle className="w-5 h-5 text-red-500" /></div>
            Challenge
          </h2>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
        </motion.div>

        {/* 7. Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center"><Layers className="w-5 h-5 text-primary-500" /></div>
            Process
          </h2>
          <div className="space-y-3">
            {project.process.map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/30">
                <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-500">{i + 1}</div>
                <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 8. Final Output / Outcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-green-500" /></div>
            Final Output & Results
          </h2>
          <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
            <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
          </div>
        </motion.div>

        {/* 9. Before/After */}
        {project.hasBefore && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Before & After</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <span className="px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-400 border border-red-500/30">Before</span>
                  <p className="text-xs text-muted-foreground mt-2">Raw / Unedited</p>
                </div>
              </div>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-900/60 to-accent-cyan/10 border border-primary-500/30 flex items-center justify-center">
                <div className="text-center">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30">After</span>
                  <p className="text-xs text-muted-foreground mt-2">Final Edit</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 10. Related Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map(([key, proj]) => (
              <Link key={key} href={`/portfolio/${key}`}>
                <div className="group p-4 rounded-xl border border-border/50 bg-card/50 card-hover">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary-900/40 to-dark-bg mb-3 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white/30 group-hover:text-primary-400 transition-colors" />
                  </div>
                  <h4 className="font-bold text-sm group-hover:text-primary-500 transition-colors line-clamp-1">{proj.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{proj.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* 11. Contact CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="text-center p-8 rounded-2xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5">
          <h3 className="text-2xl font-bold mb-3">Want Something Similar?</h3>
          <p className="text-muted-foreground mb-6">Let&apos;s discuss your project and create something great together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group"><Mail className="w-4 h-4 mr-2" />Contact Me<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">More Projects</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
