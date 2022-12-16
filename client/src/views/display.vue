
<template>
    <div>
        <img :src="data" alt="" srcset="" class="drop-img">
        <br>
        <button @click="download">Download</button>

    </div>
</template>

<script>
export default {
    name: 'display-1',
    data() {
        return {
            data: "",
        }
    }
    ,
    async mounted() {
        document.getElementsByClassName('box')[0].style.display = 'none'
        const id = this.$route.params.id
        if(id==''){
            alert('Invalid DID')
            window.location.href = 'http://localhost:8080/#/'
        }
        if(!id.includes('did:hid:testnet')){
            alert('Invalid DID')
           window.location.href = 'http://localhost:8080/#/'
        }
        
        const resp = await fetch('https://jagrat.hypersign.id/rest/hypersign-protocol/hidnode/ssi/did/' + id)
        const temp=await resp.json()
        if(temp.didDocument==null){
            alert('No image found')
            window.location.href = 'http://localhost:8080/#/'
        }
        const service=temp.didDocument.service

        service.forEach(element => {
                if(element.id.includes('linked-image')){
                 let  datax=element.serviceEndpoint.replace(/ /g,'+')
                    this.data=datax
                
                }
        });
        if(this.data==''){
            alert('No image found')
            window.location.href = 'http://localhost:8080/#/'
        }

    },


    methods: {
        download() {
            const link = document.createElement('a');
            link.href = this.data;
            link.setAttribute('download', 'image.jpeg'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }
    },





}
</script>

<style>
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
}</style>