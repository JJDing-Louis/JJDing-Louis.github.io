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
  border-top: 1px solid rgba(106, 128, 138, 0.14);
  margin-top: 1.5rem;
}

.app-footer p {
  margin: 0;
}
</style>
