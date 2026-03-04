<template>
    <section class="home-hero">
        <div class="home-hero__content">
            <p class="home-hero__eyebrow">JJNET PERSONAL SITE</p>
            <h1 class="home-hero__title">JJNET</h1>
            <p class="home-hero__subtitle">Software Developer Notes &amp; Portfolio</p>

            <div class="home-hero__actions">
                <RouterLink to="/notes" class="ui-button ui-button--primary">程式筆記</RouterLink>
                <RouterLink to="/github" class="ui-button">GitHub</RouterLink>
                <RouterLink to="/projects" class="ui-button">作品</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
