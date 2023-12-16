import { createApp } from "vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import App from "./App.vue";
import ProjectPage from "./components/ProjectPage.vue";
import MainPage from "./components/MainPage.vue";
import Blog from "./components/Blog.vue";
import Blogdetails from "./components/Blogdetails.vue";
import NotFound from "./components/NotFound.vue";
import store from "./store";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: MainPage },
    { path: '/projects', component: ProjectPage },
    { path: '/blog', component: Blog },
    { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(store)

app.use(router);

app.mount("#app");
