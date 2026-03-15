import type { NavigationItem } from "./navigation.zh-TW";

export const navigationEn: NavigationItem[] = [
  { id: "home", parentId: null, order: 1, label: "Home", targetPath: "/en", itemType: "internal-page", visible: true },
  { id: "logs", parentId: null, order: 2, label: "Logs", targetPath: "/en/logs", itemType: "internal-page", visible: true },
  { id: "notes", parentId: null, order: 3, label: "Learning Note", targetPath: null, itemType: "group", visible: true },
  { id: "notes-language", parentId: "notes", order: 1, label: "Programming", targetPath: "/en/notes", itemType: "group", visible: true },
  { id: "notes-python", parentId: "notes-language", order: 1, label: "Python", targetPath: "/en/notes/python", itemType: "internal-page", visible: true },
  { id: "notes-csharp", parentId: "notes-language", order: 2, label: "C#", targetPath: "/en/notes/csharp", itemType: "internal-page", visible: true },
  { id: "notes-java", parentId: "notes-language", order: 3, label: "Java", targetPath: "/en/notes/java", itemType: "internal-page", visible: true },
  { id: "notes-database", parentId: "notes", order: 2, label: "Databases", targetPath: "/en/notes/databases", itemType: "internal-page", visible: true },
  { id: "notes-other", parentId: "notes", order: 3, label: "Other", targetPath: "/en/notes/other", itemType: "internal-page", visible: true },
  { id: "products", parentId: null, order: 4, label: "Product", targetPath: "/en/products", itemType: "internal-page", visible: true },
  { id: "github", parentId: null, order: 5, label: "GitHub", targetPath: "https://github.com/JJDing-Louis", itemType: "external-link", visible: true }
];
