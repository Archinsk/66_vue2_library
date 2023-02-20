import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/input",
    name: "inputView",
    component: () => import("../views/InputView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
