<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    

    <h3>
      Drag and drop anywhere you want and start uploading your images now. 32 MB limit. Direct image links, BBCode and
      HTML thumbnails.
    </h3>
    <div class="drop-img" @dragenter.prevent @dragover.prevent     @drop.prevent="uploadImag" >
      <img :src="previewImage"   :class="{        uploadImage: previewImage=='',        'drop-img': previewImage!=''      }" />
      <label for="" :class="{uploadImage: previewImage==!''}">
        Drop your image here
      </label>

    </div>
    <input   type="file" accept="image/jpeg" @change=uploadImag    @dragover.prevent    @drop="uploadImag">

    
    <button @click="createAnOrg">Upload</button>


      <div>
        <br>
        <input type="text" v-model="did">
    <button @click="display">Preview</button>
      </div>
  
  </div>
  
</template>

<script>
import config from  '../config'



// import { isEmpty, isValidURL } from '../mixins/fieldValidation'

export default {

  
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      did: "",
      count: 0,
      previewImage: "",
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
  mounted(){
    const dataL = JSON.parse(localStorage.getItem('userData'))
    if(dataL.email=="dummy@gmail.com"){
      localStorage.removeItem('userData')
      localStorage.removeItem('authToken')
      window.location.reload()
    }
  },

  methods: {
    uploadImag(e) {
      let image=''
      if(e.dataTransfer==undefined){
         image = e.target.files[0];
      }else{
       image = e.dataTransfer.files[0];
      }
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
      this.previewImage = e.target.result;
      console.log(this.previewImage);
      }
    }
    ,
    display(){
      const did=this.did
      this.$router.push({ name: 'display', params: { id: did } })
    },
    createAnOrg(){
      const dataL = JSON.parse(localStorage.getItem('userData'))

    
      const walletURL=config.webWalletAddress

      const data={
    "QRType": "ISSUE_DID",
    "serviceEndpoint": "",
    "schemaId": "",
    "appDid": "",
    "appName": "imgD",
    "challenge": "",
    "provider": "",
    "data": {
        "controllers": [
            dataL.id
        ],
        "alsoKnownAs": "test.org",
        "serviceData":{
          "type":"LinkedImages",
          "data":{
            "imageRaw": this.previewImage
          }
        },
        "serviceEndpoint": "https://stage.hypermine.in/studioserver/api/v1/org/"
    }
}

      const url=walletURL+'/deeplink?url='+JSON.stringify(data)
      if(this.previewImage==''){
        alert('Please upload an image')
        return
      }
      window.open( `${url}`,
          "popUpWindow",
          `height=800,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes`);
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

.uploadImage{
  display:none;
  
}

.displayNone{
  display:none;
}


.drop-img {
  display: block;
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  line-height: 200px;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  margin: 20px auto;
}
</style>
