<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-hero__content">
        <p class="about-hero__eyebrow">{{ profile.profileSubtitle }}</p>
        <h2 class="about-hero__title">{{ profile.profileTitle }}</h2>
        <p
          v-for="line in profile.profileSummaryLines"
          :key="line"
          class="about-hero__summary"
        >
          {{ line }}
        </p>
        <div class="about-hero__actions">
          <a
            v-for="link in profile.heroLinks"
            :key="link.label"
            class="about-hero__action"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noreferrer' : undefined"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
      <div class="about-hero__portrait-panel">
        <img class="about-hero__portrait" :src="portraitUrl" :alt="profile.portraitAlt" />
      </div>
    </section>

    <section class="about-section">
      <div class="about-section__heading">
        <p>{{ profile.aboutMe.subtitle }}</p>
        <h3>{{ profile.aboutMe.title }}</h3>
      </div>
      <article class="about-card">
        <div class="about-paragraphs">
          <p
            v-for="line in profile.aboutMe.summaryLines"
            :key="line"
            class="about-card__text"
            :class="{ 'about-card__text--bullet': line.startsWith('- ') }"
          >
            {{ line }}
          </p>
        </div>
      </article>
    </section>

    <section class="about-section">
      <div class="about-section__heading">
        <p>Experience</p>
        <h3>{{ profile.projectsTitle }}</h3>
      </div>
      <div class="about-projects">
        <article v-for="item in profile.projectItems" :key="item.title" class="about-card about-card--project">
          <h4 class="about-card__title">{{ item.title }}</h4>
          <ul class="about-card__list">
            <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
          <p v-if="item.tech?.length" class="about-card__tech">
            <strong>Tech:</strong>
            {{ item.tech.join(", ") }}
          </p>
        </article>
      </div>
    </section>

    <section class="about-section">
      <div class="about-section__heading">
        <p>Capability</p>
        <h3>{{ profile.skillsTitle }}</h3>
      </div>
      <div class="about-columns">
        <article v-for="group in profile.skillGroups" :key="group.title" class="about-card">
          <p class="about-card__eyebrow">{{ group.title }}</p>
          <ul class="about-card__list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { AboutProfile } from "@/data/profile/about.types";

defineProps<{
  profile: AboutProfile;
  portraitUrl: string;
}>();
</script>

<style scoped>
.about-page {
  display: grid;
  gap: 1.5rem;
}

.about-hero,
.about-card {
  border-radius: 28px;
  border: 1px solid var(--color-border);
  box-shadow: 0 18px 38px rgba(24, 47, 72, 0.06);
}

.about-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(240px, 0.9fr);
  gap: 1.5rem;
  padding: 1.7rem;
  background:
    radial-gradient(circle at top right, rgba(247, 201, 92, 0.18), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(245, 250, 249, 0.92));
}

.about-hero__content {
  display: grid;
  gap: 0.9rem;
  align-content: start;
}

.about-hero__eyebrow,
.about-card__eyebrow,
.about-section__heading p,
.about-note p {
  margin: 0;
  color: var(--color-accent);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.about-hero__title,
.about-card__title,
.about-section__heading h3 {
  margin: 0;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.about-hero__title {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
}

.about-hero__summary,
.about-card__text {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.8;
}

.about-hero__summary {
  font-size: 1.05rem;
  color: var(--color-text);
}

.about-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.about-hero__action,
.about-link-item {
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.about-hero__action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(29, 139, 133, 0.18);
  background: linear-gradient(135deg, rgba(15, 157, 148, 0.12), rgba(53, 102, 214, 0.08));
  color: var(--color-heading);
  font-weight: 600;
}

.about-hero__action:hover,
.about-link-item:hover {
  transform: translateY(-2px);
  border-color: rgba(29, 139, 133, 0.24);
  box-shadow: 0 14px 30px rgba(24, 47, 72, 0.08);
}

.about-hero__portrait-panel {
  display: grid;
  place-items: center;
  min-height: 100%;
  padding: 1rem;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(243, 248, 250, 0.82)),
    linear-gradient(135deg, rgba(127, 217, 197, 0.18), rgba(53, 102, 214, 0.12));
}

.about-hero__portrait {
  width: min(100%, 280px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 24px;
  border: 1px solid rgba(53, 102, 214, 0.16);
  box-shadow: 0 18px 40px rgba(24, 47, 72, 0.12);
}

.about-grid,
.about-projects,
.about-columns {
  display: grid;
  gap: 1.2rem;
}

.about-columns {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.about-card {
  padding: 1.4rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 249, 0.9));
}

.about-section {
  display: grid;
  gap: 1rem;
}

.about-section__heading {
  display: grid;
  gap: 0.35rem;
}

.about-projects {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-paragraphs {
  display: grid;
  gap: 0.7rem;
}

.about-card__text--bullet {
  padding-left: 1rem;
}

.about-card__list {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--color-muted);
  line-height: 1.8;
}

.about-card__tech {
  margin: 1rem 0 0;
  color: var(--color-muted);
  line-height: 1.7;
}

@media (max-width: 980px) {
  .about-hero,
  .about-projects,
  .about-columns {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .about-hero {
    padding: 1.2rem;
  }

  .about-card,
  .about-card {
    padding: 1.15rem;
  }

  .about-hero__actions {
    display: grid;
  }
}
</style>
