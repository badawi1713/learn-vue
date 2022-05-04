import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
// import Home from "../views/Home.vue";
import Jobs from "../views/jobs/Jobs.vue"
import JobDetails from "../views/jobs/JobDetails.vue"
import Page404 from "../views/errors/404.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs
  }, {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: '/jobs',
  },
  // 404
  {
    path: '/:catchAll(.*)',
    component: Page404,
    name: "Page404"
  }
];

const router = createRouter({
  history: createWebHistory(/*BASE URL: process.env.BASE_URL*/),
  // createWebHashHistory() is used so we can click forward and back in our browser to go to previous routes
  routes,
});

export default router;
