"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Refund Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: January 2024</p>

          <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Course Refund Policy</h2>
              <div className="p-5 rounded-xl border border-green-500/20 bg-green-500/5 mb-4">
                <p className="text-green-600 dark:text-green-400 font-medium">✅ 30-Day Money-Back Guarantee</p>
                <p className="text-sm mt-1">All courses come with a 30-day money-back guarantee. If you&apos;re not satisfied with the course content, you can request a full refund within 30 days of purchase.</p>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Conditions for Course Refund:</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Refund must be requested within 30 days of purchase</li>
                <li>Less than 30% of course content should be consumed</li>
                <li>Refund request must be submitted via email with order details</li>
                <li>Refunds are processed within 7-10 business days</li>
                <li>Refund is issued to the original payment method</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Freelance Service Refund Policy</h2>
              <h3 className="text-lg font-bold text-foreground mb-2">Before Work Begins:</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Full refund of advance payment if cancelled before work starts</li>
                <li>Cancellation must be communicated in writing (email)</li>
              </ul>
              <h3 className="text-lg font-bold text-foreground mb-2 mt-4">After Work Begins:</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Partial refund based on work completed (pro-rated)</li>
                <li>Work already delivered is non-refundable</li>
                <li>If the work doesn&apos;t meet agreed-upon specifications after all revision rounds, a partial refund may be offered</li>
              </ul>
              <h3 className="text-lg font-bold text-foreground mb-2 mt-4">Non-Refundable:</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Work that has been delivered and approved by the client</li>
                <li>Rush delivery fees</li>
                <li>Third-party costs (stock footage, music licenses, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">How to Request a Refund</h2>
              <p>To request a refund, please email us with:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Your name and email used for purchase</li>
                <li>Order/transaction ID</li>
                <li>Reason for refund request</li>
                <li>Date of purchase</li>
              </ul>
              <p className="mt-3"><strong className="text-foreground">Email:</strong> hello@prowithjubaer.com</p>
              <p className="mt-1 text-sm">We aim to respond to all refund requests within 48 hours.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Dispute Resolution</h2>
              <p>If you&apos;re unsatisfied with a refund decision, please reach out again with additional details. We are committed to fair resolution and will work with you to find a satisfactory outcome.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
