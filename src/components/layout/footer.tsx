"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { socialLinks, navigationLinks } from "@/data/site-data";

const socialIcons = [
  { label: "YouTube", href: socialLinks.youtube, letter: "YT" },
  { label: "Facebook", href: socialLinks.facebook, letter: "FB" },
  { label: "Instagram", href: socialLinks.instagram, letter: "IG" },
  { label: "LinkedIn", href: socialLinks.linkedin, letter: "LI" },
  { label: "Twitter", href: socialLinks.twitter, letter: "X" },
  { label: "GitHub", href: socialLinks.github, letter: "GH" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-transparent to-primary-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
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
            <p className="text-muted-foreground max-w-md mb-6">
              Crafting cinematic videos, stunning motion graphics, and
              scroll-stopping visuals. Available for remote projects worldwide
              and teaching creative skills to Bangladeshi learners.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center transition-colors duration-200 border border-primary-500/10"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold text-primary-500">{social.letter}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {[
                "Video Editing",
                "Motion Graphics",
                "Thumbnail Design",
                "Graphic Design",
                "Content Workflow",
                "Web Design",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary-500 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {new Date().getFullYear()} Pro with Jubaer. Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Md
            Jubaer Ahmed
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
