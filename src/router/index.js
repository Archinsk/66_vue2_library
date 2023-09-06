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
    path: "/checkboxesgroup",
    name: "checkboxesGroupView",
    component: () => import("../views/CheckboxesGroupView.vue"),
  },
  {
    path: "/radiogroup",
    name: "radioGroupView",
    component: () => import("../views/RadioGroupView.vue"),
  },
  {
    path: "/textarea",
    name: "textareaView",
    component: () => import("../views/TextareaView.vue"),
  },
  {
    path: "/daterange",
    name: "dateRangeView",
    component: () => import("../views/DateRangeView.vue"),
  },
  {
    path: "/form",
    name: "formView",
    component: () => import("../views/FormView.vue"),
  },
  {
    path: "/filter",
    name: "filterView",
    component: () => import("../views/FilterView.vue"),
  },
  {
    path: "/itemslist",
    name: "itemsListView",
    component: () => import("../views/ItemsListView.vue"),
  },
  {
    path: "/alert",
    name: "alertView",
    component: () => import("../views/AlertView.vue"),
  },
  {
    path: "/collapse",
    name: "collapseView",
    component: () => import("../views/CollapseView.vue"),
  },
  {
    path: "/collapsebutton",
    name: "collapseButtonView",
    component: () => import("../views/CollapseButtonView.vue"),
  },
  {
    path: "/accordion",
    name: "accordionView",
    component: () => import("../views/AccordionView.vue"),
  },
  {
    path: "/card",
    name: "cardView",
    component: () => import("../views/CardView.vue"),
  },
  {
    path: "/pagination",
    name: "paginationView",
    component: () => import("../views/PaginationView.vue"),
  },
  {
    path: "/paginationitemsperpage",
    name: "paginationItemsPerPageView",
    component: () => import("../views/PaginationItemsPerPageView.vue"),
  },
  {
    path: "/paginationpageselector",
    name: "paginationPageSelectorView",
    component: () => import("../views/PaginationPageSelectorView.vue"),
  },
  {
    path: "/paginationbutton",
    name: "paginationButtonView",
    component: () => import("../views/PaginationButtonView.vue"),
  },
  {
    path: "/preloader",
    name: "preloaderView",
    component: () => import("../views/PreloaderView.vue"),
  },
  {
    path: "/modal",
    name: "modalView",
    component: () => import("../views/ModalView.vue"),
  },
  {
    path: "/modalbutton",
    name: "modalButtonView",
    component: () => import("../views/ModalButtonView.vue"),
  },
  {
    path: "/nav",
    name: "navView",
    component: () => import("../views/NavView.vue"),
  },
  {
    path: "/navitem",
    name: "navItemView",
    component: () => import("../views/NavItemView.vue"),
  },
  {
    path: "/navlink",
    name: "navLinkView",
    component: () => import("../views/NavLinkView.vue"),
  },
  {
    path: "/dropdownitem",
    name: "dropdownItemView",
    component: () => import("../views/DropdownItemView.vue"),
  },
  {
    path: "/navtabs",
    name: "navTabsView",
    component: () => import("../views/NavTabsView.vue"),
  },
  {
    path: "/navtablink",
    name: "navTabLinkView",
    component: () => import("../views/NavTabLinkView.vue"),
  },
  {
    path: "/tabcontent",
    name: "tabContentView",
    component: () => import("../views/TabContentView.vue"),
  },
  {
    path: "/tabpane",
    name: "tabPaneView",
    component: () => import("../views/TabPaneView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
