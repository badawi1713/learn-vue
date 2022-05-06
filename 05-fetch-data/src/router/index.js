import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("../views/jobs/"),
  },
  {
    path: "/jobs/:id",
    name: "JobsDetail",
    props: true,
    component: () => import ("../views/jobs/JobsDetail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
