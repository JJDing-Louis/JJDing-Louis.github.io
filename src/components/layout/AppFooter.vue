<template>
  <footer class="app-footer">
    <p>{{ text }}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<style scoped>
.app-footer {
  padding-top: 1rem;
  color: var(--color-muted);
  font-size: 0.95rem;
}

.app-footer p {
  margin: 0;
}
</style>
