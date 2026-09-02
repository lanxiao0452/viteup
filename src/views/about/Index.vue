<template>
  <div class="viteup">Viteup</div>
  <p class="description">
    A modern Vite starter template for building fast, maintainable web applications.
  </p>
  <div class="divider"></div>
  <RouterLink to="/" class="link">Go to Index</RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="less">
.description {
  font-size: 16px;
}
</style>
