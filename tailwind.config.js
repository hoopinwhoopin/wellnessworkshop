/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      'Aktiv-Regular': ['Aktiv Grotesk', 'sans-serif'],
    },
    fontSize: {
      'xxs': '.625rem',
    },
    },
  },
  plugins: [],
}