<template>
  <!-- <TestComponent /> -->
  <MainPage />
  <Blog />
</template>

<script>
import MainPage from "./components/MainPage.vue";
import Blog from "./components/Blog.vue";
import TestComponent from "./components/TestComponent.vue";
export default {
  components: {
    // TestComponent,
    // MainPage,
    Blog,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
