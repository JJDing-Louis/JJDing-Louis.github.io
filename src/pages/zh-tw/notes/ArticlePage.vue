<template>
  <section class="notes-page">
    <header>
      <p>Article</p>
      <h2>{{ article?.title ?? "找不到文章" }}</h2>
    </header>
    <ArticleRenderer>
      <div v-if="article" v-html="article.body"></div>
      <p v-else>這篇筆記目前不存在或尚未完成搬移。</p>
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
