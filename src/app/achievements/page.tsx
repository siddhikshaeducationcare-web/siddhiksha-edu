import type { Metadata } from "next";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";
import { AchievementsClient } from "./AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Celebrating our students' outstanding academic achievements at Siddhiksha Education Care.",
};

// Server component — data fetching would happen here via Supabase
export default async function AchievementsPage() {
  const achievements = [
    // ===== 2025-26 — 12th Standard (State Board) =====
    {
      id: "1",
      student_name: "Harini",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "91% (545/600)",
      achievement_description: "Scored full marks (100) in Business Mathematics.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      student_name: "Jeeva",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "85% (508/600)",
      achievement_description: "Scored 98 marks in Computer Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "3",
      student_name: "Ramya",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "84% (501/600)",
      achievement_description: "Scored 96 marks in Accounts.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "4",
      student_name: "Giridharan",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "83% (498/600)",
      achievement_description: "Scored 92 marks in Mathematics.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "5",
      student_name: "Nivethalaxmi",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "82% (490/600)",
      achievement_description: "Scored 98 marks in Tamil and English.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "6",
      student_name: "Roshan",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "80% (480/600)",
      achievement_description: "Scored 99 marks in Computer Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "7",
      student_name: "Rakesh",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "78% (468/600)",
      achievement_description: "Scored 85 marks in Physics.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },

    // ===== 2025-26 — 10th CBSE =====
    {
      id: "8",
      student_name: "Sai Prathissh",
      standard: "Class 10",
      school_name: "",
      board: "CBSE" as const,
      marks_percentage: "95% (473/500)",
      achievement_description: "Scored full marks (100) in Social Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "9",
      student_name: "Nishand",
      standard: "Class 10",
      school_name: "",
      board: "CBSE" as const,
      marks_percentage: "83% (417/500)",
      achievement_description: "Scored 93 marks in English.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },

    // ===== 2025-26 — 10th Standard (State Board) =====
    {
      id: "10",
      student_name: "Maheshwaran",
      standard: "Class 10",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "90% (452/500)",
      achievement_description: "Scored 97 marks in English.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "11",
      student_name: "Kavin",
      standard: "Class 10",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "87% (436/500)",
      achievement_description: "Scored 93 marks in Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "12",
      student_name: "Divya",
      standard: "Class 10",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "83% (415/500)",
      achievement_description: "Scored 92 marks in Social Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "13",
      student_name: "Yuvasri",
      standard: "Class 10",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "79% (392/500)",
      achievement_description: "Scored 89 marks in Tamil.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "14",
      student_name: "Siddhiksha",
      standard: "Class 10",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "78% (388/500)",
      achievement_description: "Scored 94 marks in Social Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2025-26",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },

    // ===== 2024-25 — 12th Standard (State Board) =====
    {
      id: "15",
      student_name: "Kanish",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "92% (554/600)",
      achievement_description: "Scored 97 marks in Mathematics and Tamil.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "16",
      student_name: "Akshaya",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "89% (536/600)",
      achievement_description: "Scored 95 marks in Tamil.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "17",
      student_name: "Jaisuriya",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "89% (536/600)",
      achievement_description: "Scored 96 marks in Physics and Computer Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "18",
      student_name: "John",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "88% (526/600)",
      achievement_description: "Scored 98 marks in Mathematics.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "19",
      student_name: "Monica",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "83% (499/600)",
      achievement_description: "Scored 92 marks in Computer Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "20",
      student_name: "Ajaykumar",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "81% (487/600)",
      achievement_description: "Scored 95 marks in Computer Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "21",
      student_name: "Guberan",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "79% (474/600)",
      achievement_description: "Scored 91 marks in Chemistry.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "22",
      student_name: "Sahana",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "79% (471/600)",
      achievement_description: "Scored 83 marks in Economics.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "23",
      student_name: "Kishore",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "77% (464/600)",
      achievement_description: "Scored 97 marks in Computer Science.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "24",
      student_name: "Aparna",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "77% (462/600)",
      achievement_description: "Scored 85 marks in Tamil and Computer Applications.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "25",
      student_name: "Harjeeth",
      standard: "Class 12",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "76% (455/600)",
      achievement_description: "Scored 89 marks in Chemistry.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },

    // ===== 2024-25 — 10th CBSE =====
    {
      id: "26",
      student_name: "Dhiganth Sagar",
      standard: "Class 10",
      school_name: "",
      board: "CBSE" as const,
      marks_percentage: "97% (483/500)",
      achievement_description: "Scored 99 marks in Tamil and Mathematics.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "27",
      student_name: "Balasabarish",
      standard: "Class 10",
      school_name: "",
      board: "CBSE" as const,
      marks_percentage: "94% (470/500)",
      achievement_description: "Scored full marks (100) in Tamil.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "28",
      student_name: "Harshith",
      standard: "Class 10",
      school_name: "",
      board: "CBSE" as const,
      marks_percentage: "80% (400/500)",
      achievement_description: "Scored 92 marks in Tamil.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },

    // ===== 2024-25 — 10th Standard (State Board) =====
    {
      id: "29",
      student_name: "Alwin",
      standard: "Class 10",
      school_name: "",
      board: "State Board" as const,
      marks_percentage: "85% (426/500)",
      achievement_description: "Scored 93 marks in English.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024-25",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-gold-300 uppercase tracking-widest mb-4">
            Hall of Fame
          </span>
          <h1 className="font-montserrat font-black text-white text-4xl sm:text-5xl mb-6">
            Student <span className="text-gold-400">Achievements</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Celebrating the brilliance, dedication, and hard work of our exceptional
            students who have made Siddhiksha proud.
          </p>
        </div>
      </section>

      {/* Summary stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { icon: Trophy, value: "29+", label: "Top Scorers", color: "text-gold-500" },
              { icon: Medal, value: "97%", label: "Highest Score", color: "text-royal-700" },
              { icon: Star, value: "98%", label: "Pass Rate", color: "text-emerald-600" },
              { icon: Award, value: "15+", label: "Years of Results", color: "text-violet-600" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label}>
                <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
                <p className="font-montserrat font-black text-4xl text-gray-900 mb-1">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements grid with filters */}
      <AchievementsClient achievements={achievements} />

      <AdmissionCTA />
    </>
  );
}
