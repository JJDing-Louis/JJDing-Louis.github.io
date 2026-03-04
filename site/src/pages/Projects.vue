<template>
    <section class="page-content projects-content">
        <h1 class="page-title">作品集</h1>
        <p class="page-subtitle">Projects Portfolio</p>

        <div class="projects-grid">
            <article v-for="project in projects" :key="project.name" class="project-card">
                <h2 class="project-card__title">{{ project.name }}</h2>
                <p class="project-card__stack">{{ project.stack }}</p>
                <p class="project-card__desc">{{ project.description }}</p>
                <a class="project-card__link" :href="project.url" target="_blank" rel="noreferrer">查看專案</a>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        name: 'JJNET Website',
        stack: 'Vue 3 / TypeScript / Vite',
        description: '個人網站與技術筆記入口，整理學習內容與作品展示。',
        url: 'https://github.com/JJDing-Louis/JJDing-Louis.github.io'
    },
    {
        name: 'MySoftwareProduct',
        stack: 'C# / WinForm / SQL',
        description: '實作型桌面應用專案，聚焦在資料流程與功能整合。',
        url: 'https://github.com/JJDing-Louis/MySoftwareProduct'
    },
    {
        name: 'Python Practice Notes',
        stack: 'Python / HTML',
        description: '整理 Python 學習主題與範例，方便後續回顧與擴充。',
        url: 'https://github.com/JJDing-Louis'
    }
]
</script>
