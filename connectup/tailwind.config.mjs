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
          50:  '#f3f0fe',
          100: '#e9e3fd',
          200: '#d3c7fb',
          300: '#b8a3f8',
          400: '#9a7af4',
          500: '#5030E5',
          600: '#4828cc',
          700: '#3a20a8',
          800: '#2d1882',
          900: '#1a1051',
        },
        teal: {
          DEFAULT: '#00B3E3',
          light:   '#33c5ea',
          dark:    '#0090b6',
        },
        dark:     '#1A1A1A',
        offwhite: '#F5F5F5',
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
