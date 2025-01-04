import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  }
}

export default nextConfig;
