<template>
    <div class="container">
        <div class="form-data">
            <ProductForm/>
        </div>
        <div class="list-data">
            <ProductList/>
        </div>
    </div>
</template>

<script>
import ProductList from "@/components/Baitap/Buoi7/bai2/ProductList.vue";
import ProductForm from "@/components/Baitap/Buoi7/bai2/ProductForm.vue";
export default {
    name: "B3_Exercise",
    components: {
        ProductList,
        ProductForm
    },
}
</script>
<style scoped lang="scss">
.container {
    display: flex;
    align-items: flex-start;
    justify-content: start;

    .form-data {
        width: 30%;
        margin-right: 30px;
    }
}
</style>