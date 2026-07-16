'use client';

import { FOOTER_COLUMNS, SOCIAL_LINKS } from '@/lib/constants';
import { Instagram, Twitter, Youtube, Music2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Twitter,
  Youtube,
  Music2,
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-black to-burgundy/20">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="inline-block">
              <span className="font-bebas text-4xl tracking-wider text-gold">
                BOLD<span className="text-white">BITE</span>
              </span>
            </a>
            <p className="max-w-xs font-poppins text-sm leading-relaxed text-white/50">
              Crafting bold flavors and unforgettable burger experiences since 2015. Every bite is a statement.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors hover:border-gold/50 hover:text-gold"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-5">
              <h4 className="font-bebas text-xl tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 font-poppins text-sm text-white/40 transition-colors hover:text-gold"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="font-bebas text-xl tracking-wider text-white">
              Newsletter
            </h4>
            <p className="font-poppins text-sm text-white/40">
              Get exclusive offers and new menu drops delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-poppins text-sm text-white placeholder-white/30 outline-none transition-all focus:border-gold/50 focus:bg-white/[0.07]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gold px-5 py-3 font-poppins text-sm font-semibold text-black transition-colors hover:bg-orange"
              >
                {subscribed ? '✓' : 'Join'}
              </motion.button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-poppins text-xs text-gold"
              >
                Welcome to the bold side!
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-poppins text-sm text-white/30">
            &copy; {new Date().getFullYear()} Bold Bite. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-poppins text-sm text-white/30 transition-colors hover:text-white/60">
              Privacy Policy
            </a>
            <a href="#" className="font-poppins text-sm text-white/30 transition-colors hover:text-white/60">
              Terms of Service
            </a>
            <a href="#" className="font-poppins text-sm text-white/30 transition-colors hover:text-white/60">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
