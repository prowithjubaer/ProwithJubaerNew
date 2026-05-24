"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  Play,
  ArrowRight,
  CheckCircle2,
  Calendar,
  CreditCard,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  enrolledCourses,
  recentActivity,
  studentProfile,
  certificates,
} from "@/data/dashboard-data";

export default function DashboardPage() {
  const lastCourse = enrolledCourses.find((c) => c.progress < 100);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          Welcome back, {studentProfile.name}! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          আজকে কিছু নতুন শিখুন এবং আপনার skills আরও improve করুন।
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          {
            label: "Enrolled Courses",
            value: studentProfile.coursesEnrolled,
            icon: BookOpen,
            color: "from-primary-500 to-primary-600",
          },
          {
            label: "Certificates",
            value: studentProfile.certificatesEarned,
            icon: Award,
            color: "from-accent-cyan to-accent-blue",
          },
          {
            label: "Learning Hours",
            value: `${studentProfile.totalLearningHours}h`,
            icon: Clock,
            color: "from-cta-orange to-cta-yellow",
          },
          {
            label: "Completion Rate",
            value: "45%",
            icon: TrendingUp,
            color: "from-green-500 to-emerald-500",
          },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 lg:p-5"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}
            >
              <stat.icon size={18} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Continue Learning Card */}
      {lastCourse && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary-500/10 via-card/80 to-accent-cyan/10 backdrop-blur-sm p-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* Thumbnail */}
            <div className="w-full lg:w-48 h-28 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-cyan/20 border border-border/30 flex items-center justify-center flex-shrink-0">
              <Play size={32} className="text-primary-500" />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-xs text-primary-500 font-medium uppercase tracking-wider">
                  Continue Learning
                </p>
                <h3 className="text-lg font-bold text-foreground mt-1">
                  {lastCourse.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {lastCourse.completedLessons}/{lastCourse.totalLessons}{" "}
                  lessons completed
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary-500 font-medium">
                    {lastCourse.progress}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan transition-all duration-500"
                    style={{ width: `${lastCourse.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link href={`/dashboard/learn/${lastCourse.id}`}>
              <Button variant="primary" size="md">
                Continue
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}

      {/* My Enrolled Courses Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">
            My Enrolled Courses
          </h2>
          <Link
            href="/dashboard/courses"
            className="text-sm text-primary-500 hover:text-primary-400 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 card-hover"
            >
              {/* Thumbnail Placeholder */}
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-cyan/20 border border-border/30 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-primary-500" />
              </div>

              <h4 className="font-semibold text-foreground text-sm line-clamp-2 mb-2">
                {course.title}
              </h4>

              <p className="text-xs text-muted-foreground mb-3">
                {course.completedLessons}/{course.totalLessons} lessons •{" "}
                {course.category}
              </p>

              {/* Progress */}
              <div className="space-y-1.5 mb-3">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary-500 font-medium">
                    {course.progress}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <Link href={`/dashboard/learn/${course.id}`}>
                <Button variant="ghost" size="sm" className="w-full">
                  {course.progress === 100 ? "Review" : "Continue"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity & Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.type === "lesson_completed"
                      ? "bg-green-500/10 text-green-500"
                      : activity.type === "certificate_earned"
                      ? "bg-accent-cyan/10 text-accent-cyan"
                      : activity.type === "course_enrolled"
                      ? "bg-primary-500/10 text-primary-500"
                      : "bg-cta-orange/10 text-cta-orange"
                  }`}
                >
                  {activity.type === "lesson_completed" && (
                    <CheckCircle2 size={14} />
                  )}
                  {activity.type === "certificate_earned" && (
                    <Award size={14} />
                  )}
                  {activity.type === "course_enrolled" && (
                    <BookOpen size={14} />
                  )}
                  {activity.type === "purchase" && <CreditCard size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activity.date} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-4">
            Quick Links
          </h3>
          <div className="space-y-2">
            {[
              {
                label: "Browse Courses",
                href: "/courses",
                icon: BookOpen,
              },
              {
                label: "My Certificates",
                href: "/dashboard/certificates",
                icon: Award,
              },
              {
                label: "Resources",
                href: "/blog",
                icon: FileText,
              },
              {
                label: "Purchase History",
                href: "/dashboard/purchases",
                icon: CreditCard,
              },
              {
                label: "Schedule",
                href: "/dashboard",
                icon: Calendar,
              },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-500/5 hover:text-primary-500 transition-all text-sm text-muted-foreground font-medium"
              >
                <link.icon size={16} />
                <span>{link.label}</span>
                <ArrowRight size={12} className="ml-auto" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
