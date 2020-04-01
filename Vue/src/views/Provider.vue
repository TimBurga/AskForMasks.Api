<template>
  <div class="home">
    <v-container fluid>
      <v-form ref="form" v-model="valid">
        <v-row align="center">
          <v-col cols="12">
            <h1 class="display-1" align="center" justify="center">Welcome!</h1>
          </v-col>
        </v-row>

        <v-row class="mt-4" justify="center" v-if="step == 1">
          <v-col md="6" align="center" justify="center">
            <v-text-field label="Organization Name" v-model="organization.name" :rules="reqRules"></v-text-field>
          </v-col>
        </v-row>

        <v-row class="mt-2" justify="center" v-if="step == 1">
          <v-col md="6" align="center" justify="center">
            <v-row>
              <v-col cols="10" md="10">
                <v-text-field label="Street" v-model="organization.addressLine1" :rules="reqRules"></v-text-field>
              </v-col>
              <v-col cols="2" md="2">
                <v-text-field label="Suite/#" v-model="organization.addressLine2"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="City" v-model="organization.city" :rules="reqRules"></v-text-field>
              </v-col>
              <v-col cols="6" md="2">
                <v-text-field label="State" v-model="organization.state" :rules="stateRules"></v-text-field>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field label="Zip" v-model="organization.zipCode" :rules="zipRules"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" v-if="phoneOrEmailMissing">
                <v-alert type="info" dense>Please enter a phone number and/or email for volunteers to contact the organization</v-alert>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Phone" v-model="organization.phone"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Email" v-model="organization.email" :rules="optionalEmailRules"></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field label="Contact Name" v-model="organization.contactName"></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-2" justify="center" v-if="step == 1">
          <v-col cols="12" md="6" align="center" justify="center">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Your Name (for our records only)"
                  v-model="submitter.name"
                  :rules="reqRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Your Phone or Email  (for our records only)"
                  v-model="submitter.contact"
                  :rules="reqRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <!-- <v-row>
            <v-col>
              <v-select v-model="submitter.worksForProvider" :items="yesNo" label="Do you work for the provider?" required></v-select>
            </v-col>
            </v-row>-->
          </v-col>
        </v-row>
      </v-form>

      <v-form ref="form2" v-model="valid2">
        <v-row class="mt-2" justify="center" v-if="step == 2">
          <v-col md="6" align="center" justify="center">
            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Briefly describe your organization"
                  v-model="organization.description"
                  :rules="reqRules"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="What are your masks needs? Any special instructions for the maker?"
                  v-model="organization.specialInstructions"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <v-col cols="12" align="center">
            <v-btn v-if="step == 1" color="primary" @click="submitStep1" large >Next</v-btn>
            <v-btn v-if="step == 2" color="success" @click="submitStep2" large :disabled="submitInProgress">Submit</v-btn>
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
  name: "Volunteer",
  data() {
    return {
      step: 1,

      valid: true,
      valid2: true,
      name: null,
      submitInProgress: false,
      phoneOrEmailMissing: false,

      reqRules: [v => !!v || "This field is required"],
      optionalEmailRules: [
        v => (!v || /.+@.+/.test(v)) || "E-mail must be valid"
      ],
      reqEmailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      stateRules: [
        v => !!v || "State is required",
        v => (v || "").length == 2 || "Two letters required"
      ],
      zipRules: [
        v => !!v || "Zip is required",
        v => (v || "").length == 5 || "5 digits required"
      ],

      yesNo: [
        "Yes, I work for the provider.",
        "No, but I know they can use masks made by volunteers."
      ],
      organization: {
        name: null,
        addressLine1: null,
        addressLine2: null,
        city: null,
        state: null,
        zipCode: null,
        needs: null,
        description: null,
        phone: null,
        email: null,
        contactName: null,
        specialInstructions: null
      },
      submitter: {
        name: null,
        contact: null,
        worksForOrganization: true
      }
    };
  },
  components: {},
  methods: {
    submitStep1() {
      this.phoneOrEmailMissing = false;
      this.$refs.form.validate();
      if (!this.valid) return;
      if (!this.organization.phone && !this.organization.email) {
        this.phoneOrEmailMissing = true;
        return;
      }
      this.step = 2;
    },
    async submitStep2() {
      this.$refs.form2.validate();

      try {
        if (this.valid2) {
          this.submitInProgress = true;
          await axios.post("https://askformasks.azurewebsites.net/api/request", this.getPostData());
          this.$router.push("thankyou");
        }
      }
      finally {
        this.submitInProgress = false;
      }
    },
    getPostData() {
      var data = {
        organization: this.organization,
        submitter: {
          worksForOrganization: true,
        }
      };

      if (this.submitter.contact.includes("@")) 
        data.submitter.email = this.submitter.contact;
      else
        data.submitter.phone = this.submitter.contact;

      if (this.submitter.name.includes(" ")) {
        data.submitter.firstName = this.submitter.name.split(" ")[0]; 
        data.submitter.lastName = this.submitter.name.split(" ")[1]; 
      } else {
        data.submitter.firstName = null; 
        data.submitter.lastName = this.submitter.name; 
      }

      data.organization.state = data.organization.state.toUpperCase();
      
      return data;
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
