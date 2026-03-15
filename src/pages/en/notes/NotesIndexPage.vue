<template>
  <section class="notes-page">
    <header>
      <p>Learning Note</p>
      <h2>Category overview</h2>
    </header>
    <div class="notes-grid">
      <article v-for="group in groups" :key="group.id" class="notes-card">
        <h3>
          <RouterLink :to="`/en/notes/${group.id}`">{{ group.name }}</RouterLink>
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

const groups = computed(() => getCategoriesByLocale("en"));

const descriptions: Record<string, string> = {
  python: "Browse Python lessons and chapter notes.",
  csharp: "Reserved C# entry for future lessons.",
  java: "Reserved Java entry for future lessons.",
  database: "Browse database-related note categories.",
  other: "Browse Git, PowerShell, and other topics."
};

const groupDescription = (categoryId: string) =>
  descriptions[categoryId] ?? "Browse notes in this category.";
</script>
