const autoprefixer = require('autoprefixer')
const cqfill = require("cqfill/postcss")

module.exports = {
  plugins: [
    cqfill,
    autoprefixer
  ]
}