module.exports = {
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#67bfeb",
        "secondary": "#f000b8",
        "accent": "#1dcdbc",
        "neutral": "#FEFBF9",
        "base-100": "#ffffff",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
    },],
  },
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    fontFamily: {
      'serif': ['Fraunces'],
      'body': ['Barlow'],
    }
  }
};
