"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { socialLinks as staticSocial } from "@/data/site-data";
import { useSocialLinks } from "@/hooks/use-site-data";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const socialLinks = useSocialLinks();
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Want to hire me for ongoing work? Or just
              want to say hi? I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm">
                    <option value="">Select a service...</option>
                    <option>Video Editing</option>
                    <option>Motion Graphics</option>
                    <option>Thumbnail Design</option>
                    <option>Graphic Design</option>
                    <option>Content Workflow Support</option>
                    <option>Web Design</option>
                    <option>Monthly Retainer</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm">
                    <option value="">Select budget...</option>
                    <option>$50 - $200</option>
                    <option>$200 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000+</option>
                    <option>Monthly Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm resize-none"
                    placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {formStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@prowithjubaer.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Bangladesh (Working Remotely)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      Available for quick chats
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "YouTube", href: socialLinks.youtube, letter: "YT" },
                  { label: "Facebook", href: socialLinks.facebook, letter: "FB" },
                  { label: "Instagram", href: socialLinks.instagram, letter: "IG" },
                  { label: "LinkedIn", href: socialLinks.linkedin, letter: "LI" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-primary-500/5 hover:bg-primary-500/10 border border-border/50 hover:border-primary-500/30 transition-all group"
                  >
                    <span className="text-xs font-bold text-primary-500 w-5 h-5 flex items-center justify-center">{social.letter}</span>
                    <span className="text-sm font-medium">{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 text-primary-500 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Freelance Platforms */}
            <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold mb-4">Hire Me On</h3>
              <div className="space-y-3">
                <a
                  href={socialLinks.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-green-500/5 hover:bg-green-500/10 border border-green-500/20 transition-all group"
                >
                  <span className="font-medium text-sm">Fiverr</span>
                  <ArrowUpRight className="w-4 h-4 text-green-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-green-500/5 hover:bg-green-500/10 border border-green-500/20 transition-all group"
                >
                  <span className="font-medium text-sm">Upwork</span>
                  <ArrowUpRight className="w-4 h-4 text-green-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
