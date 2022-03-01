const typography = require('@tailwindcss/typography');
module.exports = {
  // purge: ['./dist/*.html'],
  content: ['./src/**/*.tsx', './src/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        dark: '#1b1b24',
        light: '',
      },
    },
  },
  plugins: [typography],
};
