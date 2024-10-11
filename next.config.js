const nextConfig = {
  // For Static Export
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.ctfassets.net"],
  },
  optimizeFonts: false,

  async redirects() {
    return [
      {
        source: "/qr",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLScDOJqAt1bj3fb7BHi7IjMn1QYg77bvx9tMp6dNvYvrZJxa0Q/viewform?vc=0&c=0&w=1&flr=0",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
