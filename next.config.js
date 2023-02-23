/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "edge",
  },
  async redirects() {
    return [{ source: "/", destination: "/chat", permanent: false }];
  },
};

module.exports = nextConfig;
