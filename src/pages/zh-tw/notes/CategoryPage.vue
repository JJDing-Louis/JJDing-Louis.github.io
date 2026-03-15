<template>
  <section class="notes-page">
    <header>
      <p>Category</p>
      <h2>{{ title }}</h2>
    </header>
    <div class="notes-grid">
      <article v-for="item in articles" :key="item.id" class="notes-card">
        <h3><RouterLink :to="item.path">{{ item.title }}</RouterLink></h3>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getArticlesByCategory, getCategoryById } from "@/services/content/contentQueryService";

const route = useRoute();
const categoryId = computed(() => String(route.params.categoryId ?? "python"));
const title = computed(() => getCategoryById("zh-TW", categoryId.value)?.name ?? categoryId.value);
const articles = computed(() => getArticlesByCategory("zh-TW", categoryId.value));
</script>
