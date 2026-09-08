import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { GOOGLE_FORM_REGISTRATION_URL, SYMPOSIUM_METADATA } from '@/lib/data/events';

export default function HeroSection() {
  return (
    <section className="relative z-20 flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="hero-title-cluster relative isolate">
          <div className="hero-title-veil pointer-events-none absolute -inset-x-10 -inset-y-8 sm:-inset-x-16" aria-hidden="true" />

          <p className="relative mb-4 text-xs font-bold uppercase tracking-[0.32em] text-slate-200 sm:text-sm">
            <span className="text-fire-red">AMSphere</span>
            <span className="text-white/90"> presents</span>
          </p>

          <h1 className="relative font-mono text-5xl font-black uppercase tracking-[0.12em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.95),0_0_35px_rgba(230,0,26,0.45)] sm:text-7xl md:text-8xl">
            AETHERION
            <span className="text-fire-red font-sans text-3xl tracking-normal sm:text-5xl md:text-6xl">
              &apos;26
            </span>
          </h1>

          <h2 className="relative mt-5 max-w-3xl text-2xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            National arena for
            <br />
            <span className="text-fire-red">code, creation &amp; combat</span>
          </h2>

          <p className="relative mx-auto mt-5 max-w-[34rem] text-sm leading-relaxed text-slate-200 sm:text-base">
            One-day national symposium. Eleven live arenas spanning AI, engineering, design, and e-sports.
            Show up ready to ship, stage, or dominate the bracket.
          </p>
        </div>

        <div className="hero-meta-pill mt-8">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-red-400" aria-hidden="true" />
            <span className="font-semibold tracking-wide text-white">12 Sep 2026</span>
          </span>
          <span className="hero-meta-pill__rule" aria-hidden="true" />
          <a
            href={SYMPOSIUM_METADATA.venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-100 transition-colors duration-300 hover:text-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            title="Open AMS College of Engineering on Google Maps"
          >
            <MapPin className="h-4 w-4 text-red-400" aria-hidden="true" />
            <span className="max-w-[16rem] truncate sm:max-w-none">{SYMPOSIUM_METADATA.venue}</span>
          </a>
        </div>

        <div className="mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
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
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-red-300/50 hover:bg-white/[0.09] hover:shadow-[0_0_24px_rgba(230,0,26,0.25)] sm:w-auto"
          >
            Explore 11 Events
          </a>
        </div>
      </div>
    </section>
  );
}
