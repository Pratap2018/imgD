<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      Drag and drop anywhere you want and start uploading your images now. 32 MB limit. Direct image links, BBCode and HTML thumbnails.
    </h3>
    <button @click="createAnOrg">Upload</button>

  </div>
</template>

<script>
// import { isEmpty, isValidURL } from '../mixins/fieldValidation'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count:0,
      orgStore: {
        name: "Hypermine Pvt Ltd",
        domain: "hypermine.in",
        // logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5EZ51foyo3QBV2FHnKq1cwHaEc%26pid%3DApi&f=1",
        // region: "US EAST",
        network: "Jagrat",
        orgDid: "",
        userDid: "",
        status: "",
        controller: [],
      }
    }
  },
  methods:{
    increment() {
      // update component state
      this.count++
      console.log('Test')
    },
    createAnOrg() {
      console.log('Test')
      let url
      let method
      if (this.edit) {
        method = "PUT"
        url = `${this.$config.studioServer.BASE_URL}api/v1/org`
      } else {
        url = `${this.$config.studioServer.BASE_URL}api/v1/org`
        method = "POST"
      }
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.authToken}`
      }
      this.orgStore.userDid = JSON.parse(localStorage.getItem("user")).id
      const body = { orgData: this.orgStore }
      this.isLoading = true;
      fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
      }).then((res) => res.json())
        .then((j) => {
          
          if (j.error === false) {
            if (!this.edit) {
              this.$store.commit('insertAnOrg', j.data.org);
              this.$store.commit('selectAnOrg', j.data.org._id)
              this.isProcessFinished = true;
              this.openSlider();
              this.notifySuccess("Org Created successfull");
              this.ssePopulateOrg(org._id, this.$store)
            }
            if (this.edit === true) {
              this.$store.commit('updateAnOrg', j.data.org)
              this.notifySuccess("Org Edited successfull");
              this.$root.$emit("bv::toggle::collapse", "sidebar-right");
            }
          }
        }).catch((e) => {
          console.log(e);
          this.notifyError("Something went wrong");
        }).finally(() => {
          this.isLoading = false;
        })
      // TODO: Implement API to create an organization
      // TODO: Make a POST request to ORG API
      // Once the ORG is created just store the org in store
      //this.$store.commit('insertAnOrg', payload);
      // Close the sideba
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
