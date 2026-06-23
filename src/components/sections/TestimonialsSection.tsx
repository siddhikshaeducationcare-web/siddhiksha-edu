"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";

// Static testimonials — will be replaced by dynamic data from Supabase
const testimonials = [
  {
    id: 1,
    student_name: "Prajeen Kumaraswamy",
    standard: "Class 10 (CBSE) — 2025–26",
    content:
      "I really enjoy these classes. The teacher makes tough topics feel easy, and the atmosphere is comfortable. I've improved a lot without feeling stressed, which is the best part ❤️",
    rating: 5,
  },
  {
    id: 2,
    student_name: "Dhanush Kumar S",
    standard: "Class 12 (State Board) — 2020–2021",
    content:
      "I attribute my growth and the acquisition of necessary life skills to this place. My mentor and Gurunadhar, Mr. Manikandan Sir, consistently serves as an esteemed role model.",
    rating: 5,
  },
  {
    id: 3,
    student_name: "Sabari Vasan",
    standard: "Class 12 (State Board) — 2025–26",
    content:
      "Just as a sculptor shapes a masterpiece, Mani Sir has shaped my life and future. His guidance, patience, and dedication have made a huge difference in my learning journey. I am truly grateful for everything he has done.",
    rating: 5,
  },
  {
    id: 4,
    student_name: "Vinoth Kannan K",
    standard: "Alumni Student & Ex-Admin",
    content:
      "Special attention for slow learners and continuous support in all subjects is the best part here. The guidance and encouragement provided have been truly valuable throughout my journey.",
    rating: 5,
  },
  {
    id: 5,
    student_name: "Lingesh G",
    standard: "Class 12 (State Board) — 2025–26",
    content:
      "This tuition center offers excellent instruction, supported by highly knowledgeable and effective teaching staff. The quality of teaching is consistently outstanding, making learning both engaging and productive. The tuition was especially beneficial during examination periods, where focused revisions, personalized guidance, and special attention greatly improved preparation and performance.",
    rating: 5,
  },
  {
    id: 6,
    student_name: "Andrew Richard",
    standard: "Class 12 (State Board) — 2021–2022 & Current Administration",
    content:
      "I've been part of this tuition centre for 4 years, first as a student and later as a staff member. The excellent guidance, supportive staff, and highly motivating atmosphere have played a significant role in my growth. It is truly an unforgettable place that helps you learn, develop, and succeed 🤍",
    rating: 5,
  },
];

const achievements = [
  { icon: Trophy, title: "District First Rank", desc: "Tamil — Class 12 State Board 2024", color: "text-gold-500" },
  { icon: Medal, title: "98.5% in Maths", desc: "Board Exam — Class 10 CBSE 2024", color: "text-royal-600" },
  { icon: Award, title: "State Board Top 10", desc: "Science — Class 10 2024", color: "text-emerald-600" },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Student Success */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Hall of Fame</span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Student Achievements
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Celebrating the brilliance of our students who've worked hard and
            achieved extraordinary results.
          </p>
        </div>

        {/* Achievement highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {achievements.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                <Icon className={cn("w-7 h-7", color)} />
              </div>
              <div>
                <p className="font-montserrat font-bold text-gray-900 text-sm">
                  {title}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="section-eyebrow">Hear Their Journey</span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Trusted by Families
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative">
            <Quote className="w-12 h-12 text-royal-100 absolute top-8 right-8" />

            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold-400 fill-gold-400"
                />
              ))}
            </div>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 font-light italic">
              "{testimonials[current].content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[current].student_name[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[current].student_name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[current].standard}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-royal-700 hover:text-white hover:border-royal-700 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current
                      ? "w-8 bg-royal-700"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-royal-700 hover:text-white hover:border-royal-700 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
