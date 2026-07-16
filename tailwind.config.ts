import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FDB515',
        orange: '#FF8A00',
        burgundy: '#5B0017',
        'deep-red': '#7A001C',
        black: '#111111',
        white: '#FFFFFF',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1s infinite',
        'float-slow': 'float 8s ease-in-out 2s infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        particle: 'particle 4s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(253, 181, 21, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(253, 181, 21, 0.6)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(253, 181, 21, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(253, 181, 21, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        particle: {
          '0%, 100%': { opacity: '0', transform: 'translateY(0) scale(0)' },
          '50%': { opacity: '1', transform: 'translateY(-100px) scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'diagonal-split':
          'linear-gradient(135deg, #FDB515 0%, #FDB515 45%, #5B0017 45%, #5B0017 100%)',
        'hero-glow':
          'radial-gradient(circle at 70% 50%, rgba(253,181,21,0.15) 0%, transparent 50%)',
      },
      boxShadow: {
        premium: '0 20px 60px -20px rgba(0,0,0,0.3)',
        'premium-lg': '0 40px 100px -20px rgba(0,0,0,0.5)',
        'gold-glow': '0 0 40px rgba(253,181,21,0.3)',
        'gold-glow-lg': '0 0 80px rgba(253,181,21,0.5)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.2)',
        'card-hover': '0 20px 40px -10px rgba(0,0,0,0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
