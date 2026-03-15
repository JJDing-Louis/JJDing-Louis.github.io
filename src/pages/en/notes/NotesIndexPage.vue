<template>
  <section class="notes-page">
    <header>
      <p>Learning Note</p>
      <h2>Category overview</h2>
    </header>
    <div class="notes-grid">
      <article v-for="group in groups" :key="group.id" class="notes-card">
        <h3>{{ group.name }}</h3>
        <p>{{ group.slug }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getCategoriesByLocale } from "@/services/content/contentQueryService";

const groups = computed(() => getCategoriesByLocale("en"));
</script>
