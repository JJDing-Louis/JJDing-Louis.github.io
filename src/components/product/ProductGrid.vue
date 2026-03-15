<template>
  <section class="product-grid">
    <ProductCard v-for="item in items" :key="item.id" :title="item.name" :summary="item.summary" :href="item.primaryLink" />
  </section>
</template>

<script setup lang="ts">
import ProductCard from "./ProductCard.vue";

interface ProductItem {
  id: string;
  name: string;
  summary: string;
  primaryLink: string;
}

defineProps<{
  items: ProductItem[];
}>();
</script>

<style scoped>
.product-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}
</style>
