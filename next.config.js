/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/commons/:slug*',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/auth/register',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
