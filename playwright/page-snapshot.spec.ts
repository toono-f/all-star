import { expect, test } from "@playwright/test";

const pagePath = [
  // ここに各ページの情報を追加
  {
    name: "top",
    path: "/",
  },
];

test.describe.parallel("Visual regression testing of page", () => {
  pagePath.map((item) => {
    test(`snapshot test ${item.name}`, async ({ page }) => {
      await page.goto(item.path);
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot([
        item.name,
        `${item.name}.png`,
      ]);
    });
  });
});
