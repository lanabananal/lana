/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#1e293b',
            a: { color: '#059669' },
            h1: { color: '#0f172a' },
            h2: { color: '#0f172a' },
            h3: { color: '#0f172a' },
          },
        },
      },
    },
  },
  plugins: [],
};
