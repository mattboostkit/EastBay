/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'sketchfab.com',
      },
      {
        protocol: 'https',
        hostname: 'app',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
  typescript: {
    // Recommended: Set to false for production to catch type errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Recommended: Set to false for production to enforce code quality
    ignoreDuringBuilds: false,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('crypto');
    }
    return config;
  },
};

module.exports = nextConfig;
