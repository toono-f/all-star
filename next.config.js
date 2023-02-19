/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BugsnagSourceMapUploaderPlugin } = require("webpack-bugsnag-plugins");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // bugsnagソースマップ設定
  // 参考： https://zenn.dev/takeharu/scraps/0e958322e75d52
  publicRuntimeConfig: {
    version: process.env.npm_package_version,
  },
  webpack: (config) => {
    if (process.env.NEXT_PUBLIC_RELEASE_STAGE === "prod") {
      config.plugins.push(
        new BugsnagSourceMapUploaderPlugin({
          apiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY,
          appVersion: process.env.NEXT_PUBLIC_RELEASE_STAGE,
          overwrite: true,
          publicPath: "*/",
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
