# Contract: Routing and Localization Contract

## Purpose

定義雙語頁面與舊網址導向的路由契約。

## Route Rules

- 預設語系 `zh-TW` 使用根路徑與既有主要內容路徑。
- 英文語系使用 `/en/` 前綴。
- 所有正式發布頁面都必須有穩定的 `pageId + locale + path` 對應。
- 語系切換不得導向不存在的頁面；若對應內容尚缺，需套用一致的替代規則。

## Redirect Rules

- 每個既有正式網址必須映射到唯一新網址。
- 靜態輸出需產生對應導向頁，供 GitHub Pages 直接服務。
- Redirect mapping 只能指向 `published` 頁面。
