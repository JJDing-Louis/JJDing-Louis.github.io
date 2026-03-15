<template>
  <header class="app-header">
    <div>
      <p class="app-header__eyebrow">JJDing-Louis.github.io</p>
      <h1 class="app-header__title">{{ title }}</h1>
    </div>
    <slot name="actions" />
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.app-header__eyebrow {
  margin: 0;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
}

.app-header__title {
  margin: 0.35rem 0 0;
  font-size: clamp(2rem, 5vw, 3.25rem);
}
</style>
