export interface PageRegistryItem {
  id: string;
  locale: "zh-TW" | "en";
  title: string;
  path: string;
  pageType: "home" | "about" | "log-index" | "note-index" | "note-category" | "product-index";
  legacyPaths?: string[];
}

export const pageRegistry: PageRegistryItem[] = [
  { id: "home", locale: "zh-TW", title: "首頁", path: "/", pageType: "home", legacyPaths: ["/index.html"] },
  { id: "home", locale: "en", title: "Home", path: "/en", pageType: "home" },
  { id: "about", locale: "zh-TW", title: "關於我", path: "/about", pageType: "about" },
  { id: "about", locale: "en", title: "About me", path: "/en/about", pageType: "about" },
  { id: "logs", locale: "zh-TW", title: "日誌", path: "/logs", pageType: "log-index" },
  { id: "logs", locale: "en", title: "Logs", path: "/en/logs", pageType: "log-index" },
  { id: "notes", locale: "zh-TW", title: "學習筆記", path: "/notes", pageType: "note-index" },
  { id: "notes", locale: "en", title: "Learning Note", path: "/en/notes", pageType: "note-index" },
  { id: "products", locale: "zh-TW", title: "Side Project", path: "/products", pageType: "product-index" },
  { id: "products", locale: "en", title: "Product", path: "/en/products", pageType: "product-index" }
];
