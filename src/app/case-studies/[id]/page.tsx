"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { caseStudiesData } from "@/data/site-data";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  Quote,
  Target,
  Lightbulb,
  BarChart3,
} from "lucide-react";

export default function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const study = caseStudiesData.find((s) => s.id === id);

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

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20">
              {study.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {study.duration}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" /> {study.client}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {study.title}
          </h1>
        </motion.div>

        {/* Results Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {study.results.map((result, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-primary-500/5 to-accent-cyan/5 text-center"
            >
              <BarChart3 className="w-5 h-5 text-primary-500 mx-auto mb-2" />
              <div className="text-3xl font-bold gradient-text mb-1">{result.value}</div>
              <div className="text-sm font-medium">{result.metric}</div>
              <div className="text-xs text-muted-foreground mt-1">{result.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold">The Challenge</h2>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">The Solution</h2>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
            <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-500" />
            </div>
            <h2 className="text-2xl font-bold">The Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {study.process.map((step, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-border/50 bg-card/50 flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-500">
                  {i + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="p-8 rounded-2xl border border-primary-500/20 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5 relative">
            <Quote className="w-8 h-8 text-primary-500/20 absolute top-6 left-6" />
            <p className="text-lg italic text-foreground/90 mb-4 pl-8">
              &ldquo;{study.testimonial}&rdquo;
            </p>
            <p className="text-sm text-muted-foreground font-medium pl-8">
              — {study.client}
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg text-sm bg-primary-500/10 text-primary-400 border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center p-8 rounded-2xl border border-border/50 bg-card/50"
        >
          <h3 className="text-2xl font-bold mb-3">Ready for Similar Results?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how I can help your brand grow with creative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="secondary" size="lg">
                More Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
