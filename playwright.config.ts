import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  outputDir: "playwright/out/images",
  reporter: [
    // スナップショットテストのレポートを生成する
    ["html", { open: "never", outputFolder: "playwright/out/report" }],
  ],
  webServer: {
    // 開発サーバーだとfirefoxのキャプチャーが撮れないことがあるので本番サーバーを起動
    command: "npm run start",
    url: "http://127.0.0.1:8080",
  },
  use: {
    baseURL: "http://127.0.0.1:8080",
  },
  projects: [
    // 各端末のスナップショットテストを実行する
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "safari",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "iPhone 13",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "iPhone SE",
      use: { ...devices["iPhone SE"] },
    },
    {
      name: "iPad Mini",
      use: { ...devices["iPad Mini"] },
    },
    {
      name: "iPad Mini landscape",
      use: { ...devices["iPad Mini landscape"] },
    },
    {
      name: "Pixel 5",
      use: { ...devices["Pixel 5"] },
    },
  ],
};
export default config;
