import Link from "next/link";
import { ArrowRight } from "lucide-react";

const subjects = [
  {
    emoji: "∑",
    title: "Mathematics",
    boards: ["State Board", "CBSE"],
    classes: "Classes 1–12",
    desc: "From basic arithmetic to advanced calculus, our mathematics program builds strong numerical intuition, problem-solving skills, and exam confidence.",
    topics: ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry"],
    color: "royal",
    gradient: "from-royal-700 to-royal-900",
    iconBg: "bg-royal-100 text-royal-700",
  },
  {
    emoji: "⚗",
    title: "Science",
    boards: ["State Board", "CBSE"],
    classes: "Classes 1–10",
    desc: "Physics, Chemistry, and Biology taught with real-world examples, experiments, and conceptual depth that goes beyond textbook definitions.",
    topics: ["Physics", "Chemistry", "Biology", "Lab Practice", "Diagrams"],
    color: "emerald",
    gradient: "from-emerald-600 to-emerald-800",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    emoji: "அ",
    title: "Tamil",
    boards: ["State Board"],
    classes: "Classes 1–12",
    desc: "Comprehensive Tamil language coaching covering grammar, literature, poetry, prose, and examination techniques for top scores in board exams.",
    topics: ["Grammar", "Literature", "Poetry", "Essay Writing", "Comprehension"],
    color: "gold",
    gradient: "from-gold-600 to-gold-800",
    iconBg: "bg-amber-100 text-amber-700",
  },
  {
    emoji: "📚",
    title: "School Tuition Support",
    boards: ["State Board", "CBSE"],
    classes: "All Classes",
    desc: "Complete curriculum support for all school subjects — homework help, exam prep, note-making, and revision sessions to ensure no student is left behind.",
    topics: ["All Subjects", "Homework Help", "Exam Prep", "Revision", "Notes"],
    color: "violet",
    gradient: "from-violet-600 to-violet-800",
    iconBg: "bg-violet-100 text-violet-700",
  },
];

export function SubjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-eyebrow">What We Teach</span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Subjects & Specializations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Expert coaching in core subjects with dedicated attention to each student's
            learning pace and examination requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map(({ emoji, title, boards, classes, desc, topics, gradient, iconBg }) => (
            <div
              key={title}
              className="card border border-gray-100 overflow-hidden group"
            >
              {/* Top gradient banner */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${gradient}`}
              />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold ${iconBg} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-1">
                      {title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {boards.map((b) => (
                        <span
                          key={b}
                          className="text-xs font-semibold px-2 py-0.5 rounded-full bg-royal-50 text-royal-700 border border-royal-100"
                        >
                          {b}
                        </span>
                      ))}
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {classes}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {topics.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/admission"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-700 hover:text-royal-900 group/link"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
