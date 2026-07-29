<template>
  <section class="notes-page">
    <header>
      <p>Logs</p>
      <h2>Log index</h2>
    </header>
    <div class="notes-grid">
      <article v-for="item in logs" :key="item.id" class="notes-card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getLogEntriesByLocale } from "@/services/content/contentQueryService";

const logs = computed(() => getLogEntriesByLocale("en"));
</script>
