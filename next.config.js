/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/img-vs-next-image',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
