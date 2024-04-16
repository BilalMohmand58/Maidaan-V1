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
        source: "/mirpur",
        destination:
          "https://docs.google.com/forms/e/1FAIpQLSc1l92WbgRO2mhuDTy4pIOoAveZicfR6JIsGbUP9RCK-0wtBA/viewform?usp=sf_link",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
