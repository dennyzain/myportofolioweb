module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Monument: 'Monument',
      },
      animation: {
        colorGradient: 'gradient 1s cubic-bezier(0.43, 0.41, 0.09, 0.93) ',
      },
      keyframes: {
        gradient: {
          '0%': { opacity: 0.2 },
          '30%': { color: '#ee7752' },
          '50%': { color: '#e73c7e' },
          '80%': { color: '#23a6d5' },
          '90%': { color: '#23d5ab' },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
