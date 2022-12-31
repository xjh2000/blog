import Layout from "../../layout/Layout.vue";

export default [
    {
        path: '/result',
        name: 'result',
        component: Layout,
        redirect: '/result/success',
        meta: {title: '结果页', icon: 'check-circle'},
        children: [
            {
                path: 'success',
                name: 'ResultSuccess',
                component: () => import('../../page/home/HomeBase.vue'),
                meta: {title: '成功页'},
            },
            {
                path: '404',
                name: 'Result404',
                component: () => import('../../page/result/404.vue'),
                meta: {title: '访问页面不存在页'},
            },

        ],
    },
];
