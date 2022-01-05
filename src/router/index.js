import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import BuildIndex from "../views/BuildIndex.vue";
import BuildShow from "../views/BuildShow.vue";
import FavoriteSave from "../views/BuildShow.vue";
import FavoriteIndex from "../views/FavoriteIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BuildIndex",
    component: BuildIndex,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/characters", name: "BuildIndex", component: BuildIndex },
  { path: "/characters/:id", name: "BuildShow", component: BuildShow },
  { path: "/favorites", name: "FavoritesIndex", component: FavoriteIndex },
  { path: "/save", name: "FavoriteSave", component: FavoriteSave },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
