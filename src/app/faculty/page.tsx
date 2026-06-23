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
    name: "V. Manikandan",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "15+ Years",
    subject_expertise: "Mathematics",
    description:
      "Founder of Siddhiksha Education Care with over 15 years of teaching experience. An expert in Mathematics, he has trained numerous students to achieve outstanding results, built a team of 40+ teaching staff, and guided 500+ students in academics and personal development.",
    photo_url: "/faculty/manikandan.png",
  },
  {
    id: "2",
    name: "Gokul Raj. D",
    qualification: "B.E. ECE",
    experience: "4 Years",
    subject_expertise: "Business Mathematics, Economics, Computer Science",
    description:
      "Has 4 years of teaching experience and was promoted to an administrative role. Actively supports the management in institutional operations and contributes to maintaining a productive learning environment.",
    photo_url: "/faculty/gokulraj.png",
  },
  {
    id: "3",
    name: "Andrew Richard Paul",
    qualification: "B.Tech CSE (Cyber Security)",
    experience: "4 Years",
    subject_expertise: "English, Mathematics, Computer Science",
    description:
      "Has 4 years of teaching experience in English, Mathematics, and Computer Science. Promoted to an administrative role and currently serves as Marketing Manager, contributing to student engagement, institutional growth, and academic excellence.",
    photo_url: "/faculty/andrew.png",
  },
  {
    id: "4",
    name: "Nithiya Laxmi",
    qualification: "B.Sc. Computer Science",
    experience: "2 Years",
    subject_expertise: "Physics, Chemistry, Mathematics",
    description:
      "Has 2 years of teaching experience and is dedicated to helping students understand concepts clearly through effective teaching methods and personalized guidance.",
    photo_url: "/faculty/nithiya.png",
  },
  {
    id: "5",
    name: "Vimal. P",
    qualification: "B.Com",
    experience: "2 Years",
    subject_expertise: "Accounts, Commerce, Economics",
    description:
      "Has 2 years of teaching experience and helps students build a strong understanding of commerce and financial concepts through clear explanations and practical learning approaches.",
    photo_url: "/faculty/vimal.png",
  },
  {
    id: "6",
    name: "Ajay Kumar",
    qualification: "B.Tech CSE",
    experience: "1 Year",
    subject_expertise: "Mathematics, Physics, Social Science",
    description:
      "Has one year of teaching experience and strong subject knowledge. Helps students understand concepts clearly through effective teaching methods and a student-friendly approach.",
    photo_url: "/faculty/ajay.png",
  },
  {
    id: "7",
    name: "Kishore. S",
    qualification: "B.Tech CSE (Cyber Security)",
    experience: "1 Year",
    subject_expertise: "All Subjects (Grades 8 & 9)",
    description:
      "Has one year of teaching experience and is capable of handling all subjects for Grades 8 and 9. Possesses strong subject knowledge and helps students build confidence through clear explanations and effective teaching methods.",
    photo_url: "/faculty/kishore.png",
  },
  {
    id: "8",
    name: "John Paul",
    qualification: "B.E. CSE",
    experience: "1 Year",
    subject_expertise: "All Subjects (Grades 6 to 8)",
    description:
      "Has one year of teaching experience and is capable of handling all subjects for Grades 6 to 8. He supports students with clear explanations and effective teaching methods. He also serves as the Dance Master of the institution and trains students in dance activities.",
    photo_url: "/faculty/johnpaul.png",
  },
  {
    id: "9",
    name: "Anu Shri",
    qualification: "B.Com",
    experience: "1 Year",
    subject_expertise: "All Subjects (Grades 1 to 5), Accounts",
    description:
      "Has one year of teaching experience and is capable of handling all subjects for Grades 1 to 5. A Montessori-trained teacher, she focuses on building strong foundational skills and providing effective learning support for young learners.",
    photo_url: "/faculty/anushri.png",
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
        <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300 relative">
          {member.photo_url ? (
            <Image src={member.photo_url} alt={member.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-white/20 flex items-center justify-center text-white font-black text-3xl font-montserrat">
              {member.name.split(" ")[0][0]}{member.name.split(" ").slice(-1)[0][0]}
            </div>
          )}
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
