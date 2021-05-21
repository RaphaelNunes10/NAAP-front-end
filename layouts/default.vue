<template>
  <v-app>
    <v-app-bar flat light height="120" app>
      <v-row justify="center" align="center">
        <v-col cols="1" align="center">
          <v-icon size="100" color="#00DE16">fa-angle-up</v-icon>
        </v-col>
        <v-col cols="11" align="left">
          <span class="title">
            BLACKFRIDAY<strong>{{ currentYear }}</strong>
          </span>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentYear: "2021",
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 54px !important;
  font-weight: 300;
}

.title strong {
  font-weight: 700;
}
</style>
