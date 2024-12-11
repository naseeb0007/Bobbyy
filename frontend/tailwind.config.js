// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', // Ensure this is correct for your project
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'scroll-left 45s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
}
