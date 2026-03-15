export interface CategoryItem {
  id: string;
  parentCategoryId: string | null;
  topicGroup: "language" | "database" | "other";
  names: {
    "zh-TW": string;
    en: string;
  };
  slug: string;
  order: number;
}

export const categories: CategoryItem[] = [
  { id: "python", parentCategoryId: null, topicGroup: "language", names: { "zh-TW": "Python", en: "Python" }, slug: "python", order: 1 },
  { id: "csharp", parentCategoryId: null, topicGroup: "language", names: { "zh-TW": "C#", en: "C#" }, slug: "csharp", order: 2 },
  { id: "java", parentCategoryId: null, topicGroup: "language", names: { "zh-TW": "Java", en: "Java" }, slug: "java", order: 3 },
  { id: "database", parentCategoryId: null, topicGroup: "database", names: { "zh-TW": "資料庫", en: "Databases" }, slug: "databases", order: 4 },
  { id: "other", parentCategoryId: null, topicGroup: "other", names: { "zh-TW": "其他", en: "Other" }, slug: "other", order: 5 }
];
