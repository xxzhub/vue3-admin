import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import {scrollBehavior} from './scrollBehavior'// 滚动条位置

import { basicRoutes } from './routes/';//基础路由

import login from '@/views/login/index.vue'

const router = createRouter({
  history:createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  strict:true,
  scrollBehavior: scrollBehavior
})

//重置路由

export function resetRouter(){
  
}



export default router
