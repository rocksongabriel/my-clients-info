import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import { auth } from "../../firebase";
import users from "../store/users";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
      },
      {
        path: "/signup",
        name: "Signup",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Signup.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// checking for authentication
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  
//   });
// });

export default router;

// ! - add a working navigation guard
