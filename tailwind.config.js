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
        primary: '#2a4d9b',
        secondary: '#1a1a1a',
        light: '#f5f5f0',
      },
    },
  },
}
