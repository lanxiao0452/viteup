<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="less">
@import '@/assets/styles/index';

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding: 50px 30px;
}

.viteup {
  font-size: 36px;
  font-weight: bold;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: color-mix(in srgb, var(--v-text-color) 10%, transparent);
}

.link {
  color: var(--v-text-color);
  font-size: 14px;
  font-weight: bold;
  background-color: var(--v-bg-color);
  border: 1px solid color-mix(in srgb, var(--v-text-color) 20%, transparent);
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: color-mix(in srgb, var(--v-text-color) 20%, transparent);
  }
}
</style>
