<template>
  <section class="home-card">
    <p class="home-card__eyebrow">Profile</p>
    <h2 class="home-card__title">{{ title }}</h2>
    <p class="home-card__text">{{ intro }}</p>
    <h3 v-if="careerTitle" class="home-card__subtitle">{{ careerTitle }}</h3>
    <ul class="home-card__list">
      <li v-for="item in workExperience" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  intro: string;
  careerTitle: string;
  workExperience: string[];
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

.home-card__eyebrow {
  margin: 0;
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-card__title,
.home-card__subtitle,
.home-card__text,
.home-card__list {
  margin: 0;
}

.home-card__title {
  letter-spacing: -0.02em;
}

.home-card__subtitle {
  font-size: 1rem;
  color: var(--color-heading);
}

.home-card__text,
.home-card__list {
  color: var(--color-muted);
  line-height: 1.75;
}

.home-card__list {
  padding-left: 1.1rem;
}
</style>
