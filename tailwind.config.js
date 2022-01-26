/* eslint-disable semi */
module.exports = {

  content: [],
  theme: {
    extend: {
      backgroundImage: () => ({
        rehomingHeader: 'url(\'https://i.imgur.com/A7pPi5p.png?1\')',
        donationHeader: 'url(\'https://i.imgur.com/b307Jjk.png?1\')',
        donationTile: 'url(\'https://i.imgur.com/EtJe78n.jpg\')',

      }),

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
