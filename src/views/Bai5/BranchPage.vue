<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>Quản lý chi nhánh</b>
        </template>
        <template #content>
             <template>
                <router-view/>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
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
            name: 'Hà Nội',
            address: 'No. 189, Grove St, Hà nội'
          }, {
            name: 'Đà Nẵng',
            address: 'No. 189, Grove St, Đà nẵng'
          }, {
            name: 'Hồ CHí Minh',
            address: 'No. 189, Grove St, Hồ Chí Minh'
          }, {
            name: 'Thái Bình',
            address: 'No. 189, Grove St, Thái Bình'
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