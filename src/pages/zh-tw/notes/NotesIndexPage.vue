<template>
  <section class="notes-page">
    <header>
      <p>Learning Note</p>
      <h2>分類總覽</h2>
    </header>
    <div class="notes-grid">
      <article v-for="group in groups" :key="group.id" class="notes-card">
        <h3>
          <RouterLink :to="`/notes/${group.id}`">{{ group.name }}</RouterLink>
        </h3>
        <p>{{ groupDescription(group.id) }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getCategoriesByLocale } from "@/services/content/contentQueryService";

const groups = computed(() => getCategoriesByLocale("zh-TW"));

const descriptions: Record<string, string> = {
  python: "查看 Python 教學與章節筆記。",
  csharp: "保留 C# 類別入口，後續可持續擴充內容。",
  java: "保留 Java 類別入口，後續可持續擴充內容。",
  database: "查看資料庫相關筆記分類。",
  other: "查看 Git、PowerShell 等其他主題。"
};

const groupDescription = (categoryId: string) =>
  descriptions[categoryId] ?? "查看此分類的教學筆記。";
</script>
