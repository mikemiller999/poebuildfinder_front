<template>
  <div>
    <br />
    <br />
    <br />
    <br />

    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h1>Builds</h1>
          <!-- <h2>Search</h2>
          <input type="text" v-model="filter" list="c_class" /> -->
        </div>

        <div v-for="character in orderBy(characters, sortAttr)" :key="character.id">
          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-8 col-md-6 portfolio-item filter-app">
              <router-link v-bind:to="`/characters/${character.id}`">
                <div class="col-lg-8 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img :src="character.image_url" class="img-fluid" alt="" width="1000" height="800" />

                    <div class="portfolio-info">
                      <h4>{{ character.c_class }}</h4>
                      <p>Current Delve: {{ character.depth_level }}</p>
                      <p>See Build</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Section -->
  </div>
</template>

<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>
<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      characters: [],
      currentCharacter: {},
      hover: false,
      sortAttr: "c_class",
    };
  },
  created: function () {
    this.indexBuilds();
  },
  methods: {
    indexBuilds: function () {
      axios.get("/characters").then((response) => {
        this.characters = response.data;
        console.log(this.characters);
      });
    },

    setSortAttr: function (inputAttr) {
      this.sortAttr = inputAttr;
    },
  },
};
</script>
