'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { SPECIAL_OFFERS } from '@/lib/constants';

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calcTime = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calcTime());
    const timer = setInterval(() => setTimeLeft(calcTime()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hrs' },
        { value: timeLeft.mins, label: 'Mins' },
        { value: timeLeft.secs, label: 'Secs' },
      ].map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-3 backdrop-blur-sm min-w-[60px]"
        >
          <span className="font-bebas text-2xl text-gold">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="font-poppins text-[10px] uppercase tracking-wider text-white/40">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function SpecialOffers() {
  const mainOffer = SPECIAL_OFFERS[0];
  const sideOffers = SPECIAL_OFFERS.slice(1);

  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-gradient-to-b from-burgundy/20 via-burgundy/10 to-black py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Special Offers"
          subtitle="Limited Time"
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Offer */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-burgundy/40 via-black/60 to-black/80 p-8 backdrop-blur-sm lg:p-12"
          >
            {/* Pulsing badge */}
            <div className="mb-6 flex items-center gap-3">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-wider text-gold"
              >
                <span className="h-2 w-2 rounded-full bg-gold" />
                {mainOffer.badge}
              </motion.span>
            </div>

            <h3 className="font-bebas text-5xl leading-none tracking-wide text-white lg:text-6xl">
              {mainOffer.title}
            </h3>
            <p className="mt-4 max-w-lg font-poppins text-white/60">
              {mainOffer.description}
            </p>

            {/* Countdown */}
            <div className="mt-8">
              <div className="mb-3 flex items-center gap-2 font-poppins text-sm text-white/40">
                <Clock className="h-4 w-4" />
                Offer ends in:
              </div>
              <CountdownTimer targetDate={mainOffer.expiresAt} />
            </div>

            {/* CTA */}
            <div className="mt-8">
              <MagneticButton variant="primary" size="lg">
                {mainOffer.ctaText}
                <ArrowRight className="ml-1 h-5 w-5" />
              </MagneticButton>
            </div>

            {/* Discount highlight */}
            <div className="absolute -right-8 -top-8 hidden lg:block">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-gold to-orange text-center shadow-gold-glow-lg"
              >
                <span className="font-bebas text-3xl font-bold text-black">
                  {mainOffer.discount}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Side Offers */}
          <div className="flex flex-col gap-6">
            {sideOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-gold/20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="h-24 w-24 rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="flex-1 min-w-0">
                  <span className="inline-block rounded-full bg-gold/10 px-3 py-0.5 font-poppins text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {offer.badge}
                  </span>
                  <h4 className="mt-2 font-bebas text-2xl tracking-wide text-white">
                    {offer.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 font-poppins text-sm text-white/50">
                    {offer.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -45 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
