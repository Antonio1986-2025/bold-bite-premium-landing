'use client';

import { motion } from 'framer-motion';
import { ChefHat, Flame, Truck, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { FEATURES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ChefHat,
  Flame,
  Truck,
  Star,
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">
      {/* Abstract background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-burgundy/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="The Bold Bite Difference"
          align="center"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group relative flex flex-col items-center rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04]"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 shadow-gold-glow"
                >
                  {Icon && <Icon className="h-10 w-10 text-gold" />}
                </motion.div>

                <h3 className="font-bebas text-2xl tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 font-poppins text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>

                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gold/[0.02] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
