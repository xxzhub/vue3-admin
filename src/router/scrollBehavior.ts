//刷新导航位置
import type { RouteLocationNormalized } from 'vue-router';

export async function scrollBehavior(to,from,savedPosition) {
  const behavior = 'smooth';
  if (savedPosition){
    return { ...savedPosition, behavior}
  }
  if(to.hash) {
    return { el: decodeURI(to.hash), behavior };
  }
  if (to.matched.some((m: RouteLocationNormalized) => m.meta.scrollToTop === false)) {
    return false;
  }

  return { left: 0, top: 0, behavior };
}