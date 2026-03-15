<template>
  <SiteLayout>
    <RouterView />
  </SiteLayout>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SiteLayout from "@/layouts/SiteLayout.vue";
</script>
