"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Message Sent! ✅
          </h2>
          <p className="text-muted-foreground mb-6">
            আপনার message successfully পাঠানো হয়েছে। আমি যত দ্রুত সম্ভব reply
            করবো। ধন্যবাদ!
          </p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m available for remote video editing, motion graphics, and
            creative projects. Also happy to answer questions about courses.
            Let&apos;s create something awesome!
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 lg:p-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full h-11 rounded-xl border ${
                      errors.name
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-border/50 focus:border-primary-500/50"
                    } bg-muted/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full h-11 rounded-xl border ${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-border/50 focus:border-primary-500/50"
                    } bg-muted/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Company / Brand
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or brand name"
                  className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                />
              </div>

              {/* Project Type & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all appearance-none"
                  >
                    <option value="">Select type</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="motion-graphics">Motion Graphics</option>
                    <option value="thumbnail-design">Thumbnail Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="content-workflow">Content Workflow</option>
                    <option value="course-inquiry">Course Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all appearance-none"
                  >
                    <option value="">Select budget</option>
                    <option value="under-100">Under $100</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                    <option value="discuss">Let&apos;s Discuss</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all appearance-none"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP / Rush</option>
                  <option value="1-week">Within 1 week</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or question..."
                  rows={5}
                  className={`w-full rounded-xl border ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-border/50 focus:border-primary-500/50"
                  } bg-muted/30 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <Button variant="cta" size="lg" type="submit" className="w-full sm:w-auto">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6">
              <h3 className="text-base font-bold text-foreground mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href="mailto:prowithjubaer@gmail.com"
                      className="text-sm text-foreground hover:text-primary-500 transition-colors"
                    >
                      prowithjubaer@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Bangladesh 🇧🇩</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cta-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-cta-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Availability
                    </p>
                    <p className="text-sm text-foreground">
                      Available for remote work worldwide. Response within 24
                      hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm p-6">
              <h3 className="text-base font-bold text-foreground mb-2">
                Course সম্পর্কে জানতে চান?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Courses নিয়ে কোনো প্রশ্ন থাকলে WhatsApp এ সরাসরি message করুন।
                দ্রুত reply পাবেন!
              </p>
              <a
                href="https://wa.me/8801700000000?text=Hi, I want to know about your courses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="md"
                  className="w-full bg-green-600 hover:bg-green-500 shadow-green-500/25"
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp এ Message করুন
                </Button>
              </a>
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6">
              <h3 className="text-base font-bold text-foreground mb-3">
                Response Time
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Client Projects
                  </span>
                  <span className="text-foreground font-medium">
                    Within 12 hours
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Course Questions
                  </span>
                  <span className="text-foreground font-medium">
                    Within 24 hours
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    General Inquiry
                  </span>
                  <span className="text-foreground font-medium">
                    Within 48 hours
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
