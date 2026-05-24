"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Plus,
  Edit,
  Trash2,
  ChevronUp,
  ChevronDown,
  X,
} from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const globalFAQs: FAQ[] = [
  {
    id: "g1",
    question: "কোর্সে কিভাবে enroll করবো?",
    answer:
      "কোর্স পেজে গিয়ে 'Enroll Now' বাটনে ক্লিক করুন, তারপর পেমেন্ট সম্পন্ন করুন। পেমেন্ট verify হলে আপনার dashboard এ কোর্স available হবে।",
  },
  {
    id: "g2",
    question: "কোর্সের lifetime access পাবো?",
    answer:
      "হ্যাঁ, একবার enroll করলে আপনি lifetime access পাবেন। Future updates ও free তে পাবেন।",
  },
  {
    id: "g3",
    question: "মোবাইল দিয়ে কি কোর্স দেখা যাবে?",
    answer:
      "হ্যাঁ, আমাদের platform সম্পূর্ণ mobile responsive। যেকোনো device থেকে কোর্স access করতে পারবেন।",
  },
  {
    id: "g4",
    question: "Certificate কি পাবো?",
    answer:
      "কোর্স সম্পূর্ণ করলে আপনি certificate পাবেন যেটা LinkedIn এ share করতে পারবেন।",
  },
  {
    id: "g5",
    question: "Refund policy কি?",
    answer:
      "Purchase এর ৭ দিনের মধ্যে refund request করতে পারবেন যদি ৩০% এর বেশি content watch না করে থাকেন।",
  },
];

const courseFAQs: FAQ[] = [
  {
    id: "c1",
    question: "কোর্সটি কাদের জন্য?",
    answer: "যারা video editing, motion graphics বা graphic design শিখতে চান তাদের জন্য।",
  },
  {
    id: "c2",
    question: "কোন software লাগবে?",
    answer: "কোর্সের requirement section এ সব details দেওয়া আছে।",
  },
];

const serviceFAQs: FAQ[] = [
  {
    id: "s1",
    question: "Project delivery time কত?",
    answer: "Project complexity অনুযায়ী ৩-১৪ দিন সময় লাগে।",
  },
  {
    id: "s2",
    question: "Revision কতবার পাবো?",
    answer: "Package অনুযায়ী ২-৫ বার revision পাবেন।",
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"global" | "course" | "service">(
    "global"
  );
  const [globalList, setGlobalList] = useState<FAQ[]>(globalFAQs);
  const [courseList, setCourseList] = useState<FAQ[]>(courseFAQs);
  const [serviceList, setServiceList] = useState<FAQ[]>(serviceFAQs);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });

  const getCurrentList = () => {
    switch (activeTab) {
      case "global":
        return globalList;
      case "course":
        return courseList;
      case "service":
        return serviceList;
    }
  };

  const setCurrentList = (list: FAQ[]) => {
    switch (activeTab) {
      case "global":
        setGlobalList(list);
        break;
      case "course":
        setCourseList(list);
        break;
      case "service":
        setServiceList(list);
        break;
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const faq: FAQ = {
      id: Date.now().toString(),
      question: newFAQ.question,
      answer: newFAQ.answer,
    };
    setCurrentList([...getCurrentList(), faq]);
    setNewFAQ({ question: "", answer: "" });
    setShowAddForm(false);
  };

  const handleDelete = (id: string) => {
    setCurrentList(getCurrentList().filter((f) => f.id !== id));
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const list = [...getCurrentList()];
    [list[index - 1], list[index]] = [list[index], list[index - 1]];
    setCurrentList(list);
  };

  const handleMoveDown = (index: number) => {
    const list = getCurrentList();
    if (index === list.length - 1) return;
    const newList = [...list];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
    setCurrentList(newList);
  };

  const tabs = [
    { key: "global" as const, label: "Global FAQ" },
    { key: "course" as const, label: "Course FAQ" },
    { key: "service" as const, label: "Service FAQ" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">FAQ Management</h1>
        <p className="text-muted-foreground">
          Manage frequently asked questions for different sections.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/30 border border-border/50 w-fit mb-6">
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
            {tab.label}
          </button>
        ))}
      </div>

      {/* Add Button */}
      <div className="mb-4">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 mb-6"
        >
          <form onSubmit={handleAdd} className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Question
              </label>
              <input
                type="text"
                required
                value={newFAQ.question}
                onChange={(e) =>
                  setNewFAQ({ ...newFAQ, question: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Enter question"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Answer
              </label>
              <textarea
                required
                value={newFAQ.answer}
                onChange={(e) =>
                  setNewFAQ({ ...newFAQ, answer: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="Enter answer"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-primary-500/10 text-primary-500 text-sm font-medium hover:bg-primary-500/20 transition-all"
              >
                Add FAQ
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* FAQ List */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        {getCurrentList().map((faq, index) => (
          <div
            key={faq.id}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex flex-col gap-1 pt-1">
                <button
                  onClick={() => handleMoveUp(index)}
                  className="p-1 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  onClick={() => handleMoveDown(index)}
                  className="p-1 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm mb-1">{faq.question}</p>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  title="Edit"
                  className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-primary-500 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  title="Delete"
                  onClick={() => handleDelete(faq.id)}
                  className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {getCurrentList().length === 0 && (
          <div className="text-center py-12 text-muted-foreground rounded-2xl border border-border/50 bg-card/50">
            <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>No FAQs added yet</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
