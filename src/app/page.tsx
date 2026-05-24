"use client";

import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CoursesPreview } from "@/components/sections/courses-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { ToolsSection } from "@/components/sections/tools-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <CoursesPreview />
      <Testimonials />
      <ToolsSection />
      <CTASection />
    </>
  );
}
