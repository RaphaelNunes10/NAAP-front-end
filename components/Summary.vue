<template>
  <v-card tile flat dark class="fill-height">
    <v-row no-gutters>
      <v-col cols="12" sm="2" class="day-col py-5">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12" :align="dayAlignment">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="day-text">Today</div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pt-5">
              <div class="label"><small>Revenues</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div class="text-box" v-bind="attrs" v-on="on">
                    <span class="large-text">
                      <sup class="big-text">R$</sup> {{ data.today.revenues }}
                    </span>
                    &nbsp;
                    <v-icon size="40" color="#00DE16"> mdi-chevron-up </v-icon>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container>R$ {{ data.today.revenues }}</v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pt-5">
              <div class="label"><small>Tickets</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div class="text-box" v-bind="attrs" v-on="on">
                    <span class="large-text">{{ data.today.tickets }}</span>
                    &nbsp;
                    <v-icon size="40" color="#00DE16"> mdi-chevron-up </v-icon>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container>{{ data.today.tickets }}</v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 50%">
      <v-col cols="12" sm="2" class="day-col py-5">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12" :align="dayAlignment">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="day-text">Yesterday</div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pt-5">
              <div class="d-block d-sm-none label"><small>Revenues</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div class="text-box" v-bind="attrs" v-on="on">
                    <span class="medium-text">
                      <sup class="small-text">R$</sup>
                      {{ data.yesterday.revenues }}
                    </span>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container>R$ {{ data.yesterday.revenues }}</v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pt-5">
              <div class="d-block d-sm-none label"><small>Tickets</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <div class="text-box" v-bind="attrs" v-on="on">
                    <span class="medium-text">
                      {{ data.yesterday.tickets }}
                    </span>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container>{{ data.yesterday.tickets }}</v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
        default:
          return "px-5 py-5";
      }
    },
    dayAlignment() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "left";
        default:
          return "right";
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

.text-box {
  display: flex;
  min-width: 0;
}

.small-text {
  font-size: 12px;
  font-weight: 200 !important;
}

.medium-text {
  font-size: 22px;
  font-weight: 400 !important;
}

.big-text {
  font-size: 22px;
}

.large-text {
  font-size: 52px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 1700px) {
  .large-text {
    font-size: 44px;
  }
}

@media only screen and (max-width: 1500px) {
  .big-text {
    font-size: 12px;
  }

  .large-text {
    font-size: 30px;
  }
}

@media only screen and (max-width: 600px) {
  .large-text {
    font-size: 30px;
  }
}
</style>