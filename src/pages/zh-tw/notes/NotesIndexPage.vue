<template>
  <section class="notes-page">
    <header>
      <p>學習筆記</p>
      <h2>分類總覽</h2>
      <p>依照你原始規格整理成語言、資料庫與其他三大群組，並保留子分類擴充空間。</p>
    </header>

    <details
      v-for="group in groupedCategories"
      :key="group.id"
      class="notes-accordion"
      :open="group.id === 'language'"
    >
      <summary class="notes-accordion__summary">
        <span>{{ group.title }}</span>
        <span class="notes-accordion__hint">點擊收合 / 展開</span>
      </summary>
      <div class="notes-accordion__content">
        <div class="notes-grid">
          <article v-for="category in group.categories" :key="category.id" class="notes-card">
            <h3><RouterLink :to="`/notes/${category.id}`">{{ category.name }}</RouterLink></h3>
            <ul class="notes-subcategory-list">
              <li v-for="child in category.children" :key="child.id">
                <RouterLink :to="`/notes/${child.id}`">{{ child.name }}</RouterLink>
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
  language: "程式語言",
  database: "資料庫",
  other: "其他"
};

const groupedCategories = computed(() => {
  const roots = getCategoryTreeByLocale("zh-TW");
  return ["language", "database", "other"].map((groupId) => ({
    id: groupId,
    title: labels[groupId],
    categories: roots.filter((category) => category.topicGroup === groupId)
  }));
});
</script>
