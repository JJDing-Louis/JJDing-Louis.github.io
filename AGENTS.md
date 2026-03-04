# Repository Guidelines

## 專案結構與模組組織
此儲存庫為靜態個人網站專案。
- `index.html`：主首頁。
- `html/`：內容頁面（例如 `html/ProgramNote/Basic/Python/`）。
- `css/`：頁面樣式與共用樣式（`css/Common/allpage.css`、`css/index.css`）。
- `js/`：頁面腳本與共用腳本（`js/Common/allpage.js`、`js/index.js`）。
- `img/`：Logo、個人照片與其他靜態資產。
- `header.html`、`footer.html`、`aside.html` 等共用片段由 jQuery 動態載入。

新增檔案請放在相對應功能目錄（例如 Python 筆記資產放在既有 `ProgramNote/Basic/Python/` 路徑下）。

## 建置、測試與開發指令
本專案不需建置流程，檔案可直接由靜態伺服器提供。
- `python -m http.server 8000`：在專案根目錄啟動本機靜態伺服器。
- `start http://localhost:8000`：在 Windows 開啟網站。
- `git status` / `git diff`：提交前確認僅有預期檔案被修改。

若使用其他本機伺服器，請維持相對路徑設定不變。

## 程式風格與命名慣例
- CSS/JS 使用 2 空白縮排，HTML 使用 4 空白縮排，並與現有檔案一致。
- 保留既有目錄命名模式（`ProgramNote/Basic/<主題>`）。
- 檔名需具描述性且對應頁面範圍，例如 `Python-Ch03 迴圈敘述.html`。
- 以現有 `js/` 中的簡單 jQuery + 原生 JavaScript 寫法為主。
- 未經 PR 討論，不新增框架或打包工具。

## 測試指引
目前尚未導入自動化測試。
- 以桌機與手機寬度手動檢查變更頁面。
- 確認共用片段（`header`、`footer`、`aside`）仍可正常載入。
- 檢查瀏覽器主控台是否有 JavaScript 錯誤，並確認連結與圖片可正常顯示。

若為內容量較大的修改，至少驗證 `index.html` 與 `html/` 下一個受影響頁面。

## Commit 與 Pull Request 規範
既有 Git 歷史以簡短、任務導向的訊息為主（例如 `Start Refactor`、`修正路徑`）。
- Commit 標題請使用精簡祈使句，且每次提交語言一致（建議使用繁體中文）。
- 一個 Commit 僅處理一項邏輯變更。
- PR 需包含：修改目的、變更路徑、手動測試紀錄；若有介面調整請附截圖。
- 有對應議題或任務時，請附上連結。
