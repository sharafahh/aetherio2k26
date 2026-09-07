'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Award, X, Monitor, Target, Trophy } from 'lucide-react';

const POLICY_ROWS = [
  {
    id: 'technical',
    icon: Monitor,
    statusIcon: CheckCircle2,
    title: 'Technical Event Only',
    badge: 'Certificate Provided',
    copy: 'Official Certificate of Participation will be provided.',
    tone: 'positive' as const,
  },
  {
    id: 'non-technical',
    icon: Target,
    statusIcon: XCircle,
    title: 'Non-Technical Event Only',
    badge: 'No Certificate',
    copy: 'No certificate will be provided for non-technical events only.',
    tone: 'negative' as const,
  },
  {
    id: 'both',
    icon: Trophy,
    statusIcon: CheckCircle2,
    title: 'Both Technical + Non-Technical Events',
    badge: 'Certificate Provided',
    copy: 'Official Certificate of Participation will be provided.',
    tone: 'positive' as const,
  },
];

export default function CertificateModalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('certificate_popup_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('certificate_popup_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

      <div
        className="relative w-full max-w-lg bg-[#0d0406] border border-red-500/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close Notice"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
              Important Announcement
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              📌 NOTE – Certificate Eligibility
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          {POLICY_ROWS.map((row) => {
            const StatusIcon = row.statusIcon;
            const EventIcon = row.icon;
            const positive = row.tone === 'positive';

            return (
              <div
                key={row.id}
                className={`p-3.5 rounded-xl flex items-start gap-3 ${
                  positive
                    ? 'bg-emerald-950/20 border border-emerald-500/30'
                    : 'bg-amber-950/20 border border-amber-500/30'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg flex-shrink-0 mt-0.5 ${
                    positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}
                >
                  <StatusIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <EventIcon className={`w-3.5 h-3.5 ${positive ? 'text-emerald-300' : 'text-amber-300'}`} />
                    <span className="text-xs font-bold text-white">{row.title}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                        positive
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      {row.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">{row.copy}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2">
          <button
            onClick={handleClose}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            I Understand & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
