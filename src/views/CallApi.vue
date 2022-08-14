  <template>
  <div>
    <h1>Danh sách sản phẩm</h1>
    <div style="width:25%; margin: 20px 0;">
      <el-input
        placeholder="Nhập tên để tìm kiếm"
        @clear="clearHandle()"
        @keydown.enter.native="handleSearch()"
          clearable
        v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="btn__create">
      <el-button type="primary" plain @click="openDialogCreateProduct()">Thêm mới</el-button>
    </div>
   
    <el-table
      :data="products"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="#"
        width="180">
        <template slot-scope="product">
          {{product.row.id}}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Tên sản phẩm"
        width="180">
        <template slot-scope="product">
          {{product.row.name}}
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="Giá sản phẩm"
        width="180">
        <template slot-scope="product">
          {{product.row.price}}
        </template>
      </el-table-column>
       <el-table-column
        prop="description"
        label="Mô tả"
        width="280">
        <template slot-scope="product">
          {{product.row.description}}
        </template>
      </el-table-column>
       <el-table-column
        prop="action"
        label=" Hành động"
        width="280">
        <template slot-scope="product">
          <a class="btn btnRecharge el-button el-button--primary el-button--mini is-plain"
              @click="openDialogEditProduct(product.row)"
            >
            <i class="el-icon-edit"></i>
          </a>
         <a class="btn btnRecharge el-button el-button--danger el-button--mini is-plain"
              @click="handleDeleteProduct(product.row.id)"
            >
            <i class="el-icon-delete"></i>
          </a>
        </template>
        
      </el-table-column>
    </el-table>
    <div class="paginationWarp">
         <el-col :span="10">
            <div class="textInfo">
               <p>Số lượng kết quả: {{ page.from }} - {{ page.to }} của {{ page.total }} </p>
            </div>
         </el-col>

         <el-col :span="14">
            <el-pagination
                  layout="prev, pager, next"
                  :total="page.total"
                  :page-size="page.pageSize"
                  :current-page="page.currentPage"
                  @current-change="handleCurrentChange()"
              >
              </el-pagination>
         </el-col>
      </div>
    <el-dialog width="30%" top="5vh" v-loading="loading" title="Chỉnh sửa sản phẩm" :visible.sync="dialogEditProduct" class="modalUser">
        <el-row>
            <div class="inputWarp" >
              <label>Tên sản phẩm </label>
              <el-input v-model="name"></el-input>
              <div class="error">
                <span>{{errorName}}</span>
              </div>
            </div>
            <div class="inputWarp" >
              <label>Giá sản phẩm </label>
              <el-input v-model="price"></el-input>
              <div class="error">
                <span>{{errorPrice}}</span>
              </div>
            </div>
            <div class="inputWarp" >
              <label>Mô tả </label>
              <el-input type="textarea" :rows="5" v-model="description"></el-input>
              <div class="error">
                <span>{{errorDescription}}</span>
              </div>
            </div>
          </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialogEditProduct()">Đóng</el-button>
        <el-button type="primary" @click="handleEditProduct()">Cập nhật</el-button>
      </span>
    </el-dialog>

    <el-dialog width="30%" top="5vh" v-loading="loading" title="Tạo sản phẩm" :visible.sync="dialogCreateProduct" class="modalUser">
        <el-row>
            <div class="inputWarp" >
              <label>Tên sản phẩm </label>
              <el-input v-model="name"></el-input>
              <div class="error">
                <span>{{errorName}}</span>
              </div>
            </div>
            <div class="inputWarp" >
              <label>Giá sản phẩm </label>
              <el-input v-model="price"></el-input>
              <div class="error">
                <span>{{errorPrice}}</span>
              </div>
            </div>
            <div class="inputWarp" >
              <label>Mô tả </label>
              <el-input type="textarea" :rows="5" v-model="description"></el-input>
              <div class="error">
                <span>{{errorDescription}}</span>
              </div>
            </div>
          </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialogCreateProduct()">Đóng</el-button>
        <el-button type="primary" @click="handleCreateProduct()">Tạo mới</el-button>
      </span>
    </el-dialog>
  </div>
  </template>
<script>
import _ from 'lodash';
import api from '../api'
    export default{
        name: 'CallApi',
        data() {
        return {
          products: [],
          dialogEditProduct:false,
          dialogCreateProduct:false,
          name:'',
          price:'',
          description:'',
          loading: true,
          idProduct:'',
          errorName:'',
          errorPrice:'',
          errorDescription:'',
          search:'',
          page: {
            currentPage: 1,
            pageSize: 10,
            total: 0,
            from: 0,
            to: 0
         },
        }
      },
      mounted(){
        this.getProduct()
        // let data ={
        //     name :'Xấu trai nhất họ',
        //     price : 9000000,
        //     description : 'Đố mua được'
        // }
        // api.saveProduct(data).then(() => {
        //     alert(1)
        // }).catch((err) => {
        //     console.log(err);
        // });
        
      },
      methods: {
        isValidate(){
          let error = false
          if(this.name.length === 0){
            error = true
            this.errorName = 'Tên sản phẩm không được để trống'
          }
          if(this.price.length === 0){
            error = true
            this.errorPrice = 'Giá sản phẩm không được để trống'
          }
          if(isNaN(this.price)){
            error = true
            this.errorPrice = 'Giá sản phẩm phải là số'
          }
          return !error
        },
        getProduct(params = {}){
          api.getListProducts(params).then((res) => {
                this.products = res.data.data.data
                this.page.currentPage = res.data.data.current_page
                this.page.pageSize = res.data.data.per_page
                this.page.total = res.data.data.total
                let from = res.data.data.from
                let to = res.data.data.to
                this.page.from = from ? from : 0
                this.page.to = to ? to : 0
            }).catch((err) => {
                console.log(err);
          });
        },
        openDialogCreateProduct(){
          this.dialogCreateProduct = true
          this.resetForm()
          this.resetError()
        },
        closeDialogCreateProduct(){
          this.dialogCreateProduct = false
          this.resetForm()
          this.resetError()
        },
        closeDialogEditProduct(){
          this.dialogEditProduct = false
          this.resetForm()
          this.resetError()
        },
        openDialogEditProduct(product){
          this.dialogEditProduct = true
          this.name = product.name
          this.price = product.price
          this.description = product.description ? product.description : ""
          this.idProduct = product.id
        },
        handleEditProduct(){
          if(this.isValidate()){
            let data = new FormData();
            data.append('name', this.name)
            data.append('price', this.price)
            if(this.description){
                data.append('description', this.description)
            }
            api.updateProduct(this.idProduct, data).then(()=>{
              this.dialogEditProduct = false,
              this.getProduct(),
              this.resetForm(),
              this.resetError(),
              this.$message({
                type: 'success',
                message: 'Cập nhật sản phẩm thành công',
              })
            }).catch((error) => {
              let errors = _.get(error, 'response.data.error', {})
              if (Object.keys(errors).length > 0) {
                this.errorName = _.get(errors, 'name[0]', '')
                this.errorPrice = _.get(errors, 'price[0]', '')
                this.errorDescription = _.get(errors, 'description[0]', '')
              } else{
                if (Object.keys(errors).length === 0) {
                  this.$message.error({
                    type: 'error',
                    message: "Có lỗi xảy ra, vui lòng thử lại sau."
                  })
                }
              }
            })
          }
          
          
        },
        handleDeleteProduct(id){
          this.$confirm('Dữ liệu không thể phục hồi, Bạn có muốn biếp tục?', 'Cảnh báo', {
          confirmButtonText: 'Xóa',
          cancelButtonText: 'Đóng',
          confirmButtonClass: 'deleteConfirm',
          type: 'warning'
            }).then(()=>{
              api.deleteProduct(id).then(() => {
                  this.getProduct(),
                  this.$message({
                    type: 'success',
                    message: 'Xoá sản phẩm thành công',
                  })
                })
            })
          
        },
        handleCreateProduct(){
          if(this.isValidate()){
            let data = new FormData();
            data.append('name', this.name)
            data.append('price', this.price)
            if(this.description){
                data.append('description', this.description)
            }
            api.createProduct(data).then(()=>{
              this.dialogCreateProduct = false,
              this.getProduct(),
              this.resetForm(),
              this.resetError(),
              this.$message({
                type: 'success',
                message: 'Cập nhật sản phẩm thành công',
              })
            }).catch((error) => {
              let errors = _.get(error, 'response.data.error', {})
              if (Object.keys(errors).length > 0) {
                this.errorName = _.get(errors, 'name[0]', '')
                this.errorPrice = _.get(errors, 'price[0]', '')
                this.errorDescription = _.get(errors, 'description[0]', '')
              } else{
                if (Object.keys(errors).length === 0) {
                  this.$message.error({
                    type: 'error',
                    message: "Có lỗi xảy ra, vui lòng thử lại sau."
                  })
                }
              }
            })
          }
        },
        handleSearch(){
          if(this.search.length>0){
            let params = {
              q : this.search
            }
            this.getProduct(params)
          }
        },
        clearHandle(){
          this.getProduct()
        },
        resetForm(){
          this.name= '',
          this.price = "",
          this.description =""
        },
        resetError(){
          this.errorName= '',
          this.errorPrice = "",
          this.errorDescription =""
        },
        handleCurrentChange(val){
         
          let payload = {
            q: this.search.length > 0 ? this.search : null,
            page: val
          }
         
          this.getProduct(payload)
        }
      }
    }
</script>
<style lang="scss">
.paginationWarp{
  text-align: left;
}
.btn__create{
  text-align: left;
}
.inputWarp{
  margin-bottom: 10px;
  label {
    font-size: 12px;
    font-weight: 600;
    color: #3f6079;;
    display: block;
    margin-bottom: 5px;
    text-align: left;
  }
}
.error{
  text-align: left;
  color: red;
}
</style>