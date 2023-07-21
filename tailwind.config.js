/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        babas:['Bebas Neue'],
        montserrat: ['Montserrat'],
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}