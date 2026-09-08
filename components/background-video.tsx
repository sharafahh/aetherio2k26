'use client';

import React, { useEffect, useRef } from 'react';

function ThemeBackgroundVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.muted = true;

    const freezeOnWings = () => {
      video.pause();
      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.max(0, video.duration - 0.05);
      }
    };

    const onTimeUpdate = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      if (video.currentTime >= video.duration - 0.08) {
        freezeOnWings();
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', freezeOnWings);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', freezeOnWings);
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}

export function MobileHeroVideo() {
  return (
    <div className="mobile-video-background fixed inset-0 z-0 h-full w-full overflow-hidden pointer-events-none md:hidden bg-black">
      <ThemeBackgroundVideo
        src="/mobile-bg.mp4?v=freeze1"
        poster="/mobile-bg-freeze.jpg"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

export function DesktopBackgroundVideo() {
  return (
    <div className="hidden md:block fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <ThemeBackgroundVideo
        src="/hero-dragon-2.mp4?v=freeze1"
        poster="/hero-dragon-freeze.jpg"
        className="h-full w-full object-cover object-[center_42%]"
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
