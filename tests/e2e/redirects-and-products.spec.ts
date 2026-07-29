import { test, expect } from "@playwright/test";

test("product page and legacy-style routes are reachable", async ({ page }) => {
  await page.goto("/products");
  await expect(page.getByText("作品入口")).toBeVisible();
  await page.goto("/");
  await expect(page.getByText("GitHub 最近活動")).toBeVisible();
});
