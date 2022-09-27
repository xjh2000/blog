import {RouteRecordRaw} from "vue-router";

export const BASIC_ROUTER: RouteRecordRaw[] = [
  {path: '/', redirect: '/home'},
  {path: '/home', name: 'home', component: () => import("../views/HomeView.vue")},
  {path: '/about', component: () => import("../views/AboutView.vue")},
]