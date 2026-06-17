import type { Metadata } from "next";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";
import { AchievementsClient } from "./AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Celebrating our students' outstanding academic achievements, rank holders, and top scorers at Siddhiksha Education Care.",
};

// Server component — data fetching would happen here via Supabase
export default async function AchievementsPage() {
  // In production, fetch from Supabase:
  // const { data } = await supabase.from('achievements').select('*').order('created_at', { ascending: false });
  const achievements = [
    {
      id: "1",
      student_name: "Priya Venkatesh",
      standard: "Class 12",
      school_name: "Sri Vidya Mandir",
      board: "State Board" as const,
      marks_percentage: "98.5%",
      achievement_description: "District First Rank in Tamil. Scored 200/200 in Tamil paper.",
      photo_url: null,
      is_rank_holder: true,
      rank: "District 1st",
      year: "2024",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      student_name: "Arjun Krishnamurthy",
      standard: "Class 10",
      school_name: "DAV Public School",
      board: "CBSE" as const,
      marks_percentage: "98%",
      achievement_description: "Scored 490/500 in CBSE Board. School First Rank. Perfect 100 in Mathematics.",
      photo_url: null,
      is_rank_holder: true,
      rank: "School 1st",
      year: "2024",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "3",
      student_name: "Kavitha Rajan",
      standard: "Class 10",
      school_name: "Vivekananda Vidyalaya",
      board: "State Board" as const,
      marks_percentage: "97%",
      achievement_description: "State Board top scorer. Full marks in Science and Mathematics.",
      photo_url: null,
      is_rank_holder: true,
      rank: "State Top 50",
      year: "2024",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "4",
      student_name: "Rohit Sundaram",
      standard: "Class 12",
      school_name: "Sri Ramakrishna Hr. Sec. School",
      board: "State Board" as const,
      marks_percentage: "96.8%",
      achievement_description: "Biology group topper. Scored 199/200 in Biology paper.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "5",
      student_name: "Meena Subramaniam",
      standard: "Class 8",
      school_name: "Kendriya Vidyalaya",
      board: "CBSE" as const,
      marks_percentage: "96%",
      achievement_description: "Class topper for two consecutive years. Exceptional in all subjects.",
      photo_url: null,
      is_rank_holder: false,
      year: "2024",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "6",
      student_name: "Vikram Nair",
      standard: "Class 12",
      school_name: "Sri Sankara Vidyalaya",
      board: "State Board" as const,
      marks_percentage: "95.5%",
      achievement_description: "Maths group district topper. Full marks in Mathematics.",
      photo_url: null,
      is_rank_holder: true,
      rank: "District Maths Topper",
      year: "2023",
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
              { icon: Trophy, value: "150+", label: "Rank Holders", color: "text-gold-500" },
              { icon: Medal, value: "500+", label: "Top Scorers", color: "text-royal-700" },
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
