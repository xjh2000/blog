import Layout from "../../layout/Layout.vue";
import {DashboardIcon} from "tdesign-icons-vue-next";

export default [
    {
        path: '/home',
        component: Layout,
        redirect: '/home/base',
        name: 'home',
        meta: {title: '主页', icon: DashboardIcon},
        children: [
            {
                path: 'base',
                name: 'HomeBase',
                component: () => import('../../page/home/HomeBase.vue'),
                meta: {title: '主页基础'},
            }
        ],
    },
];
