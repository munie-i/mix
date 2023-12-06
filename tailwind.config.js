/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xl': {'min': '1536px'},

      '2xl': {'max': '1535px'},

      'xl': {'max': '1300px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '475px'},
    },
    extend: {
      colors: {
        red: '#e50914',
        lightBlack: '#0c0c0c',
        gray: '#999',
        lightGray: '#bbb',
        darkGray: '#191919',
      },
    },
  },
  darkMode: "class",
  plugins: []
}