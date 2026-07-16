'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { DELIVERY_STATS } from '@/lib/constants';

const DELIVERY_FEATURES = [
  'Hot and fresh in 30 minutes or less',
  'Real-time GPS order tracking',
  'Contactless delivery available',
  'Eco-friendly sustainable packaging',
  'Delivery to your door or curbside',
];

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="relative overflow-hidden bg-gradient-to-b from-black via-burgundy/[0.07] to-black py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading — full width, centered, like all other sections */}
        <SectionHeading
          title="Lightning Fast Delivery"
          subtitle="Delivery"
          align="center"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="mb-8 font-poppins text-white/60">
              Craving bold flavor? We bring the heat to your doorstep. Our dedicated delivery fleet ensures your burger arrives hot, fresh, and fast.
            </p>

            {/* Feature list */}
            <ul className="mb-10 space-y-4">
              {DELIVERY_FEATURES.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="font-poppins text-white/70">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <MagneticButton variant="primary" size="lg">
              Start Your Order
            </MagneticButton>
          </motion.div>

          {/* Right: Stats + Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {DELIVERY_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:border-gold/30"
                >
                  <span className="font-bebas text-5xl text-gold">{stat.value}</span>
                  <span className="mt-2 font-poppins text-sm text-white/50">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-gold/[0.02] blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
