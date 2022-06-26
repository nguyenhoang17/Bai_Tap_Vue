<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BaiTap1/>
  </div>
</template>

<script>
import BaiTap1 from "./components/Buoi1/BaiTap1.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    BaiTap1
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
