/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0edfe',
          100: '#e1dafd',
          200: '#c3b5fb',
          300: '#a590f9',
          400: '#7860ef',
          500: '#5030E5',
          600: '#4428cc',
          700: '#3620a3',
          800: '#28187a',
          900: '#1a1051',
        },
        accent: {
          DEFAULT: '#00B3E3',
          light:   '#33c5ea',
          dark:    '#0090b6',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#1A1A1A',
            a: { color: '#5030E5' },
            h1: { color: '#1A1A1A' },
            h2: { color: '#1A1A1A' },
            h3: { color: '#1A1A1A' },
          },
        },
      },
    },
  },
  plugins: [],
};
