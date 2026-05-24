"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/data/site-data";
import { ExternalLink, Play, Filter } from "lucide-react";

const categories = [
  "All",
  "Video Editing",
  "Motion Graphics",
  "Graphic Design",
  "Thumbnail Design",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio"
          title="My Creative Work"
          subtitle="Explore my latest projects across video editing, motion graphics, thumbnail design, and graphic design."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary-500/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover h-full">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-900/50 via-primary-800/30 to-accent-cyan/10 overflow-hidden">
                    {/* Hover play overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                        {project.videoUrl ? (
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        ) : (
                          <ExternalLink className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-500/80 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cta-orange/90 text-white backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-xs bg-primary-500/10 text-primary-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
