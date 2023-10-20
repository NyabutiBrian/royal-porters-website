/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      // colors
      colors: {
        primary: '#c5a645',
        secondary: '#212121',
        whity: '#C9D8DD',
        darky: '#0a0a0a',
      },
      // font
      fontFamily: {
        Poppins: ['Poppins']
      },
      // scroll behaviour
      scrollBehavior: ['smooth'],
    },
  },
  variants: {
    extend: {
      // Add variants here
      scrollBehavior: ['responsive'],
    }
  },
  plugins: [],
}

