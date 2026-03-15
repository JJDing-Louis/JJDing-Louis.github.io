import { profileZhTw } from "@/data/profile/profile.zh-TW";
import { profileEn } from "@/data/profile/profile.en";
import { getGitHubActivity } from "@/services/github/githubActivityService";
import type { AppLocale } from "@/router/types";

export interface HomeCategoryEntry {
  label: string;
  description: string;
  href: string;
}

const categoryEntries: Record<AppLocale, HomeCategoryEntry[]> = {
  "zh-TW": [
    { label: "日誌", description: "Markdown 文章與更新紀錄", href: "/logs" },
    { label: "Learning Note", description: "程式語言、資料庫與工具筆記", href: "/notes" },
    { label: "Product", description: "作品摘要與連結入口", href: "/products" }
  ],
  en: [
    { label: "Logs", description: "Markdown posts and updates", href: "/en/logs" },
    { label: "Learning Note", description: "Programming, database, and tool notes", href: "/en/notes" },
    { label: "Product", description: "Project summaries and links", href: "/en/products" }
  ]
};

export const getHomePageModel = async (locale: AppLocale) => {
  const profile = locale === "zh-TW" ? profileZhTw : profileEn;
  const githubActivity = await getGitHubActivity();

  return {
    profile,
    githubActivity,
    categoryEntries: categoryEntries[locale]
  };
};
