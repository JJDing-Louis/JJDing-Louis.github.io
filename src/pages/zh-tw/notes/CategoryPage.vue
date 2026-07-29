<template>
  <section class="notes-page">
    <header>
      <p>Category</p>
      <h2>{{ title }}</h2>
      <p>{{ intro }}</p>
    </header>

    <section v-if="childCategories.length" class="notes-section">
      <header class="notes-section__header">
        <h3>子分類</h3>
      </header>
      <div class="notes-grid">
        <article v-for="child in childCategories" :key="child.id" class="notes-card">
          <h3><RouterLink :to="`/notes/${child.id}`">{{ child.name }}</RouterLink></h3>
          <p>查看 {{ child.name }} 相關教學與筆記。</p>
        </article>
      </div>
    </section>

    <section v-if="showArticles" class="notes-section">
      <header class="notes-section__header">
        <h3>文章列表</h3>
      </header>
      <div class="notes-grid">
        <article v-for="item in articles" :key="item.id" class="notes-card">
          <h3><RouterLink :to="item.path">{{ item.title }}</RouterLink></h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>

    <p v-if="!childCategories.length && !articles.length" class="notes-empty">
      此分類已建立，但內容仍在整理中。
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
const category = computed(() => getCategoryById("zh-TW", categoryId.value));
const title = computed(() => category.value?.name ?? categoryId.value);
const childCategories = computed(() => getChildCategories("zh-TW", categoryId.value));
const articles = computed(() => getArticlesByCategory("zh-TW", categoryId.value));
const showArticles = computed(() => !childCategories.value.length && articles.value.length > 0);
const intro = computed(() =>
  childCategories.value.length
    ? `目前顯示 ${title.value} 的子分類。`
    : `目前顯示 ${title.value} 的可閱讀文章。`
);
</script>
