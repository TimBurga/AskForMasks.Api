<template>
  <div class="home">
    <v-container>

      <v-row justify="center">

        <v-col lg="6" align="center">

          <h2
            class="display-1 mt-2 mb-2 font-weight-light"
            align="center"
            justify="center"
          >
            Can you make protective masks?
          </h2>

          <v-img
            alt="Volunteer using sewing machine"
            contain
            class = "flip-horizontally"
            src="../assets/volunteer.jpg"
            transition="scale-transition"
            height="300"
          />

          <v-row>
            <v-col>
              <v-btn color="success" class="mt-2" @click="makeMask">Make a mask</v-btn>
              <br />
              <v-btn color="success" class="mt-4" @click="search">Search Nearby Needs</v-btn>
            </v-col>
          </v-row>

          <!-- <h3 class="mt-4 hidden-md-and-down">From Our Volunteers</h3> -->

          <v-row>
            <v-col lg="12">
              <v-data-table
                :headers="feedbackHeaders"
                :items="recentFeedback"
                :items-per-page="20"
                disable-pagination
                hide-default-header
                hide-default-footer
                style="max-width: 600px"
                class="mt-3 hidden-md-and-down"
                caption="Are you working on masks? Tell the world!"
              >
                <template v-slot:footer="{ }">
                  <div align="center" class="mt-4">
                    <v-btn x-small @click="addFeedback">Done your part?</v-btn>
                  </div>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-col>

        <!-- <v-col cols="2" align="center" justify="center">
          <v-icon x-large>mdi-arrow-right</v-icon>
        </v-col> -->

        <v-col lg="6" align="center">
          <h2
            class="mt-2 mb-2 display-1 font-weight-light"
            align="center"
            justify="center"
          >We connect you with organizations that need them!</h2>
          <v-img
            alt="Nurse wearing mask"
            contain
            class=""
            src="../assets/nurse.jpg"
            transition="scale-transition"
            height="300"
          />

          <v-btn color="primary" class="mt-4" @click="selectProvider">Add your request for masks</v-btn>

          <br />

          <v-btn color="primary" class="mt-4" @click="search">Search requests in your area</v-btn>

          <v-row justify="center">
            <v-col lg="8">
              <request-table :requests="recentRequests" :loading="loading" :compact="true" title="Recent requests"></request-table>
            </v-col>
          </v-row>

        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import RequestTable from "../components/RequestTable";
import axios from "axios";

export default {
  name: "Home",
  components: { RequestTable },
  data() {
    return {
      recentRequests: [],
      recentFeedback: [],
      feedbackHeaders: [
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "", value: "comment" }
      ],
      requestHeaders: [
        { text: null, value: "name" },
        { text: null, value: "address" },
        { text: null, value: "description" },
        { text: null, value: "needs" }
      ],
      loading: true
    };
  },
  created() {
    this.load();
  },
  methods: {
    extendRequest(r) {
      r.address = `${r.street} ${r.city} ${r.state} ${r.zip}`;
    },
    extendFeedback(f) {
      f.address = `${f.city} ${f.state}`;
    },
    makeMask() {
      this.$router.push("/makemask");
    },
    async load() {
      this.loading = true;
      this.recentRequests = (await axios.get("https://askformasks.azurewebsites.net/api/requests/10")).data;
      var feedback = (await axios.get("https://askformasks.azurewebsites.net/api/brags/10")).data;
      feedback.forEach(this.extendFeedback);
      this.recentFeedback = feedback;
      setTimeout(() => { this.loading = false; });
    },
    addFeedback() {
      this.$router.push("/add-feedback");
    },
    mock() {
      this.recentFeedback = [
        {
          name: "Abbie",
          city: "Plano",
          state: "TX",
          description: "I am working on 50 masks for Presby hospital!"
        },
        {
          name: "John",
          city: "Plano",
          state: "TX",
          description: "Shelter 2 needs as many as you can give us"
        },
        {
          name: "Shelby",
          city: "Carrollton",
          state: "TX",
          description: "I delivered 50 masks to the seniors center"
        }
      ];
      this.recentFeedback.forEach(this.extendFeedback);
    },
    search() {
      this.$router.push("/search");
    },
    selectProvider() {
      this.$router.push("/provider");
    }
  }
};
</script>

<style scoped>
.flip-horizontally {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
