# Research: GitHub Pages 技術教學網站重構

## Decision 1: 採用 Vue 3 + Vite + TypeScript 作為重構基線

- **Decision**: 使用 Vue 3 搭配 Vite 與 TypeScript 建立新的靜態前端專案。
- **Rationale**: Vue 3 符合憲章要求的元件化方向；Vite 對靜態網站與 GitHub Pages
  友善；TypeScript 對雙語內容模型、導覽樹與搬移期間的資料映射更穩定。
- **Alternatives considered**:
  - 繼續使用純 HTML：無法解決共用版型與內容重用問題。
  - 僅使用 Vue + JavaScript：可行，但在大量路由、雙語頁面與內容 schema 上缺少型別保護。
  - 使用重型全端框架：超出 GitHub Pages 靜態部署需求。

## Decision 2: 文章與教學內容採用 Markdown + Front Matter，導覽與首頁資料採結構化資料檔

- **Decision**: 日誌與教學文章以 Markdown 管理，文章前置資訊存於 front matter；
  導覽、首頁摘要、產品與 redirect 對映以結構化資料檔維護。
- **Rationale**: 這符合憲章要求的 UI/內容分離，也讓新增分類、雙語版本與排序規則
  不需要改動元件本身。
- **Alternatives considered**:
  - 將內容直接寫在 Vue 元件內：違反憲章且難以維護。
  - 將所有資料放單一大型檔案：對雙語、分類擴充與搬移驗證不利。

## Decision 3: GitHub 活動採「頁面載入即時抓取 + 最近成功快取」策略

- **Decision**: 首頁 GitHub repositories 與 contributions 圖在頁面載入時嘗試抓取
  最新公開資料；若失敗，顯示最近一次成功取得的快取資料或明確替代訊息。
- **Rationale**: 使用者已明確要求每次網站更新或載入反映最新資訊，同時專案又必須
  保持靜態部署，因此需要 client-side refresh 與快取降級並存。
- **Alternatives considered**:
  - 僅 build-time 產生靜態快照：不符合即時性要求。
  - 僅依賴即時抓取、沒有備援：會讓首頁在 API 失敗時品質大幅下降。
  - 伺服器代理抓取：不符合 GitHub Pages 限制。

## Decision 4: 雙語採用中文預設根路徑 + 英文前綴路由

- **Decision**: 預設語系使用繁體中文根路徑，英文版本使用 `/en/` 前綴，所有正式頁面
  需有穩定的語系對應規則。
- **Rationale**: 可保留現有中文網站識別與較短的主要網址，同時清楚隔離英語內容，
  降低雙語導覽、redirect 與 canonical 對應的複雜度。
- **Alternatives considered**:
  - 所有語系都加前綴：一致但會讓既有網址搬移成本更高。
  - 僅翻譯導覽、不翻譯正式頁面：不符合已確認的雙語首版範圍。

## Decision 5: 舊網址相容採用靜態 redirect 對映檔與導向頁

- **Decision**: 為既有正式網址建立 redirect 對映資料，於靜態輸出時產生對應導向頁，
  確保舊網址仍可抵達新內容。
- **Rationale**: 使用者允許新網址結構調整，但要求舊網址仍可導向。GitHub Pages
  無伺服器 rewrite 能力，因此需以靜態 redirect 方式處理。
- **Alternatives considered**:
  - 完全保留舊網址結構：會限制新資訊架構與雙語路由設計。
  - 不處理舊網址：違反規格與非功能需求。

## Decision 6: 首版 Product 採摘要卡片 + 連結，詳頁延後

- **Decision**: 首版 Product 區塊只要求摘要卡片與有效連結，不強制每個專案有完整詳頁。
- **Rationale**: 這讓首版範圍聚焦於網站主架構、內容搬移與導覽一致性，同時保留後續
  擴充完整作品細節的空間。
- **Alternatives considered**:
  - 每個專案都做詳頁：可行，但會拉高首版搬移工期與內容整理成本。
  - 只列專案名稱：資訊價值不足，無法支援作品展示目標。
