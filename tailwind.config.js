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
    boxShadow: {
      'shadowXs': '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
    },
    // repeat(auto-fit, minmax(238px, 1fr))
    gridTemplateColumns: {
      'AgencyListTags': '2fr 1fr 1fr 1fr 2fr',
    }
  },
    colors: {
      'whiteColor': '#FFFFFF',
      'gray700':'#344054',
      'grayBorder': '#D0D5DD',
      'grayBorder1':'#EAECF0',
      'primaryColor':'#329BFA',
      'textColor':'#565656', 
      'redHighlightedColor': '#F04438',
      'inputColor':'#667085',
      'tagsColor':'#3364F7',
      'AgencyCardColor':'#F9FAFB',
    },
  },
  plugins: [],
}