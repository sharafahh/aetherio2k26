"use client";

import { motion } from "framer-motion";
import { certificateNote } from "@/data/rules";
import { CheckCircle2, XCircle, FileCheck } from "lucide-react";

export function CertificateNote() {
  const cards = [
    {
      key: "technical" as const,
      icon: CheckCircle2,
      ...certificateNote.technical,
    },
    {
      key: "nonTechnical" as const,
      icon: XCircle,
      ...certificateNote.nonTechnical,
    },
    {
      key: "both" as const,
      icon: FileCheck,
      ...certificateNote.both,
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            📌 NOTE – Certificate Eligibility
          </h3>
          <p className="text-gray-400">Official Certificate Policy for AETHERION&apos;26</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <card.icon className="w-6 h-6 text-purple-400" />
                <h4 className="text-white font-semibold">{card.label}</h4>
              </div>
              <p
                className={`text-lg font-bold mb-2 ${
                  card.status === "Certificate Provided" ? "text-green-400" : "text-red-400"
                }`}
              >
                {card.status}
              </p>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
