"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { purchaseHistory } from "@/data/dashboard-data";

export default function PurchasesPage() {
  const statusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
            <CheckCircle2 size={10} />
            Completed
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500">
            <Clock size={10} />
            Pending
          </span>
        );
      case "refunded":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500">
            <AlertCircle size={10} />
            Refunded
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          Purchase History
        </h1>
        <p className="text-muted-foreground mt-1">
          আপনার সকল purchases এবং transactions এর record এখানে দেখুন।
        </p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5">
          <p className="text-xs text-muted-foreground mb-1">Total Spent</p>
          <p className="text-2xl font-bold text-foreground">
            ৳{purchaseHistory.reduce((acc, p) => acc + p.amount, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5">
          <p className="text-xs text-muted-foreground mb-1">Total Purchases</p>
          <p className="text-2xl font-bold text-foreground">
            {purchaseHistory.length}
          </p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5">
          <p className="text-xs text-muted-foreground mb-1">Payment Methods</p>
          <p className="text-2xl font-bold text-foreground">
            {new Set(purchaseHistory.map((p) => p.paymentMethod)).size}
          </p>
        </div>
      </motion.div>

      {/* Purchases Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
      >
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider p-4">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider p-4">
                  Course
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider p-4">
                  Amount
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider p-4">
                  Payment Method
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider p-4">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider p-4">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((purchase) => (
                <tr
                  key={purchase.id}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="p-4 text-sm text-foreground">
                    {new Date(purchase.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="p-4 text-sm text-foreground font-medium max-w-[250px] truncate">
                    {purchase.courseName}
                  </td>
                  <td className="p-4 text-sm text-foreground font-semibold">
                    {purchase.amount > 0
                      ? `৳${purchase.amount.toLocaleString()}`
                      : "Free"}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {purchase.paymentMethod}
                  </td>
                  <td className="p-4">{statusBadge(purchase.status)}</td>
                  <td className="p-4">
                    <button className="text-primary-500 hover:text-primary-400 transition-colors">
                      <Download size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-border/30">
          {purchaseHistory.map((purchase) => (
            <div key={purchase.id} className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground line-clamp-1">
                    {purchase.courseName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(purchase.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {statusBadge(purchase.status)}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground text-sm">
                    {purchase.amount > 0
                      ? `৳${purchase.amount.toLocaleString()}`
                      : "Free"}
                  </span>
                  <span>via {purchase.paymentMethod}</span>
                </div>
                <button className="text-primary-500 hover:text-primary-400 transition-colors text-xs flex items-center gap-1">
                  <Download size={12} />
                  Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 flex items-start gap-3"
      >
        <CreditCard size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-foreground font-medium">
            Payment তথ্য সম্পর্কে
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            আমরা bKash, Nagad, Rocket এবং bank transfer accept করি। কোনো সমস্যা
            হলে support@prowithjubaer.com এ যোগাযোগ করুন।
          </p>
        </div>
      </motion.div>
    </div>
  );
}
