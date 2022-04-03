const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '375px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
