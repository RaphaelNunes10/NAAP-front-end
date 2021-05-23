<template>
  <div>
    <v-app-bar app absolute clipped-right flat light height="120">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="2" md="1" align="center">
            <v-img
              contain
              :width="logoSize"
              :height="logoSize"
              class="logo"
              src="logo.svg"
              alt="logo"
            />
          </v-col>
          <v-col cols="8" md="11" align="left">
            <span class="title">
              BLACKFRIDAY<strong>{{ currentYear }}</strong>
            </span>
          </v-col>
          <v-col cols="2" md="1" align="center" class="d-block d-md-none">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      right
      app
      clipped
      temporary
      v-model="drawer"
      :width="drawerWidth"
    >
      <transactions />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Transactions from "~/components/Transactions.vue";
export default {
  data() {
    return {
      currentYear: "2021",
      drawer: false,
    };
  },
  components: {
    Transactions,
  },
  computed: {
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 32;
        case "sm":
          return 32;
        default:
          return 40;
      }
    },
    drawerWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "90%";
        case "sm":
          return "50%";
      }
    },
  },
};
</script>

<style scoped>
.logo {
  margin-bottom: 12px;
}

.title {
  font-size: 54px !important;
  font-weight: 300;
}

.title strong {
  font-weight: 700;
}

@media only screen and (max-width: 960px) {
  .logo {
    margin-bottom: 10px;
  }

  .title {
    font-size: 42px !important;
  }
}

@media only screen and (max-width: 600px) {
  .logo {
    margin-bottom: 0px;
  }

  .title {
    font-size: 20px !important;
  }
}
</style>