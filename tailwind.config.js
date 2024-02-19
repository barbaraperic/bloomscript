/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-up': "slide-up var(--duration) calc(var(--interval) * var(--i)) forwards",
        'shake': 'shake var(--duration) var(--easing)',
        'content': 'content 0.3s 0.3s both',
        'play': 'play 0.5s'
      },
      keyframes: {
        "slide-up": {
          '0%': { transform: 'translateY(10%)', opacity: '0'},
          '100%': { opacity: '1', transitionProperty: 'all'}
        },
        "shake": {
          '0%': { transform: 'none'},
          '25%': { transform: 'translateX(-5%)'},
          '50%': { transform: 'translateX(5%)'},
          '70%': { transform: 'translateX(-5%)'}
,         '100%': { transform: 'none'}
        },
        'dip': {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(15%)'}
        },
        // 'content': {
        //   from: {
        //     opacity: 0,
        //     transform: 'translateX(-2rem)'
        //   },
        //   to: {
        //     opacity: 1,
        //     transform: 'none'
        //   }
        // },
        'play': {
          '0%': {
            transform: 'translate(calc(var(--dx) * 1px), calc(var(--dy) * 1px)) scale(var(--dw), var(--dh))'
          },
          '100%': {
            transform: 'translate(calc(var(--dx) * 1px), calc(var(--dy) * 1px)) scale(var(--dw), var(--dh))'
          }
        }
        
      }
    },
  },
  plugins: [],
}
