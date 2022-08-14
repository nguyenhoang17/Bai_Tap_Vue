<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>{{title}}</b> <button @click="changeTitle()">thay đổi</button>
        </template>
        <template #content>
             <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
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
import { mapState, mapMutations } from 'vuex';
import BaseLayout from './BaseLayout.vue';
    export default {
    name: "ProductView",
    computed:{
        ...mapState('products',[
            'tableData',
            'title'
        ])
    },
    components: { BaseLayout },
     data() {
        return {
        }
      },
      methods:{
        ...mapMutations('products',[
            'updateTitle'
        ]),
        changeTitle(){
            this.updateTitle()
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