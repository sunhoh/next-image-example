/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [],
  },
  
    async redirects() {
        return [
          {
            source: '/',
            destination: '/tag',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
