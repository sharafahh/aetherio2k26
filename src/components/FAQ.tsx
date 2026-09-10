"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            CLARIFICATIONS & QUERIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about registration, eligibility, UPI verification, and certificates.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-gray-700 bg-gray-900/50 overflow-hidden hover:border-purple-500/50 transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
