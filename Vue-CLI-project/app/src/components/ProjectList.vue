<template>
  <div>
    <ProjectInfo class="project-item"
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
      :category="category"
      :sphere="sphere"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import ProjectInfo from "./ProjectInfo.vue";

export default {
  props: {
    category: String,
  },
  data() {
    return {
      projectsArray: [
        {
          id: uuidv4(),
          title: "Minimal Bedroom",
          category: "Bedroom",
          sphere: "Decor / Architecture",
          imgSrc: "/public/img/ProjectPhoto_1.jpg",
        },
        {
          id: uuidv4(),
          title: "Minimal Bedroom",
          category: "Bathroom",
          sphere: "Decor / Architecture",
          imgSrc: "/public/img/ProjectPhoto_2.jpg",
        },
        {
          id: uuidv4(),
          title: "Minimal Bedroom",
          category: "Living area",
          sphere: "Decor / Architecture",
          imgSrc: "/public/img/ProjectPhoto_3.jpg",
        },
        {
          id: uuidv4(),
          title: "Minimal Bedroom",
          category: "Kitchen",
          sphere: "Decor / Architecture",
          imgSrc: "/public/img/ProjectPhoto_4.jpg",
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.category === "") {
        return this.projectsArray;
      }
      return this.projectsArray.filter(
        (project) =>
          project.category.toLowerCase() === this.category.toLowerCase()
      );
    },
  },
  components: { ProjectInfo },
};
</script>

<style lang="scss" scoped></style>
