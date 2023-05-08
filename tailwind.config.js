/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamiy :{
          Montserrat: ["Montserrat", "sans-serif" ],
          Mulish: ["Mulish", "sans-serif"],
          Anton: ["Anton", "sans-serif"],
          Gotham: ["Gotham", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'darkish':'#111827'
      },
    },
  },
  plugins: [],



}



