<template>
  <v-row justify="center">
    <v-col cols="12" sm="6">
      <v-row>
        <v-col cols="12"> <prospect /> </v-col>
        <v-col cols="6" style="background: #efefef">
          <ranking title="Revenues" />
        </v-col>
        <v-col cols="6" style="background: #2a2a2a" class="white--text">
          <ranking title="Tickets" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" style="background: #efefef">
      <transactions />
    </v-col>
  </v-row>
</template>

<script>
import Prospect from "~/components/Prospect.vue";
import Ranking from "~/components/Ranking.vue";
import Transactions from "~/components/Transactions.vue";
export default {
  components: { Prospect, Ranking, Transactions },
};
</script>
