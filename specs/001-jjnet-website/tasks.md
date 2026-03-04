# Task List: JJNET Personal Website (Phase 1)

## T1 - Repo hygiene
- [ ] Create `old-site/` folder at repo root
- [ ] Move legacy files/folders into `old-site/` (css/html/js/img + old index.html)
- [ ] Ensure `node_modules` exists only under `site/`

## T2 - CSS consolidation
- [ ] Create `site/src/css/` files:
  - [ ] base.css
  - [ ] layout.css (container + app + main)
  - [ ] navbar.css
  - [ ] sidebar.css
  - [ ] notes.css
  - [ ] footer.css
- [ ] Import all CSS in `site/src/main.ts`
- [ ] Remove `<style>` blocks from Vue components (use class-based styling only)

## T3 - Layout components
- [ ] Implement `site/src/layout/Navbar.vue` (sticky + active link)
- [ ] Implement `site/src/layout/Footer.vue`
- [ ] Update `site/src/App.vue` to wrap RouterView with container

## T4 - Pages (Phase 1)
- [ ] Home page hero + CTA buttons
- [ ] About page sections + sidebar anchors
- [ ] Notes page sidebar + outline cards
- [ ] GitHub page (external link)
- [ ] Projects page (cards, placeholder data)

## T5 - Quick verification
- [ ] Run `npm run dev` and click through routes
- [ ] Confirm responsive behavior at 900px width