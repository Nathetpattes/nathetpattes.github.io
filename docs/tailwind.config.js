module.exports = {
  content: [
    './_includes/*.html',
    './_layouts/*.html',
    './_posts/*.{html, md}',
    './_pages/*.{html, md}',
    './*.html',
  ],
  theme: {
    extend: {
      colors:{
        mainGreen: {500:'#7ce4cb'},
      },
    },

  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}