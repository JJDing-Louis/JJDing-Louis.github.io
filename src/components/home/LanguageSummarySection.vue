<template>
  <section class="chip-card">
    <p class="chip-card__eyebrow">Languages</p>
    <h2 class="chip-card__title">{{ title }}</h2>
    <div class="chip-card__list">
      <span v-for="item in items" :key="item" class="chip-card__chip">{{ item }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  items: string[];
}>();
</script>

<style scoped>
.chip-card {
  display: grid;
  gap: 1rem;
  padding: 1.65rem;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 249, 0.9));
  border: 1px solid var(--color-border);
  box-shadow: 0 18px 38px rgba(24, 47, 72, 0.06);
}

.chip-card__eyebrow {
  margin: 0;
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.chip-card__title {
  margin: 0;
  letter-spacing: -0.02em;
}

.chip-card__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.chip-card__chip {
  padding: 0.62rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(29, 139, 133, 0.14);
  background: linear-gradient(180deg, rgba(29, 139, 133, 0.1), rgba(29, 139, 133, 0.05));
  color: var(--color-accent-strong);
  font-weight: 600;
}
</style>
