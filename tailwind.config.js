/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite/**/*.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '5rem',
      },
      keyframes: {
        'shader-pulse': {
          '0%': {
            opacity: 0.1,
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 0.1,
          },
        },
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
        'shader-pulse': 'shader-pulse 20s linear infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
