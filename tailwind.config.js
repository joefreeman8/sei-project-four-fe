/* eslint-disable semi */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'pawhub-yellow': '#FED636',
        'pawhub-purple': '#50447c',
        'pawhub-grey': '#302c2c',
        'pawhub-stone': '#d2c8b9',
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};
