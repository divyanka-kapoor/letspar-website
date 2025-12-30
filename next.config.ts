import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/letspar-website",
  assetPrefix: "/letspar-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
