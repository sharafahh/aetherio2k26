"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { siteInfo } from "@/data/site";
import { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("September 12, 2026 00:00:00").getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-2 backdrop-blur-sm">
            <span className="text-2xl md:text-3xl font-bold text-white">{unit.value}</span>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
            {siteInfo.presenter} PRESENTS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          {siteInfo.name}
          <span className="block text-purple-400">{siteInfo.year}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {siteInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span>{siteInfo.date}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
          <a
            href={siteInfo.venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <MapPin className="w-5 h-5 text-purple-400" />
            <span>{siteInfo.venue}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteInfo.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-purple-500/30 flex items-center gap-2"
          >
            REGISTER NOW ({siteInfo.passFee} FOR ALL EVENTS)
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#events"
            className="px-8 py-4 border border-gray-600 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/5"
          >
            EXPLORE ALL EVENTS
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
