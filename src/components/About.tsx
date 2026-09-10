"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { siteInfo } from "@/data/site";
import { stats } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            THE VISION OF {siteInfo.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            AMSphere Presents: Where Power Meets Limitless Intelligence
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Proudly presented by{" "}
            <span className="text-purple-400 font-semibold">AMSphere</span>,{" "}
            <span className="text-white font-semibold">{siteInfo.name}{siteInfo.year}</span> is a national-scale flagship
            symposium crafted as a premier battleground for ambitious engineers, digital creators, competitive
            coders, gamers, and athletic minds.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed mt-4"
          >
            Guided by the spirit of the dragon —{" "}
            <span className="text-white">POWER</span> •{" "}
            <span className="text-white">INNOVATION</span> •{" "}
            <span className="text-white">COMPETITION</span> •{" "}
            <span className="text-white">CREATIVITY</span> •{" "}
            <span className="text-white">FUTURE</span> — the symposium offers high-stakes technical defense tracks
            and adrenaline-charged non-technical arenas under a single{" "}
            <span className="text-purple-400 font-semibold">{siteInfo.passFee} pass (covers All Events)</span>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
