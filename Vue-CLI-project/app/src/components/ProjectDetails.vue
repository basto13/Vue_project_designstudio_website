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
        <div class="project-info-table">
                  <div class="project-info">
        <h1 class="project-info_heading">{{ heading }}</h1>
        <p class="project-info_text">{{ text }}</p>
      </div>
        </div>

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

import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["heading", "text"]),
  },
  methods: {},
  components: { Navbar, FooterPage, ProjectDetailsSwiper },
};
</script>

<style lang="scss" scoped></style>
