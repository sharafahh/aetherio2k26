"use client";

import { motion } from "framer-motion";
import { events, eventFilters } from "@/data/events";
import { Flame, X } from "lucide-react";
import { useState } from "react";

const categoryIcons: Record<string, string> = {
  technical: "⚡",
  "non-technical": "🎨",
  "e-sports": "🎮",
};

const categoryColors: Record<string, string> = {
  technical: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  "non-technical": "from-pink-500/20 to-rose-500/20 border-pink-500/30",
  "e-sports": "from-green-500/20 to-emerald-500/20 border-green-500/30",
};

export function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const filteredEvents =
    activeFilter === "all" ? events : events.filter((e) => e.category === activeFilter);

  return (
    <section id="events" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Flame className="w-4 h-4" />
            COMPETITIVE ARENAS • ₹150 FOR ALL EVENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore All {events.length} Events
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From algorithmic reverse engineering and UI designathons to battle royale gaming and creative
            challenges.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventFilters.map((filter) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${categoryColors[event.category]} border backdrop-blur-sm hover:scale-[1.02] transition-all cursor-pointer`}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{categoryIcons[event.category]}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{event.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🕐</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">📍</span>
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">👥</span>
                  <span>{event.teamSize}</span>
                </div>
                {event.prize && (
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">🏆</span>
                    <span className="text-amber-400 font-medium">1st Place: {event.prize}</span>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <span className="text-sm text-purple-400 font-medium">
                  Pass: {event.passFee}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedEvent.title}</h3>
            <p className="text-gray-300 mb-6">{selectedEvent.description}</p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-purple-400">🕐</span>
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">📍</span>
                <span>{selectedEvent.venue}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">👥</span>
                <span>{selectedEvent.teamSize}</span>
              </div>
              {selectedEvent.prize && (
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">🏆</span>
                  <span className="text-amber-400 font-medium">1st Place: {selectedEvent.prize}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-purple-400">💰</span>
                <span>{selectedEvent.passFee}</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">View full rules and details in the Rules section.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
