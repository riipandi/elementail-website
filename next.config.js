/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE || false,
    SPLITBEE_TOKEN: process.env.SPLITBEE_TOKEN || ''
  },
  images: {
    domains: ['doodleipsum.com', 'images.unsplash.com', 'pbs.twimg.com', 'shuffle.dev', 'tailwindui.com'],
    loader: 'cloudinary',
    path: '/'
  },
  eslint: { dirs: ['.'] },
  reactStrictMode: true,
  poweredByHeader: false,
  // basePath: isProd ? '/elementail-website' : null,
  assetPrefix: isProd ? 'https://headunit.js.org' : null
}

module.exports = nextConfig
