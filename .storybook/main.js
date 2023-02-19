const path = require("path");
const rootPath = path.resolve(__dirname, "../src/");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport/register", // 各端末での表示を確認しやすくする
    "@storybook/addon-a11y", // アクセシビリティチェック
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"], // publicディレクトリ配下の画像を表示させる
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true, // *.module.scssファイル全てを対象
            },
            url: false, // cssのbackgroundで設定した画像へのパスがプロジェクトルートからの絶対パスになるように設定
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../src/"),
    });
    config.resolve.alias["@"] = rootPath; // srcを@と省略してパスを記載できるように設定
    return config;
  },
  features: {
    buildStoriesJson: true,
  },
};
