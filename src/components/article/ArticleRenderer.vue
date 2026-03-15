<template>
  <article class="article-renderer">
    <slot />
  </article>
</template>

<style scoped>
.article-renderer {
  display: grid;
  gap: 1rem;
  line-height: 1.8;
}
</style>
