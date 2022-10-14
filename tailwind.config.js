// const plugin = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}
