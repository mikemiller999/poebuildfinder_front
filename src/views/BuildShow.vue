<template>
  <div>
    <section id="faq" class="faq section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
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
              <p>
                {{ character.loadout.neck }}
                {{ character.loadout.ring1 }}
                {{ character.loadout.ring2 }}
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">
              Armor, Gloves, Boots, Helmet
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq2" class="collapse" data-bs-parent=".faq-list">
              <p>
                {{ character.loadout.chest }}
                {{ character.loadout.helm }}
                {{ character.loadout.gloves }}
                {{ character.loadout.boots }}
              </p>
            </div>
          </li>

          <li>
            <div d,ta-bs-toggle="collapse" href="#faq3" class="collapsed question">
              Belt, Weapons
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq3" class="collapse" data-bs-parent=".faq-list">
              <p>
                {{ character.loadout.left_hand }}
                {{ character.loadout.right_hand }}
                {{ character.loadout.belt }}
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">
              Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq4" class="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq5" class="collapsed question">
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq5" class="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc
                vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus
                gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq6" class="collapsed question">
              Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?
              <i class="bi bi-chevron-down icon-show"></i>
              <i class="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq6" class="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada
                nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis
                tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas
                fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- End F.A.Q Section -->
    <!-- <img :src="'../assets/' + character.c_class + '.png'" alt="" /> -->
    <h1>{{ character.c_class }}</h1>
    <h6>{{ character.loadout.helm }}</h6>
    <h6>{{ character.loadout.chest }}</h6>
    <h6>{{ character.loadout.belt }}</h6>
    <h6>{{ character.loadout.boots }}</h6>
    <h6>{{ character.loadout.left_hand }}</h6>
    <h6>{{ character.loadout.right_hand }}</h6>
    <h6>{{ character.loadout.ring1 }}</h6>
    <h6>{{ character.loadout.ring2 }}</h6>
    <h6>{{ character.loadout.neck }}</h6>
  </div>
</template>

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
    });
  },
  methods: {},
};
</script>
