/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf7f5',
          100: '#f5ebe4',
          200: '#e6d5c7',
          600: '#8b6f5c',
          800: '#5c4a3d',
          900: '#3d3128',
        },
      },
    },
  },
  plugins: [],
}

