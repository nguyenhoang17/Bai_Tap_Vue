<template>
<div>
    <div class="search-wrapper">
            <div class="search-box">
                <input type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="search"
                       @keyup.enter="searchPr()">
                <div class="search-icon">
                    <div class="search">
                        <div class="search-circle"></div>
                        <div class="search-rectangle"></div>
                    </div>
                </div>
                <div class="close-icon" v-if="close==true" @click="deleAll()">
                    <div class="close">
                        <b>X</b>
                    </div>
                </div>
            </div>
        </div>
    <table id="product_tb">
        <thead>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Trạng thái</th>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products1" :key="index">
                <td>{{index + 1}}</td>
                <td style="text-align: left;">
                    <div>
                        <img :src="product.image" alt="" v-if="product.image !== ''">
                        <img src="../../../src/assets/logo.png" alt="" v-else>
                        <div>{{ product.name }}</div>
                    </div>
                </td>
                <td>{{numberWithCommas(product.price)}}đ</td>
                <td>{{product.quantity}}</td>
                <td class="greenText" v-if="product.isAvailable==true">Còn hàng</td>
                <td class="redText" v-else>Hết hàng</td>
            </tr>
            <tr v-if="products1.length === 0">
                <td colspan="5">Không có dữ liệu</td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
export default{
    name:'BaiTap_1',
    data(){
        return{
            products1:[
                {
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            search: '',
            product2: [
                {
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://vtv1.mediacdn.vn/2019/10/10/photo-1-15706463929181755249740.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            close: false
        }
    },
    methods:{
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        
        deleAll() {
            this.search = ''
        },
        searchPr() {
            let str = this.search.trim().toLowerCase();
            this.products1 = []
            if (this.search === '') {
                this.products1 = this.product2
            }
            if(this.search!==''){
                this.products1 = this.product2.filter(data => data.name.toLowerCase().indexOf(str) !== -1);
            }
        }
    },
    watch: {
        search(value) {
            if (value !== '') {
                this.close = true
            } else {
                this.close = false
                this.products1 = this.product2
            }
        }
    } 
}
</script>

<style scoped lang="scss">
#product_tb{
    border: 1px solid #ccc;
    thead{
        th{
            height: 40px;
            background-color: #cad8fa;
            padding: 5px;
        }
    }
    tbody{
        tr{
            td{
                background-color: #f0e7da;
                padding: 5px;
                height: 84px;
                vertical-align: middle;
                text-align: center; 
                div{
                    display: flex;
                    align-items: center;
                    div{
                        margin-left: 10px;
                    }
                    img{
                        width: 70px;
                        height: 70px;
                    }
                }
            }
        }
    }
}
.redText{
    color: red;
}
.greenText{
    color: green;
}
.search-wrapper {
        display: flex;
        align-items: center;
        justify-content: left;
        margin-bottom: 20px;

        .search-box {
            position: relative;

            input {
                padding: 10px 30px 10px 40px;
                width: 250px;
                border: 1px solid black;
            }
            input:focus {
                outline-color: #0080dd;
            }
            input:hover {
                border-color: #0080dd;
            }
            .search-icon {
                position: absolute;
                left: 10px;
                top: 8px;

                .search {
                    left: 0;
                    position: relative;
                    margin: 0 auto;
                    text-align: center;

                    .search-circle {
                        left: 0;
                        width: 15px;
                        height: 15px;
                        border: 1px solid #333;
                        border-radius: 50%;
                    }
                    .search-rectangle {
                        position: absolute;
                        right: -5px;
                        bottom: -2px;
                        width: 7px;
                        transform: rotate(45deg);
                        border: 1px solid #333;
                    }
                }
            }

            .close-icon {
                position: absolute;
                right: 20px;
                top: 11px;
                cursor: pointer;

            }
        }
    }

</style>