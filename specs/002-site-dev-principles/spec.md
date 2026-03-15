# Feature Specification: GitHub Pages 技術教學網站重構

**Feature Branch**: `002-site-dev-principles`
**Created**: 2026-03-15
**Status**: Draft
**Input**: User description: "我要重構我的 GitHub Pages 技術教學網站，解決頁面風格不一致、首頁缺少分類入口與純 HTML 難維護的問題，並以一致 Layout、可擴充分類、首頁資訊整合與 GitHub Pages 部署相容為核心目標。"

## Problem Statement

現有網站以純 HTML 維護，導致頁面風格不一致、首頁缺少清楚的分類入口，
也使後續新增教學內容、擴充分類與調整共用版面時成本偏高。這些問題降低了
內容瀏覽效率，並增加網站長期維護與重構風險。

## Clarifications

### Session 2026-03-15
- Q: 首次重構是否需要搬移所有既有頁面與文章？ → A: 首次重構就搬完所有既有頁面與文章。
- Q: 既有網址是否必須保留相容？ → A: 可調整網址，但舊網址需導向到新頁面。
- Q: Product 區塊首次上線需要完整專案詳情頁嗎？ → A: Product 先提供摘要卡片與連結，詳情頁可後續補上。
- Q: 首頁 GitHub 區塊需要多即時的資料？ → A: 每次網站更新或載入時，都要反映最新的 GitHub 資訊。
- Q: 首版網站語系範圍是什麼？ → A: 首版支援中英雙語切換。
## User Goals

- 訪客可以在首頁快速理解站主背景、常用技術與近期 GitHub 活動。
- 訪客可以透過一致的導覽結構快速進入日誌、教學分類、作品集與 GitHub 頁面。
- 訪客可在首版網站中切換中英文介面，並以一致方式瀏覽導覽與主要內容入口。
- 訪客可在 Product 區塊先瀏覽專案摘要與連結，完整專案詳情頁可在後續階段擴充。
- 站主可以在不重做頁面骨架的前提下，持續新增教學分類、文章與作品內容。
- 網站更新後仍可維持靜態部署流程並順利發布到 GitHub Pages。
- 首次重構版本需涵蓋所有既有正式頁面與文章內容，不能只交付部分新舊並存的正式站點。
- 網址結構可調整，但既有網址必須提供可用的導向機制以維持既有連結可達性。

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 首頁快速導覽 (Priority: P1)

作為首次進入網站的訪客，我想在首頁立即看到站主簡介、常用程式語言、
近期 GitHub repository 更新與 contributions 圖，並能快速進入主要分類，
以便在最短時間內判斷網站內容與價值。

**Why this priority**: 首頁是所有流量的主要入口，若不能快速建立導覽與內容認知，
其他教學與作品頁面的價值難以被發現。

**Independent Test**: 開啟首頁後，訪客可在單一頁面內看到個人摘要、技術摘要、
GitHub 活動摘要與主要分類入口，並於 3 次點擊內進入任一核心區塊。

**Acceptance Scenarios**:

1. **Given** 訪客首次進入首頁，**When** 頁面載入完成，**Then** 訪客可看到簡單工作經歷、常用程式語言、最近更新的 repositories 與 contributions 圖。
2. **Given** 訪客停留在首頁，**When** 想前往教學分類或作品頁，**Then** 可直接從首頁或主導覽找到清楚入口。

---

### User Story 2 - 分類導覽與文章探索 (Priority: P1)

作為想閱讀技術教學的訪客，我想透過一致的 Menu 展開語言、資料庫與其他主題，
以便快速找到特定分類與子分類內容。

**Why this priority**: 分類導覽是技術內容網站的核心使用路徑，若結構不清楚，
訪客很難有效探索內容。

**Independent Test**: 訪客可從任一頁面進入 Menu，看到 Home、日誌、Learning Note、
Product 與 GitHub 等主項目，並能逐層展開至指定子分類。

**Acceptance Scenarios**:

1. **Given** 訪客正在瀏覽任一頁面，**When** 開啟主選單，**Then** 可看到統一的多層級導覽結構。
2. **Given** 訪客想找 Python Django 教學，**When** 依序展開 Learning Note、程式語言、Python，**Then** 可找到 Django 子分類入口。
3. **Given** 訪客想找資料庫教學，**When** 進入資料庫分類，**Then** 可看到 MSSQL、Oracle、SQLite、MySQL 與 PostgreSQL 等入口。

---

### User Story 3 - 內容維護與分類擴充 (Priority: P2)

作為網站維護者，我想在新增教學分類、文章或作品項目時，不需要重寫整體頁面版型，
以便長期維護網站並持續擴充內容。

**Why this priority**: 網站重構的價值不只在於外觀一致，也在於後續維護成本下降。

**Independent Test**: 維護者完成首次重構後，所有既有正式頁面與文章皆已搬移到新站；之後新增一個教學分類或文章項目時，不必修改多個頁面的共用骨架，網站仍能在既有導覽結構下呈現新內容。

**Acceptance Scenarios**:

1. **Given** 維護者需要新增新的教學分類，**When** 更新內容來源與分類資料，**Then** 網站導覽可顯示新分類而不需重做整體版面。
2. **Given** 維護者需要新增作品項目，**When** 更新作品內容，**Then** Product 區塊可呈現新項目且維持一致版型。

---

### Edge Cases

- 當某個教學分類暫時沒有文章時，網站仍需顯示該分類並清楚告知內容尚在整理中。
- 當 GitHub 最近更新的 repositories 無法取得時，首頁仍需顯示其他資訊並提供可理解的替代訊息，且不得阻止其他首頁區塊載入。
- 當 contributions 圖暫時無法顯示時，首頁版面不得崩壞，且不影響主要導覽使用。
- 當分類層級增加時，Menu 仍需保持可理解且可操作的展開方式。

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: 網站 MUST 以一致的視覺與資訊架構重構所有正式頁面。
- **FR-002**: 所有正式頁面 MUST 包含統一的 Header、Menu、Content 與 Footer 區塊。
- **FR-003**: 首頁 MUST 顯示站主的簡單工作經歷。
- **FR-004**: 首頁 MUST 顯示站主常用的程式語言。
- **FR-005**: 首頁 MUST 顯示最近更新的 GitHub repositories，且在每次網站更新或頁面載入時反映最新可取得資訊。
- **FR-006**: 首頁 MUST 顯示 GitHub contributions 圖，且在每次網站更新或頁面載入時反映最新可取得資訊。
- **FR-007**: 主選單 MUST 包含 Home、日誌、Learning Note、Product 與 GitHub，並支援中英雙語切換後的一致導覽命名。
- **FR-008**: Learning Note MUST 支援多層級分類，至少涵蓋程式語言、資料庫與其他主題。
- **FR-009**: 程式語言分類 MUST 支援 Python、C#、Java 與其子分類入口。
- **FR-010**: 資料庫分類 MUST 支援 MSSQL、Oracle、SQLite、MySQL 與 PostgreSQL 入口。
- **FR-011**: 其他分類 MUST 支援 Git 與 PowerShell 入口。
- **FR-012**: Product 區塊 MUST 提供至少三個專案入口。
- **FR-013**: 首次正式上線的 Product 區塊 MUST 以摘要卡片加連結形式呈現，不要求每個專案都有完整詳情頁。
- **FR-014**: 日誌內容 MUST 支援以 Markdown 文章形式管理與呈現。
- **FR-015**: 網站 MUST 允許維護者新增教學分類而不需重新設計共用頁面骨架。
- **FR-016**: 網站 MUST 允許維護者新增文章、作品與導覽項目，且新內容可遵循既有導覽規則呈現。
- **FR-017**: 首次正式重構發布 MUST 包含所有既有正式頁面與文章內容的完整搬移。
- **FR-018**: 若重構後調整網址結構，網站 MUST 提供從既有網址到新網址的導向機制。
- **FR-019**: 規格 MUST 說明是否影響共用 Layout、Header、Menu、Content、Footer 或文章呈現元件；本功能將全面影響上述共用區塊。
- **FR-020**: 規格 MUST 說明內容來源是 Markdown、資料檔或既有靜態內容；本功能將以 Markdown 與結構化內容資料作為主要來源，並完整取代既有靜態頁面內容。
- **FR-021**: 規格 MUST 說明功能是否仍可輸出為 GitHub Pages 可部署的靜態檔案；本功能要求整站維持可靜態部署。
- **FR-022**: 首版網站 MUST 支援中英雙語切換，至少涵蓋導覽、首頁核心資訊與可發布的正式頁面。

### Non-Functional Requirements

- **NFR-001**: 全站導覽與版型在所有正式頁面 MUST 保持一致，避免使用者在不同頁面遇到不同的導覽邏輯。
- **NFR-002**: 首頁主要資訊區塊 MUST 讓首次訪客能在 1 分鐘內理解站主背景、內容範圍與主要入口。
- **NFR-003**: 分類導覽 MUST 讓訪客可在 3 次點擊內進入目標主分類或子分類入口。
- **NFR-004**: 內容維護流程 MUST 支援新增分類與文章時不需大量修改既有頁面結構。
- **NFR-005**: 當部分外部內容無法顯示時，網站 MUST 維持主要內容與導覽可用，並顯示最近一次成功取得的資訊或明確替代訊息。
- **NFR-006**: 網站輸出 MUST 保持適合 GitHub Pages 的靜態部署模式。
- **NFR-007**: 任何既有對外可用網址在重構後都必須能抵達對應的新內容，不得出現正式內容遺失的失效連結。
- **NFR-008**: 中英雙語切換後，使用者在任一正式頁面都不得失去對應頁面內容或主要導覽脈絡。

### Constraints

- **C-001**: 本專案重構範圍限定為 GitHub Pages 技術教學網站。
- **C-002**: 整個網站 MUST 使用 Vue 重寫。
- **C-003**: 所有可發布頁面 MUST 使用統一 Layout，包含 Header、Menu、Content 與 Footer。
- **C-004**: 導覽結構 MUST 反映使用者提供的分類與子分類層級。
- **C-005**: 網站 MUST 可部署到 GitHub Pages，且不得依賴持續運行的伺服器能力。
- **C-006**: 首次正式上線不得以部分搬移方式縮減既有正式內容範圍。

### Key Entities *(include if feature involves data)*

- **Page**: 代表網站中的單一頁面，包含頁面識別、標題、語系版本、版型位置與對應內容來源。
- **Navigation Item**: 代表導覽中的單一節點，包含名稱、語系對應文字、層級、父子關係、顯示順序與目標頁面。
- **Category**: 代表教學分類或子分類，包含名稱、所屬主題、階層與對應內容集合。
- **Article**: 代表日誌或教學文章，包含標題、摘要、語系版本、分類、發布資訊與內容來源。
- **Project Entry**: 代表 Product 區塊中的單一專案項目，包含名稱、摘要、連結資訊，以及是否已有完整詳情頁。
- **Profile Summary**: 代表首頁中的個人資訊摘要，包含工作經歷與常用程式語言。
- **GitHub Activity**: 代表首頁展示的外部活動資訊，包含最近更新的 repositories、contributions 圖、資料取得時間與失敗替代狀態。

### Content & Layout Impact *(mandatory for site features)*

- **Layout Impact**: 本功能將重整全站共用 Layout，統一 Header、Menu、Content 與 Footer 的結構與呈現規則。
- **Content Source**: 日誌與教學內容以 Markdown 為主，導覽、分類、首頁摘要與作品資訊以結構化內容資料管理，且需支援中英雙語內容對應；既有靜態頁面內容將完整搬移。
- **Reusable Components**: 共用元件至少涵蓋 Layout、Header、Menu、Footer、Article、首頁摘要區塊、分類入口區塊與作品入口區塊。
- **Static Deployment Check**: 所有頁面與內容輸出必須可轉換為靜態網站並部署至 GitHub Pages，外部資訊無法取得時不得阻斷頁面主要功能。

### Assumptions

- 網站的主要使用者為尋找技術教學、個人背景與作品資訊的訪客，且首版即包含需要中文或英文介面的使用者。
- GitHub repositories 與 contributions 圖屬於首頁補充資訊，若暫時無法顯示，不會阻止訪客使用主要導覽與閱讀內容。
- 首次正式上線即完成所有既有正式頁面與文章搬移，後續僅針對新內容持續擴充。

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% 的首次訪客可在 1 分鐘內指出網站提供的三類核心內容：個人背景、技術教學與作品資訊。
- **SC-002**: 90% 的訪客可在 3 次點擊內從首頁或主選單進入目標主分類或子分類頁面。
- **SC-003**: 維護者新增一個教學分類或文章時，所需調整的共用頁面骨架數量為 0。
- **SC-004**: 首頁在外部 GitHub 資訊暫時不可用時，仍可完整顯示站主摘要、主要分類入口與核心導覽。
- **SC-005**: 所有正式頁面在驗收時均符合一致的 Layout 結構，且不存在獨立於共用導覽之外的正式頁面。
- **SC-006**: 100% 的 Product 項目在首版上線時都至少提供可點擊的摘要卡片與有效連結。
- **SC-007**: 首頁每次正式驗收時，顯示的 GitHub repositories 與 contributions 圖都對應當下最新可取得的資料或明確替代訊息。
- **SC-008**: 100% 的正式頁面在中英切換後都能顯示對應語系內容，或提供明確且一致的語系替代行為。






