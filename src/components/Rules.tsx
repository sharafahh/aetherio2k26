"use client";

import { motion } from "framer-motion";
import { Scroll, FileText, Trophy } from "lucide-react";
import { ruleSections } from "@/data/rules";
import { certificateNote } from "@/data/rules";

export function Rules() {
  return (
    <section id="rules" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Scroll className="w-4 h-4" />
            OFFICIAL CODE OF CONDUCT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rules & Regulations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent guidelines for participation, submission standards, discipline, and awards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ruleSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                  §
                </div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">📌 NOTE – Certificate Eligibility</h3>
          </div>
          <p className="text-gray-400 mb-6">Official Certificate Policy for AETHERION&apos;26</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-white font-medium mb-1">{certificateNote.technical.label}</p>
              <p className="text-green-400 font-semibold">{certificateNote.technical.status}</p>
              <p className="text-gray-400 text-sm mt-1">{certificateNote.technical.description}</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-white font-medium mb-1">{certificateNote.nonTechnical.label}</p>
              <p className="text-red-400 font-semibold">{certificateNote.nonTechnical.status}</p>
              <p className="text-gray-400 text-sm mt-1">{certificateNote.nonTechnical.description}</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-white font-medium mb-1">{certificateNote.both.label}</p>
              <p className="text-green-400 font-semibold">{certificateNote.both.status}</p>
              <p className="text-gray-400 text-sm mt-1">{certificateNote.both.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
