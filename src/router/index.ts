import {createRouter, createWebHashHistory, RouteRecordNormalized} from "vue-router";
import {BASIC_ROUTER} from "./base";

const modules = import.meta.globEager('./modules/*.ts');

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);

let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...BASIC_ROUTER,
    ...appRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFind.vue'),
    }
  ],
});

export default router;
