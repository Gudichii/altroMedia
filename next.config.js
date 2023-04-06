/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new CopyWebpackPlugin({
        patterns: [
          { from: 'static/fonts', to: 'static/fonts' }
        ]
      }))
    }

    return config
  }
}

module.exports = nextConfig
