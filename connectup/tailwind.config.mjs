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
          DEFAULT: '#8417aa',
          dark:    '#470050',
          light:   '#e1a7f1',
          lilac:   '#795389',
        },
        cyan:     '#07ffd2',
        offwhite: '#f7f4fa',
        border:   '#dfdede',
        teal:     '#4da88d',
      },
    },
  },
  plugins: [],
};
