/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'booster-yellow' : '#FFBB00',
        'booster-darkblue' : '#06071F',
        'booster-blue' : '#1472FF',
        'booster-navy' : '#0A081C',
        'booster-green' : '#008900',
        'booster-lightgreen' : '#E8F7E5',
        'booster-grey' : '#969595',
        'booster-light' : '#E9E9E9'
      }
    },
  },
  plugins: [],
}

