module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    color:{
      'purple-750':'#6b63ff',
      'blue-750':'#1799fb'
    },
    extend: {
      borderRadius: {
        'top-right':'1rem',
        'bottom-right':'1rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      height :{
        '90':'90vh',
        '30':'30rem'
      },
      objectPosition: {
        'center-top': 'center top',
      }

    },

  },
  extend: {
    fontFamily: {
      IRANSans: ['IRANSans']
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
