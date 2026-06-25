import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Briefcase, Building2, Award } from "lucide-react";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const metadata: Metadata = {
  title: "Our Alumni",
  description:
    "Our Pride – Where Our Students Shine Today. Meet the proud alumni of Siddhiksha Education Care who continue to achieve excellence in their academic and professional journeys.",
};

const alumni = [
  {
    id: "1",
    name: "Sample Student Name",
    batch_year: "12th Standard — 2018",
    qualification: "B.Tech Computer Science",
    position: "Software Engineer",
    company: "Sample Company Pvt Ltd",
    photo_url: null,
    sec_position: null, // e.g., "Faculty (Mathematics) — 2020-2022"
  },
  {
    id: "2",
    name: "Sample Student Name",
    batch_year: "12th Standard — 2019",
    qualification: "M.B.B.S.",
    position: "Resident Doctor",
    company: "Sample Hospital",
    photo_url: null,
    sec_position: "Faculty (Science) — 2021-2023",
  },
  {
    id: "3",
    name: "Sample Student Name",
    batch_year: "12th Standard — 2020",
    qualification: "B.Com",
    position: "Chartered Accountant (Trainee)",
    company: "Sample Firm",
    photo_url: null,
    sec_position: null,
  },
];

export default function AlumniPage() {
  return (
    <>
      {/* Hero — Gold dominant, navy as accent (reverse of normal pages) */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #92400e 0%, #b45309 35%, #d97706 65%, #f59e0b 100%)",
        }}
      >
        {/* Subtle navy accents */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #172554, transparent)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #1e3a8a, transparent)" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-900/30 border border-royal-300/30 text-royal-100 text-sm font-semibold uppercase tracking-widest mb-6">
            <Award className="w-4 h-4" />
            Hall of Fame
          </span>
          <h1 className="font-montserrat font-black text-white text-4xl sm:text-5xl mb-4 leading-tight">
            Our Pride —
            <br />
            <span className="text-royal-900">Where Our Students Shine Today</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl mx-auto">
            Celebrating the journeys of our former students who continue to make us
            proud in their academic and professional lives.
          </p>
        </div>
      </section>

      {/* Alumni grid — gold-washed background */}
      <section className="py-20" style={{ background: "#fffbf0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((person) => (
              <AlumniCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}

function AlumniCard({ person }: { person: typeof alumni[0] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gold-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Header — Gold gradient (reverse of Faculty's navy) */}
      <div
        className="p-6 text-center relative"
        style={{
          background: "linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)",
        }}
      >
        <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300 relative ring-4 ring-white/30">
          {person.photo_url ? (
            <Image src={person.photo_url} alt={person.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-royal-900/30 flex items-center justify-center text-white font-black text-3xl font-montserrat">
              {person.name.split(" ")[0][0]}
              {person.name.split(" ").slice(-1)[0][0]}
            </div>
          )}
        </div>
        <h3 className="font-montserrat font-bold text-white text-lg">{person.name}</h3>
        <p className="text-white/80 text-xs mt-1">{person.batch_year}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-7 h-7 rounded-lg bg-royal-50 flex items-center justify-center shrink-0">
              <GraduationCap className="w-3.5 h-3.5 text-royal-700" />
            </div>
            <span className="text-gray-700 font-medium text-xs">{person.qualification}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-7 h-7 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
              <Briefcase className="w-3.5 h-3.5 text-gold-700" />
            </div>
            <span className="text-gray-700 text-xs">{person.position}</span>
          </div>
          {person.company && (
            <div className="flex items-center gap-2 text-sm">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-xs">{person.company}</span>
            </div>
          )}
        </div>

        {person.sec_position && (
          <div className="mt-4 pt-4 border-t border-gold-100">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 bg-gold-50 px-3 py-1.5 rounded-full border border-gold-100">
              <Award className="w-3 h-3" />
              SEC Position: {person.sec_position}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
