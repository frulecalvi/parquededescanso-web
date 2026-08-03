import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
