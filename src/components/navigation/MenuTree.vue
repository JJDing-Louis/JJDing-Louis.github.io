<template>
  <ul class="menu-tree">
    <li v-for="item in items" :key="item.id" class="menu-tree__item">
      <RouterLink v-if="item.targetPath && item.targetPath.startsWith('/')" class="menu-tree__link" :to="item.targetPath">
        {{ item.label }}
      </RouterLink>
      <a v-else-if="item.targetPath" class="menu-tree__link" :href="item.targetPath" target="_blank" rel="noreferrer">
        {{ item.label }}
      </a>
      <span v-else class="menu-tree__label">{{ item.label }}</span>
      <MenuTree v-if="item.children?.length" :items="item.children" class="menu-tree__children" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineOptions({
  name: "MenuTree"
});

import { RouterLink } from "vue-router";

interface MenuNode {
  id: string;
  label: string;
  targetPath: string | null;
  children?: MenuNode[];
}

defineProps<{ items: MenuNode[] }>();
</script>

<style scoped>
.menu-tree {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.7rem;
}

.menu-tree__item {
  display: grid;
  gap: 0.45rem;
}

.menu-tree__children {
  padding-left: 1rem;
}

.menu-tree__link,
.menu-tree__label {
  color: var(--color-text);
}

.menu-tree__label {
  font-weight: 700;
}
</style>
