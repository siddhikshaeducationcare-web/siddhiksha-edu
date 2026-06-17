"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, X, Upload, Loader2, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/types";

const initialAchievements: Achievement[] = [
  { id: "1", student_name: "Priya Venkatesh", standard: "Class 12", school_name: "Sri Vidya Mandir", board: "State Board", marks_percentage: "98.5%", achievement_description: "District First Rank in Tamil.", photo_url: null, is_rank_holder: true, rank: "District 1st", year: "2024", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: "2", student_name: "Arjun Krishnamurthy", standard: "Class 10", school_name: "DAV Public School", board: "CBSE", marks_percentage: "98%", achievement_description: "Scored 490/500 in CBSE Board.", photo_url: null, is_rank_holder: true, rank: "School 1st", year: "2024", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
];

const emptyForm = {
  student_name: "", standard: "", school_name: "", board: "State Board" as "State Board" | "CBSE",
  marks_percentage: "", achievement_description: "", photo_url: "",
  is_rank_holder: false, rank: "", year: new Date().getFullYear().toString(),
};

const standards = ["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"];

export default function AdminAchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Achievement | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => { setEditing(null); setForm(emptyForm); setShowModal(true); };
  const openEdit = (a: Achievement) => {
    setEditing(a);
    setForm({ student_name: a.student_name, standard: a.standard, school_name: a.school_name, board: a.board, marks_percentage: a.marks_percentage, achievement_description: a.achievement_description, photo_url: a.photo_url || "", is_rank_holder: a.is_rank_holder, rank: a.rank || "", year: a.year });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.student_name || !form.standard || !form.school_name || !form.marks_percentage) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    if (editing) {
      setAchievements((prev) => prev.map((a) => a.id === editing.id ? { ...a, ...form, photo_url: form.photo_url || null, updated_at: new Date().toISOString() } : a));
    } else {
      setAchievements((prev) => [...prev, { ...form, id: Date.now().toString(), photo_url: form.photo_url || null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]);
    }
    setSaving(false);
    setShowModal(false);
  };

  const handleDelete = (id: string) => { setAchievements((prev) => prev.filter((a) => a.id !== id)); setDeleteId(null); };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-montserrat font-bold text-2xl text-gray-900">Achievements</h1>
          <p className="text-gray-500 text-sm">{achievements.length} achievement records</p>
        </div>
        <button onClick={openAdd} className="btn-primary">
          <Plus className="w-4 h-4" /> Add Achievement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {achievements.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative">
            {a.is_rank_holder && (
              <div className="absolute top-0 right-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-3 py-1 rounded-b-lg shadow">
                🏆 {a.rank || "Rank Holder"}
              </div>
            )}
            <div className="h-1.5 bg-gradient-to-r from-royal-700 to-gold-500" />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center text-white font-bold text-lg shadow">
                  {a.student_name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{a.student_name}</p>
                  <p className="text-gray-400 text-xs">{a.standard} · {a.school_name}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">{a.marks_percentage}</span>
                <span className="text-xs px-2 py-0.5 bg-royal-50 text-royal-700 rounded-full border border-royal-100">{a.board}</span>
                <span className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">{a.year}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{a.achievement_description}</p>
              <div className="flex gap-2">
                <button onClick={() => openEdit(a)} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-royal-700 bg-royal-50 rounded-xl hover:bg-royal-100 transition-colors">
                  <Pencil className="w-3.5 h-3.5" /> Edit
                </button>
                <button onClick={() => setDeleteId(a.id)} className="px-3 py-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="font-montserrat font-bold text-lg text-gray-900">
                {editing ? "Edit Achievement" : "Add Achievement"}
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name <span className="text-red-500">*</span></label>
                  <input type="text" value={form.student_name} onChange={(e) => setForm((p) => ({ ...p, student_name: e.target.value }))} placeholder="Full name" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Year <span className="text-red-500">*</span></label>
                  <input type="text" value={form.year} onChange={(e) => setForm((p) => ({ ...p, year: e.target.value }))} placeholder="2024" className="input-field" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Standard <span className="text-red-500">*</span></label>
                  <select value={form.standard} onChange={(e) => setForm((p) => ({ ...p, standard: e.target.value }))} className="input-field">
                    <option value="">Select Class</option>
                    {standards.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Board <span className="text-red-500">*</span></label>
                  <select value={form.board} onChange={(e) => setForm((p) => ({ ...p, board: e.target.value as "State Board" | "CBSE" }))} className="input-field">
                    <option value="State Board">State Board</option>
                    <option value="CBSE">CBSE</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">School Name <span className="text-red-500">*</span></label>
                <input type="text" value={form.school_name} onChange={(e) => setForm((p) => ({ ...p, school_name: e.target.value }))} placeholder="School name" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Marks / Percentage <span className="text-red-500">*</span></label>
                <input type="text" value={form.marks_percentage} onChange={(e) => setForm((p) => ({ ...p, marks_percentage: e.target.value }))} placeholder="e.g. 98% or 490/500" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Achievement Description</label>
                <textarea value={form.achievement_description} onChange={(e) => setForm((p) => ({ ...p, achievement_description: e.target.value }))} placeholder="Describe the achievement..." rows={3} className="input-field resize-none" />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="rank_holder" checked={form.is_rank_holder} onChange={(e) => setForm((p) => ({ ...p, is_rank_holder: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-royal-600" />
                <label htmlFor="rank_holder" className="text-sm font-medium text-gray-700">Rank Holder</label>
              </div>
              {form.is_rank_holder && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Rank Description</label>
                  <input type="text" value={form.rank} onChange={(e) => setForm((p) => ({ ...p, rank: e.target.value }))} placeholder="e.g. District 1st, School Topper" className="input-field" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Photo URL</label>
                <div className="flex gap-2">
                  <input type="url" value={form.photo_url} onChange={(e) => setForm((p) => ({ ...p, photo_url: e.target.value }))} placeholder="https://..." className="input-field" />
                  <button className="px-3 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 shrink-0">
                    <Upload className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 btn-primary justify-center py-2.5">
                {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : editing ? "Save Changes" : "Add Achievement"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">Delete Achievement?</h3>
            <p className="text-gray-500 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => handleDelete(deleteId)} className="flex-1 py-2.5 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
