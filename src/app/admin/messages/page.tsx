"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Mail, MailOpen, Archive, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactStore } from "@/store/admin-store";
import type { ContactSubmission } from "@/types/database";

export default function AdminMessages() {
  const { items, loading, fetch, update, remove } = useContactStore();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<ContactSubmission | null>(null);

  useEffect(() => { fetch(); }, [fetch]);

  const filtered = filter === "all" ? items : items.filter(i => i.status === filter);

  const statusCounts = {
    all: items.length,
    new: items.filter(i => i.status === "new").length,
    read: items.filter(i => i.status === "read").length,
    replied: items.filter(i => i.status === "replied").length,
    archived: items.filter(i => i.status === "archived").length,
  };

  const handleStatusChange = async (id: string, status: string) => {
    await update({ id, status } as Partial<ContactSubmission> & { id: string });
    if (selected?.id === id) setSelected({ ...selected, status: status as ContactSubmission["status"] });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground text-sm">Contact form submissions and inquiries</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "new", "read", "replied", "archived"] as const).map(s => (
          <button key={s} onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === s ? "bg-primary-500/10 text-primary-500 border border-primary-500/20" : "text-muted-foreground hover:bg-muted/50"}`}>
            {s.charAt(0).toUpperCase() + s.slice(1)} ({statusCounts[s]})
          </button>
        ))}
      </div>

      {loading && items.length === 0 && <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-primary-500" /></div>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto">
          {filtered.map((msg) => (
            <div key={msg.id} onClick={() => { setSelected(msg); if(msg.status === "new") handleStatusChange(msg.id, "read"); }}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${selected?.id === msg.id ? "border-primary-500/50 bg-primary-500/5" : "border-border/50 bg-card/50 hover:border-primary-500/30"}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm truncate">{msg.name}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                  msg.status === "new" ? "bg-green-500/10 text-green-500" :
                  msg.status === "read" ? "bg-blue-500/10 text-blue-500" :
                  msg.status === "replied" ? "bg-purple-500/10 text-purple-500" :
                  "bg-muted text-muted-foreground"
                }`}>{msg.status}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{msg.subject || msg.message?.slice(0, 60)}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{new Date(msg.created_at).toLocaleDateString()}</p>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center py-8 text-muted-foreground text-sm">No messages</p>}
        </div>


        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selected ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">{selected.name}</h2>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                    <a href={`mailto:${selected.email}`} className="flex items-center gap-1 text-primary-500 hover:underline">{selected.email} <ExternalLink className="w-3 h-3" /></a>
                    {selected.phone && <span>• {selected.phone}</span>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => handleStatusChange(selected.id, "replied")} title="Mark as Replied">
                    <MailOpen className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleStatusChange(selected.id, "archived")} title="Archive">
                    <Archive className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => { if(confirm("Delete?")) { remove(selected.id); setSelected(null); } }} title="Delete">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>

              {selected.subject && (
                <div className="mb-4"><span className="text-xs font-medium text-muted-foreground">Subject:</span><p className="font-medium">{selected.subject}</p></div>
              )}

              <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground">Message:</span>
                <p className="mt-1 text-sm whitespace-pre-wrap bg-muted/30 p-4 rounded-xl">{selected.message}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {selected.project_type && <div><span className="text-xs text-muted-foreground">Project Type</span><p className="font-medium">{selected.project_type}</p></div>}
                {selected.budget && <div><span className="text-xs text-muted-foreground">Budget</span><p className="font-medium">{selected.budget}</p></div>}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex gap-2">
                  {(["new", "read", "replied", "archived"] as const).map(s => (
                    <button key={s} onClick={() => handleStatusChange(selected.id, s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selected.status === s ? "bg-primary-500/10 text-primary-500 border border-primary-500/20" : "text-muted-foreground hover:bg-muted/50 border border-border/50"}`}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="rounded-2xl border border-border/50 bg-card/50 p-12 flex items-center justify-center">
              <div className="text-center">
                <Mail className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">Select a message to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
