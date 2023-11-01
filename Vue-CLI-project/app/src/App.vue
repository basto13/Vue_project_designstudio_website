import ProjectDetails from './components/ProjectDetails.vue';
<template>
  <!-- <TestComponent /> -->
  <MainPage />
  <Blog />
  <Navbar />
  <FooterPage />
  <ProjectPage />
  <ProjectDetails />
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
    // MainPage,
    // Blog,
    // ProjectPage,
    ProjectDetails,
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
