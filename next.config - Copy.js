/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'sketchfab.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Updated from serverComponentsExternalPackages to serverExternalPackages
    serverExternalPackages: ['crypto']
  },
};

module.exports = nextConfig;