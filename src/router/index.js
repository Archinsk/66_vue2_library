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
  {
    path: "/select",
    name: "selectView",
    component: () => import("../views/SelectView.vue"),
  },
  {
    path: "/checkbox",
    name: "checkboxView",
    component: () => import("../views/CheckboxView.vue"),
  },
  {
    path: "/textarea",
    name: "textareaView",
    component: () => import("../views/TextareaView.vue"),
  },
  {
    path: "/daterange",
    name: "daterangeView",
    component: () => import("../views/DaterangeView.vue"),
  },
  {
    path: "/form",
    name: "formView",
    component: () => import("../views/FormView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
