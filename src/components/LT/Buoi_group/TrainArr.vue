<template>
    <div>
        <button @click="concatEx()">Concat</button>
        <button @click="filterEx()">Filter</button>
        <button @click="findEx()">Find</button>
        <button @click="joinEx()">Join</button>
        <button @click="includeEx()">include</button>
        <button @click="popEx()">pop</button>
        <button @click="shiftEx()">Shift</button>
        <button @click="pushEx()">Push</button>
        <button @click="unShiftEx()">unShift</button>
        <button @click="reverseEx()">Reverse</button>
    </div>
</template>

<script>
  export default {
        name: 'TrainArr',
        data (){
            return {
               arr:[1,2,3,4,5],
               arr2:[6,7,8,9],
               arr3:[
                'Hoang',
                'Hoangga',
                'Hoang12345'
                ],
            }
        },
        methods:{
            //nối mảng
            concatEx(){
                let result = this.arr.concat(this.arr2);
                console.log(result);
            },
            //Tìm ptu mảng
            filterEx(){
                let result = this.arr3.filter(a => a.length >5);
                 console.log(result);
                let result_2 = this.arr3.filter(function(arr3){
                    return arr3.length > 5;
                })
                console.log(result_2);
            },
            findEx(){
                let result = this.arr.find(el => el > 2);
                 console.log(result);
            },
            //Nối các ptu mảng
            joinEx(){
                let result = this.arr3.join("_");
                console.log(result);
            },
            //có ptu hay không trả về bolean
            includeEx(){
                let result = this.arr.includes(2);
                console.log(result);
            },

            // pop xoá tu cuối trong mảng
            popEx(){
                let result = this.arr.pop();
                console.log(result);
                console.log(this.arr);
            },
            //shift xoá ptu đầu tiên
            shiftEx(){
                let result = this.arr.shift();
                console.log(result);
                console.log(this.arr);
            },
            //push thêm ptu ở cuối(có thể push đk nhiều ptu)
            pushEx(){
                console.log('mảng ban đầu:' + this.arr3);
                let result = this.arr3.push('hihi');
                console.log(result);
                console.log(this.arr3);
            },
            //unshift thêm ptu vào đầu(có thể nhiềuu)
            unShiftEx(){
                console.log('mảng ban đầu:' + this.arr3);
                let result = this.arr3.unshift('hihi');
                console.log(result);
                console.log(this.arr3);
            },
            //reverse đảo ngược mảng
             reverseEx(){
                console.log('mảng ban đầu:' + this.arr3);
                let result = this.arr3.reverse();
                console.log(result);
            }

            //////Xử lý chuỗi
            //charAt truyền vào vị trí và lấy ra gtrij vtri đó của chuỗi
            //indexOf tìm 1 từ và lấy ra vị trí của từ đó (từ trái qua phải) indexOf('abc',x) tìm từ vị trí x
            //lastIndexOf tìm 1 từ và lấy ra vị trí của từ đó (từ phải) indexOf('abc',x) tìm từ vị trí x
            //replace thay từ đàu tiên phù hợp trong chuỗi
            //replaceAll thay hết các từ phù hợp trong chuỗi
            //slice cắt chuỗi slice(4,19) lấy từ vị trí 4->19, đi ngược thì dùng giá trị âm (đi từ phải qua và bắt đầu tính là -1)
            //split cắt chuỗi thành mảng dự theo điều kiện (k truyền điều kiện, lấy cả chuỗi thành 1 ptu mảng).chuyền chuỗi rỗng(sparator:"") thì tách từ ký tự thành từng ptu. split(sparator:"", limit:3) cắt giới hạn
            //toLowerCase chuyển hoa thành thường
            //toUpperCase ngược trên
            //trim() loại bỏ khoảng trắng ở 2 đầu chuỗi
            //trimStart() cắt khoarngg trắng ở đầu
            //trỉmEnd() cắt khoảng trắng ở cuối
        }
    }
    
</script>

<style>

</style>