<template>
  <div>
    <!-- <h5>Search</h5>
    <input type="text" v-model="filter" list="c_class" /> -->

    <div class="container">
      <div class="row">
        <div class="col-2">
          <!-- <button v-on:click="setSortAttr('c_class')">Sort by class</button>
          <button v-on:click="setSortAttr('depth_level')">Sort by max delve</button> -->
        </div>
        <div class="col">
          <div v-for="character in orderBy(characters, sortAttr)" :key="character.id">
            <div class="card w-75">
              <span>
                <div class="card-body">
                  <!-- <img :src="'../assets/' + character.c_class + '.png'" alt="" /> -->
                  <h4 class="card-title">{{ character.c_class }}</h4>
                  <p>Max delve:</p>
                  <p class="card-text">{{ character.depth_level }}</p>
                  <router-link v-bind:to="`/characters/${character.id}`">
                    <a href="" class="btn btn-primary">See More</a>
                  </router-link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
span:hover {
  background: green;
  transition: background-color 0.25s ease;
}
</style>

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
