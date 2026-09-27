/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0b0b0c', 2: '#111113', 3: '#18181b' },
        paper: '#ededeb',
        muted: '#8b8b90',
        faint: '#5b5b61',
        accent: '#ff5a1f',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
