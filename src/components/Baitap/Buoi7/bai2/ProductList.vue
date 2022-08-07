<template>
    <div class="container-list">
        <table>
            <tr>
                <th class="title-code">Mã sản phẩm</th>
                <th class="title-name">Tên sản phẩm</th>
                <th class="title-code">Giá</th>
                <th class="title-code">Số lượng</th>
                <th class="title-code">Trạng thái</th>
                <th class="title-code">Hoạt động</th>
            </tr>
            <tr v-for="(product, index) in drag" :key="index">
                <td class="product-text-left">{{ product.code }}</td>
                <td class="product-text-left">{{ product.name }}</td>
                <td class="product-text-left">
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
                    <span v-if="product.quantity > 0" style="color: #39cd74;">Còn hàng</span>
                    <span v-else style="color: red;">Hết hàng</span>
                </td>
                <td>
                    <el-button type="warning" @click="updateItem(index)">Sửa</el-button>
                    <el-button type="danger" @click="destroyItem(index)">Xóa</el-button>
                </td>
            </tr>
            <tr v-if="products.length === 0">
                <td colspan="6">Không có dữ liệu</td>
            </tr>
        </table>
        <div class="pagination-wrap">
            <span>Hiển thị {{ start }} - {{ end }} trên tổng {{ products.length }} ({{ presentPage }} trang)</span>
            <el-pagination background layout="prev, next" :total="products.length"
                           :page-size="5" @prev-click="prev()" @next-click="next()">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    name: "ProductList",
     computed: {
    ...mapState([
      'drag',
      'products',
      'codeProduct',
      'start',
      'end',
      'presentPage'
    ]),
  },
    data() {
        return {
    
        }
    },
    methods: {
        ...mapMutations([
            'updateProducts',
            'updateDrag',
            'updateCodeProduct',
            'updateButtonName',
            'updateStart',
            'updateEnd',
            'updatePresentPage',
    ]),
        destroyItem(value) {
      let index = -1
      this.products.forEach((data, indexProduct) => {
        if (data.code === value) {
          index = indexProduct
        }
      })
      this.products.splice(index, 1)
      if (this.products.length > 0) {
        if (this.products.length < 6) {
          this.updateStart(1)
          this.updateEnd(this.products.length)
          this.updatePresentPage(1)
        } else {
          if (this.end > this.products.length) {
            this.updateEnd(this.products.length)
            if (this.start > this.end) {
              this.updateStart(this.start - 5)
              this.updatePresentPage(this.presentPage - 1)
            }
            this.updateDrag(this.products.slice(this.start - 1, this.end))
          }
        }
      } else {
        this.updateStart(0)
        this.updateEnd(0)
        this.updatePresentPage(1)
      }
    },
        next(){
            this.start += 5;
            (this.end + 5 > this.products.length) ? this.end += this.products.length - this.end : this.end += 5
            this.presentPage += 1;
            this.drag = this.products.slice(this.start - 1, this.end)
        },
        prev(){
            this.start -= 5;
            (this.end === this.products.length) ? this.end -= this.end % 5 : this.end -= 5
            this.presentPage -= 1;
            this.drag = this.products.slice(this.start - 1, this.end)
        }
    },
    watch: {
        products() {
            if (this.products.length > 0 && this.products.length < 6) {
                this.updateStart(1)
                this.updateEnd(this.products.length)
                this.updateDrag(this.products)
            } else {
                this.updateDrag(this.products.slice(this.start - 1, this.end))
            }
            },
  }
    
}
</script>

<style scoped lang="scss">
.container-list {
    table, th, td {
        border: 1px solid #DCDFE6;
        border-collapse: collapse;
    }

    table {
        width: 100%;

        tr {
            th {
                padding: 15px;
                background-color: #f2f6fe;
            }
            td {
                padding: 10px 15px;
                border-top: none;
                border-bottom: none;
                font-size: 14px;
            }
            .title-code {
                width: 150px;
            }
            .title-name {
                width: 200px;
            }
            .product-text-left {
                text-align: left;
            }
        }
    }

    .pagination-wrap {
        text-align: left;
        margin-top: 20px;

        span {
            float: left;
        }
        .el-pagination {
            float: right;
            padding: 0;
        }
    }
}
</style>