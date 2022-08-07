<template>
    <div id="table">
            <table>
                <tr>
                    <th style="width: 30px;">STT</th>
                    <th style="width: 370px;">Sản phẩm</th>
                    <th style="width: 100px;">Giá</th>
                    <th style="width: 100px;">Số lượng</th>
                    <th style="width: 100px;">Trạng thái</th>
                    <th style="width: 100px;">Hành động</th>
                </tr>
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <div>
                            <img :src="product.image" alt="" v-if="product.image !== ''">
                            <img src="https://images.samsung.com/is/image/samsung/p6pim/vn/2202/gallery/vn-galaxy-a53-5g-a536-sm-a536elbgxxv-531435476?$650_519_PNG$" alt="" v-else>
                            <div>{{ product.name }}</div>
                        </div>
                    </td>
                    <td>
                        {{
                            new Intl.NumberFormat('de-DE', {
                                style: 'currency',
                                currency: 'VND',
                                minimumFractionDigits: 0
                            }).format(product.price)
                        }}
                    </td>
                    <td>{{ product.quantity }}</td>
                    <td>
                        <span v-if="product.quantity > 0" class="greenColor">Còn hàng</span>
                        <span v-else class="redColor">Hết hàng</span>
                    </td>
                    <td>
                        <button @click="addToCart(product)">Thêm vào giỏ</button>
                    </td>
                </tr>
            </table>
        </div>

</template>
<script>
  import { mapState,mapMutations } from 'vuex'
    export default {
        name: "BaiTap_2",
        computed: {
            ...mapState([
                'products'
            ])
        },
        methods:{
             ...mapMutations([
                'addproduct'
            ]),
            addToCart(value){
                this.addproduct(value);
            },
        }     
    }
</script>
<style lang="scss" scoped>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;

        th {
            padding: 20px;
            background-color: #f2f6fe;
        }
        td {
            border-bottom: none;
            border-top: none;
            padding: 5px 10px;

            button{
                background-color: #0080dd;
                padding: 6px;
                border-radius: 3px;
                color: white;
                border: none;
            }
            button:hover{
                cursor: pointer;
            }

            div {
                display: flex;
                align-items: center;

                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                    float: left;
                }
            }
            span {
                font-size: 14px;
            }

            .greenColor {
                color: limegreen;
            }
            .redColor {
                color: red;
            }
        }
    }
</style>