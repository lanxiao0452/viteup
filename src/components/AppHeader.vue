<template>
  <header class="app-header">
    <nav>
      <RouterLink v-for="route in routes" :key="route.name" :to="route.path">
        {{ route.name }}
      </RouterLink>
    </nav>
    <label for="dark-mode-toggle">
      <div>Switch Dark Mode</div>
      <input
        type="checkbox"
        id="dark-mode-toggle"
        :checked="darkMode"
        @change="darkMode = !darkMode"
      />
    </label>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()

const darkMode = ref(false)

watch(
  () => darkMode.value,
  (value) => {
    if (value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
)
</script>

<style lang="less">
.app-header {
  width: 100%;
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;

    input[type='checkbox'] {
      width: 16px;
      height: 16px;
    }
  }

  nav {
    display: flex;
    gap: 16px;

    a {
      text-decoration: solid;
    }
  }
}
</style>
