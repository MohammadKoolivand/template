/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "media.licdn.com"],
  },
};

module.exports = nextConfig;

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.NEXT_PUBLIC_${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    env: envKeys,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    ...nextConfig,
  };
};
