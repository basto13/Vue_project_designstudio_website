import ProjectDetails from './components/ProjectDetails.vue';
<template>
    <Navbar />

    <router-view></router-view>

    <FooterPage />
</template>

<script>
import MainPage from "./components/MainPage.vue";
import Blog from "./components/Blog.vue";
import Navbar from "./components/Navbar.vue";
import FooterPage from "./components/FooterPage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import ProjectDetails from "./components/ProjectDetails.vue";

export default {
  components: {
    MainPage,
    Navbar,
    Blog,
    ProjectPage,
    ProjectDetails,
    FooterPage
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
