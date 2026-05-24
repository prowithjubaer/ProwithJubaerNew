"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allCoursesData, courseCategories } from "@/data/courses-data";
import type { Course, PricingMode, CourseBadge } from "@/data/courses-data";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Users,
  GripVertical,
  Search,
  Filter,
  Tag,
  X,
  Save,
  BookOpen,
  Ticket,
  ArrowUpDown,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>(allCoursesData);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<string>("courses");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showCouponForm, setShowCouponForm] = useState(false);

  // Coupon state
  const [coupons, setCoupons] = useState([
    { id: "1", code: "LAUNCH50", discount: 50, type: "percentage" as const, active: true },
    { id: "2", code: "FIRST100", discount: 100, type: "fixed" as const, active: true },
  ]);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || c.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleVisibility = (id: string) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c)));
  };

  const deleteCourse = (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const toggleFeatured = (id: string) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, featured: !c.featured } : c)));
  };

  return (
    <div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Course Manager</h1>
          <p className="text-muted-foreground text-sm">
            Manage courses, categories, pricing, coupons & visibility
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => {
            setEditingCourse(null);
            setShowForm(!showForm);
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-border/50 pb-3">
        {[
          { id: "courses", label: "Courses", icon: BookOpen },
          { id: "categories", label: "Categories", icon: Tag },
          { id: "coupons", label: "Coupons", icon: Ticket },
          { id: "settings", label: "Settings", icon: Settings2 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-primary-500/10 text-primary-500 border border-primary-500/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>


      {/* Courses Tab */}
      {activeTab === "courses" && (
        <>
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Search courses..."
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
              >
                <option value="All">All Categories</option>
                {courseCategories.filter(c => c !== "All Courses").map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <button className="px-3 py-2.5 rounded-xl bg-muted/50 border border-border/50 hover:border-primary-500 transition-colors">
                <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-6"
              >
                <CourseForm
                  course={editingCourse}
                  onClose={() => {
                    setShowForm(false);
                    setEditingCourse(null);
                  }}
                  onSave={(course) => {
                    if (editingCourse) {
                      setCourses(courses.map((c) => (c.id === course.id ? course : c)));
                    } else {
                      setCourses([...courses, course]);
                    }
                    setShowForm(false);
                    setEditingCourse(null);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>


          {/* Course List */}
          <div className="space-y-3">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-xl border bg-card/50 p-4 ${
                  !course.visible ? "border-red-500/20 opacity-60" : "border-border/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-bold text-sm truncate">{course.title}</h3>
                      {course.badge && (
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          course.badge === "Coming Soon" ? "bg-accent-cyan/10 text-accent-cyan" :
                          course.badge === "Free" ? "bg-green-500/10 text-green-500" :
                          course.badge === "Launch Offer" ? "bg-cta-orange/10 text-cta-orange" :
                          "bg-primary-500/10 text-primary-500"
                        }`}>
                          {course.badge}
                        </span>
                      )}
                      {course.featured && (
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-yellow-500/10 text-yellow-500">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{course.category}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                      <span>•</span>
                      <span>{course.status === "coming_soon" ? "Coming Soon" : course.status === "free" ? "Free" : `৳${course.price?.toLocaleString()}`}</span>
                      {course.students && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {course.students}
                          </span>
                        </>
                      )}
                      {course.rating && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            {course.rating}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => toggleFeatured(course.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        course.featured ? "text-yellow-500 bg-yellow-500/10" : "text-muted-foreground hover:text-yellow-500 hover:bg-yellow-500/10"
                      }`}
                      title="Toggle Featured"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleVisibility(course.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        course.visible ? "text-green-500 hover:bg-green-500/10" : "text-red-500 bg-red-500/10"
                      }`}
                      title="Toggle Visibility"
                    >
                      {course.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => {
                        setEditingCourse(course);
                        setShowForm(true);
                      }}
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No courses found matching your search.
            </div>
          )}
        </>
      )}


      {/* Categories Tab */}
      {activeTab === "categories" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Course Categories</h2>
          <div className="space-y-3">
            {courseCategories.filter(c => c !== "All Courses").map((cat, i) => {
              const count = courses.filter((c) => c.category === cat).length;
              return (
                <div
                  key={cat}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-sm font-bold text-primary-500">
                      {i + 1}
                    </div>
                    <span className="font-medium text-sm">{cat}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                      {count} course{count !== 1 ? "s" : ""}
                    </span>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary-500 hover:bg-primary-500/10 transition-colors">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Coupons Tab */}
      {activeTab === "coupons" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Coupons</h2>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowCouponForm(!showCouponForm)}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Coupon
            </Button>
          </div>

          {showCouponForm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl border border-border/50 bg-card/50 mb-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                  placeholder="Coupon code"
                />
                <input
                  type="number"
                  className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                  placeholder="Discount"
                />
                <select className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed (৳)</option>
                </select>
                <Button variant="primary" size="sm" className="h-full">
                  <Save className="w-4 h-4 mr-1" />
                  Save
                </Button>
              </div>
            </motion.div>
          )}

          <div className="space-y-3">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/50"
              >
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20">
                    <code className="text-sm font-bold text-primary-400">
                      {coupon.code}
                    </code>
                  </div>
                  <span className="text-sm">
                    {coupon.discount}{coupon.type === "percentage" ? "%" : "৳"} off
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    coupon.active ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  }`}>
                    {coupon.active ? "Active" : "Inactive"}
                  </span>
                  <button className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Course Settings</h2>
          <div className="space-y-6">
            {/* Default Pricing Mode */}
            <div className="p-5 rounded-xl border border-border/50 bg-card/50">
              <h3 className="font-bold text-sm mb-3">Default Pricing Mode</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Choose how pricing is displayed for new courses
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: "single", label: "Single Price", desc: "One price for all" },
                  { value: "multiple", label: "Multiple Packages", desc: "Basic/Standard/Premium" },
                  { value: "free", label: "Free Course", desc: "No payment required" },
                  { value: "coming_soon", label: "Coming Soon", desc: "Not yet available" },
                ].map((mode) => (
                  <div
                    key={mode.value}
                    className="p-3 rounded-xl border border-border/50 hover:border-primary-500/50 cursor-pointer transition-colors"
                  >
                    <p className="text-sm font-medium">{mode.label}</p>
                    <p className="text-xs text-muted-foreground">{mode.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Courses */}
            <div className="p-5 rounded-xl border border-border/50 bg-card/50">
              <h3 className="font-bold text-sm mb-3">Featured Courses</h3>
              <p className="text-xs text-muted-foreground mb-4">
                These courses appear in the Featured section
              </p>
              <div className="space-y-2">
                {courses.filter(c => c.featured).map((c) => (
                  <div key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <span className="text-sm">{c.title}</span>
                    <button
                      onClick={() => toggleFeatured(c.id)}
                      className="text-xs text-red-400 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {courses.filter(c => c.featured).length === 0 && (
                  <p className="text-xs text-muted-foreground">No featured courses</p>
                )}
              </div>
            </div>

            {/* Coming Soon Management */}
            <div className="p-5 rounded-xl border border-border/50 bg-card/50">
              <h3 className="font-bold text-sm mb-3">Coming Soon Courses</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Courses shown as Coming Soon
              </p>
              <div className="space-y-2">
                {courses.filter(c => c.status === "coming_soon").map((c) => (
                  <div key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <span className="text-sm">{c.title}</span>
                    <span className="text-xs text-accent-cyan">Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Courses */}
            <div className="p-5 rounded-xl border border-border/50 bg-card/50">
              <h3 className="font-bold text-sm mb-3">Free Courses</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Courses available for free
              </p>
              <div className="space-y-2">
                {courses.filter(c => c.status === "free").map((c) => (
                  <div key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <span className="text-sm">{c.title}</span>
                    <span className="text-xs text-green-500">Free</span>
                  </div>
                ))}
                {courses.filter(c => c.status === "free").length === 0 && (
                  <p className="text-xs text-muted-foreground">No free courses</p>
                )}
              </div>
            </div>

            {/* Sorting */}
            <div className="p-5 rounded-xl border border-border/50 bg-card/50">
              <h3 className="font-bold text-sm mb-3">Course Sorting</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Default sort order for the courses page
              </p>
              <select className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option>Sort Order (Manual)</option>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// Course Add/Edit Form Component
function CourseForm({
  course,
  onClose,
  onSave,
}: {
  course: Course | null;
  onClose: () => void;
  onSave: (course: Course) => void;
}) {
  const [formData, setFormData] = useState({
    title: course?.title || "",
    subtitle: course?.subtitle || "",
    description: course?.description || "",
    category: course?.category || "AI & Content Creation",
    instructor: course?.instructor || "Md Jubaer Ahmed",
    level: course?.level || "Beginner Friendly",
    language: course?.language || "Bangla",
    lessons: course?.lessons || 0,
    duration: course?.duration || "",
    price: course?.price || 0,
    regularPrice: course?.regularPrice || 0,
    badge: (course?.badge || "") as string,
    status: course?.status || "active",
    pricingMode: (course?.detail?.pricingMode || "single") as PricingMode,
    featured: course?.featured || false,
    visible: course?.visible ?? true,
  });

  const handleSave = () => {
    const newCourse: Course = {
      id: course?.id || formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description,
      category: formData.category,
      instructor: formData.instructor,
      level: formData.level,
      language: formData.language,
      lessons: formData.lessons || undefined,
      duration: formData.duration || undefined,
      price: formData.price || undefined,
      regularPrice: formData.regularPrice || undefined,
      currency: "BDT",
      badge: (formData.badge as CourseBadge) || undefined,
      status: formData.status as "active" | "coming_soon" | "free",
      featured: formData.featured,
      visible: formData.visible,
      sortOrder: course?.sortOrder || 99,
      detail: course?.detail,
    };
    onSave(newCourse);
  };

  return (
    <div className="p-6 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          {course ? "Edit Course" : "Add New Course"}
        </h2>
        <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted/50">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            placeholder="Course title"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Subtitle</label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            placeholder="Course subtitle"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          >
            {courseCategories.filter(c => c !== "All Courses").map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Level</label>
          <select
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          >
            <option>Beginner</option>
            <option>Beginner Friendly</option>
            <option>Beginner to Intermediate</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>All Levels</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Pricing Mode</label>
          <select
            value={formData.pricingMode}
            onChange={(e) => setFormData({ ...formData, pricingMode: e.target.value as PricingMode })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          >
            <option value="single">Single Price</option>
            <option value="multiple">Multiple Packages</option>
            <option value="free">Free Course</option>
            <option value="coming_soon">Coming Soon</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "coming_soon" | "free" })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          >
            <option value="active">Active</option>
            <option value="coming_soon">Coming Soon</option>
            <option value="free">Free</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price (৳)</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            placeholder="1499"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Regular Price (৳)</label>
          <input
            type="number"
            value={formData.regularPrice}
            onChange={(e) => setFormData({ ...formData, regularPrice: Number(e.target.value) })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            placeholder="2999"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Total Lessons</label>
          <input
            type="number"
            value={formData.lessons}
            onChange={(e) => setFormData({ ...formData, lessons: Number(e.target.value) })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            placeholder="80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duration</label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
            placeholder="25+ Hours"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Badge</label>
          <select
            value={formData.badge}
            onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          >
            <option value="">No Badge</option>
            <option value="New">New</option>
            <option value="Best Seller">Best Seller</option>
            <option value="Coming Soon">Coming Soon</option>
            <option value="Free">Free</option>
            <option value="Launch Offer">Launch Offer</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Language</label>
          <select
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          >
            <option>Bangla</option>
            <option>English</option>
            <option>Bangla + English</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
            placeholder="Course description..."
          />
        </div>

        {/* Toggles */}
        <div className="md:col-span-2 flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 rounded accent-primary-500"
            />
            <span className="text-sm">Featured Course</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.visible}
              onChange={(e) => setFormData({ ...formData, visible: e.target.checked })}
              className="w-4 h-4 rounded accent-primary-500"
            />
            <span className="text-sm">Visible</span>
          </label>
        </div>
      </div>

      <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
        <Button variant="primary" size="md" onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          {course ? "Update Course" : "Save Course"}
        </Button>
        <Button variant="ghost" size="md" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
