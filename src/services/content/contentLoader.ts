import { parseFrontMatter } from "./frontMatter";
import type { AppLocale } from "@/router/types";

const modules = import.meta.glob("/src/content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
}) as Record<string, string>;

export interface LoadedContent {
  metadata: Record<string, unknown>;
  body: string;
  sourcePath: string;
}

export const loadMarkdownEntries = (locale: AppLocale): LoadedContent[] => {
  const localePath = locale === "zh-TW" ? "/src/content/zh-tw/" : "/src/content/en/";

  return Object.entries(modules)
    .filter(([path]) => path.includes(localePath))
    .map(([sourcePath, raw]) => {
      const parsed = parseFrontMatter(raw);
      return {
        metadata: parsed.data,
        body: parsed.content,
        sourcePath
      };
    });
};

export const loadMarkdownContent = async (loader: () => Promise<string>): Promise<LoadedContent> => {
  const raw = await loader();
  const parsed = parseFrontMatter(raw);

  return {
    metadata: parsed.data,
    body: parsed.content,
    sourcePath: "inline"
  };
};
