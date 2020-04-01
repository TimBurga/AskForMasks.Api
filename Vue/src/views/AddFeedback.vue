<template>
  <div class="home">
    <v-container fluid>
      <v-form ref="form" v-model="valid">
        <v-row align="center">
          <v-col cols="12">
            <h1 class="display-1" align="center" justify="center">Have you delivered masks? Tell the world!</h1>
          </v-col>
        </v-row>

        <v-row class="mt-4" justify="center">
          <v-col md="6" align="center" justify="center">
            <v-text-field label="Your Name" v-model="name" :rules="reqRules"></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-4" justify="center">
          <v-col md="5" align="center" justify="center">
            <v-text-field label="City" v-model="city" :rules="reqRules"></v-text-field>
          </v-col>
          <v-col md="1" align="center" justify="center">
            <v-text-field label="State" v-model="state" :rules="stateRules"></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-2" justify="center">
          <v-col md="6" align="center" justify="center">
            <v-textarea
              label="Message"
              v-model="message"
              :rules="reqRules"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <v-col cols="12" align="center">
            <v-btn color="primary" @click="send" large >Send</v-btn>
            <v-btn color="default" @click="cancel" large class="ml-4">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddFeedback",
  data() {
    return {
      valid: true,
      name: null,
      location: null,
      message: null,
      submitInProgress: false,

      reqRules: [v => !!v || "This field is required"],

      stateRules: [
        v => !!v || "State is required",
        v => (v || "").length == 2 || "Two letters required"
      ],

      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
    };
  },
  components: {},
  methods: {
    async send() {
      this.$refs.form.validate();
      if (!this.valid) return;
      
      try {
        this.submitInProgress = true;
        await axios.post("https://askformasks.azurewebsites.net/api/brag", { name: this.name, state: this.state, city: this.city, comment: this.message } );
        this.$router.push("thankyou");
    }
      finally {
        this.submitInProgress = false;
      }
      
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
