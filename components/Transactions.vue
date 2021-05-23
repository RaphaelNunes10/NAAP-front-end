<template>
  <v-card tile light color="#EFEFEF" flat :class="`fill-height ${padding}`">
    <v-container class="px-5 py-5">
      <div class="header">Transactions</div>
      <br />
      <v-row v-for="item in data" :key="item">
        <v-col cols="6">
          <v-list-item class="pl-0">
            <v-list-item-content>
              <v-menu absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    class="item-title mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ item.store_name }}
                  </v-list-item-title>
                </template>
                <v-card color="#EFEFEF">
                  <v-container>{{ item.store_name }}</v-container>
                </v-card>
              </v-menu>
              <v-list-item-subtitle class="item-subtitle">
                <small>10:32</small>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" align="right">
          <v-list-item class="pl-0">
            <v-list-item-content>
              <v-menu absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    v-bind="attrs"
                    v-on="on"
                    class="item-title"
                  >
                    <strong>R$ {{ item.total }}</strong>
                  </v-list-item-title>
                </template>
                <v-card color="#EFEFEF">
                  <v-container>R$ {{ item.total }}</v-container>
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
@media only screen and (max-width: 600px) {
  .item-title {
    font-size: 12px !important;
  }
}
</style>