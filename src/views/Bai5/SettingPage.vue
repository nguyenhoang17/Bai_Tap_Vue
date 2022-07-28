<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>Cài đặt hệ thống</b>
        </template>
        <template #content>
             <template>
    <h1>Đây là trang cài đặt hệ thống</h1>
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
    name: "SettingPage",
    components: { BaseLayout },
     
};
</script>
<style>
    .el-pagination{
        background-color: #0000;
        text-align: right;
    }
</style>