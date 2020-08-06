import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ToDo from "../views/Todo.vue";
import Drag from "../views/Drag.vue";
import ViewChart from "../views/ViewChart.vue";
import ViewModal from "../views/ViewModal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: ToDo,
  },
  {
    path: "/drag",
    name: "Drag",
    component: Drag,
  },
  {
    path: "/chart",
    name: "ViewChart",
    component: ViewChart,
  },
  {
    path: "/modal",
    name: "ViewModal",
    component: ViewModal,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
