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
  gap: 0.9rem;
  padding: 1.5rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--color-border);
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
}

.chip-card__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.chip-card__chip {
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  background: var(--color-accent-soft);
}
</style>
