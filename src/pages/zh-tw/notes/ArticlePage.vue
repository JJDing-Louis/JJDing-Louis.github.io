<template>
  <section class="notes-page">
    <header>
      <p>Article</p>
      <h2>{{ article?.title }}</h2>
    </header>
    <ArticleRenderer>
      <div v-if="article" v-html="article.body"></div>
    </ArticleRenderer>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ArticleRenderer from "@/components/article/ArticleRenderer.vue";
import { getArticleBySlug } from "@/services/content/contentQueryService";

const route = useRoute();
const article = computed(() => getArticleBySlug("zh-TW", String(route.params.slug)));
</script>
