/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
      colors: {
        primary: '#1e3a8a',
        secondary: '#1a1a1a',
        light: '#ffffff',
        muted: '#b8b0c0',
      },
    },
  },
}