/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3B5A64',
        secondary: '#6D8D97',
        whity: '#C9D8DD',
        darky: '#1F3050',
      },
      fontFamily: {
        Poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}

