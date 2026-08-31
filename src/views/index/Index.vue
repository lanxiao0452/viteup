<template>
  <AppHeader />
  <AppCounter :initial-count="0" />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppCounter from '@/views/index/components/AppCounter.vue'
</script>

<style lang="less"></style>
