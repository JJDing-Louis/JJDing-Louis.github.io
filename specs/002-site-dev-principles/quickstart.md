# Quickstart: GitHub Pages 技術教學網站重構

## Prerequisites

- Node.js 22 LTS
- npm 10+
- Git

## Setup

```powershell
npm install
```

## Start Development

```powershell
npm run dev
```

## Expected Development Outcomes

- 新首頁顯示個人摘要、常用語言、GitHub 活動與分類入口。
- 所有正式頁面使用統一 Layout。
- 中文與英文路由都可透過主導覽切換。
- 舊網址對應頁可導向到新網址。

## Content Authoring

1. 在 `src/content/zh-tw/` 或 `src/content/en/` 新增 Markdown 文章。
2. 依 content schema 補齊 front matter。
3. 若新增分類，同步更新 `src/data/navigation/` 與分類資料。
4. 若新增產品，更新 `src/data/products/`。

## Validation

```powershell
npm run test
npm run build
npm run preview
```

## Manual Checks

1. 檢查首頁與主要分類入口在桌面與手機版的版型一致性。
2. 檢查中英切換後是否仍在對應頁面脈絡。
3. 檢查 GitHub 活動抓取失敗時是否顯示替代訊息。
4. 檢查舊網址導向是否能抵達對應新頁面。
5. 檢查 `dist/` 輸出可作為 GitHub Pages 靜態內容部署。
