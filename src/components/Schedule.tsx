"use client";

import { motion } from "framer-motion";
import { scheduleItems, scheduleFilters } from "@/data/schedule";
import { Calendar, Clock, MapPin, Trophy } from "lucide-react";
import { useState } from "react";

const typeColors: Record<string, string> = {
  general: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  technical: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "non-technical": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  keynote: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  special: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSchedule =
    activeFilter === "all" ? scheduleItems : scheduleItems.filter((s) => s.type === activeFilter);

  return (
    <section id="schedule" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            SYMPOSIUM CHRONOLOGY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Event Timeline & Schedule
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Synchronized milestones across keynotes, algorithmic tracks, design sprints, and gaming arenas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scheduleFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-8">
            {filteredSchedule.map((item, index) => (
              <motion.div
                key={`${item.time}-${item.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-5/12" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900 z-10" />
                <div className="ml-16 md:ml-0 md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-gray-900/80 border border-gray-700 hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs border ${typeColors[item.type]}`}>
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{item.venue}</span>
                    </div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
