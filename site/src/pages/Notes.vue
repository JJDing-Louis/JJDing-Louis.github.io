<template>
    <div class="page-layout page-layout--with-sidebar">
        <NotesSidebar />

        <section class="page-content notes-content">
            <h1 class="page-title">程式筆記</h1>
            <p class="page-subtitle">Programming Notes Outline</p>

            <section v-for="group in noteGroups" :key="group.id" :id="group.id" class="notes-group">
                <h2 class="notes-group__title">{{ group.label }}</h2>
                <div class="notes-grid">
                    <article v-for="item in group.items" :key="item" class="note-card">
                        <h3 class="note-card__title">{{ item }}</h3>
                    </article>
                </div>
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import NotesSidebar from '../components/NotesSidebar.vue'

const noteGroups = [
    {
        id: 'basics',
        label: '基礎語言',
        items: ['C#', 'Python', 'Java']
    },
    {
        id: 'database',
        label: '資料庫',
        items: ['SQL', 'SQLite', 'MySQL', 'LinQ', 'Dapper', 'SQL Server']
    },
    {
        id: 'frontend',
        label: '網頁前端',
        items: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 'backend',
        label: '網頁後端',
        items: ['ASP.NET MVC', 'Django', 'Flask']
    },
    {
        id: 'desktop',
        label: '視窗開發',
        items: ['WinForm', 'PyQt5', 'Android']
    }
]
</script>
