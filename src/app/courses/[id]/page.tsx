"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/data/site-data";
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
} from "lucide-react";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses" className="text-primary-500 mt-4 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Header */}
              <div className="mb-8">
                {course.tag && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-cta-orange text-white mb-4">
                    {course.tag}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {course.title}
                </h1>
                <p className="text-xl text-primary-400 font-medium mb-4">
                  {course.subtitle}
                </p>
                <p className="text-muted-foreground text-lg">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {course.rating} ({course.reviews} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    {course.language}
                  </span>
                </div>
              </div>

              {/* Course Modules */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-sm font-bold text-primary-500">
                          {index + 1}
                        </div>
                        <span className="font-medium">{module.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {module.lessons} lessons
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What You&apos;ll Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 rounded-xl bg-green-500/5 border border-green-500/10"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Pricing Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-xl">
                {/* Preview */}
                <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary-800/60 to-accent-cyan/20 mb-6 overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                    Preview
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold">
                      ৳{course.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ৳{course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-bold">
                      {Math.round(
                        (1 - course.price / course.originalPrice) * 100
                      )}
                      % OFF
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Limited time offer
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="cta" size="xl" className="w-full mb-3">
                  Enroll Now - ৳{course.price.toLocaleString()}
                </Button>
                <p className="text-xs text-center text-muted-foreground mb-6">
                  30-day money-back guarantee
                </p>

                {/* Benefits */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3 text-sm">
                    <BookOpen className="w-4 h-4 text-primary-500" />
                    <span>{course.lessons} HD Video Lessons</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span>{course.duration} of Content</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-primary-500" />
                    <span>Lifetime Access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-4 h-4 text-primary-500" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-primary-500" />
                    <span>Private Community</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
