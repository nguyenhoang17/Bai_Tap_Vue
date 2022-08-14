<template>
  <div>
    <BaseLayout>
        <template #header>
            <b>{{title}}</b><button @click="changeTitle()">thay đổi</button>
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
import { mapState, mapMutations } from 'vuex';
    export default {
    name: "OrderView",
    computed:{
        ...mapState('orders',[
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
        ...mapMutations('orders',[
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