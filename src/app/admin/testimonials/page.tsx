"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, X, Loader2, Star, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

const initialTestimonials: Testimonial[] = [
  { id: "1", parent_name: "Rajesh Kumar", student_name: "Priya Kumar", standard: "Class 10 (State Board)", content: "Siddhiksha transformed my daughter's understanding of Mathematics. She went from struggling with basics to scoring 98 in her board exam.", rating: 5, is_active: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: "2", parent_name: "Lakshmi Devi", student_name: "Arjun Devi", standard: "Class 8 (CBSE)", content: "The teachers here are incredibly patient and methodical. My son's confidence in Science has grown tremendously.", rating: 5, is_active: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: "3", parent_name: "Murugesan S.", student_name: "Kavya Murugesan", standard: "Class 12 (State Board)", content: "My daughter scored district first rank in Tamil! The way they teach literature here is exceptional.", rating: 5, is_active: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
];

const emptyForm = { parent_name: "", student_name: "", standard: "", content: "", rating: 5, is_active: true };

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openAdd = () => { setEditing(null); setForm(emptyForm); setShowModal(true); };
  const openEdit = (t: Testimonial) => {
    setEditing(t);
    setForm({ parent_name: t.parent_name, student_name: t.student_name, standard: t.standard, content: t.content, rating: t.rating, is_active: t.is_active });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.parent_name || !form.student_name || !form.content) return;
    setSaving(true);
    await new Promise((r) => setTimeout(r, 700));
    if (editing) {
      setTestimonials((prev) => prev.map((t) => t.id === editing.id ? { ...t, ...form, updated_at: new Date().toISOString() } : t));
    } else {
      setTestimonials((prev) => [...prev, { ...form, id: Date.now().toString(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]);
    }
    setSaving(false);
    setShowModal(false);
  };

  const toggleActive = (id: string) => {
    setTestimonials((prev) => prev.map((t) => t.id === id ? { ...t, is_active: !t.is_active } : t));
  };

  const handleDelete = (id: string) => { setTestimonials((prev) => prev.filter((t) => t.id !== id)); setDeleteId(null); };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-montserrat font-bold text-2xl text-gray-900">Testimonials</h1>
          <p className="text-gray-500 text-sm">
            {testimonials.filter((t) => t.is_active).length} active · {testimonials.length} total
          </p>
        </div>
        <button onClick={openAdd} className="btn-primary">
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.id} className={cn("bg-white rounded-2xl border shadow-sm overflow-hidden", t.is_active ? "border-gray-100" : "border-gray-200 opacity-60")}>
            {!t.is_active && (
              <div className="bg-gray-50 text-center text-xs py-1.5 text-gray-500 font-medium border-b border-gray-100">
                Hidden from website
              </div>
            )}
            <div className="p-5">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < t.rating ? "text-gold-400 fill-gold-400" : "text-gray-200")} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic line-clamp-3">
                "{t.content}"
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-royal-700 text-white flex items-center justify-center text-xs font-bold">
                  {t.parent_name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.parent_name}</p>
                  <p className="text-xs text-gray-400">Parent of {t.student_name} · {t.standard}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => openEdit(t)} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-royal-700 bg-royal-50 rounded-xl hover:bg-royal-100 transition-colors">
                  <Pencil className="w-3.5 h-3.5" /> Edit
                </button>
                <button onClick={() => toggleActive(t.id)} className={cn("px-3 py-2 rounded-xl transition-colors", t.is_active ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100" : "text-gray-500 bg-gray-100 hover:bg-gray-200")}>
                  {t.is_active ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                </button>
                <button onClick={() => setDeleteId(t.id)} className="px-3 py-2 text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="font-montserrat font-bold text-lg text-gray-900">
                {editing ? "Edit Testimonial" : "Add Testimonial"}
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Parent Name <span className="text-red-500">*</span></label>
                  <input type="text" value={form.parent_name} onChange={(e) => setForm((p) => ({ ...p, parent_name: e.target.value }))} placeholder="Parent's name" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name <span className="text-red-500">*</span></label>
                  <input type="text" value={form.student_name} onChange={(e) => setForm((p) => ({ ...p, student_name: e.target.value }))} placeholder="Student's name" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Standard</label>
                <input type="text" value={form.standard} onChange={(e) => setForm((p) => ({ ...p, standard: e.target.value }))} placeholder="e.g. Class 10 (State Board)" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Testimonial <span className="text-red-500">*</span></label>
                <textarea value={form.content} onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))} placeholder="What did the parent say?" rows={4} className="input-field resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setForm((p) => ({ ...p, rating: star }))}>
                      <Star className={cn("w-7 h-7 transition-colors", star <= form.rating ? "text-gold-400 fill-gold-400" : "text-gray-200 hover:text-gold-300")} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="is_active" checked={form.is_active} onChange={(e) => setForm((p) => ({ ...p, is_active: e.target.checked }))} className="w-4 h-4 rounded border-gray-300 text-royal-600" />
                <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Show on website</label>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="flex-1 btn-primary justify-center py-2.5">
                {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : editing ? "Save Changes" : "Add Testimonial"}
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
            <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">Delete Testimonial?</h3>
            <p className="text-gray-500 text-sm mb-6">This cannot be undone.</p>
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
