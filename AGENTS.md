# Repository Guidelines

## Project Structure & Module Organization
此倉庫是靜態個人網站。根目錄的 `index.html`、`header.html`、`footer.html`、`aside.html` 為主要頁面與共用片段。樣式放在 `css/`，依頁面或功能分層，例如 `css/Common/`、`css/ProgramNote/Basic/Python/`。腳本放在 `js/`，第三方函式庫如 jQuery、Bootstrap 也直接存放於此。內容頁集中在 `html/ProgramNote/...`，圖片與 Logo 放在 `img/`，需求與檢查清單放在 `specs/`。

## Build, Test, and Development Commands
此專案不需要編譯流程，直接以靜態伺服器預覽即可。

- `python -m http.server 8000`：在專案根目錄啟動本機伺服器。
- `start http://localhost:8000`：於 Windows 開啟瀏覽器預覽首頁。
- `git status`：提交前確認是否只包含預期修改。

若使用 VS Code，也可用 Live Server 預覽；提交前請至少手動檢查首頁與受影響頁面。

## Coding Style & Naming Conventions
HTML、CSS、JavaScript 目前以 2 空白縮排為主，花括號多採換行風格，請維持既有格式。檔名以功能或頁面名稱命名，例如 `programnoteoutline.html`、`Python-Ch01 基本程式設計.html`。新增資源時，優先沿用既有資料夾分層；共用邏輯放 `js/Common/`，共用樣式放 `css/Common/`。

## Testing Guidelines
目前沒有自動化測試框架，驗證以人工檢查為主。修改後請確認：

- 導覽、側邊欄與共用片段可正常載入。
- 受影響頁面的連結、圖片與樣式路徑正確。
- `specs/001-portfolio-site-refactor/` 內的檢查項目若有涉及本次修改，需一併對照。

## Commit & Pull Request Guidelines
Git 歷史同時存在中文描述與簡短英文提交，例如 `移除不必要得連結與修正路徑`、`Start Refactor`。後續請統一使用精簡中文提交訊息，直接描述變更內容，例如 `修正首頁側邊欄載入路徑`。Pull Request 應包含變更摘要、影響頁面、手動驗證結果；若涉及版面調整，附上截圖。

## Security & Configuration Tips
`.env` 屬本機設定，不要在文件或提交中暴露敏感資訊。新增圖片、函式庫或 HTML 頁面時，優先使用相對路徑，避免部署到 GitHub Pages 後發生資源失效。
