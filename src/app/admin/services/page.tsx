"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/data/site-data";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminServices() {
  const [services] = useState(servicesData);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Services Manager</h1>
          <p className="text-muted-foreground text-sm">
            Manage your service offerings and pricing
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl border border-border/50 bg-card/50"
        >
          <h2 className="text-xl font-bold mb-4">Add New Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Service title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pricing</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="From $50/video"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="Service description..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Features (one per line)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" size="sm">Save Service</Button>
            <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </motion.div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-border/50 bg-card/50 p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-bold">{service.title}</h3>
              <span className="text-xs font-semibold text-primary-400">
                {service.pricing}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {service.description}
            </p>
            <div className="space-y-1 mb-4">
              {service.features.slice(0, 3).map((f) => (
                <p key={f} className="text-xs text-muted-foreground">• {f}</p>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-border/50">
              <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
