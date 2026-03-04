<template>
    <header class="navbar">
        <div class="container navbar__inner">
            <RouterLink to="/" class="navbar__brand">JJNET</RouterLink>

            <nav class="navbar__links" aria-label="Main Navigation">
                <RouterLink to="/about" class="navbar__link">關於我</RouterLink>
                <RouterLink to="/notes" class="navbar__link">程式筆記</RouterLink>
                <RouterLink to="/github" class="navbar__link">GitHub</RouterLink>
                <RouterLink to="/projects" class="navbar__link">作品</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
