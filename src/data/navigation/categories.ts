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
  { id: "python-basic", parentCategoryId: "python", topicGroup: "language", names: { "zh-TW": "基本教學", en: "Basics" }, slug: "python-basic", order: 1 },
  { id: "python-django", parentCategoryId: "python", topicGroup: "language", names: { "zh-TW": "Django", en: "Django" }, slug: "python-django", order: 2 },
  { id: "python-other", parentCategoryId: "python", topicGroup: "language", names: { "zh-TW": "其他", en: "Other" }, slug: "python-other", order: 3 },

  { id: "csharp", parentCategoryId: null, topicGroup: "language", names: { "zh-TW": "C#", en: "C#" }, slug: "csharp", order: 2 },
  { id: "csharp-basic", parentCategoryId: "csharp", topicGroup: "language", names: { "zh-TW": "基本教學", en: "Basics" }, slug: "csharp-basic", order: 1 },
  { id: "csharp-aspnet-core", parentCategoryId: "csharp", topicGroup: "language", names: { "zh-TW": "ASP.NET Core", en: "ASP.NET Core" }, slug: "csharp-aspnet-core", order: 2 },
  { id: "csharp-winform", parentCategoryId: "csharp", topicGroup: "language", names: { "zh-TW": "WinForm", en: "WinForm" }, slug: "csharp-winform", order: 3 },
  { id: "csharp-other", parentCategoryId: "csharp", topicGroup: "language", names: { "zh-TW": "其他", en: "Other" }, slug: "csharp-other", order: 4 },

  { id: "java", parentCategoryId: null, topicGroup: "language", names: { "zh-TW": "Java", en: "Java" }, slug: "java", order: 3 },
  { id: "java-basic", parentCategoryId: "java", topicGroup: "language", names: { "zh-TW": "基本教學", en: "Basics" }, slug: "java-basic", order: 1 },
  { id: "java-spring", parentCategoryId: "java", topicGroup: "language", names: { "zh-TW": "Spring", en: "Spring" }, slug: "java-spring", order: 2 },
  { id: "java-swing", parentCategoryId: "java", topicGroup: "language", names: { "zh-TW": "Swing", en: "Swing" }, slug: "java-swing", order: 3 },
  { id: "java-other", parentCategoryId: "java", topicGroup: "language", names: { "zh-TW": "其他", en: "Other" }, slug: "java-other", order: 4 },

  { id: "database", parentCategoryId: null, topicGroup: "database", names: { "zh-TW": "資料庫", en: "Databases" }, slug: "database", order: 4 },
  { id: "database-mssql", parentCategoryId: "database", topicGroup: "database", names: { "zh-TW": "MSSQL", en: "MSSQL" }, slug: "database-mssql", order: 1 },
  { id: "database-oracle", parentCategoryId: "database", topicGroup: "database", names: { "zh-TW": "Oracle", en: "Oracle" }, slug: "database-oracle", order: 2 },
  { id: "database-sqlite", parentCategoryId: "database", topicGroup: "database", names: { "zh-TW": "SQLite", en: "SQLite" }, slug: "database-sqlite", order: 3 },
  { id: "database-mysql", parentCategoryId: "database", topicGroup: "database", names: { "zh-TW": "MySQL", en: "MySQL" }, slug: "database-mysql", order: 4 },
  { id: "database-postgresql", parentCategoryId: "database", topicGroup: "database", names: { "zh-TW": "PostgreSQL", en: "PostgreSQL" }, slug: "database-postgresql", order: 5 },

  { id: "other", parentCategoryId: null, topicGroup: "other", names: { "zh-TW": "其他", en: "Other" }, slug: "other", order: 5 },
  { id: "other-git", parentCategoryId: "other", topicGroup: "other", names: { "zh-TW": "Git", en: "Git" }, slug: "other-git", order: 1 },
  { id: "other-powershell", parentCategoryId: "other", topicGroup: "other", names: { "zh-TW": "PowerShell", en: "PowerShell" }, slug: "other-powershell", order: 2 }
];
