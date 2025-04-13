import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

// Determine base path based on environment variable set by GitHub Actions
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  /* config options*/
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '/',
  images: {
    loader: 'akamai',
    unoptimized: true,
    path: '',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com/**",
      },
    ],
  },
  // if used turbopack
  // transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
