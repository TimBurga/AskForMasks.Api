<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

    <router-link to="/" color="white--text">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </router-link>

     <v-toolbar-title @click="goHome">Ask for Masks</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn class="primary">
        Contact Us
      </v-btn> -->


    </v-app-bar>

    <v-content>
      <router-view>
      </router-view>
    </v-content>

    <v-footer>
      <v-row>
        <v-col align="right">
          <span>TBSR Copyright 2020</span>
          &nbsp;
          <v-btn small icon class="default" @click="contactUs">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'AskForMasks',

  components: {
  },

  data: () => ({
    //
  }),
  mounted() {
    firebaseScripts.forEach(addScript);
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    contactUs() {
      this.$router.push("contact-us");
    }
  }
};

function addScript(scriptUrl) {
    let el = document.createElement('script')
    el.setAttribute('src', scriptUrl)
    document.body.appendChild(el)
}

var firebaseScripts = [
    "/__/firebase/7.13.1/firebase-app.js",
    "/__/firebase/7.13.1/firebase-analytics.js",
    "/__/firebase/init.js"];
</script>

<style]>
.home .v-data-table__mobile-row__header {
  display: none !important;
}
.home .v-data-table__mobile-row__cell {
  text-align: center !important;
}
.home .v-data-table__mobile-row {
  display: flex !important;
  justify-content: center !important;
}

.home .v-data-table__mobile-table-row {
  min-height: 0;
}

tr.no-hover:hover {
  background-color: #ffffff !important;
}
</style>