"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { allCoursesData } from "@/data/courses-data";
import {
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle,
  Play,
  Shield,
  Award,
  Globe,
  ArrowLeft,
  ChevronDown,
  XCircle,
  Sparkles,
  FileText,
  FolderOpen,
  MessageCircle,
  Zap,
  Gift,
  Target,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const course = allCoursesData.find((c) => c.id === id);
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  if (!course || !course.detail) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses" className="text-primary-500 mt-4 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }

  const detail = course.detail;
  const relatedCourses = allCoursesData.filter(
    (c) => c.id !== course.id && c.visible && c.status !== "coming_soon"
  ).slice(0, 3);

  return (
    <div className="pt-20 pb-16">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-primary-800/20 to-accent-cyan/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-cyan/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-400 transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {detail.heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {course.title}
              </h1>

              <p className="text-lg md:text-xl text-primary-400 font-medium mb-4">
                {detail.heroSubtitle}
              </p>

              <p className="text-base text-muted-foreground mb-8">
                {detail.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#pricing">
                  <Button variant="cta" size="lg" className="group">
                    {detail.heroCTA.primary}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button variant="secondary" size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  {detail.heroCTA.secondary}
                </Button>
              </div>
            </motion.div>

            {/* Right side - Course mockup area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* 3D course mockup placeholder */}
                <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-primary-600/30 to-accent-cyan/20 border border-primary-500/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                    <p className="text-primary-300 font-bold text-lg">AI Expert Course</p>
                    <p className="text-muted-foreground text-sm">80+ Lessons</p>
                  </div>
                </div>
                {/* Floating icons */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-cta-orange/20 flex items-center justify-center animate-float">
                  <Sparkles className="w-6 h-6 text-cta-orange" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center animate-float-slow">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <div className="absolute top-1/3 left-0 w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center animate-float-slower">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                </div>
                <div className="absolute bottom-1/3 right-0 w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center animate-float">
                  <Zap className="w-5 h-5 text-primary-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Main Content + Sticky Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* 3. Problem Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {detail.problemSection.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {detail.problemSection.text}
                </p>
                <p className="font-semibold mb-4 text-foreground">আসল skill হলো:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {detail.problemSection.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50"
                    >
                      <CheckCircle className="w-4 h-4 text-cta-orange flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-primary-400 font-medium">
                  {detail.problemSection.conclusion}
                </p>
              </div>
            </motion.section>

            {/* 4. Course Outcome Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {detail.outcomeSection.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {detail.outcomeSection.outcomes.map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>


            {/* 5. Who Is This Course For */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* For */}
                <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Who Is This Course For?
                  </h3>
                  <div className="space-y-3">
                    {detail.whoIsFor.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Not For */}
                <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Who Is This Course NOT For?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    এই course আপনার জন্য না, যদি আপনি:
                  </p>
                  <div className="space-y-3">
                    {detail.whoIsNotFor.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>


            {/* 7. Curriculum Accordion */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Course Curriculum</h2>
              <p className="text-muted-foreground mb-8">
                {detail.curriculum.length} modules • {detail.stickyBar.lessons} lessons
              </p>

              <div className="space-y-3">
                {detail.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenModule(openModule === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-sm font-bold text-primary-500 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm md:text-base">
                            {module.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {module.lessons.length} lessons
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                          openModule === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openModule === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-border/50">
                            <p className="text-sm text-muted-foreground py-3">
                              {module.description}
                            </p>
                            <div className="space-y-2">
                              {module.lessons.map((lesson, li) => (
                                <div
                                  key={li}
                                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/30 transition-colors"
                                >
                                  <Play className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
                                  <span className="text-sm">{lesson}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.section>


            {/* 8. Practical Projects */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Course-এর ভিতরে Practical Projects থাকবে
              </h2>
              <p className="text-muted-foreground mb-8">
                এই course শুধু theory না। এখানে আপনি practical project করবেন।
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detail.projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cta-orange/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-cta-orange" />
                    </div>
                    <span className="text-sm font-medium">{project.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 9. Resources/Templates */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Course Resources
              </h2>
              <p className="text-muted-foreground mb-8">
                Course এর সাথে যা যা resources পাবেন
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detail.resources.map((resource, i) => {
                  const typeIcons = {
                    pdf: <FileText className="w-5 h-5 text-red-400" />,
                    sheet: <FolderOpen className="w-5 h-5 text-green-400" />,
                    template: <FileText className="w-5 h-5 text-primary-400" />,
                    pack: <Gift className="w-5 h-5 text-cta-orange" />,
                    checklist: <CheckCircle className="w-5 h-5 text-accent-cyan" />,
                  };
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                        {typeIcons[resource.type]}
                      </div>
                      <div>
                        <span className="text-sm font-medium">{resource.title}</span>
                        <p className="text-xs text-muted-foreground capitalize">
                          {resource.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>


            {/* 10. Instructor Credibility */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-500/5 to-accent-cyan/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {detail.instructorSection.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {detail.instructorSection.text}
                </p>
                <div className="p-4 rounded-xl bg-card/50 border border-border/50 mb-4">
                  <p className="text-sm font-medium text-primary-400">
                    আমি real content production workflow বুঝি:
                  </p>
                  <p className="text-lg font-bold mt-2 gradient-text">
                    {detail.instructorSection.workflow}
                  </p>
                </div>
                <p className="text-muted-foreground">
                  {detail.instructorSection.focus}
                </p>
              </div>
            </motion.section>

            {/* 11. Student Testimonials */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Students কী বলছেন
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Rahim Khan",
                    role: "Freelancer",
                    text: "AI course টা অনেক practical. আমি এখন client দের জন্য AI দিয়ে content বানাই।",
                  },
                  {
                    name: "Fatima Akter",
                    role: "Content Creator",
                    text: "Prompt writing শেখার পর আমার content quality অনেক improve হয়েছে।",
                  },
                  {
                    name: "Sakib Hasan",
                    role: "Student",
                    text: "Bangla তে এরকম AI course আর কোথাও পাইনি। Beginner friendly এবং useful।",
                  },
                  {
                    name: "Nusrat Jahan",
                    role: "YouTuber",
                    text: "YouTube SEO module টা game changer ছিল। Views বাড়েছে significantly।",
                  },
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-border/50 bg-card/50"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-400">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>


            {/* 12. Pricing Packages */}
            <motion.section
              id="pricing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Enroll in the Course
              </h2>
              <p className="text-muted-foreground mb-8">
                আপনার প্রয়োজন অনুযায়ী package বেছে নিন
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {detail.pricingPackages.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative p-6 rounded-2xl border ${
                      pkg.highlighted
                        ? "border-primary-500 bg-primary-500/5 shadow-lg shadow-primary-500/10"
                        : "border-border/50 bg-card/50"
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-500 text-white">
                          Recommended
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold">
                        ৳{pkg.price.toLocaleString()}
                      </span>
                      {pkg.regularPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ৳{pkg.regularPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant={pkg.highlighted ? "cta" : "primary"}
                      size="md"
                      className="w-full"
                    >
                      {pkg.cta}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.section>


            {/* 13. Bonus/Offer Stack */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl border border-cta-orange/20 bg-gradient-to-br from-cta-orange/5 to-cta-yellow/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {detail.offerStack.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {detail.offerStack.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Gift className="w-4 h-4 text-cta-orange flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Value breakdown */}
                <div className="p-5 rounded-xl bg-card/80 border border-border/50">
                  <div className="space-y-2 mb-4">
                    {detail.offerStack.valueBreakdown.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border/50 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">
                        Total Value: {detail.offerStack.totalValue}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Today: </span>
                      <span className="text-2xl font-bold gradient-text-warm">
                        {detail.offerStack.todayPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>


            {/* 14. FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {detail.faq.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/50 bg-card/50 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                    >
                      <span className="font-semibold text-sm md:text-base pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                          openFAQ === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm text-muted-foreground">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 15. Final CTA */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent-cyan/10 border border-primary-500/20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {detail.finalCTA.title}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  {detail.finalCTA.subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="cta" size="lg">
                    {detail.finalCTA.buttonText}
                  </Button>
                  <Button variant="secondary" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Talk on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.section>

          </div>


          {/* 2. Sticky Pricing/Enroll Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-xl"
              >
                {/* Preview */}
                <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary-800/60 to-accent-cyan/20 mb-5 overflow-hidden flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                    Preview
                  </span>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold">
                      ৳{detail.stickyBar.price.toLocaleString()}
                    </span>
                    <span className="text-base text-muted-foreground line-through">
                      ৳{detail.stickyBar.regularPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-bold">
                      {Math.round(
                        (1 - detail.stickyBar.price / detail.stickyBar.regularPrice) * 100
                      )}% OFF
                    </span>
                    <span className="text-xs text-cta-orange font-medium">
                      Launch Offer
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <Button variant="cta" size="lg" className="w-full mb-3">
                  Enroll Now
                </Button>
                <Button variant="outline" size="md" className="w-full mb-5">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk on WhatsApp
                </Button>

                {/* Course Info */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Level
                    </span>
                    <span className="font-medium">{detail.stickyBar.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Language
                    </span>
                    <span className="font-medium">{detail.stickyBar.language}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Access
                    </span>
                    <span className="font-medium">{detail.stickyBar.access}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Play className="w-4 h-4" /> Lessons
                    </span>
                    <span className="font-medium">{detail.stickyBar.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Target className="w-4 h-4" /> Projects
                    </span>
                    <span className="font-medium">{detail.stickyBar.projects}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Award className="w-4 h-4" /> Certificate
                    </span>
                    <span className="font-medium">{detail.stickyBar.certificate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Resources
                    </span>
                    <span className="font-medium">{detail.stickyBar.resources}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Support
                    </span>
                    <span className="font-medium">{detail.stickyBar.support}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-50 p-4 bg-card/95 backdrop-blur-lg border-t border-border/50">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">
                ৳{detail.stickyBar.price.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ৳{detail.stickyBar.regularPrice.toLocaleString()}
              </span>
            </div>
          </div>
          <Button variant="cta" size="md">
            Enroll Now
          </Button>
        </div>
      </div>

      {/* 16. Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Related Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <Link key={rc.id} href={`/courses/${rc.id}`}>
                  <div className="rounded-2xl border border-border/50 bg-card/50 p-5 card-hover">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-800/40 to-accent-cyan/20 flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-white/30" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs bg-primary-500/10 text-primary-400 font-medium">
                      {rc.category}
                    </span>
                    <h3 className="text-base font-bold mt-2 mb-1">{rc.title}</h3>
                    <p className="text-xs text-muted-foreground">{rc.subtitle}</p>
                    {rc.price !== undefined && (
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <span className="text-lg font-bold">
                          {rc.price === 0 ? "Free" : `৳${rc.price.toLocaleString()}`}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
