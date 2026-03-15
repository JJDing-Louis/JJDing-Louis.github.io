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
  { id: "notes-language", parentId: "notes", order: 1, label: "程式語言", targetPath: "/notes/language", itemType: "group", visible: true },
  { id: "notes-python", parentId: "notes-language", order: 1, label: "Python", targetPath: "/notes/python", itemType: "group", visible: true },
  { id: "notes-python-basic", parentId: "notes-python", order: 1, label: "基本教學", targetPath: "/notes/python-basic", itemType: "internal-page", visible: true },
  { id: "notes-python-django", parentId: "notes-python", order: 2, label: "Django", targetPath: "/notes/python-django", itemType: "internal-page", visible: true },
  { id: "notes-python-other", parentId: "notes-python", order: 3, label: "其他", targetPath: "/notes/python-other", itemType: "internal-page", visible: true },
  { id: "notes-csharp", parentId: "notes-language", order: 2, label: "C#", targetPath: "/notes/csharp", itemType: "group", visible: true },
  { id: "notes-csharp-basic", parentId: "notes-csharp", order: 1, label: "基本教學", targetPath: "/notes/csharp-basic", itemType: "internal-page", visible: true },
  { id: "notes-csharp-aspnet-core", parentId: "notes-csharp", order: 2, label: "ASP.NET Core", targetPath: "/notes/csharp-aspnet-core", itemType: "internal-page", visible: true },
  { id: "notes-csharp-winform", parentId: "notes-csharp", order: 3, label: "WinForm", targetPath: "/notes/csharp-winform", itemType: "internal-page", visible: true },
  { id: "notes-csharp-other", parentId: "notes-csharp", order: 4, label: "其他", targetPath: "/notes/csharp-other", itemType: "internal-page", visible: true },
  { id: "notes-java", parentId: "notes-language", order: 3, label: "Java", targetPath: "/notes/java", itemType: "group", visible: true },
  { id: "notes-java-basic", parentId: "notes-java", order: 1, label: "基本教學", targetPath: "/notes/java-basic", itemType: "internal-page", visible: true },
  { id: "notes-java-spring", parentId: "notes-java", order: 2, label: "Spring", targetPath: "/notes/java-spring", itemType: "internal-page", visible: true },
  { id: "notes-java-swing", parentId: "notes-java", order: 3, label: "Swing", targetPath: "/notes/java-swing", itemType: "internal-page", visible: true },
  { id: "notes-java-other", parentId: "notes-java", order: 4, label: "其他", targetPath: "/notes/java-other", itemType: "internal-page", visible: true },
  { id: "notes-database", parentId: "notes", order: 2, label: "資料庫", targetPath: "/notes/database", itemType: "group", visible: true },
  { id: "notes-database-mssql", parentId: "notes-database", order: 1, label: "MSSQL", targetPath: "/notes/database-mssql", itemType: "internal-page", visible: true },
  { id: "notes-database-oracle", parentId: "notes-database", order: 2, label: "Oracle", targetPath: "/notes/database-oracle", itemType: "internal-page", visible: true },
  { id: "notes-database-sqlite", parentId: "notes-database", order: 3, label: "SQLite", targetPath: "/notes/database-sqlite", itemType: "internal-page", visible: true },
  { id: "notes-database-mysql", parentId: "notes-database", order: 4, label: "MySQL", targetPath: "/notes/database-mysql", itemType: "internal-page", visible: true },
  { id: "notes-database-postgresql", parentId: "notes-database", order: 5, label: "PostgreSQL", targetPath: "/notes/database-postgresql", itemType: "internal-page", visible: true },
  { id: "notes-other", parentId: "notes", order: 3, label: "其他", targetPath: "/notes/other", itemType: "group", visible: true },
  { id: "notes-other-git", parentId: "notes-other", order: 1, label: "Git", targetPath: "/notes/other-git", itemType: "internal-page", visible: true },
  { id: "notes-other-powershell", parentId: "notes-other", order: 2, label: "PowerShell", targetPath: "/notes/other-powershell", itemType: "internal-page", visible: true },
  { id: "products", parentId: null, order: 4, label: "Product", targetPath: "/products", itemType: "internal-page", visible: true },
  { id: "github", parentId: null, order: 5, label: "GitHub", targetPath: "https://github.com/JJDing-Louis", itemType: "external-link", visible: true }
];
