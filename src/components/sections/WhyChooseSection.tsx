import {
  Brain,
  Target,
  BarChart2,
  CheckCircle,
  Lightbulb,
  Medal,
} from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Experienced Faculty",
    desc: "Our teachers bring decade-long expertise and a genuine love for teaching. Every educator is trained in modern pedagogy.",
  },
  {
    icon: Target,
    title: "Individual Attention",
    desc: "Small batch sizes ensure every student receives personal guidance. We track individual progress and adapt our teaching.",
  },
  {
    icon: CheckCircle,
    title: "Strong Academic Foundation",
    desc: "We build fundamentals first. Our structured approach ensures students master concepts before advancing.",
  },
  {
    icon: BarChart2,
    title: "Regular Assessments",
    desc: "Weekly tests, monthly exams, and parent feedback meetings keep students on track and families informed.",
  },
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    desc: "We go beyond rote learning to ensure true understanding. Real-world examples make abstract concepts tangible.",
  },
  {
    icon: Medal,
    title: "Excellent Results",
    desc: "150+ rank holders and a 98% pass rate. Our students consistently excel in board examinations.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="section-eyebrow">Our Advantage</span>
            <h2 className="section-title text-3xl sm:text-4xl mb-6">
              We Teach Differently.
              <br />
              <span className="text-royal-700">Results Show It.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              At Siddhiksha Education Care, we've developed a proven system that
              doesn't just help students pass — it transforms them into confident,
              capable learners. Every method we use is grounded in research and
              refined through years of classroom experience.
            </p>

            {/* Key stat highlight */}
            <div className="flex gap-6 pt-2">
              {[
                { value: "98%", label: "Pass Rate" },
                { value: "150+", label: "Rank Holders" },
                { value: "500+", label: "Happy Students" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-montserrat font-black text-3xl text-royal-800 mb-1">
                    {value}
                  </p>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-royal-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center mb-3 group-hover:bg-royal-100 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-royal-700" />
                </div>
                <h3 className="font-montserrat font-semibold text-gray-900 text-sm mb-1.5">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
