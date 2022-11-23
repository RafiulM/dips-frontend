/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans:['lato']
    },
    extend: {
      fontFamily: {
        'noto':['noto sans','sans-serif']
      },
      colors: {
        'primary':'#FFFE55'
      },
      backgroundImage:{
        'services': "url('/graphic/services/servicesbg.png')"
      }
    },
  },
  plugins: [],
}