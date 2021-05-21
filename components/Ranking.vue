<template>
  <v-container class="px-5 py-5">
    <div class="label"><small>Ranking</small></div>
    <div class="header">{{ title }}</div>
  </v-container>
</template>

<script>
export default {
  props: {
    title: null,
  },
};
</script>

<style>
</style>