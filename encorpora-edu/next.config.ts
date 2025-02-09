import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  basePath: "/encorpora.io", // Change this to your actual repo name
  assetPrefix: "/encorpora.io/",
};

// const nextConfig = {
//   output: "export",
//   basePath: "/encorpora-edu", // Change this to match your repo subfolder
//   assetPrefix: "/encorpora-edu/",
// };

export default nextConfig;
