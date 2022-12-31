import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
// 自动导入modules文件夹下所有ts文件
const modules = import.meta.globEager('./modules/**/*.ts');

// 路由暂存
const routeModuleList: Array<RouteRecordRaw> = [];

Object.keys(modules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
});


// 存放动态路由
export const asyncRouterList: Array<RouteRecordRaw> = [...routeModuleList];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/:w+',
        name: '404Page',
        redirect: '/result/404',
    },
];

export const allRoutes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
    history: createWebHashHistory(),
    routes: allRoutes
});

export default router;
