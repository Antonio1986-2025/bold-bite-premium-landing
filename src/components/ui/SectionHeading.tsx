'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={`mb-16 flex flex-col gap-4 ${alignmentClass} ${className}`}
    >
      {subtitle && (
        <span className="font-poppins text-sm font-medium uppercase tracking-[0.25em] text-gold">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-bebas text-5xl leading-tight md:text-6xl lg:text-7xl ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        className="h-1 rounded-full bg-gold"
      />
    </motion.div>
  );
}
