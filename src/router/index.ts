import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import login from '@/views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
