"use client";

import Link from "next/link";
import { GraduationCap, ArrowRight, Star, Users, Trophy, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students Enrolled" },
  { icon: Trophy, value: "150+", label: "Rank Holders" },
  { icon: Star, value: "98%", label: "Pass Rate" },
  { icon: BookOpen, value: "15+", label: "Years of Excellence" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #d97706, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
        />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-gold-400/30 animate-float" />
        <div
          className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-300/30 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-gold-300/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
              <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              Admissions Open — 2026-27
            </div>

            <h1 className="font-montserrat font-black text-white leading-tight mb-6">
              <span className="block text-5xl sm:text-6xl xl:text-7xl">
                Siddhiksha
              </span>
              <span className="block text-5xl sm:text-6xl xl:text-7xl">
                Education
              </span>
              <span
                className="block text-4xl sm:text-5xl xl:text-6xl mt-2"
                style={{ color: "#fbbf24" }}
              >
                Care
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/70 font-light mb-3 italic">
              "A Place to Learn!"
            </p>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Expert coaching for State Board (Classes 1–12) and CBSE (Classes 1–10).
              Specialized in Mathematics, Science, and Tamil with proven results and
              individual attention for every student.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/admission"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-white font-bold rounded-xl hover:bg-gold-600 transition-all duration-200 shadow-xl hover:shadow-gold-500/30 hover:-translate-y-0.5 text-base"
              >
                Register for Admission
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-base"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {["State Board (1–12)", "CBSE (1–10)", "Maths · Science · Tamil"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 border border-white/20 rounded-lg px-3 py-1.5"
                  >
                    <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right content — Stats cards */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-montserrat font-bold text-lg leading-none">
                    Our Impact
                  </p>
                  <p className="text-white/50 text-sm">
                    Academic Excellence Since 2010
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="bg-white/10 rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center mb-3 group-hover:bg-gold-500/30 transition-colors">
                      <Icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <p className="text-white font-montserrat font-black text-3xl mb-1">
                      {value}
                    </p>
                    <p className="text-white/50 text-xs font-medium">{label}</p>
                  </div>
                ))}
              </div>

              {/* Contact Us link */}
              <Link
                href="/admission"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-royal-600 hover:bg-royal-500 text-white font-semibold transition-all duration-200 group text-sm"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gold-500 text-white rounded-2xl px-4 py-2 shadow-xl shadow-gold-500/30 text-sm font-bold rotate-3">
              ✦ Top Results 2024
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
