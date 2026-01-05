/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f4fb',
          100: '#cce9f7',
          200: '#99d3ef',
          300: '#66bde7',
          400: '#33a7df',
          500: '#0f7eca',
          600: '#0f7eca',
          700: '#0c65a2',
          800: '#094c79',
          900: '#063251',
        }
      }
    },
  },
  plugins: [],
}
