# Implementation Plan: GitHub Pages 技術教學網站重構

**Branch**: `002-site-dev-principles` | **Date**: 2026-03-15 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-site-dev-principles/spec.md`

**Note**: This plan covers Phase 0 research and Phase 1 design outputs for the
Vue-based static site migration.

## Summary

將現有純 HTML GitHub Pages 技術教學網站重構為以 Vue component 為核心的
靜態網站，完整搬移既有正式頁面與文章，統一全站 Layout 與導覽結構，改以
Markdown 與結構化資料維護內容，並在首頁整合雙語導覽、GitHub 活動摘要與
可持續擴充的分類入口。

## Technical Context

**Language/Version**: TypeScript 5.x, Vue 3, Node.js 22 LTS
**Primary Dependencies**: Vite, Vue Router, Vue I18n, gray-matter, markdown-it,
Vitest, Playwright
**Storage**: Markdown files with front matter, JSON/YAML-like structured content
files, static assets in repository
**Testing**: Vitest for content and routing transforms, Playwright for core
journeys, manual responsive and GitHub Pages validation
**Target Platform**: GitHub Pages static hosting
**Project Type**: Vue-based static site
**Performance Goals**: Primary navigation available within 2 seconds on typical
broadband; homepage above-the-fold content rendered without waiting for GitHub
activity; client-side GitHub refresh fails gracefully
**Constraints**: Static output only, no persistent server runtime, relative-path
safe asset routing, full legacy content migration, bilingual published pages,
legacy URL redirects preserved
**Scale/Scope**: Full-site rewrite covering homepage, logs, learning notes,
product index, GitHub entry, bilingual navigation tree, dozens of legacy pages
and future category growth

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] 本功能以 Vue component 架構實作，並以 `Layout`、`Header`、`Menu`、
  `Footer`、`Article` 為核心共用元件。
- [x] UI、內容資料與 Markdown 文章來源分離；文章與導覽資料不硬編碼於頁面元件。
- [x] 所有正式頁面沿用統一 Layout，並維持一致的 `Header`、`Menu`、`Content`、
  `Footer` 行為。
- [x] 優先重用並擴充共用元件，不以複製頁面變體處理分類與雙語需求。
- [x] 產出維持靜態網站輸出，並透過 GitHub Pages 相容的相對路徑與靜態導向策略部署。

**Gate Result (Pre-Research)**: PASS
**Gate Result (Post-Design)**: PASS
**Notes**: 設計決策未引入伺服器端依賴；GitHub 活動採公開資料抓取與快取降級，
不破壞靜態部署限制。

## Project Structure

### Documentation (this feature)

```text
specs/002-site-dev-principles/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── content-schema.md
│   ├── github-activity-contract.md
│   └── routing-localization-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
html/                      # Legacy pages kept during migration work only
css/
js/
img/

src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── article/
│   ├── home/
│   └── product/
├── layouts/
├── pages/
│   ├── zh-tw/
│   └── en/
├── router/
├── composables/
├── content/
│   ├── zh-tw/
│   └── en/
├── data/
│   ├── navigation/
│   ├── profile/
│   ├── products/
│   ├── redirects/
│   └── github/
├── services/
└── styles/

public/
├── img/
└── redirects/

dist/
└── [GitHub Pages static output]
```

**Structure Decision**: 採用 Vue-based static site 結構。既有 `html/`、`css/`、`js/`
作為遷移來源保留到切站完成，新站的 UI、內容、導覽與外部資料策略分別落在
`src/components`、`src/content`、`src/data`、`src/services`。

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
