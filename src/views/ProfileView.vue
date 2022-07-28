<template>
  <div class="">
   <p>Đây là profile view</p>
  <router-link :to="{ name: 'about' }">Vào about</router-link>
  </div>
</template>

<script>

export default {
  name: 'ProfileView',
  components: {
    
  },
  methods:{
    goToAbout: ()=>{
        this.$router.push({name:"about"});
    }
  }
}
</script>