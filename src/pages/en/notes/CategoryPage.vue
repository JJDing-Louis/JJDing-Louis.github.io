<template>
  <section class="notes-page">
    <header>
      <p>Category</p>
      <h2>{{ title }}</h2>
    </header>
    <div class="notes-grid">
      <article v-for="item in articles" :key="item.id" class="notes-card">
        <h3><a :href="item.path">{{ item.title }}</a></h3>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getArticlesByCategory } from "@/services/content/contentQueryService";

const route = useRoute();
const categoryId = computed(() => String(route.params.categoryId ?? "python"));
const title = computed(() => categoryId.value);
const articles = computed(() => getArticlesByCategory("en", categoryId.value));
</script>
