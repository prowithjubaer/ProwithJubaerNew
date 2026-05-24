"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enrolledCourses } from "@/data/dashboard-data";

export default function MyCoursesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          My Courses
        </h1>
        <p className="text-muted-foreground mt-1">
          আপনার enrolled courses গুলো এখানে দেখুন এবং learning continue করুন।
        </p>
      </motion.div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden card-hover group"
          >
            {/* Thumbnail Placeholder */}
            <div className="w-full h-40 bg-gradient-to-br from-primary-600/20 to-accent-cyan/20 border-b border-border/30 flex items-center justify-center relative">
              <BookOpen
                size={32}
                className="text-primary-500 group-hover:scale-110 transition-transform"
              />
              {course.progress === 100 && (
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Completed ✓
                </div>
              )}
              {course.progress > 0 && course.progress < 100 && (
                <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  In Progress
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs text-primary-500 font-medium mb-1">
                  {course.category}
                </p>
                <h3 className="font-bold text-foreground line-clamp-2 text-base">
                  {course.title}
                </h3>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen size={12} />
                  {course.completedLessons}/{course.totalLessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  Last: {new Date(course.lastAccessed).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary-500 font-semibold">
                    {course.progress}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* CTA */}
              <Link href={`/dashboard/learn/${course.id}`}>
                <Button variant="primary" size="sm" className="w-full mt-2">
                  {course.progress === 100 ? "Review Course" : "Continue Learning"}
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty state / Browse more */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl border border-dashed border-border/50 bg-card/40 backdrop-blur-sm p-8 text-center"
      >
        <BookOpen size={40} className="mx-auto text-muted-foreground mb-3" />
        <h3 className="text-lg font-semibold text-foreground mb-1">
          আরও courses explore করুন
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          নতুন skills শিখুন এবং আপনার career আরও এগিয়ে নিন
        </p>
        <Link href="/courses">
          <Button variant="secondary" size="md">
            Browse All Courses
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
