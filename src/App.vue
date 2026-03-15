<template>
  <SiteLayout>
    <RouterView />
  </SiteLayout>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SiteLayout from "@/layouts/SiteLayout.vue";

const route = useRoute();
const { locale } = useI18n();

watchEffect(() => {
  const routeLocale = route.path === "/en" || route.path.startsWith("/en/") ? "en" : "zh-TW";

  if (locale.value !== routeLocale) {
    locale.value = routeLocale;
  }
});
</script>
