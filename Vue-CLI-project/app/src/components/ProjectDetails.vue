<template>
  <div>
    <Navbar />

    <div class="intro-section">
      <img
        src="../assets/blog-details_intro_photo.jpg"
        alt="project-details_intro_photo"
        class="intro-section__img"
      />
    </div>

    <div class="container">
      <div>
        <div class="swiper">
          <ProjectDetailsSwiper />
        </div>
      </div>

      <FooterPage />
    </div>
  </div>
</template>

<script>
import FooterPage from "./FooterPage.vue";
import Navbar from "./Navbar.vue";
import ProjectDetailsSwiper from "./ProjectDetailsSwiper.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: { Navbar, FooterPage, ProjectDetailsSwiper },
};
</script>

<style lang="scss" scoped></style>
