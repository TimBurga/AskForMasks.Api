<template>
  <div class="home">

    <v-container fluid>

      <v-row>
        <v-col cols="12">
          <h1 class="display-1" align="center" justify="center">The United States is fighting COVID-19 epidemic.</h1>
          <h1 class="display-1" align="center" justify="center">Volunteers are already making surgical masks at home.</h1>
          <h1 class="display-1" align="center" justify="center">We connect them with healthcare providers that need them right now!</h1>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="6" align="center" justify="center">
            <v-img
              alt="Nurse wearing mask"
              contain
              class="shrink"
              :src="require('../assets/nurse.jpg')"
              transition="scale-transition"
              height="60%"
            />
            <v-btn x-large color="primary" class="mt-2 large" @click="selectProvider">
              <!-- <v-icon>hospital</v-icon> -->
              I am a provider
            </v-btn>
        </v-col>

        <v-col cols="6" align="center" justify="center">

            <v-img
              alt="Volunteer using sewing machine"
              contain
              class="shrink"
              :src="require('../assets/volunteer.jpg')"
              transition="scale-transition"
              height="60%"
            />

          <v-btn x-large color="success" class="mt-2" @click="selectVolunteer">
            I am a volunteer
          </v-btn>
 
        </v-col>
      </v-row>



    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    selectVolunteer() {
      this.$router.push("/volunteer");
    },
    selectProvider() {
      this.$router.push("/provider");
    }
  }
}
</script>
