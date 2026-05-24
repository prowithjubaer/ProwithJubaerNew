"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/site-data";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

export function PortfolioPreview() {
  const featuredProjects = portfolioData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Work"
          title="Featured Projects"
          subtitle="A showcase of my best work across video editing, motion graphics, and design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 to-dark-bg overflow-hidden">
                  {/* Placeholder visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {project.videoUrl ? (
                        <Play className="w-6 h-6 text-white ml-1" />
                      ) : (
                        <ExternalLink className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/80 text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md text-xs bg-primary-500/10 text-primary-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.client} • {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button variant="primary" size="lg" className="group">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
