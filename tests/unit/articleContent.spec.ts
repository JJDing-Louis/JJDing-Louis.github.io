import { describe, expect, it } from "vitest";
import { getArticlesByLocale } from "@/services/content/contentQueryService";

describe("article content index", () => {
  it("returns at least one published log entry per locale", () => {
    expect(getArticlesByLocale("zh-TW").length).toBeGreaterThan(0);
    expect(getArticlesByLocale("en").length).toBeGreaterThan(0);
  });

  it("loads note content from src/content markdown entries", () => {
    const zhArticle = getArticlesByLocale("zh-TW").find((article) => article.id === "python-ch01");

    expect(zhArticle?.path).toBe("/notes/python/ch01-basic-programming");
    expect(zhArticle?.categoryIds).toContain("python-basic");
    expect(zhArticle?.body).toContain("Ch01 基本程式設計");
  });
});
