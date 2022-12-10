<template>
    <img alt="Vue logo" src="../assets/imgD.png" class="logo">
    <UploadFile msg="Upload and share your images."/>
    <router-view class="containerData"/>
  </template>
<style>
.logo {
  max-width: 100px;
}
</style>
  <script>
  import UploadFile from '../components/UploadFile.vue'
  
  export default {
    name: 'Home-1',
    components: {
        UploadFile
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  