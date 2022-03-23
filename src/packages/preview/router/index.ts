import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/preview",
    name: "Home",
    component: () => import("../views/home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
