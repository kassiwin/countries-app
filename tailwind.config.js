module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      darkBlue: 'hsl(209, 23%, 22%)',
      black: 'hsl(207, 26%, 17%)',
      blackTxt: 'hsl(200, 15%, 8%)',
      darkGray: 'hsl(0, 0%, 52%)',
      lightGrey: 'hsl(0, 0%, 98%)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
