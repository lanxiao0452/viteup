import IndexView from '@/views/index/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const defaultTitle = 'Viteup'
const defaultDescription = 'Welcome to Viteup'
const titleTemplate = ':title | Viteup'

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
  if (to?.meta?.title) {
    document.title = titleTemplate.replace(':title', to.meta.title)
  } else {
    document.title = defaultTitle
  }

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', to?.meta?.description ?? defaultDescription)
})

export default router
