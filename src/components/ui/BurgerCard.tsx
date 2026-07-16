'use client';

import { motion } from 'framer-motion';
import { BurgerItem } from '@/lib/types';
import { Star } from 'lucide-react';

interface BurgerCardProps {
  burger: BurgerItem;
  index: number;
}

export default function BurgerCard({ burger, index }: BurgerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.76, 0, 0.24, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-shadow duration-500 hover:shadow-card-hover"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={burger.image}
          alt={burger.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Tags */}
        <div className="absolute left-4 top-4 flex gap-2">
          {burger.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gold/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="text-xs font-semibold text-white">{burger.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between">
          <h3 className="font-bebas text-2xl tracking-wide text-white">{burger.name}</h3>
          <span className="font-poppins text-xl font-bold text-gold">
            ${burger.price}
          </span>
        </div>

        <p className="line-clamp-2 font-poppins text-sm leading-relaxed text-white/60">
          {burger.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-poppins text-xs text-white/40">{burger.calories}</span>
          <motion.button
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 font-poppins text-sm font-medium text-gold transition-colors hover:text-orange"
          >
            Order Now
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
