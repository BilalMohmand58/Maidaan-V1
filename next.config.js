/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.ctfassets.net"],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
