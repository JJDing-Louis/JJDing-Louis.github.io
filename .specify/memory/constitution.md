<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
  - 模板原則 1 -> I. Vue 元件化架構優先
  - 模板原則 2 -> II. 內容資料與 UI 分離
  - 模板原則 3 -> III. 統一版型與導覽一致性
  - 模板原則 4 -> IV. 可重用元件與可擴充內容模型
  - 模板原則 5 -> V. 靜態部署與 GitHub Pages 相容性
- Added sections:
  - 技術標準
  - 開發流程與品質關卡
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ updated: .specify/templates/plan-template.md
  - ✅ updated: .specify/templates/spec-template.md
  - ✅ updated: .specify/templates/tasks-template.md
  - ✅ not applicable: .specify/templates/commands/*.md (目錄不存在)
- Follow-up TODOs:
  - None
-->
# JJDing-Louis.github.io Constitution

## Core Principles

### I. Vue 元件化架構優先
本專案後續的前端重構 MUST 以 Vue component 架構為標準方向。任何新頁面、
新版頁面或共用區塊 MUST 優先拆分為具明確責任的元件，包含 `Layout`、
`Header`、`Menu`、`Content`、`Footer` 與文章呈現元件。禁止以複製整頁 HTML
的方式新增功能；若暫時保留舊版純 HTML，亦 MUST 視為待遷移資產並避免擴散。
理由：元件化是降低重複標記、提升維護效率與支援後續擴充的必要前提。

### II. 內容資料與 UI 分離
UI 結構、樣式與內容資料 MUST 分離管理。教學文章 MUST 以 Markdown 或等價的
純內容格式管理，文章 metadata、分類與導覽資料 MUST 儲存在可序列化的資料層，
不得將長篇內容直接硬編碼進 Vue 元件。UI 元件只負責呈現與互動，不得承擔內容
編輯職責。理由：內容與介面解耦後，才能同時支援擴充文章、重用版型與後續內容
處理流程。

### III. 統一版型與導覽一致性
所有正式頁面 MUST 使用統一 Layout 與一致的資訊架構。`Header`、`Menu`、
`Content`、`Footer` 的位置、命名與互動模式 MUST 在全站保持一致；若有例外，
必須在規格中說明使用情境與理由。任何新功能不得自行建立與主站導覽脫節的頁面
骨架。理由：技術筆記站與履歷頁同屬單一網站體驗，一致的版型能降低認知成本並
避免重工。

### IV. 可重用元件與可擴充內容模型
共用區塊 MUST 抽象為可重用元件，至少包含 `Menu component`、`Article component`
與 `Layout component`。教學分類、文章列表與履歷區塊 MUST 採用可擴充資料模型，
新增分類或文章時不得要求改寫既有版型結構。若功能需求造成重複元件分支，
必須先證明無法以 props、slots 或資料配置解決。理由：重用與可擴充性直接決定
此網站能否持續成長而不回到手工維護多份 HTML 的模式。

### V. 靜態部署與 GitHub Pages 相容性
本專案產出 MUST 維持為可直接部署到 GitHub Pages 的靜態網站。技術選型 MUST
支援靜態建置與相對路徑部署，不得引入需要長駐伺服器、動態後端渲染或 GitHub
Pages 無法承載的執行環境。新增工具鏈、路由或資產處理時，MUST 驗證可輸出為
靜態檔案並於 GitHub Pages 正常運作。理由：部署模型是此專案的硬限制，任何違反
此限制的設計都會讓重構成果無法上線。

## 技術標準

- 專案結構 MUST 明確區分 `components/`、`layouts/`、`content/`、`data/`、
  `pages/` 或等價目錄，讓 UI、內容與導覽資料各自獨立。
- Markdown 文章 MUST 保持可批次處理與可搬移性；文章來源不得依賴單一元件內的
  私有格式。
- 共用樣式與版型 token MUST 集中管理，避免頁面各自定義 Header、Menu 與 Footer
  變體。
- 若保留既有純 HTML 頁面作為過渡方案，MUST 記錄遷移範圍與淘汰順序，避免新內容
  同時寫入舊架構與新架構。

## 開發流程與品質關卡

- 每份功能規格 MUST 說明是否影響共用 Layout、導覽資料、Markdown 內容流程與
  GitHub Pages 部署行為。
- 每份實作計畫 MUST 在開始前通過憲章檢查，確認沒有違反 Vue 元件化、內容分離、
  統一版型與靜態部署限制。
- 每份任務清單 MUST 顯式列出共用元件調整、內容資料結構調整、靜態部署驗證與
  受影響頁面的人工檢查工作。
- 合併前審查 MUST 驗證：新頁面是否沿用統一 Layout、內容是否仍以 Markdown 或
  資料層管理、分類擴充是否不需重寫版型、靜態輸出是否可部署到 GitHub Pages。

## Governance

本憲章優先於其他開發慣例與臨時做法。任何修訂 MUST 透過文件變更提出，並同步
更新受影響的模板、流程文件與執行指引。版本號採語意化版本控制：新增原則或
擴充強制流程時遞增 MINOR，刪除或重新定義既有原則時遞增 MAJOR，純文字澄清與
不改變治理含義的修正遞增 PATCH。每次規格審查、實作計畫與合併審查 MUST 執行
一次憲章符合性檢查；若發現不符合，相關文件或實作不得視為完成，直到例外被
明確記錄並經修訂批准。

**Version**: 1.0.0 | **Ratified**: 2026-03-15 | **Last Amended**: 2026-03-15

