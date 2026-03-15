<template>
  <nav class="app-menu" :aria-label="label">
    <MenuTree :items="tree" />
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MenuTree from "./MenuTree.vue";
import type { NavigationItem } from "@/data/navigation/navigation.zh-TW";

interface MenuNode {
  id: string;
  label: string;
  targetPath: string | null;
  children?: MenuNode[];
}

const props = defineProps<{
  items: NavigationItem[];
  label: string;
}>();

const tree = computed<MenuNode[]>(() => {
  const nodes = new Map<string, MenuNode>();

  props.items.forEach((item) => {
    nodes.set(item.id, {
      id: item.id,
      label: item.label,
      targetPath: item.targetPath,
      children: []
    });
  });

  const roots: MenuNode[] = [];

  props.items.forEach((item) => {
    const current = nodes.get(item.id)!;
    if (item.parentId) {
      nodes.get(item.parentId)?.children?.push(current);
    } else {
      roots.push(current);
    }
  });

  return roots;
});
</script>
