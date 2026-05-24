"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { servicesData, faqData } from "@/data/site-data";
import {
  Video,
  Sparkles,
  Image,
  Palette,
  Workflow,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Video,
  Sparkles,
  Image,
  Palette,
  Workflow,
  Globe,
};

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              💼 Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Creative Services for
              <br />
              <span className="gradient-text">Global Brands & Creators</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a single thumbnail to full content production — I deliver
              premium creative solutions that help you stand out and grow.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        {service.title}
                      </h3>
                      <span className="text-primary-400 font-semibold">
                        {service.pricing}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button variant="secondary" size="sm" className="group">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process */}
        <div className="mb-24">
          <SectionHeading
            badge="How I Work"
            title="My Process"
            subtitle="A streamlined workflow that ensures quality and timely delivery every time."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We discuss your project, goals, and creative vision.",
              },
              {
                step: "02",
                title: "Planning",
                desc: "I create a project plan with timeline and deliverables.",
              },
              {
                step: "03",
                title: "Creation",
                desc: "I craft your content with regular progress updates.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final delivery with revisions until you're satisfied.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border/50 bg-card/30"
              >
                <div className="text-4xl font-bold gradient-text mb-3">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? I've got answers."
          />

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 rounded-xl border border-border/50 bg-card/50 text-left transition-all duration-200 hover:border-primary-500/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <Button variant="primary" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
