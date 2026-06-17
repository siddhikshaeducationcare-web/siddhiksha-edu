"use client";

import { useState, useMemo } from "react";
import {
  Search, Download, Filter, Eye, CheckCircle,
  Phone, Mail, Clock, FileSpreadsheet, FileText, X
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Admission } from "@/types";

// Sample data — replace with Supabase fetch
const sampleAdmissions: Admission[] = [
  { id: "1", student_name: "Kavitha S.", parent_name: "Suresh S.", mobile_number: "9876543210", email: "suresh@email.com", school_name: "Sri Vidya Mandir", standard: "Class 10", board: "State Board", additional_notes: null, status: "pending", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: "2", student_name: "Arjun M.", parent_name: "Murali M.", mobile_number: "9123456780", email: "murali@email.com", school_name: "DAV Public School", standard: "Class 8", board: "CBSE", additional_notes: "Needs help in Math", status: "contacted", created_at: new Date(Date.now() - 86400000).toISOString(), updated_at: new Date().toISOString() },
  { id: "3", student_name: "Priya R.", parent_name: "Rajesh R.", mobile_number: "8765432109", email: "rajesh@email.com", school_name: "Kendriya Vidyalaya", standard: "Class 12", board: "State Board", additional_notes: null, status: "enrolled", created_at: new Date(Date.now() - 172800000).toISOString(), updated_at: new Date().toISOString() },
  { id: "4", student_name: "Rohit K.", parent_name: "Kumar K.", mobile_number: "7654321098", email: "kumar@email.com", school_name: "Sri Sankara Vidyalaya", standard: "Class 6", board: "CBSE", additional_notes: null, status: "enrolled", created_at: new Date(Date.now() - 259200000).toISOString(), updated_at: new Date().toISOString() },
  { id: "5", student_name: "Meena V.", parent_name: "Velu V.", mobile_number: "6543210987", email: "velu@email.com", school_name: "Vivekananda Vidyalaya", standard: "Class 11", board: "State Board", additional_notes: "Physics and Chemistry", status: "contacted", created_at: new Date(Date.now() - 345600000).toISOString(), updated_at: new Date().toISOString() },
];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-700 border-yellow-100",
  contacted: "bg-blue-50 text-blue-700 border-blue-100",
  enrolled: "bg-emerald-50 text-emerald-700 border-emerald-100",
  rejected: "bg-red-50 text-red-700 border-red-100",
};

const statusOptions = ["all", "pending", "contacted", "enrolled", "rejected"];

export default function AdminAdmissionsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [boardFilter, setBoardFilter] = useState("all");
  const [selected, setSelected] = useState<Admission | null>(null);

  const filtered = useMemo(() => {
    return sampleAdmissions.filter((a) => {
      const matchSearch =
        !search ||
        a.student_name.toLowerCase().includes(search.toLowerCase()) ||
        a.parent_name.toLowerCase().includes(search.toLowerCase()) ||
        a.mobile_number.includes(search);
      const matchStatus = statusFilter === "all" || a.status === statusFilter;
      const matchBoard = boardFilter === "all" || a.board === boardFilter;
      return matchSearch && matchStatus && matchBoard;
    });
  }, [search, statusFilter, boardFilter]);

  const exportCSV = () => {
    const headers = ["Student Name", "Parent Name", "Mobile", "Email", "School", "Standard", "Board", "Status", "Date"];
    const rows = filtered.map((a) => [
      a.student_name, a.parent_name, a.mobile_number, a.email,
      a.school_name, a.standard, a.board, a.status,
      new Date(a.created_at).toLocaleDateString("en-IN"),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `admissions-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  const exportExcel = async () => {
    const XLSX = await import("xlsx");
    const data = filtered.map((a) => ({
      "Student Name": a.student_name,
      "Parent Name": a.parent_name,
      "Mobile": a.mobile_number,
      "Email": a.email,
      "School": a.school_name,
      "Standard": a.standard,
      "Board": a.board,
      "Status": a.status,
      "Date": new Date(a.created_at).toLocaleDateString("en-IN"),
      "Notes": a.additional_notes || "",
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Admissions");
    XLSX.writeFile(wb, `admissions-${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-montserrat font-bold text-2xl text-gray-900">Admissions</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {filtered.length} record{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={exportExcel}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or mobile..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-600 focus:border-transparent"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-600 capitalize"
        >
          {statusOptions.map((s) => (
            <option key={s} value={s}>{s === "all" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}</option>
          ))}
        </select>
        <select
          value={boardFilter}
          onChange={(e) => setBoardFilter(e.target.value)}
          className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-600"
        >
          <option value="all">All Boards</option>
          <option value="State Board">State Board</option>
          <option value="CBSE">CBSE</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {["Student", "Contact", "Details", "Status", "Date", ""].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((admission) => (
                <tr key={admission.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-royal-50 flex items-center justify-center text-royal-700 font-bold text-xs shrink-0">
                        {admission.student_name[0]}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{admission.student_name}</p>
                        <p className="text-gray-400 text-xs">{admission.parent_name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${admission.mobile_number}`} className="flex items-center gap-1.5 text-gray-600 hover:text-royal-700 text-xs">
                        <Phone className="w-3 h-3" />
                        {admission.mobile_number}
                      </a>
                      <a href={`mailto:${admission.email}`} className="flex items-center gap-1.5 text-gray-400 hover:text-royal-700 text-xs">
                        <Mail className="w-3 h-3" />
                        {admission.email}
                      </a>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-gray-900 text-xs font-medium">{admission.standard}</p>
                    <p className="text-gray-400 text-xs">{admission.board} · {admission.school_name}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border capitalize", statusColors[admission.status])}>
                      {admission.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs text-gray-400">
                      {new Date(admission.created_at).toLocaleDateString("en-IN")}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelected(admission)}
                      className="p-1.5 text-gray-400 hover:text-royal-700 hover:bg-royal-50 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>No admissions found</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-montserrat font-bold text-lg text-gray-900">
                Admission Details
              </h3>
              <button onClick={() => setSelected(null)} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {[
                ["Student Name", selected.student_name],
                ["Parent Name", selected.parent_name],
                ["Mobile", selected.mobile_number],
                ["Email", selected.email],
                ["School", selected.school_name],
                ["Standard", selected.standard],
                ["Board", selected.board],
                ["Status", selected.status],
                ["Notes", selected.additional_notes || "None"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{label}</span>
                  <span className="font-medium text-gray-900 text-right max-w-xs capitalize">{value}</span>
                </div>
              ))}
            </div>
            <div className="p-6 pt-0 flex gap-3">
              <a href={`tel:${selected.mobile_number}`} className="flex-1 btn-primary justify-center py-2.5 text-sm">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href={`mailto:${selected.email}`} className="flex-1 btn-outline-dark justify-center py-2.5 text-sm border-2 border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
