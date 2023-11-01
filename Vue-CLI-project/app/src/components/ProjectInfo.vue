<template>
  <div>
    <h2>{{ project.title }}</h2>
    <p>{{ project.category }}</p>
    <p>{{ project.sphere }}</p>
    <img :src="project.imgSrc" alt="project_photo" />
  </div>
</template>

<script>
export default {
  name: "Project-info",
  props: { project: Object },
  methods: {
    getImgUrl(pic) {
      return require(pic).url;
    },
  },
};
</script>

<style lang="scss" scoped></style>
