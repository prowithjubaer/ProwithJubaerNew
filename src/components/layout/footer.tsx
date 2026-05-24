"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { socialLinks } from "@/data/site-data";

const socialIcons = [
  { label: "YouTube", href: socialLinks.youtube, letter: "YT" },
  { label: "Facebook", href: socialLinks.facebook, letter: "FB" },
  { label: "LinkedIn", href: socialLinks.linkedin, letter: "LI" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-transparent to-primary-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">Pro</span>
                <span> with </span>
                <span className="gradient-text">Jubaer</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-foreground mb-1">
              Video Editor & Motion Graphics Designer
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Creating engaging videos, motion graphics, thumbnails, and practical digital skill courses.
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center transition-colors duration-200 border border-primary-500/10"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold text-primary-500">{social.letter}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigate</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Portfolio", href: "/portfolio" },
                { name: "Services", href: "/services" },
                { name: "Courses", href: "/courses" },
                { name: "Blog", href: "/blog" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Courses</h3>
            <ul className="space-y-2.5">
              {[
                { name: "AI Expert Course", href: "/courses/ai-expert-content-creation" },
                { name: "Video Editing Course", href: "/courses" },
                { name: "Motion Graphics Course", href: "/courses" },
                { name: "Graphic Design Course", href: "/courses" },
                { name: "Free AI Prompting", href: "/courses" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500" />
                <a
                  href="mailto:prowithjubaer@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  prowithjubaer@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-green-500 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Available for:</p>
              <div className="flex flex-wrap gap-1.5">
                {["Remote Work", "Freelance", "Collaboration"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary-500/10 text-primary-400 border border-primary-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {new Date().getFullYear()} Pro with Jubaer. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="hover:text-primary-500 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
