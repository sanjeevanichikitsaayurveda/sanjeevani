import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.google.com'],
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
