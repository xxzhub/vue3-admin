import type { AppRouteRecordRaw,AppRouteModule } from '@/router/types'


// 登录路由

export const LoginRoute: AppRouteRecordRaw = [
  path:'/login',
  name:'Login',
  component:() =>import('@/views/login.vue'),
  meta:{
    title:'登录'
  }
]