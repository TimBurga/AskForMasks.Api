<template>
  <div class="home">

    <v-container fluid>

      <v-row align="center">
        <v-col cols="12">
            <v-img
              alt="Nurse wearing mask"
              contain
              class="shrink"
              :src="require('../assets/nurse.jpg')"
              transition="scale-transition"
              height="200"
            />
        </v-col>
      </v-row>

      <v-form v-model="valid" ref="form" lazy-validation>

        <v-row class="mt-2" justify="center" v-if="true">
          <v-col lg="6" align="center" justify="center">
            <v-form ref="zipForm">
              <div class="d-flex flex-row" style="align-items: baseline; justify-content: center">
                  <v-text-field v-on:keypress.native.enter.prevent="clickEnter" v-model="zipCode" outlined max-length="5" large ref="zip" label="Enter your zip code"
                    style="max-width: 200px" :rules="zipRules">
                  </v-text-field>
                  <v-btn large class="primary ml-2" @click="search">Search</v-btn>
              </div>
            </v-form>
          </v-col> 
        </v-row>

      </v-form>

    <v-row>
      <v-col align="center">
        <request-table :requests="requests" :loading="loading"></request-table>
      </v-col>
    </v-row>
    </v-container>

  </div>
</template>

<script>
import RequestTable from "../components/RequestTable";
import axios from "axios";

export default {
  name: 'Search',
  components: { RequestTable },
  data() {
    return {
      requests: [],
      valid: true,
      zipCode: null,
      loading: true,
      zipRules: [
        v => !v || (v.length == 5 || "5 digits required")
      ],    
    }
  },
  mounted() {
      this.$refs.zip.focus();    
  },
  created() {
    this.load();
  },
  methods: {
    validateZipCode(){
        var zipCodePattern = /^\d{5}$/;
        return this.zipCode && zipCodePattern.test(this.zipCode);
    },
    async load() {
        this.loading = true;
        axios.get("https://askformasks.azurewebsites.net/api/requests/10").then((d) => {
          this.requests = d.data;
          this.loading = false;
        });
    },
    clickEnter(k) {
      this.search();
    },
    watch: {
      zipCode() {
        this.search();
      }
    },
    async search() {
      if (!this.zipCode) return;
      this.$refs.form.validate();
      if (!this.valid) return;
      if (!this.validateZipCode()) return;
      this.requests = null;
      this.loading = true;
      axios.get(`https://askformasks.azurewebsites.net/api/requests/byzip/${this.zipCode}/distance/200`).then(d => {
        this.requests = d.data.map(r => {
          r.request.organization.distanceInMiles = r.distanceInMiles;
          return r.request;
        });
        setTimeout(() => { this.loading = false; });
      });
    }
  }
}
</script>
