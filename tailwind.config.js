/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F3EEE4',
        ink: {
          light: '#111111',
          dark: '#F3EEE4',
        },
        charcoal: '#0C0C0D',
        card: {
          light: '#FBF8F2',
          dark: '#151517',
        },
        rule: {
          light: 'rgba(17, 17, 17, 0.12)',
          dark: 'rgba(255, 255, 255, 0.1)',
        },
        lime: {
          DEFAULT: '#C6F135',
          dark: '#B0D92A',
          glow: 'rgba(198, 241, 53, 0.25)',
        },
        tangerine: {
          DEFAULT: '#FF5A1F',
          dark: '#E04E17',
        },
        sky: {
          DEFAULT: '#8EC5FF',
          dark: '#77AEE8',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
