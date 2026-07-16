'use client';

import { motion } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';

export default function AppDownload() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-burgundy/20 to-black py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading — consistent with all other sections */}
        <SectionHeading
          title="Get the App"
          subtitle="Download"
          align="center"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative mx-auto h-[500px] w-[260px] overflow-hidden rounded-[3rem] border-2 border-gold/20 bg-gradient-to-b from-burgundy to-black p-3 shadow-premium-lg">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
                {/* Screen */}
                <div className="flex h-full flex-col items-center justify-center rounded-[2.5rem] bg-gradient-to-b from-burgundy/50 to-black p-6 pt-10">
                  <span className="font-bebas text-3xl text-gold">BOLD</span>
                  <span className="font-bebas text-3xl text-white">BITE</span>
                  <div className="mt-6 space-y-2">
                    <div className="h-2 w-28 rounded-full bg-gold/40" />
                    <div className="h-2 w-20 rounded-full bg-white/20" />
                    <div className="h-2 w-24 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5" />
                  <div className="mt-4 h-8 w-32 rounded-full bg-gold/80" />
                </div>
              </div>

              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full bg-gold/10 blur-xl" />
            </motion.div>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="font-bebas text-5xl leading-tight tracking-wide text-white lg:text-7xl">
              Order Ahead &amp;
              <br />
              <span className="text-gold">Earn Rewards</span>
            </h2>
            <p className="mt-6 max-w-md font-poppins text-white/60">
              Order ahead, earn rewards, unlock exclusive deals, and get faster checkout. The bold flavor experience, now in your pocket.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton variant="primary" size="lg">
                <Apple className="h-5 w-5" />
                App Store
              </MagneticButton>
              <MagneticButton variant="secondary" size="lg">
                <Smartphone className="h-5 w-5" />
                Google Play
              </MagneticButton>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <span className="font-bebas text-lg text-gold">1M+</span>
                </div>
                <span className="font-poppins text-sm text-white/40">Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <span className="font-bebas text-lg text-gold">4.9</span>
                </div>
                <span className="font-poppins text-sm text-white/40">App Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
