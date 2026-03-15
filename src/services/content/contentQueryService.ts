import { articles } from "@/data/content/articles";
import { categories } from "@/data/navigation/categories";
import { navigationZhTw } from "@/data/navigation/navigation.zh-TW";
import { navigationEn } from "@/data/navigation/navigation.en";
import type { AppLocale } from "@/router/types";

export type ArticleListItem = (typeof articles)[number];

export interface LocalizedCategory {
  id: string;
  parentCategoryId: string | null;
  name: string;
  topicGroup: "language" | "database" | "other";
  slug: string;
  order: number;
}

export interface CategoryTreeNode extends LocalizedCategory {
  children: CategoryTreeNode[];
}

const sortByOrder = <T extends { order: number; name?: string }>(items: T[]) =>
  [...items].sort((left, right) => left.order - right.order || (left.name ?? "").localeCompare(right.name ?? ""));

const localizeCategory = (locale: AppLocale, categoryId: string): LocalizedCategory | null => {
  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return null;
  }

  return {
    id: category.id,
    parentCategoryId: category.parentCategoryId,
    name: category.names[locale],
    topicGroup: category.topicGroup,
    slug: category.slug,
    order: category.order
  };
};

const collectDescendantIds = (categoryId: string): string[] => {
  const childIds = categories
    .filter((item) => item.parentCategoryId === categoryId)
    .flatMap((item) => [item.id, ...collectDescendantIds(item.id)]);

  return childIds;
};

export const getNavigationByLocale = (locale: AppLocale) =>
  locale === "zh-TW" ? navigationZhTw : navigationEn;

export const getCategoriesByLocale = (locale: AppLocale) =>
  sortByOrder(
    categories.map((category) => ({
      id: category.id,
      parentCategoryId: category.parentCategoryId,
      name: category.names[locale],
      topicGroup: category.topicGroup,
      slug: category.slug,
      order: category.order
    }))
  );

export const getCategoryById = (locale: AppLocale, categoryId: string) =>
  localizeCategory(locale, categoryId);

export const getChildCategories = (locale: AppLocale, parentCategoryId: string | null) =>
  sortByOrder(
    categories
      .filter((item) => item.parentCategoryId === parentCategoryId)
      .map((item) => ({
        id: item.id,
        parentCategoryId: item.parentCategoryId,
        name: item.names[locale],
        topicGroup: item.topicGroup,
        slug: item.slug,
        order: item.order
      }))
  );

export const getCategoryTreeByLocale = (
  locale: AppLocale,
  parentCategoryId: string | null = null
): CategoryTreeNode[] =>
  getChildCategories(locale, parentCategoryId).map((category) => ({
    ...category,
    children: getCategoryTreeByLocale(locale, category.id)
  }));

export const getArticlesByLocale = (locale: AppLocale) =>
  articles.filter((article) => article.locale === locale);

export const getLogEntriesByLocale = (locale: AppLocale) =>
  articles.filter((article) => article.locale === locale && article.path.includes(locale === "zh-TW" ? "/logs/" : "/en/logs/"));

export const getArticlesByCategory = (locale: AppLocale, categoryId: string) => {
  const matchedIds = new Set([categoryId, ...collectDescendantIds(categoryId)]);

  return articles.filter(
    (article) => article.locale === locale && article.categoryIds.some((item) => matchedIds.has(item))
  );
};

export const getArticleBySlug = (locale: AppLocale, slug: string) =>
  articles.find((article) => article.locale === locale && article.path.endsWith(`/${slug}`));
