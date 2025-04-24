/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#fff1f1',
          100: '#ffe1e1',
          700: '#c91111',
        },
      },
    },
  },
  plugins: [],
};