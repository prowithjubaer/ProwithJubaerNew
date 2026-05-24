"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, RotateCcw, Save, Sun, Moon } from "lucide-react";

interface ThemeSettings {
  primaryColor: string;
  accentColor: string;
  ctaColor: string;
  headingFont: string;
  bodyFont: string;
  borderRadius: "small" | "medium" | "large";
  animationIntensity: "none" | "subtle" | "normal" | "intense";
  darkMode: boolean;
  layoutWidth: "narrow" | "standard" | "wide";
  sectionSpacing: "compact" | "normal" | "spacious";
}

const defaultTheme: ThemeSettings = {
  primaryColor: "#6366f1",
  accentColor: "#06b6d4",
  ctaColor: "#f97316",
  headingFont: "Inter",
  bodyFont: "Inter",
  borderRadius: "medium",
  animationIntensity: "normal",
  darkMode: true,
  layoutWidth: "standard",
  sectionSpacing: "normal",
};

const colorPresets = {
  primary: ["#6366f1", "#8b5cf6", "#3b82f6", "#10b981", "#ec4899", "#f43f5e"],
  accent: ["#06b6d4", "#14b8a6", "#84cc16", "#fbbf24", "#a78bfa", "#22d3ee"],
  cta: ["#f97316", "#ef4444", "#eab308", "#22c55e", "#f472b6", "#fb923c"],
};

const fonts = [
  "Inter",
  "Poppins",
  "Nunito",
  "Roboto",
  "Open Sans",
  "Montserrat",
  "Lato",
  "Raleway",
];

export default function ThemePage() {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  const handleReset = () => {
    setTheme(defaultTheme);
  };

  const handleSave = () => {
    alert("Theme settings saved successfully!");
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Theme Customizer</h1>
        <p className="text-muted-foreground">
          Customize the look and feel of your website.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Colors */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
          >
            <h2 className="text-xl font-bold mb-4">Colors</h2>
            <div className="space-y-4">
              {/* Primary Color */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Primary Color
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {colorPresets.primary.map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setTheme({ ...theme, primaryColor: color })
                        }
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          theme.primaryColor === color
                            ? "border-white scale-110 shadow-lg"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <input
                    type="color"
                    value={theme.primaryColor}
                    onChange={(e) =>
                      setTheme({ ...theme, primaryColor: e.target.value })
                    }
                    className="w-8 h-8 rounded-lg border border-border/50 cursor-pointer"
                  />
                  <span className="text-xs font-mono text-muted-foreground">
                    {theme.primaryColor}
                  </span>
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Accent Color
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {colorPresets.accent.map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setTheme({ ...theme, accentColor: color })
                        }
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          theme.accentColor === color
                            ? "border-white scale-110 shadow-lg"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <input
                    type="color"
                    value={theme.accentColor}
                    onChange={(e) =>
                      setTheme({ ...theme, accentColor: e.target.value })
                    }
                    className="w-8 h-8 rounded-lg border border-border/50 cursor-pointer"
                  />
                  <span className="text-xs font-mono text-muted-foreground">
                    {theme.accentColor}
                  </span>
                </div>
              </div>

              {/* CTA Color */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  CTA Color
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {colorPresets.cta.map((color) => (
                      <button
                        key={color}
                        onClick={() => setTheme({ ...theme, ctaColor: color })}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          theme.ctaColor === color
                            ? "border-white scale-110 shadow-lg"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <input
                    type="color"
                    value={theme.ctaColor}
                    onChange={(e) =>
                      setTheme({ ...theme, ctaColor: e.target.value })
                    }
                    className="w-8 h-8 rounded-lg border border-border/50 cursor-pointer"
                  />
                  <span className="text-xs font-mono text-muted-foreground">
                    {theme.ctaColor}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
          >
            <h2 className="text-xl font-bold mb-4">Typography</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Heading Font
                </label>
                <select
                  value={theme.headingFont}
                  onChange={(e) =>
                    setTheme({ ...theme, headingFont: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                >
                  {fonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Body Font
                </label>
                <select
                  value={theme.bodyFont}
                  onChange={(e) =>
                    setTheme({ ...theme, bodyFont: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                >
                  {fonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Layout & Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
          >
            <h2 className="text-xl font-bold mb-4">Layout & Spacing</h2>
            <div className="space-y-4">
              {/* Border Radius */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Border Radius
                </label>
                <div className="flex gap-2">
                  {(["small", "medium", "large"] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setTheme({ ...theme, borderRadius: r })}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        theme.borderRadius === r
                          ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                          : "bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground"
                      }`}
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animation Intensity */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Animation Intensity
                </label>
                <div className="flex gap-2">
                  {(["none", "subtle", "normal", "intense"] as const).map(
                    (a) => (
                      <button
                        key={a}
                        onClick={() =>
                          setTheme({ ...theme, animationIntensity: a })
                        }
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          theme.animationIntensity === a
                            ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                            : "bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground"
                        }`}
                      >
                        {a.charAt(0).toUpperCase() + a.slice(1)}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Dark/Light Toggle */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Default Mode
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTheme({ ...theme, darkMode: true })}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      theme.darkMode
                        ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                        : "bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground"
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme({ ...theme, darkMode: false })}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      !theme.darkMode
                        ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                        : "bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground"
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </button>
                </div>
              </div>

              {/* Layout Width */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Layout Width
                </label>
                <div className="flex gap-2">
                  {(["narrow", "standard", "wide"] as const).map((w) => (
                    <button
                      key={w}
                      onClick={() => setTheme({ ...theme, layoutWidth: w })}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        theme.layoutWidth === w
                          ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                          : "bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground"
                      }`}
                    >
                      {w.charAt(0).toUpperCase() + w.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section Spacing */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Section Spacing
                </label>
                <div className="flex gap-2">
                  {(["compact", "normal", "spacious"] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() =>
                        setTheme({ ...theme, sectionSpacing: s })
                      }
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        theme.sectionSpacing === s
                          ? "bg-primary-500/10 text-primary-500 border border-primary-500/30"
                          : "bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground"
                      }`}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Preview Card & Actions */}
        <div className="space-y-6">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sticky top-24"
          >
            <h3 className="text-lg font-bold mb-4">Theme Preview</h3>
            <div
              className={`rounded-xl border border-border/50 p-4 ${theme.darkMode ? "bg-gray-900" : "bg-white"}`}
            >
              {/* Mini preview */}
              <div className="space-y-3">
                {/* Header bar */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md"
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <div
                    className={`h-2 rounded-full w-20 ${theme.darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                  />
                  <div className="flex-1" />
                  <div
                    className={`h-2 rounded-full w-8 ${theme.darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                  />
                  <div
                    className={`h-2 rounded-full w-8 ${theme.darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                  />
                </div>

                {/* Hero section */}
                <div className="space-y-2 py-3">
                  <div
                    className={`h-3 rounded-full w-3/4 ${theme.darkMode ? "bg-gray-600" : "bg-gray-300"}`}
                  />
                  <div
                    className={`h-2 rounded-full w-full ${theme.darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                  />
                  <div
                    className={`h-2 rounded-full w-2/3 ${theme.darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                  />
                  <div className="flex gap-2 pt-1">
                    <div
                      className="h-6 w-16 rounded-md"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <div
                      className="h-6 w-16 rounded-md"
                      style={{ backgroundColor: theme.ctaColor }}
                    />
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`rounded-md p-2 ${theme.darkMode ? "bg-gray-800" : "bg-gray-100"}`}
                    >
                      <div
                        className="h-8 rounded-sm mb-1"
                        style={{
                          backgroundColor:
                            i === 1
                              ? theme.primaryColor
                              : i === 2
                                ? theme.accentColor
                                : theme.ctaColor,
                          opacity: 0.3,
                        }}
                      />
                      <div
                        className={`h-1.5 rounded-full w-full ${theme.darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Theme info */}
            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Font:</span>
                <span className="font-medium text-foreground">
                  {theme.headingFont}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Radius:</span>
                <span className="font-medium text-foreground">
                  {theme.borderRadius}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Animation:</span>
                <span className="font-medium text-foreground">
                  {theme.animationIntensity}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Width:</span>
                <span className="font-medium text-foreground">
                  {theme.layoutWidth}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-2">
              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all"
              >
                <Save className="w-4 h-4" />
                Save Theme
              </button>
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Defaults
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
