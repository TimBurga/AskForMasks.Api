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

    <v-row v-if="requests">
      <v-col align="center">
        <request-table :requests="requests" :loading="loading"></request-table>
      </v-col>
    </v-row>

    <v-row v-if="(!requests || requests.length == 0) && !loading">
      <v-col align="center">
        No requests found
      </v-col>
    </v-row>

     <v-form v-model="valid" ref="form" lazy-validation v-if="requests && requests.length > 0">

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

      <v-row v-if="requests && requests.length > 0">
        <v-col align="center" cols="12" class="mt-2 font-weight-bold">
          <div>Our volunteers say:</div>
        </v-col>
        <v-col align="center" cols="12" v-for="item in recentFeedback" :key="item.id" style="font-size: 90%">
          <div style="max-width: 700px">
            <span style="font-style: italic">{{item.name}} from {{item.address}}:</span> {{item.comment}}
          </div>
        </v-col>
        <v-col cols="12" align="center" class="mt-2">
            <v-btn x-small @click="addFeedback">Are you working on masks? Tell the world!</v-btn>
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
      recentFeedback: [],
      zipRules: [
        v => !v || (v.length == 5 || "5 digits required")
      ],    
    }
  },
  mounted() {
     // this.$refs.zip.focus();    
  },
  created() {
    if (this.$route.params.zip) {
      this.zipCode = this.$route.params.zip;
      this.searchByZip();
    } else {
      this.loadRecent();
    }
    this.loadFeedback();
  },
  methods: {
    addFeedback() {
      this.$router.push("/add-feedback");
    },
    validateZipCode(){
        var zipCodePattern = /^\d{5}$/;
        return this.zipCode && zipCodePattern.test(this.zipCode);
    },
    extendFeedback(f) {
      f.address = `${f.city} ${f.state}`;
    },
    async loadFeedback() {
      axios.get("https://askformasks.azurewebsites.net/api/brags/10").then(rsp => {
        rsp.data.forEach(this.extendFeedback);
        this.recentFeedback = rsp.data;
      });
    },

    async loadRecent() {
        this.loading = true;
        axios.get("https://askformasks.azurewebsites.net/api/requests/10").then((d) => {
          this.requests = d.data;
          this.loading = false;
        }).catch(() => {
          this.requests = null;
        }).finally(() => {
          this.loading = false;
      });
    },
    clickEnter(k) {
      this.search();
    },
    async searchByZip() {
      this.requests = null;
      this.loading = true;
      axios.get(`https://askformasks.azurewebsites.net/api/requests/byzip/${this.zipCode}/distance/200`).then(d => {
        this.requests = d.data.map(r => {
          r.request.organization.distanceInMiles = r.distanceInMiles;
          return r.request;
        });
        setTimeout(() => { this.loading = false; });
      }).catch(() => {
          this.requests = null;
      }).finally(() => {
        this.loading = false;
      });
    },
    async search() {
      if (!this.zipCode) return;
      if (this.$refs.form) this.$refs.form.validate();
      if (!this.valid) return;
      if (!this.validateZipCode()) return;
      this.$router.push("/search/" + this.zipCode);
      this.searchByZip();
      return;
    }
  }
}
</script>
