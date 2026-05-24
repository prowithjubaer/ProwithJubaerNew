"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wallet, Save, ToggleLeft, ToggleRight } from "lucide-react";

interface PaymentMethod {
  id: string;
  name: string;
  enabled: boolean;
  accountNumber: string;
  instructions: string;
  color: string;
}

export default function PaymentsPage() {
  const [methods, setMethods] = useState<PaymentMethod[]>([
    {
      id: "bkash",
      name: "bKash",
      enabled: true,
      accountNumber: "01712345678",
      instructions: "Send money to Personal account. Use your name as reference.",
      color: "bg-pink-500",
    },
    {
      id: "nagad",
      name: "Nagad",
      enabled: true,
      accountNumber: "01812345678",
      instructions: "Send money to Personal account. Mention course name in reference.",
      color: "bg-orange-500",
    },
    {
      id: "rocket",
      name: "Rocket",
      enabled: false,
      accountNumber: "",
      instructions: "",
      color: "bg-purple-500",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      enabled: false,
      accountNumber: "",
      instructions: "",
      color: "bg-blue-500",
    },
  ]);

  const [screenshotRequired, setScreenshotRequired] = useState(true);
  const [autoApproval, setAutoApproval] = useState(false);
  const [paymentInstructions, setPaymentInstructions] = useState(
    "পেমেন্ট করার পর অবশ্যই Transaction ID এবং Screenshot সাবমিট করুন। ২৪ ঘণ্টার মধ্যে আপনার enrollment approve করা হবে।"
  );

  const toggleMethod = (id: string) => {
    setMethods(
      methods.map((m) => (m.id === id ? { ...m, enabled: !m.enabled } : m))
    );
  };

  const updateMethod = (id: string, field: string, value: string) => {
    setMethods(
      methods.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handleSave = () => {
    alert("Payment settings saved successfully!");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Payment Settings</h1>
        <p className="text-muted-foreground">
          Configure payment methods, instructions, and approval settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methods.map((method) => (
              <div
                key={method.id}
                className={`rounded-xl border p-4 transition-all ${
                  method.enabled
                    ? "border-primary-500/30 bg-primary-500/5"
                    : "border-border/50 bg-muted/20 opacity-70"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg ${method.color} flex items-center justify-center`}
                    >
                      <Wallet className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{method.name}</span>
                  </div>
                  <button
                    onClick={() => toggleMethod(method.id)}
                    className="text-primary-500"
                  >
                    {method.enabled ? (
                      <ToggleRight className="w-8 h-8" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                    )}
                  </button>
                </div>
                {method.enabled && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Account Number
                      </label>
                      <input
                        type="text"
                        value={method.accountNumber}
                        onChange={(e) =>
                          updateMethod(method.id, "accountNumber", e.target.value)
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Instructions
                      </label>
                      <textarea
                        value={method.instructions}
                        onChange={(e) =>
                          updateMethod(method.id, "instructions", e.target.value)
                        }
                        rows={2}
                        className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                        placeholder="Payment instructions for this method"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Approval Settings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-xl font-bold mb-4">Approval Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/20">
              <div>
                <p className="font-medium text-sm">
                  Require Payment Screenshot
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Students must upload a payment screenshot during enrollment
                </p>
              </div>
              <button
                onClick={() => setScreenshotRequired(!screenshotRequired)}
                className="text-primary-500"
              >
                {screenshotRequired ? (
                  <ToggleRight className="w-8 h-8" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/20">
              <div>
                <p className="font-medium text-sm">Auto Approval</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Automatically approve enrollments (not recommended)
                </p>
              </div>
              <button
                onClick={() => setAutoApproval(!autoApproval)}
                className="text-primary-500"
              >
                {autoApproval ? (
                  <ToggleRight className="w-8 h-8" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Payment Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-xl font-bold mb-4">Payment Instructions</h2>
          <p className="text-sm text-muted-foreground mb-3">
            This text will be shown to students on the enrollment/checkout page.
          </p>
          <textarea
            value={paymentInstructions}
            onChange={(e) => setPaymentInstructions(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
            placeholder="Enter payment instructions for students..."
          />
        </motion.div>

        {/* Save */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg shadow-primary-500/25"
          >
            <Save className="w-4 h-4" />
            Save Payment Settings
          </button>
        </div>
      </div>
    </div>
  );
}
