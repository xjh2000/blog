import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import("../layout/HomeLayout.vue"),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import("../views/HomeView.vue"),
      },
      {path: '/article/:id', name: 'article', component: () => import("../views/ArticleVIew.vue")}
    ],
  },
]

export const routerConfig = createRouter({
  history: createWebHashHistory(),
  routes,
})