<template>
  <div class="viteup">Viteup</div>
  <div class="technologies">
    <div class="technology">
      <IconVue />
      <span>VUE</span>
    </div>
    <div class="technology">
      <IconVite />
      <span>VITE</span>
    </div>
    <div class="technology">
      <IconOxc />
      <span>OXC</span>
    </div>
  </div>
  <ul class="getting-started">
    <li>Edit <code>src/App.vue</code> to get started.</li>
    <li>
      Edit <code>config/site.ts</code> and <code>index.html</code> to customize the site title and
      description.
    </li>
    <li>Edit <code>src/router/index.ts</code> to customize the page titles and descriptions.</li>
  </ul>
  <VColorScheme />
  <VCounter :initial-count="0" />
  <div class="divider"></div>
  <RouterLink to="/about" class="link">Go to About</RouterLink>
</template>

<script setup lang="ts">
import IconOxc from '@/components/icons/oxc.vue'
import IconVite from '@/components/icons/vite.vue'
import IconVue from '@/components/icons/vue.vue'
import VColorScheme from '@/components/VColorScheme.vue'
import VCounter from '@/views/index/components/VCounter.vue'
import { RouterLink } from 'vue-router'
</script>

<style lang="less">
.technologies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .technology {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    width: 180px;
    height: 180px;
    color: var(--v-text-color);
    background-color: color-mix(in srgb, var(--v-text-color) 5%, transparent);
    border-radius: 12px;

    span {
      font-size: 18px;
      font-weight: bold;
    }
  }

  svg {
    width: 72px;
    height: 72px;
  }
}

.getting-started {
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    position: relative;
    color: var(--v-text-color);
    font-size: 16px;
    line-height: 1.5;
    padding-left: 12px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 6px;
      height: 6px;
      background-color: var(--v-text-color);
      border-radius: 50%;
      background-color: var(--v-text-color);
    }

    code {
      font-family: inherit;
      background-color: color-mix(in srgb, var(--v-text-color) 5%, transparent);
      border-radius: 4px;
      padding: 3px 6px;
    }
  }
}
</style>
