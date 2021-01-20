import type { AppRouteModule } from '@/router/types'

export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/main-out',
    name: 'MainOut',
    component: () => import('@/view/main-out/index.vue'),
    meta:{
      title:'MainOut',
      openAuth:true
    }
  }
]

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);