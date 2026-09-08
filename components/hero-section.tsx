'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Ticket } from 'lucide-react';
import { GOOGLE_FORM_REGISTRATION_URL, SYMPOSIUM_METADATA } from '@/lib/data/events';

export default function HeroSection() {
  return (
    <section className="relative z-20 flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-lg font-black uppercase tracking-[0.32em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-2xl md:text-3xl"
        >
          <span className="text-fire-red">AMSphere</span>
          <span className="text-white"> Presents</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-2 max-w-[16ch] px-4 font-sans text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_6px_32px_rgba(0,0,0,0.95),0_0_48px_rgba(230,0,26,0.65)] sm:text-6xl md:text-7xl md:leading-none lg:text-8xl"
        >
          AETHERION
          <span className="text-fire-red font-sans text-3xl tracking-normal sm:text-4xl md:text-5xl lg:text-6xl">
            &apos;26
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center text-center"
        >
          <p className="text-2xl font-black tracking-tight text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)] sm:text-3xl md:text-4xl">
            12th September 2026
          </p>
          <a
            href={SYMPOSIUM_METADATA.venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] hover:text-[#ff1a00] sm:text-base"
            title="Open AMS College of Engineering on Google Maps"
          >
            <MapPin className="h-4 w-4 text-[#ff1a00]" />
            {SYMPOSIUM_METADATA.venue}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="entry-pass-card group relative mx-auto mt-6 w-full max-w-[200px] cursor-default rounded-lg p-px transition-transform duration-300 hover:scale-[1.03]"
        >
          <div className="relative overflow-hidden rounded-lg bg-[#0a0305]/85 px-2.5 py-2">
            <div className="relative flex flex-col items-center">
              <span className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#ff2a00]">
                <Ticket className="h-2.5 w-2.5" />
                Entry Pass
              </span>
              <div className="mt-1.5 grid w-full grid-cols-2 divide-x divide-red-500/30">
                <div className="flex flex-col items-center px-1.5">
                  <span className="text-lg font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(230,0,26,0.55)]">
                    ₹150
                  </span>
                  <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#ff1a00]">
                    Per Person
                  </span>
                </div>
                <div className="flex flex-col items-center px-1.5">
                  <span className="text-lg font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(230,0,26,0.55)]">
                    ₹300
                  </span>
                  <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#ff1a00]">
                    Team of 2–3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={GOOGLE_FORM_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-register-btn group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-300/40 bg-gradient-to-r from-red-600 via-orange-600 to-red-700 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_35px_rgba(230,0,26,0.55)] transition-transform duration-300 hover:scale-105 sm:w-auto"
          >
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#events"
            className="inline-flex w-full items-center justify-center rounded-xl border border-red-400/40 bg-black/55 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-red-300/70 hover:bg-black/70 sm:w-auto"
          >
            Explore 11 Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}
