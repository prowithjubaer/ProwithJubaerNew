"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Image,
  Upload,
  Search,
  Trash2,
  FileImage,
  FileVideo,
  FileText,
  CheckSquare,
  Square,
} from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  type: "image" | "video" | "pdf";
  size: string;
  date: string;
  color: string;
  selected: boolean;
}

const mockMedia: MediaItem[] = [
  {
    id: "1",
    name: "course-thumbnail-1.jpg",
    type: "image",
    size: "1.2 MB",
    date: "2025-01-20",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    selected: false,
  },
  {
    id: "2",
    name: "hero-banner.png",
    type: "image",
    size: "2.4 MB",
    date: "2025-01-18",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    selected: false,
  },
  {
    id: "3",
    name: "promo-video.mp4",
    type: "video",
    size: "45.2 MB",
    date: "2025-01-15",
    color: "bg-gradient-to-br from-red-400 to-red-600",
    selected: false,
  },
  {
    id: "4",
    name: "syllabus.pdf",
    type: "pdf",
    size: "0.8 MB",
    date: "2025-01-14",
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    selected: false,
  },
  {
    id: "5",
    name: "portfolio-sample.jpg",
    type: "image",
    size: "3.1 MB",
    date: "2025-01-12",
    color: "bg-gradient-to-br from-green-400 to-green-600",
    selected: false,
  },
  {
    id: "6",
    name: "testimonial-clip.mp4",
    type: "video",
    size: "22.7 MB",
    date: "2025-01-10",
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    selected: false,
  },
  {
    id: "7",
    name: "certificate-template.pdf",
    type: "pdf",
    size: "1.5 MB",
    date: "2025-01-08",
    color: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    selected: false,
  },
  {
    id: "8",
    name: "service-banner.png",
    type: "image",
    size: "1.8 MB",
    date: "2025-01-05",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    selected: false,
  },
];

const typeIcons: Record<string, typeof FileImage> = {
  image: FileImage,
  video: FileVideo,
  pdf: FileText,
};

export default function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>(mockMedia);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "image", label: "Images" },
    { key: "video", label: "Videos" },
    { key: "pdf", label: "PDFs" },
  ];

  const filteredMedia = media.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const selectedCount = media.filter((m) => m.selected).length;

  const toggleSelect = (id: string) => {
    setMedia(
      media.map((m) => (m.id === id ? { ...m, selected: !m.selected } : m))
    );
  };

  const deleteSelected = () => {
    setMedia(media.filter((m) => !m.selected));
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Media Library</h1>
        <p className="text-muted-foreground">
          Upload and manage your media files — images, videos, and documents.
        </p>
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border-2 border-dashed border-border/50 bg-card/30 backdrop-blur-sm p-8 mb-6 text-center hover:border-primary-500/50 transition-colors cursor-pointer"
      >
        <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
        <p className="font-medium text-sm mb-1">
          Drag & drop files here, or click to upload
        </p>
        <p className="text-xs text-muted-foreground">
          Supports: JPG, PNG, GIF, MP4, WebM, PDF (Max 50MB)
        </p>
      </motion.div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/30 border border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setTypeFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                typeFilter === tab.key
                  ? "bg-primary-500/10 text-primary-500"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm w-60"
            />
          </div>
          {selectedCount > 0 && (
            <button
              onClick={deleteSelected}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 text-red-500 text-sm font-medium hover:bg-red-500/20 transition-all"
            >
              <Trash2 className="w-4 h-4" />
              Delete ({selectedCount})
            </button>
          )}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredMedia.map((item) => {
          const TypeIcon = typeIcons[item.type];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`rounded-xl border overflow-hidden cursor-pointer transition-all ${
                item.selected
                  ? "border-primary-500 ring-2 ring-primary-500/20"
                  : "border-border/50 hover:border-border"
              }`}
              onClick={() => toggleSelect(item.id)}
            >
              {/* Preview */}
              <div
                className={`aspect-square ${item.color} flex items-center justify-center relative`}
              >
                <TypeIcon className="w-8 h-8 text-white/80" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-medium bg-black/30 text-white uppercase">
                  {item.type}
                </span>
                <div className="absolute top-2 right-2">
                  {item.selected ? (
                    <CheckSquare className="w-5 h-5 text-white" />
                  ) : (
                    <Square className="w-5 h-5 text-white/50" />
                  )}
                </div>
              </div>
              {/* Info */}
              <div className="p-2.5 bg-card">
                <p className="text-xs font-medium truncate">{item.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground">
                    {item.size}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredMedia.length === 0 && (
        <div className="text-center py-12 text-muted-foreground rounded-2xl border border-border/50 bg-card/50">
          <Image className="w-10 h-10 mx-auto mb-3 opacity-50" />
          <p>No media files found</p>
        </div>
      )}
    </div>
  );
}
