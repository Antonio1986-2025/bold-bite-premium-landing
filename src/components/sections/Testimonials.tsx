'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, TESTIMONIALS.length - 1));
      setActiveIndex(clamped);
    },
    []
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, 4000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [goNext]);

  // Pause on hover
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => {
    pauseAutoPlay();
    autoPlayRef.current = setInterval(goNext, 4000);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 50;
    if (info.offset.x < -threshold || info.velocity.x < -500) {
      goNext();
    } else if (info.offset.x > threshold || info.velocity.x > 500) {
      goPrev();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-burgundy/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Testimonials"
          align="center"
        />

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-2xl"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Cards container */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-10 backdrop-blur-sm text-center"
            >
              {/* Avatar */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TESTIMONIALS[activeIndex].avatar}
                alt={TESTIMONIALS[activeIndex].name}
                className="h-20 w-20 rounded-full border-2 border-gold/30 object-cover"
              />

              {/* Stars */}
              <div className="mt-5 flex gap-1">
                {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-6 font-poppins text-lg leading-relaxed text-white/80 italic">
                &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6">
                <p className="font-bebas text-xl tracking-wide text-gold">
                  {TESTIMONIALS[activeIndex].name}
                </p>
                <p className="font-poppins text-sm text-white/40">
                  {TESTIMONIALS[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 text-white/60 backdrop-blur-sm transition-all hover:border-gold/40 hover:text-gold lg:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 text-white/60 backdrop-blur-sm transition-all hover:border-gold/40 hover:text-gold lg:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-8 bg-gold'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
