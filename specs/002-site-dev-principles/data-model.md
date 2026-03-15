# Data Model: GitHub Pages 技術教學網站重構

## 1. Page

- **Purpose**: 定義網站中的單一正式頁面與其語系版本。
- **Fields**:
  - `id`: 唯一識別值，跨語系共用。
  - `locale`: `zh-TW` 或 `en`。
  - `slug`: 該語系下的路徑片段。
  - `path`: 實際可發布網址。
  - `title`: 頁面標題。
  - `pageType`: `home`、`log`、`note-index`、`note-article`、`product-index`、`github-link`。
  - `layoutKey`: 對應的共用版型識別。
  - `status`: `draft`、`published`、`archived`。
  - `contentRef`: 指向 Markdown 或結構化資料來源。
  - `legacyPaths[]`: 需導向到此頁面的既有網址列表。
- **Validation Rules**:
  - `id + locale` 必須唯一。
  - `path` 在同一語系下不可重複。
  - `published` 頁面必須具備 `layoutKey` 與有效 `contentRef`。
- **State Transitions**:
  - `draft -> published -> archived`

## 2. Navigation Item

- **Purpose**: 定義多層級導覽節點與雙語標籤。
- **Fields**:
  - `id`
  - `parentId`，根節點可為空。
  - `order`
  - `labels.zh-TW`
  - `labels.en`
  - `targetPageId`
  - `targetPath`
  - `itemType`: `internal-page`、`external-link`、`group`
  - `visible`: 布林值
- **Relationships**:
  - 一個 `Navigation Item` 可有多個子節點。
  - 可對應 0 或 1 個 `Page`。
- **Validation Rules**:
  - 同一父節點下 `order` 不可重複。
  - 發布中的節點必須同時具有中英文標籤。

## 3. Category

- **Purpose**: 表示 Learning Note 與其他知識分類。
- **Fields**:
  - `id`
  - `parentCategoryId`
  - `topicGroup`: `language`、`database`、`other`
  - `names.zh-TW`
  - `names.en`
  - `slug`
  - `description`
  - `order`
  - `status`
- **Relationships**:
  - 一個 `Category` 可包含多個子分類。
  - 一個 `Category` 可關聯多篇 `Article`。
- **Validation Rules**:
  - `slug` 在同一父層級下唯一。
  - 發布中的分類必須能從導覽樹或分類頁進入。

## 4. Article

- **Purpose**: 表示日誌或技術教學文章。
- **Fields**:
  - `id`
  - `locale`
  - `title`
  - `summary`
  - `categoryIds[]`
  - `tags[]`
  - `publishedAt`
  - `updatedAt`
  - `author`
  - `sourcePath`
  - `status`
  - `legacyPaths[]`
- **Relationships**:
  - 可隸屬一個以上 `Category`。
  - 對應一個 `Page`。
- **Validation Rules**:
  - `published` 文章必須有標題、摘要、至少一個分類與有效來源檔。
  - 同語系同 `slug` 不可重複。
- **State Transitions**:
  - `draft -> published -> archived`

## 5. Project Entry

- **Purpose**: 表示 Product 區塊中的單一專案卡片。
- **Fields**:
  - `id`
  - `names.zh-TW`
  - `names.en`
  - `summary.zh-TW`
  - `summary.en`
  - `primaryLink`
  - `linkType`: `internal`、`external`
  - `hasDetailPage`
  - `sortOrder`
  - `status`
- **Validation Rules**:
  - 首版 `published` 項目必須有摘要與有效連結。
  - `hasDetailPage = false` 時仍需提供摘要卡片內容。

## 6. Profile Summary

- **Purpose**: 首頁展示的個人摘要。
- **Fields**:
  - `workExperience[]`
  - `primaryLanguages[]`
  - `intro.zh-TW`
  - `intro.en`
- **Validation Rules**:
  - 首頁發布前必須至少包含一則工作經歷與一組常用語言。

## 7. GitHub Activity Snapshot

- **Purpose**: 首頁使用的 GitHub 活動即時資料與快取備援。
- **Fields**:
  - `username`
  - `repositories[]`
  - `contributionGraphUrl`
  - `lastFetchedAt`
  - `fetchStatus`: `success`、`fallback`、`error`
  - `fallbackMessage`
- **Validation Rules**:
  - `repositories` 最多顯示首頁設計允許的筆數。
  - `fetchStatus = fallback` 或 `error` 時必須有替代訊息。

## 8. Redirect Mapping

- **Purpose**: 維護舊網址到新網址的對映。
- **Fields**:
  - `legacyPath`
  - `targetPath`
  - `redirectType`: `meta-refresh`、`script`
  - `locale`
  - `status`
- **Validation Rules**:
  - 每個既有正式網址必須對應唯一目標。
  - 指向已發布頁面的 mapping 才可輸出。
