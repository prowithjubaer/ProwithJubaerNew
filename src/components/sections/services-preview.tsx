"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/site-data";
import {
  Video,
  Sparkles,
  Image,
  Palette,
  Workflow,
  Globe,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Video,
  Sparkles,
  Image,
  Palette,
  Workflow,
  Globe,
};

const colorMap: Record<string, string> = {
  purple: "from-primary-500/20 to-primary-600/20 border-primary-500/30 hover:border-primary-500/60",
  cyan: "from-accent-cyan/20 to-blue-500/20 border-accent-cyan/30 hover:border-accent-cyan/60",
  orange: "from-orange-500/20 to-yellow-500/20 border-orange-500/30 hover:border-orange-500/60",
  blue: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 hover:border-blue-500/60",
  green: "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/60",
  pink: "from-pink-500/20 to-rose-500/20 border-pink-500/30 hover:border-pink-500/60",
};

const iconColorMap: Record<string, string> = {
  purple: "text-primary-500",
  cyan: "text-accent-cyan",
  orange: "text-orange-500",
  blue: "text-blue-500",
  green: "text-green-500",
  pink: "text-pink-500",
};

export function ServicesPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What I Do"
          title="Creative Services"
          subtitle="From raw footage to stunning visuals — I deliver end-to-end creative solutions for brands and creators worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`group relative h-full p-6 rounded-2xl border bg-gradient-to-br ${colorMap[service.color]} backdrop-blur-sm transition-all duration-300 card-hover`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[service.color]} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${iconColorMap[service.color]}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-400">
                      {service.pricing}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="secondary" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
