<template>
  <div id="app">
    <NavBarMenu/>
   
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
   
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBarMenu from './components/NavBarMenu.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    NavBarMenu
  }
}
</script>

<style>

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
