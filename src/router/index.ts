import { SITE_TITLE, SITE_DESCRIPTION, SITE_TITLE_TEMPLATE } from '@/config/site'
import IndexView from '@/views/index/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/Index.vue'),
      meta: {
        title: 'About',
        description: 'Learn more about Viteup',
      },
    },
  ],
})

router.beforeEach((to) => {
  document.title = to.meta.title ? SITE_TITLE_TEMPLATE.replace(':title', to.meta.title) : SITE_TITLE
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', to.meta.description || SITE_DESCRIPTION)
})

export default router
