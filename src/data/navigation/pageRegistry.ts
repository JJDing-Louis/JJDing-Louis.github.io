export interface PageRegistryItem {
  id: string;
  locale: "zh-TW" | "en";
  title: string;
  path: string;
  pageType: "home" | "log-index" | "note-index" | "note-category" | "product-index";
  legacyPaths?: string[];
}

export const pageRegistry: PageRegistryItem[] = [
  { id: "home", locale: "zh-TW", title: "Home", path: "/", pageType: "home", legacyPaths: ["/index.html"] },
  { id: "home", locale: "en", title: "Home", path: "/en", pageType: "home" },
  { id: "logs", locale: "zh-TW", title: "日誌", path: "/logs", pageType: "log-index" },
  { id: "logs", locale: "en", title: "Logs", path: "/en/logs", pageType: "log-index" },
  { id: "notes", locale: "zh-TW", title: "Learning Note", path: "/notes", pageType: "note-index" },
  { id: "notes", locale: "en", title: "Learning Note", path: "/en/notes", pageType: "note-index" },
  { id: "products", locale: "zh-TW", title: "Product", path: "/products", pageType: "product-index" },
  { id: "products", locale: "en", title: "Product", path: "/en/products", pageType: "product-index" }
];
