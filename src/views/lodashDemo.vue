<template>
    <div>Hello </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: "lodashDemo",
    mounted(){
        this.join()
        this.last()
        this.chunk()
        this.fill()
        this.drop()
        this.sortBy()
        this.has()
        this.pick()
    },
    methods:{
        join(){
            let array = ['a','b','c']
            let result =_.join(array, '~')
            console.log(result)
        },
        last(){
            let array = ['a','b','c']
            let result =_.last(array)
            console.log(result)
        },
        chunk(){
            let array = ['a','b','c','d','e','f','g']
            let result =_.chunk(array,3)
            console.log(result)
        },
        fill(){
            let array = ['a','b','c','d','e','f','g']
            let result =_.fill(array,'*',1,5)
            console.log(result)
        },
        drop(){
            let array = ['a','b','c','d','e','f','g']
            let result =_.drop(array,3)
            console.log(result)
        },
        sortBy(){
            let users = [
                {'name': 'Hpàng', 'age': 23},
                {'name': 'Hpàng', 'age': 24},
                {'name': 'Hoàng', 'age': 22},
                {'name': 'Hyàng', 'age': 25},
            ];
            let result = _.sortBy(users, ['name','age']);
            console.log(result);
        },
        has(){
            let users = {
                name: 'Hoàng',
                age : 23,
                more:{
                    address: "Thai binh"
                }
            }
            let result = _.has(users, 'more.address');
            console.log(result);
        },
        pick(){
            let users = {
                name: 'Hoàng',
                age : 23,
                more:{
                    address: "Thai binh"
                }
            }
            let result = _.pick(users,['name','age']);
            console.log(result);
        },
    }
}
</script>
<style></style>