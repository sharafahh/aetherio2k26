"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteInfo } from "@/data/site";

export function MehndiOffer() {
  if (!siteInfo.mehndi?.enabled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-24 left-4 z-40 max-w-xs"
    >
      <div className="relative p-4 rounded-2xl bg-gray-900/90 border border-purple-500/50 backdrop-blur-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
        <div className="relative flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-1">Special Mehndi Offer</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              {siteInfo.mehndi.text} a special Mehndi offer at the symposium!
            </p>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/30 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-500/30 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}
