"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground mb-10">Last updated: January 2024</p>

          <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Services</h2>
              <p>Pro with Jubaer provides video editing, motion graphics, graphic design, and related creative services. We also offer online courses and educational resources. By using our services, you agree to these terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Freelance Services</h2>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Project scope, timeline, and pricing are agreed upon before work begins</li>
                <li>Payment terms: 50% upfront, 50% upon delivery (unless otherwise agreed)</li>
                <li>Revisions are included as per the agreed package (typically 2-3 rounds)</li>
                <li>Additional revisions beyond the scope may incur extra charges</li>
                <li>Final files are delivered only after full payment is received</li>
                <li>Client retains usage rights; I retain portfolio display rights unless agreed otherwise</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Course Enrollment</h2>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Course access is granted upon successful payment</li>
                <li>Lifetime access means access for as long as the platform exists</li>
                <li>Course content may not be shared, resold, or distributed</li>
                <li>Certificates are issued upon course completion</li>
                <li>Course content is updated periodically at our discretion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Intellectual Property</h2>
              <p>All website content, course materials, and creative work displayed on this site are the intellectual property of Pro with Jubaer / Md Jubaer Ahmed unless otherwise stated. Unauthorized reproduction or distribution is prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Account Responsibility</h2>
              <p>If you create an account on our platform, you are responsible for maintaining the confidentiality of your login credentials. One account per person — sharing accounts is not permitted.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>Pro with Jubaer is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability is limited to the amount paid for the specific service in question.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
              <p>For questions about these Terms &amp; Conditions, contact us at:</p>
              <p className="mt-2"><strong className="text-foreground">Email:</strong> hello@prowithjubaer.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
