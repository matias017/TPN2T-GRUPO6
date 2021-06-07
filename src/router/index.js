import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../components/Login.vue"
import MenuUsuario from "../components/MenuUsuario.vue";
import MisPracticas from "../components/MisPracticas.vue";
import LasMasPracticadas from "../components/LasMasPracticadas.vue";
import Registrarse from "../components/Registrarse.vue";
import Cancion from "../components/Cancion.js";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MenuUsuario",
   name: "MenuUsuario",
    component: MenuUsuario,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //import ( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Registrarse",
    name: "Registrarse",
    component: Registrarse,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/MisPracticas",
    name: "MisPracticas",
    component: MisPracticas,
  },
  {
    path: "/Cancion",
    name: "cancion",
    component: Cancion,
  },
  {
    path: "/LasMasPracticadas",
    name: "LasMasPracticadas",
    component: LasMasPracticadas,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
