<template>
  <v-row>
    <v-col align="center">
      <div class>
        <h3 class="mt-2">Thank you! Your information has been submitted</h3>
        <v-btn class="mt-4 primary" @click="goHome">Go back to homepage</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ThankYou",
  methods: {
    async goHome() {
      this.$router.push("/");
    }
  }
};
</script>


