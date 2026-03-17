<template>
  <section class="home-card">
    <p class="home-card__eyebrow">GitHub</p>
    <h2 class="home-card__title">{{ title }}</h2>
    <p class="home-card__text">{{ message }}</p>
    <ul class="home-card__list" v-if="repositories.length">
      <li v-for="repo in repositories.slice(0, 3)" :key="repo.name">
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
  gap: 1rem;
  padding: 1.65rem;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 249, 0.9));
  border: 1px solid var(--color-border);
  box-shadow: 0 18px 38px rgba(24, 47, 72, 0.06);
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

.home-card__title {
  letter-spacing: -0.02em;
}

.home-card__text,
.home-card__list {
  color: var(--color-muted);
  line-height: 1.75;
}

.home-card__list {
  padding-left: 1.1rem;
}

.home-card__list a {
  color: var(--color-accent-strong);
}

.home-card__graph {
  width: 100%;
  min-height: 140px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.78);
}
</style>
