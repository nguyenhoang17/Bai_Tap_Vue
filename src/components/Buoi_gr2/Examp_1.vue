<template>
<div>
     <div id="head">
        <p><b>This is a simpleRegister Form make using Bootstrap</b></p>
    </div>
    <div id="content">
       
            <input v-model="data.name" type="text" placeholder="Nhập tên">
            <p>{{error.name}}</p>
            <input v-model="data.phone" type="text" placeholder="Nhập sđt">
            <p>{{error.phone}}</p>
            <input v-model="data.pass" type="pass" placeholder="Mật khẩu">
            <p>{{error.pass}}</p>
            <input v-model="data.cfPass" type="pass" placeholder="Nhập lại Mk">
            <p>{{error.cfPass}}</p>
            <button @click="sub()">Submit</button>

            <el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>
   

    </div>
</div>
</template>
<script>

export default {
    name: "Examp_1",
    data() {
        return {
            check: true,
           data: {
                name: '',
                phone: '',
                pass: '',
                cfPass: ''
            },
            error: {
                name: '',
                phone: '',
                pass: '',
                cfPass: ''
            },
        }
    },
    methods: {
        sub(){
            this.check = true;
            if(!this.data.name){
                this.error.name = 'Vui lòng nhập vào trường này!!';
                this.check = false;
            }else{
                this.error.name = ''
            }
            if(!this.data.phone){
                this.error.phone = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else if(isNaN(this.data.phone)==true){
                this.error.phone = 'Vui lòng chỉ nhập số!!'
                this.check = false;
            }else{
                this.error.phone = ''
            }
            if(!this.data.pass){
                this.error.pass = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else if(this.data.pass.length < 8){
                this.error.pass = 'Ít nhất 8 ký tự'
                this.check = false;
            }else{
                this.error.pass = ''
            }
            if(!this.data.cfPass){
                this.error.cfPass = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }
            if (this.data.cfPass !== this.data.pass) {
                this.error.cfPass = 'Mật khẩu chưa trùng khớp!!'
                this.check = false;
                console.log(this.data.cfPass, this.data.pass);
            }
            if (this.check == true) {
                alert('Đăng nhập thành công')
            }
            
        }
    }
}
</script>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #head{
        width: 100%;
        height: 150px;
        background-color: blue;
        color: white;  
        display: flex;
        align-items: center; 
        p{
            margin: auto;
            font-size: 21px;
        }
    }
    #content{
        p{
            color: red;
        }
        input{
            width: 45%;
            border-radius: 30px;
            height: 60px;
            margin: 20px;
            border: 2px solid #ccc;
            padding: 10px;
        }
        // button{
        //     width: 200px;
        //     height: 60px;
        //     display: block;
        //     border-radius: 30px;
        //     background-color: blue;
        //     border: none;
        //     margin-left: 70px;
        //     margin-top: 20px;
        //     font-size: 20px;
        //     color: white;;
        // }
    }
</style>