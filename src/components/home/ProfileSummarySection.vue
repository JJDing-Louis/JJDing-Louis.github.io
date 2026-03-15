<template>
  <section class="home-card">
    <p class="home-card__eyebrow">Profile</p>
    <h2 class="home-card__title">{{ title }}</h2>
    <p class="home-card__text">{{ intro }}</p>
    <ul class="home-card__list">
      <li v-for="item in workExperience" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  intro: string;
  workExperience: string[];
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

.home-card__eyebrow {
  margin: 0;
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-card__title,
.home-card__text,
.home-card__list {
  margin: 0;
}

.home-card__list {
  padding-left: 1.1rem;
  color: var(--color-muted);
}
</style>
