<template>
  <article class="product-card">
    <h3>{{ title }}</h3>
    <p>{{ summary }}</p>
    <a :href="href" target="_blank" rel="noreferrer">Open</a>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  summary: string;
  href: string;
}>();
</script>

<style scoped>
.product-card {
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.74);
}

.product-card h3,
.product-card p {
  margin: 0;
}

.product-card p {
  color: var(--color-muted);
}
</style>
