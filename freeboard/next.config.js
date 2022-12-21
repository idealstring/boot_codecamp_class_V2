/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "sanghyeon_shop",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/market": { page: "/market" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
