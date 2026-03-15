import { test, expect } from "@playwright/test";

test("navigation and locale routes are reachable", async ({ page }) => {
  await page.goto("/notes");
  await expect(page.getByText("分類總覽")).toBeVisible();
  await page.goto("/notes/python");
  await expect(page.getByText("Python Ch01 基本程式設計")).toBeVisible();
  await page.goto("/en/notes");
  await expect(page.getByText("Category overview")).toBeVisible();
});
