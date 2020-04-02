<template>
  <div>
    <v-row>
      <v-col>
        <!-- <div v-if="compact">
          <table>
            <tr v-for="r in requests1" :key="r.id" style="text-align: center" class="pt-2">
              <td class="">
                <router-link to="/search">{{r.name}}</router-link>
              </td>
              <td>
                {{r.city}} {{r.state}}
              </td>
              <td>
                {{r.requestDate}}
              </td>
            </tr>
          </table>
        </div> -->

        <div v-if="loading">Loading data...</div>

        <v-data-table
          :items="requests1"
          :headers="requestHeaders"
          :items-per-page="10"
          :hide-default-footer="compact"
          :hide-default-header="compact"
          :hide-pagination="true"
          class="mt-3"
          :caption="title"
          v-if="!loading"
          style="max-width: 1000px">

          <!-- <template v-slot:header="{ }">
            <thead>
              <th>Organization</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Description</th>
            </thead>
          </template> -->

          <template v-slot:body="{ items }">
            <tbody v-if="!compact">
              <tr v-for="item in items" :key="item.id" class="no-hover">
                <td class="hidden-sm-and-down" width="8%" v-if="showDistanceColumn">
                  <div class="">{{item.distanceInMiles}}</div>
                </td>
                <td width="20%">
                  <div class="subtitle-1 font-weight-bold">{{item.name}}</div>
                  <div v-if="showDistanceColumn" class="hidden-md-and-up">{{item.distanceInMiles}} mile(s)</div>
                </td>
                <td class="hidden-sm-and-down" v-if="!compact">
                  <div class="">{{item.street}} </div>
                  <div class="">{{item.city}} {{item.state}}, {{item.zip}}</div>
                </td>
                <td class="hidden-sm-and-down" width="40%">
                  <div>{{item.contactName}}</div>
                  <div>{{item.email}} {{item.phone}}</div>
                  <div class="mt-1  font-weight-light">{{item.description}}</div>
                  <div class="mb-1 font-weight-light" v-html="item.specialInstructions"></div>
                </td>
                <td class="hidden-md-and-up">
                  <div class="">{{item.street}} </div>
                  <div class="">{{item.city}} {{item.state}}, {{item.zip}}</div>
                  <div>{{item.contactName}}</div>
                  <div>{{item.email}} {{item.phone}}</div>
                  <div style="word-break: break-all" class="mt-1  font-weight-light">{{item.description}}</div>
                  <div style="word-break: break-all" class="mb-1 font-weight-light" v-html="item.specialInstructions"></div>
                </td>
              </tr>
            </tbody>

            <tbody v-if="compact">
              <tr v-for="item in items" :key="item.id" @click="goToSearch">
                <td class="font-weight-bold">
                  <router-link to="/search">{{item.name}}</router-link>
                </td>
                <td>
                  {{item.city}} {{item.state}}
                </td>
                <td>
                  {{item.requestDate}}
                </td>
              </tr>
            </tbody>

          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col cols="12" v-for="r in requests1" :key="r.id">
        <v-card class="mb-1" style="max-width: 700px">
          <v-card-title>{{r.name}}</v-card-title>
          <v-card-subtitle>
            <div v-if="r.street">{{r.street}}</div>
            <div>{{ r.city }} {{r.state}}, {{r.zip}}</div>
            <div v-if="r.contactInfo">{{ r.contactInfo }}</div>
          </v-card-subtitle>
          <v-card-text>
            <div v-if="r.description">{{r.description}}</div>
            <div v-if="r.needs">{{r.needs}}</div>
            <div v-if="r.specialInstructions">{{r.specialInstructions}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  props: ["requests", "compact", "loading", "title"],
  components: {},
  name: "Search",
  data() {
    return {
      itemsPerPage: 20,
      showDistanceColumn: false,
    };
  },
  mounted() {
    // this.mock();
  },
  components: {},
  methods: {
    goToSearch() {
      this.$router.push("/search");
    },
    mock() {
      this.requests = [
        {
          name: "Shelter 1",
          city: "Plano",
          state: "TX",
          description: "Shelter 2 needs as many as you can give us",
          needs:
            "Whatever you can give us. We are working with elderly patients and will appreciate any help"
        },
        {
          name: "Shelter 1",
          city: "Plano",
          state: "TX",
          description: "Shelter 2 needs as many as you can give us",
          needs: "Whatever you can give us"
        },
        {
          name: "Shelter 1",
          city: "Plano",
          state: "TX",
          description: "Shelter 2 needs as many as you can give us",
          needs: "Whatever you can give us"
        },
        {
          name: "Shelter 1",
          city: "Plano",
          state: "TX",
          description: "Shelter 2 needs as many as you can give us",
          needs: "Whatever you can give us"
        }
      ];
    }
  },
  computed: {
    requests1() {
      if (!this.requests) return [];
      var r = this.requests && this.requests.map(mapRequest);
      this.showDistanceColumn = r && r.length > 0 && (r[0].distanceInMiles || r[0].distanceInMiles === 0);
      return r;
    },
    requestHeaders() {
      var result = [
        { text: "Miles" , value: "distanceInMiles" },
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Description", value: "needs" },
      ];

      if (!this.showDistanceColumn) result.splice(0, 1);

      return result;
    }
  }
};

function mapRequest(r) {
  var o = r.organization;
  console.log(o);
  return {
    name: o.name,
    address: `${o.addressLine1} ${o.addressLine2} ${o.city} ${o.state} ${o.zipCode}`,
    street: o.addressLine1
      ? o.addressLine1 + (o.addressLine2 ? " " + o.addressLine2 : "")
      : null,
    city: o.city,
    state: o.state,
    zip: o.zipCode,
    email: o.email,
    phone: o.phone,
    contactName: o.contactName,
    contactInfo: [o.phone, o.email].filter(i => i).join(" "),
    description: o.description,
    needs: o.needs,
    specialInstructions: addLinkMarkup(o.specialInstructions),
    distanceInMiles: o.distanceInMiles,
    requestDate: new Date(r.requestDate).toLocaleDateString()
  };
}

function addLinkMarkup(text) {
  if (!text) return text;
  var regexUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var match = text.match(regexUrl);
  if (match) {
    console.log(match);
    text = text.replace(match[0], `<a href="${match[0]}">${match[0]}</a>`);
  }
  text = text.replace("Yes, find it here", " ");
  return text;
}

</script>
<style scoped>
a {
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>

