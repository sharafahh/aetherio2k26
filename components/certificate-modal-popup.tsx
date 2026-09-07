'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Award, X, Monitor, Target, Trophy } from 'lucide-react';
import FemaleOfferBanner from '@/components/female-offer-banner';

type Tilt = { x: number; y: number };

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
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

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

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - py) * 14,
      y: (px - 0.5) * 18,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

      <div className="cert-3d-scene relative w-full max-w-lg">
        <div className="cert-3d-float">
        <motion.div
          ref={panelRef}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, rotateX: 22, scale: 0.86 }}
          animate={{
            opacity: 1,
            rotateX: tilt.x,
            rotateY: tilt.y,
            scale: 1,
          }}
          transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          className="cert-3d-panel relative w-full bg-[#0d0406]/95 border border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.75),0_0_60px_rgba(230,0,26,0.35)] space-y-6"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-70"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,80,90,0.35), transparent 40%, rgba(249,115,22,0.25) 100%)',
              transform: 'translateZ(-24px)',
              filter: 'blur(10px)',
            }}
          />

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
            aria-label="Close Notice"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 border-b border-red-500/20 pb-4" style={{ transform: 'translateZ(36px)' }}>
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_8px_20px_rgba(230,0,26,0.35)]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                Important Announcement
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                📌 NOTE – Certificate Eligibility
              </h3>
            </div>
          </div>

          <div className="space-y-3" style={{ transform: 'translateZ(28px)' }}>
            {POLICY_ROWS.map((row) => {
              const StatusIcon = row.statusIcon;
              const EventIcon = row.icon;
              const positive = row.tone === 'positive';

              return (
                <div
                  key={row.id}
                  className={`cert-3d-card p-3.5 rounded-xl flex items-start gap-3 ${
                    positive
                      ? 'bg-emerald-950/30 border border-emerald-500/40 shadow-[0_12px_24px_rgba(16,185,129,0.12)]'
                      : 'bg-amber-950/30 border border-amber-500/40 shadow-[0_12px_24px_rgba(245,158,11,0.12)]'
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

            <div className="cert-3d-card">
              <FemaleOfferBanner />
            </div>
          </div>

          <div className="pt-2" style={{ transform: 'translateZ(40px)' }}>
            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_18px_30px_rgba(230,0,26,0.45)] transition-all hover:translate-y-[-2px]"
            >
              I Understand & Continue
            </button>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
