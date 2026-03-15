<template>
  <section class="home-card">
    <p class="home-card__eyebrow">GitHub</p>
    <h2 class="home-card__title">{{ title }}</h2>
    <p class="home-card__text">{{ message }}</p>
    <ul class="home-card__list" v-if="repositories.length">
      <li v-for="repo in repositories" :key="repo.name">
        <a :href="repo.url" target="_blank" rel="noreferrer">{{ repo.name }}</a>
      </li>
    </ul>
    <img class="home-card__graph" :src="contributionGraphUrl" :alt="graphAlt" />
  </section>
</template>

<script setup lang="ts">
interface RepositoryItem {
  name: string;
  url: string;
}

defineProps<{
  title: string;
  message: string;
  repositories: RepositoryItem[];
  contributionGraphUrl: string;
  graphAlt: string;
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
.home-card__title,
.home-card__text,
.home-card__list {
  margin: 0;
}

.home-card__eyebrow {
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-card__graph {
  width: 100%;
  min-height: 140px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid var(--color-border);
}
</style>
