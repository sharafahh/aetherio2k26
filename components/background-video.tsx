'use client';

import React from 'react';

/**
 * Mobile-Only Fixed Background Video Component (max-width: 768px / md:hidden)
 * Fixed in background while page content scrolls over it naturally.
 */
export function MobileHeroVideo() {
  return (
    <div className="mobile-video-background fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden md:hidden">
      <video
        ref={(v) => {
          if (v) {
            v.muted = true;
            v.play().catch(() => {});
          }
        }}
        src="/mobile-bg.mp4?v=dark1"
        className="w-full h-full object-cover object-center opacity-100 pointer-events-none z-0 brightness-[0.82] saturate-[0.65] hue-rotate-[-12deg]"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

/**
 * Desktop-Only Fixed Background Video Component (min-width: 769px / hidden md:block)
 * UNTOUCHED & UNCHANGED DESKTOP IMPLEMENTATION
 */
export function DesktopBackgroundVideo() {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <video
        src="/hero-dragon-2.mp4?v=dark1"
        className="h-full w-full object-cover object-center opacity-100 brightness-[0.82] saturate-[0.65] hue-rotate-[-12deg]"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default function BackgroundVideo() {
  return (
    <>
      <MobileHeroVideo />
      <DesktopBackgroundVideo />
    </>
  );
}
