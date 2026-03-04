<template>
  <div class="layout">
    <NotesSidebar />

    <section class="content">
      <h1>程式筆記</h1>
      <p class="sub">Programming Notes · Outline</p>

      <h2 id="basics">基礎語言</h2>
      <div class="grid">
        <a class="card" href="#"><div class="cardTitle">C#</div></a>
        <a class="card" href="#"><div class="cardTitle">Python</div></a>
        <a class="card" href="#"><div class="cardTitle">Java</div></a>
      </div>

      <h2 id="db">資料庫</h2>
      <div class="grid">
        <a class="card" href="#"><div class="cardTitle">SQL</div></a>
        <a class="card" href="#"><div class="cardTitle">SQLite</div></a>
        <a class="card" href="#"><div class="cardTitle">MySQL</div></a>
        <a class="card" href="#"><div class="cardTitle">LinQ</div></a>
        <a class="card" href="#"><div class="cardTitle">Dapper</div></a>
        <a class="card" href="#"><div class="cardTitle">SQLServer</div></a>
      </div>

      <h2 id="frontend">網頁前端</h2>
      <div class="grid">
        <a class="card" href="#"><div class="cardTitle">HTML</div></a>
        <a class="card" href="#"><div class="cardTitle">CSS</div></a>
        <a class="card" href="#"><div class="cardTitle">JavaScript</div></a>
      </div>

      <h2 id="backend">網頁後端</h2>
      <div class="grid">
        <a class="card" href="#"><div class="cardTitle">ASP.NET MVC</div></a>
        <a class="card" href="#"><div class="cardTitle">Django</div></a>
        <a class="card" href="#"><div class="cardTitle">Flask</div></a>
      </div>

      <h2 id="desktop">視窗開發</h2>
      <div class="grid">
        <a class="card" href="#"><div class="cardTitle">WinForm</div></a>
        <a class="card" href="#"><div class="cardTitle">PyQt5</div></a>
        <a class="card" href="#"><div class="cardTitle">Android</div></a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NotesSidebar from "../components/NotesSidebar.vue";
</script>

