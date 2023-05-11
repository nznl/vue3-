import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import { createRouterGuard } from './guard';
import type { App } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      path: '/',
      component: defineAsyncComponent(() => import('@/views/HomePage.vue')),
      meta: {
        title: '首页'
      }
    }
  ]
})

export async function setupRouter(app: App) {
  app.use(router); // 挂载router
  createRouterGuard(router);
  await router.isReady();
}
