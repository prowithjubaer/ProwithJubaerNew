"use client";

import { motion } from "framer-motion";
import {
  Award,
  Download,
  Share2,
  Calendar,
  Hash,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { certificates } from "@/data/dashboard-data";

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          My Certificates
        </h1>
        <p className="text-muted-foreground mt-1">
          আপনার অর্জিত certificates এখানে দেখুন এবং download করুন।
        </p>
      </motion.div>

      {/* Certificates Grid */}
      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              {/* Certificate Preview */}
              <div className="relative p-6 bg-gradient-to-br from-primary-600/10 via-accent-cyan/5 to-primary-500/10 border-b border-border/30">
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cta-orange to-cta-yellow flex items-center justify-center">
                    <Award size={14} className="text-white" />
                  </div>
                </div>

                {/* Mini Certificate Preview */}
                <div className="bg-card/90 rounded-xl border border-border/50 p-6 text-center shadow-lg">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center mb-3">
                    <Award size={20} className="text-white" />
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                    Certificate of Completion
                  </p>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {cert.courseName}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Awarded to
                  </p>
                  <p className="text-sm font-semibold gradient-text">
                    {cert.studentName}
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <p className="text-[10px] text-muted-foreground">
                      Pro with Jubaer • {cert.completionDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-foreground text-base">
                    {cert.courseName}
                  </h3>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    <span>
                      Completed:{" "}
                      {new Date(cert.completionDate).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Hash size={14} />
                    <span>Certificate ID: {cert.certificateId}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <Button variant="primary" size="sm" className="flex-1">
                    <Download size={14} className="mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 size={14} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-dashed border-border/50 bg-card/40 backdrop-blur-sm p-12 text-center"
        >
          <Award size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            এখনো কোনো certificate নেই
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
            Course complete করলে আপনি certificate পাবেন। Learning continue করুন!
          </p>
        </motion.div>
      )}

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
      >
        <h3 className="text-base font-bold text-foreground mb-3">
          Certificate সম্পর্কে
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <Award size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
            <span>
              Course 100% complete করলে automatically certificate generate হবে
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Download size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
            <span>PDF format এ download করতে পারবেন এবং print করতে পারবেন</span>
          </div>
          <div className="flex items-start gap-2">
            <ExternalLink size={16} className="text-cta-orange mt-0.5 flex-shrink-0" />
            <span>
              LinkedIn এবং social media তে share করতে পারবেন
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
