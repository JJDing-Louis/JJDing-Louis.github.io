<template>
  <ul class="menu-tree">
    <li v-for="item in items" :key="item.id" class="menu-tree__item">
      <a class="menu-tree__link" :href="item.targetPath ?? '#'">{{ item.label }}</a>
      <ul v-if="item.children?.length" class="menu-tree__children">
        <li v-for="child in item.children" :key="child.id">
          <a class="menu-tree__link" :href="child.targetPath ?? '#'">{{ child.label }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface MenuNode {
  id: string;
  label: string;
  targetPath: string | null;
  children?: MenuNode[];
}

defineProps<{ items: MenuNode[] }>();
</script>

<style scoped>
.menu-tree,
.menu-tree__children {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-tree {
  display: grid;
  gap: 0.9rem;
}

.menu-tree__item {
  display: grid;
  gap: 0.45rem;
}

.menu-tree__children {
  display: grid;
  gap: 0.4rem;
  padding-left: 1rem;
}

.menu-tree__link {
  color: var(--color-text);
}
</style>
