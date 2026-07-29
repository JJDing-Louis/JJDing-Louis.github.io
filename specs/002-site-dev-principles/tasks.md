---

description: "Task list template for feature implementation"
---

# Tasks: GitHub Pages 技術教學網站重構

**Input**: Design documents from `/specs/002-site-dev-principles/`
**Prerequisites**: plan.md (required), spec.md (required for user stories),
research.md, data-model.md, contracts/

**Tests**: 本功能未要求 TDD，但必須包含建置驗證、內容 schema 驗證、核心流程的
Vitest/Playwright 任務，以及 quickstart.md 指定的手動驗證。

**Organization**: Tasks are grouped by user story to enable independent
implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Static site**: `src/components/`, `src/layouts/`, `src/pages/`,
  `src/data/`, `src/content/`
- **Legacy static files**: `html/`, `css/`, `js/`, `img/`
- Paths below assume the Vue-based static site structure defined in `plan.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project manifest and scripts in `package.json`
- [X] T002 Create Vite and TypeScript configuration in `vite.config.ts`, `tsconfig.json`, and `index.html`
- [X] T003 [P] Create base application entry files in `src/main.ts` and `src/App.vue`
- [X] T004 [P] Create initial directory structure placeholders in `src/components/.gitkeep`, `src/layouts/.gitkeep`, `src/pages/.gitkeep`, `src/content/.gitkeep`, `src/data/.gitkeep`, and `src/services/.gitkeep`
- [X] T005 [P] Configure Vitest and Playwright entry files in `vitest.config.ts`, `playwright.config.ts`, and `tests/e2e/.gitkeep`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can
be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Create shared site shell layout in `src/layouts/SiteLayout.vue`
- [X] T007 [P] Create global design tokens and app-wide styles in `src/styles/tokens.css` and `src/styles/main.css`
- [X] T008 [P] Create router and bilingual route registry in `src/router/index.ts` and `src/router/routes.ts`
- [X] T009 [P] Create locale configuration and switcher support in `src/i18n/index.ts` and `src/composables/useLocaleSwitch.ts`
- [X] T010 [P] Create navigation and category data sources in `src/data/navigation/navigation.zh-TW.ts`, `src/data/navigation/navigation.en.ts`, and `src/data/navigation/categories.ts`
- [X] T011 Create Markdown content loader and front matter parser in `src/services/content/contentLoader.ts` and `src/services/content/frontMatter.ts`
- [X] T012 [P] Create shared content and redirect schema definitions in `src/data/schema/contentSchema.ts` and `src/data/schema/redirectSchema.ts`
- [X] T013 [P] Create redirect mapping source and generator in `src/data/redirects/legacyRedirects.ts` and `scripts/generate-redirects.mjs`
- [X] T014 Create shared UI primitives for header, menu, footer, and article rendering in `src/components/layout/AppHeader.vue`, `src/components/navigation/AppMenu.vue`, `src/components/layout/AppFooter.vue`, and `src/components/article/ArticleRenderer.vue`
- [X] T015 Create GitHub activity service with fallback contract in `src/services/github/githubActivityService.ts` and `src/data/github/githubFallback.ts`
- [X] T016 Create foundational validation tests for content schema, route mapping, and redirect generation in `tests/unit/contentSchema.spec.ts`, `tests/unit/routes.spec.ts`, and `tests/unit/redirects.spec.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in
parallel

---

## Phase 3: User Story 1 - 首頁快速導覽 (Priority: P1) 🎯 MVP

**Goal**: 交付新首頁，整合個人摘要、常用語言、GitHub 活動與主要分類入口，並套用統一 Layout

**Independent Test**: 啟動開發站後，首頁可在統一 Layout 中顯示雙語個人摘要、常用語言、
GitHub repositories、contributions 圖與主要分類入口；GitHub 區塊失敗時顯示替代訊息。

### Validation for User Story 1

- [X] T017 [P] [US1] Create homepage E2E coverage for bilingual landing and fallback states in `tests/e2e/homepage.spec.ts`
- [X] T018 [P] [US1] Create unit tests for GitHub activity fallback behavior in `tests/unit/githubActivity.spec.ts`

### Implementation for User Story 1

- [X] T019 [P] [US1] Create profile summary data sources in `src/data/profile/profile.zh-TW.ts` and `src/data/profile/profile.en.ts`
- [X] T020 [P] [US1] Create homepage section components in `src/components/home/ProfileSummarySection.vue`, `src/components/home/LanguageSummarySection.vue`, `src/components/home/GitHubActivitySection.vue`, and `src/components/home/HomeCategoryEntrySection.vue`
- [X] T021 [US1] Implement homepage page containers in `src/pages/zh-tw/HomePage.vue` and `src/pages/en/HomePage.vue`
- [X] T022 [US1] Wire homepage data orchestration in `src/services/home/homePageService.ts`
- [X] T023 [US1] Connect homepage routes and layout metadata in `src/router/routes.ts`
- [X] T024 [US1] Add homepage-specific responsive styles in `src/styles/pages/home.css`
- [X] T025 [US1] Validate homepage build and preview behavior in `specs/002-site-dev-principles/quickstart.md`

**Checkpoint**: At this point, User Story 1 should be fully functional and
testable independently

---

## Phase 4: User Story 2 - 分類導覽與文章探索 (Priority: P1)

**Goal**: 交付一致的多層級雙語導覽與 Learning Note / 日誌內容探索體驗

**Independent Test**: 訪客可從任一頁面打開同一套 Menu，逐層進入 Home、日誌、Learning Note、
資料庫、其他分類與 GitHub；中英切換後仍維持對應頁面脈絡。

### Validation for User Story 2

- [X] T026 [P] [US2] Create E2E coverage for navigation hierarchy and locale switching in `tests/e2e/navigation.spec.ts`
- [X] T027 [P] [US2] Create unit tests for category tree and locale-aware path mapping in `tests/unit/navigationData.spec.ts`

### Implementation for User Story 2

- [X] T028 [P] [US2] Implement hierarchical navigation components in `src/components/navigation/MenuTree.vue` and `src/components/navigation/LocaleSwitchLink.vue`
- [X] T029 [P] [US2] Create learning note index and category pages in `src/pages/zh-tw/notes/NotesIndexPage.vue`, `src/pages/en/notes/NotesIndexPage.vue`, `src/pages/zh-tw/notes/CategoryPage.vue`, and `src/pages/en/notes/CategoryPage.vue`
- [X] T030 [P] [US2] Create log index pages in `src/pages/zh-tw/logs/LogIndexPage.vue` and `src/pages/en/logs/LogIndexPage.vue`
- [X] T031 [US2] Implement article listing and category query service in `src/services/content/contentQueryService.ts`
- [X] T032 [US2] Add bilingual navigation, category, and page metadata sources in `src/data/navigation/pageRegistry.ts` and `src/data/navigation/categoryRegistry.ts`
- [X] T033 [US2] Integrate menu behavior with shared layout in `src/layouts/SiteLayout.vue` and `src/components/navigation/AppMenu.vue`
- [X] T034 [US2] Add navigation and listing styles in `src/styles/components/menu.css` and `src/styles/pages/notes.css`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work
independently

---

## Phase 5: User Story 3 - 內容維護與分類擴充 (Priority: P2)

**Goal**: 完成既有內容搬移、Product 摘要入口、可擴充分類模型與舊網址導向機制

**Independent Test**: 維護者可新增 Markdown 文章、分類資料與 Product 卡片而不修改共用骨架；
既有正式網址可導向到新頁面；已搬移內容可由新導覽存取。

### Validation for User Story 3

- [X] T035 [P] [US3] Create unit tests for Markdown metadata parsing and published content indexing in `tests/unit/articleContent.spec.ts`
- [X] T036 [P] [US3] Create E2E coverage for legacy URL redirects and product card links in `tests/e2e/redirects-and-products.spec.ts`

### Implementation for User Story 3

- [X] T037 [P] [US3] Create product data sources in `src/data/products/products.zh-TW.ts` and `src/data/products/products.en.ts`
- [X] T038 [P] [US3] Create product listing page containers in `src/pages/zh-tw/products/ProductIndexPage.vue` and `src/pages/en/products/ProductIndexPage.vue`
- [X] T039 [P] [US3] Create reusable product card components in `src/components/product/ProductCard.vue` and `src/components/product/ProductGrid.vue`
- [X] T040 [US3] Migrate legacy article and note content into `src/content/zh-tw/` and `src/content/en/` with matching front matter metadata
- [X] T041 [US3] Implement published page registry and legacy path mapping in `src/data/navigation/pageRegistry.ts` and `src/data/redirects/legacyRedirects.ts`
- [X] T042 [US3] Generate static redirect pages into `public/redirects/` via `scripts/generate-redirects.mjs`
- [X] T043 [US3] Integrate product pages and migrated content routes in `src/router/routes.ts`
- [X] T044 [US3] Document content authoring and migration workflow in `README.md` and `specs/002-site-dev-principles/quickstart.md`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T045 [P] Run full unit and end-to-end validation in `tests/unit/` and `tests/e2e/`
- [X] T046 Run production build and preview verification in `package.json` scripts and `dist/`
- [X] T047 [P] Perform manual bilingual, responsive, and fallback checks documented in `specs/002-site-dev-principles/quickstart.md`
- [X] T048 Remove or archive superseded legacy entry points after migration verification in `html/`, `index.html`, `header.html`, `footer.html`, and `aside.html`
- [X] T049 Verify GitHub Pages deployment readiness, relative paths, and generated redirects in `vite.config.ts`, `public/redirects/`, and `dist/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion and reuses navigation/layout primitives from Phase 2
- **User Story 3 (Phase 5)**: Depends on Foundational completion; can start after Phase 3 if homepage-driven data structures need reuse
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - establishes homepage and GitHub activity experience
- **User Story 2 (P1)**: Can start after Foundational - depends only on shared router, locale, and menu primitives
- **User Story 3 (P2)**: Depends on shared content schema, routing, and redirect foundation; benefits from homepage and navigation structure already in place

### Within Each User Story

- Validation tasks complete before story sign-off
- Data sources and content schemas before page wiring
- Shared/reusable components before final route integration
- Build/preview verification after story implementation

### Parallel Opportunities

- `T003`, `T004`, and `T005` can run in parallel after `T001` and `T002`
- `T007` through `T013` contain multiple parallel foundational tasks on separate files
- Within **US1**, `T019` and `T020` can run in parallel before `T021`
- Within **US2**, `T028`, `T029`, and `T030` can run in parallel after `T026` and `T027`
- Within **US3**, `T037`, `T038`, and `T039` can run in parallel before route integration and redirect generation

---

## Parallel Example: User Story 1

```bash
# Launch homepage validation tasks together:
Task: "Create homepage E2E coverage in tests/e2e/homepage.spec.ts"
Task: "Create unit tests for GitHub activity fallback behavior in tests/unit/githubActivity.spec.ts"

# Launch homepage implementation tasks together:
Task: "Create profile summary data sources in src/data/profile/profile.zh-TW.ts and src/data/profile/profile.en.ts"
Task: "Create homepage section components in src/components/home/"
```

## Parallel Example: User Story 2

```bash
# Launch navigation implementation tasks together:
Task: "Implement hierarchical navigation components in src/components/navigation/MenuTree.vue and src/components/navigation/LocaleSwitchLink.vue"
Task: "Create learning note index and category pages in src/pages/zh-tw/notes/ and src/pages/en/notes/"
Task: "Create log index pages in src/pages/zh-tw/logs/ and src/pages/en/logs/"
```

## Parallel Example: User Story 3

```bash
# Launch maintainability tasks together:
Task: "Create product data sources in src/data/products/products.zh-TW.ts and src/data/products/products.en.ts"
Task: "Create product listing page containers in src/pages/zh-tw/products/ and src/pages/en/products/"
Task: "Create reusable product card components in src/components/product/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate homepage bilingual navigation, GitHub fallback, and build output
5. Demo the new homepage as the first usable increment

### Incremental Delivery

1. Setup + Foundational create the Vue static-site baseline
2. Add User Story 1 to establish the new homepage and site shell
3. Add User Story 2 to unlock full learning-note exploration and bilingual navigation
4. Add User Story 3 to complete content migration, product entries, and legacy URL compatibility
5. Finish with cross-cutting validation and legacy cleanup

### Parallel Team Strategy

With multiple developers:

1. Developer A owns layout/router foundations and homepage shell
2. Developer B owns navigation/category data and note/log listing flows
3. Developer C owns migration, redirect generation, and product content
4. Merge after Phase 2, then continue per-story in parallel with shared schema contracts

---

## Notes

- All tasks follow the required checklist format with checkbox, task ID, optional `[P]`, required `[US#]` labels in story phases, and explicit file paths
- Setup, Foundational, and Polish phases intentionally omit story labels
- User stories remain independently testable through story-specific validation and route coverage
- MVP scope is User Story 1 after Phase 2 foundations are complete


