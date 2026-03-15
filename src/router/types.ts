export type AppLocale = "zh-TW" | "en";

export interface AppRouteMeta {
  locale: AppLocale;
  pageId: string;
  layout: "site";
}
