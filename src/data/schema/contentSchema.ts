export interface ArticleSchema {
  id: string;
  locale: "zh-TW" | "en";
  title: string;
  summary: string;
  slug: string;
  categoryIds: string[];
  status: "draft" | "published" | "archived";
}

export const validateArticleSchema = (value: Partial<ArticleSchema>) => {
  return Boolean(
    value.id &&
      value.locale &&
      value.title &&
      value.summary &&
      value.slug &&
      value.categoryIds?.length
  );
};
