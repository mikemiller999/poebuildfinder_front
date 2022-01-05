<template>
  <div>
    <br />
    <br />
    <br />
    <section id="faq" class="faq section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h1>{{ character.c_class }}</h1>
          <h2>Build details</h2>
        </div>

        <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
          <li>
            <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">
              Rings and Ammulets
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq1" class="collapse" data-bs-parent=".faq-list">
              <li>
                {{ character.loadout.neck }}
                <br />
                {{ character.loadout.ring1 }}
                <br />
                {{ character.loadout.ring2 }}
              </li>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">
              Armor, Boots, Helmet
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq2" class="collapse" data-bs-parent=".faq-list">
              <li>
                {{ character.loadout.chest }}
                <br />
                {{ character.loadout.helm }}
                <br />
                {{ character.loadout.boots }}
              </li>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">
              Belt, Weapons
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq3" class="collapse" data-bs-parent=".faq-list">
              <li>
                {{ character.loadout.left_hand }}
                <br />
                {{ character.loadout.right_hand }}
                <br />
                {{ character.loadout.belt }}
              </li>
            </div>
          </li>
        </ul>
      </div>
      <button v-on:click="addFavorite()">Save</button>
    </section>
  </div>
</template>
<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>
<script src="assets/js/main.js"></script>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      character: {},
    };
  },
  created: function () {
    axios.get("/characters/" + this.$route.params.id).then((response) => {
      this.character = response.data;
      console.log(this.character);
    });
  },
  methods: {
    addFavorite() {
      axios.post("/save/" + this.character.id);
    },
  },
};
</script>
