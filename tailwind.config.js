/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          logo: '#2A566E',
          content: '#353535',
          yellows:{
            dark: '#EF9725',
            light: '#F3BA22'
          },
          blues:{
            button:'#2A556D',
            dark:'#102F3E',
            light:'#0E76BC',
          },
          greens:{
            light:'#13A89E', 
          },
          grays:{
            light:'#707070',

          }
      }
    },
  },
  plugins: [],
}