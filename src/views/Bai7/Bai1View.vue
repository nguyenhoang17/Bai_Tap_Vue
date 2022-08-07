<template>
  <div class="home">
   <ProductView/>
   <CartView/>
  </div>
</template>

<script>
import ProductView from '@/components/Baitap/Buoi7/bai1/ProductView.vue';
import CartView from '@/components/Baitap/Buoi7/bai1/CartView.vue';

export default {
  name: 'Bai1View',
  components: {
    ProductView,
    CartView
  },
  
}
</script>
<style>
    .home {
    width: 90%;
    display: flex;
    }
</style>