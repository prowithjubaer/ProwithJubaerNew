"use client";

import { Sparkles, Award } from "lucide-react";

interface CertificateProps {
  studentName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
}

export function Certificate({
  studentName,
  courseName,
  completionDate,
  certificateId,
}: CertificateProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[1.4/1] rounded-2xl overflow-hidden border-2 border-primary-500/20 bg-gradient-to-br from-[#0f0a1e] via-[#1a1033] to-[#0d1117] p-8 md:p-12">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-cta-orange/5 rounded-full blur-2xl" />

      {/* Border pattern */}
      <div className="absolute inset-3 rounded-xl border border-primary-500/20" />
      <div className="absolute inset-4 rounded-lg border border-accent-cyan/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Top: Logo & Title */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold text-white/80">
            Pro with Jubaer
          </span>
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] text-primary-400/80 mb-4">
          Certificate of Completion
        </p>

        {/* Award icon */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cta-orange/20 to-cta-yellow/20 border border-cta-orange/30 flex items-center justify-center mb-4">
          <Award className="w-7 h-7 text-cta-orange" />
        </div>

        {/* This certifies */}
        <p className="text-xs text-muted-foreground mb-1">
          This certifies that
        </p>

        {/* Student Name */}
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
          {studentName}
        </h2>

        {/* Course completion text */}
        <p className="text-xs text-muted-foreground mb-1">
          has successfully completed the course
        </p>

        {/* Course Name */}
        <h3 className="text-base md:text-lg font-semibold text-white mb-6">
          {courseName}
        </h3>

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mb-4" />

        {/* Bottom details */}
        <div className="flex items-center gap-8 text-[10px] text-muted-foreground">
          <div className="text-center">
            <p className="text-white/60 mb-0.5">Date</p>
            <p className="font-medium text-white/80">{completionDate}</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 mb-0.5">Certificate ID</p>
            <p className="font-mono font-medium text-white/80">{certificateId}</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 mb-0.5">Instructor</p>
            <p className="font-medium text-white/80">Md Jubaer Ahmed</p>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-primary-500/40 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-primary-500/40 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-primary-500/40 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-primary-500/40 rounded-br-sm" />
    </div>
  );
}
