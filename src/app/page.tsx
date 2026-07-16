import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';

// Eager: above the fold — SSR for SEO + fast LCP
import PopularBurgers from '@/components/sections/PopularBurgers';

// Lazy: below the fold
const SpecialOffers = dynamic(() => import('@/components/sections/SpecialOffers'), {
  ssr: true,
});
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), {
  ssr: true,
});
const Delivery = dynamic(() => import('@/components/sections/Delivery'), {
  ssr: true,
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: true,
});
const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  ssr: true,
});
const AppDownload = dynamic(() => import('@/components/sections/AppDownload'), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PopularBurgers />
        <SpecialOffers />
        <WhyChooseUs />
        <Delivery />
        <Testimonials />
        <Gallery />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
