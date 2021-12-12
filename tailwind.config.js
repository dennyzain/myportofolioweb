module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#753188',
      }),
      fontFamily: {
        Monument: 'Monument',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
