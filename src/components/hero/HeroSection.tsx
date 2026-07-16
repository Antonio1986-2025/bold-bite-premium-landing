'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroAnimation from './HeroAnimation';
import ParticleBackground from './ParticleBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import { HERO_IMAGES, HERO_FRAME_MS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* ── Burger background (full-bleed) ─── */}
      <HeroAnimation images={HERO_IMAGES} frameMs={HERO_FRAME_MS} />

      {/* ── Dark overlay for text readability ─── */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* ── Particles ─── */}
      <ParticleBackground count={30} className="z-[6]" />

      {/* ── Text content ─── */}
      <div className="relative z-[7] mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-block rounded-full border border-gold/40 bg-gold/10 px-5 py-2 font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur-sm"
          >
            Premium Burgers
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-bebas text-[clamp(3.5rem,8vw,8rem)] leading-[1.05] tracking-tight text-white"
          >
            <span className="block">BOLD</span>
            <span className="block text-gold">FLAVOR</span>
            <span className="block text-white/90">PERFECT</span>
            <span className="block text-gold">BITE</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl font-poppins text-base leading-relaxed text-white/80 lg:text-lg"
          >
            Crafted with premium ingredients and unforgettable taste. Every burger
            is a masterpiece of bold flavor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton variant="primary" size="lg" href="#menu">
              Order Now
            </MagneticButton>
            <MagneticButton variant="secondary" size="lg" href="#menu">
              View Menu
            </MagneticButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black/80 bg-gray-500 text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-4 w-4 fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 font-poppins text-xs text-white/60">
                4.9/5 from 10,000+ reviews
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-[7] hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
