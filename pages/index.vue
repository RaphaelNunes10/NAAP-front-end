<template>
  <v-row no-gutters justify="center" class="fill-height">
    <v-col cols="12" sm="6" class="fill-height">
      <v-row
        no-gutters
        align="start"
        class="fill-height"
        style="overflow-y: hidden"
      >
        <v-col cols="12">
          <v-card tile flat dark style="height: 255px">
            <prospect />
          </v-card>
        </v-col>
        <v-col cols="6" class="fill-height">
          <v-card tile light color="EFEFEF" flat class="fill-height">
            <ranking title="Revenues" />
          </v-card>
        </v-col>
        <v-col cols="6" class="fill-height">
          <v-card tile dark color="#282828" flat class="fill-height">
            <ranking title="Tickets" />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <v-card tile light color="EFEFEF" flat class="fill-height">
        <transactions />
      </v-card>
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
