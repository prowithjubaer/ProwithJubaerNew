"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Home, BookOpen, Mail } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Success Icon */}
          <div className="relative inline-flex mb-8">
            <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center border-2 border-green-500/30">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Thank You!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-3">
            Your message has been received successfully.
          </p>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I typically respond within 24 hours. In the meantime, feel free to explore
            my portfolio or check out my courses.
          </p>

          {/* What happens next */}
          <div className="p-6 rounded-2xl border border-border/50 bg-card/50 mb-10 text-left">
            <h3 className="font-bold text-lg mb-4 text-center">What Happens Next?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-500">
                  1
                </div>
                <div>
                  <p className="font-medium text-sm">I&apos;ll review your message</p>
                  <p className="text-xs text-muted-foreground">Usually within a few hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-500">
                  2
                </div>
                <div>
                  <p className="font-medium text-sm">I&apos;ll send you a detailed reply</p>
                  <p className="text-xs text-muted-foreground">With next steps or a project proposal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-500">
                  3
                </div>
                <div>
                  <p className="font-medium text-sm">We&apos;ll schedule a call if needed</p>
                  <p className="text-xs text-muted-foreground">To discuss your project in detail</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button variant="secondary" size="lg">
                <Home className="w-4 h-4 mr-2" />
                Back Home
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="primary" size="lg" className="group">
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="cta" size="lg">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Courses
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
