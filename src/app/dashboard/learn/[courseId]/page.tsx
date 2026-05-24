"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Play,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  Save,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { aiExpertCourseCurriculum } from "@/data/dashboard-data";

export default function CourseLearnPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);

  const [currentModuleIndex, setCurrentModuleIndex] = useState(3);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(4);
  const [expandedModules, setExpandedModules] = useState<number[]>([3]);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    const completed = new Set<string>();
    aiExpertCourseCurriculum.forEach((mod, mi) => {
      mod.lessons.forEach((lesson, li) => {
        if (lesson.completed) {
          completed.add(`${mi}-${li}`);
        }
      });
    });
    return completed;
  });
  const [notes, setNotes] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentModule = aiExpertCourseCurriculum[currentModuleIndex];
  const currentLesson = currentModule?.lessons[currentLessonIndex];

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const selectLesson = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
  };

  const markComplete = () => {
    const key = `${currentModuleIndex}-${currentLessonIndex}`;
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const goToNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < aiExpertCourseCurriculum.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
      setExpandedModules((prev) => [...prev, currentModuleIndex + 1]);
    }
  };

  const goToPrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      const prevModule = aiExpertCourseCurriculum[currentModuleIndex - 1];
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(prevModule.lessons.length - 1);
      setExpandedModules((prev) => [...prev, currentModuleIndex - 1]);
    }
  };

  const totalLessons = aiExpertCourseCurriculum.reduce(
    (acc, mod) => acc + mod.lessons.length,
    0
  );
  const completedCount = completedLessons.size;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const isCurrentCompleted = completedLessons.has(
    `${currentModuleIndex}-${currentLessonIndex}`
  );

  return (
    <div className="flex flex-col lg:flex-row gap-0 -m-4 lg:-m-8 min-h-[calc(100vh-4rem)]">
      {/* Left Sidebar - Curriculum */}
      <aside
        className={`${
          sidebarOpen ? "w-full lg:w-80" : "w-0 lg:w-0"
        } flex-shrink-0 border-r border-border/50 bg-card/50 backdrop-blur-sm overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Course Header */}
        <div className="p-4 border-b border-border/50 sticky top-0 bg-card/90 backdrop-blur-sm z-10">
          <Link
            href="/dashboard/courses"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary-500 transition-colors mb-2"
          >
            <ArrowLeft size={12} />
            Back to Courses
          </Link>
          <h3 className="font-bold text-sm text-foreground line-clamp-2">
            AI Expert Course
          </h3>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">
                {completedCount}/{totalLessons} completed
              </span>
              <span className="text-primary-500 font-medium">
                {progressPercent}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Modules & Lessons */}
        <div className="p-2">
          {aiExpertCourseCurriculum.map((module, mi) => (
            <div key={mi} className="mb-1">
              <button
                onClick={() => toggleModule(mi)}
                className="w-full flex items-center gap-2 p-3 rounded-xl text-left hover:bg-primary-500/5 transition-colors"
              >
                {expandedModules.includes(mi) ? (
                  <ChevronDown size={14} className="text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronRight size={14} className="text-muted-foreground flex-shrink-0" />
                )}
                <span className="text-xs font-semibold text-foreground line-clamp-2">
                  {module.title}
                </span>
              </button>

              {expandedModules.includes(mi) && (
                <div className="ml-4 space-y-0.5">
                  {module.lessons.map((lesson, li) => {
                    const isActive =
                      mi === currentModuleIndex && li === currentLessonIndex;
                    const isCompleted = completedLessons.has(`${mi}-${li}`);

                    return (
                      <button
                        key={li}
                        onClick={() => selectLesson(mi, li)}
                        className={`w-full flex items-center gap-2 p-2.5 rounded-lg text-left transition-all text-xs ${
                          isActive
                            ? "bg-primary-500/10 text-primary-500"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2
                            size={14}
                            className="text-green-500 flex-shrink-0"
                          />
                        ) : (
                          <Circle size={14} className="flex-shrink-0" />
                        )}
                        <span className="line-clamp-1 flex-1">
                          {lesson.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground flex-shrink-0">
                          {lesson.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Toggle Sidebar Button */}
        <div className="p-4 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BookOpen size={14} className="mr-2" />
            {sidebarOpen ? "Hide" : "Show"} Curriculum
          </Button>
        </div>

        {/* Video Player Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full aspect-video bg-gradient-to-br from-dark-surface to-dark-card relative flex items-center justify-center border-b border-border/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
          <button className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary-500/20 border-2 border-primary-500 flex items-center justify-center hover:bg-primary-500/30 transition-all hover:scale-110">
            <Play size={28} className="text-primary-500 ml-1" />
          </button>
          <div className="absolute bottom-4 left-4 text-xs text-white/60">
            Module {currentModuleIndex + 1} • Lesson {currentLessonIndex + 1}
          </div>
        </motion.div>

        {/* Lesson Content */}
        <div className="p-4 lg:p-8 space-y-6">
          {/* Lesson Title & Description */}
          <motion.div
            key={`${currentModuleIndex}-${currentLessonIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs text-primary-500 font-medium uppercase tracking-wider mb-1">
              {currentModule?.title}
            </p>
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">
              {currentLesson?.title}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              এই lesson এ আপনি {currentLesson?.title} সম্পর্কে practical knowledge
              পাবেন। Video দেখুন, notes নিন এবং lesson complete করুন।
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span>Duration: {currentLesson?.duration}</span>
              <span>•</span>
              <span>
                {isCurrentCompleted ? "✅ Completed" : "⏳ In Progress"}
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant={isCurrentCompleted ? "secondary" : "primary"}
              size="md"
              onClick={markComplete}
            >
              {isCurrentCompleted ? (
                <>
                  <CheckCircle2 size={16} className="mr-2" />
                  Completed
                </>
              ) : (
                <>
                  <Circle size={16} className="mr-2" />
                  Mark as Complete
                </>
              )}
            </Button>

            <div className="flex gap-2 ml-auto">
              <Button variant="ghost" size="sm" onClick={goToPrevLesson}>
                <ArrowLeft size={14} className="mr-1" />
                Previous
              </Button>
              <Button variant="ghost" size="sm" onClick={goToNextLesson}>
                Next
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Download Resources */}
          <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5">
            <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
              <Download size={16} className="text-primary-500" />
              Download Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { name: "Lesson Slides (PDF)", type: "pdf" },
                { name: "Prompt Templates", type: "template" },
                { name: "Practice Exercise", type: "pdf" },
              ].map((resource) => (
                <button
                  key={resource.name}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/50 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all text-left"
                >
                  <FileText size={16} className="text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">{resource.name}</span>
                  <Download size={12} className="ml-auto text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Lesson Notes */}
          <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5">
            <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
              <FileText size={16} className="text-accent-cyan" />
              Lesson Notes
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="এখানে আপনার notes লিখুন... Write your notes here..."
              className="w-full h-32 rounded-xl border border-border/50 bg-muted/30 p-4 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
            />
            <div className="flex justify-end mt-2">
              <Button variant="ghost" size="sm">
                <Save size={14} className="mr-2" />
                Save Notes
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
