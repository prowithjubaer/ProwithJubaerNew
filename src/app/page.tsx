"use client";

import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ShowreelSection } from "@/components/sections/showreel-section";
import { WhatIDo } from "@/components/sections/what-i-do";
import { FeaturedWork } from "@/components/sections/featured-work";
import { BeforeAfter } from "@/components/sections/before-after";
import { EditingStyle } from "@/components/sections/editing-style";
import { CreativeWorkflow } from "@/components/sections/creative-workflow";
import { ToolsIUse } from "@/components/sections/tools-i-use";
import { SelectedCaseStudies } from "@/components/sections/selected-case-studies";
import { CoursesMini } from "@/components/sections/courses-mini";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

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
      <ToolsIUse />
      <SelectedCaseStudies />
      <CoursesMini />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
