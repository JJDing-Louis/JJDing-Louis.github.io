import { describe, expect, it } from "vitest";
import { validateArticleSchema } from "@/data/schema/contentSchema";

describe("content schema", () => {
  it("accepts minimal published article metadata", () => {
    expect(
      validateArticleSchema({
        id: "article-1",
        locale: "zh-TW",
        title: "Title",
        summary: "Summary",
        slug: "title",
        categoryIds: ["python"],
        status: "published"
      })
    ).toBe(true);
  });
});
