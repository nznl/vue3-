import type { Router } from 'vue-router';

export function createRouterGuard(router: Router) {
  router.beforeEach(async(to, from, next) => {
    // 处理某些权限问题
    next();
  });

  router.afterEach((to, from) => {
    // 设置页面title
    document.title = to.meta.title as string;
  })
}