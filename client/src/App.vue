
<template>
<header class="header">

</header>
<div class="billboard">
<h1 class="heading-primary">
  <span class="heading-primary-main">Евростройпроект</span>
  <span class="heading-primary-sub">Среда общих данных проекта</span>
</h1>
</div>
<div class="data-area">
<div class="row">
  <div class="col-n-n"></div>
  <div class="col-n-n"></div>
</div>
</div>
<footer class="footer">

</footer>


  <img alt="Vue logo" src="./assets/logo.png">
 <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <TreeBrowser :node="root" />





</template>

<script>

import TreeBrowser from './components/TreeBrowser.vue'

export default {
 
  name: 'App',
  data: function() {return {
      root: {
        name: '/',
        children: [
          {
            name: 'music',
            children: [
              {
                name: 'song.mp3'
              }
            ]
          },
          {
            name: 'workspace',
            children: [
              {
                name: 'source.js'
              }
            ]
          }
        ]
      }
  }},
  components: {
    
    TreeBrowser
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
