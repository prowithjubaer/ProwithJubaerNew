"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/data/site-data";
import { Star, Users, Clock, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section for courses */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cta-orange/10 text-cta-orange border border-cta-orange/20 mb-4">
              🎓 Learn Creative Skills
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master <span className="gradient-text">Creative Skills</span>
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground font-normal mt-2 block">
                Project-based Courses in Bangla
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-standard skills taught through hands-on projects. Join thousands of students who&apos;ve transformed their careers with our comprehensive courses.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { value: "10,000+", label: "Students" },
              { value: "4.9★", label: "Average Rating" },
              { value: "260+", label: "Video Lessons" },
              { value: "100%", label: "Lifetime Access" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden card-hover">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Thumbnail */}
                  <div className="relative md:w-2/5 aspect-video md:aspect-auto bg-gradient-to-br from-primary-800/60 to-accent-cyan/20 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white/40" />
                    </div>
                    {course.tag && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cta-orange text-white shadow-lg">
                          {course.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary-500/10 text-primary-400 font-medium">
                        {course.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                        {course.level}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-1 group-hover:text-primary-500 transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.subtitle}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                      {course.features.slice(0, 4).map((feature) => (
                        <span key={feature} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        {course.rating} ({course.reviews})
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

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold">
                            ৳{course.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ৳{course.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-xs text-green-500 font-medium">
                          Save ৳{(course.originalPrice - course.price).toLocaleString()}
                        </span>
                      </div>
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="cta" size="md" className="group/btn">
                          Enroll Now
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
