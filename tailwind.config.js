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
    }
  },
    colors: {
      'whiteColor': '#FFFFFF',
      'gray700':'##344054',
      'grayBorder': '#D0D5DD',
      'primaryColor':'#329BFA',
      'textColor':'#565656', 
    },
  },
  plugins: [],
}