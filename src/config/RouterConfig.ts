import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = []


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default {router};