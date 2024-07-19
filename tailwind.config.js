/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs': '450px',  // Extra small devices (phones, <576px)
        'sm': '576px',  // Small devices (phones, ≥576px)
        'md': '1024px',  // Medium devices (tablets, ≥768px)
        'lg': '1028px',  // Large devices (desktops, ≥992px)
        'xl': '1023px', // Extra large devices (large desktops, ≥1200px)
        '2xl': '1400px', // Extra extra large devices (larger desktops, ≥1400px)
        '3xl': '1280'
      },
      boxShadow: {
        'custom': '0 4px 6px #2E040426'
      },
      fontFamily: {
        'maserati': ['Montserrat', 'sans-serif']
      }
     
    },
  },
  plugins: [],
}

