<template>
  <!-- <TestComponent /> -->
  <MainPage />
  <Blog />
  <Navbar />
  <FooterPage />
</template>

<script>
import MainPage from "./components/MainPage.vue";
import Blog from "./components/Blog.vue";
import Navbar from "./components/Navbar.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  components: {
    Blog,

  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
