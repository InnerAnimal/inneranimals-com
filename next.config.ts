import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@radix-ui/react-slot', 'class-variance-authority'],
};

export default nextConfig;
