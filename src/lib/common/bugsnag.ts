import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";

// bugsnag設定が失敗した場合に処理が止まらないように念の為try catch
try {
  Bugsnag.start({
    apiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY ?? "",
    appVersion: process.env.NEXT_PUBLIC_RELEASE_STAGE,
    plugins: [new BugsnagPluginReact()],
    // releaseStageは環境別のenvファイルの値を参照（タスク定義は影響しない）
    releaseStage:
      process.env.NEXT_PUBLIC_RELEASE_STAGE === "prod"
        ? "production"
        : process.env.NEXT_PUBLIC_RELEASE_STAGE === "stage"
        ? "staging"
        : "development",
    enabledReleaseStages: ["production", "staging"],
  });
} catch (e) {
  console.log(e);
}

export default Bugsnag;
