<template>
  <div>
    <div class="intro-section">
      <img
        src="../assets/ProjectPageIntro.jpg"
        alt="blogpage_intro_photo"
        class="intro-section__img"
      />
      <div class="page-intro__heading">
        <h class="page-intro__heading_title">Our Project</h>
        <p class="page-intro__heading_navbar">Home / Project</p>
      </div>
    </div>
    <div class="categories">
      <button @click="pickCategory('Bathroom')" class="categories_item">
        Bathroom
      </button>
      <button @click="pickCategory('Bedroom')" class="categories_item">
        Bedroom
      </button>
      <button @click="pickCategory('Kitchen')" class="categories_item">
        Kitchen
      </button>
      <button @click="pickCategory('Living Area')" class="categories_item">
        Living Area
      </button>
    </div>
    <div class="container">
      <div>
        <ProjectList :category="category" class="projects-list" />
      </div>
    </div>
  </div>
</template>

<script>
import FooterPage from "./FooterPage.vue";
import Navbar from "./Navbar.vue";
import ProjectList from "./ProjectList.vue";

export default {
  data() {
    return {
      category: "",
    };
  },
  methods: {
    pickCategory(category) {
      this.category = category;
    },
  },
  components: { Navbar, ProjectList, FooterPage },
};
</script>

<style lang="scss" scoped></style>
