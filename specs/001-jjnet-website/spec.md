# Spec: JJNET Personal Website (Vue + Vite + GitHub Pages)
ID: 001-jjnet-website  
Owner: Louis  
Status: Draft  
Target: GitHub Pages (User Site)  
Primary Lang: zh-TW (繁中) + English subtitles (小標/副標)

---

## 1. Goal / 目標

建立「JJNET 個人網站」，提供：
- 首頁（品牌 + 快速入口）
- 自介（分段 + 側邊錨點）
- 程式筆記（左側分類 + 右側內容/文章）
- GitHub（外連/或簡易卡片）
- 作品呈現（卡片式作品集）

部署到 GitHub Pages（username.github.io 根網域），並可長期維護與擴充筆記內容。

---

## 2. Non-goals / 不做什麼

- 不做後端（純前端靜態站）
- 不做登入/會員
- 不做 DB
- 第一階段不做全文搜尋（可列入後續）

---

## 3. Tech Stack / 技術選型

- Vue 3 + Vite + TypeScript
- Vue Router
- CSS：集中在 `site/src/css/`（不把 style 分散在每個 component）
- 靜態資源放 `site/public/`
- 舊站保留在 repo root 下 `old-site/`（僅作參考，暫不刪）

---

## 4. Information Architecture / 網站架構

Routes:
- `/` Home
- `/about` About
- `/notes` Notes (Outline)
- `/notes/:topic` Note detail (Phase 2)
- `/github` GitHub
- `/projects` Projects

Layout:
- Top Navbar (sticky)
- Main content container (max-width)
- Footer

Notes layout:
- 左側 Sidebar（分類）
- 右側 Content（卡片/文章）

---

## 5. UI Requirements / UI 需求

### 5.1 Visual style
- 極簡、乾淨、偏 documentation / portfolio hybrid
- Navbar 與 main content 同寬對齊（使用 container）
- RWD：<= 900px 時 sidebar 變成置頂或折疊（Phase 1 可先變成置頂）

### 5.2 Bilingual rule
- 主標/主內容：繁中
- 次要小標/副標：英文（例如 "Software Developer Notes & Portfolio"）

---

## 6. Content Requirements / 內容需求

### 6.1 Home
- JJNET + 英文副標
- 三個 CTA：程式筆記 / GitHub / 作品
- 可加「最新筆記」區塊（Phase 2）

### 6.2 About
- Sections（用 id 供錨點）
  - 自介 #SelfIntroduction
  - 求學經歷 #SchoolExperience
  - 工作經歷 #WorkExperience
  - 軟體技能 #SoftwareSkills
  - 作品 #Works
  - 興趣嗜好 #Hobby
- Sidebar：錨點導覽（與舊站一致）

### 6.3 Notes
- Notes Outline：基礎語言 / 資料庫 / 網頁前端 / 網頁後端 / 視窗開發
- 每個分類內用卡片顯示子項（例如 C#, Python...）
- Phase 2：每個卡片可點進 `/notes/:topic`

### 6.4 Projects
- 卡片式作品集（可先用假資料）
- 每張卡片：名稱、tech stack、簡短描述、連結

### 6.5 GitHub
- 外連到 GitHub Profile
- 可顯示常用 repo 列表（Phase 2）

---

## 7. Deployment / 部署需求

- GitHub Pages 部署目標：username.github.io 根網域
- Vite `base`：`/`（User Site）
- Phase 2：加入 GitHub Actions 自動 build & deploy（dist 不 commit）

---

## 8. Acceptance Criteria / 驗收標準

Phase 1（本次）：
1) 5 個路由頁都可正常切換
2) Navbar sticky、active link 有樣式
3) About 有 sidebar 錨點可跳段落
4) Notes 有 sidebar + 分類卡片顯示
5) CSS 全部集中在 `site/src/css/`（component 不放 `<style>`）
6) 舊站檔案移到 `old-site/`，新站在 `site/` 維護

Phase 2（下一輪）：
1) Notes detail 路由 `/notes/:topic` 可顯示內容（可先假資料）
2) GitHub Actions 部署完成

---

## 9. Open Questions / 待決策

- Notes Phase 2：用 Markdown 來源（建議 `site/src/notes/*.md` 或 `site/notes/*.md` + Vite plugin）
- Projects 的資料來源：靜態 TS 檔 or JSON