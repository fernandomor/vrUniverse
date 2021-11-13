module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'display': ['Montserrat'],
      'body': ['"Montserrat"' ],
    },
    extend: {
      colors: {
        'morado': '#D62CFF',
        "cyan":"#0194F4",
        "sky":"#01FFF4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
