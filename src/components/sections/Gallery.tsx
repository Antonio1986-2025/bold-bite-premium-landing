'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-burgundy/10 via-black to-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="Moments"
          align="center"
        />

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => {
            const spanClasses =
              image.span === 'tall'
                ? 'row-span-2'
                : image.span === 'wide'
                  ? 'col-span-2 md:col-span-2'
                  : '';

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl ${spanClasses}`}
                onClick={() => setLightboxImage(image.src)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-black"
                  >
                    <Search className="h-6 w-6" />
                  </motion.div>
                </div>
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />
                <span className="absolute bottom-4 left-4 font-poppins text-sm text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  {image.alt}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-h-[90vh] max-w-[90vw]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImage}
              alt="Gallery preview"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
