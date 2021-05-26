<template>
  <div :class="heightClass" v-if="data">
    <v-row no-gutters justify="center" class="fill-height">
      <v-col cols="12" md="8" lg="6" class="fill-height">
        <v-row no-gutters align="start" class="fill-height">
          <v-col cols="12" style="height: 40%; min-height: 200px">
            <summary-projection :data="data.summary" />
          </v-col>
          <v-col cols="12" sm="6" style="height: 60%">
            <ranking
              title="Revenues"
              color="#EFEFEF"
              :data="data.revenues_ranking"
            />
          </v-col>
          <v-col cols="12" sm="6" style="height: 60%">
            <ranking
              dark
              title="Tickets"
              color="#282828"
              :data="data.tickets_ranking"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" lg="6" class="d-none d-md-block fill-height">
        <transactions :data="data.transactions" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SummaryProjection from "~/components/Summary.vue";
import Ranking from "~/components/Ranking.vue";
import Transactions from "~/components/Transactions.vue";
export default {
  components: { SummaryProjection, Ranking, Transactions },
  computed: {
    ...mapState("Api", ["data"]),
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
        case "sm":
          return "full-height";
        default:
          return "fill-height";
      }
    },
  },
};
</script>
