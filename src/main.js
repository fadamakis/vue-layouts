import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

const routes = [
  { path: "/", component: () => import("./pages/HomePage.vue") },
  { path: "/explore", component: () => import("./pages/ExplorePage.vue") },
  { path: "/login", component: () => import("./pages/LoginPage.vue") },
  { path: "/article/:id", component: () => import("./pages/ArticlePage.vue") },
  { path: '/:pathMatch(.*)*', component: () => import("./pages/404.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
