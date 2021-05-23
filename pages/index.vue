<template>
  <div :class="heightClass" style="overflow-y: hidden">
    <v-row no-gutters justify="center" class="fill-height">
      <v-col cols="12" md="8" lg="6" class="fill-height">
        <v-row no-gutters align="start" class="fill-height">
          <v-col cols="12">
            <prospect />
          </v-col>
          <v-col cols="12" sm="6" class="fill-height">
            <ranking title="Revenues" color="#EFEFEF" />
          </v-col>
          <v-col cols="12" sm="6" class="fill-height">
            <ranking title="Tickets" color="#282828" dark />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" lg="6" class="d-none d-md-block">
        <transactions />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Prospect from "~/components/Prospects.vue";
import Ranking from "~/components/Ranking.vue";
import Transactions from "~/components/Transactions.vue";
export default {
  components: { Prospect, Ranking, Transactions },
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
    heightClass() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "full-height";
        default:
          return "fill-height";
      }
    },
  },
};
</script>
