<template>
  <div id="app">
    <div
      v-if="loading"
      class="
        fixed
        top-0
        left-0
        w-full
        h-screen
        grid
        place-content-center
        loader
        z-10
      "
    >
      <breeding-rhombus-spinner
        :animation-duration="2000"
        :size="65"
        :color="'#fff'"
      />
    </div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { BreedingRhombusSpinner } from "epic-spinners";

export default {
  data() {
    return {
      loading: true,
    };
  },
  components: {
    Navbar,
    BreedingRhombusSpinner,
  },
  created() {
    this.loading = true;
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>

<style lang="scss">
body {
  font-family: "STIX Two Text", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: rgb(25, 25, 25);
}
.loader {
  background: #161616;
}
</style>
