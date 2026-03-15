import type { RouteRecordRaw } from "vue-router";
import type { AppRouteMeta } from "./types";

const routeMeta = (locale: AppRouteMeta["locale"], pageId: string) => ({
  locale,
  pageId,
  layout: "site"
}) as Record<string, unknown>;

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home-zh-tw",
    component: () => import("@/pages/zh-tw/HomePage.vue"),
    meta: routeMeta("zh-TW", "home")
  },
  {
    path: "/en",
    name: "home-en",
    component: () => import("@/pages/en/HomePage.vue"),
    meta: routeMeta("en", "home")
  },
  {
    path: "/logs",
    name: "logs-zh-tw",
    component: () => import("@/pages/zh-tw/logs/LogIndexPage.vue"),
    meta: routeMeta("zh-TW", "logs")
  },
  {
    path: "/en/logs",
    name: "logs-en",
    component: () => import("@/pages/en/logs/LogIndexPage.vue"),
    meta: routeMeta("en", "logs")
  },
  {
    path: "/notes",
    name: "notes-zh-tw",
    component: () => import("@/pages/zh-tw/notes/NotesIndexPage.vue"),
    meta: routeMeta("zh-TW", "notes")
  },
  {
    path: "/en/notes",
    name: "notes-en",
    component: () => import("@/pages/en/notes/NotesIndexPage.vue"),
    meta: routeMeta("en", "notes")
  },
  {
    path: "/notes/:categoryId",
    name: "note-category-zh-tw",
    component: () => import("@/pages/zh-tw/notes/CategoryPage.vue"),
    meta: routeMeta("zh-TW", "note-category")
  },
  {
    path: "/en/notes/:categoryId",
    name: "note-category-en",
    component: () => import("@/pages/en/notes/CategoryPage.vue"),
    meta: routeMeta("en", "note-category")
  },
  {
    path: "/notes/python/:slug",
    name: "note-article-zh-tw",
    component: () => import("@/pages/zh-tw/notes/ArticlePage.vue"),
    meta: routeMeta("zh-TW", "note-article")
  },
  {
    path: "/en/notes/python/:slug",
    name: "note-article-en",
    component: () => import("@/pages/en/notes/ArticlePage.vue"),
    meta: routeMeta("en", "note-article")
  },
  {
    path: "/products",
    name: "products-zh-tw",
    component: () => import("@/pages/zh-tw/products/ProductIndexPage.vue"),
    meta: routeMeta("zh-TW", "products")
  },
  {
    path: "/en/products",
    name: "products-en",
    component: () => import("@/pages/en/products/ProductIndexPage.vue"),
    meta: routeMeta("en", "products")
  }
];
