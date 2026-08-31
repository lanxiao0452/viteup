<template>
  <div class="app-counter">
    <p>Count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  initialCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialCount: 0,
})

const count = ref(props.initialCount)
</script>

<style lang="less">
.app-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 36px;
    font-weight: bold;
  }

  button {
    color: var(--v-text-color);
    font-size: 14px;
    font-weight: bold;
    background-color: var(--v-bg-color);
    border: 1px solid color-mix(in srgb, var(--v-bg-color) 80%, var(--v-text-color) 20%);
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: color-mix(in srgb, var(--v-bg-color) 85%, var(--v-text-color) 15%);
    }
  }
}
</style>
