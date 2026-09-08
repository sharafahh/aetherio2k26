import React from 'react';
import { Ticket } from 'lucide-react';

interface RegistrationPassBadgeProps {
  compact?: boolean;
}

/** Single source of pass pricing for the chrome (navbar). Event cards do not repeat these amounts. */
export default function RegistrationPassBadge({ compact = false }: RegistrationPassBadgeProps) {
  if (compact) {
    return (
      <div
        className="registration-pass-badge registration-pass-badge--compact"
        title="Registration & Pass Info"
      >
        <Ticket className="h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
        <span>₹150 · ₹300</span>
      </div>
    );
  }

  return (
    <div className="registration-pass-badge" title="Registration & Pass Info">
      <Ticket className="h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-300/90">
          Registration &amp; Pass Info
        </span>
        <span className="text-[11px] font-semibold text-white">₹150 / person · ₹300 team (2–3)</span>
      </div>
    </div>
  );
}
