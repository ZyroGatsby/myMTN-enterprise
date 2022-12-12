/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['MTNBrighterSans', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-line':
          'linear-gradient(90deg, #9CA3AF 0%, rgba(156, 163, 175, 0) 45.82%, rgba(156, 163, 175, 0) 50%, rgba(156, 163, 175, 0) 54.38%, #9CA3AF 100%);',
        'sc-guage':
          'linear-gradient( 91deg, #e64c3c 3%, #ff9b32 13%, #fdc522 50%, #fdcf1e 72%, #92b948 89%, #56ad60 109% );',
        'expired-subscription':
          'linear-gradient(to right, #29668b, #babbad);',
      },
      colors: {
        primary: '#ffcb05',
        dark: '#000000',
        background: '#f8f4ef',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    },
  ],
};
