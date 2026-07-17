import type { Metadata } from 'next';
import { Bebas_Neue, Poppins } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://boldbite.vercel.app'),
  title: 'Bold Bite | Premium Burgers with Unforgettable Taste',
  description:
    'Experience bold flavor in every bite. Handcrafted premium burgers made with the finest ingredients. Order online for lightning-fast delivery.',
  keywords: [
    'premium burgers',
    'gourmet burgers',
    'fast food',
    'burger delivery',
    'bold bite',
    'craft burgers',
  ],
  openGraph: {
    title: 'Bold Bite | Premium Burgers with Unforgettable Taste',
    description:
      'Experience bold flavor in every bite. Handcrafted premium burgers made with the finest ingredients.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Bold Bite',
    // TODO: Replace with your actual OG image URL
    images: [{ url: '/hero/000.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bold Bite | Premium Burgers',
    description: 'Handcrafted premium burgers with unforgettable taste.',
    // TODO: Replace with your actual Twitter image URL
    images: ['/hero/000.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-black font-poppins text-white antialiased">
        {children}
      </body>
    </html>
  );
}
