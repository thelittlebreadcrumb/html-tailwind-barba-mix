const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      "sans": [...defaultTheme.fontFamily.sans],
      "serif": ['Crimson Pro', ...defaultTheme.fontFamily.serif],
      "mono": [...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
