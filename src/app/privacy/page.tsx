"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: January 2024</p>

          <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you fill out a contact form, enroll in a course, or create an account. This may include:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Name and email address</li>
                <li>Phone number (optional)</li>
                <li>Payment information for course purchases</li>
                <li>Messages and project details submitted via forms</li>
                <li>Account credentials for student/admin access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Respond to your inquiries and project requests</li>
                <li>Process course enrollments and provide access</li>
                <li>Send relevant updates about courses and services</li>
                <li>Improve our website and user experience</li>
                <li>Communicate about projects and deliverables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We strive to use commercially acceptable means to protect your data.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience on our site. This includes remembering your theme preference (dark/light mode) and tracking basic analytics to improve our content.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
              <p>We may use third-party services for payment processing, email communication, and analytics. These services have their own privacy policies governing the use of your information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. Contact us at hello@prowithjubaer.com for any privacy-related requests.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Contact</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2"><strong className="text-foreground">Email:</strong> hello@prowithjubaer.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
