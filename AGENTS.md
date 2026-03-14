# Repository Guidelines

## 專案結構與模組配置
此倉庫為靜態個人網站，網站入口與共用片段位於根目錄，例如 `index.html`、`header.html`、`footer.html`、`aside.html`。共用樣式與腳本集中在 `css/Common/`、`js/Common/`，頁面專屬檔案則使用對應名稱，例如 `css/index.css`、`js/index.js`。程式筆記頁面放在 `html/ProgramNote/...`，圖片資源放在 `img/`，規格與規劃文件放在 `specs/` 與 `.specify/`。

## 建置、測試與開發指令
本專案沒有 `npm`、`make` 或建置流程，開發時直接在倉庫根目錄啟動靜態伺服器：

```powershell
python -m http.server 8000
```

接著開啟 `http://localhost:8000` 檢查頁面導覽、共用片段載入與靜態資源路徑。若環境沒有 Python，可改用 VS Code Live Server 或其他靜態伺服器。

## 程式風格與命名規範
HTML、CSS、JavaScript 一律使用 2 個空白縮排，格式需與既有檔案一致。可重用邏輯放在 `css/Common/` 或 `js/Common/`，頁面專屬內容應放在對應頁面旁。檔名應清楚反映內容與位置，例如 `html/ProgramNote/Basic/Python/...`。所有文件說明與程式碼註解請使用繁體中文；除非必要，不要使用英文敘述。

## 測試指引
目前沒有自動化測試。每次修改後請以本機靜態伺服器手動驗證，重點包含版面是否正常、導覽連結是否失效、共用頁首頁尾是否載入、圖片與腳本路徑是否正確。若有新增或修改內容頁，需確認其相對路徑可正確開啟。

## Commit 與 Pull Request 規範
近期提交以簡短、聚焦的主旨為主。後續 `commit message` 請統一使用中文，並以祈使句描述可見變更，例如 `修正首頁導覽連結路徑`。Pull Request 需附上變更摘要、影響頁面或目錄、手動測試結果；若涉及介面調整，請附上截圖。若工作對應 `specs/` 內文件，請一併註明。

## 安全與設定注意事項
請使用相對路徑引用本機資源，以維持 GitHub Pages 相容性。不要提交密鑰、權杖或機器專屬設定。`css/bootstrap_css/`、`js/bootstrap_js/`、`js/jquery/` 內檔案視為第三方資源，除非是明確升級版本，否則不要直接修改。
