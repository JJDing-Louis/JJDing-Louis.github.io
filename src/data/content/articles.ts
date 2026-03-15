import { legacyPythonBodies } from "@/data/content/legacyPythonBodies";
import type { AppLocale } from "@/router/types";

export interface ArticleRecord {
  id: string;
  locale: AppLocale;
  title: string;
  summary: string;
  path: string;
  categoryIds: string[];
  body: string;
}

const zhPythonArticles: ArticleRecord[] = [
  {
    id: "python-ch01",
    locale: "zh-TW",
    title: "Python Ch01 基本程式設計",
    summary: "介紹 Python 基本輸出、輸入與基礎語法。",
    path: "/notes/python/ch01-basic-programming",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh01ZhTw
  },
  {
    id: "python-ch02",
    locale: "zh-TW",
    title: "Python Ch02 選擇敘述",
    summary: "整理 if、elif、else 等選擇敘述基礎。",
    path: "/notes/python/ch02-conditional-statements",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh02ZhTw
  },
  {
    id: "python-ch03",
    locale: "zh-TW",
    title: "Python Ch03 迴圈敘述",
    summary: "介紹 for、while 與迴圈控制。",
    path: "/notes/python/ch03-loops",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh03ZhTw
  },
  {
    id: "python-ch04",
    locale: "zh-TW",
    title: "Python Ch04 進階流程控制",
    summary: "整理進階流程控制與程式結構。",
    path: "/notes/python/ch04-advanced-flow-control",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh04ZhTw
  },
  {
    id: "python-ch05",
    locale: "zh-TW",
    title: "Python Ch05 函式",
    summary: "介紹函式定義、參數與回傳值。",
    path: "/notes/python/ch05-functions",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh05ZhTw
  },
  {
    id: "python-ch06",
    locale: "zh-TW",
    title: "Python Ch06 串列",
    summary: "整理串列的建立、操作與常用方法。",
    path: "/notes/python/ch06-lists",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh06ZhTw
  },
  {
    id: "python-ch07",
    locale: "zh-TW",
    title: "Python Ch07 數組、集合、辭典",
    summary: "介紹 tuple、set 與 dictionary 的基本觀念。",
    path: "/notes/python/ch07-tuples-sets-dictionaries",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh07ZhTw
  },
  {
    id: "python-ch08",
    locale: "zh-TW",
    title: "Python Ch08 字串",
    summary: "整理字串操作、格式化與常見函式。",
    path: "/notes/python/ch08-strings",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh08ZhTw
  },
  {
    id: "python-ch09",
    locale: "zh-TW",
    title: "Python Ch09 檔案與異常處理",
    summary: "介紹檔案讀寫與異常處理基礎。",
    path: "/notes/python/ch09-files-and-exceptions",
    categoryIds: ["python-basic"],
    body: legacyPythonBodies.pythonCh09ZhTw
  }
];

const enPythonArticles: ArticleRecord[] = zhPythonArticles.map((article) => ({
  ...article,
  locale: "en",
  title: article.title.replace("基本程式設計", "Basic Programming").replace("選擇敘述", "Conditional Statements").replace("迴圈敘述", "Loops").replace("進階流程控制", "Advanced Flow Control").replace("函式", "Functions").replace("串列", "Lists").replace("數組、集合、辭典", "Tuples, Sets, and Dictionaries").replace("字串", "Strings").replace("檔案與異常處理", "Files and Exceptions"),
  summary: `English entry for ${article.title}`,
  path: `/en${article.path}`,
  body: `<h1>${article.title}</h1><p>The original Chinese note has been restored in the Traditional Chinese section. This English page is currently a placeholder entry.</p>`
}));

const logs: ArticleRecord[] = [
  {
    id: "log-welcome-zh",
    locale: "zh-TW",
    title: "網站重構日誌",
    summary: "記錄網站從純 HTML 遷移到 Vue 靜態站點的進度。",
    path: "/logs/rebuild-journal",
    categoryIds: [],
    body: "<h1>網站重構日誌</h1><p>記錄從純 HTML 遷移到 Vue 靜態網站的過程。</p>"
  },
  {
    id: "log-welcome-en",
    locale: "en",
    title: "Site rebuild journal",
    summary: "Tracks the migration from pure HTML to a Vue static site.",
    path: "/en/logs/rebuild-journal",
    categoryIds: [],
    body: "<h1>Site rebuild journal</h1><p>Tracking the migration from pure HTML to a Vue-based static site.</p>"
  }
];

export const articles = [...logs, ...zhPythonArticles, ...enPythonArticles];

