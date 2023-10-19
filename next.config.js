/** @type {import('next').NextConfig} */
const nextConfig = {
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
