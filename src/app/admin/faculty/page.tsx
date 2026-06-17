"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, X, Upload, Loader2, BookOpen, Clock } from "lucide-react";
import type { Faculty } from "@/types";

const initialFaculty: Faculty[] = [
  { id: "1", name: "Dr. Ramalingam S.", qualification: "M.Sc., M.Phil., Ph.D. (Mathematics)", experience: "18 Years", subject_expertise: "Mathematics (State Board & CBSE)", description: "Expert mathematics teacher with 18 years of experience.", photo_url: null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: "2", name: "Mrs. Sumitha Devi", qualification: "M.Sc. Physics, B.Ed.", experience: "14 Years", subject_expertise: "Physics & Chemistry", description: "Passionate science educator known for conceptual teaching.", photo_url: null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
];

const emptyForm = { name: "", qualification: "", experience: "", subject_expertise: "", description: "", photo_url: "" };

export default function AdminFacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>(initialFaculty);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Faculty | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (f: Faculty) => {
    setEditing(f);
    setForm({ name: f.name, qualification: f.qualification, experience: f.experience, subject_expertise: f.subject_expertise, description: f.description, photo_url: f.photo_url || "" });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.qualification || !form.experience || !form.subject_expertise) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800)); // Simulated API call
    if (editing) {
      setFaculty((prev) => prev.map((f) => f.id === editing.id ? { ...f, ...form, updated_at: new Date().toISOString() } : f));
    } else {
      setFaculty((prev) => [...prev, { ...form, id: Date.now().toString(), photo_url: form.photo_url || null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]);
    }
    setSaving(false);
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    setFaculty((prev) => prev.filter((f) => f.id !== id));
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-montserrat font-bold text-2xl text-gray-900">Faculty</h1>
          <p className="text-gray-500 text-sm">{faculty.length} faculty members</p>
        </div>
        <button onClick={openAdd} className="btn-primary">
          <Plus className="w-4 h-4" /> Add Faculty
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {faculty.map((f) => (
          <div key={f.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-br from-royal-700 to-royal-900 p-5 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-2 text-white font-black text-2xl font-montserrat">
                {f.name.split(" ")[0][0]}{f.name.split(" ").slice(-1)[0][0]}
              </div>
              <h3 className="font-montserrat font-bold text-white text-sm">{f.name}</h3>
              <p className="text-white/60 text-xs mt-0.5">{f.qualification}</p>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                <span className="text-xs text-gray-700 font-medium">{f.subject_expertise}</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs text-gray-500">{f.experience} Experience</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{f.description}</p>
              <div className="flex gap-2">
                <button onClick={() => openEdit(f)} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-royal-700 bg-royal-50 rounded-xl hover:bg-royal-100 transition-colors">
                  <Pencil className="w-3.5 h-3.5" /> Edit
                </button>
                <button onClick={() => setDeleteId(f.id)} className="flex items-center justify-center px-3 py-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
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
            <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white">
              <h3 className="font-montserrat font-bold text-lg text-gray-900">
                {editing ? "Edit Faculty" : "Add Faculty"}
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Full Name", key: "name", placeholder: "Dr. First Last" },
                { label: "Qualification", key: "qualification", placeholder: "M.Sc., B.Ed." },
                { label: "Experience", key: "experience", placeholder: "10 Years" },
                { label: "Subject Expertise", key: "subject_expertise", placeholder: "Mathematics, Science..." },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{label} <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                    placeholder={placeholder}
                    className="input-field"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                  placeholder="Brief bio about the faculty member..."
                  rows={3}
                  className="input-field resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Photo URL</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={form.photo_url}
                    onChange={(e) => setForm((p) => ({ ...p, photo_url: e.target.value }))}
                    placeholder="https://... (or upload to storage)"
                    className="input-field"
                  />
                  <button className="flex items-center gap-1.5 px-3 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 shrink-0">
                    <Upload className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handleSave} disabled={saving} className="flex-1 btn-primary justify-center py-2.5">
                {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : editing ? "Save Changes" : "Add Faculty"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">Delete Faculty?</h3>
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
