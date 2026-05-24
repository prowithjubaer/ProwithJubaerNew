"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Check,
  X,
  Eye,
  Plus,
  Filter,
} from "lucide-react";

interface Enrollment {
  id: string;
  date: string;
  studentName: string;
  course: string;
  amount: number;
  paymentMethod: "bKash" | "Nagad" | "Rocket" | "Bank";
  transactionId: string;
  screenshot: boolean;
  status: "pending" | "approved" | "rejected";
}

const mockEnrollments: Enrollment[] = [
  {
    id: "1",
    date: "2025-01-20",
    studentName: "Rakib Hasan",
    course: "Professional Video Editing Masterclass",
    amount: 2999,
    paymentMethod: "bKash",
    transactionId: "TXN8A7B2C1D",
    screenshot: true,
    status: "pending",
  },
  {
    id: "2",
    date: "2025-01-19",
    studentName: "Fatima Akter",
    course: "Motion Graphics with After Effects",
    amount: 3499,
    paymentMethod: "Nagad",
    transactionId: "TXN9C3D4E5F",
    screenshot: true,
    status: "approved",
  },
  {
    id: "3",
    date: "2025-01-18",
    studentName: "Tanvir Ahmed",
    course: "YouTube Growth & SEO Masterclass",
    amount: 1999,
    paymentMethod: "Rocket",
    transactionId: "TXN2E5F6G7H",
    screenshot: false,
    status: "rejected",
  },
  {
    id: "4",
    date: "2025-01-17",
    studentName: "Nusrat Jahan",
    course: "Professional Video Editing Masterclass",
    amount: 2999,
    paymentMethod: "Bank",
    transactionId: "TXN4G7H8I9J",
    screenshot: true,
    status: "approved",
  },
  {
    id: "5",
    date: "2025-01-16",
    studentName: "Arif Mahmud",
    course: "Graphic Design with Canva & AI",
    amount: 1499,
    paymentMethod: "bKash",
    transactionId: "TXN6I9J0K1L",
    screenshot: true,
    status: "pending",
  },
  {
    id: "6",
    date: "2025-01-15",
    studentName: "Sadia Islam",
    course: "Motion Graphics with After Effects",
    amount: 3499,
    paymentMethod: "Nagad",
    transactionId: "TXN8K1L2M3N",
    screenshot: true,
    status: "pending",
  },
];

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-500",
  approved: "bg-green-500/10 text-green-500",
  rejected: "bg-red-500/10 text-red-500",
};

const methodStyles: Record<string, string> = {
  bKash: "bg-pink-500/10 text-pink-500",
  Nagad: "bg-orange-500/10 text-orange-500",
  Rocket: "bg-purple-500/10 text-purple-500",
  Bank: "bg-blue-500/10 text-blue-500",
};

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>(mockEnrollments);
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { key: "all", label: "All", count: enrollments.length },
    {
      key: "pending",
      label: "Pending",
      count: enrollments.filter((e) => e.status === "pending").length,
    },
    {
      key: "approved",
      label: "Approved",
      count: enrollments.filter((e) => e.status === "approved").length,
    },
    {
      key: "rejected",
      label: "Rejected",
      count: enrollments.filter((e) => e.status === "rejected").length,
    },
  ];

  const filteredEnrollments =
    activeTab === "all"
      ? enrollments
      : enrollments.filter((e) => e.status === activeTab);

  const handleApprove = (id: string) => {
    setEnrollments(
      enrollments.map((e) => (e.id === id ? { ...e, status: "approved" as const } : e))
    );
  };

  const handleReject = (id: string) => {
    setEnrollments(
      enrollments.map((e) => (e.id === id ? { ...e, status: "rejected" as const } : e))
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Enrollment Management</h1>
        <p className="text-muted-foreground">
          Review and manage course enrollment orders and payment verifications.
        </p>
      </div>

      {/* Tabs and Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/30 border border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-primary-500/10 text-primary-500"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}{" "}
              <span className="text-xs opacity-60">({tab.count})</span>
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all">
          <Plus className="w-4 h-4" />
          Manual Enrollment
        </button>
      </div>

      {/* Enrollments Table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/30">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Date
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Student
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Course
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Amount
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Method
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  TXN ID
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Screenshot
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEnrollments.map((enrollment) => (
                <tr
                  key={enrollment.id}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3 text-muted-foreground">
                    {enrollment.date}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {enrollment.studentName}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                    {enrollment.course}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    ৳{enrollment.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${methodStyles[enrollment.paymentMethod]}`}
                    >
                      {enrollment.paymentMethod}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground font-mono text-xs">
                    {enrollment.transactionId}
                  </td>
                  <td className="px-4 py-3">
                    {enrollment.screenshot ? (
                      <div className="w-8 h-8 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center">
                        <Eye className="w-3 h-3 text-muted-foreground" />
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">None</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[enrollment.status]}`}
                    >
                      {enrollment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {enrollment.status === "pending" && (
                        <>
                          <button
                            title="Approve"
                            onClick={() => handleApprove(enrollment.id)}
                            className="p-1.5 rounded-lg hover:bg-green-500/10 text-muted-foreground hover:text-green-500 transition-colors"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            title="Reject"
                            onClick={() => handleReject(enrollment.id)}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button
                        title="View Details"
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-primary-500 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredEnrollments.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <CreditCard className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>No enrollments found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
