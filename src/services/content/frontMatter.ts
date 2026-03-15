import matter from "gray-matter";

export interface FrontMatterResult {
  data: Record<string, unknown>;
  content: string;
}

export const parseFrontMatter = (raw: string): FrontMatterResult => {
  const parsed = matter(raw);

  return {
    data: parsed.data,
    content: parsed.content
  };
};
