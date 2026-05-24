"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/site-data";
import { Plus, Edit, Trash2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminTestimonials() {
  const [testimonials] = useState(testimonialsData);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Testimonials Manager</h1>
          <p className="text-muted-foreground text-sm">
            Manage client and student testimonials
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl border border-border/50 bg-card/50"
        >
          <h2 className="text-xl font-bold mb-4">Add New Testimonial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Client name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role / Title</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="YouTuber, Student, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Platform</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option>Remote Client</option>
                <option>Course Student</option>
                <option>YouTube</option>
                <option>Fiverr</option>
                <option>Upwork</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Testimonial</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="What the client/student said..."
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" size="sm">Save Testimonial</Button>
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </motion.div>
      )}

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-border/50 bg-card/50 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm">{testimonial.name}</h3>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="ml-2 text-xs px-2 py-0.5 rounded bg-primary-500/10 text-primary-400">
                      {testimonial.platform}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
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
