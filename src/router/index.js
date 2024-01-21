import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TodayPage from "../views/TodayPage.vue";
import InboxPage from "../views/InboxPage.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/inbox",
    name: "inbox",
    component: InboxPage,
  },
  {
    path: "/today",
    name: "today",
    component: TodayPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
