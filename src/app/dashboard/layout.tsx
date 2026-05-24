"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  BarChart3,
  Award,
  CreditCard,
  Settings,
  HelpCircle,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";
import { studentProfile } from "@/data/dashboard-data";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: BarChart3 },
  { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Progress", href: "/dashboard/progress", icon: BarChart3 },
  { name: "Certificates", href: "/dashboard/certificates", icon: Award },
  { name: "Purchases", href: "/dashboard/purchases", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/50 glass-strong">
        <div className="flex items-center justify-between h-full px-4 lg:px-8">
          {/* Left: Logo + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary-500/10 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold gradient-text">
                Pro with Jubaer
              </span>
            </Link>
          </div>

          {/* Right: Student Info */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-foreground">
                {studentProfile.name}
              </p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-16 bottom-0 border-r border-border/50 glass overflow-y-auto">
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/dashboard" &&
                  pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary-500/10 text-primary-500 shadow-sm"
                      : "text-muted-foreground hover:bg-primary-500/5 hover:text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 w-1 h-8 bg-primary-500 rounded-r-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border/50">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 w-full">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Sidebar - Mobile */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed left-0 top-16 bottom-0 z-50 w-64 border-r border-border/50 glass-strong lg:hidden overflow-y-auto"
              >
                <nav className="flex-1 p-4 space-y-1">
                  {sidebarLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/dashboard" &&
                        pathname.startsWith(link.href));
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-500/10 text-primary-500 shadow-sm"
                            : "text-muted-foreground hover:bg-primary-500/5 hover:text-foreground"
                        }`}
                      >
                        <Icon size={18} />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="p-4 border-t border-border/50">
                  <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 w-full">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 min-h-[calc(100vh-4rem)]">
          <div className="p-4 lg:p-8 pt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
