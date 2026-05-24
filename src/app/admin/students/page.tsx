"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  Plus,
  Download,
  Eye,
  Edit,
  UserPlus,
  Trash2,
  X,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  enrolledCourses: number;
  joinDate: string;
  status: "active" | "inactive" | "suspended";
}

const mockStudents: Student[] = [
  {
    id: "1",
    name: "Rakib Hasan",
    email: "rakib@email.com",
    phone: "+880 1712 345678",
    enrolledCourses: 3,
    joinDate: "2025-01-05",
    status: "active",
  },
  {
    id: "2",
    name: "Fatima Akter",
    email: "fatima@email.com",
    phone: "+880 1812 456789",
    enrolledCourses: 2,
    joinDate: "2025-01-10",
    status: "active",
  },
  {
    id: "3",
    name: "Tanvir Ahmed",
    email: "tanvir@email.com",
    phone: "+880 1612 567890",
    enrolledCourses: 1,
    joinDate: "2024-12-20",
    status: "inactive",
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    email: "nusrat@email.com",
    phone: "+880 1912 678901",
    enrolledCourses: 4,
    joinDate: "2024-11-15",
    status: "active",
  },
  {
    id: "5",
    name: "Arif Mahmud",
    email: "arif@email.com",
    phone: "+880 1512 789012",
    enrolledCourses: 1,
    joinDate: "2025-01-18",
    status: "suspended",
  },
];

const statusStyles: Record<string, string> = {
  active: "bg-green-500/10 text-green-500",
  inactive: "bg-yellow-500/10 text-yellow-500",
  suspended: "bg-red-500/10 text-red-500",
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse =
      courseFilter === "all" ||
      (courseFilter === "enrolled" && student.enrolledCourses > 0) ||
      (courseFilter === "none" && student.enrolledCourses === 0);
    return matchesSearch && matchesCourse;
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const student: Student = {
      id: Date.now().toString(),
      name: newStudent.name,
      email: newStudent.email,
      phone: newStudent.phone,
      enrolledCourses: 0,
      joinDate: new Date().toISOString().split("T")[0],
      status: "active",
    };
    setStudents([...students, student]);
    setNewStudent({ name: "", email: "", phone: "" });
    setShowAddModal(false);
  };

  const handleRemove = (id: string) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleExportCSV = () => {
    const headers = "Name,Email,Phone,Enrolled Courses,Join Date,Status\n";
    const rows = students
      .map(
        (s) =>
          `${s.name},${s.email},${s.phone},${s.enrolledCourses},${s.joinDate},${s.status}`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Student Management</h1>
        <p className="text-muted-foreground">
          Manage enrolled students, track progress, and handle enrollments.
        </p>
      </div>

      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search students by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
          />
        </div>
        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
        >
          <option value="all">All Students</option>
          <option value="enrolled">Enrolled in Course</option>
          <option value="none">No Enrollments</option>
        </select>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </button>
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 hover:border-primary-500 text-sm font-medium transition-all"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Students Table */}
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
                  Name
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Email
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Phone
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Courses
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Joined
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
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">{student.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {student.email}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {student.phone}
                  </td>
                  <td className="px-4 py-3">{student.enrolledCourses}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {student.joinDate}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[student.status]}`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        title="View Progress"
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-primary-500 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        title="Edit"
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-primary-500 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        title="Enroll Manually"
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-green-500 transition-colors"
                      >
                        <UserPlus className="w-4 h-4" />
                      </button>
                      <button
                        title="Remove"
                        onClick={() => handleRemove(student.id)}
                        className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Users className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>No students found</p>
          </div>
        )}
      </motion.div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md rounded-2xl border border-border/50 bg-card p-6 shadow-xl mx-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Add New Student</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={newStudent.name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={newStudent.email}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={newStudent.phone}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50 focus:border-primary-500 outline-none text-sm"
                  placeholder="+880 1XXX XXXXXX"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-border/50 text-sm font-medium hover:bg-muted/50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:from-primary-500 hover:to-primary-400 transition-all"
                >
                  Add Student
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
