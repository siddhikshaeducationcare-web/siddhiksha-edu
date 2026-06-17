import type { Metadata } from "next";
import { Target, Eye, BookOpen, Users, Award, TrendingUp, Heart, Zap } from "lucide-react";
import { AdmissionCTA } from "@/components/sections/AdmissionCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Siddhiksha Education Care — our vision, mission, teaching methodology, and commitment to academic excellence in Chennai.",
};

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Students Taught" },
  { value: "150+", label: "Rank Holders" },
  { value: "98%", label: "Pass Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Student-First Philosophy",
    desc: "Every decision we make is centered on what's best for our students. We create a nurturing, safe, and stimulating environment where learning flourishes.",
  },
  {
    icon: Zap,
    title: "Concept Clarity",
    desc: "We believe in deep understanding over rote memorization. Our teachers break down complex topics into simple, memorable building blocks.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    desc: "No two students learn alike. We adapt our teaching methods to match each student's pace, learning style, and academic goals.",
  },
  {
    icon: Award,
    title: "Excellence in Results",
    desc: "We set high standards and help every student achieve them. Our track record of top scores and rank holders reflects our commitment.",
  },
];

const methodology = [
  {
    step: "01",
    title: "Assessment & Goal Setting",
    desc: "Every student begins with a thorough assessment to identify strengths, gaps, and learning style. Together, we set clear, achievable goals.",
  },
  {
    step: "02",
    title: "Structured Learning Plan",
    desc: "A personalized study plan is created covering curriculum, revision schedule, and exam preparation milestones tailored to the student's board and class.",
  },
  {
    step: "03",
    title: "Concept-Based Teaching",
    desc: "Our teachers use visual aids, real-world examples, and interactive techniques to ensure deep understanding — not just surface-level memorization.",
  },
  {
    step: "04",
    title: "Regular Practice & Assessment",
    desc: "Weekly tests, chapter-end assessments, and model exam simulations keep students exam-ready and help identify areas needing extra attention.",
  },
  {
    step: "05",
    title: "Feedback & Improvement",
    desc: "Regular parent-teacher communication and detailed performance reports ensure transparency and keep everyone aligned on student progress.",
  },
  {
    step: "06",
    title: "Exam Excellence",
    desc: "Dedicated exam prep sessions, time management coaching, and stress-reduction strategies prepare students to perform their best on board exams.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-gold-300 uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h1 className="font-montserrat font-black text-white text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            About Siddhiksha
            <br />
            <span className="text-gold-400">Education Care</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            For over 15 years, we have been a trusted partner in academic excellence
            for families across Chennai — building futures one student at a time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-montserrat font-black text-4xl sm:text-5xl text-royal-800 mb-2">
                  {value}
                </p>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="section-title text-3xl sm:text-4xl mb-6">
                A Legacy of Academic Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Siddhiksha Education Care was founded with a simple but powerful
                  belief: every child deserves access to quality education and the
                  individual attention needed to reach their full potential.
                </p>
                <p>
                  Based in Chennai, Tamil Nadu, we specialize in coaching students
                  from Classes 1 to 12 (State Board) and Classes 1 to 10 (CBSE),
                  with particular expertise in Mathematics, Science, and Tamil.
                </p>
                <p>
                  What sets us apart is our commitment to concept-based learning —
                  we don't just prepare students for exams, we prepare them for life.
                  Our alumni consistently rank among the top performers in their
                  respective boards, year after year.
                </p>
              </div>
            </div>
            {/* Visual card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-royal-50 to-blue-50 rounded-3xl p-8 border border-royal-100">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "State Board", detail: "Classes 1–12", icon: "📘" },
                    { label: "CBSE", detail: "Classes 1–10", icon: "📗" },
                    { label: "Mathematics", detail: "All Levels", icon: "∑" },
                    { label: "Science", detail: "Phy·Chem·Bio", icon: "⚗" },
                    { label: "Tamil", detail: "Lang & Lit", icon: "அ" },
                    { label: "Support", detail: "All Subjects", icon: "📚" },
                  ].map(({ label, detail, icon }) => (
                    <div
                      key={label}
                      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
                    >
                      <div className="text-2xl mb-2">{icon}</div>
                      <p className="font-semibold text-gray-900 text-sm">{label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white rounded-2xl px-4 py-2 shadow-lg text-sm font-bold">
                ✦ Est. 2009
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and impactful educational institution in
                Chennai — a place where every student discovers their academic
                potential, develops a love for learning, and emerges as a
                confident, capable individual ready to excel in life.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional, personalized coaching that builds strong
                academic foundations, nurtures critical thinking, and consistently
                delivers outstanding results — all within a supportive, encouraging
                environment where students thrive and families feel confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 rounded-2xl hover:bg-royal-50 transition-colors duration-200 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-royal-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-200 transition-colors duration-200">
                  <Icon className="w-7 h-7 text-royal-700" />
                </div>
                <h3 className="font-montserrat font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow">How We Teach</span>
            <h2 className="section-title text-3xl sm:text-4xl mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A six-step process refined over 15 years to consistently deliver
              exceptional student outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-royal-200 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 font-montserrat font-black text-5xl text-gray-50 leading-none select-none">
                  {step}
                </span>
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-royal-700 text-white flex items-center justify-center text-xs font-bold mb-4">
                    {step}
                  </div>
                  <h3 className="font-montserrat font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </>
  );
}
