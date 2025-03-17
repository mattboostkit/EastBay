/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com', 'sketchfab.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Updated from serverComponentsExternalPackages to serverExternalPackages
    serverExternalPackages: ['crypto']
  },
};

module.exports = nextConfig;
