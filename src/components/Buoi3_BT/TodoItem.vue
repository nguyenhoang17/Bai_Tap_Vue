<template>
    <div class="todo-container">
        <div class="todo-item" v-for="(value, index) in listWork" :key="index">
            <div class="todo-info">
                <input type="checkbox" @click="handleTick(index, $event)" :checked="value.isActive">
                <span :class="{ del: value.isActive }">{{ value.work }}</span>
            </div>
            <button @click="handleDeleteItem(index)" v-if="value.isActive">Xóa</button>
        </div>
        <div class="todo-null" v-if="listWork.length === 0">
            Chưa có task nào được thêm
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ['todoItem'],
    data() {
        return {
            listWork: []
        }
    },
    methods: {
        handleDeleteItem(index) {
            this.listWork.splice(index,1)
        },
        handleTick(index, event){
            if (event.target.checked) {
                this.listWork[index].isActive = 1
            } else {
                this.listWork[index].isActive = 0
            }
        }
    },
    watch: {
        todoItem (value) {
            this.listWork.push(value)
        }
    }
}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.todo-container {
    height: 75%;
    overflow: auto;

    .todo-item {
        border-bottom: 1px solid #DCDFE6;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .todo-info {
            div {
                input {
                    margin: 30px 10px 30px 0;
                    cursor: pointer;
                }
                .del {
                    text-decoration: line-through;
                }
            }
        }
        button {
            float: right;
            background-color: red;
            border: none;
            padding: 10px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
        }
    }

    .todo-null {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
    }
}
</style>