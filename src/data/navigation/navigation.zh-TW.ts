export interface NavigationItem {
  id: string;
  parentId: string | null;
  order: number;
  label: string;
  targetPath: string | null;
  itemType: "internal-page" | "external-link" | "group";
  visible: boolean;
}

export const navigationZhTw: NavigationItem[] = [
  { id: "home", parentId: null, order: 1, label: "Home", targetPath: "/", itemType: "internal-page", visible: true },
  { id: "logs", parentId: null, order: 2, label: "日誌", targetPath: "/logs", itemType: "internal-page", visible: true },
  { id: "notes", parentId: null, order: 3, label: "Learning Note", targetPath: null, itemType: "group", visible: true },
  { id: "notes-language", parentId: "notes", order: 1, label: "程式語言", targetPath: "/notes", itemType: "group", visible: true },
  { id: "notes-python", parentId: "notes-language", order: 1, label: "Python", targetPath: "/notes/python", itemType: "internal-page", visible: true },
  { id: "notes-csharp", parentId: "notes-language", order: 2, label: "C#", targetPath: "/notes/csharp", itemType: "internal-page", visible: true },
  { id: "notes-java", parentId: "notes-language", order: 3, label: "Java", targetPath: "/notes/java", itemType: "internal-page", visible: true },
  { id: "notes-database", parentId: "notes", order: 2, label: "資料庫", targetPath: "/notes/databases", itemType: "internal-page", visible: true },
  { id: "notes-other", parentId: "notes", order: 3, label: "其他", targetPath: "/notes/other", itemType: "internal-page", visible: true },
  { id: "products", parentId: null, order: 4, label: "Product", targetPath: "/products", itemType: "internal-page", visible: true },
  { id: "github", parentId: null, order: 5, label: "GitHub", targetPath: "https://github.com/JJDing-Louis", itemType: "external-link", visible: true }
];
