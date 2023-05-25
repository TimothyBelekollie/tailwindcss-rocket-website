/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./build/html/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screens:{
        // 'wildscreen':{'row':'(min-aspect-ratio:3/2'},
        // 'tallscreen':{'row':'(min-aspect-ratio:1/2'}
      },
      keyframes:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},
        },
        animationn:{
          'open-menu':'open-menu o.5s ease-in-out forwards',
        }
      }
    },
  },
  plugins: [],
}

