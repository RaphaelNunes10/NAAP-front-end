<template>
  <v-app style="min-width: 300px">
    <top-bar />
    <spinner v-if="spinner" />
    <v-main style="height: 100vh">
      <v-sheet height="100%">
        <nuxt />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TopBar from "~/components/TopBar.vue";
import Spinner from "~/components/Spinner.vue";
export default {
  components: {
    TopBar,
    Spinner,
  },
  computed: {
    ...mapState("Spinner", ["spinner"]),
  },
  methods: {
    ...mapActions("Api", ["show"]),
  },
  mounted() {
    this.show();
  },
};
</script>

<style>
</style>