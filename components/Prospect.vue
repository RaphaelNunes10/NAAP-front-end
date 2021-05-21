<template>
  <div class="white--text">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="2" align="right" class="day-col">
        <v-container>
          <v-row align="center" style="height: 100px">
            <v-col cols="12">
              <span class="text-body-1 day-text"><strong>Today</strong></span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="10" class="data-col">
        <v-container>
          <v-row align="center" style="height: 100px">
            <v-col cols="12" sm="8">
              <div class="text-body-1 label">
                <small>Revenues</small>
              </div>
              <br />
              <div class="text-body-1">
                <strong>
                  <span class="big-text">R$</span>
                  <span class="large-text">{{}}</span>
                </strong>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="text-body-1 label">
                <small>Tickets</small>
              </div>
              <br />
              <div class="text-body-1">
                <strong>
                  <span class="large-text">{{}}</span>
                </strong>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="2" align="right" class="day-col">
        <v-container>
          <v-row align="center" style="height: 100px">
            <v-col cols="12">
              <span class="text-body-1 day-text"
                ><strong>Yesterday</strong></span
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="10" class="data-col">
        <v-container>
          <v-row align="center" style="height: 100px">
            <v-col cols="12" sm="8">
              <div class="text-body-1 label">
                <small>Revenues</small>
              </div>
              <br />
              <div class="text-body-1">
                <strong>
                  <span class="big-text">R$</span>
                  <span class="large-text">{{}}</span>
                </strong>
              </div>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="text-body-1 label">
                <small>Tickets</small>
              </div>
              <br />
              <div class="text-body-1">
                <strong>
                  <span class="large-text">{{}}</span>
                </strong>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
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
  color: #00de16;
}

.data-col {
  background: #323232;
}

.big-text {
  font-size: 22px;
}

.large-text {
  font-size: 52px;
}

.label {
  color: #00de16;
  font-weight: 300 !important;
}
</style>