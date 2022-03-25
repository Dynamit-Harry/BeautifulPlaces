module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['PaletteMosaic'],
        body: ['Smokum']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js'
    ]
}
