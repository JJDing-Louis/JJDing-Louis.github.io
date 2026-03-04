<template>
    <div class="page-layout page-layout--with-sidebar">
        <AboutSidebar />

        <section class="page-content about-content">
            <h1 class="page-title">關於我</h1>
            <p class="page-subtitle">About Me</p>

            <section id="SelfIntroduction" class="content-section">
                <h2 class="content-section__title">自介</h2>
                <p class="content-section__text">嗨，我是 Louis，專注在軟體開發與技術筆記整理，持續建立可維護且可重用的開發知識庫。</p>
            </section>

            <section id="SchoolExperience" class="content-section">
                <h2 class="content-section__title">求學經歷</h2>
                <p class="content-section__text">以資訊相關領域為主，透過課程與專題建立程式設計、資料結構與資料庫基礎能力。</p>
            </section>

            <section id="WorkExperience" class="content-section">
                <h2 class="content-section__title">工作經歷</h2>
                <p class="content-section__text">參與實務專案開發與維護，涵蓋需求整理、功能實作、除錯與版本管理。</p>
            </section>

            <section id="SoftwareSkills" class="content-section">
                <h2 class="content-section__title">軟體技能</h2>
                <p class="content-section__text">熟悉 C#、Python、JavaScript、SQL 與網頁開發相關技術，並持續擴充前後端整合能力。</p>
            </section>

            <section id="Works" class="content-section">
                <h2 class="content-section__title">作品</h2>
                <p class="content-section__text">聚焦於實作型專案，包含工具開發、網站功能整合與學習型 side projects。</p>
            </section>

            <section id="Hobby" class="content-section">
                <h2 class="content-section__title">興趣嗜好</h2>
                <p class="content-section__text">喜歡整理學習筆記、研究新技術，以及優化開發流程與個人知識管理方式。</p>
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import AboutSidebar from '../components/AboutSidebar.vue'
</script>
