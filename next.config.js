/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Performance optimizations
  swcMinify: true,
  reactStrictMode: true,
  // Disable RSC for static export
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;