<template>
  <section class="notes-page">
    <header>
      <p>Side Project</p>
      <h2>作品入口</h2>
    </header>
    <ProductGrid :items="items" />
  </section>
</template>

<script setup lang="ts">
import ProductGrid from "@/components/product/ProductGrid.vue";
import { productsZhTw } from "@/data/products/products.zh-TW";

const items = productsZhTw;
</script>
