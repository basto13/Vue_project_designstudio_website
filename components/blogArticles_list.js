const blogArticlesList = {
  props: ["tagsList"],
  data() {
    return {
      articlesList: [
        {
          imgSrc: "img/blog-details_photo_1.jpg",
          alt: "news_photo",
          heading: "Lets Get Solution For Building Construction Work",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December, 2022",
          tag: "Kitchen",
        },
        {
          imgSrc: "img/blog-details_photo_2.jpg",
          alt: "news_photo",
          heading: "Design sprints are great",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          date: "26 December, 2022",
          tag: "Architecture",
        },
        {
          imgSrc: "img/blog-details_photo_2.jpg",
          alt: "news_photo",
          heading: "Design sprints are great",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          date: "26 December, 2022",
          tag: "Building",
        },
        {
          imgSrc: "img/blog-details_photo_1.jpg",
          alt: "news_photo",
          heading: "Lets Get Solution For Building Construction Work",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December, 2022",
          tag: "Kitchen Planning",
        },

        {
          imgSrc: "img/news_photo_3.jpg",
          alt: "news_photo",
          heading: "Lets Get Solution For Building Construction Work",
          date: "26 December, 2022",
          tag: "Bedroom",
        },
      ],

      selectedTag: null,
    };
  },

  methods: {
    filterArticlesByTag(tag) {
      this.selectedTag = tag;
    },
  },
  computed: {
    filteredArticles() {
      if (!this.selectedTag) {
        // Если тег не выбран, показываем все статьи
        return this.articlesList;
      } else {
        // Фильтруем статьи по выбранному тегу
        return this.articlesList.filter(
          (article) => article.tag === this.selectedTag
        );
      }
    },
  },
  // template: `
  //   <div>
  //     <button @click="filterArticlesByTag(null)">Show All</button>
  //     <button v-for="tag in tagsList" @click="filterArticlesByTag(tag)">{{ tag }}</button>
  //     <div v-for="article in filteredArticles" :key="article.heading">
  //       <img :src="article.imgSrc" :alt="article.alt">
  //       <h2>{{ article.heading }}</h2>
  //       <p>{{ article.text }}</p>
  //       <p>Date: {{ article.date }}</p>
  //       <p>Tag: {{ article.tag }}</p>
  //     </div>
  //   </div>
  // `,

  template: `
  <div>
  <div class="blogpost__block_selectors">
    <h2>Tags</h2>
    <ul >
      <li v-for="tag in tagsList" :key="tag" @click="filterArticlesByTag(tag)">{{ tag }}</li>
    </ul>
    </div>
    <div v-for="article in filteredArticles" :key="article.heading">
    <img :src="article.imgSrc" :alt="article.alt">
    <h2>{{ article.heading }}</h2>
    <p>{{ article.text }}</p>
    <p>Date: {{ article.date }}</p>
    <p>Tag: {{ article.tag }}</p>
    </div>
  </div>
`,
};
