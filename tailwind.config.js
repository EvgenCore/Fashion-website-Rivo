/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      maxlg:{'max': '1919.99px'},
      lg15:{'max': '1599.99px'},
      lg12:{'max': '1279.99px'},
      md:{'max': '991.99px'},
      sm:{'max': '767.99px'},
      xs:{'max': '479.99px'},
    },
    extend: {
      fontFamily:{
        poppins:["Poppins", 'sans-serif'],
        rufina:["Rufina", 'serif'],
        robotoSlab:["Roboto Slab", 'serif'],
        robotoSerif:["Roboto Serif", 'serif']
      },
      colors:{
        lightGreen: "#C2EFD4",
        semiDarkGreen: "#93B9A2",

        darkGreen:"#224F34"
      },
      keyframes:{
        'fade-in':{
          from:{
            opacity:0 
          }, to:{
            opacity:1
          }
        },
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation:{
        fadeIn: ' .5s fade-in ease-in-out',
        'spin-once': 'spin-once 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}

