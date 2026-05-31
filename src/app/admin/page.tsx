"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  BookOpen,
  Users,
  MessageSquare,
  TrendingUp,
  Mail,
  FileText,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { useDashboardStore } from "@/store/admin-store";

export default function AdminDashboard() {
  const { stats, recentContacts, loading, fetchDashboard } = useDashboardStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (loading && !stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Projects",
      value: stats?.totalProjects || 0,
      icon: FolderOpen,
      color: "bg-primary-500/10 text-primary-500",
    },
    {
      title: "Active Courses",
      value: stats?.totalCourses || 0,
      icon: BookOpen,
      color: "bg-accent-cyan/10 text-accent-cyan",
    },
    {
      title: "Total Students",
      value: stats?.totalStudents?.toLocaleString() || "0",
      icon: Users,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Blog Posts",
      value: stats?.totalBlogPosts || 0,
      icon: FileText,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Testimonials",
      value: stats?.totalTestimonials || 0,
      icon: MessageSquare,
      color: "bg-cta-orange/10 text-cta-orange",
    },
    {
      title: "New Messages",
      value: stats?.newMessages || 0,
      icon: Mail,
      color: "bg-red-500/10 text-red-500",
    },
  ];

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Welcome back! Here&apos;s your website overview.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-5 rounded-2xl border border-border/50 bg-card/50"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-border/50 bg-card/50 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Messages</h2>
            <a
              href="/admin/messages"
              className="text-xs text-primary-500 hover:underline flex items-center gap-1"
            >
              View All <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          {recentContacts.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">
              No messages yet. Contact submissions will appear here.
            </p>
          ) : (
            <div className="space-y-3">
              {recentContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/30"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-xs font-bold text-primary-500 flex-shrink-0">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">
                        {contact.name}
                      </p>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          contact.status === "new"
                            ? "bg-green-500/10 text-green-500"
                            : contact.status === "read"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {contact.subject || contact.message?.slice(0, 50)}
                    </p>
                  </div>
                  <span className="text-[10px] text-muted-foreground flex-shrink-0">
                    {new Date(contact.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
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
            {[
              { label: "Add Project", href: "/admin/portfolio", icon: FolderOpen },
              { label: "Add Course", href: "/admin/courses", icon: BookOpen },
              { label: "Write Post", href: "/admin/blog", icon: FileText },
              { label: "Edit Hero", href: "/admin/header-hero", icon: TrendingUp },
              { label: "Messages", href: "/admin/messages", icon: Mail },
              { label: "Settings", href: "/admin/settings", icon: MessageSquare },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all text-center"
              >
                <link.icon className="w-6 h-6 text-primary-500" />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
