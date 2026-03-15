import { describe, expect, it } from "vitest";
import {
  getCategoriesByLocale,
  getCategoryById,
  getChildCategories,
  getNavigationByLocale
} from "@/services/content/contentQueryService";

describe("navigation data", () => {
  it("returns visible items for both locales", () => {
    expect(getNavigationByLocale("zh-TW").length).toBeGreaterThan(0);
    expect(getNavigationByLocale("en").length).toBeGreaterThan(0);
    expect(getCategoriesByLocale("zh-TW").length).toBeGreaterThan(0);
  });

  it("preserves the requested learning note hierarchy", () => {
    expect(getCategoryById("zh-TW", "python")?.name).toBe("Python");
    expect(getChildCategories("zh-TW", "python").map((item) => item.id)).toEqual([
      "python-basic",
      "python-django",
      "python-other"
    ]);
    expect(getChildCategories("zh-TW", "database").map((item) => item.id)).toEqual([
      "database-mssql",
      "database-oracle",
      "database-sqlite",
      "database-mysql",
      "database-postgresql"
    ]);
    expect(getChildCategories("zh-TW", "other").map((item) => item.id)).toEqual([
      "other-git",
      "other-powershell"
    ]);
  });
});
