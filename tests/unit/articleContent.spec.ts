import { describe, expect, it } from "vitest";
import { getArticlesByLocale } from "@/services/content/contentQueryService";

describe("article content index", () => {
  it("returns at least one published log entry per locale", () => {
    expect(getArticlesByLocale("zh-TW").length).toBeGreaterThan(0);
    expect(getArticlesByLocale("en").length).toBeGreaterThan(0);
  });
});
