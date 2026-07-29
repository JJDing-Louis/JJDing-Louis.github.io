import MarkdownIt from "markdown-it";
import { loadMarkdownEntries } from "@/services/content/contentLoader";
import type { AppLocale } from "@/router/types";

export interface ArticleRecord {
  id: string;
  locale: AppLocale;
  title: string;
  summary: string;
  path: string;
  categoryIds: string[];
  legacyPaths: string[];
  body: string;
}

interface ArticleFrontMatter {
  id: string;
  locale: AppLocale;
  title: string;
  summary: string;
  slug: string;
  categoryIds?: string[];
  legacyPaths?: string[];
  status?: string;
}

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true
});

const renderArticleBody = (body: string): string => {
  const trimmedBody = body.trimStart();

  if (trimmedBody.startsWith("<")) {
    return body;
  }

  return markdown.render(body);
};

const normalizeCategoryIds = (categoryIds: string[] | undefined): string[] =>
  (categoryIds ?? []).map((categoryId) => (categoryId === "python" ? "python-basic" : categoryId));

const buildArticlePath = (locale: AppLocale, sourcePath: string, slug: string): string | null => {
  if (sourcePath.includes("/logs/")) {
    return locale === "zh-TW" ? `/logs/${slug}` : `/en/logs/${slug}`;
  }

  if (sourcePath.includes("/notes/python/")) {
    return locale === "zh-TW" ? `/notes/python/${slug}` : `/en/notes/python/${slug}`;
  }

  return null;
};

const createArticleRecord = (
  locale: AppLocale,
  metadata: Record<string, unknown>,
  body: string,
  sourcePath: string
): ArticleRecord | null => {
  const frontMatter = metadata as Partial<ArticleFrontMatter>;

  if (
    frontMatter.status === "draft" ||
    typeof frontMatter.id !== "string" ||
    typeof frontMatter.title !== "string" ||
    typeof frontMatter.summary !== "string" ||
    typeof frontMatter.slug !== "string"
  ) {
    return null;
  }

  const path = buildArticlePath(locale, sourcePath, frontMatter.slug);

  if (!path) {
    return null;
  }

  return {
    id: frontMatter.id,
    locale,
    title: frontMatter.title,
    summary: frontMatter.summary,
    path,
    categoryIds: normalizeCategoryIds(Array.isArray(frontMatter.categoryIds) ? frontMatter.categoryIds : []),
    legacyPaths: Array.isArray(frontMatter.legacyPaths)
      ? frontMatter.legacyPaths.filter((legacyPath): legacyPath is string => typeof legacyPath === "string")
      : [],
    body: renderArticleBody(body)
  };
};

const loadArticlesByLocale = (locale: AppLocale): ArticleRecord[] =>
  loadMarkdownEntries(locale)
    .map((entry) => createArticleRecord(locale, entry.metadata, entry.body, entry.sourcePath))
    .filter((entry): entry is ArticleRecord => entry !== null);

export const articles = [...loadArticlesByLocale("zh-TW"), ...loadArticlesByLocale("en")];
