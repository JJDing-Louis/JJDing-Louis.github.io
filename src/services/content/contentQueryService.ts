import { articles } from "@/data/content/articles";
import { categories } from "@/data/navigation/categories";
import { navigationZhTw } from "@/data/navigation/navigation.zh-TW";
import { navigationEn } from "@/data/navigation/navigation.en";
import type { AppLocale } from "@/router/types";

export type ArticleListItem = (typeof articles)[number];

export const getNavigationByLocale = (locale: AppLocale) =>
  locale === "zh-TW" ? navigationZhTw : navigationEn;

export const getCategoriesByLocale = (locale: AppLocale) =>
  categories.map((category) => ({
    id: category.id,
    name: category.names[locale],
    topicGroup: category.topicGroup,
    slug: category.slug,
    order: category.order
  }));

export const getArticlesByLocale = (locale: AppLocale) =>
  articles.filter((article) => article.locale === locale);

export const getLogEntriesByLocale = (locale: AppLocale) =>
  articles.filter((article) => article.locale === locale && article.path.includes(locale === "zh-TW" ? "/logs/" : "/en/logs/"));

export const getArticlesByCategory = (locale: AppLocale, categoryId: string) =>
  articles.filter((article) => article.locale === locale && article.categoryIds.includes(categoryId));

export const getArticleBySlug = (locale: AppLocale, slug: string) =>
  articles.find((article) => article.locale === locale && article.path.endsWith(`/${slug}`));
