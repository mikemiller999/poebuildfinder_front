<template>
  <section id="portfolio" class="portfolio">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <br />
        <br />
        <br />
        <br />
        <h2>Saved Builds</h2>
      </div>

      <div v-for="favorite in favorites" v-bind:key="favorite.id">
        <router-link v-bind:to="`/characters/${favorite.character_id}`">
          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img :src="favorite.character.image_url" class="img-fluid" alt="" width="572" height="264" />

                <div class="portfolio-info">
                  <h4>{{ favorite.character.c_class }}</h4>
                  <p>See Build</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      favorites: [],

      hover: false,
      sortAttr: "",
    };
  },
  created: function () {
    axios.get("/favorites").then((response) => {
      this.favorites = response.data;
      console.log(this.favorites);
    });
  },

  methods: {},
};
</script>
