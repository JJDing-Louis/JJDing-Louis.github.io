<template>
  <AboutProfilePage :profile="aboutZhTw" :portrait-url="portraitUrl" />
</template>

<script setup lang="ts">
import AboutProfilePage from "@/components/profile/AboutProfilePage.vue";
import { aboutZhTw } from "@/data/profile/about.zh-TW";

const portraitUrl = new URL("../../../../img/common/myself.png", import.meta.url).href;
</script>
