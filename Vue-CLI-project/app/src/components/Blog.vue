<template>
  <div>
    <body>
      <Navbar />
      <!-- <header>
        <div class="container">
          <div class="navbar">
            <div class="navbar__company">
              <svg
                class="navbar__company__logo"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                  fill="#CDA274"
                />
              </svg>
              <div class="navbar__company__name">Interno</div>
            </div>
            <div class="navbar__menu">
              <div class="navbar__menu__option">Home</div>
              <div class="navbar__menu__option">Project</div>
              <div class="navbar__menu__option">Blog</div>
            </div>
          </div>
        </div>
      </header> -->
      <main>
        <div class="intro-section">
          <img
            src="../assets/blogpage_intro_photo.jpg"
            alt="blogpage_intro_photo"
            class="intro-section__img"
          />
        </div>
        <div class="container">
          <div class="post-content">
            <h class="post-content__heading">Latest Post</h>
            <div class="post-content__card">
              <img
                src="../assets/blog-post-img.jpg"
                alt="blog-post-img"
                class="post-content__card__img"
              />
              <div class="post-content__card__description">
                <h class="post-content__card__description__heading"
                  >Low Cost Latest Invented Interior Designing Ideas</h
                >
                <p class="post-content__card__description__text">
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpis dignissim maximus.posuere in.Contrary to popular
                  belief. Lorem Ipsum is not simply random text. It has roots in
                  a piece of classica.
                </p>
                <p class="post-content__card__description__date">
                  26 December,2022
                </p>
              </div>
            </div>
          </div>
          <div id="blogApp" class="articles-news">
            <div class="news__block">
              <div
                class="news__block__item"
                v-for="newsItem in newsItems"
                :key="newsItem.heading"
              >
                <img
                  :src="newsItem.imgSrc"
                  :alt="newsItem.alt"
                  class="news__block__item__img"
                />
                <div class="news__block__item__heading">
                  {{ newsItem.heading }}
                </div>
                <div class="news__block__item__date">{{ newsItem.date }}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="container">
        <FooterPage />
      </div>
    </body>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import FooterPage from "./FooterPage.vue";

export default {
  data() {
    return {
      newsItems: [
        {
          imgSrc: "../assets/news_photo_1.jpg",
          alt: "news_photo",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December, 2022",
        },
        {
          imgSrc: "../assets/news_photo_2.jpg",
          alt: "news_photo",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December, 2022",
        },
        {
          imgSrc: "../assets/news_photo_3.jpg",
          alt: "news_photo",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December, 2022",
        },
      ],
    };
  },
  components: { Navbar },
};
</script>

<style lang="scss" scoped></style>
