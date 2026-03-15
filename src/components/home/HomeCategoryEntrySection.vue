<template>
  <section class="home-card">
    <p class="home-card__eyebrow">Explore</p>
    <h2 class="home-card__title">{{ title }}</h2>
    <div class="entry-grid">
      <a v-for="entry in entries" :key="entry.label" class="entry-grid__item" :href="entry.href">
        <strong>{{ entry.label }}</strong>
        <span>{{ entry.description }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface EntryItem {
  label: string;
  description: string;
  href: string;
}

defineProps<{
  title: string;
  entries: ReadonlyArray<EntryItem>;
}>();
</script>

<style scoped>
.home-card {
  display: grid;
  gap: 0.9rem;
  padding: 1.5rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--color-border);
}

.home-card__eyebrow,
.home-card__title {
  margin: 0;
}

.home-card__eyebrow {
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.entry-grid {
  display: grid;
  gap: 0.9rem;
}

.entry-grid__item {
  display: grid;
  gap: 0.25rem;
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--color-border);
}

.entry-grid__item span {
  color: var(--color-muted);
}
</style>
