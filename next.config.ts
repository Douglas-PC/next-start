import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export generation (creates 'out' when running `next export`).
  // Note: Some dynamic features / server functions will be stripped; current pages are static-friendly.
  output: 'export',
};

export default nextConfig;
