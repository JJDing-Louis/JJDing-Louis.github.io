<template>
  <ul class="menu-tree">
    <li v-for="item in items" :key="item.id" class="menu-tree__item">
      <div v-if="item.children?.length" class="menu-tree__group">
        <div class="menu-tree__group-header">
          <RouterLink
            v-if="item.targetPath && item.targetPath.startsWith('/')"
            class="menu-tree__group-link"
            :to="item.targetPath"
            @click="expandGroup(item.id)"
          >
            {{ item.label }}
          </RouterLink>
          <a
            v-else-if="item.targetPath"
            class="menu-tree__group-link"
            :href="item.targetPath"
            target="_blank"
            rel="noreferrer"
            @click="expandGroup(item.id)"
          >
            {{ item.label }}
          </a>
          <button
            v-else
            type="button"
            class="menu-tree__toggle"
            :aria-expanded="isOpen(item)"
            :aria-controls="`${item.id}-children`"
            @click="toggleGroup(item.id)"
          >
            <span class="menu-tree__summary-text">{{ item.label }}</span>
          </button>
        </div>
        <MenuTree v-if="isOpen(item)" :id="`${item.id}-children`" :items="item.children" class="menu-tree__children" />
      </div>
      <RouterLink v-else-if="item.targetPath && item.targetPath.startsWith('/')" class="menu-tree__link" :to="item.targetPath">
        {{ item.label }}
      </RouterLink>
      <a v-else-if="item.targetPath" class="menu-tree__link" :href="item.targetPath" target="_blank" rel="noreferrer">
        {{ item.label }}
      </a>
      <span v-else class="menu-tree__label">{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineOptions({
  name: "MenuTree"
});

import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

interface MenuNode {
  id: string;
  label: string;
  targetPath: string | null;
  children?: MenuNode[];
}

const props = defineProps<{ items: MenuNode[] }>();

const route = useRoute();
const expandedState = reactive<Record<string, boolean>>({});

const isCurrentBranch = (item: MenuNode): boolean => {
  if (item.targetPath?.startsWith("/") && route.path.startsWith(item.targetPath)) {
    return true;
  }

  return item.children?.some((child) => isCurrentBranch(child)) ?? false;
};

const shouldOpen = (item: MenuNode): boolean => item.id === "notes" || isCurrentBranch(item);

props.items.forEach((item) => {
  if (item.children?.length) {
    expandedState[item.id] = shouldOpen(item);
  }
});

const isOpen = (item: MenuNode): boolean => expandedState[item.id] ?? false;

const collapseSiblingGroups = (activeId: string): void => {
  props.items.forEach((item) => {
    if (item.id !== activeId && item.children?.length) {
      expandedState[item.id] = false;
    }
  });
};

const toggleGroup = (id: string): void => {
  const nextState = !expandedState[id];
  collapseSiblingGroups(id);
  expandedState[id] = nextState;
};

const expandGroup = (id: string): void => {
  collapseSiblingGroups(id);
  expandedState[id] = true;
};
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

.menu-tree__group {
  display: grid;
  gap: 0.45rem;
}

.menu-tree__group-header {
  display: flex;
  align-items: center;
  gap: 0;
}

.menu-tree__toggle {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  color: var(--color-text);
  cursor: pointer;
  text-align: left;
}

.menu-tree__summary-text {
  display: inline-flex;
  align-items: center;
  font-weight: 700;
}

.menu-tree__group-link {
  color: var(--color-text);
  font-weight: 700;
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
