import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import("../layout/HomeLayout.vue"),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: '/articles',
        component: () => import("../views/ArticlesView.vue"),
        children: [
          {
            path: '/articles/:articleId',
            component: () => import("../views/ArticleView.vue"),
          }
        ]
      }
    ],
  },
]

export const routerConfig = createRouter({
  history: createWebHashHistory(),
  routes,
})