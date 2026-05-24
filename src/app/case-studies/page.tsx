"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { caseStudiesData } from "@/data/site-data";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              📊 Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results for
              <br />
              <span className="gradient-text">Real Clients</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdowns of how I helped brands, creators, and businesses
              achieve measurable growth through creative solutions.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.id}`}>
                <div className="group rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden card-hover">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Visual */}
                    <div className="md:col-span-2 relative aspect-video md:aspect-auto bg-gradient-to-br from-primary-900/60 via-dark-bg to-accent-cyan/10 flex items-center justify-center min-h-[250px]">
                      <div className="text-center p-6">
                        <TrendingUp className="w-12 h-12 text-primary-400/50 mx-auto mb-3" />
                        <span className="text-xs text-muted-foreground font-mono">{study.category}</span>
                      </div>
                      {study.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cta-orange text-white">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-500/10 text-primary-400">
                            {study.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {study.duration}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="w-3 h-3" />
                            {study.client}
                          </span>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                          {study.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {study.results.map((result, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-xl bg-gradient-to-br from-primary-500/5 to-accent-cyan/5 border border-border/30 text-center"
                            >
                              <div className="text-lg md:text-xl font-bold gradient-text">
                                {result.value}
                              </div>
                              <div className="text-[10px] text-muted-foreground mt-0.5">
                                {result.metric}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5">
                            {study.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-sm text-primary-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read Case Study
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-10 rounded-3xl border border-border/50 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Want Results Like These?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Let&apos;s discuss how I can help your brand achieve measurable growth through creative excellence.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
