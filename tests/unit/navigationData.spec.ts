import { describe, expect, it } from "vitest";
import { getCategoriesByLocale, getNavigationByLocale } from "@/services/content/contentQueryService";

describe("navigation data", () => {
  it("returns visible items for both locales", () => {
    expect(getNavigationByLocale("zh-TW").length).toBeGreaterThan(0);
    expect(getNavigationByLocale("en").length).toBeGreaterThan(0);
    expect(getCategoriesByLocale("zh-TW").length).toBeGreaterThan(0);
  });
});
