<template>
    <div class="container">
        <div class="wrap">
            <h1>Todo App</h1>
            <input type="text" placeholder="Nhập công việc và nhấn enter để thêm"
                   v-model="input" @keypress.enter="addItem()">
            <TodoItem :todoItem="data"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    name: "TodoContainer",
    components: {
        TodoItem
    },
    data() {
        return {
            input: '',
            data: ''
        }
    },
    methods: {
        addItem() {
            let item = {
                isActive: 0,
                work: this.input
            }
            this.data = item
            this.input = ''
        }
    }
}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.container {
    background-color: #0080dd;
    display: flex;
    align-items: center;

    .wrap {
        width: 40%;
        height: 600px;
        margin: 5% auto;
        background-color: white;
        border-radius: 10px;
        padding: 30px;

        h1 {
            color: #39cd74;
            margin-bottom: 20px;
        }
        input {
            -webkit-appearance: none;
            background-color: #FFF;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            outline: 0;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
            margin-bottom: 30px;
            font-size: 13px;
        }
    }
}
</style>