export const dynamic = 'force-dynamic';

import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import EventExplorer from '@/components/event-explorer';
import ScheduleSection from '@/components/schedule-section';

import RulesSection from '@/components/rules-section';
import FAQSection from '@/components/faq-section';
import CustomCursor from '@/components/custom-cursor';
import { SYMPOSIUM_METADATA } from '@/lib/data/events';
import {
  Flame,
  Layers,
} from 'lucide-react';

import BackgroundVideo from '@/components/background-video';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-void text-slate-100 relative overflow-x-hidden selection:bg-red-600/40">

      {/* Global Background Video (Fixed for Mobile & Desktop) */}
      <BackgroundVideo />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Glassmorphic Dragon Navbar */}
      <Navbar />

      {/* Atmospheric Background Geometry & Dragon Embers */}
      <div className="fixed inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-dragon-embers opacity-25 pointer-events-none z-0" />

      <HeroSection />

      {/* ========================================================================= */}
      {/* 2. ABOUT AETHERION'26 SECTION & METRICS */}
      {/* ========================================================================= */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-red-500/10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-[#ff1a00]">
            <Layers className="w-3.5 h-3.5" />
            <span>THE VISION OF AETHERION</span>
          </div>

          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            AETHERION&apos;26 Symposium
          </h2>

          <p className="mt-5 max-w-[820px] text-slate-200 text-sm sm:text-base leading-relaxed">
            We are excited to welcome you to the symposium, with cash awards for the winners.
          </p>

          <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {SYMPOSIUM_METADATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-red-400/40 hover:shadow-[0_0_25px_rgba(230,0,26,0.25)] transition-all duration-300 flex flex-col items-center justify-between group"
              >
                <span className="text-3xl sm:text-4xl font-black font-mono text-white group-hover:text-[#ff1a00] transition-colors">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-200 font-mono mt-3 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EVENT SYSTEM & EXPLORER (TECHNICAL & NON-TECHNICAL) */}
      {/* ========================================================================= */}
      <EventExplorer />

      {/* ========================================================================= */}
      {/* 4. SCHEDULE & 1-DAY TIMELINE SECTION */}
      {/* ========================================================================= */}
      <ScheduleSection />

      {/* ========================================================================= */}
      {/* 5. COORDINATORS DIRECTORY */}
      {/* ========================================================================= */}


      {/* ========================================================================= */}
      {/* 6. RULES & REGULATIONS */}
      {/* ========================================================================= */}
      <RulesSection />

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* SITE FOOTER — branding and in-page nav only */}
      {/* ========================================================================= */}
      <footer className="border-t border-red-500/20 bg-[#060203] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 font-bold flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-500" />
              AMSPHERE PRESENTS
            </span>
            <span className="text-xl font-black tracking-widest text-white">
              AETHERION<span className="text-red-500 font-mono text-sm">&apos;26</span>
            </span>
            <p className="text-xs text-slate-500 max-w-sm">
              We are excited to welcome you to the symposium, with cash awards for the winners.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              Presented by AMSphere
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#events" className="hover:text-red-400 transition-colors">Events</a>
            <a href="#schedule" className="hover:text-red-400 transition-colors">Schedule</a>
            <a href="#rules" className="hover:text-red-400 transition-colors">Rules</a>
            <a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-xs text-slate-500">
              &copy; 2026 AMSphere Presents AETHERION&apos;26. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
