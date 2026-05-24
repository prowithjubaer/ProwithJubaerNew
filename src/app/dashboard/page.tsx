"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Play,
  Award,
  Clock,
  Star,
  ArrowRight,
  Download,
  LogOut,
  User,
  CheckCircle,
} from "lucide-react";

const enrolledCourses = [
  {
    title: "Complete Video Editing Masterclass",
    progress: 65,
    totalLessons: 85,
    completedLessons: 55,
    nextLesson: "Advanced Color Grading Techniques",
    thumbnail: "🎬",
  },
  {
    title: "Motion Graphics & Animation Pro",
    progress: 30,
    totalLessons: 95,
    completedLessons: 28,
    nextLesson: "Shape Layer Animation",
    thumbnail: "✨",
  },
  {
    title: "Thumbnail Design Masterclass",
    progress: 100,
    totalLessons: 45,
    completedLessons: 45,
    nextLesson: "Course Completed!",
    thumbnail: "🎨",
  },
];

const certificates = [
  { title: "Thumbnail Design Masterclass", date: "Dec 2024", id: "CERT-001" },
];

export default function StudentDashboard() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Welcome Back, Student!</h1>
              <p className="text-muted-foreground text-sm">Continue where you left off</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/courses">
              <Button variant="primary" size="sm">
                <BookOpen className="w-4 h-4 mr-1.5" />
                Browse Courses
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-1.5" />
                Logout
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { icon: BookOpen, label: "Enrolled Courses", value: "3", color: "text-primary-500 bg-primary-500/10" },
            { icon: CheckCircle, label: "Completed", value: "1", color: "text-green-500 bg-green-500/10" },
            { icon: Clock, label: "Hours Learned", value: "42", color: "text-accent-cyan bg-accent-cyan/10" },
            { icon: Award, label: "Certificates", value: "1", color: "text-cta-orange bg-cta-orange/10" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl border border-border/50 bg-card/50">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Enrolled Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-bold mb-6">My Courses</h2>
          <div className="space-y-4">
            {enrolledCourses.map((course, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-800/40 to-accent-cyan/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {course.thumbnail}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{course.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      Next: {course.nextLesson}
                    </p>
                    {/* Progress bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            course.progress === 100
                              ? "bg-green-500"
                              : "bg-gradient-to-r from-primary-500 to-accent-cyan"
                          }`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground min-w-[40px]">
                        {course.progress}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {course.completedLessons}/{course.totalLessons} lessons completed
                    </p>
                  </div>
                  <Button
                    variant={course.progress === 100 ? "secondary" : "primary"}
                    size="sm"
                    className="flex-shrink-0"
                  >
                    {course.progress === 100 ? (
                      <>
                        <Award className="w-4 h-4 mr-1.5" />
                        Certificate
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-1.5" />
                        Continue
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-border/50 bg-card/50 p-6"
          >
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-cta-orange" />
              My Certificates
            </h2>
            {certificates.length > 0 ? (
              <div className="space-y-3">
                {certificates.map((cert, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-border/50 bg-gradient-to-r from-cta-orange/5 to-cta-yellow/5 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-sm">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Completed: {cert.date} • ID: {cert.id}
                      </p>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-cta-orange/10 text-cta-orange transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Complete a course to earn your certificate!
              </p>
            )}
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-border/50 bg-card/50 p-6"
          >
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary-500" />
              Profile
            </h2>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-muted/30">
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="font-medium text-sm">Demo Student</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/30">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-sm">student@example.com</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/30">
                <p className="text-xs text-muted-foreground">Member Since</p>
                <p className="font-medium text-sm">October 2024</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full mt-4">
              Edit Profile
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
