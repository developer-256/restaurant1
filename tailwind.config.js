/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nav: '#02425d',
        body: '#09506c',
        button: '#8eb314',
        time: '#e7e5d7'
      },
      fontFamily: {
        versala: ['Varela Round', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

