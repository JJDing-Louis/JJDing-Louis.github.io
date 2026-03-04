# Implementation Plan: JJNET Personal Website
Branch: `VibeCoding`  
Date: 2026-03-05  
Spec: `specs/001-jjnet-website/spec.md`

## Plan Overview

### Phase 1 (UI + Routing + Layout + CSS consolidation)
1. Normalize folder structure
   - Move legacy static files into `old-site/`
   - Keep Vue project in `site/`
2. Consolidate styles into `site/src/css/`
   - base/layout/navbar/sidebar/notes/footer
   - Ensure main.ts imports CSS files
3. Layout
   - Navbar sticky + container alignment
   - Footer
   - Main content container
4. Pages
   - Home hero + CTA buttons
   - About sections + AboutSidebar
   - Notes outline + NotesSidebar + card grid
   - GitHub simple page + external link
   - Projects card grid page

### Phase 2 (Navigation depth + Deploy)
1. Notes detail route `/notes/:topic`
2. Optional Markdown-based notes
3. GitHub Actions deploy to GitHub Pages

## Risks
- CSS class naming mismatch (mitigate by enforcing a single naming scheme)
- Node_modules accidentally created in repo root (ensure installs only under `site/`)
- GitHub Pages routing (Phase 2 must configure SPA fallback if needed)