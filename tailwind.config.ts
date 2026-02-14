import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F7F2',
        'brand-black': '#000000',
        'brand-orange': '#f49421',
        slate: '#708090',
      },
      fontFamily: {
        serif: ['var(--font-cormorant-garamond)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
        'glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
      }
    },
  },
  plugins: [],
};
export default config;
