import { test, expect } from "@playwright/test";

test("homepage shows migration shell content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("GitHub 最近活動")).toBeVisible();
  await expect(page.getByText("分類入口")).toBeVisible();
});
