import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Keep this for GitHub Pages
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com', 'github.com', "aceternity.com","images.pexels.com"],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;