/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@types/**',
        'node_modules/.cache/**',
        '.git/**',
        '.next/**',
        'out/**',
        '*.tsbuildinfo',
      ],
    },
  },
}

module.exports = nextConfig