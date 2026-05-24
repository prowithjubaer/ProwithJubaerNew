"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/site-data";
import { Plus, Edit, Trash2, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPortfolio() {
  const [projects, setProjects] = useState(portfolioData);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Portfolio Manager</h1>
          <p className="text-muted-foreground text-sm">
            Manage your portfolio projects
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-2xl border border-border/50 bg-card/50"
        >
          <h2 className="text-xl font-bold mb-4">Add New Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Project title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm">
                <option>Video Editing</option>
                <option>Motion Graphics</option>
                <option>Graphic Design</option>
                <option>Thumbnail Design</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Client</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Client name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Video URL</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="https://youtube.com/..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm resize-none"
                placeholder="Project description..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                placeholder="Gaming, Montage, Effects"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                Featured Project
              </label>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" size="sm">
              Save Project
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          placeholder="Search projects..."
        />
      </div>

      {/* Projects Table */}
      <div className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                  Project
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                  Category
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                  Client
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                  Year
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">
                  Featured
                </th>
                <th className="text-right px-4 py-3 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr
                  key={project.id}
                  className="border-t border-border/30 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-3">
                    <span className="font-medium text-sm">{project.title}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded text-xs bg-primary-500/10 text-primary-400">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {project.client}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {project.year}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        project.featured
                          ? "bg-green-500/10 text-green-500"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.featured ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-primary-500/10 text-muted-foreground hover:text-primary-500 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
