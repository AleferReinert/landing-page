// next.config.js
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  images: {
    formats: ['image/webp']
  }
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      }
    ]
  ],
  nextConfig
)
