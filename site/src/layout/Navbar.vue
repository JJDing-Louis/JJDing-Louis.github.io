<template>
  <header class="nav">
    <RouterLink to="/" class="brand">JJNET</RouterLink>

    <nav class="links">
      <RouterLink to="/about" class="link">關於我</RouterLink>
      <RouterLink to="/notes" class="link">程式筆記</RouterLink>
      <!-- 這兩個你舊站是外連 GitHub 與作品 repo :contentReference[oaicite:4]{index=4} -->
      <a class="link" href="https://github.com/JJDing-Louis" target="_blank" rel="noreferrer">GitHub</a>
      <a class="link" href="https://github.com/JJDing-Louis/MySoftwareProduct" target="_blank" rel="noreferrer">作品</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
