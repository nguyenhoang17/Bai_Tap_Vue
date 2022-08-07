<template>
    <div class="cart">
            <h4>Giỏ hàng</h4>
            <div class="cart-item">
                <table>
                    <tr v-for="(cart,index) in carts" :key="index">
                        <td>
                            <img :src="cart.image" alt="" v-if="cart.image !== ''">
                            <img src="" alt="" v-else>
                        </td>
                        <td>
                            <div style="font-weight: bold;">{{ cart.name }}</div>
                            <span>
                                {{
                                    new Intl.NumberFormat('de-DE', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 0
                                    }).format(cart.price)
                                }}
                            </span>
                        </td>
                        <td>
                            <input type="number" @change="updateTotalMoney(index)" v-model="cart.quantityCart">
                        </td>
                        <td>
                            <button @click="destroyItem(index)">Xóa</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="totalMoney">
                <b>
                    Tổng tiền : {{
                        new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                        }).format(totalMoney)
                    }}
                </b>
            </div>
        </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
    export default {
        name: "BaiTap_2",
        computed: {
            ...mapState([
                'carts', 'totalMoney'
            ])
        },
        methods:{
             ...mapMutations([
                'destroy',
                'updateMoney'
            ]),
            destroyItem(value){
                this.destroy(value);
            },
            updateTotalMoney(value){
                this.updateMoney(value);
            }
        }   
    }
</script>
<style lang="scss" scoped>
    .cart {
        border: 1px solid black;
        height: 400px !important;
        width: 590px;
        text-align: left;
        margin-left: 20px;
        padding: 0 20px;

        h4 {
            padding-left: 4px;
            margin-left: 8px;
        }

        .cart-item {
            height: 600px;

            table {
                padding-left: 5px;
                width: 100%;
                border: none;

                tr {
                    td {
                        border: none;
                        border-bottom: 1px dotted gray;
                        padding: 10px 0px;

                        p {
                            margin: 0px;
                        }

                        img {
                            width: 30px;
                        }

                        button {
                            background-color: red;
                            color: white;
                            border: none;
                            padding: 6px;
                            border-radius: 3px;
                        }

                        button:hover {
                            background-color: #b42e56;
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .totalMoney {
            text-align: right;
            margin: 15px;

            b {
                color: red;
            }
        }
    }
</style>