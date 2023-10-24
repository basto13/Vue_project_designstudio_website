<template>
  <div>
    <img class="big" :src="bigImg" />
    <div>
      <img
        @click="changeImg(cat)"
        v-for="(cat, index) in cats"
        :key="index"
        :src="cat"
      />
    </div>
  </div>
</template>

<script>
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

export default {
  data() {
    return {
      cats: {
        cat1: img1,
        cat2: img2,
        cat3: img3,
        cat4: img4,
      },
      bigImg: "",
    };
  },
  methods: {
    changeImg(catURL) {
      this.bigImg = catURL;
    },
  },
};
</script>

<style lang="scss" scoped></style>
