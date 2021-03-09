const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
        },
      },
    },
  },
  variants: {
    container: [],
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
