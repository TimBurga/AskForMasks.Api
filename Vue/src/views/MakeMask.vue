<template>
  <div class="home">

    <v-container fluid>

      <v-row align="start" justify="center">
        <v-col lg="3" align="center">
            <v-img
              alt="Sewing machine"
              contain
              class="shrink"
              :src="require('../assets/volunteer.jpg')"
              transition="scale-transition"
              height="200"
            />
        </v-col>

        <v-col lg="3" v-for="s in resources.sections" :key="s.name">
          <v-card
              class="mx-auto"
              max-width="400"
              tile
            >
              <v-list>
                <v-subheader>{{s.name}}</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(link, i) in s.links.filter(l => l.title)"
                    :key="i"
                    :inactive="inactive"
                    @click.prevent = "clickLink(link)"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-html="link.title"></v-list-item-title>
                      <v-list-item-subtitle v-if="link.text" v-html="link.text"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>      

        </v-col>
      </v-row>
   
      <v-row>
        <v-col align="center">
            <v-btn class="primary mt-2" @click="goHome">Go Back</v-btn>      
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>

var resources = {
  sections: [
    { 
      name: "Masks",
      links: [
        {
          title: "Maintaining safe environment while making masks",
          url: "https://psjh.blob.core.windows.net/covid/2020-%20PSJH_FACEMASK_KIT%20Instructions.COMMUNITY%20-%20Safety%20Instructions.pdf",
          text: "From Providence St.Joseph Health"
        },
        {
          title: "Mask making best practices",
          url: "https://asksformasks.com/mask-making-best-practices/",
          text: "From Asksformasks.com"
        },
        {
          title: "Surgical face mask pattern",
          url: "https://members.sewitonline.com/wp-content/uploads/2020/03/How-To-Sew-A-Facemask-Instructions.pdf",
          text: "From Sewitonline.com"
        },        
        {
          title: "Community mask: Instructions",
          url: "https://psjh.blob.core.windows.net/covid/Instructions%20Community%20Mask.pdf",
          text: "From Providence St.Joseph Health"
        },
        {
          title: "Community mask: Video tutorial",
          url: "https://vimeo.com/400118073/8a7eb657ab"
        },
        {
          title: "Community mask: Pattern",
          url: "https://psjh.blob.core.windows.net/covid/2020-%20PSJH_FACEMASK_COMMUNITY_Pattern_V3%20Final.pdf"
        },

        {
          title: "Mask with pouch for HEPA Filter",
          url: "https://truline.box.com/s/1r1dwazskl6bszxhbb6222kjea29kggu",
          text: "From Trueline Construction Services"
        },
        {
          title: "Sewing Face Masks for COVID-19 Response",
          url: "https://www.kalcounty.com/hcs/pdf_files/COVID-19%20Face%20Mask%20Instructions%20and%20Pattern.pdf",
          text: "From Kalamazoo County Government"
        },
        {
          title: "",
          url: ""
        },
        {
          title: "",
          url: ""
        },
      ]
    },
    {
      name: "Shields",
      links: [
        {
          title: "Building Face Shields - ACME Creation Lab",
          url: "https://www.acmecreationlab.org/covid",
          text: "Open source package that includes the face shield design and the complete manufacturing process"
        },
        {
          title: "",
          url: ""
        },
      ]
    }
  ]
};

export default {
  name: 'MakeMask',
  data() {
    return {
      resources: resources
    }
  },
  mounted() {
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
    },
    goHome() {
      this.$router.push("/");
    },
    clickLink(l) {
      window.open(l.url);
    }
  }
}
</script>
