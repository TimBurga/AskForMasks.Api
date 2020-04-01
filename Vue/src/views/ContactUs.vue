<template>
  <div class="home">
    <v-container fluid>
      <v-form ref="form" v-model="valid">
        <v-row align="center">
          <v-col cols="12">
            <h1 class="display-1" align="center" justify="center">Contact Us</h1>
          </v-col>
        </v-row>

        <v-row class="mt-4" justify="center">
          <v-col md="6" align="center" justify="center">
            <v-text-field label="Your Name" v-model="name" :rules="reqRules"></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-4" justify="center">
          <v-col md="6" align="center" justify="center">
            <v-text-field label="Your Email" v-model="email" :rules="emailRules"></v-text-field>
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
  name: "ContactUs",
  props: ["mode"],
  data() {
    return {
      valid: true,
      name: null,
      email: null,
      message: null,
      submitInProgress: false,

      reqRules: [v => !!v || "This field is required"],

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
        if (this.valid2 || true) {
          this.submitInProgress = true;
          await axios.post("https://askformasks.azurewebsites.net/api/message", { name: this.name, email: this.email, text: this.message } );
          this.$router.push("thankyou");
        }
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
