import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Award, Clock } from "lucide-react";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const metadata: Metadata = {
  title: "Our Faculty",
  description:
    "Meet the experienced and dedicated faculty at Siddhiksha Education Care — expert educators in Mathematics, Science, and Tamil.",
};

const faculty = [
  {
    id: "1",
    name: "Dr. Ramalingam S.",
    qualification: "M.Sc., M.Phil., Ph.D. (Mathematics)",
    experience: "18 Years",
    subject_expertise: "Mathematics (State Board & CBSE)",
    description:
      "Dr. Ramalingam brings 18 years of teaching experience and a unique ability to make complex mathematical concepts accessible to students of all levels. His systematic approach and patience have produced over 50 district rank holders.",
    photo_url: null,
  },
  {
    id: "2",
    name: "Mrs. Sumitha Devi",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "14 Years",
    subject_expertise: "Physics & Chemistry",
    description:
      "Mrs. Sumitha's passion for science is contagious. Her lab-oriented teaching style and real-world examples help students build deep conceptual understanding that extends well beyond exam preparation.",
    photo_url: null,
  },
  {
    id: "3",
    name: "Mr. Karthikeyan R.",
    qualification: "M.A. Tamil, M.Phil., B.Ed.",
    experience: "20 Years",
    subject_expertise: "Tamil Language & Literature",
    description:
      "With two decades of Tamil teaching expertise, Mr. Karthikeyan has guided hundreds of students to score full marks. His engaging storytelling approach makes Tamil literature come alive in the classroom.",
    photo_url: null,
  },
  {
    id: "4",
    name: "Mrs. Preethi Anand",
    qualification: "M.Sc. Biology, B.Ed.",
    experience: "12 Years",
    subject_expertise: "Biology & Life Sciences",
    description:
      "Mrs. Preethi combines detailed diagram work with conceptual clarity to help students master Biology. Her focus on making diagrams perfect ensures students score full marks in practical-oriented questions.",
    photo_url: null,
  },
  {
    id: "5",
    name: "Mr. Venkatesh Kumar",
    qualification: "B.Tech, M.Tech, B.Ed.",
    experience: "10 Years",
    subject_expertise: "Mathematics & Computer Science (CBSE)",
    description:
      "Mr. Venkatesh specializes in CBSE Mathematics and Computer Science, bringing an engineering mindset to problem-solving. His structured approach helps students tackle even the most challenging board exam questions.",
    photo_url: null,
  },
  {
    id: "6",
    name: "Mrs. Lakshmi Narayanan",
    qualification: "M.A. English, M.Phil., B.Ed.",
    experience: "16 Years",
    subject_expertise: "English Language & Literature",
    description:
      "Mrs. Lakshmi's expertise in English grammar, comprehension, and essay writing helps students achieve top scores across both State Board and CBSE boards. Her communication-first approach builds lasting language skills.",
    photo_url: null,
  },
];

export default function FacultyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-gold-300 uppercase tracking-widest mb-4">
            Meet the Team
          </span>
          <h1 className="font-montserrat font-black text-white text-4xl sm:text-5xl mb-6">
            Our <span className="text-gold-400">Expert Faculty</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Passionate educators with decades of combined experience, dedicated to
            bringing out the best in every student.
          </p>
        </div>
      </section>

      {/* Faculty grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}

function FacultyCard({ member }: { member: typeof faculty[0] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Header */}
      <div className="bg-gradient-to-br from-royal-700 to-royal-900 p-6 text-center relative">
        <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3 text-white font-black text-3xl font-montserrat shadow-lg group-hover:scale-105 transition-transform duration-300">
          {member.name.split(" ")[0][0]}{member.name.split(" ").slice(-1)[0][0]}
        </div>
        <h3 className="font-montserrat font-bold text-white text-lg">{member.name}</h3>
        <p className="text-white/60 text-xs mt-1">{member.qualification}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-7 h-7 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-gold-600" />
            </div>
            <span className="text-gray-700 font-medium text-xs">{member.subject_expertise}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <span className="text-gray-700 text-xs">{member.experience} Experience</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
      </div>
    </div>
  );
}
