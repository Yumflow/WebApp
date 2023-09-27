import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/products'
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/pages/PageProducts.vue')
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('@/pages/PageBag.vue')
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
