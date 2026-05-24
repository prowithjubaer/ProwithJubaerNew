"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Bell,
  Globe,
  Camera,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { studentProfile } from "@/data/dashboard-data";

export default function SettingsPage() {
  const [name, setName] = useState(studentProfile.name);
  const [email, setEmail] = useState(studentProfile.email);
  const [phone, setPhone] = useState(studentProfile.phone);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState("bangla");

  const [notifications, setNotifications] = useState({
    courseUpdates: true,
    newCourses: true,
    promotions: false,
    weeklyDigest: true,
    lessonReminders: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          Profile Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          আপনার profile information এবং preferences update করুন।
        </p>
      </motion.div>

      {/* Avatar Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
      >
        <h3 className="text-base font-bold text-foreground mb-4">
          Profile Photo
        </h3>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center border-2 border-[var(--card)] hover:bg-primary-400 transition-colors">
              <Camera size={12} className="text-white" />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Upload a new photo
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              JPG, PNG or GIF. Max 2MB.
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              Upload Photo
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
      >
        <h3 className="text-base font-bold text-foreground mb-4">
          Personal Information
        </h3>
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Full Name
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Phone Number
            </label>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>
          </div>

          <Button variant="primary" size="md">
            <Save size={16} className="mr-2" />
            Save Changes
          </Button>
        </div>
      </motion.div>

      {/* Change Password */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
      >
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <Lock size={16} className="text-primary-500" />
          Change Password
        </h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Current Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full h-11 rounded-xl border border-border/50 bg-muted/30 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
            />
          </div>

          <Button variant="secondary" size="md">
            Update Password
          </Button>
        </div>
      </motion.div>

      {/* Notification Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
      >
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <Bell size={16} className="text-accent-cyan" />
          Notification Preferences
        </h3>
        <div className="space-y-3">
          {[
            {
              key: "courseUpdates" as const,
              label: "Course Updates",
              desc: "Get notified when courses you're enrolled in are updated",
            },
            {
              key: "newCourses" as const,
              label: "New Courses",
              desc: "Be the first to know about new course launches",
            },
            {
              key: "promotions" as const,
              label: "Promotions & Offers",
              desc: "Receive special discounts and promotional offers",
            },
            {
              key: "weeklyDigest" as const,
              label: "Weekly Digest",
              desc: "Weekly summary of your learning progress",
            },
            {
              key: "lessonReminders" as const,
              label: "Lesson Reminders",
              desc: "Reminder to continue your courses",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.desc}
                </p>
              </div>
              <button
                onClick={() => toggleNotification(item.key)}
                className={`w-11 h-6 rounded-full transition-all duration-200 relative ${
                  notifications[item.key]
                    ? "bg-primary-500"
                    : "bg-muted-foreground/30"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 ${
                    notifications[item.key] ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Language Preference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6"
      >
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <Globe size={16} className="text-cta-orange" />
          Language Preference
        </h3>
        <div className="flex gap-3">
          {[
            { value: "bangla", label: "বাংলা (Bangla)" },
            { value: "english", label: "English" },
          ].map((lang) => (
            <button
              key={lang.value}
              onClick={() => setLanguage(lang.value)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                language === lang.value
                  ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                  : "border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
