/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bandungtalentsource.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig