'use client';

import React from 'react';
import { Award, CheckCircle2, Info } from 'lucide-react';

export default function CertificateEligibilityNote({ className = '' }: { className?: string }) {
  return (
    <div className={`cert-3d-scene ${className}`}>
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-red-950/30 via-black/60 to-surface border border-red-500/30 space-y-4 shadow-[0_24px_50px_rgba(0,0,0,0.55),0_0_30px_rgba(230,0,26,0.18)] cert-3d-panel">
        <div className="flex items-center gap-2.5 border-b border-red-500/20 pb-3">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
              📌 NOTE – Certificate Eligibility
            </h4>
            <p className="text-[11px] text-slate-400">Official Certificate Policy for AETHERION&apos;26</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="cert-3d-card p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">Technical Event Only</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold w-fit">
              Certificate Provided
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Official Certificate of Participation will be provided.
            </p>
          </div>

          <div className="cert-3d-card p-3.5 rounded-xl bg-orange-950/20 border border-orange-500/30 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">Non-Technical Event Only</span>
              <Info className="w-4 h-4 text-orange-400" />
            </div>
            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-semibold w-fit">
              No Certificate
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              No certificate will be provided for non-technical events only.
            </p>
          </div>

          <div className="cert-3d-card p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">Both Technical + Non-Technical</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold w-fit">
              Certificate Provided
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Official Certificate of Participation will be provided.
            </p>
          </div>
        </div>

        <div className="border-t border-red-500/20 pt-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold mb-3">
            📌 SPECIAL NOTE
          </h4>
          <div className="cert-3d-card p-4 sm:p-5 rounded-xl bg-gradient-to-r from-pink-950/40 via-purple-950/30 to-red-950/40 border border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300 flex-shrink-0 text-lg shadow-inner">
                💮
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-pink-300 uppercase font-mono tracking-wider">
                    Mehndi for Women Participants
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-200 border border-pink-500/40">
                    FIRST 25 ONLY
                  </span>
                </div>

                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Mehndi will be available exclusively for women participants. This benefit is limited to the FIRST 25 women participants on a first-come, first-served basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
