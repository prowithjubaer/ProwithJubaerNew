"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  allCoursesData,
  courseCategories,
  coursesPageFAQ,
  whyLearnData,
} from "@/data/courses-data";
import {
  Star,
  Users,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  Globe,
  FolderOpen,
  FileText,
  ChevronDown,
  Play,
  Zap,
  GraduationCap,
  Rocket,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Workflow: <Zap className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  FolderOpen: <FolderOpen className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredCourses =
    activeCategory === "All Courses"
      ? allCoursesData.filter((c) => c.visible)
      : allCoursesData.filter(
          (c) => c.category === activeCategory && c.visible
        );

  const featuredCourses = allCoursesData.filter(
    (c) => c.featured && c.status === "active"
  );
  const upcomingCourses = allCoursesData.filter(
    (c) => c.status === "coming_soon"
  );
  const freeCourses = allCoursesData.filter((c) => c.status === "free");

  return (
    <div className="pt-24 pb-16">

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-cyan/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-6">
              <GraduationCap className="w-4 h-4" />
              Practical Digital Skills
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Practical Digital Skill</span>
              <br />
              Courses
            </h1>

            <p className="text-xl md:text-2xl text-primary-400 font-medium mb-4">
              Learn creative and AI-powered digital skills in Bangla through practical, project-based courses.
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Courses designed for Bangladeshi students, freelancers, content creators, designers, editors, and job seekers who want to build real skills.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#all-courses">
                <Button variant="cta" size="lg" className="group">
                  Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button variant="secondary" size="lg" className="group">
                <Play className="w-4 h-4 mr-2" />
                Join Free Class
              </Button>
            </div>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: "1,200+", label: "Students" },
              { value: "4.9★", label: "Rating" },
              { value: "80+", label: "Lessons" },
              { value: "100%", label: "Lifetime Access" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Category Tabs + All Courses */}
      <section id="all-courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-muted/50 text-muted-foreground hover:bg-primary-500/10 hover:text-primary-400 border border-border/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              এই category তে কোনো course নেই এখনও। শীঘ্রই আসছে!
            </p>
          </div>
        )}
      </section>


      {/* Featured Courses */}
      {featuredCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-cta-orange" />
              <h2 className="text-3xl font-bold">Featured Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Upcoming Courses */}
      {upcomingCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-6 h-6 text-accent-cyan" />
              <h2 className="text-3xl font-bold">Upcoming Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {upcomingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Free Courses */}
      {freeCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-green-500" />
              <h2 className="text-3xl font-bold">Free Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </motion.div>
        </section>
      )}


      {/* Why Learn from Pro with Jubaer */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Learn from <span className="gradient-text">Pro with Jubaer</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              আমরা শুধু tools দেখাই না—practical workflow শেখাই যা real কাজে লাগে
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyLearnData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-4">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Courses সম্পর্কে সাধারণ প্রশ্নগুলোর উত্তর
          </p>
        </motion.div>

        <div className="space-y-3">
          {coursesPageFAQ.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
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
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}


// Course Card Component
import type { Course } from "@/data/courses-data";

function CourseCard({ course }: { course: Course }) {
  const isComingSoon = course.status === "coming_soon";
  const isFree = course.status === "free";

  return (
    <div className="group relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden card-hover flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary-800/60 to-accent-cyan/20 flex items-center justify-center">
        <BookOpen className="w-10 h-10 text-white/30" />
        {course.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                course.badge === "Coming Soon"
                  ? "bg-accent-cyan"
                  : course.badge === "Free"
                  ? "bg-green-500"
                  : course.badge === "Launch Offer"
                  ? "bg-cta-orange"
                  : course.badge === "Best Seller"
                  ? "bg-primary-500"
                  : "bg-primary-600"
              }`}
            >
              {course.badge}
            </span>
          </div>
        )}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Coming Soon</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="px-2 py-0.5 rounded text-xs bg-primary-500/10 text-primary-400 font-medium">
            {course.category}
          </span>
          <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
            {course.level}
          </span>
        </div>

        <h3 className="text-base font-bold mb-1 group-hover:text-primary-500 transition-colors line-clamp-2">
          {course.title}
        </h3>

        {course.subtitle && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {course.subtitle}
          </p>
        )}

        {/* Instructor */}
        <p className="text-xs text-muted-foreground mb-3">
          by <span className="font-medium text-foreground">{course.instructor}</span>
        </p>


        {/* Stats Row */}
        {!isComingSoon && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            {course.language && (
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {course.language}
              </span>
            )}
            {course.lessons && (
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {course.lessons} lessons
              </span>
            )}
            {course.duration && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {course.duration}
              </span>
            )}
          </div>
        )}

        {/* Rating & Students */}
        {course.rating && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              {course.rating}
            </span>
            {course.students && (
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {course.students.toLocaleString()} students
              </span>
            )}
          </div>
        )}

        {/* Price & CTA */}
        <div className="mt-auto pt-4 border-t border-border/50">
          {isComingSoon ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-accent-cyan font-medium">Coming Soon</span>
              <Button variant="outline" size="sm" disabled>
                Notify Me
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                {isFree ? (
                  <span className="text-xl font-bold text-green-500">Free</span>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">
                      ৳{course.price?.toLocaleString()}
                    </span>
                    {course.regularPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ৳{course.regularPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <Link href={`/courses/${course.id}`}>
                <Button variant="cta" size="sm" className="text-xs">
                  View Details
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
