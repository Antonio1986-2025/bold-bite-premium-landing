'use client';

import { useState, useEffect, useRef } from 'react';

interface HeroAnimationProps {
  images: string[];
  frameMs?: number;
}

/**
 * Full-bleed flipbook animation.
 *
 * Cycles through all 80 burger-explosion frames at ~12.5 fps
 * using requestAnimationFrame for precise, jitter-free timing.
 *
 * Single <img> approach — src swaps are instant (browser cache).
 * At 12.5 fps, persistence of vision handles blending naturally.
 */
export default function HeroAnimation({ images, frameMs = 80 }: HeroAnimationProps) {
  const [isReady, setIsReady] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const frameRef = useRef(0);

  // ── Preload all images ──────────────────────────────────
  useEffect(() => {
    let mounted = true;
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (mounted && loaded >= images.length) {
          setIsReady(true);
        }
      };
    });

    return () => {
      mounted = false;
    };
  }, [images]);

  // ── requestAnimationFrame sequencer ──────────────────────
  useEffect(() => {
    if (!isReady) return;

    const tick = (timestamp: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= frameMs) {
        const framesToAdvance = Math.floor(elapsed / frameMs);
        frameRef.current = (frameRef.current + framesToAdvance) % images.length;
        setCurrentFrame(frameRef.current);
        lastTimeRef.current = timestamp - (elapsed % frameMs);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, [isReady, images.length, frameMs]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black">
      {/* Loading spinner */}
      {!isReady && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
            <span className="font-poppins text-sm text-white/40">Loading frames...</span>
          </div>
        </div>
      )}

      {/* Single image — src swap is instant (cached by browser) */}
      {isReady && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={images[currentFrame]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      )}

      {/* Vignette — darkens edges for cinematic feel */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  );
}
