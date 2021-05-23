<template>
  <v-app style="min-width: 300px">
    <top-bar />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
export default {
  components: {
    TopBar,
  },
};
</script>

<style>
</style>