<template>
  <container class="fill-height">
    <v-row no-gutters style="height: 50%">
      <v-col cols="2" class="day-col pt-5">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12" align="right">
            <v-container class="px-5 py-5">
              <div class="day-text">Today</div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="data-col">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="px-5 py-5">
              <div class="label"><small>Revenues</small></div>
              <div>
                <sup class="big-text">R$</sup>
                <span class="large-text">952.560,00</span>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="data-col">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="px-5 py-5">
              <div class="label"><small>Tickets</small></div>
              <div>
                <span class="large-text">4320</span>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 50%">
      <v-col cols="2" class="day-col" align="right">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12" align="right">
            <v-container class="px-5 py-5">
              <div class="day-text">Yesterday</div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="data-col">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="px-5 py-5">
              <div class="d-block d-sm-none label"><small>Revenues</small></div>
              <div>
                <sup class="small-text">R$</sup>
                <span class="medium-text">754.521,32</span>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="data-col">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="px-5 py-5">
              <div class="d-block d-sm-none label"><small>Tickets</small></div>
              <div>
                <span class="medium-text">3259</span>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </container>
</template>

<script>
export default {
  computed: {
    gutters() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        default:
          return true;
      }
    },
  },
};
</script>

<style>
.day-col {
  background: #282828;
}

.day-text {
  font-size: 14px;
  font-weight: 600;
  color: #00de16;
}

.data-col {
  background: #323232;
}

.small-text {
  font-size: 12px;
  font-weight: 200 !important;
}

.medium-text {
  font-size: 22px;
  font-weight: 300 !important;
}

.big-text {
  font-size: 22px;
}

.large-text {
  font-size: 52px;
}
</style>