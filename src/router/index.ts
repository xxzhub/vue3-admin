import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '@/views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
