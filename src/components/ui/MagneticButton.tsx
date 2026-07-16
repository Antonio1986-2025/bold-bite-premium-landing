'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { ButtonVariant } from '@/lib/types';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-gold to-orange text-black font-semibold shadow-gold-glow',
  secondary:
    'bg-transparent border-2 border-gold text-gold font-medium hover:bg-gold/10',
  outline:
    'bg-transparent border border-white/30 text-white font-medium hover:border-white hover:bg-white/5',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-lg',
};

export default function MagneticButton({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  size = 'md',
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const sharedStyles = `block w-full relative inline-flex items-center justify-center gap-2 rounded-full font-poppins transition-all duration-300 cursor-pointer overflow-hidden ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {/* Glow effect on hover */}
      {variant === 'primary' && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-gold via-orange to-gold opacity-0"
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Ripple effect for secondary */}
      {variant === 'secondary' && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full bg-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.div
      ref={wrapperRef}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {href ? (
        <a href={href} className={sharedStyles}>
          {content}
        </a>
      ) : (
        <button onClick={onClick} className={sharedStyles}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
