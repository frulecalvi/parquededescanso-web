import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["form-data", "mailgun.js"],
};

export default nextConfig;
