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
  gap: 1rem;
  padding: 1.65rem;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 249, 0.9));
  border: 1px solid var(--color-border);
  box-shadow: 0 18px 38px rgba(24, 47, 72, 0.06);
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
  gap: 0.95rem;
}

.entry-grid__item {
  display: grid;
  gap: 0.35rem;
  padding: 1.05rem 1.1rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(245, 249, 248, 0.84));
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.entry-grid__item strong {
  color: var(--color-heading);
}

.entry-grid__item span {
  color: var(--color-muted);
  line-height: 1.7;
}

.entry-grid__item:hover {
  transform: translateY(-2px);
  border-color: rgba(29, 139, 133, 0.22);
  box-shadow: 0 14px 30px rgba(24, 47, 72, 0.08);
}
</style>
