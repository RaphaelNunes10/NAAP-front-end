<template>
  <v-card
    tile
    :dark="dark"
    :color="color"
    flat
    :class="`fill-height ${padding}`"
  >
    <v-container class="px-5 py-5 adjust-height">
      <div class="label"><small>Ranking</small></div>
      <div class="header mb-2">{{ title }}</div>
      <v-row v-for="item in data" :key="item">
        <v-col cols="6">
          <v-list-item class="pl-0">
            <v-list-item-content>
              <v-menu absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title v-bind="attrs" v-on="on">
                    <strong>{{ item.store_name }}</strong>
                  </v-list-item-title>
                </template>
                <v-card :dark="dark" :color="color">
                  <v-container>{{ item.store_name }}</v-container>
                </v-card>
              </v-menu>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" align="right">
          <v-list-item class="pl-0">
            <v-list-item-content>
              <v-menu absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title v-bind="attrs" v-on="on">
                    <span v-if="title == 'Revenues'">
                      <strong><small>R$</small></strong>
                    </span>
                    {{ item.total }}
                  </v-list-item-title>
                </template>
                <v-card :dark="dark" :color="color">
                  <v-container>
                    <span v-if="title == 'Revenues'">R$</span>
                    {{ item.total }}
                  </v-container>
                </v-card>
              </v-menu>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    title: null,
    color: null,
    dark: false,
    data: {},
  },
  computed: {
    padding() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "px-1 py-0";
        case "md":
          return "px-1 py-5";
        case "lg":
          return "px-2 py-5";
        default:
          return "px-5 py-5";
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .adjust-height {
    min-height: 500px;
  }
}
</style>