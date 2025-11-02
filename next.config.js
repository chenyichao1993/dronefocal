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
  // Remove outputFileTracingExcludes to ensure all runtime files are included
  // The original stack overflow was likely due to .gitignore patterns,
  // which we've already fixed by simplifying it
}

module.exports = nextConfig