<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <BaiTap1/> -->
    <!-- <BaiTap2/> -->
    <!-- <BaiTap3/> -->
    <!-- <TrainArr/> -->
    <BaiTap_1/>
  </div>
</template>

<script>
import BaiTap_1 from "./components/Buoi2/BaiTap_1.vue";
// import TrainArr from './components/Buoi_group/TrainArr.vue';
// import BaiTap3 from "./components/Buoi1/BaiTap3.vue";
// import BaiTap2 from "./components/Buoi1/BaiTap2.vue";
// import BaiTap1 from "./components/Buoi1/BaiTap1.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    BaiTap_1
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
