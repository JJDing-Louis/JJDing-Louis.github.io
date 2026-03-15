<template>
  <section class="notes-page">
    <header>
      <p>Product</p>
      <h2>Project entries</h2>
    </header>
    <ProductGrid :items="items" />
  </section>
</template>

<script setup lang="ts">
import ProductGrid from "@/components/product/ProductGrid.vue";
import { productsEn } from "@/data/products/products.en";

const items = productsEn;
</script>
