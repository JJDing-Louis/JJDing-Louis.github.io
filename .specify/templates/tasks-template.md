---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories),
research.md, data-model.md, contracts/

**Tests**: 測試任務可依功能需要調整；若涉及版型、內容轉換或建置流程，至少加入
對應的人工驗證或建置驗證任務。

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
- 路徑應以 plan.md 選定的實際結構為準，並清楚區分 UI 元件與內容來源

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 建立符合計畫的靜態站點專案結構
- [ ] T002 初始化 Vue 與靜態建置流程
- [ ] T003 [P] 建立 `components/layouts/content/data` 目錄與命名規範

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can
be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 建立共用 `Layout`、`Header`、`Menu`、`Footer` 基底元件
- [ ] T005 [P] 建立文章 Markdown 載入或轉換流程
- [ ] T006 [P] 建立分類與導覽資料模型
- [ ] T007 定義 `Article component` 的輸入格式與呈現責任
- [ ] T008 設定靜態資產與相對路徑策略，確保 GitHub Pages 可部署
- [ ] T009 建立手動驗證清單，涵蓋版型一致性與靜態輸出

**Checkpoint**: Foundation ready - user story implementation can now begin in
parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Validation for User Story 1

- [ ] T010 [P] [US1] 驗證此故事使用統一 Layout，且未新增孤立頁面骨架
- [ ] T011 [P] [US1] 驗證內容來源已與 UI 分離，必要時加入 Markdown 或資料遷移檢查

### Implementation for User Story 1

- [ ] T012 [P] [US1] 建立或擴充共用元件於 `src/components/`
- [ ] T013 [P] [US1] 建立或調整內容資料結構於 `src/data/` 或 `src/content/`
- [ ] T014 [US1] 實作頁面或功能於 `src/pages/` 並接入共用 Layout
- [ ] T015 [US1] 串接 `Article` 或相關內容呈現元件
- [ ] T016 [US1] 補上分類、導覽或 metadata 映射
- [ ] T017 [US1] 驗證靜態建置輸出與 GitHub Pages 路徑相容性

**Checkpoint**: At this point, User Story 1 should be fully functional and
testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Validation for User Story 2

- [ ] T018 [P] [US2] 驗證新增分類或內容型別不需改寫既有版型
- [ ] T019 [P] [US2] 驗證共用元件擴充優先於複製變體

### Implementation for User Story 2

- [ ] T020 [P] [US2] 擴充分類、文章索引或導覽資料結構
- [ ] T021 [US2] 擴充可重用元件能力而非建立重複頁面
- [ ] T022 [US2] 實作對應頁面或內容流
- [ ] T023 [US2] 與既有共用元件整合並回歸檢查受影響頁面

**Checkpoint**: At this point, User Stories 1 AND 2 should both work
independently

---

## Phase 5: User Story 3 - [Title] (Priority: P3)

**Goal**: [Brief description of what this story delivers]

**Independent Test**: [How to verify this story works on its own]

### Validation for User Story 3

- [ ] T024 [P] [US3] 驗證靜態輸出可於 GitHub Pages 部署
- [ ] T025 [P] [US3] 驗證文章 Markdown、導覽資料與 UI 呈現仍維持分離

### Implementation for User Story 3

- [ ] T026 [P] [US3] 補上部署設定或靜態資源整理
- [ ] T027 [US3] 實作剩餘頁面或內容整合工作
- [ ] T028 [US3] 進行最終版型一致性與部署前驗證

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] 更新文件與遷移說明
- [ ] TXXX 清理重複元件與過時靜態標記
- [ ] TXXX 檢查分類與文章擴充流程是否仍可維護
- [ ] TXXX [P] 執行靜態建置與 GitHub Pages 路徑驗證
- [ ] TXXX 驗證共用 Layout 與導覽一致性
- [ ] TXXX 執行 quickstart.md 或等價手動驗證

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user
  stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No
  dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate
  with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate
  with US1/US2 but should be independently testable

### Within Each User Story

- Validation tasks for layout/content/deployment MUST complete before story
  sign-off
- Shared components and data contracts before page wiring
- Content structure before rendering integration
- Core implementation before deployment validation
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if
  team capacity allows)
- All validation tasks for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch validation tasks for User Story 1 together:
Task: "驗證此故事使用統一 Layout，且未新增孤立頁面骨架"
Task: "驗證內容來源已與 UI 分離，必要時加入 Markdown 或資料遷移檢查"

# Launch implementation tasks for User Story 1 together:
Task: "建立或擴充共用元件於 src/components/"
Task: "建立或調整內容資料結構於 src/data/ 或 src/content/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Validate User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Validate independently → Deploy/Demo
4. Add User Story 3 → Validate independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify layout/content/deployment validation before completion
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break
  independence
