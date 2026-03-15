<template>
  <section class="notes-page">
    <header>
      <p>Learning Note</p>
      <h2>Category overview</h2>
      <p>The learning notes are grouped into programming, databases, and other topics with expandable subcategories.</p>
    </header>

    <details
      v-for="group in groupedCategories"
      :key="group.id"
      class="notes-accordion"
      :open="group.id === 'language'"
    >
      <summary class="notes-accordion__summary">
        <span>{{ group.title }}</span>
        <span class="notes-accordion__hint">Click to expand / collapse</span>
      </summary>
      <div class="notes-accordion__content">
        <div class="notes-grid">
          <article v-for="category in group.categories" :key="category.id" class="notes-card">
            <h3><RouterLink :to="`/en/notes/${category.id}`">{{ category.name }}</RouterLink></h3>
            <ul class="notes-subcategory-list">
              <li v-for="child in category.children" :key="child.id">
                <RouterLink :to="`/en/notes/${child.id}`">{{ child.name }}</RouterLink>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </details>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getCategoryTreeByLocale } from "@/services/content/contentQueryService";

const labels: Record<string, string> = {
  language: "Programming",
  database: "Databases",
  other: "Other"
};

const groupedCategories = computed(() => {
  const roots = getCategoryTreeByLocale("en");
  return ["language", "database", "other"].map((groupId) => ({
    id: groupId,
    title: labels[groupId],
    categories: roots.filter((category) => category.topicGroup === groupId)
  }));
});
</script>
