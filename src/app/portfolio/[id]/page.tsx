"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/site-data";
import {
  ArrowLeft,
  ExternalLink,
  Play,
  Calendar,
  User,
  Tag,
  Share2,
  ArrowRight,
} from "lucide-react";

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = portfolioData.find((p) => p.id === id);

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

  const relatedProjects = portfolioData
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-cta-orange/10 text-cta-orange border border-cta-orange/20">
                Featured Project
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-border/50 bg-gradient-to-br from-primary-900/50 via-dark-bg to-accent-cyan/10"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {project.videoUrl ? (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-500/40 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-300 ml-1 fill-primary-300/20" />
                </div>
              </a>
            ) : (
              <ExternalLink className="w-12 h-12 text-white/30" />
            )}
          </div>
        </motion.div>

        {/* Project Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="p-4 rounded-xl border border-border/50 bg-card/50">
            <User className="w-4 h-4 text-primary-500 mb-2" />
            <p className="text-xs text-muted-foreground">Client</p>
            <p className="font-semibold text-sm">{project.client}</p>
          </div>
          <div className="p-4 rounded-xl border border-border/50 bg-card/50">
            <Calendar className="w-4 h-4 text-primary-500 mb-2" />
            <p className="text-xs text-muted-foreground">Year</p>
            <p className="font-semibold text-sm">{project.year}</p>
          </div>
          <div className="p-4 rounded-xl border border-border/50 bg-card/50">
            <Tag className="w-4 h-4 text-primary-500 mb-2" />
            <p className="text-xs text-muted-foreground">Category</p>
            <p className="font-semibold text-sm">{project.category}</p>
          </div>
          <div className="p-4 rounded-xl border border-border/50 bg-card/50">
            <Share2 className="w-4 h-4 text-primary-500 mb-2" />
            <p className="text-xs text-muted-foreground">Tags</p>
            <p className="font-semibold text-sm">{project.tags.join(", ")}</p>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description} This project showcases my expertise in {project.category.toLowerCase()}, 
              utilizing industry-standard tools and techniques to deliver exceptional results that exceeded 
              the client&apos;s expectations.
            </p>
            <h3 className="text-xl font-bold mb-3">What I Delivered</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                Complete {project.category.toLowerCase()} production from concept to final delivery
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                Multiple revisions and client feedback incorporation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                Optimized deliverables for all target platforms
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                Brand-aligned creative direction and execution
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-8 rounded-2xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5 mb-12"
        >
          <h3 className="text-2xl font-bold mb-3">Want Something Similar?</h3>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="group">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">More {project.category} Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link key={related.id} href={`/portfolio/${related.id}`}>
                  <div className="group rounded-2xl border border-border/50 bg-card/50 overflow-hidden card-hover">
                    <div className="aspect-video bg-gradient-to-br from-primary-900/50 to-dark-bg flex items-center justify-center">
                      <Play className="w-8 h-8 text-white/30 group-hover:text-primary-400 transition-colors" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-sm group-hover:text-primary-500 transition-colors line-clamp-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{related.client}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
