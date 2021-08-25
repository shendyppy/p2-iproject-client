import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Room from "../views/Room.vue";
import Lobby from "../views/Lobby.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/room",
    name: "Room",
    component: Room,
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: Lobby,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");

  switch (to.name) {
    case "Login":
      access_token ? next({ name: "Home" }) : next();
      break;
    case "Register":
      access_token ? next({ name: "Home" }) : next();
      break;
    default:
      next();
  }
});

export default router;
