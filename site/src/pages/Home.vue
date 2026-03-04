<template>
  <section class="hero">
    <h1 class="hero__title">JJNET</h1>
    <p class="hero__sub">Software Developer Notes & Portfolio</p>

    <div class="hero__actions">
      <RouterLink to="/notes" class="btn">程式筆記</RouterLink>
      <RouterLink to="/github" class="btn">GitHub</RouterLink>
      <RouterLink to="/projects" class="btn">作品</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>