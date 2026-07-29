<template>
  <AboutProfilePage :profile="aboutEn" :portrait-url="portraitUrl" />
</template>

<script setup lang="ts">
import AboutProfilePage from "@/components/profile/AboutProfilePage.vue";
import { aboutEn } from "@/data/profile/about.en";

const portraitUrl = new URL("../../../../img/common/myself.png", import.meta.url).href;
</script>
