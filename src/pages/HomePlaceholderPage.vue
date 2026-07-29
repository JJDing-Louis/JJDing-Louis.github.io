<template>
  <section class="placeholder-page">
    <p class="placeholder-page__eyebrow">Foundation Ready</p>
    <h2 class="placeholder-page__title">首頁與分類頁將在下一階段接上實際內容</h2>
    <p class="placeholder-page__text">
      目前已完成共用 Layout、路由、雙語切換、內容 schema 與 GitHub fallback service 的基礎骨架。
    </p>
  </section>
</template>

<style scoped>
.placeholder-page {
  display: grid;
  gap: 1rem;
}

.placeholder-page__eyebrow {
  margin: 0;
  color: var(--color-accent);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.placeholder-page__title {
  margin: 0;
  font-size: clamp(1.8rem, 5vw, 3rem);
}

.placeholder-page__text {
  margin: 0;
  max-width: 48rem;
  color: var(--color-muted);
}
</style>
