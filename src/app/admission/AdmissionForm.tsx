"use client";

import { useState } from "react";
import { CheckCircle, Loader2, AlertCircle, User, Phone, Mail, School, BookOpen, FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  student_name: string;
  parent_name: string;
  mobile_number: string;
  email: string;
  school_name: string;
  standard: string;
  board: string;
  additional_notes: string;
}

const initialForm: FormData = {
  student_name: "",
  parent_name: "",
  mobile_number: "",
  email: "",
  school_name: "",
  standard: "",
  board: "",
  additional_notes: "",
};

const standards = [
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11", "Class 12",
];

export function AdmissionForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.student_name.trim()) newErrors.student_name = "Student name is required";
    if (!form.parent_name.trim()) newErrors.parent_name = "Parent name is required";
    if (!form.mobile_number.trim()) newErrors.mobile_number = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile_number)) newErrors.mobile_number = "Enter a valid 10-digit mobile number";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email address";
    if (!form.school_name.trim()) newErrors.school_name = "School name is required";
    if (!form.standard) newErrors.standard = "Please select a class";
    if (!form.board) newErrors.board = "Please select a board";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-3">
          Registration Successful!
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6 max-w-md mx-auto">
          Thank you for registering! We have received your application and sent a
          confirmation to your email. Our team will contact you within 24 hours.
        </p>
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-sm text-emerald-700 mb-6">
          📧 A confirmation email has been sent to <strong>{form.email || "your email"}</strong>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-gray-100">
      <div className="mb-8">
        <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-1">
          Admission Form
        </h2>
        <p className="text-gray-500 text-sm">
          Fill in your details and we'll be in touch shortly.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            icon={<User className="w-4 h-4 text-gray-400" />}
            label="Student Name"
            required
          >
            <input
              type="text"
              name="student_name"
              value={form.student_name}
              onChange={handleChange}
              placeholder="Enter student's full name"
              className={cn("input-field", errors.student_name && "border-red-300 ring-1 ring-red-300")}
            />
            {errors.student_name && <FieldError msg={errors.student_name} />}
          </FormField>

          <FormField
            icon={<Users className="w-4 h-4 text-gray-400" />}
            label="Parent / Guardian Name"
            required
          >
            <input
              type="text"
              name="parent_name"
              value={form.parent_name}
              onChange={handleChange}
              placeholder="Enter parent's full name"
              className={cn("input-field", errors.parent_name && "border-red-300 ring-1 ring-red-300")}
            />
            {errors.parent_name && <FieldError msg={errors.parent_name} />}
          </FormField>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            icon={<Phone className="w-4 h-4 text-gray-400" />}
            label="Mobile Number"
            required
          >
            <input
              type="tel"
              name="mobile_number"
              value={form.mobile_number}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={cn("input-field", errors.mobile_number && "border-red-300 ring-1 ring-red-300")}
            />
            {errors.mobile_number && <FieldError msg={errors.mobile_number} />}
          </FormField>

          <FormField
            icon={<Mail className="w-4 h-4 text-gray-400" />}
            label="Email Address"
            required
          >
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="parent@email.com"
              className={cn("input-field", errors.email && "border-red-300 ring-1 ring-red-300")}
            />
            {errors.email && <FieldError msg={errors.email} />}
          </FormField>
        </div>

        {/* School */}
        <FormField
          icon={<School className="w-4 h-4 text-gray-400" />}
          label="School Name"
          required
        >
          <input
            type="text"
            name="school_name"
            value={form.school_name}
            onChange={handleChange}
            placeholder="Enter school name"
            className={cn("input-field", errors.school_name && "border-red-300 ring-1 ring-red-300")}
          />
          {errors.school_name && <FieldError msg={errors.school_name} />}
        </FormField>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            icon={<BookOpen className="w-4 h-4 text-gray-400" />}
            label="Standard / Class"
            required
          >
            <select
              name="standard"
              value={form.standard}
              onChange={handleChange}
              className={cn("input-field", errors.standard && "border-red-300 ring-1 ring-red-300")}
            >
              <option value="">Select Class</option>
              {standards.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.standard && <FieldError msg={errors.standard} />}
          </FormField>

          <FormField
            icon={<BookOpen className="w-4 h-4 text-gray-400" />}
            label="Board"
            required
          >
            <select
              name="board"
              value={form.board}
              onChange={handleChange}
              className={cn("input-field", errors.board && "border-red-300 ring-1 ring-red-300")}
            >
              <option value="">Select Board</option>
              <option value="State Board">State Board</option>
              <option value="CBSE">CBSE</option>
            </select>
            {errors.board && <FieldError msg={errors.board} />}
          </FormField>
        </div>

        {/* Notes */}
        <FormField
          icon={<FileText className="w-4 h-4 text-gray-400" />}
          label="Additional Notes (Optional)"
        >
          <textarea
            name="additional_notes"
            value={form.additional_notes}
            onChange={handleChange}
            placeholder="Any specific requirements, subjects of concern, or questions..."
            rows={3}
            className="input-field resize-none"
          />
        </FormField>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full btn-gold py-4 text-base justify-center"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Admission Form"
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          By submitting, you agree to be contacted by Siddhiksha Education Care regarding admission.
        </p>
      </form>
    </div>
  );
}

function FormField({
  icon,
  label,
  required,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
        {icon}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {msg}
    </p>
  );
}
