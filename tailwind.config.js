const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: {
    enabled: ["production"].includes(process.env.NODE_ENV),
    content: [
      "./**/*.html.erb",
      "./app/helpers/**/*.rb",
      "./app/packs/**/*.js",
    ]
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ]
};
