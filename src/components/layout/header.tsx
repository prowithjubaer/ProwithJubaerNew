"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Download, LogIn } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigationLinks as staticNavLinks } from "@/data/site-data";
import { useNavigationData } from "@/hooks/use-site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Hide header on admin pages
  if (pathname?.startsWith("/admin")) return null;

  const navigationLinks = useNavigationData();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-strong shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </div>
              <span className="text-lg font-bold hidden sm:inline">
                <span className="gradient-text">Pro</span>
                <span className="text-foreground"> with </span>
                <span className="gradient-text">Jubaer</span>
              </span>
            </Link>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-primary-500 bg-primary-500/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary-500/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              {/* Download Resume - Desktop only */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary-500/5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>

              {/* Login - Desktop only */}
              <Link
                href="/login"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary-500/5 transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>

              {/* Hire Me Button - Desktop */}
              <Link href="/contact" className="hidden md:block">
                <Button variant="primary" size="sm">
                  Hire Me
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary-500/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="glass-strong mx-4 mt-2 rounded-2xl p-4 shadow-xl">
              <nav className="flex flex-col gap-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-primary-500 bg-primary-500/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary-500/5"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-border/50 my-2" />
                <Link
                  href="/login"
                  className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary-500/5 flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Student Login
                </Link>
                <a
                  href="/resume.pdf"
                  className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary-500/5 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <Link href="/contact" className="mt-2">
                  <Button variant="primary" size="md" className="w-full">
                    Hire Me
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom CTA */}
      {!isMobileMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
          <div className="glass-strong border-t border-border/50 px-4 py-3">
            <div className="flex items-center gap-3">
              <Link href="/contact" className="flex-1">
                <Button variant="primary" size="md" className="w-full text-sm">
                  Hire Me
                </Button>
              </Link>
              <Link href="/courses" className="flex-1">
                <Button variant="cta" size="md" className="w-full text-sm">
                  Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
