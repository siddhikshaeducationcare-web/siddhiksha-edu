import { BookOpen, Award, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "State Board",
    subtitle: "Classes 1–12",
    desc: "Comprehensive curriculum aligned with Tamil Nadu State Board syllabus. Expert coaching for all subjects.",
    color: "from-blue-500 to-royal-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Award,
    title: "CBSE",
    subtitle: "Classes 1–10",
    desc: "Specialized CBSE coaching with focus on concept clarity, application, and exam preparation.",
    color: "from-royal-600 to-royal-800",
    bg: "bg-royal-50",
    border: "border-royal-100",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    subtitle: "Experienced Teachers",
    desc: "Our educators bring years of experience and a passion for making complex topics simple and engaging.",
    color: "from-gold-500 to-gold-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    subtitle: "150+ Rank Holders",
    desc: "Consistent track record of top scores, rank holders, and students achieving their academic dreams.",
    color: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Why Students Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trusted by hundreds of families across Chennai for quality education and
            extraordinary results year after year.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, subtitle, desc, color, bg, border }) => (
            <div
              key={title}
              className={`card p-6 border ${border} ${bg} group cursor-default`}
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-gray-900 text-lg mb-0.5">
                {title}
              </h3>
              <p className="text-royal-700 font-semibold text-sm mb-3">{subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
