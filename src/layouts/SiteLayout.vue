<template>
  <div class="site-layout">
    <div class="site-layout__panel">
      <AppHeader :title="t('siteTitle')">
        <template #actions>
          <a class="site-layout__switch" :href="switchPath" @click.prevent="toggleLocale">
            {{ alternateLocale }}
          </a>
        </template>
      </AppHeader>
      <AppMenu :items="menuItems" :label="t('navLabel')" />
      <section class="site-layout__content">
        <slot />
      </section>
      <AppFooter :text="t('footerText')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppMenu from "@/components/navigation/AppMenu.vue";
import { navigationZhTw } from "@/data/navigation/navigation.zh-TW";
import { navigationEn } from "@/data/navigation/navigation.en";
import { useLocaleSwitch } from "@/composables/useLocaleSwitch";

const { t } = useI18n();
const { currentLocale, alternateLocale, switchLocale, switchPath } = useLocaleSwitch();

const menuItems = computed(() => (currentLocale.value === "zh-TW" ? navigationZhTw : navigationEn));

const toggleLocale = () => {
  switchLocale(alternateLocale.value);
  window.location.assign(switchPath.value);
};
</script>

<style scoped>
.site-layout {
  padding: 2rem;
}

.site-layout__panel {
  max-width: var(--layout-width);
  margin: 0 auto;
  padding: 2rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: var(--shadow-panel);
  backdrop-filter: blur(14px);
}

.site-layout__switch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 3.5rem;
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  background: var(--color-accent);
  color: white;
}

.site-layout__content {
  padding: 2rem 0;
}
</style>
