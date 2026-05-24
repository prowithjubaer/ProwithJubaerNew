"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Download,
  Trash2,
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronUp,
  Reply,
} from "lucide-react";

interface Message {
  id: string;
  senderName: string;
  email: string;
  subject: string;
  projectType: string;
  date: string;
  read: boolean;
  message: string;
  replied: boolean;
}

const mockMessages: Message[] = [
  {
    id: "1",
    senderName: "Karim Uddin",
    email: "karim@company.com",
    subject: "YouTube Channel Video Editing",
    projectType: "Video Editing",
    date: "2025-01-20",
    read: false,
    message:
      "আমি আমার YouTube channel এর জন্য regular video editing service নিতে চাই। প্রতি সপ্তাহে ৩-৪টা video আসবে। দয়া করে pricing জানাবেন।",
    replied: false,
  },
  {
    id: "2",
    senderName: "Sarah Rahman",
    email: "sarah@startup.io",
    subject: "Company Promo Video",
    projectType: "Motion Graphics",
    date: "2025-01-19",
    read: true,
    message:
      "আমাদের startup এর জন্য একটা 60-second promo video দরকার with motion graphics। Budget around ৳15,000-20,000। Interested?",
    replied: true,
  },
  {
    id: "3",
    senderName: "Masud Rana",
    email: "masud@gmail.com",
    subject: "Course Enrollment Query",
    projectType: "General",
    date: "2025-01-18",
    read: false,
    message:
      "Video Editing Masterclass course টি কি এখনো available? আমি bKash দিয়ে pay করতে চাই কিন্তু problem হচ্ছে। Please help.",
    replied: false,
  },
  {
    id: "4",
    senderName: "Nadia Sultana",
    email: "nadia@agency.com",
    subject: "Social Media Content Package",
    projectType: "Graphic Design",
    date: "2025-01-17",
    read: true,
    message:
      "আমাদের agency র জন্য monthly social media content package নিতে চাই। Instagram + Facebook posts, stories, reels। Monthly rate কত?",
    replied: false,
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const unreadCount = messages.filter((m) => !m.read).length;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    // Mark as read when expanded
    setMessages(
      messages.map((m) => (m.id === id ? { ...m, read: true } : m))
    );
  };

  const markAsRead = (id: string) => {
    setMessages(
      messages.map((m) => (m.id === id ? { ...m, read: true } : m))
    );
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter((m) => m.id !== id));
    if (expandedId === id) setExpandedId(null);
  };

  const handleExport = () => {
    const headers = "Sender,Email,Subject,Date,Status\n";
    const rows = messages
      .map(
        (m) =>
          `${m.senderName},${m.email},${m.subject},${m.date},${m.read ? "Read" : "Unread"}`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "messages.csv";
    a.click();
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
        <p className="text-muted-foreground">
          View and manage messages from your contact form.{" "}
          {unreadCount > 0 && (
            <span className="text-primary-500 font-medium">
              {unreadCount} unread
            </span>
          )}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 hover:border-primary-500 text-sm font-medium transition-all"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Messages List */}
      <div className="space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
          >
            {/* Message Header Row */}
            <button
              onClick={() => toggleExpand(msg.id)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/30 transition-colors text-left"
            >
              {/* Read status dot */}
              <div className="flex-shrink-0">
                {msg.read ? (
                  <Circle className="w-3 h-3 text-muted-foreground/30" />
                ) : (
                  <Circle className="w-3 h-3 fill-primary-500 text-primary-500" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`text-sm ${!msg.read ? "font-bold" : "font-medium"}`}
                  >
                    {msg.senderName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {msg.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground truncate">
                    {msg.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-accent-cyan/10 text-accent-cyan flex-shrink-0">
                    {msg.projectType}
                  </span>
                </div>
              </div>

              {/* Date and expand */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {msg.replied && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/10 text-green-500">
                    Replied
                  </span>
                )}
                <span className="text-xs text-muted-foreground">
                  {msg.date}
                </span>
                {expandedId === msg.id ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === msg.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-border/30"
                >
                  <div className="p-4">
                    <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                      {msg.message}
                    </p>
                    <div className="flex items-center gap-2">
                      {!msg.read && (
                        <button
                          onClick={() => markAsRead(msg.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-all"
                        >
                          <CheckCircle className="w-3 h-3" />
                          Mark Read
                        </button>
                      )}
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-all">
                        <Reply className="w-3 h-3" />
                        Reply
                      </button>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-12 text-muted-foreground rounded-2xl border border-border/50 bg-card/50">
            <Mail className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>No messages yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
