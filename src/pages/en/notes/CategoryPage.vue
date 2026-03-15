<template>
  <section class="notes-page">
    <header>
      <p>Category</p>
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </header>

    <section v-if="childCategories.length" class="notes-section">
      <header class="notes-section__header">
        <h3>Subcategories</h3>
      </header>
      <div class="notes-grid">
        <article v-for="child in childCategories" :key="child.id" class="notes-card">
          <h3><RouterLink :to="`/en/notes/${child.id}`">{{ child.name }}</RouterLink></h3>
          <p>Browse notes and lessons under {{ child.name }}.</p>
        </article>
      </div>
    </section>

    <section v-if="articles.length" class="notes-section">
      <header class="notes-section__header">
        <h3>Articles</h3>
      </header>
      <div class="notes-grid">
        <article v-for="item in articles" :key="item.id" class="notes-card">
          <h3><RouterLink :to="item.path">{{ item.title }}</RouterLink></h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>

    <p v-if="!childCategories.length && !articles.length" class="notes-empty">
      This category exists, but its content is still being organized.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import {
  getArticlesByCategory,
  getCategoryById,
  getChildCategories
} from "@/services/content/contentQueryService";

const route = useRoute();
const categoryId = computed(() => String(route.params.categoryId ?? "python"));
const category = computed(() => getCategoryById("en", categoryId.value));
const title = computed(() => category.value?.name ?? categoryId.value);
const intro = computed(() => `Showing subcategories and available articles for ${title.value}.`);
const childCategories = computed(() => getChildCategories("en", categoryId.value));
const articles = computed(() => getArticlesByCategory("en", categoryId.value));
</script>
