module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1b6cfc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
