'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import BurgerCard from '@/components/ui/BurgerCard';
import { POPULAR_BURGERS } from '@/lib/constants';

export default function PopularBurgers() {
  return (
    <section id="menu" className="relative overflow-hidden bg-gradient-to-b from-black via-burgundy/10 to-black py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Signature Burgers"
          subtitle="Our Menu"
          align="center"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_BURGERS.map((burger, index) => (
            <BurgerCard key={burger.id} burger={burger} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
