<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>Quản lý hoá đơn</b>
        </template>
        <template #content>
             <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="user"
        label="User"
        width="180">
      </el-table-column>
      <el-table-column
        prop="product"
        label="Product">
      </el-table-column>
      <el-table-column
        prop="total"
        label="Total">
      </el-table-column>
    </el-table>
  </template>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
        </template>
    </BaseLayout>
  </div>
</template>
<script>
import BaseLayout from './BaseLayout.vue';
    export default {
    name: "ProductPage",
    components: { BaseLayout },
     data() {
        return {
          tableData: [{
            id: 'KM-1',
            user: 'Tom',
            product: 'Tom, Tép, Cua, Cá',
            total: '10000000đ'
          }, {
            id: 'KM-2',
            user: 'Hoàng',
            product: 'Tép, Cua, Cá, Iphone 13',
            total: '100000000đ'
          }, {
             id: 'KM-3',
            user: 'Đào',
            product: 'Tép, Cua, Cá, Iphone 14',
            total: '200000000đ'
          }]
        }
      }
};
</script>
<style>
    .el-pagination{
        background-color: #0000;
        text-align: right;
    }
</style>