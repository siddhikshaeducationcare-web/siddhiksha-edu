"use client";

import { useState } from "react";
import { Save, Loader2, Globe, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Image, Upload, CheckCircle } from "lucide-react";

const initialSettings = {
  institution_name: "Siddhiksha Education Care",
  tagline: "A Place to Learn!",
  phone: "+91 XXXXX XXXXX",
  email: "info@siddhikshaedu.com",
  address: "Chennai, Tamil Nadu, India",
  working_hours: "Mon – Sat: 9 AM – 7 PM | Sunday: 10 AM – 2 PM",
  facebook_url: "https://facebook.com/siddhikshaedu",
  instagram_url: "https://instagram.com/siddhikshaedu",
  youtube_url: "https://youtube.com/@siddhikshaedu",
  twitter_url: "https://twitter.com/siddhikshaedu",
  about_content: "Siddhiksha Education Care was founded with a simple but powerful belief: every child deserves access to quality education and the individual attention needed to reach their full potential.",
  vision: "To be the most trusted and impactful educational institution in Chennai.",
  mission: "To provide exceptional, personalized coaching that builds strong academic foundations.",
  logo_url: "",
  hero_banner_url: "",
  admissions_open: true,
  meta_description: "Premium tuition centre in Chennai offering State Board (1-12) and CBSE (1-10) coaching.",
};

type Settings = typeof initialSettings;

const sections = [
  {
    id: "general",
    label: "General",
    icon: Globe,
    fields: [
      { key: "institution_name", label: "Institution Name", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "meta_description", label: "SEO Meta Description", type: "textarea" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    icon: Phone,
    fields: [
      { key: "phone", label: "Phone Number", type: "text" },
      { key: "email", label: "Email Address", type: "email" },
      { key: "address", label: "Address", type: "text" },
      { key: "working_hours", label: "Working Hours", type: "text" },
    ],
  },
  {
    id: "social",
    label: "Social Media",
    icon: Globe,
    fields: [
      { key: "facebook_url", label: "Facebook URL", type: "url" },
      { key: "instagram_url", label: "Instagram URL", type: "url" },
      { key: "youtube_url", label: "YouTube URL", type: "url" },
      { key: "twitter_url", label: "Twitter/X URL", type: "url" },
    ],
  },
  {
    id: "about",
    label: "About Us Content",
    icon: Globe,
    fields: [
      { key: "about_content", label: "About Us Description", type: "textarea" },
      { key: "vision", label: "Vision Statement", type: "textarea" },
      { key: "mission", label: "Mission Statement", type: "textarea" },
    ],
  },
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [activeSection, setActiveSection] = useState("general");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-montserrat font-bold text-2xl text-gray-900">Settings</h1>
          <p className="text-gray-500 text-sm">Manage website content and configuration</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${saved ? "bg-emerald-600 text-white" : "btn-primary"}`}
        >
          {saving ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
          ) : saved ? (
            <><CheckCircle className="w-4 h-4" /> Saved!</>
          ) : (
            <><Save className="w-4 h-4" /> Save Changes</>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-1 ${activeSection === id ? "bg-royal-700 text-white" : "text-gray-600 hover:bg-gray-50 hover:text-royal-700"}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </button>
            ))}

            {/* Additional controls */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="px-4 py-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className={`relative w-10 h-5 rounded-full transition-colors ${settings.admissions_open ? "bg-emerald-500" : "bg-gray-200"}`} onClick={() => setSettings((p) => ({ ...p, admissions_open: !p.admissions_open }))}>
                    <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${settings.admissions_open ? "translate-x-5" : ""}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Admissions Open</span>
                </label>
              </div>
            </div>
          </div>

          {/* Media upload */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mt-4">
            <h3 className="font-montserrat font-semibold text-sm text-gray-900 mb-4">Media</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-2">Logo</p>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-royal-300 cursor-pointer transition-colors">
                  <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Upload Logo</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Hero Banner</p>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-royal-300 cursor-pointer transition-colors">
                  <Image className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Upload Banner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-montserrat font-semibold text-lg text-gray-900 mb-6">
              {currentSection?.label} Settings
            </h2>
            <div className="space-y-5">
              {currentSection?.fields.map(({ key, label, type }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                  {type === "textarea" ? (
                    <textarea
                      value={settings[key as keyof Settings] as string}
                      onChange={(e) => setSettings((p) => ({ ...p, [key]: e.target.value }))}
                      rows={4}
                      className="input-field resize-none"
                    />
                  ) : (
                    <input
                      type={type}
                      value={settings[key as keyof Settings] as string}
                      onChange={(e) => setSettings((p) => ({ ...p, [key]: e.target.value }))}
                      className="input-field"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={handleSave}
                disabled={saving}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${saved ? "bg-emerald-600 text-white" : "btn-primary"}`}
              >
                {saving ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
                ) : saved ? (
                  <><CheckCircle className="w-4 h-4" /> Saved!</>
                ) : (
                  <><Save className="w-4 h-4" /> Save Changes</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
