import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import GalleryContainer from "./components/GalleryContainer.vue";
import ProfilePage from "./components/ProfilePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/gallery", component: GalleryContainer },
    { path: "/", component: ProfilePage },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
