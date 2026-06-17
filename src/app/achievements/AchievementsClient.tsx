"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, GraduationCap, Star, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/types";

interface Props {
  achievements: Achievement[];
}

const filters = [
  { label: "All", value: "all" },
  { label: "Rank Holders", value: "rank" },
  { label: "State Board", value: "State Board" },
  { label: "CBSE", value: "CBSE" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
];

export function AchievementsClient({ achievements }: Props) {
  const [active, setActive] = useState("all");

  const filtered = achievements.filter((a) => {
    if (active === "all") return true;
    if (active === "rank") return a.is_rank_holder;
    if (active === "State Board" || active === "CBSE") return a.board === active;
    return a.year === active;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter pills */}
        <div className="flex items-center gap-3 flex-wrap mb-10">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                active === value
                  ? "bg-royal-700 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-royal-300 hover:text-royal-700"
              )}
            >
              {label}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No achievements found for this filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative">
      {achievement.is_rank_holder && (
        <div className="ribbon">🏆 {achievement.rank || "Rank Holder"}</div>
      )}

      {/* Top gradient */}
      <div className="h-1.5 w-full bg-gradient-to-r from-royal-700 to-gold-500" />

      <div className="p-6">
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            {achievement.photo_url ? (
              <Image
                src={achievement.photo_url}
                alt={achievement.student_name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-2xl object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
                {achievement.student_name[0]}
              </div>
            )}
            {achievement.is_rank_holder && (
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shadow-sm">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-gray-900">
              {achievement.student_name}
            </h3>
            <p className="text-gray-500 text-sm">{achievement.standard}</p>
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2 mb-3">
          <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm border border-emerald-100">
            {achievement.marks_percentage}
          </div>
          <div className="px-3 py-1 rounded-full bg-royal-50 text-royal-700 text-xs font-medium border border-royal-100">
            {achievement.board}
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-xs border border-gray-100">
            {achievement.year}
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {achievement.achievement_description}
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{achievement.school_name}</span>
        </div>
      </div>
    </div>
  );
}
