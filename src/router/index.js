import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Data from "../components/Data.vue";
import * as firebase from "firebase/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  console.log("user: ", user);

  if (to.meta.requiresAuth) {
    if (user) {
      next();
    } else {
      console.log("needs auth, and you don't got it");
    }
  } else {
    next();
  }
});

export default router;
