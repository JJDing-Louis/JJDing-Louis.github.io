<template>
  <a class="locale-switch-link" :href="href">{{ label }}</a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  label: string;
}>();
</script>

<style scoped>
.locale-switch-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
}
</style>
