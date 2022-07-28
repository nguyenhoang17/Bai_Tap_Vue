<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>Báo cáo thống kê</b>
        </template>
        <template #content>
             <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="totalPayment"
        label="Tổng thu"
        width="180">
      </el-table-column>
      <el-table-column
        prop="totalReceipt"
        label="Tổng chi"
        width="180">
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
            totalPayment: '100,000,000 vnd',
           totalReceipt: '100,000,000 vnd',
          },]
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