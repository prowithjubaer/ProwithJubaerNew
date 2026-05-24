"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { coursesData } from "@/data/site-data";
import { Plus, Edit, Trash2, Eye, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminCourses() {
  const [courses] = useState(coursesData);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Course Manager</h1>
          <p className="text-muted-foreground text-sm">
            Manage your courses and pricing
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Add Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl border border-border/50 bg-card/50"
        >
          <h2 className="text-xl font-bold mb-4">Add New Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Course title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subtitle</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Course subtitle"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price (BDT)</label>
              <input
                type="number"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="2999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Original Price (BDT)</label>
              <input
                type="number"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="5999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option>Video Editing</option>
                <option>Motion Graphics</option>
                <option>Graphic Design</option>
                <option>AI & Workflow</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Level</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>All Levels</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="30+ Hours"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Total Lessons</label>
              <input
                type="number"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="85"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="Course description..."
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" size="sm">
              Save Course
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-border/50 bg-card/50 p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.subtitle}</p>
              </div>
              {course.tag && (
                <span className="px-2 py-1 rounded text-xs font-bold bg-cta-orange/10 text-cta-orange">
                  {course.tag}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                {course.rating}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {course.students.toLocaleString()}
              </span>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">
                {course.level}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div>
                <span className="text-lg font-bold">
                  ৳{course.price.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground line-through ml-2">
                  ৳{course.originalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
