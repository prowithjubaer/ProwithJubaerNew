"use client";

import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ShowreelSection } from "@/components/sections/showreel-section";
import { WhatIDo } from "@/components/sections/what-i-do";
import { FeaturedWork } from "@/components/sections/featured-work";
import { BeforeAfter } from "@/components/sections/before-after";
import { EditingStyle } from "@/components/sections/editing-style";
import { CreativeWorkflow } from "@/components/sections/creative-workflow";
import { CoursesPreview } from "@/components/sections/courses-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { ToolsSection } from "@/components/sections/tools-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ShowreelSection />
      <WhatIDo />
      <FeaturedWork />
      <BeforeAfter />
      <EditingStyle />
      <CreativeWorkflow />
      <CoursesPreview />
      <Testimonials />
      <ToolsSection />
      <CTASection />
    </>
  );
}
