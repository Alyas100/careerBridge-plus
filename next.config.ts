import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allows production builds to complete successfully even if
    // your project contains strict TypeScript type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allows production builds to complete successfully even if
    // your project has active ESLint warnings or rule violations.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
