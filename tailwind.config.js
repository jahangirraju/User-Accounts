/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito:"('Nunito Sans','sans-serif')"
      },

      backgroundImage: {
        hero: "url('.././images/bg-pattern-light.svg')"
      },
      colors: {
        primary: '#727CF5',
      },
    },
  },
  plugins: [],
}
