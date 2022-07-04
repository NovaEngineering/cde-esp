
<template>
<div id="app">
 
  <li v-for="item in infos" v-bind:key="item.Prefix">
  {{ item.Prefix }}
  </li>
</div>

</template>

<script>
// https://v2.vuejs.org/v2/examples/tree-view.html
//https://vuejs.org/examples/#tree

import axios from 'axios'
//import Vue3RouterTree from "vue3-router-tree"
export default {
 
  name: 'App',
  data: function() {
    return {
      infos: null,
      
  }},
  components: {
    
  },
  mounted() {
    axios.get('http://localhost:4005/list/esp').then( (res)=>{console.log(res);this.infos = res.data.CommonPrefixes})
    
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
