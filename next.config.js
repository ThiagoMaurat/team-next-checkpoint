/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "logodetimes.com",
      "cdn.shopify.com",
      "melanciadepapel.com.br",
      "havaianas.com.br",
      "app.somosdestra.com",
      "rotadigitalbr.com.br",
    ],
  },
};

module.exports = nextConfig;
