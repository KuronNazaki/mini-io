/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite/**/*.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '10rem',
      },
      keyframes: {
        'vertically-moving': {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        'vertically-moving-reversed': {
          '0%': {
            transform: 'translateY(40px)',
          },
          '100%': {
            transform: 'translate(0)',
          },
        },
      },
      animation: {
        'vertically-moving': 'vertically-moving 2s linear infinite alternate',
        'vertically-moving-reversed':
          'vertically-moving-reversed 2s linear infinite alternate',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
