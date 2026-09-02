<template>
  <button class="counter" @click="count++">Count is {{ count }}</button>
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
.counter {
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
