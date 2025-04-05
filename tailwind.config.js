/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0071ff',
          600: '#005bcc',
          700: '#004399',
          800: '#002c66',
          900: '#001633',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media', // or 'class' for manual dark mode toggle
} 