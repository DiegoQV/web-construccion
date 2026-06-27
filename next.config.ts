import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — all pages pre-rendered at build time
  // Remove 'export' if adding dynamic routes in the future
  // output: 'export',

  images: {
    // Local images only — no remote patterns needed for this project
    // Add remotePatterns here if external image sources are added later
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Strict mode for catching React issues early
  reactStrictMode: true,

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
