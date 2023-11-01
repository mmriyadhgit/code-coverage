/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    swcPlugins: [
      ['swc-plugin-coverage-instrument', {}]
    ]
  }
}

module.exports = nextConfig
