"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FolderOpen,
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  MessageSquare,
  FileText,
  Globe,
  Palette,
  BarChart3,
  Settings,
} from "lucide-react";

const stats = [
  { title: "Total Projects", value: "150+", change: "+12 this month", icon: FolderOpen, color: "bg-primary-500/10 text-primary-500" },
  { title: "Active Courses", value: "4", change: "10,000+ students", icon: BookOpen, color: "bg-accent-cyan/10 text-accent-cyan" },
  { title: "Total Students", value: "10,200", change: "+340 this month", icon: Users, color: "bg-green-500/10 text-green-500" },
  { title: "Revenue", value: "৳2.5M+", change: "+18% this month", icon: DollarSign, color: "bg-cta-orange/10 text-cta-orange" },
];

const recentActivities = [
  { action: "New enrollment", detail: "Video Editing Masterclass", time: "2 min ago" },
  { action: "New message", detail: "Client inquiry from Alex Chen", time: "15 min ago" },
  { action: "Course review", detail: "5-star review on Thumbnail Masterclass", time: "1 hour ago" },
  { action: "Portfolio update", detail: "Gaming Montage project added", time: "3 hours ago" },
  { action: "New enrollment", detail: "Motion Graphics Pro course", time: "5 hours ago" },
  { action: "Blog published", detail: "AI Tools for Video Editors 2024", time: "1 day ago" },
];

const quickLinks = [
  { label: "Portfolio", icon: FolderOpen, href: "/admin/portfolio", desc: "Manage projects" },
  { label: "Courses", icon: BookOpen, href: "/admin/courses", desc: "Manage courses" },
  { label: "Services", icon: Globe, href: "/admin/services", desc: "Edit services" },
  { label: "Testimonials", icon: MessageSquare, href: "/admin/testimonials", desc: "Manage reviews" },
  { label: "Blog Posts", icon: FileText, href: "/admin/blog", desc: "Write & edit posts" },
  { label: "Header/Hero", icon: Palette, href: "/admin/header-hero", desc: "Edit header & hero" },
  { label: "Site Settings", icon: Settings, href: "/admin/settings", desc: "General settings" },
  { label: "Analytics", icon: BarChart3, href: "/admin/settings", desc: "View traffic" },
];

export default function AdminDashboard() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Welcome back, Jubaer! Here&apos;s your website overview.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-5 rounded-2xl border border-border/50 bg-card/50"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="text-xs text-green-500 mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.action}</p>
                  <p className="text-xs text-muted-foreground truncate">{activity.detail}</p>
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all text-center"
              >
                <link.icon className="w-6 h-6 text-primary-500" />
                <span className="text-sm font-medium">{link.label}</span>
                <span className="text-[10px] text-muted-foreground">{link.desc}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
