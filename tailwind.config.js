/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#54a5ff',
          dark: '#3f8cff',
          light: '#84c3ff',
        },
        surface: {
          900: '#070b14',
          800: '#0f1625',
          700: '#141d32',
        },
        accent: {
          violet: '#8b5cf6',
          cyan: '#22d3ee',
          pink: '#ec4899',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124, 170, 255, 0.22), 0 24px 65px -34px rgba(68, 129, 255, 0.65)',
      },
      backdropBlur: {
        xl2: '20px',
      },
    },
  },
  plugins: [],
}

