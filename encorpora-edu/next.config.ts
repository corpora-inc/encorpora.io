import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "", // Change this to your actual repo name
  assetPrefix: "",
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
