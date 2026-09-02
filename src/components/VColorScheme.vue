<template>
  <div class="color-scheme">
    <button
      :class="{ 'is-active': !['light', 'dark'].includes(colorScheme) }"
      @click="colorScheme = 'auto'"
    >
      Auto
    </button>
    <button :class="{ 'is-active': colorScheme === 'light' }" @click="colorScheme = 'light'">
      Light
    </button>
    <button :class="{ 'is-active': colorScheme === 'dark' }" @click="colorScheme = 'dark'">
      Dark
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const colorScheme = ref(localStorage.getItem('viteup-color-scheme') || 'auto')

function updateColorScheme() {
  document.documentElement.classList.toggle(
    'dark',
    colorScheme.value === 'dark' || (prefersDark.matches && colorScheme.value !== 'light'),
  )
}

watch(
  () => colorScheme.value,
  (value) => {
    localStorage.setItem('viteup-color-scheme', value)
    updateColorScheme()
  },
)

onMounted(() => {
  prefersDark.addEventListener('change', updateColorScheme)
})

onUnmounted(() => {
  prefersDark.removeEventListener('change', updateColorScheme)
})
</script>

<style lang="less">
.color-scheme {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, var(--v-text-color) 5%, transparent);
  padding: 10px;
  border-radius: 6px;

  button {
    color: var(--v-text-color);
    font-size: 14px;
    font-weight: bold;
    background-color: var(--v-bg-color);
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    transition: 0.2s;

    &:first-child {
      border-radius: 4px 0 0 4px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }

    &:hover,
    &.is-active {
      background-color: color-mix(in srgb, var(--v-text-color) 20%, transparent);
    }
  }
}
</style>
