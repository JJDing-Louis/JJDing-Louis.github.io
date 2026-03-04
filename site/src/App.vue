<template>
  <div class="app">
    <Navbar />
    <main class="main"><RouterView /></main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./layout/Navbar.vue";
import Footer from "./layout/Footer.vue";
</script>