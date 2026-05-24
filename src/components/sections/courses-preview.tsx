"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/data/site-data";
import { ArrowRight, Star, Users, Clock, BookOpen } from "lucide-react";

export function CoursesPreview() {
  const featuredCourses = coursesData.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Learn From Me"
          title="Premium Courses"
          subtitle="Master creative skills with comprehensive, project-based courses taught in Bangla."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link href={`/courses/${course.id}`}>
                <div className="group relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden card-hover">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-800/60 to-accent-cyan/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white/50" />
                    </div>
                    {/* Tag */}
                    {course.tag && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cta-orange text-white">
                          {course.tag}
                        </span>
                      </div>
                    )}
                    {/* Discount */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-lg text-xs font-bold bg-green-500 text-white">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary-500/10 text-primary-400 font-medium">
                        {course.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.subtitle}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-foreground">
                          ৳{course.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ৳{course.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Button variant="cta" size="sm">
                        Enroll
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/courses">
            <Button variant="secondary" size="lg">
              Browse All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
