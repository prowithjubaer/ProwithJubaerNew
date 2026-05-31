"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { freeResourcesData as staticResources } from "@/data/site-data";
import { useResourcesData } from "@/hooks/use-site-data";
import { Download, FileDown, Users, Sparkles, ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  const freeResourcesData = useResourcesData();
  const featuredResources = (freeResourcesData as typeof staticResources).filter((r) => r.featured);
  const otherResources = (freeResourcesData as typeof staticResources).filter((r) => !r.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-500 border border-green-500/20 mb-4">
              🎁 Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Free Tools &amp;
              <br />
              <span className="gradient-text">Creative Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download free LUTs, templates, presets, cheatsheets, and tools to level up
              your creative workflow. No strings attached.
            </p>
          </motion.div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-500" />
            Most Popular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 card-hover flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 flex items-center justify-center mb-4">
                    <FileDown className="w-7 h-7 text-primary-500" />
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-500/10 text-primary-400 self-start mb-3">
                    {resource.category}
                  </span>

                  <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {resource.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pt-3 border-t border-border/50">
                    <span>📁 {resource.format}</span>
                    <span>💾 {resource.size}</span>
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {resource.downloads.toLocaleString()}
                    </span>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:from-primary-500 hover:to-primary-400 transition-all text-sm flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Free
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Resources */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-6">More Free Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="p-5 rounded-2xl border border-border/50 bg-card/50 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <FileDown className="w-5 h-5 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm mb-1">{resource.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {resource.format} • {resource.size}
                        </span>
                        <button className="px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-500 text-xs font-medium hover:bg-primary-500/20 transition-colors flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          Get
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-cta-orange/5 to-cta-yellow/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Want More In-Depth Learning?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            These resources are great starters. For comprehensive, project-based training,
            check out my premium courses.
          </p>
          <Link href="/courses">
            <Button variant="cta" size="lg" className="group">
              Browse Courses
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
