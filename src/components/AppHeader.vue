<template>
  <header class="app-header">
    <nav>
      <RouterLink v-for="route in routes" :key="route.name" :to="route.path">
        {{ route.name }}
      </RouterLink>
    </nav>
    <div class="switch-lable">Switch Dark Mode</div>
    <div class="switch-mode">
      <label>
        <span>Auto</span>
        <input v-model="colorScheme" type="radio" value="auto" />
      </label>
      <label>
        <span>Light</span>
        <input v-model="colorScheme" type="radio" value="light" />
      </label>
      <label>
        <span>Dark</span>
        <input v-model="colorScheme" type="radio" value="dark" />
      </label>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()

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
.app-header {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .switch-lable {
    font-size: 32px;
    font-weight: bold;
    margin: 40px 0 10px;
  }

  .switch-mode {
    display: flex;
    gap: 16px;
    font-size: 16px;

    label {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  nav {
    display: flex;
    gap: 16px;

    a {
      font-size: 28px;
      text-decoration: solid;
      transition: 0.2s;

      &:hover {
        color: color-mix(in srgb, var(--v-text-color) 50%, var(--v-bg-color) 50%);
      }
    }
  }
}
</style>
